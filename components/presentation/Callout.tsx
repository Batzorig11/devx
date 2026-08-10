import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type CalloutProps = ComponentPropsWithoutRef<"div"> & {
  icon?: ReactNode;
};

export function Callout({ icon, children, className, ...props }: CalloutProps) {
  return (
    <div
      className={cn(
        "flex gap-3 border-[3px] border-black bg-[#ffe75c] p-3 font-bold text-black",
        className,
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <div>{children}</div>
    </div>
  );
}
