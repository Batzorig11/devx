import {
  BrutalCard,
  BrutalTag,
  Eyebrow,
  Slide,
} from "@/components/presentation";
import { Box, Calculator } from "lucide-react";

import { TOTAL_SLIDES } from "./constants";

export default function Slide18() {
  return (
    <Slide
      number="20"
      label="CSS box model"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <Box className="size-4" aria-hidden="true" />
            Element бүр нэг box
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-6xl">
            Box model
          </h2>
        </div>
        <BrutalTag>Content → Padding → Border → Margin</BrutalTag>
      </div>

      <div className="grid min-h-0 flex-1 gap-5 lg:grid-cols-[1.16fr_0.84fr]">
        <BrutalCard className="grid min-h-0 place-items-center bg-presentation-paper p-4 md:p-6">
          <div className="relative grid h-full min-h-80 w-full place-items-center border-4 border-dashed border-presentation-ink bg-presentation-surface/60 p-7">
            <span className="absolute left-3 top-2 font-mono text-sm font-black uppercase">Margin</span>
            <div className="relative grid h-full w-full place-items-center border-[10px] border-presentation-ink bg-presentation-accent p-7 text-presentation-surface">
              <span className="absolute left-3 top-2 bg-presentation-ink px-2 py-1 font-mono text-sm font-black uppercase">Border</span>
              <div className="relative grid h-full w-full place-items-center bg-presentation-paper p-7 text-presentation-ink">
                <span className="absolute left-3 top-2 font-mono text-sm font-black uppercase text-presentation-accent">Padding</span>
                <div className="grid h-full min-h-24 w-full place-items-center border-[3px] border-presentation-ink bg-presentation-surface p-3 text-center shadow-[4px_4px_0_var(--presentation-ink)]">
                  <div>
                    <strong className="font-mono text-xl font-black uppercase md:text-3xl">Content</strong>
                    <p className="mt-1 text-sm font-bold">text · image · child</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BrutalCard>

        <div className="grid min-h-0 grid-rows-[1fr_auto] gap-4">
          <BrutalCard className="flex min-h-0 flex-col justify-center bg-presentation-ink p-5 text-presentation-surface md:p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm font-black uppercase tracking-widest">Default calculation</span>
              <Calculator className="size-6" strokeWidth={3} aria-hidden="true" />
            </div>
            <p className="mt-5 font-mono text-lg font-black leading-relaxed md:text-2xl">
              Box өргөн =<br />
              <span className="text-presentation-accent">content width</span><br />
              + left/right padding<br />
              + left/right border
            </p>
            <div className="mt-5 border-l-4 border-presentation-accent bg-presentation-surface/10 px-4 py-3 font-mono text-base font-black">
              300 + 40 + 6 = <span className="text-presentation-accent">346px</span>
            </div>
            <p className="mt-3 text-sm font-bold text-presentation-surface/80">Margin нь box-ийн гаднах тусдаа зай.</p>
          </BrutalCard>

          <BrutalCard shadow="sm" className="bg-presentation-accent p-4 text-presentation-surface">
            <code className="font-mono text-lg font-black">box-sizing: border-box;</code>
            <p className="mt-2 text-base font-bold leading-relaxed">
              width дотор padding ба border-ийг багтаана. Хэмжээс тооцоход илүү ойлгомжтой.
            </p>
          </BrutalCard>
        </div>
      </div>
    </Slide>
  );
}
