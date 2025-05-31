"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Locale
import { usePathname, useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { Locale, useLocale } from "next-intl";
import { routing } from "@/i18n/routing";


export default function SwitchLang() {
  // Hooks
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = useLocale();

  // Functions
  const switchLocale = (locale: Locale) => {
    router.push(`${pathname}?${searchParams.toString()}`, { locale });
  };



  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="capitalize">{locale}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="sr-only">switch local</DropdownMenuLabel>
        {routing.locales
          .filter((element) => element != locale)
          .map((element) => (
            <DropdownMenuItem
              key={element}
              className="capitalize"
                    onClick={() => switchLocale(element)}
            >
              {element}
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
