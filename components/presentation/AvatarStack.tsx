import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export function AvatarStack({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("flex -space-x-3", className)} {...props} />;
}
