import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { BrutalCard } from "./BrutalCard";
import { StatusDot } from "./StatusDot";

type BrowserFrameProps = {
  title?: ReactNode;
  children: ReactNode;
  className?: string;
  toolbarClassName?: string;
  bodyClassName?: string;
  showDots?: boolean;
  shadow?: "none" | "sm" | "md" | "lg";
};

export function BrowserFrame({
  title,
  children,
  className,
  toolbarClassName,
  bodyClassName,
  showDots = true,
  shadow = "md",
}: BrowserFrameProps) {
  return (
    <BrutalCard
      shadow={shadow}
      className={cn("overflow-hidden p-0", className)}
    >
      <div
        className={cn(
          "flex items-center gap-2 border-b-[3px] border-black px-4 py-3",
          toolbarClassName,
        )}
      >
        {showDots && (
          <>
            <StatusDot className="bg-[#ff5c5c]" />
            <StatusDot className="bg-[#ffe75c]" />
            <StatusDot className="bg-[#5de2a5]" />
          </>
        )}
        {title && (
          <span className="ml-auto font-mono text-xs font-black">{title}</span>
        )}
      </div>
      <div className={cn("p-4", bodyClassName)}>{children}</div>
    </BrutalCard>
  );
}
