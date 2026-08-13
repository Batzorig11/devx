import { BrutalCard, BrutalTag, Eyebrow, Slide } from "@/components/presentation";
import { Clock3, History } from "lucide-react";

import { TOTAL_SLIDES } from "./constants";

const htmlHistory = [
  ["1989", "Tim Berners-Lee World Wide Web-ийг бүтээв"],
  ["1991", "Tim Berners-Lee HTML-ийг бүтээв"],
  ["1993", "Dave Raggett HTML+ draft боловсруулав"],
  ["1995", "HTML Working Group HTML 2.0-ийг тодорхойлов"],
  ["1997", "W3C Recommendation: HTML 3.2"],
  ["1999", "W3C Recommendation: HTML 4.01"],
  ["2000", "W3C Recommendation: XHTML 1.0"],
  ["2008", "WHATWG HTML5-ийн анхны public draft-ийг гаргав"],
  ["2012", "WHATWG HTML5 Living Standard"],
  ["2014", "W3C Recommendation: HTML5"],
  ["2016", "W3C Candidate Recommendation: HTML 5.1"],
  ["2017", "W3C Recommendation: HTML5.1 2nd Edition"],
  ["2017", "W3C Recommendation: HTML5.2"],
] as const;

export default function Slide07() {
  return (
    <Slide
      number="08"
      label="HTML-ийн түүх · Дэлгэрэнгүй"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <History className="size-4" aria-hidden="true" />
            1989 → Living Standard
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-7xl">
            HTML-ийн түүх
          </h2>
          <p className="mt-3 text-sm font-bold md:text-base">
            World Wide Web-ийн эхэн үеэс хойш HTML олон хувилбараар хөгжиж ирсэн.
          </p>
        </div>
        <BrutalTag className="gap-2">
          <Clock3 className="size-4" aria-hidden="true" /> 13 milestone
        </BrutalTag>
      </div>

      <BrutalCard className="flex min-h-0 flex-1 flex-col overflow-hidden p-0">
        <div className="grid grid-cols-[0.28fr_1.72fr] border-b-[3px] border-presentation-ink bg-presentation-ink font-mono text-xs font-black uppercase tracking-[0.08em] text-presentation-surface md:text-sm">
          <div className="px-4 py-2">Он</div>
          <div className="border-l-[3px] border-presentation-surface px-4 py-2">Хувилбар · Үйл явдал</div>
        </div>

        <div className="grid min-h-0 flex-1 grid-rows-13">
          {htmlHistory.map(([year, event], index) => (
            <div
              key={`${year}-${event}`}
              className={`grid min-h-0 grid-cols-[0.28fr_1.72fr] border-b-2 border-presentation-ink last:border-b-0 ${index % 2 === 0 ? "bg-presentation-paper" : "bg-presentation-surface"}`}
            >
              <div className="flex items-center px-4 font-mono text-xs font-black text-presentation-accent md:text-sm">
                {year}
              </div>
              <div className="flex items-center border-l-[3px] border-presentation-ink px-4 text-[11px] font-bold leading-tight md:text-sm">
                {event}
              </div>
            </div>
          ))}
        </div>
      </BrutalCard>
    </Slide>
  );
}
