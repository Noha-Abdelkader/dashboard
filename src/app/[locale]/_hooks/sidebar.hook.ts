"use client";

import { RootState } from "@/stores/store";
import { useSelector } from "react-redux";

export function useSidebarToggle() {
  const openSidebar = useSelector((state: RootState) => state.sidebar.isOpen);

  return openSidebar;
}
