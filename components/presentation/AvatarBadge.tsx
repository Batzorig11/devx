import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type AvatarBadgeProps = ComponentPropsWithoutRef<"span"> & {
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "size-8 text-xs",
  md: "size-12 text-base",
  lg: "size-24 text-4xl",
};

export function AvatarBadge({
  className,
  size = "md",
  ...props
}: AvatarBadgeProps) {
  return (
    <span
      data-presentation="avatar-badge"
      className={cn(
        "inline-grid shrink-0 place-items-center rounded-full border-[3px] border-presentation-accent bg-presentation-surface font-black text-presentation-ink",
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
