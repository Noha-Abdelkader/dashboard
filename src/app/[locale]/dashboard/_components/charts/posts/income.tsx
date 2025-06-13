import { ArrowUp } from 'lucide-react';
import React from 'react'

export default function Income() {
  return (
    <div className="section-card flex flex-col justify-between">
      <h3 className="section-title flex items-center justify-between">
        Income
        <ArrowUp size={16} strokeWidth={2} color="#2be003" />
      </h3>

      <p className="text-gray-300  text-lg sm:text-2xl lg:text-4xl">
        40%
        <span className="text-xs text-gray-500 capitalize ms-2">
          on this week
        </span>
      </p>
    </div>
  );
}
