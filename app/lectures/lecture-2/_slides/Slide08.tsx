import { BrutalCard, BrutalTag, Eyebrow, Slide } from "@/components/presentation";
import { Tags } from "lucide-react";

import { TOTAL_SLIDES } from "./constants";

export default function Slide08() {
  return (
    <Slide number="09" label="Element-ийн анатоми" totalSlides={TOTAL_SLIDES}>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <Tags className="size-4" aria-hidden="true" />
            Start tag + attribute + content + end tag
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-7xl">
            Element-ийн анатоми
          </h2>
        </div>
        <BrutalTag>Attribute нь start tag дотор</BrutalTag>
      </div>

      <BrutalCard className="flex min-h-56 flex-col items-center justify-center bg-presentation-ink p-5 text-presentation-surface md:min-h-72">
        <div className="whitespace-nowrap font-mono text-[clamp(1.2rem,3.2vw,3.4rem)] font-black tracking-[-0.06em]">
          <span className="text-presentation-accent">{`<h1 `}</span>
          <span>class=&quot;title&quot;</span>
          <span className="text-presentation-accent">{`>`}</span>
          <span>Миний гарчиг</span>
          <span className="text-presentation-accent">{`</h1>`}</span>
        </div>

        <div className="mt-8 grid w-full max-w-6xl grid-cols-[0.8fr_1.25fr_1.7fr_0.8fr] text-center font-mono text-[9px] font-black uppercase md:text-xs">
          <div>
            <div className="mx-auto h-5 w-0.75 bg-presentation-accent" />
            <div className="border-[3px] border-presentation-surface p-3 text-presentation-accent">Start tag</div>
          </div>
          <div>
            <div className="mx-auto h-5 w-0.75 bg-presentation-surface" />
            <div className="border-y-[3px] border-presentation-surface bg-presentation-accent p-3">Attribute</div>
          </div>
          <div>
            <div className="mx-auto h-5 w-0.75 bg-presentation-surface" />
            <div className="border-[3px] border-presentation-surface p-3">Content</div>
          </div>
          <div>
            <div className="mx-auto h-5 w-0.75 bg-presentation-accent" />
            <div className="border-y-[3px] border-r-[3px] border-presentation-surface p-3 text-presentation-accent">
              End tag
            </div>
          </div>
        </div>
      </BrutalCard>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <BrutalCard shadow="sm" className="p-4 text-center">
          <code className="font-mono text-lg font-black">{`<tagname>`}</code>
          <p className="mt-2 text-sm font-bold">Ямар төрлийн element эхэлж байгааг хэлнэ.</p>
        </BrutalCard>
        <BrutalCard shadow="sm" className="bg-presentation-accent p-4 text-center text-presentation-surface">
          <code className="bg-presentation-ink px-2 py-1 font-mono text-lg font-black">class=&quot;title&quot;</code>
          <p className="mt-2 text-sm font-bold">Element-д нэмэлт мэдээлэл эсвэл тохиргоо өгнө.</p>
        </BrutalCard>
        <BrutalCard shadow="sm" className="p-4 text-center">
          <code className="font-mono text-lg font-black">{`</tagname>`}</code>
          <p className="mt-2 text-sm font-bold">Element хаана дууссаныг хэлнэ.</p>
        </BrutalCard>
      </div>
    </Slide>
  );
}
