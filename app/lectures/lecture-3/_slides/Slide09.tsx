import {
  BrutalCard,
  BrutalTag,
  Eyebrow,
  Slide,
} from "@/components/presentation";
import { Braces, Code2 } from "lucide-react";

import { TOTAL_SLIDES } from "./constants";

export default function Slide09() {
  return (
    <Slide
      number="10"
      label="CSS syntax"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <Code2 className="size-4" aria-hidden="true" />
            Selector · Property · Value
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-7xl">
            CSS rule-ийн бүтэц
          </h2>
        </div>
        <BrutalTag>Нэг rule · Хоёр declaration</BrutalTag>
      </div>

      <BrutalCard className="flex min-h-64 flex-1 flex-col items-center justify-center bg-presentation-ink p-5 text-presentation-surface md:min-h-72">
        <code className="whitespace-nowrap font-mono text-[clamp(1.55rem,5vw,5.2rem)] font-black tracking-[-0.07em]">
          <span className="text-presentation-accent">.card</span> {`{ `}
          <span>color</span>
          <span className="text-presentation-accent">:</span>{" "}
          <span className="text-presentation-paper">navy</span>
          <span className="text-presentation-accent">;</span> {`}`}
        </code>

        <div className="mt-8 grid w-full max-w-5xl grid-cols-[1fr_0.9fr_0.9fr] text-center font-mono text-sm font-black uppercase">
          <div>
            <div className="mx-auto h-5 w-0.75 bg-presentation-accent" />
            <div className="border-[3px] border-presentation-surface p-3 text-presentation-accent">Selector</div>
          </div>
          <div>
            <div className="mx-auto h-5 w-0.75 bg-presentation-surface" />
            <div className="border-y-[3px] border-presentation-surface bg-presentation-accent p-3">Property</div>
          </div>
          <div>
            <div className="mx-auto h-5 w-0.75 bg-presentation-paper" />
            <div className="border-[3px] border-presentation-surface p-3 text-presentation-paper">Value</div>
          </div>
        </div>
      </BrutalCard>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <BrutalCard shadow="sm" className="p-4 text-center">
          <code className="font-mono text-lg font-black text-presentation-accent">.card</code>
          <p className="mt-2 text-base font-bold">Аль HTML element-ийг сонгох вэ?</p>
        </BrutalCard>
        <BrutalCard shadow="sm" className="bg-presentation-accent p-4 text-center text-presentation-surface">
          <Braces className="mx-auto size-6" strokeWidth={3} aria-hidden="true" />
          <p className="mt-2 text-base font-bold">Declaration-ууд <code>{`{ }`}</code> дотор байрлана.</p>
        </BrutalCard>
        <BrutalCard shadow="sm" className="p-4 text-center">
          <code className="font-mono text-lg font-black">color: navy;</code>
          <p className="mt-2 text-base font-bold">Property ба value-г <code>:</code>-оор холбоно.</p>
        </BrutalCard>
      </div>
    </Slide>
  );
}
