import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  h1: string;
  p1: string;
  p2?: string;
  headColor?: string;
};
export default function Header({ h1, p1, p2, headColor }: Props) {
  return (
    <>
      <h2
        className={cn(
          headColor ?? "text-sky-900",
          "text-center text-5xl lg:text-7xl font-bold capitalize "
        )}
      >
        {h1}
      </h2>
      <p className="text-gray-500 text-sm text-center">{p1}</p>
      {p2 && <p className="text-gray-500 text-sm text-center">{p2}</p>}
    </>
  );
}
