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
import { Eye, Download, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const invoices = [
  {
    id: "INV-001",
    customer: "Acme Corp",
    email: "billing@acme.com",
    amount: "$2,500.00",
    status: "Paid",
    date: "2024-01-15",
    dueDate: "2024-02-15",
  },
  {
    id: "INV-002",
    customer: "Tech Solutions",
    email: "accounting@techsol.com",
    amount: "$3,200.00",
    status: "Pending",
    date: "2024-01-14",
    dueDate: "2024-02-13",
  },
  {
    id: "INV-003",
    customer: "Global Industries",
    email: "ap@globalind.com",
    amount: "$1,800.00",
    status: "Overdue",
    date: "2024-01-10",
    dueDate: "2024-02-10",
  },
];

const statusColors: Record<string, { bg: string; text: string }> = {
  Paid: { bg: "bg-green-50 dark:bg-green-950", text: "text-green-700 dark:text-green-400" },
  Pending: { bg: "bg-yellow-50 dark:bg-yellow-950", text: "text-yellow-700 dark:text-yellow-400" },
  Overdue: { bg: "bg-red-50 dark:bg-red-950", text: "text-red-700 dark:text-red-400" },
};

export function InvoicesTable(): JSX.Element {
  return (
    <Card className="border border-gray-200 dark:border-gray-800 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-200 dark:border-gray-800">
            <TableHead>Invoice</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => {
            const colors = statusColors[invoice.status as keyof typeof statusColors];
            return (
              <TableRow
                key={invoice.id}
                className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                <TableCell className="font-medium text-gray-900 dark:text-white">
                  {invoice.id}
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {invoice.customer}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {invoice.email}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="font-medium text-gray-900 dark:text-white">
                  {invoice.amount}
                </TableCell>
                <TableCell>
                  <Badge className={`${colors.bg} ${colors.text} border-0`}>
                    {invoice.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-400">
                  {invoice.dueDate}
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
                        View
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2">
                        <Download className="h-4 w-4" />
                        Download PDF
                      </DropdownMenuItem>
                      <DropdownMenuItem>Send Email</DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Delete
                      </DropdownMenuItem>
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
