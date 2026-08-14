import {
  BrutalCard,
  BrutalTag,
  Eyebrow,
  Slide,
} from "@/components/presentation";
import { ArrowDown, ArrowRight, Ruler } from "lucide-react";

import { CodePanel } from "../_components/CodePanel";
import { TOTAL_SLIDES } from "./constants";

const sizeCode = `.card {
  width: 100%;
  max-width: 420px;
  min-height: 240px;
}

.avatar {
  width: 80px;
  height: 80px;
}`;

const guidelines = [
  ["width", "Element-ийн өргөн"],
  ["height", "Element-ийн өндөр"],
  ["min-*", "Үүнээс бага болохгүй"],
  ["max-*", "Үүнээс их болохгүй"],
] as const;

export default function Slide16() {
  return (
    <Slide
      number="18"
      label="Width ба height"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <Ruler className="size-4" aria-hidden="true" />
            Element-ийн хэмжээс
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-6xl">
            Width & height
          </h2>
        </div>
        <BrutalTag>Fixed · Fluid · Constrained</BrutalTag>
      </div>

      <div className="grid min-h-0 flex-1 gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <CodePanel code={sizeCode} title="styles.css" />

        <div className="grid min-h-0 grid-rows-[1fr_auto] gap-4">
          <BrutalCard className="relative flex min-h-0 items-center justify-center bg-presentation-paper p-6">
            <div className="relative flex h-40 w-full max-w-md items-center justify-center border-[5px] border-presentation-ink bg-presentation-accent text-presentation-surface shadow-[8px_8px_0_var(--presentation-ink)]">
              <ArrowRight className="absolute left-4 right-4 top-4 h-6 w-[calc(100%-2rem)]" strokeWidth={3} aria-hidden="true" />
              <ArrowDown className="absolute bottom-4 left-4 top-4 h-[calc(100%-2rem)] w-6" strokeWidth={3} aria-hidden="true" />
              <div className="text-center">
                <p className="font-mono text-2xl font-black">100% × 160px</p>
                <p className="mt-1 text-sm font-black uppercase">max-width: 448px</p>
              </div>
            </div>
          </BrutalCard>

          <div className="grid grid-cols-2 gap-3">
            {guidelines.map(([property, copy]) => (
              <div key={property} className="border-[3px] border-presentation-ink bg-presentation-surface px-3 py-2 shadow-[3px_3px_0_var(--presentation-ink)]">
                <code className="font-mono text-sm font-black text-presentation-accent md:text-base">{property}</code>
                <p className="mt-1 text-sm font-bold md:text-base">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-4 border-[3px] border-presentation-ink bg-presentation-accent px-4 py-3 text-center text-base font-black text-presentation-surface shadow-[4px_4px_0_var(--presentation-ink)] md:text-lg">
        Тексттэй box-д fixed <code>height</code> өгөхөөс болгоомжил — content багтахгүй overflow үүснэ.
      </p>
    </Slide>
  );
}
