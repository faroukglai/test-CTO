"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormItem, FormLabel } from "@/components/ui/form";

export function TenantSettings() {
  return (
    <div className="space-y-6">
      <Card className="border border-gray-200 dark:border-gray-800 p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Company Information
        </h3>

        <div className="space-y-4">
          <FormItem>
            <FormLabel>Company Name</FormLabel>
            <Input placeholder="Your Company" />
          </FormItem>

          <FormItem>
            <FormLabel>Email</FormLabel>
            <Input placeholder="company@example.com" type="email" />
          </FormItem>

          <FormItem>
            <FormLabel>Website</FormLabel>
            <Input placeholder="https://example.com" />
          </FormItem>

          <FormItem>
            <FormLabel>Industry</FormLabel>
            <Input placeholder="Technology, Finance, etc." />
          </FormItem>

          <FormItem>
            <FormLabel>Tax ID</FormLabel>
            <Input placeholder="Your Tax ID" />
          </FormItem>

          <FormItem>
            <FormLabel>Country</FormLabel>
            <Input placeholder="United States" />
          </FormItem>

          <FormItem>
            <FormLabel>Default Currency</FormLabel>
            <Input placeholder="USD" />
          </FormItem>

          <FormItem>
            <FormLabel>Timezone</FormLabel>
            <Input placeholder="UTC" />
          </FormItem>

          <div className="flex justify-end pt-4">
            <Button>Save Changes</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
