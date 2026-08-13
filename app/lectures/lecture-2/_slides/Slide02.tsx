import { BrutalCard, BrutalTag, Eyebrow, Slide } from "@/components/presentation";
import { Code2, FileText, ScanText } from "lucide-react";

import { CodePanel } from "../_components/CodePanel";
import { TOTAL_SLIDES } from "./constants";

const exampleCode = `<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>`;

const explanations = [
  [
    "<!DOCTYPE html>",
    "Энэ document нь HTML5 document гэдгийг тодорхойлно.",
  ],
  ["<html>", "HTML хуудасны үндсэн буюу root element."],
  ["<head>", "HTML хуудасны тухай meta мэдээллийг агуулна."],
  [
    "<title>",
    "Хуудасны нэрийг тодорхойлно. Энэ нэр browser-ийн title bar эсвэл tab дээр харагдана.",
  ],
  [
    "<body>",
    "Document-ийн body-г тодорхойлж, гарчиг, догол мөр, зураг, холбоос, хүснэгт, жагсаалт зэрэг харагдах бүх content-ийг агуулна.",
  ],
  ["<h1>", "Том хэмжээтэй гол гарчгийг тодорхойлно."],
  ["<p>", "Догол мөр буюу paragraph-ийг тодорхойлно."],
] as const;

export default function Slide02() {
  return (
    <Slide
      number="03"
      label="Энгийн HTML document"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <Code2 className="size-4" aria-hidden="true" />
            A simple HTML document
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-7xl">
            Жишээг тайлбарлая
          </h2>
        </div>
        <BrutalTag className="gap-2">
          <ScanText className="size-4" aria-hidden="true" /> 7 element
        </BrutalTag>
      </div>

      <div className="grid min-h-0 flex-1 gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="grid min-h-0 grid-rows-[auto_1fr] gap-3">
          <BrutalCard
            shadow="sm"
            className="flex items-center justify-between bg-presentation-accent px-4 py-3 text-presentation-surface"
          >
            <span className="font-mono text-xs font-black uppercase tracking-[0.14em]">
              Example
            </span>
            <FileText className="size-5" strokeWidth={3} aria-hidden="true" />
          </BrutalCard>
          <CodePanel
            code={exampleCode}
            codeClassName="text-xs leading-5 md:text-sm md:leading-6"
          />
        </div>

        <BrutalCard className="flex min-h-0 flex-col overflow-hidden p-0">
          <div className="border-b-[3px] border-presentation-ink bg-presentation-ink px-4 py-3 text-presentation-surface">
            <p className="font-mono text-xs font-black uppercase tracking-[0.14em]">
              Example explained
            </p>
          </div>

          <ol className="flex min-h-0 flex-1 flex-col">
            {explanations.map(([tag, explanation], index) => (
              <li
                key={tag}
                className="grid grid-cols-[auto_9.5rem_1fr] items-center gap-3 border-b-[3px] border-presentation-ink px-3 py-2 last:border-b-0"
              >
                <span className="grid size-8 shrink-0 place-items-center bg-presentation-accent font-mono text-[10px] font-black text-presentation-surface">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <code className="font-mono text-xs font-black text-presentation-accent md:text-sm">
                  {tag}
                </code>
                <p className="text-xs font-bold leading-snug md:text-sm">
                  {explanation}
                </p>
              </li>
            ))}
          </ol>
        </BrutalCard>
      </div>
    </Slide>
  );
}
