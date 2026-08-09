import { ReactNode } from "react";

export function Eyebrow({ children, className = "bg-[#ffe75c]" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-2 border-[3px] border-black px-3 py-1 font-mono text-xs font-black uppercase tracking-[0.14em] shadow-[3px_3px_0_#111] ${className}`}
    >
      {children}
    </span>
  );
}
