"use client";

import React from "react";
import { cn } from "@/lib/utils";

// Components
import Navbar from "@/components/layout/navbar";

// Hooks
import { useSidebarToggle } from "../_hooks/sidebar.hook";
import BreadCrumb from "@/components/layout/bread-crumb";
export default function WrapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isSidebarOpen = useSidebarToggle();

  return (
    <main className="flex justify-end">
      <div
        className={cn(
          "transition-time px-5  ",
          isSidebarOpen ? "w-[calc(100%-12rem)]" : "w-[calc(100%-3rem)]"
        )}
      >
        <Navbar />
            <BreadCrumb/>
        {children}
      </div>
    </main>
  );
}
