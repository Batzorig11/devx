import { BrutalCard, BrutalTag, Eyebrow, Slide } from "@/components/presentation";
import { CornerDownLeft, Minus, Space } from "lucide-react";

import { TOTAL_SLIDES } from "./constants";

const emptyElements = [
  ["<br>", "Line break", "Текстийг дараагийн мөрөөс үргэлжлүүлнэ.", CornerDownLeft],
  ["<hr>", "Thematic break", "Content-ийн сэдэв солигдсоныг заана.", Minus],
] as const;

export default function Slide09() {
  return (
    <Slide number="10" label="End tag-гүй element" totalSlides={TOTAL_SLIDES}>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <Space className="size-4" aria-hidden="true" />
            Content байхгүй element
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-7xl">
            Зарим element end tag-гүй
          </h2>
        </div>
        <BrutalTag>Empty element</BrutalTag>
      </div>

      <div className="grid min-h-0 flex-1 gap-5 lg:grid-cols-2">
        {emptyElements.map(([tag, title, copy, Icon], index) => (
          <BrutalCard
            key={tag}
            className={`flex min-h-0 flex-col justify-between p-5 md:p-7 ${index === 0 ? "bg-presentation-accent text-presentation-surface" : ""}`}
          >
            <div className="flex items-start justify-between">
              <code className={`font-mono text-6xl font-black md:text-8xl ${index === 0 ? "text-presentation-surface" : "text-presentation-accent"}`}>{tag}</code>
              <Icon className="size-9" strokeWidth={3} aria-hidden="true" />
            </div>
            <div className="mt-7 border-t-[3px] border-current pt-5">
              <h3 className="text-3xl font-black uppercase md:text-4xl">{title}</h3>
              <p className="mt-3 text-base font-bold leading-relaxed md:text-lg">{copy}</p>
            </div>
          </BrutalCard>
        ))}
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <div className="border-[3px] border-presentation-ink bg-presentation-surface p-3 text-center font-mono text-sm font-black shadow-[3px_3px_0_var(--presentation-ink)]">Start tag ✓</div>
        <div className="border-[3px] border-presentation-ink bg-presentation-ink p-3 text-center font-mono text-sm font-black text-presentation-surface shadow-[3px_3px_0_var(--presentation-accent)]">Content —</div>
        <div className="border-[3px] border-presentation-ink bg-presentation-surface p-3 text-center font-mono text-sm font-black shadow-[3px_3px_0_var(--presentation-ink)]">End tag —</div>
      </div>
    </Slide>
  );
}
