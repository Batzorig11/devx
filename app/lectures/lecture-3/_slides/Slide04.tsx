import {
  BrutalCard,
  BrutalTag,
  Eyebrow,
  Slide,
} from "@/components/presentation";
import { Braces, Check, ScanSearch } from "lucide-react";

import { TOTAL_SLIDES } from "./constants";

const genericCode = `<div class="top">
  <div class="links">...</div>
</div>
<div class="content">...</div>
<div class="bottom">...</div>`;

const semanticCode = `<header>
  <nav>...</nav>
</header>
<main>...</main>
<footer>...</footer>`;

export default function Slide04() {
  return (
    <Slide
      number="05"
      label="Semantic HTML"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <ScanSearch className="size-4" aria-hidden="true" />
            Structure + Meaning
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-7xl">
            Semantic HTML гэж юу вэ?
          </h2>
        </div>
        <BrutalTag>Tag нэр нь үүргээ хэлнэ</BrutalTag>
      </div>

      <div className="grid min-h-0 flex-1 gap-5 lg:grid-cols-2">
        <BrutalCard className="flex min-h-0 flex-col overflow-hidden p-0">
          <div className="flex items-center justify-between border-b-[3px] border-presentation-ink px-4 py-3">
            <span className="font-mono text-sm font-black uppercase">Generic container</span>
            <Braces className="size-5" strokeWidth={3} aria-hidden="true" />
          </div>
          <pre className="flex min-h-0 flex-1 items-center overflow-auto bg-presentation-paper p-5 font-mono text-base font-black leading-8 md:text-lg">
            <code>{genericCode}</code>
          </pre>
          <p className="border-t-[3px] border-presentation-ink p-4 text-base font-bold md:text-lg">
            <code>&lt;div&gt;</code> нь зөв боловч өөрөө ямар үүрэгтэйгээ хэлэхгүй.
          </p>
        </BrutalCard>

        <BrutalCard className="flex min-h-0 flex-col overflow-hidden bg-presentation-accent p-0 text-presentation-surface">
          <div className="flex items-center justify-between border-b-[3px] border-presentation-ink px-4 py-3">
            <span className="font-mono text-sm font-black uppercase">Semantic structure</span>
            <Check className="size-5" strokeWidth={4} aria-hidden="true" />
          </div>
          <pre className="flex min-h-0 flex-1 items-center overflow-auto bg-presentation-ink p-5 font-mono text-base font-black leading-8 md:text-lg">
            <code>{semanticCode}</code>
          </pre>
          <p className="border-t-[3px] border-presentation-ink p-4 text-base font-bold md:text-lg">
            Хүн, browser, search engine, screen reader бүгд бүтцийг ойлгоно.
          </p>
        </BrutalCard>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          ["Уншихад", "Кодын бүтэц шууд ойлгогдоно"],
          ["Хүртээмжид", "Screen reader landmark танина"],
          ["Хайлтад", "Content-ийн утга тодорхой болно"],
        ].map(([title, copy]) => (
          <div key={title} className="border-[3px] border-presentation-ink bg-presentation-surface px-4 py-3 shadow-[3px_3px_0_var(--presentation-ink)]">
            <strong className="font-mono text-sm uppercase text-presentation-accent">{title}</strong>
            <p className="mt-1 text-base font-bold">{copy}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
}
