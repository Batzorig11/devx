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
        "inline-flex items-center justify-center gap-2 border-[3px] border-black bg-[#5b8cff] px-4 py-3 font-black text-black shadow-[4px_4px_0_#111] transition-transform",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#ff5c5c] focus-visible:ring-offset-2",
        "active:translate-x-1 active:translate-y-1 active:shadow-none disabled:cursor-not-allowed disabled:opacity-40",
        className,
      )}
      {...props}
    />
  );
}
