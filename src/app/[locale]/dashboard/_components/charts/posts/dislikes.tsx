"use client";

import React from "react";
// Components
import { Skeleton } from "@/components/ui/skeleton";

// Charts
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Calls
import { useGetPostsQuery } from "@/stores/services/posts";

export default function Dislikes() {
  // Calls
  const { error, isError, isLoading, data } = useGetPostsQuery();

  return (
    <>
      {/* Loading */}
      {isLoading && <Skeleton className="h-72 w-1/2" />}
      {/* Error */}
      {isError && <div>{JSON.stringify(error)}</div>}
      {/* Chart */}

      <ResponsiveContainer width="100%" height={300} className="section-chart">
        <AreaChart data={data?.posts} margin={{ right: 0, left: -35 }}>
          <XAxis dataKey="id" />
          <YAxis />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="reactions.dislikes"
            stackId="1"
            stroke="#cbd5e1"
            fill="#e5e5e5"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}
