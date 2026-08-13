import {
  BrutalCard,
  BrutalTag,
  Eyebrow,
  Slide,
} from "@/components/presentation";
import { Braces, Tags } from "lucide-react";

import { TOTAL_SLIDES } from "./constants";

const elementExamples = [
  ["<h1>", "My First Heading", "</h1>"],
  ["<p>", "My first paragraph.", "</p>"],
  ["<br>", "байхгүй", "байхгүй"],
] as const;

export default function Slide03() {
  return (
    <Slide
      number="04"
      label="HTML element гэж юу вэ?"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <Tags className="size-4" aria-hidden="true" />
            Start tag · Content · End tag
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-7xl">
            HTML element гэж юу вэ?
          </h2>
        </div>
        <BrutalTag>Everything from start to end</BrutalTag>
      </div>

      <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
        <BrutalCard
          shadow="sm"
          className="flex items-center gap-4 bg-presentation-accent p-4 text-presentation-surface"
        >
          <Braces className="hidden size-10 shrink-0 md:block" strokeWidth={3} aria-hidden="true" />
          <p className="text-base font-black leading-snug md:text-lg">
            HTML element нь эхлэх tag, тодорхой content, төгсгөх tag-аас бүрдэнэ.
          </p>
        </BrutalCard>

        <BrutalCard
          shadow="sm"
          className="flex flex-col justify-center bg-presentation-ink p-4 text-presentation-surface"
        >
          <code className="whitespace-nowrap font-mono text-[clamp(1.15rem,2.7vw,2.35rem)] font-black tracking-[-0.055em]">
            <span className="text-presentation-accent">{`<tagname>`}</span>{" "}
            <span>Content энд байрлана...</span>{" "}
            <span className="text-presentation-accent">{`</tagname>`}</span>
          </code>
          <p className="mt-3 border-t border-presentation-surface/40 pt-3 text-xs font-bold leading-snug md:text-sm">
            HTML element гэдэг нь эхлэх tag-аас төгсгөх tag хүртэлх бүхэл хэсэг юм.
          </p>
        </BrutalCard>
      </div>

      <div className="my-4 grid gap-3 sm:grid-cols-2">
        <BrutalCard shadow="sm" className="bg-presentation-paper px-4 py-3">
          <code className="font-mono text-lg font-black md:text-2xl">
            <span className="text-presentation-accent">{`<h1>`}</span>
            My First Heading
            <span className="text-presentation-accent">{`</h1>`}</span>
          </code>
        </BrutalCard>
        <BrutalCard shadow="sm" className="bg-presentation-paper px-4 py-3">
          <code className="font-mono text-lg font-black md:text-2xl">
            <span className="text-presentation-accent">{`<p>`}</span>
            My first paragraph.
            <span className="text-presentation-accent">{`</p>`}</span>
          </code>
        </BrutalCard>
      </div>

      <BrutalCard className="min-h-0 flex-1 overflow-hidden p-0">
        <div className="grid grid-cols-[0.72fr_1.45fr_0.72fr] border-b-[3px] border-presentation-ink bg-presentation-ink font-mono text-[10px] font-black uppercase text-presentation-surface md:text-sm">
          <div className="p-3">Эхлэх tag</div>
          <div className="border-x-[3px] border-presentation-surface p-3">
            Element-ийн content
          </div>
          <div className="p-3">Төгсгөх tag</div>
        </div>

        {elementExamples.map(([start, content, end]) => (
          <div
            key={start}
            className="grid min-h-14 grid-cols-[0.72fr_1.45fr_0.72fr] border-b-[3px] border-presentation-ink last:border-b-0"
          >
            <div className="flex items-center bg-presentation-paper px-3 py-2">
              <code className="font-mono text-base font-black text-presentation-accent md:text-xl">
                {start}
              </code>
            </div>
            <div className="flex items-center border-x-[3px] border-presentation-ink px-3 py-2">
              <span className={`font-bold ${content === "байхгүй" ? "italic text-presentation-muted" : ""}`}>
                {content}
              </span>
            </div>
            <div className="flex items-center bg-presentation-paper px-3 py-2">
              <code className={`font-mono text-base font-black md:text-xl ${end === "байхгүй" ? "italic text-presentation-muted" : "text-presentation-accent"}`}>
                {end}
              </code>
            </div>
          </div>
        ))}
      </BrutalCard>
    </Slide>
  );
}
