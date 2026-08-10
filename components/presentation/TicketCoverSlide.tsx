import type { ReactNode } from "react";
import { ArrowUpRight, Rocket, Ticket } from "lucide-react";

import { cn } from "@/lib/utils";

import { BrutalCard } from "./BrutalCard";
import { Eyebrow } from "./Eyebrow";
import { Slide } from "./Slide";

const barcodeWidths = [2, 4, 1, 3, 2, 1, 4, 2, 3, 1, 2];

export type TicketCoverSlideProps = {
  slideNumber: ReactNode;
  totalSlides: number;
  lectureNumber: string | number;
  title: ReactNode;
  highlightedTitle: ReactNode;
  subtitle: ReactNode;
  label?: ReactNode;
  courseName?: ReactNode;
  year?: ReactNode;
  passLabel?: ReactNode;
  details?: ReactNode;
  kicker?: ReactNode;
  actionLabel?: ReactNode;
  className?: string;
  stubClassName?: string;
  highlightClassName?: string;
};

export function TicketCoverSlide({
  slideNumber,
  totalSlides,
  lectureNumber,
  title,
  highlightedTitle,
  subtitle,
  label = "Lecture opening",
  courseName = "DEV-X",
  year = "2026",
  passLabel = "Course entry pass",
  details = "ROOM 01 · BEGINNER",
  kicker = "Today’s investigation",
  actionLabel = "START HERE",
  className,
  stubClassName,
  highlightClassName,
}: TicketCoverSlideProps) {
  const displayLectureNumber =
    typeof lectureNumber === "number" ? String(lectureNumber).padStart(2, "0") : lectureNumber;

  return (
    <Slide number={slideNumber} label={label} totalSlides={totalSlides} className={className}>
      <div className="grid flex-1 items-center">
        <BrutalCard className="grid min-h-0 overflow-hidden p-0 lg:grid-cols-[0.34fr_1fr]">
          <div
            className={cn(
              "relative flex flex-col justify-between border-b-[3px] border-dashed border-black bg-[#ffe75c] p-5 lg:border-b-0 lg:border-r-[3px]",
              stubClassName,
            )}
          >
            <div className="flex items-center justify-between font-mono text-xs font-black">
              <span>ADMIT ONE</span>
              <Ticket className="size-7" strokeWidth={3} aria-hidden="true" />
            </div>
            <div className="my-5 lg:my-0">
              <p className="font-mono text-xs font-black">LECTURE</p>
              <p className="text-[clamp(7rem,16vw,13rem)] font-black leading-[0.7] tracking-[-0.12em] text-[#5b8cff] [-webkit-text-stroke:3px_#111]">
                {displayLectureNumber}
              </p>
            </div>
            <div>
              <p className="font-mono text-xs font-black">
                {courseName} · {year}
              </p>
              <div aria-hidden="true" className="mt-3 flex h-10 gap-1 border-y-[3px] border-black py-1">
                {barcodeWidths.map((width, index) => (
                  <span key={`${width}-${index}`} className="h-full bg-black" style={{ width: `${width * 3}px` }} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-[#fffdf5] p-5 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Eyebrow className="bg-[#5b8cff]">
                <Rocket className="size-4" aria-hidden="true" />
                {passLabel}
              </Eyebrow>
              <span className="w-full font-mono text-xs font-black sm:w-auto">{details}</span>
            </div>
            <div className="my-7">
              <p className="font-mono text-sm font-black uppercase">{kicker}</p>
              <h1 className="mt-3 max-w-5xl text-[2.9rem] font-black uppercase leading-[0.84] tracking-[-0.065em] sm:text-[clamp(3.7rem,8vw,7.5rem)] sm:leading-[0.82] sm:tracking-[-0.075em]">
                {title}
                <span className={cn("block text-[#5b8cff]", highlightClassName)}>{highlightedTitle}</span>
              </h1>
            </div>
            <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-2xl border-l-[7px] border-black pl-4 text-lg font-bold md:text-2xl">{subtitle}</p>
              <div
                data-presentation="action-label"
                className="flex items-center gap-3 border-[3px] border-black bg-[#ff5c5c] px-4 py-3 font-mono text-xs font-black shadow-[4px_4px_0_#111]"
              >
                {actionLabel} <ArrowUpRight className="size-5" aria-hidden="true" />
              </div>
            </div>
          </div>
        </BrutalCard>
      </div>
    </Slide>
  );
}
