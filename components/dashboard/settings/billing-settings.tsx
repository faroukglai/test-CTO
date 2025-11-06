"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for freelancers",
    features: [
      "Up to 50 invoices/month",
      "1 user",
      "Basic reporting",
      "Email support",
    ],
    current: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "/month",
    description: "For growing businesses",
    features: [
      "Unlimited invoices",
      "Up to 5 users",
      "Advanced reporting",
      "Priority support",
      "Payment processing",
    ],
    current: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact sales",
    description: "For large organizations",
    features: [
      "Everything in Professional",
      "Unlimited users",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
    ],
    current: false,
  },
];

export function BillingSettings() {
  return (
    <div className="space-y-6">
      <Card className="border border-gray-200 dark:border-gray-800 p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Billing Information
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Current Plan
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              Professional
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Renewal Date
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              Feb 15, 2024
            </p>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`border p-6 transition-all ${
              plan.current
                ? "border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-blue-950/30"
                : "border-gray-200 dark:border-gray-800"
            }`}
          >
            {plan.current && (
              <Badge className="mb-3 bg-blue-600 dark:bg-blue-500">
                Current Plan
              </Badge>
            )}

            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              {plan.name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {plan.description}
            </p>

            <div className="mt-4 mb-6">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {plan.price}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                {plan.period}
              </span>
            </div>

            <ul className="space-y-2 mb-6">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              className="w-full"
              variant={plan.current ? "outline" : "default"}
            >
              {plan.current ? "Manage" : "Upgrade"}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
