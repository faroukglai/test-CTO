"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TenantSettings } from "@/components/dashboard/settings/tenant-settings";
import { TeamSettings } from "@/components/dashboard/settings/team-settings";
import { IntegrationsSettings } from "@/components/dashboard/settings/integrations-settings";
import { BillingSettings } from "@/components/dashboard/settings/billing-settings";
import { SecuritySettings } from "@/components/dashboard/settings/security-settings";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Configure your account, team, and integrations
        </p>
      </div>

      <Tabs defaultValue="tenant" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="tenant">Tenant</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="tenant" className="space-y-6">
          <TenantSettings />
        </TabsContent>

        <TabsContent value="team" className="space-y-6">
          <TeamSettings />
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <IntegrationsSettings />
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <BillingSettings />
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <SecuritySettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}
