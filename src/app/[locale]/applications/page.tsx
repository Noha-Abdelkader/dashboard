import React from "react";

// Components
import Home from "./_components/home";
import Client from "./_components/client";
import Testimonials from "./_components/testimonials";

export default function Page() {
  return (
    <main >
      <Home />
      <Client />
      <Testimonials />
    </main>
  );
}
