import type { Metadata } from "next";
import { DashboardNav } from "@/components/dashboard/nav";
import { Sidebar } from "@/components/dashboard/sidebar";

export const metadata: Metadata = {
  title: "Dashboard - Invoice OS",
  description: "Manage your invoices, payments, and billing",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardNav />
        <main className="flex-1 overflow-y-auto">
          <div className="container h-full max-w-7xl py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
