"use client";
import React from "react";

// Components
import { Skeleton } from "@/components/ui/skeleton";

// Calls
import { useGetPostsQuery } from "@/stores/services/posts";

// Charts
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Views() {
  const { data, isLoading, isError, error } = useGetPostsQuery();

  return (
    <>
      {/* Loading */}
      {isLoading && <Skeleton className="h-72 w-full" />}

      {/* Error */}
      {isError && <div>{JSON.stringify(error)}</div>}

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300} className="section-chart">
        {/* margin prop fix gap in left */}
        <LineChart data={data?.posts} margin={{ right: 0, left: -35 }}>
          <XAxis dataKey="id" padding={{ left: 10, right: 10 }} />
          <YAxis
            // tick={{ dx: -15 }}  gap between label & y-axis
            // padding={{ bottom: 10 }} gap of start in y -axis
            allowDataOverflow={true}
            // domain={["dataMin", "dataMax"]}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="views"
            stroke="#0369a1"
            activeDot={{ r: 8 }}
          />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
