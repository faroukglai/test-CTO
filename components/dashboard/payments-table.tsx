"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreVertical, Eye, Download } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const payments = [
  {
    id: "PAY-001",
    invoice: "INV-001",
    customer: "Acme Corp",
    amount: "$2,500.00",
    method: "Stripe",
    status: "Succeeded",
    date: "2024-01-15",
  },
  {
    id: "PAY-002",
    invoice: "INV-002",
    customer: "Tech Solutions",
    amount: "$3,200.00",
    method: "Bank Transfer",
    status: "Processing",
    date: "2024-01-14",
  },
  {
    id: "PAY-003",
    invoice: "INV-003",
    customer: "Global Industries",
    amount: "$1,800.00",
    method: "Card",
    status: "Failed",
    date: "2024-01-10",
  },
];

const statusColors: Record<string, { bg: string; text: string }> = {
  Succeeded: {
    bg: "bg-green-50 dark:bg-green-950",
    text: "text-green-700 dark:text-green-400",
  },
  Processing: {
    bg: "bg-blue-50 dark:bg-blue-950",
    text: "text-blue-700 dark:text-blue-400",
  },
  Failed: { bg: "bg-red-50 dark:bg-red-950", text: "text-red-700 dark:text-red-400" },
  Pending: {
    bg: "bg-yellow-50 dark:bg-yellow-950",
    text: "text-yellow-700 dark:text-yellow-400",
  },
};

export function PaymentsTable() {
  return (
    <Card className="border border-gray-200 dark:border-gray-800 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-200 dark:border-gray-800">
            <TableHead>Payment ID</TableHead>
            <TableHead>Invoice</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment) => {
            const colors =
              statusColors[payment.status as keyof typeof statusColors];
            return (
              <TableRow
                key={payment.id}
                className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                <TableCell className="font-medium text-gray-900 dark:text-white">
                  {payment.id}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-400">
                  {payment.invoice}
                </TableCell>
                <TableCell className="text-gray-900 dark:text-white">
                  {payment.customer}
                </TableCell>
                <TableCell className="font-medium text-gray-900 dark:text-white">
                  {payment.amount}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-400">
                  {payment.method}
                </TableCell>
                <TableCell>
                  <Badge className={`${colors.bg} ${colors.text} border-0`}>
                    {payment.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-400">
                  {payment.date}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="gap-2">
                        <Eye className="h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2">
                        <Download className="h-4 w-4" />
                        Download Receipt
                      </DropdownMenuItem>
                      <DropdownMenuItem>Refund</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
}
