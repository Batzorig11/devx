import {
  BrutalCard,
  BrutalTag,
  Eyebrow,
  Slide,
} from "@/components/presentation";
import { ArrowLeftRight, Box, Move } from "lucide-react";

import { TOTAL_SLIDES } from "./constants";

const shorthand = [
  ["12px", "4 тал ижил"],
  ["12px 24px", "Дээд/доод · Зүүн/баруун"],
  ["8px 16px 24px", "Дээд · Хоёр хажуу · Доод"],
  ["8px 12px 16px 20px", "Дээдээс цагийн зүүний дагуу"],
] as const;

export default function Slide17() {
  return (
    <Slide
      number="19"
      label="Margin ба padding"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <Move className="size-4" aria-hidden="true" />
            Outside vs inside
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-6xl">
            Margin & padding
          </h2>
        </div>
        <BrutalTag>Spacing хоёр өөр газар</BrutalTag>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <BrutalCard className="flex min-h-52 flex-col justify-between bg-presentation-paper p-5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-sm font-black uppercase tracking-widest">Outside space</span>
            <ArrowLeftRight className="size-6" strokeWidth={3} aria-hidden="true" />
          </div>
          <div className="my-4 border-4 border-dashed border-presentation-accent bg-presentation-paper p-5">
            <div className="grid min-h-20 place-items-center border-[3px] border-presentation-ink bg-presentation-surface font-mono text-xl font-black">
              MARGIN
            </div>
          </div>
          <p className="text-base font-bold md:text-lg">Element-ийг бусад element-ээс холдуулна.</p>
        </BrutalCard>

        <BrutalCard className="flex min-h-52 flex-col justify-between bg-presentation-accent p-5 text-presentation-surface">
          <div className="flex items-center justify-between">
            <span className="font-mono text-sm font-black uppercase tracking-widest">Inside space</span>
            <Box className="size-6" strokeWidth={3} aria-hidden="true" />
          </div>
          <div className="my-4 border-[3px] border-presentation-surface bg-presentation-ink p-5">
            <div className="grid min-h-20 place-items-center bg-presentation-surface font-mono text-xl font-black text-presentation-ink">
              PADDING
            </div>
          </div>
          <p className="text-base font-bold md:text-lg">Border ба content-ийн хооронд дотоод зай гаргана.</p>
        </BrutalCard>
      </div>

      <BrutalCard className="mt-5 flex min-h-0 flex-1 flex-col overflow-hidden p-0">
        <div className="grid grid-cols-[1.1fr_1.9fr] border-b-[3px] border-presentation-ink bg-presentation-ink font-mono text-sm font-black uppercase tracking-widest text-presentation-surface">
          <div className="px-4 py-3">Shorthand</div>
          <div className="border-l-[3px] border-presentation-surface px-4 py-3">Унших дараалал</div>
        </div>
        <div className="grid min-h-0 flex-1 grid-rows-4">
          {shorthand.map(([value, meaning], index) => (
            <div key={value} className={`grid grid-cols-[1.1fr_1.9fr] border-b-[3px] border-presentation-ink last:border-b-0 ${index % 2 ? "bg-presentation-paper" : ""}`}>
              <code className="flex items-center px-4 font-mono text-sm font-black text-presentation-accent md:text-base">padding: {value};</code>
              <p className="flex items-center border-l-[3px] border-presentation-ink px-4 text-sm font-bold md:text-base">{meaning}</p>
            </div>
          ))}
        </div>
      </BrutalCard>
    </Slide>
  );
}
