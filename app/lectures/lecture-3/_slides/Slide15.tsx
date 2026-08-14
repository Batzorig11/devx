import {
  BrutalCard,
  BrutalTag,
  Eyebrow,
  Slide,
} from "@/components/presentation";
import { Box, Frame } from "lucide-react";

import { TOTAL_SLIDES } from "./constants";

const borderStyles = ["solid", "dashed", "dotted", "double"] as const;

export default function Slide15() {
  return (
    <Slide
      number="17"
      label="CSS border"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <Frame className="size-4" aria-hidden="true" />
            Width · Style · Color
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-7xl">
            Border
          </h2>
        </div>
        <BrutalTag>3px solid #0a1e41</BrutalTag>
      </div>

      <BrutalCard className="grid min-h-40 place-items-center bg-presentation-ink p-6 text-presentation-surface">
        <code className="font-mono text-[clamp(1.25rem,4vw,4.5rem)] font-black tracking-[-0.06em]">
          border: <span className="text-presentation-accent">3px</span>{" "}
          <span className="text-presentation-paper">solid</span>{" "}
          <span className="text-presentation-accent">#0a1e41</span>;
        </code>
        <div className="mt-5 grid w-full max-w-4xl grid-cols-3 text-center font-mono text-sm font-black uppercase">
          <span>Width</span>
          <span>Style</span>
          <span>Color</span>
        </div>
      </BrutalCard>

      <div className="mt-5 grid min-h-0 flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {borderStyles.map((style, index) => (
          <div
            key={style}
            className={`flex min-h-0 flex-col items-center justify-center bg-presentation-surface p-4 text-center ${index === 0 ? "border-[5px] border-solid" : index === 1 ? "border-[5px] border-dashed" : index === 2 ? "border-[5px] border-dotted" : "border-[6px] border-double"} border-presentation-ink`}
          >
            <Box className="size-7 text-presentation-accent" strokeWidth={3} aria-hidden="true" />
            <code className="mt-3 font-mono text-xl font-black">{style}</code>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <code className="border-[3px] border-presentation-ink bg-presentation-paper px-4 py-3 text-center font-mono text-base font-black shadow-[3px_3px_0_var(--presentation-ink)]">
          border-bottom: 2px solid #6569df;
        </code>
        <code className="border-[3px] border-presentation-ink bg-presentation-accent px-4 py-3 text-center font-mono text-base font-black text-presentation-surface shadow-[3px_3px_0_var(--presentation-ink)]">
          border-radius: 12px;
        </code>
      </div>
    </Slide>
  );
}
