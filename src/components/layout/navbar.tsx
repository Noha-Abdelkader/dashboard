"use client";
import React from "react";

// Components
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import SwitchTheme from "@/components/layout/switch-theme";
import SwitchLang from "./switch-lang";

export default function Navbar() {


  return (
    <nav className="border-b-2 border-zinc-200 ">
      <div className="flex items-center justify-end gap-5 py-2">
        {/* others */}
        <SwitchLang/>
      
        <SwitchTheme />
      </div>

      <div>
        {/* bread crumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </nav>
  );
}

// const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, "") || "/";
// router.push(`${pathWithoutLocale}?${searchParams.toString()}`, { locale });

// router.push(pathname, { locale });
// const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, "") || "/";
//  const newUrl = `/${locale}${pathWithoutLocale}?${searchParams.toString()}`;

//  console.log(newUrl);
// 3. Force a hard navigation to avoid duplication
//  window.location.href = newUrl;
