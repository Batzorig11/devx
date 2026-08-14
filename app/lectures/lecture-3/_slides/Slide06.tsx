import {
  BrutalCard,
  BrutalTag,
  Eyebrow,
  Slide,
} from "@/components/presentation";
import { Check, FileCode2, ListChecks } from "lucide-react";

import { CodePanel } from "../_components/CodePanel";
import { semanticDocument, TOTAL_SLIDES } from "./constants";

const checks = [
  ["01", "Нэг main", "Page бүр нэг л үндсэн <main>-тай."],
  ["02", "Heading дараалал", "h1 → h2 → h3 логик дарааллыг хадгал."],
  ["03", "Үүргээр нь сонго", "Харагдах байдлаар бус, content-ийн утгаар tag сонго."],
  ["04", "div хэрэгтэй хэвээр", "Утгатай tag тохирохгүй layout wrapper-д <div> зөв."],
] as const;

export default function Slide06() {
  return (
    <Slide
      number="07"
      label="Semantic document"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <FileCode2 className="size-4" aria-hidden="true" />
            Бүтэн document
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-6xl">
            Утгатай бүтэц бичье
          </h2>
        </div>
        <BrutalTag className="gap-2">
          <ListChecks className="size-4" aria-hidden="true" /> 4 rules
        </BrutalTag>
      </div>

      <div className="grid min-h-0 flex-1 gap-5 lg:grid-cols-[1.18fr_0.82fr]">
        <CodePanel
          code={semanticDocument}
          title="index.html"
          codeClassName="text-sm leading-5 md:text-sm md:leading-5"
        />

        <div className="grid min-h-0 grid-rows-4 gap-3">
          {checks.map(([number, title, copy], index) => (
            <BrutalCard
              key={number}
              shadow="sm"
              className={`flex min-h-0 items-center gap-3 p-3 md:p-4 ${index === 2 ? "bg-presentation-accent text-presentation-surface" : ""}`}
            >
              <span className={`grid size-10 shrink-0 place-items-center border-[3px] font-mono text-sm font-black ${index === 2 ? "border-presentation-surface bg-presentation-ink" : "border-presentation-ink bg-presentation-paper"}`}>
                {number}
              </span>
              <div>
                <h3 className="flex items-center gap-2 text-base font-black uppercase md:text-lg">
                  {title}
                  <Check className="size-4" strokeWidth={4} aria-hidden="true" />
                </h3>
                <p className="mt-1 text-sm font-bold leading-snug md:text-base">{copy}</p>
              </div>
            </BrutalCard>
          ))}
        </div>
      </div>
    </Slide>
  );
}
