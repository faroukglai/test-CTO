"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  CreditCard,
  AlertCircle,
  Settings,
  LogOut,
  ChevronLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: FileText,
  },
  {
    name: "Payments",
    href: "/dashboard/payments",
    icon: CreditCard,
  },
  {
    name: "Disputes",
    href: "/dashboard/disputes",
    icon: AlertCircle,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={cn(
        "border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 transition-all duration-300",
        isOpen ? "w-64" : "w-20"
      )}
    >
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-800">
          {isOpen && (
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-white font-bold">
                IO
              </div>
              <span className="font-bold text-gray-900 dark:text-white">
                Invoice OS
              </span>
            </Link>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="ml-auto"
          >
            <ChevronLeft
              className={cn(
                "h-4 w-4 transition-transform",
                !isOpen && "rotate-180"
              )}
            />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400"
                      : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800"
                  )}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {isOpen && <span>{item.name}</span>}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="border-t border-gray-200 p-3 dark:border-gray-800">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-gray-600 dark:text-gray-400"
          >
            <LogOut className="h-5 w-5" />
            {isOpen && <span>Logout</span>}
          </Button>
        </div>
      </div>
    </aside>
  );
}
