"use client";

import { PaymentsTable } from "@/components/dashboard/payments-table";
import { PaymentStats } from "@/components/dashboard/payment-stats";

export default function PaymentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Track and manage all payment transactions
        </p>
      </div>

      <PaymentStats />
      <PaymentsTable />
    </div>
  );
}
