"use client";

import { Card } from "@/components/ui/card";

export function CashflowChart() {
  return (
    <Card className="border border-gray-200 dark:border-gray-800 p-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Cashflow Forecast
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Projected cash inflow for the next 30, 60, and 90 days
        </p>
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              30 Days
            </p>
            <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
              $45,231
            </p>
          </div>
          <div className="h-12 w-12 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              ↑ 12%
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              60 Days
            </p>
            <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
              $89,564
            </p>
          </div>
          <div className="h-12 w-12 rounded-lg bg-green-50 dark:bg-green-950 flex items-center justify-center">
            <span className="text-sm font-semibold text-green-600 dark:text-green-400">
              ↑ 8%
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              90 Days
            </p>
            <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
              $156,892
            </p>
          </div>
          <div className="h-12 w-12 rounded-lg bg-purple-50 dark:bg-purple-950 flex items-center justify-center">
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              ↑ 15%
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
