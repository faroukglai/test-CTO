# Invoice OS - Enterprise-Grade On-Demand Invoice Management Platform

A modern, production-ready, multi-tenant SaaS platform for invoice management, payment processing, and billing automation. Built with TypeScript, React, Next.js, Node.js, and Prisma.

## 🎯 Quick Start

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (local or Neon serverless)
- Git

### Local Development

1. **Clone and install dependencies:**

```bash
git clone <repository>
cd invoice-os
npm install
```

2. **Set up environment variables:**

```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

3. **Set up the database:**

```bash
# Run migrations
npx prisma migrate dev --name init

# Seed with sample data
npx prisma db seed
```

4. **Start the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
invoice-os/
├── app/                    # Next.js App Router
│   ├── dashboard/         # Dashboard pages and layouts
│   │   ├── invoices/      # Invoice management
│   │   ├── payments/      # Payment tracking
│   │   ├── disputes/      # Dispute management
│   │   ├── settings/      # Configuration
│   │   ├── layout.tsx     # Dashboard layout
│   │   └── page.tsx       # Main dashboard
│   ├── api/               # API routes (future backend integration)
│   ├── auth/              # Authentication pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── dashboard/         # Dashboard-specific components
│   │   ├── sidebar.tsx    # Navigation sidebar
│   │   ├── nav.tsx        # Top navigation
│   │   ├── invoices-table.tsx
│   │   ├── invoice-builder.tsx
│   │   ├── payments-table.tsx
│   │   ├── disputes-table.tsx
│   │   └── settings/      # Settings components
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── badge.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── select.tsx
│   │   └── form.tsx
│   └── theme-provider.tsx # Theme management
├── lib/                   # Utility functions
│   └── utils.ts
├── prisma/                # Database layer
│   ├── schema.prisma      # Database schema
│   └── migrations/        # Migration files
├── public/                # Static assets
├── .env.example           # Environment variables template
├── .gitignore            # Git ignore rules
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── package.json          # Dependencies and scripts

```

## 🗄️ Database Schema

The Prisma schema includes comprehensive models for:

### Core Models
- **Tenant** - Multi-tenant isolation and configuration
- **User** - User management with role-based access
- **Session** - Authentication session management

### Invoice Management
- **Invoice** - Invoice data with full lifecycle tracking
- **Template** - Reusable invoice templates
- **LineItem** - Invoice line items with tax information
- **Recurring** - Recurring invoice configuration
- **Subscription** - Subscription management

### Payments & Routing
- **Payment** - Payment transactions and history
- **PaymentRule** - Dynamic payment routing rules
- **Escrow** - Escrow and milestone management

### Disputes & Support
- **Dispute** - Invoice disputes and resolutions
- **Comment** - Collaboration and commenting
- **Attachment** - File attachments for invoices and disputes

### Audit & AI
- **AuditLog** - Complete audit trail
- **AiAction** - AI suggestions and automations
- **Metric** - Analytics and metrics tracking

### Integrations
- **Webhook** - Outgoing webhook configuration
- **ApiKey** - API key management
- **Notification** - User notifications

## 🎨 Dashboard Features

### Main Dashboard
- Real-time financial overview
- Invoice statistics (total, pending, paid, overdue)
- 30/60/90-day cashflow forecasting
- Recent invoices widget
- Quick action buttons

### Invoices Page
- Comprehensive invoice table with filtering
- Status badges (draft, sent, paid, overdue, disputed)
- Invoice creation wizard with drag-and-drop builder
- Invoice preview and PDF export
- Email sending functionality
- Batch operations

### Payments Page
- Payment transaction tracking
- Payment method indicators
- Status filtering (pending, processing, succeeded, failed)
- Refund management
- Receipt download

### Disputes Page
- Open dispute tracking
- Priority levels (low, medium, high, critical)
- Resolution workflow
- Comment-based collaboration
- Credit note issuance

### Settings
- **Tenant Settings**: Company information, tax ID, currency, timezone
- **Team Settings**: User management and invitation
- **Integrations**: Payment gateway and service connections
- **Billing**: Plan management and upgrade options
- **Security**: 2FA, API keys, session management

## 🔐 Authentication & Security

### Current Structure (Ready for Implementation)
- JWT-based session management
- OAuth providers (Google, GitHub)
- SAML/OIDC support for enterprise
- Multi-factor authentication (2FA)
- Role-based access control (admin, accountant, approver, payer, viewer)

### Security Features
- HTTPS everywhere
- SQL injection prevention via Prisma
- XSS protection via React
- CSRF tokens on forms
- API key management with hashing
- Audit logging for all actions
- E2E encryption support for sensitive documents

## 💳 Payment Processing

### Integration Architecture (Ready for Backend Implementation)

```typescript
// Payment Flow
Invoice → Payment Intent → Payment Processor → Settlement Account

// Supported Methods
- Stripe (Primary)
- PayPal
- ACH/Bank Transfer
- SEPA
- Card processors
```

### Features
- Payment routing rules
- Escrow and milestone-based releases
- Proration and credit handling
- Automatic reconciliation
- Dunning engine for failed payments

## 🤖 AI Features (Backend Implementation Ready)

### Implemented Hooks
1. **OCR & Extraction** - Extract invoice data from PDFs
2. **Smart Suggestions** - Category and vendor matching
3. **Negotiation Assistant** - Generate client-facing messages
4. **Dispute Responder** - Draft automatic responses
5. **Dunning Optimizer** - ML-based retry timing

### Data Pipeline
```
Vendor Invoice → OCR → LLM Analysis → Auto-fill Fields → Suggestion Review → Manual Approval
```

## 📊 Reporting & Analytics

### Pre-built Reports
- Monthly invoice volume
- Payment collection rates
- Overdue aging analysis
- Customer payment patterns
- Revenue recognition timeline
- Dispute resolution metrics

### Custom Metrics
- API usage tracking
- Error rate monitoring
- Performance metrics
- Cost per transaction

## 🚀 Deployment

### Environment-Specific Configs

#### Development
```bash
DATABASE_URL="postgresql://localhost:5432/invoice_os_dev"
NEXTAUTH_SECRET="dev-secret-key-min-32-chars"
NODE_ENV="development"
```

#### Staging
```bash
DATABASE_URL="postgresql://neon-connection-string"
NEXTAUTH_SECRET="staging-secret-key"
NODE_ENV="staging"
STRIPE_MODE="test"
```

#### Production
```bash
DATABASE_URL="postgresql://neon-production-connection-string"
NEXTAUTH_SECRET="production-secret-key"
NODE_ENV="production"
STRIPE_MODE="live"
```

### Docker Deployment

```bash
# Build Docker image
npm run docker:build

# Run container
npm run docker:run

# Or use docker-compose for full stack
docker-compose up -d
```

### Neon Database Setup

1. Create a Neon project at [https://neon.tech](https://neon.tech)
2. Copy connection string to `DATABASE_URL`
3. For migrations, use `DIRECT_DATABASE_URL` (without pooling)

```bash
# Run migrations
DIRECT_DATABASE_URL="your-connection-string" npx prisma migrate deploy
```

## 📦 API Endpoints (Backend Structure)

### Invoices
```
POST   /api/invoices          - Create invoice
GET    /api/invoices          - List invoices (with filtering)
GET    /api/invoices/:id      - Get invoice details
PUT    /api/invoices/:id      - Update invoice
DELETE /api/invoices/:id      - Delete invoice
POST   /api/invoices/:id/send - Send invoice
```

### Payments
```
GET    /api/payments          - List payments
POST   /api/payments          - Create payment
GET    /api/payments/:id      - Get payment details
POST   /api/payments/:id/refund - Refund payment
```

### Disputes
```
GET    /api/disputes          - List disputes
POST   /api/disputes          - File dispute
PUT    /api/disputes/:id      - Update dispute
POST   /api/disputes/:id/resolve - Resolve dispute
```

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### End-to-End Tests
```bash
npm run test:e2e
```

### Test Coverage
```bash
npm run test:coverage
```

## 📝 Prisma Migrations

### Create Migration
```bash
npx prisma migrate dev --name <migration_name>
```

### Apply Migrations
```bash
npx prisma migrate deploy
```

### Reset Database (Development Only)
```bash
npx prisma migrate reset
```

### View Migrations
```bash
npx prisma migrate status
```

## 🔧 Configuration Files

### Key Configuration Files
- **next.config.ts** - Next.js build configuration
- **tsconfig.json** - TypeScript compiler options
- **tailwind.config.ts** - Tailwind CSS theme customization
- **components.json** - ShadCN UI configuration
- **postcss.config.mjs** - PostCSS plugin configuration

## 📚 Environment Variables Reference

| Variable | Purpose | Required |
|----------|---------|----------|
| `DATABASE_URL` | PostgreSQL connection | Yes |
| `NEXTAUTH_SECRET` | Session encryption key | Yes (32+ chars) |
| `NEXTAUTH_URL` | Auth callback URL | Yes |
| `STRIPE_PUBLISHABLE_KEY` | Stripe payments | No (for payments) |
| `STRIPE_SECRET_KEY` | Stripe backend | No (for payments) |
| `OPENAI_API_KEY` | AI features | No (for AI) |

## 🔗 Multi-Tenancy Implementation

### Tenant Isolation
```typescript
// All queries filtered by tenant
const invoices = await prisma.invoice.findMany({
  where: {
    tenantId: currentTenant.id
  }
})

// Row-level security
WHERE tenant_id = current_user_tenant_id
```

### Tenant Onboarding Flow
1. User signup with email
2. Create tenant with unique slug
3. Add encryption key for tenant
4. Initialize default template
5. Setup default payment rules

## 🎯 Next Steps for Backend Implementation

1. **Authentication Service**
   - Implement OAuth flows
   - JWT token management
   - Session handling

2. **Invoice Service**
   - PDF generation
   - Email delivery
   - Webhook triggers

3. **Payment Service**
   - Stripe integration
   - Payment routing engine
   - Reconciliation

4. **AI Pipeline**
   - OCR integration
   - LLM API calls
   - Caching strategy

5. **Background Jobs**
   - Dunning automation
   - Webhook retries
   - Report generation

6. **Monitoring & Observability**
   - Sentry error tracking
   - OpenTelemetry tracing
   - Prometheus metrics
   - Grafana dashboards

## 📞 Support & Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Stripe API Documentation](https://stripe.com/docs/api)
- [Neon Documentation](https://neon.tech/docs)

### Useful Commands
```bash
# Database
npm run db:migrate          # Run migrations
npm run db:seed            # Seed sample data
npx prisma studio         # Open Prisma Studio

# Development
npm run dev                # Start dev server
npm run lint               # Run ESLint
npm run type-check         # TypeScript check
npm run build              # Production build

# Docker
npm run docker:build       # Build image
npm run docker:run         # Run container
```

## 📄 License

Private - All rights reserved

## 🤝 Contributing

Contributions are welcome! Please ensure:
- Code follows TypeScript strict mode
- Components use Tailwind CSS with 1-2px borders
- Changes include tests
- Commit messages are descriptive

---

**Status**: ✅ Frontend MVP Complete | 🔄 Backend Implementation Ready

**Current Version**: 0.1.0

**Last Updated**: January 2024
