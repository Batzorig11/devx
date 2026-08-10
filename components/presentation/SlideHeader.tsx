import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import type { SlideTone } from "./types";

type SlideHeaderProps = {
  label: ReactNode;
  number: ReactNode;
  totalSlides: number;
  tone?: SlideTone;
  className?: string;
};

export default function SlideHeader({
  label,
  number,
  totalSlides,
  tone = "paper",
  className,
}: SlideHeaderProps) {
  return (
    <div
      className={cn(
        "relative z-20 mb-5 flex items-center justify-between border-b-[3px] pb-3 font-mono text-xs font-black uppercase tracking-[0.18em] md:text-sm",
        tone === "ink" ? "border-[#fffdf5]" : "border-black",
        className,
      )}
    >
      <span>{label}</span>
      <span>
        {number} / {totalSlides}
      </span>
    </div>
  );
}
