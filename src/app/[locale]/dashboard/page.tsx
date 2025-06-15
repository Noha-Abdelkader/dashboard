import React from "react";

// Components
import Views from "./_components/charts/posts/views";
import Likes from "./_components/charts/posts/likes";
import Dislikes from "./_components/charts/posts/dislikes";
import Category from "./_components/charts/posts/category";
import Rating from "./_components/charts/posts/rating";
import Price from "./_components/charts/posts/price";
import Income from "./_components/charts/posts/income";
import Refund from "./_components/charts/posts/refund";
import Home from "./_components/charts/posts/home";

export default function Page() {
  return (
    <main className="section-wrapper space-y-4">
      {/* First */}
      <div className="grid grid-cols-12 gap-4 *:space-y-4 *:col-span-12 *:sm:col-span-6 *:lg:col-span-3 *:bg-slate-50 *:after-effect ">
        <Price />
        <Income />
        <Refund />
        <Rating />
      </div>
      {/* Second */}
      <Home />
      {/* Third */}
      <div className="grid grid-cols-12 *:col-span-12 *:lg:col-span-6 gap-4">
        <Views />
        <Category />
      </div>
      {/* Fourth */}
      <div className="grid grid-cols-12 *:col-span-12 *:lg:col-span-6  gap-4">
        <Likes />
        <Dislikes />
      </div>
    </main>
  );
}
