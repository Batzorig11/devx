import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export function Eyebrow({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      data-presentation="eyebrow"
      className={cn(
        "inline-flex w-fit items-center gap-2 border-[3px] border-black bg-[#ffe75c] px-3 py-1 font-mono text-xs font-black uppercase tracking-[0.14em] text-black shadow-[3px_3px_0_#111]",
        className,
      )}
      {...props}
    />
  );
}
