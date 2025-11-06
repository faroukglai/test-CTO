"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Download, Share2, Eye } from "lucide-react";

export function QuickActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href="/dashboard/invoices/new">
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Invoice
        </Button>
      </Link>
      <Button variant="outline" className="gap-2">
        <Download className="h-4 w-4" />
        Export
      </Button>
      <Button variant="outline" className="gap-2">
        <Share2 className="h-4 w-4" />
        Share
      </Button>
      <Button variant="outline" className="gap-2">
        <Eye className="h-4 w-4" />
        View Reports
      </Button>
    </div>
  );
}
