"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

// Icons
import { ChevronLeft, CircleGauge } from "lucide-react";

// Components
import { sideBarList } from "@/lib/variables/sidebar.list";

// Store
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/stores/store";
import { toggleSidebar } from "@/stores/slices/sidebar-slice";

// reducx

export default function SideBar() {
  // State
  const openSidebar = useSelector((state: RootState) => state.sidebar.isOpen);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <aside
      className={cn(
        openSidebar ? "w-48" : " w-12",
        " bg-sky-700 text-zinc-200   transition-time fixed inset-y-0 left-0 rtl:right-0 rounded-br-3xl  rounded-tr-3xl rtl:rounded-bl-3xl rtl:rounded-tl-3xl shadow-slate-500 shadow-xl dark:shadow-slate-700"
      )}
    >
      <div
        className={cn(
          openSidebar ? " px-3" : " px-0",
          " py-7 sm:py-14 relative"
        )}
      >
        {/* Open/close icon */}
        <div
          className={cn(
            openSidebar ? "" : "",
            "bg-zinc-100 rounded-full text-sky-700 size-6 flex items-center justify-center  [&>svg]:w-4  [&>svg]:h-4 p-1 cursor-pointer absolute right-0 translate-x-1/2  rtl:right-full   top-8 z-10"
          )}
          onClick={() => {
            dispatch(toggleSidebar());
          }}
        >
          <ChevronLeft
            className={cn(
              openSidebar
                ? "rotate-0 rtl:rotate-180"
                : "rotate-180 rtl:rotate-0",
              "transition-time"
            )}
          />
        </div>

        {/* Logo */}
        <h1 className="  relative  font-bold text-3xl  mb-10 min-h-9 ">
          <CircleGauge
            className={cn(
              openSidebar ? "scale-[200%]" : "scale-100",
              "absolute  opacity-50 text-zinc-100  bottom-0 left-1/2 -translate-x-1/2 z-0"
            )}
          />
          <span
            className={cn(
              openSidebar ? "block" : "hidden",
              "text-center transition-time delay-700"
            )}
          >
            Smart
          </span>
        </h1>

        {/* List */}
        <ul className="divide-y-2 divide-zinc-50 divide-opacity-30 px-3 *:py-3 ">
          {sideBarList.map((element) => (
            <li
              key={element.title}
              className={cn(
                openSidebar && "flex items-center",
                " gap-2  [&>svg]:min-w-3   [&>svg]:w-3.5"
              )}
            >
              {<element.icon />}
              <Link
                href={element.href}
                className={cn(
                  !openSidebar && "hidden ",

                  "transition-all duration-0  ease-in-out origin-left  text-sm capitalize"
                )}
              >
                {element.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
