"use client";

import { Card } from "@/components/ui/card";
import { AlertTriangle, Clock, CheckCircle, DollarSign } from "lucide-react";

const stats = [
  {
    label: "Open Disputes",
    value: "12",
    change: "+3 this week",
    icon: AlertTriangle,
    color: "bg-red-50 dark:bg-red-950",
    iconColor: "text-red-600 dark:text-red-400",
  },
  {
    label: "In Progress",
    value: "8",
    change: "-1 resolved today",
    icon: Clock,
    color: "bg-blue-50 dark:bg-blue-950",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    label: "Resolved",
    value: "245",
    change: "89% resolution rate",
    icon: CheckCircle,
    color: "bg-green-50 dark:bg-green-950",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    label: "Disputed Amount",
    value: "$34,567",
    change: "$8,234 at risk",
    icon: DollarSign,
    color: "bg-purple-50 dark:bg-purple-950",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
];

export function DisputeStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card
            key={stat.label}
            className="border border-gray-200 dark:border-gray-800 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
                <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                  {stat.change}
                </p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <Icon className={`h-6 w-6 ${stat.iconColor}`} />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
