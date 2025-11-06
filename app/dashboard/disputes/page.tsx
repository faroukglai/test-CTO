"use client";

import { DisputesTable } from "@/components/dashboard/disputes-table";
import { DisputeStats } from "@/components/dashboard/dispute-stats";

export default function DisputesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Disputes</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Manage invoice disputes and resolutions
        </p>
      </div>

      <DisputeStats />
      <DisputesTable />
    </div>
  );
}
