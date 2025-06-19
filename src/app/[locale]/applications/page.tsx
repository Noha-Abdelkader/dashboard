import React, { Suspense } from "react";

// Components
import Home from "./_components/home";
import Client from "./_components/client";
import Testimonials from "./_components/testimonials";

import { Skeleton } from "@/components/ui/skeleton";

export default function Page() {
  return (
    <main>
      <Home />
      <Client />
      <Suspense fallback=<Skeleton className="w-full min-h-52" />>
        <Testimonials />
      </Suspense>
    </main>
  );
}
