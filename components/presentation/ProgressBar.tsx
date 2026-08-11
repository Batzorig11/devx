import { cn } from "@/lib/utils";

type ProgressBarProps = {
  value: number;
  label?: string;
  displayValue?: string;
  className?: string;
  trackClassName?: string;
  barClassName?: string;
};

export function ProgressBar({
  value,
  label,
  displayValue = `${value}%`,
  className,
  trackClassName,
  barClassName,
}: ProgressBarProps) {
  const safeValue = Math.min(100, Math.max(0, value));

  return (
    <div className={className}>
      {(label || displayValue) && (
        <div className="mb-2 flex items-center justify-between font-mono text-xs font-black uppercase">
          <span>{label}</span>
          <span>{displayValue}</span>
        </div>
      )}
      <div
        className={cn(
          "h-4 border-[3px] border-presentation-ink bg-presentation-surface p-0.5",
          trackClassName,
        )}
      >
        <div
          className={cn("h-full bg-presentation-accent", barClassName)}
          style={{ width: `${safeValue}%` }}
        />
      </div>
    </div>
  );
}
