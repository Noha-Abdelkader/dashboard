"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

// Theme
import { useTheme } from "next-themes";

export default function SwitchTheme() {
  // Theme
  const theme = useTheme();

  const [mounted, setMounted] = useState(false);

  // Ensure it only renders after client hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (!theme.theme) return null;

  return (
    <div className="cursor-pointer *:max-w-4 ">
      {theme.theme == "light" ? (
        <Moon onClick={() => theme.setTheme("dark")} />
      ) : (
        <Sun onClick={() => theme.setTheme("light")} />
      )}
    </div>
  );
}
