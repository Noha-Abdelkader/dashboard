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
  { title: "dashboard", icon: LayoutDashboard, href: "/" },
  { title: "applications", icon: Dock, href: "/" },
  { title: "charts", icon: ChartArea, href: "/" },
  { title: "notifications", icon: Bell, href: "/" },
  { title: "maps", icon: MapPin, href: "/" },
  { title: "countaries", icon: Map, href: "/" },
];
