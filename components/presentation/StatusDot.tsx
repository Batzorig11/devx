import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type StatusDotProps = ComponentPropsWithoutRef<"span"> & {
  size?: "sm" | "md";
};

export function StatusDot({
  className,
  size = "sm",
  ...props
}: StatusDotProps) {
  return (
    <span
      aria-hidden="true"
      data-presentation="status-dot"
      className={cn(
        "inline-block shrink-0 rounded-full border-2 border-presentation-ink bg-presentation-accent",
        size === "sm" ? "size-3" : "size-4",
        className,
      )}
      {...props}
    />
  );
}
