import {
  BrutalCard,
  BrutalTag,
  Eyebrow,
  Slide,
} from "@/components/presentation";
import { Braces, Paintbrush, Palette } from "lucide-react";

import { TOTAL_SLIDES } from "./constants";

export default function Slide07() {
  return (
    <Slide
      number="08"
      label="CSS гэж юу вэ?"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <Palette className="size-4" aria-hidden="true" />
            Cascading Style Sheets
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-7xl">
            CSS дүр төрхийг удирдана
          </h2>
        </div>
        <BrutalTag>HTML = structure · CSS = style</BrutalTag>
      </div>

      <div className="grid min-h-0 flex-1 gap-5 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="grid min-h-0 grid-rows-2 gap-4">
          <BrutalCard className="flex min-h-0 flex-col justify-between p-5 md:p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm font-black uppercase tracking-widest">Structure</span>
              <Braces className="size-7" strokeWidth={3} aria-hidden="true" />
            </div>
            <div className="mt-4">
              <code className="font-mono text-3xl font-black text-presentation-accent md:text-5xl">{`<button>`}</code>
              <p className="mt-2 text-lg font-black">HTML: “Энэ бол button.”</p>
            </div>
          </BrutalCard>

          <BrutalCard className="flex min-h-0 flex-col justify-between bg-presentation-accent p-5 text-presentation-surface md:p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm font-black uppercase tracking-widest">Presentation</span>
              <Paintbrush className="size-7" strokeWidth={3} aria-hidden="true" />
            </div>
            <div className="mt-4">
              <code className="font-mono text-xl font-black md:text-3xl">button {`{ ... }`}</code>
              <p className="mt-2 text-lg font-black">CSS: “Ингэж харагд.”</p>
            </div>
          </BrutalCard>
        </div>

        <BrutalCard className="flex min-h-0 flex-col items-center justify-center bg-presentation-paper p-5 text-center md:p-8">
          <span className="font-mono text-base font-black uppercase tracking-[0.14em]">Same HTML · New CSS</span>
          <button className="mt-6 border-[3px] border-presentation-ink bg-presentation-surface px-6 py-3 text-xl font-black">
            Энгийн button
          </button>
          <span className="my-4 font-mono text-3xl font-black text-presentation-accent">↓ CSS ↓</span>
          <button className="rotate-[-2deg] border-[4px] border-presentation-ink bg-presentation-accent px-8 py-4 text-2xl font-black uppercase text-presentation-surface shadow-[8px_8px_0_var(--presentation-ink)]">
            Загвартай button
          </button>
          <p className="mt-7 max-w-xl border-t-[3px] border-presentation-ink pt-4 text-base font-bold leading-relaxed md:text-lg">
            Нэг stylesheet олон page-д үйлчилж чадна. Content өөрчлөхгүйгээр өнгө, хэмжээ, spacing, layout-ийг удирдана.
          </p>
        </BrutalCard>
      </div>
    </Slide>
  );
}
