import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type BrutalCardProps = ComponentPropsWithoutRef<"div"> & {
  shadow?: "none" | "sm" | "md" | "lg";
};

const shadows = {
  none: "shadow-none",
  sm: "shadow-[4px_4px_0_#111]",
  md: "shadow-[7px_7px_0_#111]",
  lg: "shadow-[10px_10px_0_#111]",
};

export function BrutalCard({
  className,
  shadow = "md",
  ...props
}: BrutalCardProps) {
  return (
    <div
      className={cn(
        "border-[3px] border-black bg-[#fffdf5] text-black",
        shadows[shadow],
        className,
      )}
      {...props}
    />
  );
}
