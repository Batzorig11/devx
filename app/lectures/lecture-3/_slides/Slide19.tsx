import {
  BrutalCard,
  BrutalTag,
  Eyebrow,
  Slide,
} from "@/components/presentation";
import { Check, FileCode2, Hammer, ListChecks } from "lucide-react";

import { CodePanel } from "../_components/CodePanel";
import { TOTAL_SLIDES } from "./constants";

const fileTree = `profile-card/
├── index.html
└── styles.css`;

const requirements = [
  ["Semantic", "header, main, article, footer ашигла."],
  ["Hooks", "class-аа давтан ашигла; нэг утгатай id нэм."],
  ["Visual", "color, background, border ашигла."],
  ["Size", "width/max-width болон min-height турш."],
  ["Space", "margin, padding хоёрыг зориудаар ялга."],
  ["Explain", "Box model-ийн 4 давхаргыг DevTools-оос заа."],
] as const;

export default function Slide19() {
  return (
    <Slide
      number="21"
      label="Дасгал · Profile card"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <Hammer className="size-4" aria-hidden="true" />
            Build · Inspect · Explain
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-6xl">
            Дасгал · Profile card
          </h2>
        </div>
        <BrutalTag className="gap-2">
          <ListChecks className="size-4" aria-hidden="true" /> 35 минут
        </BrutalTag>
      </div>

      <div className="grid min-h-0 flex-1 gap-5 lg:grid-cols-[0.76fr_1.24fr]">
        <div className="grid min-h-0 grid-rows-[auto_1fr] gap-4">
          <CodePanel code={fileTree} title="project" codeClassName="text-base leading-8 md:text-lg" />

          <BrutalCard className="flex min-h-0 flex-col justify-between bg-presentation-accent p-5 text-presentation-surface">
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm font-black uppercase tracking-widest">Definition of done</span>
              <FileCode2 className="size-6" strokeWidth={3} aria-hidden="true" />
            </div>
            <p className="my-5 text-2xl font-black leading-tight md:text-3xl">
              HTML нь CSS-гүй үед ч утгатай, CSS нь HTML-ийг өөрчлөхгүйгээр загварчилдаг байна.
            </p>
            <span className="border-t-[3px] border-presentation-surface pt-3 font-mono text-sm font-black uppercase">
              index.html ↔ styles.css
            </span>
          </BrutalCard>
        </div>

        <BrutalCard className="flex min-h-0 flex-col overflow-hidden p-0">
          <div className="flex items-center justify-between border-b-[3px] border-presentation-ink bg-presentation-ink px-4 py-3 text-presentation-surface">
            <span className="font-mono text-sm font-black uppercase tracking-widest">Acceptance checklist</span>
            <Check className="size-5" strokeWidth={4} aria-hidden="true" />
          </div>
          <div className="grid min-h-0 flex-1 grid-rows-6">
            {requirements.map(([title, copy], index) => (
              <div key={title} className={`grid min-h-0 grid-cols-[3rem_0.7fr_1.3fr] items-center border-b-[3px] border-presentation-ink last:border-b-0 ${index % 2 ? "bg-presentation-paper" : ""}`}>
                <span className="grid h-full place-items-center border-r-[3px] border-presentation-ink font-mono text-sm font-black">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong className="px-3 text-sm font-black uppercase md:text-base">{title}</strong>
                <p className="flex h-full items-center border-l-[3px] border-presentation-ink px-3 text-sm font-bold leading-snug md:text-base">{copy}</p>
              </div>
            ))}
          </div>
        </BrutalCard>
      </div>

      <p className="mt-4 border-[3px] border-presentation-ink bg-presentation-paper px-4 py-3 text-center text-base font-black shadow-[4px_4px_0_var(--presentation-ink)] md:text-lg">
        AI-д шалгуулахаас өмнө өөрөө browser дээр нээж, selector бүр аль element-д үйлчилснийг тайлбарла.
      </p>
    </Slide>
  );
}
