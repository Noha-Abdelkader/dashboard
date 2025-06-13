import { ArrowDown } from 'lucide-react';
import React from 'react'

export default function Refund() {
  return (
    <div className="section-card flex flex-col justify-between">
      <h3 className="section-title flex items-center justify-between">
        Refund
        <ArrowDown size={16} strokeWidth={2} color="#f2eb07" />
      </h3>

      <p className="text-gray-300  text-lg sm:text-2xl lg:text-4xl">
        -30%
        <span className="text-xs text-gray-500 capitalize ms-2">
          on this week
        </span>
      </p>
    </div>
  );
}
