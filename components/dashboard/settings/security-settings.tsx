"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, Key, Smartphone } from "lucide-react";

export function SecuritySettings() {
  return (
    <div className="space-y-6">
      {/* Password */}
      <Card className="border border-gray-200 dark:border-gray-800 p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <Lock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">
                Password
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Last changed 3 months ago
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Change Password
          </Button>
        </div>
      </Card>

      {/* Two-Factor Authentication */}
      <Card className="border border-gray-200 dark:border-gray-800 p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
              <Smartphone className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">
                Two-Factor Authentication
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Secure your account with 2FA
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-400 border-0">
              Disabled
            </Badge>
            <Button variant="outline" size="sm">
              Enable
            </Button>
          </div>
        </div>
      </Card>

      {/* API Keys */}
      <Card className="border border-gray-200 dark:border-gray-800 p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded-lg">
              <Key className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">
                API Keys
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Manage your API keys for integrations
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Generate New Key
          </Button>
        </div>

        <div className="space-y-3">
          {["key_1a2b3c4d5e6f...", "key_9z8y7x6w5v4u..."].map((key) => (
            <div
              key={key}
              className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <code className="text-sm text-gray-600 dark:text-gray-400">
                {key}
              </code>
              <Button variant="ghost" size="sm" className="text-red-600">
                Delete
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Active Sessions */}
      <Card className="border border-gray-200 dark:border-gray-800 p-6">
        <h4 className="font-medium mb-4 text-gray-900 dark:text-white">
          Active Sessions
        </h4>

        <div className="space-y-3">
          {[
            { device: "Chrome on macOS", ip: "192.168.1.1", current: true },
            { device: "Safari on iPhone", ip: "192.168.1.2", current: false },
          ].map((session) => (
            <div
              key={session.ip}
              className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {session.device}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {session.ip}
                  {session.current && " (Current)"}
                </p>
              </div>
              {!session.current && (
                <Button variant="ghost" size="sm" className="text-red-600">
                  Logout
                </Button>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
