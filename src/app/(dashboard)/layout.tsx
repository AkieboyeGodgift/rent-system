"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Menu,
  Home,
  ShoppingBag,
  Search,
  Settings,
  UserPlus,
  HandCoins
} from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  const links = [
    { href: "/rent/", icon: Home, label: "Rent" },
    { href: "/sell/", icon: ShoppingBag, label: "Sell" },
    { href: "/findagent/", icon: Search, label: "Find an Agent" },
    { href: "/deposit/", icon: HandCoins, label: "Deposit" },
  ];

  const bottomLinks = [
    { href: "/settings/", icon: Settings, label: "Settings" },
    { href: "/applyforagent/", icon: UserPlus, label: "Apply for Agent" },
  ];

  const spanClassName = 'p-[3px]';

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className={cn(
        "bg-white shadow-md border-r transition-all duration-300 flex flex-col",
        collapsed ? "w-20" : "w-64"
      )}>
        <div className="flex items-center justify-between p-4">
          {!collapsed && <h1 className="text-lg font-bold"><Link href='/dashboard/'>Dashboard</Link></h1>}
          <button onClick={() => setCollapsed(!collapsed)} className="text-gray-500">
            <Menu />
          </button>
        </div>

        <nav className="flex-1 flex flex-col gap-2 p-4 mt-[20px]">
          {links.map(({ href, icon: Icon, label }) => (
            <Link key={label} href={href} className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
              <Icon className="w-5 h-5" />
              {!collapsed && <span className={spanClassName}>{label}</span>}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col p-4 border-t gap-2">
          {bottomLinks.map(({ href, icon: Icon, label }) => (
            <Link key={label} href={href} className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
              <Icon className="w-5 h-5" />
              {!collapsed && <span className={spanClassName}>{label}</span>}
            </Link>
          ))}
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-50 p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
}
