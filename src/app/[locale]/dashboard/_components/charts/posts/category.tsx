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
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
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

      {/* {JSON.stringify(categories)} */}
      {/* Chart */}
      {/* <PieChart width={800} height={400} className="section-chart">
        <Pie
          data={categories}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {categories.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        {/* <Pie
          data={categories}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {categories.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie> 
      </PieChart> */}

      <ResponsiveContainer width="100%" height={300} className="section-chart">
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
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise
            dataKey="value"
          />
          {/* <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          /> */}
        </RadialBarChart>
      </ResponsiveContainer>
    </>
  );
}
