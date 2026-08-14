import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CodePanelProps = {
  code: string;
  title?: ReactNode;
  className?: string;
  codeClassName?: string;
  accent?: "purple" | "paper";
};

export function CodePanel({
  code,
  title = "index.html",
  className,
  codeClassName,
  accent = "purple",
}: CodePanelProps) {
  return (
    <div
      className={cn(
        "flex min-h-0 flex-col overflow-hidden border-[3px] border-presentation-ink bg-presentation-ink text-presentation-surface shadow-[7px_7px_0_var(--presentation-ink)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b-[3px] border-presentation-ink bg-presentation-surface px-4 py-3 text-presentation-ink">
        <span
          className={cn(
            "size-3 rounded-full border-2 border-presentation-ink",
            accent === "purple" ? "bg-presentation-accent" : "bg-presentation-paper",
          )}
          aria-hidden="true"
        />
        <span className="size-3 rounded-full border-2 border-presentation-ink bg-presentation-paper" aria-hidden="true" />
        <span className="size-3 rounded-full border-2 border-presentation-ink bg-presentation-paper" aria-hidden="true" />
        <span className="ml-auto font-mono text-sm font-black">{title}</span>
      </div>
      <pre
        className={cn(
          "min-h-0 flex-1 overflow-auto p-4 font-mono text-sm font-bold leading-6 text-presentation-surface md:p-5 md:text-base md:leading-7",
          codeClassName,
        )}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}
