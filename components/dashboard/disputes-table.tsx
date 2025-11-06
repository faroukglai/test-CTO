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
import { MoreVertical, MessageSquare, FileText } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const disputes = [
  {
    id: "DSP-001",
    invoice: "INV-001",
    customer: "Acme Corp",
    amount: "$2,500.00",
    reason: "Wrong amount",
    status: "Open",
    priority: "High",
    filedDate: "2024-01-15",
  },
  {
    id: "DSP-002",
    invoice: "INV-002",
    customer: "Tech Solutions",
    amount: "$3,200.00",
    reason: "Service not rendered",
    status: "In Progress",
    priority: "Medium",
    filedDate: "2024-01-14",
  },
  {
    id: "DSP-003",
    invoice: "INV-003",
    customer: "Global Industries",
    amount: "$1,800.00",
    reason: "Quality issue",
    status: "Resolved",
    priority: "Medium",
    filedDate: "2024-01-10",
  },
];

const statusColors: Record<
  string,
  { bg: string; text: string }
> = {
  Open: { bg: "bg-red-50 dark:bg-red-950", text: "text-red-700 dark:text-red-400" },
  "In Progress": {
    bg: "bg-blue-50 dark:bg-blue-950",
    text: "text-blue-700 dark:text-blue-400",
  },
  Resolved: {
    bg: "bg-green-50 dark:bg-green-950",
    text: "text-green-700 dark:text-green-400",
  },
};

const priorityColors: Record<
  string,
  { bg: string; text: string }
> = {
  Low: { bg: "bg-blue-50 dark:bg-blue-950", text: "text-blue-700 dark:text-blue-400" },
  Medium: {
    bg: "bg-yellow-50 dark:bg-yellow-950",
    text: "text-yellow-700 dark:text-yellow-400",
  },
  High: { bg: "bg-red-50 dark:bg-red-950", text: "text-red-700 dark:text-red-400" },
  Critical: {
    bg: "bg-purple-50 dark:bg-purple-950",
    text: "text-purple-700 dark:text-purple-400",
  },
};

export function DisputesTable() {
  return (
    <Card className="border border-gray-200 dark:border-gray-800 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-200 dark:border-gray-800">
            <TableHead>Dispute ID</TableHead>
            <TableHead>Invoice</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Reason</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Filed Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {disputes.map((dispute) => {
            const statusColor =
              statusColors[dispute.status as keyof typeof statusColors];
            const priorityColor =
              priorityColors[dispute.priority as keyof typeof priorityColors];

            return (
              <TableRow
                key={dispute.id}
                className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                <TableCell className="font-medium text-gray-900 dark:text-white">
                  {dispute.id}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-400">
                  {dispute.invoice}
                </TableCell>
                <TableCell className="text-gray-900 dark:text-white">
                  {dispute.customer}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-400">
                  {dispute.reason}
                </TableCell>
                <TableCell className="font-medium text-gray-900 dark:text-white">
                  {dispute.amount}
                </TableCell>
                <TableCell>
                  <Badge className={`${statusColor.bg} ${statusColor.text} border-0`}>
                    {dispute.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge className={`${priorityColor.bg} ${priorityColor.text} border-0`}>
                    {dispute.priority}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-400">
                  {dispute.filedDate}
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
                        <FileText className="h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Add Comment
                      </DropdownMenuItem>
                      <DropdownMenuItem>Resolve</DropdownMenuItem>
                      <DropdownMenuItem>Issue Credit</DropdownMenuItem>
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
