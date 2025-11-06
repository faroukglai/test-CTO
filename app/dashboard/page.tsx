"use client";

import { DashboardHeader } from "@/components/dashboard/header";
import { InvoiceStats } from "@/components/dashboard/invoice-stats";
import { RecentInvoices } from "@/components/dashboard/recent-invoices";
import { CashflowChart } from "@/components/dashboard/cashflow-chart";
import { QuickActions } from "@/components/dashboard/quick-actions";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      <QuickActions />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <InvoiceStats />
          <CashflowChart />
        </div>
        <div>
          <RecentInvoices />
        </div>
      </div>
    </div>
  );
}
