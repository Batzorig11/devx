import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type BrutalCardProps = ComponentPropsWithoutRef<"div"> & {
  shadow?: "none" | "sm" | "md" | "lg";
};

const shadows = {
  none: "shadow-none",
  sm: "shadow-[4px_4px_0_var(--presentation-ink)]",
  md: "shadow-[7px_7px_0_var(--presentation-ink)]",
  lg: "shadow-[10px_10px_0_var(--presentation-ink)]",
};

export function BrutalCard({
  className,
  shadow = "md",
  ...props
}: BrutalCardProps) {
  return (
    <div
      className={cn(
        "border-[3px] border-presentation-ink bg-presentation-surface text-presentation-ink",
        shadows[shadow],
        className,
      )}
      {...props}
    />
  );
}
