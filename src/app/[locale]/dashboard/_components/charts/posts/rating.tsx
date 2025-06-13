import { Star } from "lucide-react";
import React from "react";

export default function Rating() {
  return (
    <>
      <div className="section-card flex flex-col justify-between">
        <h3 className="section-title flex items-center justify-between">
          Rating
          <ul className="flex items-center gap-1">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} size={14} strokeWidth={2} color="#f2eb07" />
            ))}
          </ul>
        </h3>
        <p className="text-gray-300  text-lg sm:text-2xl lg:text-4xl">
          70%
          <span className="text-xs text-gray-500 capitalize ms-2">
            on this week
          </span>
        </p>
      </div>
    </>
  );
}
