import { BrowserFrame, BrutalCard, BrutalTag, Eyebrow, Slide } from "@/components/presentation";
import { AppWindow, ArrowRight, Code2, EyeOff, Monitor } from "lucide-react";

import { TOTAL_SLIDES } from "./constants";

export default function Slide05() {
  return (
    <Slide number="06" label="Browser HTML-ийг дүрслэх нь" totalSlides={TOTAL_SLIDES}>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <AppWindow className="size-4" aria-hidden="true" />
            Read · Interpret · Display
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-7xl">
            Browser tag-ийг биш,
            <span className="block text-presentation-accent">үр дүнг харуулна.</span>
          </h2>
        </div>
        <BrutalTag>Chrome · Edge · Firefox · Safari</BrutalTag>
      </div>

      <div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-[0.9fr_auto_1.1fr] lg:items-center">
        <BrutalCard className="flex min-h-72 flex-col overflow-hidden p-0">
          <div className="flex items-center justify-between border-b-[3px] border-presentation-ink bg-presentation-surface px-4 py-3">
            <span className="font-mono text-xs font-black uppercase">HTML document</span>
            <Code2 className="size-5" strokeWidth={3} aria-hidden="true" />
          </div>
          <pre className="flex flex-1 items-center bg-presentation-ink p-5 font-mono text-base font-black leading-8 text-presentation-surface md:text-xl md:leading-10">
            <code>{`<h1>HTML сурцгаая</h1>\n<p>Browser кодыг уншина.</p>`}</code>
          </pre>
        </BrutalCard>

        <div className="flex flex-col items-center gap-3">
          <ArrowRight className="size-9 rotate-90 text-presentation-accent lg:rotate-0" strokeWidth={3} aria-hidden="true" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.12em]">Interpret</span>
        </div>

        <BrowserFrame
          title="localhost/index.html"
          className="min-h-72"
          bodyClassName="relative flex min-h-64 flex-col justify-center bg-white p-7 text-black"
        >
          <Monitor className="mb-5 size-7" strokeWidth={3} aria-hidden="true" />
          <h3 className="text-4xl font-bold md:text-5xl">HTML сурцгаая</h3>
          <p className="mt-4 text-lg">Browser кодыг уншина.</p>
          <span className="absolute bottom-4 right-4 flex items-center gap-2 font-mono text-[10px] font-black uppercase text-black/50">
            <EyeOff className="size-4" aria-hidden="true" /> Tags hidden
          </span>
        </BrowserFrame>
      </div>

      <p className="mt-5 border-[3px] border-presentation-ink bg-presentation-accent px-4 py-3 text-center font-black text-presentation-surface shadow-[4px_4px_0_var(--presentation-ink)]">
        Browser HTML document-ийг уншаад element бүрийн утгаар content-ийг зөв байрлуулан дүрсэлнэ.
      </p>
    </Slide>
  );
}
