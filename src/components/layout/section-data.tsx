import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  subTitle?: string;
  desc?: string;
  btnText?: string;
  children?: React.ReactNode;
};
export default function SectionData({
  subTitle,
  desc,
  btnText,
  children,
}: Props) {
  return (
    <div className="mb-8">
      <div className={cn(!children && "text-center")}>
        {subTitle && (
          <h4 className="mb-5 uppercase  text-base text-soft-pink-400 dark:text-maroon-400 tracking-[0.3em] font-bold">
            {subTitle}
          </h4>
        )}

        {/* to control word colored and wrapped with span tag */}
        {children && children}

        {desc && (
          <p className="text-zinc-500 dark:text-zinc-400 mt-1 mb-5">{desc}</p>
        )}
      </div>
      {btnText && <Button>{btnText}</Button>}
    </div>
  );
}
