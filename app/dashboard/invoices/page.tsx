"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InvoicesTable } from "@/components/dashboard/invoices-table";
import { InvoiceFilters } from "@/components/dashboard/invoice-filters";
import Link from "next/link";

export default function InvoicesPage() {
  const [filters, setFilters] = useState({
    status: "all",
    search: "",
    dateFrom: undefined,
    dateTo: undefined,
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Invoices</h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Manage and track all your invoices in one place
          </p>
        </div>
        <Link href="/dashboard/invoices/new">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Invoice
          </Button>
        </Link>
      </div>

      <InvoiceFilters onFiltersChange={setFilters} />
      <InvoicesTable filters={filters} />
    </div>
  );
}
