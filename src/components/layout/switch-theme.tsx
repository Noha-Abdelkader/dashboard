import React from "react";

// import { Switch } from "@/components/ui/switch";

// Theme
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function SwitchTheme() {
  // Theme
  const theme = useTheme();

  return (
    <div className="cursor-pointer *:w-5 ">
      {theme.theme == "light" ? (
        <Sun onClick={() => theme.setTheme("dark")} />
      ) : (
        <Moon onClick={() => theme.setTheme("light")} />
      )}
    </div>
  );
}
