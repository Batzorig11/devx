import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import SlideTitle from "./SlideTitle";
import SlideHeader from "./SlideHeader";
import type { SlideTone } from "./types";

type SlideProps = {
  title?: ReactNode;
  children: ReactNode;
  label: ReactNode;
  number: ReactNode;
  totalSlides: number;
  tone?: SlideTone;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
};

export function Slide({
  title,
  children,
  label,
  number,
  totalSlides,
  tone = "paper",
  className,
  titleClassName,
  contentClassName,
}: SlideProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-dvh w-full flex-col overflow-x-hidden overflow-y-auto px-5 pb-28 pt-5 md:h-dvh md:overflow-hidden md:px-10 md:pt-8",
        tone === "ink"
          ? "bg-[#111111] text-[#fffdf5] [background-image:none]"
          : "bg-[#efeee8] text-black [background-image:radial-gradient(circle,#11111114_1px,transparent_1px)] [background-size:22px_22px]",
        className,
      )}
    >
      <SlideHeader label={label} number={number} totalSlides={totalSlides} tone={tone} />
      {title && <SlideTitle className={titleClassName}>{title}</SlideTitle>}

      <div className={cn("relative z-10 flex min-h-0 flex-1 flex-col", title && "mt-6", contentClassName)}>
        {children}
      </div>
    </section>
  );
}
