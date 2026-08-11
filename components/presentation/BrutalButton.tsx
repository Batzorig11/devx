import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export function BrutalButton({
  className,
  type = "button",
  ...props
}: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 border-[3px] border-presentation-ink bg-presentation-accent px-4 py-3 font-black text-presentation-surface shadow-[4px_4px_0_var(--presentation-ink)] transition-transform",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-presentation-accent focus-visible:ring-offset-2 focus-visible:ring-offset-presentation-surface",
        "active:translate-x-1 active:translate-y-1 active:shadow-none disabled:cursor-not-allowed disabled:opacity-40",
        className,
      )}
      {...props}
    />
  );
}
