import {
  BrutalCard,
  BrutalTag,
  Eyebrow,
  Slide,
} from "@/components/presentation";
import { Box, Braces, Check, Layers3, Palette } from "lucide-react";

import { TOTAL_SLIDES } from "./constants";

const stages = [
  {
    number: "01",
    title: "HTML-ээ утгатай болгоно",
    copy: "Comment, class, id болон semantic element-үүдээр document-оо ойлгомжтой зохион байгуулна.",
    icon: Braces,
  },
  {
    number: "02",
    title: "CSS-ээр дүр төрх өгнө",
    copy: "Syntax, selector, color, background, border болон хэмжээсүүдийг ашиглана.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Box model-ийг харна",
    copy: "Content, padding, border, margin дөрөв layout-д хэрхэн нөлөөлдгийг тооцно.",
    icon: Box,
  },
] as const;

export default function Slide01() {
  return (
    <Slide
      number="02"
      label="Өнөөдрийн маршрут"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <Layers3 className="size-4" aria-hidden="true" />
            Structure → Style → Space
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-7xl">
            Өнөөдөр юу бүтээх вэ?
          </h2>
        </div>
        <BrutalTag className="gap-2">
          <Check className="size-4" strokeWidth={4} aria-hidden="true" /> 3 үе шат
        </BrutalTag>
      </div>

      <div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-3">
        {stages.map(({ number, title, copy, icon: Icon }, index) => (
          <BrutalCard
            key={number}
            className={`flex min-h-0 flex-col justify-between p-5 md:p-6 ${index === 1 ? "bg-presentation-accent text-presentation-surface" : ""}`}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-6xl font-black leading-none tracking-[-0.09em] opacity-25 md:text-8xl">
                {number}
              </span>
              <span className={`grid size-12 place-items-center border-[3px] ${index === 1 ? "border-presentation-surface bg-presentation-ink" : "border-presentation-ink bg-presentation-paper"}`}>
                <Icon className="size-6" strokeWidth={3} aria-hidden="true" />
              </span>
            </div>
            <div className="mt-7 border-t-[3px] border-current pt-5">
              <h3 className="text-2xl font-black uppercase leading-tight md:text-3xl">
                {title}
              </h3>
              <p className="mt-3 text-base font-bold leading-relaxed md:text-lg">
                {copy}
              </p>
            </div>
          </BrutalCard>
        ))}
      </div>

      <p className="mt-5 border-[3px] border-presentation-ink bg-presentation-ink px-4 py-3 text-center font-mono text-base font-black uppercase tracking-[0.08em] text-presentation-surface shadow-[4px_4px_0_var(--presentation-accent)]">
        Эцсийн үр дүн · Semantic profile card + external stylesheet
      </p>
    </Slide>
  );
}
