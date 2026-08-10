import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { BrutalCard } from "./BrutalCard";

type MetricCardProps = {
  value: ReactNode;
  label: ReactNode;
  meta?: ReactNode;
  className?: string;
};

export function MetricCard({ value, label, meta, className }: MetricCardProps) {
  return (
    <BrutalCard shadow="none" className={cn("p-3", className)}>
      <p className="text-2xl font-black md:text-4xl">{value}</p>
      <div className="flex flex-wrap justify-between gap-1 font-mono text-[10px] font-black uppercase md:text-xs">
        <span>{label}</span>
        {meta && <span>{meta}</span>}
      </div>
    </BrutalCard>
  );
}
