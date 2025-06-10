import React from "react";

// Components
import Views from "./_components/charts/posts/views";
import Likes from "./_components/charts/posts/likes";
import Dislikes from "./_components/charts/posts/dislikes";
import Category from "./_components/charts/posts/category";

export default function Page() {
  return (
    <main className="section-wrapper space-y-4">
      {/* First */}
      <div className="grid grid-cols-12 *:col-span-12    gap-4">
        <div className="sm:col-span-8">
          <Views />
        </div>
        <div className="sm:col-span-4">
          <Category />
        </div>
      </div>

      {/* Second */}
      <div className="grid grid-cols-12 *:col-span-12 *:sm:col-span-6  gap-4">
        <Likes />
        <Dislikes />
      </div>
    </main>
  );
}
