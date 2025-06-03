"use client";
import React from "react";

// Components
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useBreadCrumb } from "@/lib/hooks/breadcrumb.hook";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

// Hooks

export default function BreadCrumb() {
  // Hooks
  const pathes = useBreadCrumb();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathes.map((element, index) => (
          <>
            <BreadcrumbItem key={element.title}>
              <BreadcrumbLink asChild>
                <Link
                  href={element.href}
                  className={cn(pathes.length - 1 == index && "text-red-500")}
                >
                  {element.title}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {pathes.length - 1 > index && <BreadcrumbSeparator />}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
