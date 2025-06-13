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
  CartesianGrid,
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
      {!isLoading && !isError && (
        <ResponsiveContainer
          width="100%"
          height={280}
          className="section-chart"
        >
          {/* margin prop fix gap in left */}
          <LineChart data={data?.posts} margin={{ right: 0, left: -35 }}>
            <XAxis dataKey="id" padding={{ left: 10, right: 10 }} />
            <YAxis
              // tick={{ dx: -15 }}       gap between label & y-axis
              // padding={{ bottom: 10 }} gap of start in y -axis
              allowDataOverflow={true}
              // domain={["dataMin", "dataMax"]}
            />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />

            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="views"
              stroke="#0369a1"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </>
  );
}
