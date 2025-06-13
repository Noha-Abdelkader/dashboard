"use client";

import React, { useEffect, useState } from "react";

// Components
import { Skeleton } from "@/components/ui/skeleton";

// Charts
// import { PieChart, Pie,  Cell } from "recharts";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Calls
import { useGetPostsQuery } from "@/stores/services/posts";

// Colors
const COLORS = [
  "#d8b4fe",
  "#a5f3fc",
  "#fde047",
  "#38bdf8",
  "#fdba74",
  "#cbd5e1",
  "#bbf7d0",
  "#fecaca",
  "#d9f99d",
  "#d1d5db",
  "#7dd3fc",
  "#a7f3d0",
  "#ddd6fe",
  "#c7d2fe",
];

// Style
const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

export default function Category() {
  // Calls
  const { data, error, isError, isLoading } = useGetPostsQuery();
  const [categories, setCategories] = useState<
    { key: string; value: number }[]
  >([]);

  // Effects
  useEffect(() => {
    if (data?.posts) {
      const x = data.posts.map((ele) => ele.tags).flat();
      const y = Array.from(new Set(x));
      const t = y.map((ele, index) => {
        return {
          key: ele,
          value: Math.floor(Math.random() * 10),
          fill: COLORS[index],
        };
      });

      setCategories(t);
    }
  }, [data]);

  return (
    <>
      {/* Loading */}
      {isLoading && <Skeleton className="h-72 w-full " />}

      {/* Error */}
      {isError && <div>{JSON.stringify(error)}</div>}

      {!isLoading && !isError && (
        <ResponsiveContainer
          width="100%"
          height={280}
          className="section-chart"
        >
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="100%"
            barSize={10}
            data={categories}
            barGap={5}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="value"
            />
            <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={style}
              formatter={(value, entry, index) => (
                <span
                  style={{
                    color: COLORS[index],
                    fontSize: 14,
                    textTransform: "capitalize",
                  }}
                >
                  <span className=" me-2">{categories[index].value}%</span>
                  {categories[index].key}
                </span>
              )}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      )}
    </>
  );
}
