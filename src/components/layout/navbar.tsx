import React from "react";

// Components

import SwitchTheme from "@/components/layout/switch-theme";
import SwitchLang from "./switch-lang";

export default function Navbar() {
  return (
    <nav className="border-b-2 border-zinc-200 ">
      <div className="flex items-center justify-end gap-5 py-2">
        <SwitchLang />

        <SwitchTheme />
      </div>
    </nav>
  );
}
