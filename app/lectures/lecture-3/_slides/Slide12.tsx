import {
  BrutalCard,
  BrutalTag,
  Eyebrow,
  Slide,
} from "@/components/presentation";
import { Check, Layers3, Trophy } from "lucide-react";

import { CodePanel } from "../_components/CodePanel";
import { TOTAL_SLIDES } from "./constants";

const html = `<p id="intro" class="note">Сайн уу!</p>`;
const css = `p      { color: navy;   }  /* 0-0-1 */
.note  { color: purple; }  /* 0-1-0 */
#intro { color: red;    }  /* 1-0-0 */`;

const priority = [
  ["1", "#id", "Эдгээр 3-аас хамгийн specific"],
  ["2", ".class", "Дахин ашиглагдана"],
  ["3", "element", "Ерөнхий дүрэм"],
] as const;

export default function Slide12() {
  return (
    <Slide
      number="14"
      label="Cascade ба specificity"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <Layers3 className="size-4" aria-hidden="true" />
            Нэг element · Олон rule
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-6xl">
            Аль style ялах вэ?
          </h2>
        </div>
        <BrutalTag>Specificity → order</BrutalTag>
      </div>

      <div className="grid min-h-0 flex-1 gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid min-h-0 grid-rows-[auto_1fr] gap-3">
          <CodePanel code={html} title="index.html" codeClassName="flex items-center text-base leading-8 md:text-lg" />
          <CodePanel code={css} title="styles.css" codeClassName="flex items-center text-lg leading-10 md:text-xl" />
        </div>

        <BrutalCard className="flex min-h-0 flex-col overflow-hidden p-0">
          <div className="flex items-center justify-between border-b-[3px] border-presentation-ink bg-presentation-accent px-4 py-3 text-presentation-surface">
            <span className="font-mono text-sm font-black uppercase tracking-widest">Specificity ladder</span>
            <Trophy className="size-5" strokeWidth={3} aria-hidden="true" />
          </div>
          <div className="grid min-h-0 flex-1 grid-rows-3">
            {priority.map(([rank, selector, copy], index) => (
              <div
                key={selector}
                className={`grid grid-cols-[3.5rem_1fr] items-center border-b-[3px] border-presentation-ink last:border-b-0 ${index === 0 ? "bg-presentation-paper" : ""}`}
              >
                <span className={`grid h-full place-items-center border-r-[3px] border-presentation-ink font-mono text-2xl font-black ${index === 0 ? "bg-presentation-ink text-presentation-surface" : ""}`}>
                  {rank}
                </span>
                <div className="px-4 py-3">
                  <code className="font-mono text-2xl font-black text-presentation-accent">{selector}</code>
                  <p className="mt-1 text-base font-bold">{copy}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t-[3px] border-presentation-ink bg-presentation-accent p-4 text-presentation-surface">
            <p className="flex items-center gap-2 font-black">
              <Check className="size-5" strokeWidth={4} aria-hidden="true" /> Winner: <code>#intro</code>
            </p>
            <p className="mt-1 text-base font-bold">Эдгээр selector-оос id хамгийн specific. Тэнцвэл сүүлд бичсэн rule ялна.</p>
          </div>
        </BrutalCard>
      </div>
    </Slide>
  );
}
