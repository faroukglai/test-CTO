"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

const recentInvoices = [
  {
    id: "INV-001",
    customer: "Acme Corp",
    amount: "$2,500.00",
    status: "Paid",
    date: "2024-01-15",
  },
  {
    id: "INV-002",
    customer: "Tech Solutions",
    amount: "$3,200.00",
    status: "Pending",
    date: "2024-01-14",
  },
  {
    id: "INV-003",
    customer: "Global Industries",
    amount: "$1,800.00",
    status: "Overdue",
    date: "2024-01-10",
  },
];

const statusColors: Record<string, { bg: string; text: string }> = {
  Paid: { bg: "bg-green-50 dark:bg-green-950", text: "text-green-700 dark:text-green-400" },
  Pending: { bg: "bg-yellow-50 dark:bg-yellow-950", text: "text-yellow-700 dark:text-yellow-400" },
  Overdue: { bg: "bg-red-50 dark:bg-red-950", text: "text-red-700 dark:text-red-400" },
};

export function RecentInvoices() {
  return (
    <Card className="border border-gray-200 dark:border-gray-800 p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Invoices
        </h3>
        <Link href="/dashboard/invoices" className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400">
          View all
        </Link>
      </div>

      <div className="mt-6 space-y-3">
        {recentInvoices.map((invoice) => {
          const colors = statusColors[invoice.status as keyof typeof statusColors];
          return (
            <div
              key={invoice.id}
              className="flex items-center justify-between rounded-lg border border-gray-200 dark:border-gray-700 p-3"
            >
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 dark:text-white">
                  {invoice.id}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {invoice.customer}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge className={`${colors.bg} ${colors.text} border-0`}>
                  {invoice.status}
                </Badge>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
