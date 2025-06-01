// Icons
import {
  LayoutDashboard,
  Dock,
  ChartArea,
  Bell,
  MapPin,
  Map,
} from "lucide-react";

// Types
export type SideBar = {
  title: string;
  icon: React.ElementType;
  href: string;
};

// List
export const sideBarList: SideBar[] = [
  { title: "dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "applications", icon: Dock, href: "/applications" },
  { title: "charts", icon: ChartArea, href: "/charts" },
  { title: "notifications", icon: Bell, href: "/notifications" },
  { title: "maps", icon: MapPin, href: "/maps" },
  { title: "countaries", icon: Map, href: "/countaries" },
];
