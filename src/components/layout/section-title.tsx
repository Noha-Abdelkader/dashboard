import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  subTitle?: string;
  title?: string;
  children?: React.ReactNode;
};
export default function SectionTitle({ subTitle, title, children }: Props) {
  return (
    <div className={cn(title && "text-center" , "mb-8")}>
      {subTitle && (
        <h4 className="uppercase  text-base text-soft-pink-400 dark:text-maroon-400 tracking-[0.3em] font-bold">
          {subTitle}
        </h4>
      )}

      {title && (
        <h2>
          <span className="section-title  relative z-10  before:content-[''] before:block before:w-3/4 before:h-4 before:bg-maroon-50 before:dark:bg-zinc-700 before:rounded-r-full rtl:before:rounded-l-full before:absolute before:bottom-0 before:left-0  before:z-[-1] after:content-[''] after:block after:w-1/3 after:h-0.5 after:bg-soft-pink-600 after:dark:bg-soft-pink-500  after:absolute after:bottom-0 after:left-0  after:z-[-1] ">
            {title}
          </span>
        </h2>
      )}
      {children && children}
    </div>
  );
}
