import React from "react";

// Locale
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Providers from "@/components/providers";
import SideBar from "../../components/layout/sidebar";
import WrapLayout from "./_components/wrap-layout";

export default function localLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    return notFound();
  }

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <SideBar />
        <div className="text-center text-red-200"> {locale} locale layout</div>

          {/* {children} */}
          <WrapLayout>{children}</WrapLayout>
        </Providers>
      </body>
    </html>
  );
}
