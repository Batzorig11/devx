import { BrutalCard, BrutalTag, Eyebrow, Slide } from "@/components/presentation";
import { Check, FileCode2, Link2 } from "lucide-react";

import { CodePanel } from "../_components/CodePanel";
import { TOTAL_SLIDES } from "./constants";

const externalCode = `<head>
  <link rel="stylesheet" href="styles.css">
</head>`;

const methods = [
  ["External", "Олон page", "styles.css", "Тусдаа файл · Олон page-д дахин ашиглана", "Зөв сонголт"],
  ["Internal", "Нэг page", "<style>...</style>", "HTML-ийн <head> дотор · Нэг page-д", "Зарим үед"],
  ["Inline", "Нэг element", 'style="color: red"', "Element дээр шууд · Дахин ашиглахад хэцүү", "Зайлсхий"],
] as const;

export default function Slide08() {
  return (
    <Slide
      number="09"
      label="CSS-ийг HTML-тэй холбох"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <Link2 className="size-4" aria-hidden="true" />
            HTML ↔ CSS
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-6xl">
            CSS-ээ хэрхэн холбох вэ?
          </h2>
        </div>
        <BrutalTag className="gap-2">
          <Check className="size-4" strokeWidth={4} aria-hidden="true" /> External recommended
        </BrutalTag>
      </div>

      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <CodePanel code={externalCode} title="index.html" codeClassName="text-sm leading-7 md:text-base" />
        <BrutalCard className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 bg-presentation-paper p-4 md:p-5">
          <div className="grid min-h-28 place-items-center border-[3px] border-presentation-ink bg-presentation-surface text-center shadow-[4px_4px_0_var(--presentation-ink)]">
            <FileCode2 className="size-8" strokeWidth={3} aria-hidden="true" />
            <code className="font-mono text-lg font-black">index.html</code>
          </div>
          <div className="font-mono text-3xl font-black text-presentation-accent">→</div>
          <div className="grid min-h-28 place-items-center border-[3px] border-presentation-ink bg-presentation-accent text-center text-presentation-surface shadow-[4px_4px_0_var(--presentation-ink)]">
            <FileCode2 className="size-8" strokeWidth={3} aria-hidden="true" />
            <code className="font-mono text-lg font-black">styles.css</code>
          </div>
        </BrutalCard>
      </div>

      <div className="mt-4 grid min-h-0 flex-1 gap-3 lg:grid-cols-3">
        {methods.map(([name, scope, code, copy, verdict], index) => (
          <BrutalCard
            key={name}
            shadow="sm"
            className={`flex min-h-0 flex-col justify-between p-4 ${index === 0 ? "bg-presentation-accent text-presentation-surface" : ""}`}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-2xl font-black uppercase">{name}</h3>
              <span
                className={`px-2 py-1 font-mono text-sm font-black uppercase ${index === 0 ? "bg-presentation-ink" : "bg-presentation-paper"}`}
              >
                {verdict}
              </span>
            </div>
            <span className="my-2 font-mono text-3xl font-black uppercase tracking-[-0.05em] opacity-25 md:text-5xl">
              {scope}
            </span>
            <code
              className={`my-2 block overflow-hidden text-ellipsis whitespace-nowrap border-[3px] px-3 py-2 font-mono text-xl font-black ${index === 0 ? "border-presentation-surface bg-presentation-ink" : "border-presentation-ink bg-presentation-paper text-presentation-accent"}`}
            >
              {code}
            </code>
            <p className="text-base font-bold leading-relaxed md:text-lg">{copy}</p>
          </BrutalCard>
        ))}
      </div>
    </Slide>
  );
}
