# Invoice OS - Monorepo Structure & Architecture

Comprehensive guide to the Invoice OS monorepo structure and how components interact.

## 🏗️ Overall Architecture

```
invoice-os/
├── frontend/              # Next.js frontend application
│   ├── app/              # App Router pages
│   ├── components/       # React components
│   ├── lib/              # Utilities and hooks
│   └── public/           # Static assets
│
├── server/               # Backend API (future implementation)
│   ├── src/
│   │   ├── controllers/  # API endpoint handlers
│   │   ├── services/     # Business logic
│   │   ├── models/       # Database models
│   │   ├── middlewares/  # Express/Fastify middlewares
│   │   ├── utils/        # Utilities
│   │   └── main.ts       # Application entry point
│   └── package.json
│
├── infra/                # Infrastructure as Code
│   ├── terraform/        # Terraform configurations
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   ├── outputs.tf
│   │   ├── neon.tf       # Neon database setup
│   │   ├── redis.tf      # Redis cache setup
│   │   └── monitoring.tf # Sentry, Datadog setup
│   ├── docker/
│   │   ├── Dockerfile
│   │   ├── docker-compose.yml
│   │   └── nginx/
│   ├── k8s/              # Kubernetes manifests
│   │   ├── deployment.yaml
│   │   ├── service.yaml
│   │   ├── ingress.yaml
│   │   ├── configmap.yaml
│   │   └── secret.yaml
│   └── scripts/          # Deployment scripts
│       ├── deploy.sh
│       ├── backup.sh
│       └── migrate.sh
│
├── scripts/              # Root-level scripts
│   ├── setup.sh          # Initial setup
│   ├── dev.sh            # Development server startup
│   └── test.sh           # Run all tests
│
├── prisma/               # Database layer
│   ├── schema.prisma     # Database schema
│   └── migrations/       # Database migrations
│
├── docs/                 # Documentation
│   ├── API.md            # API documentation
│   ├── ARCHITECTURE.md   # System design
│   ├── DATABASE.md       # Database schema details
│   └── CONTRIBUTING.md   # Contributing guide
│
├── .github/              # GitHub configuration
│   └── workflows/        # GitHub Actions CI/CD
│       ├── test.yml
│       ├── deploy.yml
│       └── security.yml
│
├── package.json          # Root monorepo configuration
├── .env.example          # Environment template
├── INVOICE_OS_README.md  # Main documentation
├── DEPLOYMENT_GUIDE.md   # Deployment instructions
└── MONOREPO_STRUCTURE.md # This file
```

## 📦 Frontend Structure (`app/`)

### App Router Organization

```
app/
├── dashboard/                    # Protected dashboard routes
│   ├── layout.tsx               # Dashboard layout with sidebar
│   ├── page.tsx                 # Main dashboard overview
│   │
│   ├── invoices/
│   │   ├── page.tsx             # Invoices list
│   │   ├── [id]/
│   │   │   ├── page.tsx         # Invoice detail
│   │   │   └── edit/page.tsx    # Edit invoice
│   │   └── new/page.tsx         # Create invoice
│   │
│   ├── payments/
│   │   ├── page.tsx             # Payments list
│   │   ├── [id]/page.tsx        # Payment detail
│   │   └── reconciliation/      # Payment reconciliation
│   │
│   ├── disputes/
│   │   ├── page.tsx             # Disputes list
│   │   ├── [id]/page.tsx        # Dispute detail
│   │   └── templates/           # Response templates
│   │
│   ├── settings/
│   │   ├── page.tsx             # Settings main
│   │   ├── team/page.tsx        # Team management
│   │   ├── integrations/page.tsx # Integrations
│   │   ├── billing/page.tsx     # Billing management
│   │   └── security/page.tsx    # Security settings
│   │
│   └── reports/
│       ├── page.tsx             # Reports dashboard
│       ├── cashflow/page.tsx    # Cashflow analysis
│       ├── aging/page.tsx       # Aging report
│       └── export/              # Data export
│
├── auth/                        # Authentication routes
│   ├── login/page.tsx           # Login page
│   ├── signup/page.tsx          # Signup page
│   ├── forgot-password/page.tsx # Password reset
│   └── callback/                # OAuth callbacks
│
├── api/                         # API routes
│   ├── auth/
│   │   ├── route.ts             # Auth endpoints
│   │   └── [...nextauth].ts     # NextAuth configuration
│   ├── invoices/
│   │   ├── route.ts             # Invoice CRUD
│   │   ├── [id]/route.ts        # Individual invoice
│   │   └── [id]/send/route.ts   # Send invoice
│   ├── payments/
│   │   ├── route.ts             # Payment endpoints
│   │   └── [id]/refund/route.ts # Refund endpoint
│   ├── webhooks/
│   │   ├── stripe/route.ts      # Stripe webhooks
│   │   └── paypal/route.ts      # PayPal webhooks
│   └── health/route.ts          # Health check endpoint
│
├── page.tsx                     # Home/landing page
├── layout.tsx                   # Root layout
├── globals.css                  # Global styles
└── favicon.ico
```

### Components Organization

```
components/
├── dashboard/                   # Dashboard-specific components
│   ├── nav.tsx                  # Top navigation bar
│   ├── sidebar.tsx              # Left sidebar menu
│   ├── header.tsx               # Page header
│   │
│   ├── invoices/                # Invoice components
│   │   ├── invoices-table.tsx
│   │   ├── invoice-builder.tsx
│   │   ├── invoice-filters.tsx
│   │   ├── invoice-preview.tsx
│   │   └── invoice-stats.tsx
│   │
│   ├── payments/                # Payment components
│   │   ├── payments-table.tsx
│   │   ├── payment-stats.tsx
│   │   ├── payment-form.tsx
│   │   └── payment-methods.tsx
│   │
│   ├── disputes/                # Dispute components
│   │   ├── disputes-table.tsx
│   │   ├── dispute-stats.tsx
│   │   ├── dispute-form.tsx
│   │   └── dispute-timeline.tsx
│   │
│   ├── settings/                # Settings components
│   │   ├── tenant-settings.tsx
│   │   ├── team-settings.tsx
│   │   ├── integrations-settings.tsx
│   │   ├── billing-settings.tsx
│   │   └── security-settings.tsx
│   │
│   ├── reports/                 # Reporting components
│   │   ├── cashflow-chart.tsx
│   │   ├── aging-report.tsx
│   │   ├── payment-trends.tsx
│   │   └── export-button.tsx
│   │
│   ├── quick-actions.tsx        # Quick action buttons
│   ├── recent-invoices.tsx      # Recent invoices widget
│   └── notifications.tsx        # Notification bell
│
├── ui/                          # Reusable UI components
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   ├── textarea.tsx
│   ├── label.tsx
│   ├── badge.tsx
│   ├── tabs.tsx
│   ├── table.tsx
│   ├── dropdown-menu.tsx
│   ├── select.tsx
│   ├── form.tsx
│   ├── toggle.tsx
│   ├── dialog.tsx               # Modal dialog
│   ├── popover.tsx              # Popover menu
│   ├── tooltip.tsx              # Tooltips
│   └── pagination.tsx           # Table pagination
│
├── auth/                        # Authentication components
│   ├── login-form.tsx
│   ├── signup-form.tsx
│   ├── oauth-buttons.tsx
│   └── password-reset-form.tsx
│
├── navbar.tsx                   # Main navigation
├── footer.tsx                   # Footer
├── theme-provider.tsx           # Theme context
└── error-boundary.tsx           # Error handling
```

### Utilities & Hooks

```
lib/
├── utils.ts                     # General utilities (cn, formatting)
├── hooks/
│   ├── useAuth.ts              # Authentication hook
│   ├── useInvoices.ts          # Invoices data fetching
│   ├── usePayments.ts          # Payments data fetching
│   ├── usePagination.ts        # Pagination logic
│   ├── useFilters.ts           # Filter state management
│   └── useNotifications.ts     # Notification handling
├── api/
│   ├── client.ts               # API client configuration
│   ├── invoices.ts             # Invoice API calls
│   ├── payments.ts             # Payment API calls
│   ├── disputes.ts             # Dispute API calls
│   └── auth.ts                 # Authentication API calls
├── validators/
│   ├── invoice.ts              # Invoice validation schemas
│   ├── payment.ts              # Payment validation schemas
│   └── auth.ts                 # Auth validation schemas
├── formatting/
│   ├── currency.ts             # Currency formatting
│   ├── date.ts                 # Date formatting
│   └── numbers.ts              # Number formatting
└── constants.ts                # Global constants
```

## 🛠️ Backend Structure (`server/`)

### Future Backend Organization

```
server/
├── src/
│   ├── main.ts                  # Application entry point
│   ├── app.module.ts            # Root module (NestJS)
│   │
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.module.ts
│   │   ├── jwt.strategy.ts      # JWT authentication
│   │   ├── oauth.strategy.ts    # OAuth implementation
│   │   └── guards/
│   │       ├── jwt.guard.ts
│   │       └── rbac.guard.ts
│   │
│   ├── invoices/
│   │   ├── invoices.controller.ts
│   │   ├── invoices.service.ts
│   │   ├── invoices.module.ts
│   │   ├── dto/
│   │   │   ├── create-invoice.dto.ts
│   │   │   ├── update-invoice.dto.ts
│   │   │   └── invoice-filter.dto.ts
│   │   └── entities/
│   │       └── invoice.entity.ts
│   │
│   ├── payments/
│   │   ├── payments.controller.ts
│   │   ├── payments.service.ts
│   │   ├── payments.module.ts
│   │   ├── stripe.service.ts    # Stripe integration
│   │   ├── paypal.service.ts    # PayPal integration
│   │   ├── reconciliation.service.ts # Payment reconciliation
│   │   └── dunning.service.ts   # Dunning engine
│   │
│   ├── disputes/
│   │   ├── disputes.controller.ts
│   │   ├── disputes.service.ts
│   │   ├── disputes.module.ts
│   │   └── ai-responder.service.ts
│   │
│   ├── ai/                      # AI features
│   │   ├── ai.controller.ts
│   │   ├── ai.service.ts
│   │   ├── ai.module.ts
│   │   ├── ocr.service.ts       # OCR integration
│   │   ├── extraction.service.ts # Data extraction
│   │   ├── suggestions.service.ts # Suggestions
│   │   └── negotiation.service.ts # Negotiation
│   │
│   ├── webhooks/
│   │   ├── webhooks.controller.ts
│   │   ├── webhooks.service.ts
│   │   ├── webhooks.module.ts
│   │   └── webhook-dispatcher.service.ts
│   │
│   ├── queue/                   # Background jobs
│   │   ├── queue.module.ts
│   │   ├── invoice-queue.ts     # Invoice jobs
│   │   ├── payment-queue.ts     # Payment jobs
│   │   ├── email-queue.ts       # Email jobs
│   │   └── pdf-queue.ts         # PDF generation
│   │
│   ├── graphql/
│   │   ├── schema.graphql       # GraphQL schema
│   │   ├── resolvers/
│   │   │   ├── invoice.resolver.ts
│   │   │   ├── payment.resolver.ts
│   │   │   └── dispute.resolver.ts
│   │   └── types/
│   │       ├── invoice.type.ts
│   │       ├── payment.type.ts
│   │       └── dispute.type.ts
│   │
│   ├── common/
│   │   ├── middleware/
│   │   │   ├── tenant.middleware.ts  # Tenant isolation
│   │   │   ├── error.middleware.ts   # Error handling
│   │   │   └── logging.middleware.ts # Request logging
│   │   ├── filters/
│   │   │   └── http-exception.filter.ts
│   │   ├── interceptors/
│   │   │   └── transform.interceptor.ts
│   │   ├── decorators/
│   │   │   ├── current-user.decorator.ts
│   │   │   └── current-tenant.decorator.ts
│   │   └── utils/
│   │       ├── logger.ts
│   │       ├── encryption.ts
│   │       └── validators.ts
│   │
│   └── config/
│       ├── database.config.ts
│       ├── jwt.config.ts
│       ├── stripe.config.ts
│       └── redis.config.ts
│
├── test/
│   ├── e2e/
│   │   ├── auth.e2e.spec.ts
│   │   ├── invoices.e2e.spec.ts
│   │   └── payments.e2e.spec.ts
│   └── unit/
│       ├── invoice.service.spec.ts
│       ├── payment.service.spec.ts
│       └── auth.service.spec.ts
│
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

## 🗄️ Database Layer (`prisma/`)

### Prisma Schema Organization

```
prisma/
├── schema.prisma
│   ├── Tenant model
│   ├── User model
│   ├── Session model
│   ├── Invoice model
│   ├── LineItem model
│   ├── Template model
│   ├── Recurring model
│   ├── Subscription model
│   ├── Payment model
│   ├── PaymentRule model
│   ├── Escrow model
│   ├── Dispute model
│   ├── Comment model
│   ├── Attachment model
│   ├── AuditLog model
│   ├── AiAction model
│   ├── Webhook model
│   ├── ApiKey model
│   ├── Notification model
│   └── Metric model
│
├── migrations/
│   ├── 20240115000000_init/migration.sql
│   ├── 20240120000000_add_recurring/migration.sql
│   └── ...
│
└── seed.ts                      # Database seeding script
```

## 🚀 Infrastructure (`infra/`)

### Terraform Configuration

```
infra/
├── terraform/
│   ├── main.tf                  # Main configuration
│   ├── variables.tf             # Input variables
│   ├── outputs.tf               # Output values
│   ├── provider.tf              # Provider setup
│   │
│   ├── neon.tf                  # Neon database
│   │   ├── Database creation
│   │   ├── Connection pooling
│   │   └── Backups
│   │
│   ├── redis.tf                 # Redis setup
│   │   ├── Cache cluster
│   │   ├── Replication
│   │   └── Backup
│   │
│   ├── monitoring.tf            # Observability
│   │   ├── Sentry project
│   │   ├── CloudWatch logs
│   │   └── Prometheus
│   │
│   ├── cdn.tf                   # CDN setup
│   │   └── CloudFront
│   │
│   ├── security.tf              # Security
│   │   ├── VPC
│   │   ├── Security groups
│   │   └── WAF rules
│   │
│   └── terraform.tfvars         # Variable values
│
├── docker/
│   ├── Dockerfile               # Production image
│   ├── Dockerfile.dev           # Development image
│   ├── docker-compose.yml       # Local development
│   ├── docker-compose.prod.yml  # Production setup
│   └── nginx/
│       ├── nginx.conf
│       ├── ssl/                 # SSL certificates
│       └── conf.d/
│           └── default.conf
│
├── k8s/
│   ├── namespace.yaml           # Kubernetes namespace
│   ├── configmap.yaml           # Configuration
│   ├── secret.yaml              # Secrets
│   ├── deployment.yaml          # App deployment
│   ├── service.yaml             # Service
│   ├── ingress.yaml             # Ingress rules
│   ├── hpa.yaml                 # Horizontal Pod Autoscaler
│   ├── pdb.yaml                 # Pod Disruption Budget
│   ├── serviceaccount.yaml      # Service account
│   ├── rbac.yaml                # Role-based access
│   └── db/
│       ├── statefulset.yaml     # Database (if self-hosted)
│       ├── pvc.yaml             # Persistent volume
│       └── service.yaml         # Database service
│
└── scripts/
    ├── deploy.sh                # Main deployment
    ├── rollback.sh              # Rollback script
    ├── backup.sh                # Database backup
    ├── restore.sh               # Restore backup
    ├── health-check.sh          # Health verification
    └── monitoring.sh            # Monitoring setup
```

## 🔄 CI/CD Pipeline

### GitHub Actions Workflows

```
.github/
├── workflows/
│   ├── test.yml                 # Test on PR
│   │   ├── Lint
│   │   ├── TypeScript check
│   │   ├── Unit tests
│   │   └── Integration tests
│   │
│   ├── deploy.yml               # Deploy on merge
│   │   ├── Build
│   │   ├── Push to registry
│   │   ├── Deploy to staging
│   │   ├── Run migrations
│   │   └── Smoke tests
│   │
│   ├── security.yml             # Security scan
│   │   ├── Dependency check
│   │   ├── SAST scan
│   │   └── Container scan
│   │
│   └── performance.yml          # Performance test
│       ├── Load test
│       ├── Lighthouse check
│       └── Bundle size check
│
└── CODEOWNERS                   # Code review assignments
```

## 📝 Documentation

### Documentation Files

```
docs/
├── API.md                       # REST & GraphQL API docs
├── ARCHITECTURE.md              # System design
├── DATABASE.md                  # Schema documentation
├── DEPLOYMENT.md                # Deployment guide
├── CONTRIBUTING.md              # Contributing guidelines
├── TROUBLESHOOTING.md           # Common issues
├── SECURITY.md                  # Security guidelines
└── TESTING.md                   # Testing strategies
```

## 📊 Data Flow

### Invoice Creation Flow

```
User Input (Dashboard)
    ↓
Frontend Validation (Zod)
    ↓
API Request (/api/invoices)
    ↓
NextAuth Session Check
    ↓
Backend Service (invoices.service.ts)
    ↓
Prisma Insert (Invoice + LineItems)
    ↓
Event Emission (invoice.created)
    ↓
Webhook Dispatch
    ↓
AI Processing (optional)
    ↓
Notification Send
    ↓
Response to Frontend
    ↓
UI Update (React Query)
```

### Payment Processing Flow

```
Invoice Created
    ↓
Payment Link Generated
    ↓
Customer Clicks Link
    ↓
Stripe Payment Intent Created
    ↓
Customer Completes Payment
    ↓
Webhook: payment_intent.succeeded
    ↓
Payment Record Created
    ↓
Reconciliation Check
    ↓
Invoice Status Update
    ↓
Notifications Sent
    ↓
Accounting Entry
```

## 🔐 Security Layers

```
┌─ Frontend ─────────────────────────────┐
│ - XSS protection (React)               │
│ - CSRF tokens on forms                 │
│ - Input validation (Zod)               │
└────────────────────────────────────────┘
         ↓ HTTPS/TLS
┌─ API Gateway ──────────────────────────┐
│ - Rate limiting                        │
│ - CORS validation                      │
│ - API key validation                   │
└────────────────────────────────────────┘
         ↓
┌─ Authentication ───────────────────────┐
│ - JWT verification                     │
│ - Tenant isolation                     │
│ - Role-based access                    │
└────────────────────────────────────────┘
         ↓
┌─ Database ─────────────────────────────┐
│ - Row-level security (RLS)             │
│ - SQL injection prevention (Prisma)    │
│ - Encryption at rest                   │
│ - Audit logging                        │
└────────────────────────────────────────┘
```

## 📦 Dependencies Overview

### Frontend Dependencies
- Next.js 16, React 19, TypeScript
- Tailwind CSS 4, Framer Motion
- Radix UI components
- React Query (data fetching)
- React Hook Form (forms)
- NextAuth (authentication)
- Prisma Client (database)

### Backend Dependencies (Future)
- NestJS or Fastify (framework)
- Prisma ORM (database)
- GraphQL Apollo
- Bull/BullMQ (queues)
- Redis (caching)
- Stripe SDK
- OpenAI SDK
- Socket.io (real-time)

### DevOps Tools
- Docker, Docker Compose
- Kubernetes
- Terraform
- GitHub Actions
- Sentry (error tracking)
- Prometheus (metrics)
- Grafana (dashboards)

## 🚦 Development Workflow

### Local Development
```bash
# 1. Setup
npm install
npm run db:migrate:dev
npm run db:seed

# 2. Start dev server
npm run dev

# 3. Open frontend
# http://localhost:3000

# 4. Manage database
npx prisma studio

# 5. Run tests
npm run test:watch
```

### Code Quality
```bash
# Linting
npm run lint

# Type checking
npm run type-check

# Formatting
npm run format

# Full check
npm run check
```

## 🔗 Integration Points

### Frontend ↔ Backend
- REST APIs (`/api/*`)
- GraphQL endpoints (`/graphql`)
- WebSocket connection
- Webhooks

### External Services
- Stripe API
- SendGrid (emails)
- AWS S3 (storage)
- OpenAI API
- Neon (database)
- Redis Cloud
- Sentry

## 📈 Scalability Considerations

### Horizontal Scaling
- Stateless API servers
- Database connection pooling
- Redis session store
- Distributed job queue

### Vertical Scaling
- Database optimization
- Caching strategies
- Image/asset optimization
- Code splitting

## 🧪 Testing Strategy

```
Unit Tests (Jest)
  ├── Services
  ├── Utilities
  ├── Validators
  └── Hooks

Integration Tests (Supertest)
  ├── API endpoints
  ├── Database operations
  └── Payment flows

E2E Tests (Playwright)
  ├── User workflows
  ├── Invoice creation
  ├── Payment processing
  └── Dispute resolution
```

---

**Last Updated**: January 2024
