import {
  BrutalCard,
  BrutalTag,
  Eyebrow,
  Slide,
} from "@/components/presentation";
import { Fingerprint, Hash, Tags } from "lucide-react";

import { CodePanel } from "../_components/CodePanel";
import { TOTAL_SLIDES } from "./constants";

const classCode = `<article class="card featured">
  <h2 class="card-title">HTML & CSS</h2>
</article>

<article class="card">
  <h2 class="card-title">JavaScript</h2>
</article>`;

const idCode = `<section id="about">
  <h2>Миний тухай</h2>
</section>

<a href="#about">Миний тухай руу очих</a>`;

export default function Slide03() {
  return (
    <Slide
      number="04"
      label="class ба id"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <Fingerprint className="size-4" aria-hidden="true" />
            Нэр өгөөд сонго
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-7xl">
            class ба id
          </h2>
        </div>
        <BrutalTag>Attribute → CSS hook</BrutalTag>
      </div>

      <div className="grid min-h-0 flex-1 gap-5 lg:grid-cols-2">
        <BrutalCard className="grid min-h-0 grid-rows-[auto_1fr_auto] overflow-hidden p-0">
          <div className="flex items-center justify-between border-b-[3px] border-presentation-ink bg-presentation-accent px-4 py-3 text-presentation-surface">
            <div className="flex items-center gap-3">
              <Tags className="size-5" strokeWidth={3} aria-hidden="true" />
              <h3 className="text-2xl font-black">class</h3>
            </div>
            <code className="bg-presentation-ink px-2 py-1 font-mono text-sm font-black">.card</code>
          </div>
          <div className="min-h-0 p-3">
            <CodePanel code={classCode} title="Олон element" className="h-full shadow-none" codeClassName="text-sm leading-6 md:text-base" />
          </div>
          <p className="border-t-[3px] border-presentation-ink px-4 py-3 text-base font-bold md:text-lg">
            Дахин ашиглагдана · Нэг element олон class-тай байж болно.
          </p>
        </BrutalCard>

        <BrutalCard className="grid min-h-0 grid-rows-[auto_1fr_auto] overflow-hidden p-0">
          <div className="flex items-center justify-between border-b-[3px] border-presentation-ink bg-presentation-ink px-4 py-3 text-presentation-surface">
            <div className="flex items-center gap-3">
              <Hash className="size-5" strokeWidth={3} aria-hidden="true" />
              <h3 className="text-2xl font-black">id</h3>
            </div>
            <code className="bg-presentation-accent px-2 py-1 font-mono text-sm font-black">#about</code>
          </div>
          <div className="min-h-0 p-3">
            <CodePanel code={idCode} title="Цорын ганц element" className="h-full shadow-none" codeClassName="text-sm leading-6 md:text-base" />
          </div>
          <p className="border-t-[3px] border-presentation-ink px-4 py-3 text-base font-bold md:text-lg">
            Page дотор давтагдахгүй · Anchor, label, JavaScript-д ашиглагдана.
          </p>
        </BrutalCard>
      </div>

      <p className="mt-4 border-[3px] border-presentation-ink bg-presentation-paper px-4 py-3 text-center text-base font-black shadow-[4px_4px_0_var(--presentation-ink)] md:text-lg">
        Загвар давтагдах бол <code className="text-presentation-accent">class</code> · Нэг тодорхой element бол <code className="text-presentation-accent">id</code>
      </p>
    </Slide>
  );
}
