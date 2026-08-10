import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SlideTitleProps = {
  children: ReactNode;
  className?: string;
};

export default function SlideTitle({ children, className }: SlideTitleProps) {
  return (
    <h1
      className={cn(
        "relative z-10 text-5xl font-black uppercase leading-[0.9] tracking-[-0.055em] md:text-7xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}
