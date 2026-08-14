import {
  BrutalCard,
  BrutalTag,
  Eyebrow,
  Slide,
} from "@/components/presentation";
import { MousePointer2, ScanSearch } from "lucide-react";

import { TOTAL_SLIDES } from "./constants";

const selectors = [
  ["Element", "p", "Бүх <p>"],
  ["Class", ".card", "class=\"card\""],
  ["ID", "#hero", "id=\"hero\""],
  ["Universal", "*", "Бүх element"],
  ["Group", "h1, h2", "h1 болон h2"],
  ["Descendant", ".card p", ".card доторх p"],
] as const;

export default function Slide11() {
  return (
    <Slide
      number="13"
      label="CSS selector"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <MousePointer2 className="size-4" aria-hidden="true" />
            Style хаашаа очихыг заана
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-6xl">
            CSS selector-ууд
          </h2>
        </div>
        <BrutalTag className="gap-2">
          <ScanSearch className="size-4" aria-hidden="true" /> 6 basic selectors
        </BrutalTag>
      </div>

      <BrutalCard className="flex min-h-0 flex-1 flex-col overflow-hidden p-0">
        <div className="grid grid-cols-[0.65fr_0.75fr_1.6fr] border-b-[3px] border-presentation-ink bg-presentation-ink font-mono text-sm font-black uppercase tracking-wider text-presentation-surface">
          <div className="px-4 py-3">Төрөл</div>
          <div className="border-l-[3px] border-presentation-surface px-4 py-3">Selector</div>
          <div className="border-l-[3px] border-presentation-surface px-4 py-3">Юуг сонгох вэ?</div>
        </div>

        <div className="grid min-h-0 flex-1 grid-rows-[repeat(6,minmax(0,1fr))]">
          {selectors.map(([type, selector, target], index) => (
            <div
              key={type}
              className={`grid min-h-0 grid-cols-[0.65fr_0.75fr_1.6fr] border-b-[3px] border-presentation-ink last:border-b-0 ${index % 2 === 0 ? "bg-presentation-surface" : "bg-presentation-paper"}`}
            >
              <div className="flex items-center px-4 text-base font-black uppercase md:text-lg">{type}</div>
              <div className={`flex items-center border-l-[3px] border-presentation-ink px-4 ${index === 1 || index === 2 ? "bg-presentation-accent" : ""}`}>
                <code className={`font-mono text-xl font-black md:text-2xl ${index === 1 || index === 2 ? "text-presentation-surface" : "text-presentation-accent"}`}>
                  {selector}
                </code>
              </div>
              <div className="flex items-center border-l-[3px] border-presentation-ink px-4 text-base font-bold md:text-lg">
                {target}
              </div>
            </div>
          ))}
        </div>
      </BrutalCard>

      <p className="mt-4 border-[3px] border-presentation-ink bg-presentation-accent px-4 py-3 text-center text-base font-black text-presentation-surface shadow-[4px_4px_0_var(--presentation-ink)] md:text-lg">
        Дахин ашиглах style-д <code>.class</code>-ийг үндсэн сонголтоо болго.
      </p>
    </Slide>
  );
}
