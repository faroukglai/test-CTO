"use client";

import { InvoiceBuilder } from "@/components/dashboard/invoice-builder";

export default function NewInvoicePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create Invoice</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Create a new invoice with our modern drag-and-drop builder
        </p>
      </div>
      <InvoiceBuilder />
    </div>
  );
}
