"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const integrations = [
  {
    name: "Stripe",
    description: "Accept payments via Stripe",
    status: "connected",
    icon: "💳",
  },
  {
    name: "PayPal",
    description: "Accept PayPal payments",
    status: "disconnected",
    icon: "🅿️",
  },
  {
    name: "Google OAuth",
    description: "Sign in with Google",
    status: "connected",
    icon: "🔐",
  },
  {
    name: "Slack",
    description: "Receive notifications in Slack",
    status: "disconnected",
    icon: "💬",
  },
  {
    name: "Zapier",
    description: "Automate workflows",
    status: "disconnected",
    icon: "⚡",
  },
];

export function IntegrationsSettings() {
  return (
    <div className="space-y-6">
      {integrations.map((integration) => (
        <Card
          key={integration.name}
          className="border border-gray-200 dark:border-gray-800 p-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-3xl">{integration.icon}</div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {integration.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {integration.description}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {integration.status === "connected" ? (
                <Badge className="bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 border-0">
                  <Check className="h-3 w-3 mr-1" />
                  Connected
                </Badge>
              ) : (
                <Badge className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-400 border-0">
                  <X className="h-3 w-3 mr-1" />
                  Disconnected
                </Badge>
              )}
              <Button variant="outline" size="sm">
                {integration.status === "connected" ? "Configure" : "Connect"}
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
