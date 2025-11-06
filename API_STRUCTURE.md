# Invoice OS - API Structure & Documentation

Complete API documentation for Invoice OS REST and GraphQL endpoints.

## 🔐 Authentication

All API endpoints (except public endpoints) require authentication via JWT token in the `Authorization` header.

### Header Format
```
Authorization: Bearer <jwt-token>
```

### Token Structure
```json
{
  "sub": "user-id",
  "email": "user@company.com",
  "tenantId": "tenant-id",
  "role": "admin",
  "iat": 1234567890,
  "exp": 1234571490
}
```

### Roles & Permissions

| Role | Permissions |
|------|-------------|
| admin | All operations |
| accountant | Create/edit invoices, view reports |
| approver | Approve invoices, manage disputes |
| payer | Process payments |
| viewer | View-only access |

---

## 📋 Invoice Management API

### Create Invoice
```http
POST /api/invoices
Content-Type: application/json
Authorization: Bearer <token>

{
  "invoiceNumber": "INV-001",
  "type": "standard",
  "fromName": "Your Company",
  "fromEmail": "billing@company.com",
  "toName": "Customer Name",
  "toEmail": "customer@company.com",
  "issueDate": "2024-01-15T00:00:00Z",
  "dueDate": "2024-02-15T00:00:00Z",
  "currency": "USD",
  "lineItems": [
    {
      "description": "Product/Service",
      "quantity": 1,
      "unitPrice": 100.00,
      "taxRate": 0
    }
  ],
  "notes": "Payment due within 30 days",
  "templateId": "template-id"
}

Response:
{
  "id": "invoice-id",
  "invoiceNumber": "INV-001",
  "status": "draft",
  "subtotal": 100.00,
  "taxAmount": 0.00,
  "totalAmount": 100.00,
  "createdAt": "2024-01-15T00:00:00Z",
  "createdBy": {
    "id": "user-id",
    "name": "John Doe"
  }
}
```

### Get Invoice List
```http
GET /api/invoices?status=paid&skip=0&take=20&search=customer
Authorization: Bearer <token>

Response:
{
  "data": [
    {
      "id": "invoice-id",
      "invoiceNumber": "INV-001",
      "toName": "Customer Name",
      "status": "paid",
      "totalAmount": 100.00,
      "paidAmount": 100.00,
      "dueDate": "2024-02-15T00:00:00Z",
      "createdAt": "2024-01-15T00:00:00Z"
    }
  ],
  "total": 150,
  "skip": 0,
  "take": 20
}
```

### Get Invoice Detail
```http
GET /api/invoices/:id
Authorization: Bearer <token>

Response:
{
  "id": "invoice-id",
  "invoiceNumber": "INV-001",
  "type": "standard",
  "status": "sent",
  "fromName": "Your Company",
  "fromEmail": "billing@company.com",
  "toName": "Customer Name",
  "toEmail": "customer@company.com",
  "issueDate": "2024-01-15T00:00:00Z",
  "dueDate": "2024-02-15T00:00:00Z",
  "sentAt": "2024-01-15T10:00:00Z",
  "viewedAt": "2024-01-15T11:00:00Z",
  "currency": "USD",
  "subtotal": 100.00,
  "taxAmount": 0.00,
  "discountAmount": 0.00,
  "totalAmount": 100.00,
  "paidAmount": 0.00,
  "lineItems": [
    {
      "id": "item-id",
      "description": "Product/Service",
      "quantity": 1,
      "unitPrice": 100.00,
      "amount": 100.00,
      "taxRate": 0,
      "taxAmount": 0.00
    }
  ],
  "attachments": [],
  "comments": [],
  "payments": [],
  "createdAt": "2024-01-15T00:00:00Z",
  "updatedAt": "2024-01-15T00:00:00Z"
}
```

### Update Invoice
```http
PUT /api/invoices/:id
Content-Type: application/json
Authorization: Bearer <token>

{
  "toName": "Updated Name",
  "dueDate": "2024-02-20T00:00:00Z",
  "notes": "Updated notes"
}

Response:
{ /* Updated invoice object */ }
```

### Delete Invoice
```http
DELETE /api/invoices/:id
Authorization: Bearer <token>

Response:
{
  "success": true,
  "message": "Invoice deleted successfully"
}
```

### Send Invoice
```http
POST /api/invoices/:id/send
Content-Type: application/json
Authorization: Bearer <token>

{
  "channel": "email",
  "message": "Please find your invoice attached"
}

Response:
{
  "success": true,
  "message": "Invoice sent to customer@company.com",
  "sentAt": "2024-01-15T10:00:00Z"
}
```

### Get Invoice PDF
```http
GET /api/invoices/:id/pdf
Authorization: Bearer <token>

Response:
Binary PDF file
Content-Type: application/pdf
```

---

## 💳 Payment Management API

### Create Payment
```http
POST /api/payments
Content-Type: application/json
Authorization: Bearer <token>

{
  "invoiceId": "invoice-id",
  "amount": 100.00,
  "method": "stripe",
  "paymentIntentId": "pi_...",
  "reference": "ref-123",
  "metadata": {
    "note": "Customer paid early"
  }
}

Response:
{
  "id": "payment-id",
  "invoiceId": "invoice-id",
  "amount": 100.00,
  "status": "processing",
  "method": "stripe",
  "initiatedAt": "2024-01-15T10:00:00Z"
}
```

### Get Payment List
```http
GET /api/payments?status=succeeded&invoiceId=invoice-id
Authorization: Bearer <token>

Response:
{
  "data": [
    {
      "id": "payment-id",
      "invoiceId": "invoice-id",
      "amount": 100.00,
      "status": "succeeded",
      "method": "stripe",
      "processedAt": "2024-01-15T10:05:00Z"
    }
  ],
  "total": 25
}
```

### Get Payment Detail
```http
GET /api/payments/:id
Authorization: Bearer <token>

Response:
{
  "id": "payment-id",
  "invoiceId": "invoice-id",
  "amount": 100.00,
  "currency": "USD",
  "status": "succeeded",
  "method": "stripe",
  "stripeChargeId": "ch_...",
  "reference": "ref-123",
  "receipt": "https://s3.../receipt.pdf",
  "initiatedAt": "2024-01-15T10:00:00Z",
  "processedAt": "2024-01-15T10:05:00Z",
  "settledAt": "2024-01-17T00:00:00Z"
}
```

### Refund Payment
```http
POST /api/payments/:id/refund
Content-Type: application/json
Authorization: Bearer <token>

{
  "amount": 50.00,
  "reason": "Customer requested partial refund",
  "metadata": {
    "approvedBy": "manager-id"
  }
}

Response:
{
  "success": true,
  "refundId": "refund-id",
  "amount": 50.00,
  "status": "pending",
  "createdAt": "2024-01-15T10:10:00Z"
}
```

---

## ⚖️ Dispute Management API

### Create Dispute
```http
POST /api/disputes
Content-Type: application/json
Authorization: Bearer <token>

{
  "invoiceId": "invoice-id",
  "reason": "Service not rendered",
  "description": "Customer claims service was not completed",
  "amount": 100.00,
  "priority": "high"
}

Response:
{
  "id": "dispute-id",
  "invoiceId": "invoice-id",
  "status": "open",
  "reason": "Service not rendered",
  "amount": 100.00,
  "filedAt": "2024-01-15T10:00:00Z"
}
```

### Get Dispute List
```http
GET /api/disputes?status=open&priority=high
Authorization: Bearer <token>

Response:
{
  "data": [
    {
      "id": "dispute-id",
      "invoiceId": "invoice-id",
      "status": "open",
      "reason": "Service not rendered",
      "priority": "high",
      "amount": 100.00,
      "filedAt": "2024-01-15T10:00:00Z"
    }
  ],
  "total": 12
}
```

### Get Dispute Detail
```http
GET /api/disputes/:id
Authorization: Bearer <token>

Response:
{
  "id": "dispute-id",
  "invoiceId": "invoice-id",
  "status": "open",
  "reason": "Service not rendered",
  "description": "Customer claims service was not completed",
  "amount": 100.00,
  "priority": "high",
  "comments": [
    {
      "id": "comment-id",
      "userId": "user-id",
      "userName": "Manager Name",
      "content": "Investigating customer claim",
      "createdAt": "2024-01-15T10:05:00Z"
    }
  ],
  "attachments": [],
  "filedAt": "2024-01-15T10:00:00Z"
}
```

### Update Dispute
```http
PUT /api/disputes/:id
Content-Type: application/json
Authorization: Bearer <token>

{
  "status": "in_progress",
  "notes": "Contacting customer for clarification"
}

Response:
{ /* Updated dispute object */ }
```

### Resolve Dispute
```http
POST /api/disputes/:id/resolve
Content-Type: application/json
Authorization: Bearer <token>

{
  "resolution": "credited",
  "creditAmount": 100.00,
  "notes": "Full credit issued to customer account"
}

Response:
{
  "success": true,
  "dispute": { /* Updated dispute */ },
  "creditNote": {
    "id": "credit-note-id",
    "amount": 100.00,
    "createdAt": "2024-01-15T10:15:00Z"
  }
}
```

### Add Dispute Comment
```http
POST /api/disputes/:id/comments
Content-Type: application/json
Authorization: Bearer <token>

{
  "content": "Customer agreed to settlement",
  "mentions": ["user-id-1", "user-id-2"]
}

Response:
{
  "id": "comment-id",
  "content": "Customer agreed to settlement",
  "userId": "user-id",
  "createdAt": "2024-01-15T10:20:00Z"
}
```

---

## 📊 Analytics & Reporting API

### Get Dashboard Metrics
```http
GET /api/analytics/dashboard
Authorization: Bearer <token>

Response:
{
  "metrics": {
    "totalInvoices": 2543,
    "totalAmount": 500000,
    "paidAmount": 450000,
    "pendingAmount": 50000,
    "overdueAmount": 15000,
    "averagePaymentTime": 28,
    "collectionRate": 0.9
  },
  "chartData": {
    "monthly": [
      { "month": "Jan", "invoiced": 50000, "collected": 45000 }
    ]
  }
}
```

### Get Cashflow Forecast
```http
GET /api/analytics/cashflow?days=90
Authorization: Bearer <token>

Response:
{
  "forecast": [
    {
      "date": "2024-02-15",
      "projected": 50000,
      "confidence": 0.95
    },
    {
      "date": "2024-03-15",
      "projected": 75000,
      "confidence": 0.85
    }
  ]
}
```

### Get Aging Report
```http
GET /api/analytics/aging-report
Authorization: Bearer <token>

Response:
{
  "report": [
    {
      "bucket": "current",
      "description": "Due within 30 days",
      "count": 45,
      "amount": 50000
    },
    {
      "bucket": "30-60",
      "description": "30-60 days overdue",
      "count": 12,
      "amount": 15000
    }
  ]
}
```

---

## ⚙️ Settings API

### Get Tenant Settings
```http
GET /api/settings/tenant
Authorization: Bearer <token>

Response:
{
  "id": "tenant-id",
  "name": "Your Company",
  "email": "company@example.com",
  "logo": "https://s3.../logo.png",
  "website": "https://company.com",
  "industry": "Technology",
  "taxId": "12-3456789",
  "country": "US",
  "currency": "USD",
  "timeZone": "America/New_York"
}
```

### Update Tenant Settings
```http
PUT /api/settings/tenant
Content-Type: application/json
Authorization: Bearer <token>

{
  "name": "Updated Company Name",
  "website": "https://newwebsite.com",
  "currency": "EUR"
}

Response:
{ /* Updated tenant object */ }
```

### Get Team Members
```http
GET /api/settings/team
Authorization: Bearer <token>

Response:
{
  "members": [
    {
      "id": "user-id",
      "email": "john@company.com",
      "name": "John Doe",
      "role": "admin",
      "status": "active",
      "avatar": "https://..."
    }
  ]
}
```

### Invite Team Member
```http
POST /api/settings/team/invite
Content-Type: application/json
Authorization: Bearer <token>

{
  "email": "newuser@company.com",
  "role": "accountant"
}

Response:
{
  "success": true,
  "invitation": {
    "id": "invitation-id",
    "email": "newuser@company.com",
    "role": "accountant",
    "expiresAt": "2024-02-15T00:00:00Z"
  }
}
```

### Remove Team Member
```http
DELETE /api/settings/team/:userId
Authorization: Bearer <token>

Response:
{
  "success": true,
  "message": "User removed from team"
}
```

---

## 🔌 Integration API

### List Integrations
```http
GET /api/integrations
Authorization: Bearer <token>

Response:
{
  "integrations": [
    {
      "id": "stripe",
      "name": "Stripe",
      "status": "connected",
      "connectedAt": "2024-01-10T00:00:00Z"
    },
    {
      "id": "paypal",
      "name": "PayPal",
      "status": "disconnected"
    }
  ]
}
```

### Connect Integration
```http
POST /api/integrations/:id/connect
Content-Type: application/json
Authorization: Bearer <token>

{
  "apiKey": "stripe_key_...",
  "webhookSecret": "whsec_..."
}

Response:
{
  "success": true,
  "integration": {
    "id": "stripe",
    "status": "connected"
  }
}
```

### Disconnect Integration
```http
POST /api/integrations/:id/disconnect
Authorization: Bearer <token>

Response:
{
  "success": true,
  "message": "Integration disconnected"
}
```

---

## 🔑 API Keys Management

### Create API Key
```http
POST /api/settings/api-keys
Content-Type: application/json
Authorization: Bearer <token>

{
  "name": "Production Key",
  "permissions": ["read:invoices", "create:payments"],
  "rateLimit": 1000
}

Response:
{
  "id": "key-id",
  "key": "sk_live_1234567890abcdef",
  "prefix": "sk_live_1234",
  "name": "Production Key",
  "permissions": ["read:invoices", "create:payments"],
  "createdAt": "2024-01-15T00:00:00Z"
}
```

### List API Keys
```http
GET /api/settings/api-keys
Authorization: Bearer <token>

Response:
{
  "keys": [
    {
      "id": "key-id",
      "name": "Production Key",
      "prefix": "sk_live_1234",
      "permissions": ["read:invoices", "create:payments"],
      "lastUsedAt": "2024-01-15T10:00:00Z"
    }
  ]
}
```

### Revoke API Key
```http
DELETE /api/settings/api-keys/:id
Authorization: Bearer <token>

Response:
{
  "success": true,
  "message": "API key revoked"
}
```

---

## 🔔 Webhooks API

### Create Webhook
```http
POST /api/webhooks
Content-Type: application/json
Authorization: Bearer <token>

{
  "url": "https://yourapp.com/webhooks",
  "events": ["invoice.created", "payment.processed", "dispute.filed"],
  "active": true
}

Response:
{
  "id": "webhook-id",
  "url": "https://yourapp.com/webhooks",
  "events": ["invoice.created", "payment.processed", "dispute.filed"],
  "secret": "whsec_1234567890abcdef",
  "createdAt": "2024-01-15T00:00:00Z"
}
```

### Webhook Events

#### invoice.created
```json
{
  "event": "invoice.created",
  "timestamp": "2024-01-15T10:00:00Z",
  "data": {
    "invoice": { /* Invoice object */ }
  }
}
```

#### invoice.sent
```json
{
  "event": "invoice.sent",
  "data": {
    "invoice": { /* Invoice object */ },
    "sentTo": "customer@company.com"
  }
}
```

#### payment.processed
```json
{
  "event": "payment.processed",
  "data": {
    "payment": { /* Payment object */ },
    "invoice": { /* Invoice object */ }
  }
}
```

#### dispute.filed
```json
{
  "event": "dispute.filed",
  "data": {
    "dispute": { /* Dispute object */ },
    "invoice": { /* Invoice object */ }
  }
}
```

---

## 📅 Pagination & Filtering

### Query Parameters

```http
GET /api/invoices?
  skip=0&
  take=20&
  status=paid&
  createdFrom=2024-01-01&
  createdTo=2024-01-31&
  search=customer_name&
  sortBy=createdAt&
  sortOrder=desc

Common Filters:
- skip: Offset for pagination
- take: Number of items to return (max 100)
- status: Filter by status
- search: Search in invoice number, customer name, email
- createdFrom: Start date (ISO 8601)
- createdTo: End date (ISO 8601)
- sortBy: Field to sort by
- sortOrder: asc or desc
```

---

## 🚨 Error Handling

### Error Response Format
```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Invoice not found",
    "details": {
      "invoiceId": "invoice-id"
    }
  }
}
```

### Error Codes
| Code | Status | Description |
|------|--------|-------------|
| INVALID_REQUEST | 400 | Invalid request parameters |
| UNAUTHORIZED | 401 | Missing or invalid authentication |
| FORBIDDEN | 403 | Insufficient permissions |
| NOT_FOUND | 404 | Resource not found |
| CONFLICT | 409 | Resource already exists |
| RATE_LIMIT | 429 | Rate limit exceeded |
| INTERNAL_ERROR | 500 | Server error |

---

## 🔐 Security

### Rate Limiting
- Default: 1000 requests/hour per tenant
- Premium: Configurable limits
- Burst: 100 requests/minute

### IP Whitelisting
```http
POST /api/settings/security/ip-whitelist
Content-Type: application/json

{
  "ipAddresses": ["192.168.1.1", "203.0.113.0/24"]
}
```

---

## 📈 GraphQL API

### Query Examples

#### Get Invoices with Payments
```graphql
query GetInvoicesWithPayments {
  invoices(status: PAID, take: 10) {
    id
    invoiceNumber
    totalAmount
    payments {
      id
      amount
      method
      status
    }
  }
}
```

#### Get Dashboard Metrics
```graphql
query GetMetrics {
  metrics {
    totalInvoices
    totalAmount
    paidAmount
    pendingAmount
    collectionRate
  }
}
```

---

## 🧪 API Testing

### Using cURL
```bash
# Get invoices
curl -H "Authorization: Bearer $TOKEN" \
  https://api.invoiceos.com/api/invoices

# Create invoice
curl -X POST \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"invoiceNumber":"INV-001",...}' \
  https://api.invoiceos.com/api/invoices
```

### Using Postman
- Import the provided Postman collection
- Set `{{token}}` variable in pre-request script
- All requests pre-configured with headers

---

## 📚 SDK Usage

### JavaScript/Node.js
```javascript
const invoiceOS = require('invoice-os-sdk');

const client = invoiceOS.createClient({
  apiKey: 'sk_live_...'
});

// Create invoice
const invoice = await client.invoices.create({
  invoiceNumber: 'INV-001',
  toName: 'Customer',
  totalAmount: 100.00
});

// List invoices
const invoices = await client.invoices.list({
  status: 'paid',
  limit: 20
});
```

### Python
```python
from invoice_os import Client

client = Client(api_key='sk_live_...')

# Create invoice
invoice = client.invoices.create(
    invoice_number='INV-001',
    to_name='Customer',
    total_amount=100.00
)

# Get invoice
invoice = client.invoices.get('invoice-id')
```

---

**API Version**: 1.0
**Last Updated**: January 2024
