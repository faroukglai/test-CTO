# Invoice OS - Deployment Guide

Complete guide for deploying Invoice OS to production environments.

## Prerequisites

- Node.js 18+
- Docker & Docker Compose (optional)
- Git
- PostgreSQL database (Neon recommended for serverless)
- Stripe account
- Domain name
- SSL certificate

## 1. Database Setup

### Option A: Neon (Recommended - Serverless)

1. Create Neon account at [https://neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string

```bash
# Set environment variables
export DATABASE_URL="postgresql://user:password@host/dbname?sslmode=require"
export DIRECT_DATABASE_URL="postgresql://user:password@host/dbname" # For migrations
```

### Option B: Self-Hosted PostgreSQL

```bash
# Create database
createdb invoice_os_prod

# Connection string
export DATABASE_URL="postgresql://user:password@localhost:5432/invoice_os_prod"
```

## 2. Environment Configuration

### Create Production `.env.production`

```bash
# Database
DATABASE_URL="postgresql://..."
DIRECT_DATABASE_URL="postgresql://..."

# Next.js
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your-very-long-random-secret-min-32-chars"
NODE_ENV="production"

# API
NEXT_PUBLIC_API_URL="https://api.yourdomain.com"
NEXT_PUBLIC_APP_URL="https://yourdomain.com"

# Authentication
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# Stripe
STRIPE_PUBLISHABLE_KEY="pk_live_..."
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Email
SMTP_HOST="smtp.sendgrid.net"
SMTP_PORT="587"
SMTP_USER="apikey"
SMTP_PASSWORD="SG...."
SMTP_FROM="noreply@yourdomain.com"

# Redis (for queues and caching)
REDIS_URL="redis://..."

# Observability
SENTRY_DSN="https://..."
LOG_LEVEL="info"
```

## 3. Build & Test

### Local Build

```bash
# Install dependencies
npm ci

# Build
npm run build

# Test build
npm run start
```

### Database Migrations

```bash
# Run migrations
npx prisma migrate deploy

# Verify with Prisma Studio (local only)
npx prisma studio
```

## 4. Deployment Options

### Option A: Vercel (Recommended for Next.js)

1. **Connect GitHub repository**
   - Go to [https://vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
   - Authorize Vercel

2. **Configure environment variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add all production environment variables
   - Mark sensitive ones as "Sensitive"

3. **Configure Prisma**
   - Set `DIRECT_DATABASE_URL` as sensitive environment variable
   - Add build command: `npx prisma migrate deploy && npm run build`

4. **Deploy**
   - Click "Deploy"
   - Monitor build logs
   - Check deployment URL

5. **Post-Deployment**
   - Verify all environment variables loaded
   - Test dashboard access
   - Check database connection

### Option B: Docker + VPS/Cloud

#### Build Docker Image

```bash
# Create Dockerfile
cat > Dockerfile << 'EOF'
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm ci

# Build application
RUN npm run build

# Copy public files
COPY public ./public

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start application
CMD ["npm", "start"]
EOF
```

#### Build and Push

```bash
# Build image
docker build -t invoice-os:latest .

# Tag for registry
docker tag invoice-os:latest your-registry/invoice-os:latest

# Push to registry
docker push your-registry/invoice-os:latest
```

#### Deploy with Docker Compose

```yaml
version: '3.8'

services:
  app:
    image: your-registry/invoice-os:latest
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgresql://...
      NEXTAUTH_URL: https://yourdomain.com
      NEXTAUTH_SECRET: ${NEXTAUTH_SECRET}
      NODE_ENV: production
    depends_on:
      - db
    restart: unless-stopped
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"

  db:
    image: postgres:15-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: invoice_os
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./ssl:/etc/nginx/ssl:ro
    depends_on:
      - app
    restart: unless-stopped

volumes:
  postgres_data:
```

```bash
# Deploy
docker-compose up -d

# Check logs
docker-compose logs -f app

# Stop
docker-compose down
```

### Option C: Kubernetes

#### Create ConfigMap and Secret

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: invoice-os-config
data:
  NODE_ENV: "production"
  NEXT_PUBLIC_API_URL: "https://api.yourdomain.com"

---
apiVersion: v1
kind: Secret
metadata:
  name: invoice-os-secrets
type: Opaque
stringData:
  DATABASE_URL: postgresql://...
  NEXTAUTH_SECRET: your-secret-key
  STRIPE_SECRET_KEY: sk_live_...
```

#### Create Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: invoice-os
spec:
  replicas: 3
  selector:
    matchLabels:
      app: invoice-os
  template:
    metadata:
      labels:
        app: invoice-os
    spec:
      containers:
      - name: invoice-os
        image: your-registry/invoice-os:latest
        ports:
        - containerPort: 3000
        envFrom:
        - configMapRef:
            name: invoice-os-config
        - secretRef:
            name: invoice-os-secrets
        resources:
          requests:
            cpu: 100m
            memory: 256Mi
          limits:
            cpu: 500m
            memory: 512Mi
        livenessProbe:
          httpGet:
            path: /api/health
            port: 3000
          initialDelaySeconds: 10
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /api/health
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5

---
apiVersion: v1
kind: Service
metadata:
  name: invoice-os
spec:
  selector:
    app: invoice-os
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: LoadBalancer
```

```bash
# Deploy
kubectl apply -f deployment.yaml

# Check status
kubectl get pods
kubectl logs -f deployment/invoice-os
```

## 5. SSL/TLS Configuration

### Using Let's Encrypt with Certbot

```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Generate certificate
sudo certbot certonly --nginx -d yourdomain.com

# Auto-renewal
sudo certbot renew --dry-run
```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com;
    
    # SSL certificates
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    
    # SSL security
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    
    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Proxy to application
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 6. Post-Deployment Checks

### Health Checks

```bash
# Check API endpoint
curl -I https://yourdomain.com/api/health

# Check database connection
curl https://yourdomain.com/api/db-health

# Check authentication
curl https://yourdomain.com/api/auth/session
```

### Database Verification

```bash
# Connect to production database
psql $DATABASE_URL

# Check tables
\dt

# Check migrations status
SELECT * FROM "_prisma_migrations";
```

### Application Logs

```bash
# For Vercel
vercel logs

# For Docker
docker logs <container-id>

# For Kubernetes
kubectl logs -f deployment/invoice-os
```

## 7. Monitoring & Maintenance

### Set Up Monitoring

```bash
# Install monitoring tools
npm install -D @sentry/nextjs prometheus-client

# Configure Sentry
echo 'export default {
  sentry: {
    dsn: process.env.SENTRY_DSN,
    environment: process.env.NODE_ENV,
  }
}' > sentry.client.config.js
```

### Database Maintenance

```bash
# Regular backups (Neon handles this automatically)
# For self-hosted PostgreSQL:

# Daily backup
0 2 * * * pg_dump $DATABASE_URL | gzip > /backups/invoice_os_$(date +\%Y\%m\%d).sql.gz

# Clean old backups
find /backups -name "*.sql.gz" -mtime +30 -delete
```

### Performance Optimization

```bash
# Enable caching headers
cache-control: public, max-age=3600

# Enable compression
gzip on;
gzip_types text/plain text/css application/json application/javascript;
gzip_level 6;

# Database connection pooling
PGSQL_CONNECTION_LIMIT=20
```

## 8. Scaling Strategy

### Horizontal Scaling

```yaml
# Scale to 5 replicas
kubectl scale deployment invoice-os --replicas=5

# Auto-scaling based on CPU
kubectl autoscale deployment invoice-os --min=3 --max=10 --cpu-percent=70
```

### Database Scaling

For Neon:
- Automatic scaling up to requested compute size
- Read replicas for reporting

For PostgreSQL:
- Implement read replicas
- Use connection pooling (PgBouncer)
- Archive old data to separate storage

## 9. CI/CD Pipeline

### GitHub Actions Example

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - run: npm ci
      
      - run: npm run lint
      
      - run: npm run type-check
      
      - run: npm run build
      
      - run: npm run test
      
      - name: Deploy to Vercel
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
        run: vercel --prod --token=$VERCEL_TOKEN
```

## 10. Troubleshooting

### Application won't start
```bash
# Check logs
docker logs -f <container>
npm run build  # Try rebuilding locally

# Check env variables
env | grep DATABASE_URL
```

### Database connection errors
```bash
# Test connection
psql $DATABASE_URL -c "SELECT 1"

# Check connection string format
# postgresql://user:password@host:5432/dbname?sslmode=require
```

### High memory usage
```bash
# Enable Node.js heap snapshots
NODE_OPTIONS=--max-old-space-size=512

# Profile application
node --prof app.js
```

## Support & Resources

- [Vercel Deployment Guide](https://vercel.com/docs)
- [Docker Documentation](https://docs.docker.com)
- [Kubernetes Documentation](https://kubernetes.io/docs)
- [Neon Documentation](https://neon.tech/docs)
- [Nginx Documentation](https://nginx.org/en/docs)

---

**Last Updated**: January 2024
