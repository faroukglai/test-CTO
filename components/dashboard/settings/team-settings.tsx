"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FormItem } from "@/components/ui/form";
import { Trash2 } from "lucide-react";

const teamMembers = [
  {
    id: "1",
    name: "John Doe",
    email: "john@company.com",
    role: "admin",
    status: "active",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@company.com",
    role: "accountant",
    status: "active",
  },
];

export function TeamSettings() {
  return (
    <div className="space-y-6">
      <Card className="border border-gray-200 dark:border-gray-800 p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Team Members
        </h3>

        <div className="space-y-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {member.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {member.email}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Badge>{member.role}</Badge>
                <Button variant="ghost" size="sm">
                  <Trash2 className="h-4 w-4 text-red-600" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-medium mb-3 text-gray-900 dark:text-white">
            Invite Team Member
          </h4>
          <div className="flex gap-2">
            <FormItem className="flex-1">
              <Input placeholder="Email address" type="email" />
            </FormItem>
            <Button>Send Invite</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
