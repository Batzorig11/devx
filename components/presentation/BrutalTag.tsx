import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export function BrutalTag({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      data-presentation="tag"
      className={cn(
        "inline-flex items-center border-2 border-black bg-[#5de2a5] px-2 py-1 font-mono font-black uppercase text-black",
        className,
      )}
      {...props}
    />
  );
}
