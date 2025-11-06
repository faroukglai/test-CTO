"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";

interface InvoiceFiltersProps {
  onFiltersChange?: (filters: Record<string, unknown>) => void;
}

export function InvoiceFilters({ onFiltersChange }: InvoiceFiltersProps) {
  const handleStatusChange = (value: string) => {
    onFiltersChange?.({ status: value });
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="flex flex-1 items-center">
        <Search className="absolute ml-3 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search by invoice number or customer..."
          className="pl-10"
        />
      </div>

      <Select defaultValue="all" onValueChange={handleStatusChange}>
        <SelectTrigger className="w-full sm:w-40">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="draft">Draft</SelectItem>
          <SelectItem value="sent">Sent</SelectItem>
          <SelectItem value="viewed">Viewed</SelectItem>
          <SelectItem value="partially_paid">Partially Paid</SelectItem>
          <SelectItem value="paid">Paid</SelectItem>
          <SelectItem value="overdue">Overdue</SelectItem>
          <SelectItem value="disputed">Disputed</SelectItem>
          <SelectItem value="cancelled">Cancelled</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" className="gap-2">
        <X className="h-4 w-4" />
        Clear
      </Button>
    </div>
  );
}
