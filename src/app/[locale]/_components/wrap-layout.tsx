"use client";

import React from "react";
import { cn } from "@/lib/utils";

// Components
import Navbar from "@/components/layout/navbar";

// Hooks
import { useSidebarToggle } from "../_hooks/sidebar.hook";
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
        {children}
      </div>
    </main>
  );
}
