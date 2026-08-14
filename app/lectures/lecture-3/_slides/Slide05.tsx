import {
  BrutalCard,
  BrutalTag,
  Eyebrow,
  Slide,
} from "@/components/presentation";
import { LayoutTemplate, Map } from "lucide-react";

import { TOTAL_SLIDES } from "./constants";

const elements = [
  ["<header>", "Page эсвэл section-ийн эхлэл"],
  ["<nav>", "Үндсэн холбоосуудын бүлэг"],
  ["<main>", "Page-ийн цорын ганц гол content"],
  ["<article>", "Бие даан уншигдах content"],
  ["<section>", "Нэг сэдэвтэй хэсэг, ихэвчлэн heading-тэй"],
  ["<aside>", "Гол content-той шууд бус холбоотой нэмэлт"],
  ["<footer>", "Page эсвэл section-ийн төгсгөл"],
] as const;

export default function Slide05() {
  return (
    <Slide
      number="06"
      label="Semantic element-үүд"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <Map className="size-4" aria-hidden="true" />
            Page-ийн газрын зураг
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-6xl">
            Аль element-ийг хаана ашиглах вэ?
          </h2>
        </div>
        <BrutalTag className="gap-2">
          <LayoutTemplate className="size-4" aria-hidden="true" /> 7 landmark
        </BrutalTag>
      </div>

      <div className="grid min-h-0 flex-1 gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <BrutalCard className="grid min-h-0 grid-rows-[auto_1fr_auto] gap-2 bg-presentation-paper p-3">
          <div className="border-[3px] border-presentation-ink bg-presentation-accent px-3 py-2 text-center font-mono text-sm font-black text-presentation-surface">
            &lt;header&gt; + &lt;nav&gt;
          </div>
          <div className="grid min-h-0 grid-cols-[1fr_0.4fr] gap-2">
            <div className="grid min-h-0 grid-rows-[auto_1fr] gap-2 border-[3px] border-presentation-ink bg-presentation-surface p-2">
              <div className="bg-presentation-ink px-3 py-2 text-center font-mono text-sm font-black text-presentation-surface">
                &lt;main&gt;
              </div>
              <div className="grid min-h-0 grid-rows-2 gap-2">
                <div className="grid place-items-center border-[3px] border-presentation-ink bg-presentation-paper font-mono text-sm font-black text-presentation-accent">
                  &lt;article&gt;
                </div>
                <div className="grid place-items-center border-[3px] border-presentation-ink bg-presentation-paper font-mono text-sm font-black text-presentation-accent">
                  &lt;section&gt;
                </div>
              </div>
            </div>
            <div className="grid place-items-center border-[3px] border-presentation-ink bg-presentation-accent px-2 font-mono text-sm font-black text-presentation-surface [writing-mode:vertical-rl]">
              &lt;aside&gt;
            </div>
          </div>
          <div className="border-[3px] border-presentation-ink bg-presentation-ink px-3 py-2 text-center font-mono text-sm font-black text-presentation-surface">
            &lt;footer&gt;
          </div>
        </BrutalCard>

        <BrutalCard className="min-h-0 overflow-hidden p-0">
          <div className="grid h-full grid-rows-[repeat(7,minmax(0,1fr))]">
            {elements.map(([tag, copy], index) => (
              <div
                key={tag}
                className={`grid min-h-0 grid-cols-[7rem_1fr] items-center border-b-[3px] border-presentation-ink last:border-b-0 ${index % 2 === 0 ? "bg-presentation-surface" : "bg-presentation-paper"}`}
              >
                <code className="px-3 font-mono text-sm font-black text-presentation-accent md:text-base">
                  {tag}
                </code>
                <p className="flex h-full items-center border-l-[3px] border-presentation-ink px-3 text-sm font-bold leading-snug md:text-base">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </BrutalCard>
      </div>
    </Slide>
  );
}
