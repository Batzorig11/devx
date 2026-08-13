import { BrutalTag, Eyebrow, Slide } from "@/components/presentation";
import { Braces, Layers3 } from "lucide-react";

import { TOTAL_SLIDES } from "./constants";

const bodyElements = [
  ["<h1>", "This is a heading", "</h1>"],
  ["<p>", "This is a paragraph.", "</p>"],
  ["<p>", "This is another paragraph.", "</p>"],
] as const;

export default function Slide04() {
  return (
    <Slide
      number="05"
      label="HTML page-ийн бүтэц"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <Layers3 className="size-4" aria-hidden="true" />
            Element дотор element
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-7xl">
            HTML page-ийн бүтэц
          </h2>
          <p className="mt-3 text-sm font-bold md:text-base">
            HTML page-ийн element-үүд хэрхэн давхарлан байрладгийг доорх зураг харуулна.
          </p>
        </div>
        <BrutalTag className="gap-2">
          <Braces className="size-4" aria-hidden="true" /> Nested structure
        </BrutalTag>
      </div>

      <div className="flex min-h-0 flex-1 flex-col border-4 border-presentation-ink bg-presentation-surface p-2 shadow-[7px_7px_0_var(--presentation-ink)]">
        <code className="mb-1 block w-fit bg-presentation-ink px-3 py-0.5 font-mono text-xs font-black text-presentation-surface">
          {`<html>`}
        </code>

        <div className="ml-3 border-[3px] border-presentation-ink bg-presentation-paper p-2 md:ml-5">
          <code className="mb-1 block w-fit bg-presentation-accent px-2 py-0.5 font-mono text-xs font-black text-presentation-surface">
            {`<head>`}
          </code>

          <div className="ml-4 border-[3px] border-presentation-ink bg-presentation-surface px-3 py-2 md:ml-8">
            <code className="font-mono text-sm font-black md:text-base">
              <span className="text-presentation-accent">{`<title>`}</span>
              Page title
              <span className="text-presentation-accent">{`</title>`}</span>
            </code>
          </div>

          <code className="mt-1 block w-fit bg-presentation-accent px-2 py-0.5 font-mono text-xs font-black text-presentation-surface">
            {`</head>`}
          </code>
        </div>

        <div className="ml-3 mt-2 flex min-h-0 flex-1 flex-col border-[3px] border-presentation-ink bg-presentation-paper p-2 md:ml-5">
          <code className="mb-1 block w-fit bg-presentation-accent px-2 py-0.5 font-mono text-xs font-black text-presentation-surface">
            {`<body>`}
          </code>

          <div className="ml-4 grid min-h-0 flex-1 gap-1 border-[3px] border-presentation-ink bg-white p-2 md:ml-8">
            {bodyElements.map(([start, content, end]) => (
              <div
                key={`${start}-${content}`}
                className="flex items-center border-[3px] border-presentation-ink bg-white px-3 py-1.5"
              >
                <code className="font-mono text-xs font-black md:text-base">
                  <span className="text-presentation-accent">{start}</span>
                  {content}
                  <span className="text-presentation-accent">{end}</span>
                </code>
              </div>
            ))}
          </div>

          <code className="mt-1 block w-fit bg-presentation-accent px-2 py-0.5 font-mono text-xs font-black text-presentation-surface">
            {`</body>`}
          </code>
        </div>

        <code className="mt-1 block w-fit bg-presentation-ink px-3 py-0.5 font-mono text-xs font-black text-presentation-surface">
          {`</html>`}
        </code>
      </div>
    </Slide>
  );
}
