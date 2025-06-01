"use client";

import { usePathname } from "@/i18n/navigation";
export function useBreadCrumb() {
  // Hooks
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs: { title: string; href: string }[] = [];

  segments.reduce((acc, segment) => {
    const href = `${acc}/${segment}`;
    breadcrumbs.push({
      title: segment,
      href,
    });
    return href;
  }, "");

  return breadcrumbs;
  // const pathesList = pathes.map((element) => {
  //   return {
  //     title: element,
  //     href: element,
  //   };
  // });

  // if (pathname == "/")
  //   return [
  //     {
  //       title: "home",
  //       href: "/",
  //     },
  //   ];
  // return pathesList;
}
