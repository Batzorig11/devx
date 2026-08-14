import { BrutalCard, BrutalTag, Eyebrow, Slide } from "@/components/presentation";
import { Eye, Palette } from "lucide-react";

import { TOTAL_SLIDES } from "./constants";

const formats = [
  ["Keyword", "tomato", "Уншихад амар, сонголт хязгаартай"],
  ["HEX", "#6569df", "Дизайнд хамгийн түгээмэл"],
  ["RGB", "rgb(101 105 223)", "Red · Green · Blue"],
  ["HSL", "hsl(238 64% 64%)", "Hue · Saturation · Lightness"],
] as const;

const swatches = [
  ["#0A1E41", "Ink"],
  ["#6569DF", "Accent"],
  ["#EFEEE8", "Paper"],
  ["#FFFDF5", "Surface"],
] as const;

export default function Slide13() {
  return (
    <Slide number="15" label="CSS colors" totalSlides={TOTAL_SLIDES} className="md:overflow-y-auto xl:overflow-hidden">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <Palette className="size-4" aria-hidden="true" />
            Text · Surface · Border
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-6xl">
            CSS өнгө
          </h2>
        </div>
        <BrutalTag>color ≠ background-color</BrutalTag>
      </div>

      <div className="grid min-h-0 flex-1 gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <BrutalCard className="flex min-h-0 flex-col overflow-hidden p-0">
          <div className="border-b-[3px] border-presentation-ink bg-presentation-ink px-4 py-3 font-mono text-base font-black uppercase tracking-widest text-presentation-surface">
            Color formats
          </div>
          <div className="grid min-h-0 flex-1 text-2xl grid-rows-4">
            {formats.map(([name, value, copy], index) => (
              <div
                key={name}
                className={`grid grid-cols-[0.62fr_1.08fr_1.3fr] border-b-[3px] border-presentation-ink last:border-b-0 ${index % 2 ? "bg-presentation-paper" : ""}`}
              >
                <strong className="flex items-center px-3  uppercase">{name}</strong>
                <code className="flex items-center border-x-[3px] border-presentation-ink px-3 font-mono  font-black text-presentation-accent">
                  {value}
                </code>
                <p className="flex items-center px-3 font-bold leading-snug ">{copy}</p>
              </div>
            ))}
          </div>
        </BrutalCard>

        <div className="grid min-h-0 grid-rows-[1fr_auto] gap-4">
          <div className="grid grid-cols-2 grid-rows-2 gap-3">
            {swatches.map(([color, label], index) => (
              <div
                key={color}
                className="flex min-h-0 flex-col justify-between border-[3px] border-presentation-ink p-3 shadow-[4px_4px_0_var(--presentation-ink)]"
                style={{ backgroundColor: color, color: index < 2 ? "#fffdf5" : "#0a1e41" }}
              >
                <span className="font-mono text-base font-black uppercase">{label}</span>
                <code className="font-mono text-lg font-black">{color}</code>
              </div>
            ))}
          </div>

          <BrutalCard
            shadow="sm"
            className="flex items-center gap-4 bg-presentation-accent p-4 text-presentation-surface"
          >
            <Eye className="size-7 shrink-0" strokeWidth={3} aria-hidden="true" />
            <p className="text-base font-bold leading-relaxed md:text-lg">
              Өнгө сонгохдоо contrast-ыг шалга. Жижиг текст background-аасаа тод ялгарах ёстой.
            </p>
          </BrutalCard>
        </div>
      </div>

      <code className="mt-4 block border-[3px] border-presentation-ink bg-presentation-paper px-4 py-3 text-center font-mono text-base font-black shadow-[3px_3px_0_var(--presentation-ink)] md:text-lg">
        .title {`{ color: #0a1e41; }`} · .card {`{ background-color: #fffdf5; }`}
      </code>
    </Slide>
  );
}
