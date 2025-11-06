"use client";

import { Card } from "@/components/ui/card";
import { CreditCard, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";

const stats = [
  {
    label: "Total Received",
    value: "$156,234",
    change: "+12.5%",
    icon: CreditCard,
    color: "bg-blue-50 dark:bg-blue-950",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    label: "Pending",
    value: "$23,450",
    change: "-2.3%",
    icon: TrendingUp,
    color: "bg-yellow-50 dark:bg-yellow-950",
    iconColor: "text-yellow-600 dark:text-yellow-400",
  },
  {
    label: "Failed",
    value: "$5,678",
    change: "+8.1%",
    icon: AlertCircle,
    color: "bg-red-50 dark:bg-red-950",
    iconColor: "text-red-600 dark:text-red-400",
  },
  {
    label: "Today",
    value: "$8,234",
    change: "+5.2%",
    icon: CheckCircle,
    color: "bg-green-50 dark:bg-green-950",
    iconColor: "text-green-600 dark:text-green-400",
  },
];

export function PaymentStats() {
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
                  {stat.change} from last month
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
