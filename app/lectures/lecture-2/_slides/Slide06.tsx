import { BrutalCard, BrutalTag, Eyebrow, Slide } from "@/components/presentation";
import { Eye, Info, PanelTop, SplitSquareVertical } from "lucide-react";

import { TOTAL_SLIDES } from "./constants";

export default function Slide06() {
  return (
    <Slide number="07" label="Head ба body" totalSlides={TOTAL_SLIDES}>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <SplitSquareVertical className="size-4" aria-hidden="true" />
            Нэг document · Хоёр үүрэг
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-7xl">
            Tab дээр юу харагдах вэ?
            <span className="block text-presentation-accent">Page дээр юу харагдах вэ?</span>
          </h2>
        </div>
        <BrutalTag>title ≠ h1</BrutalTag>
      </div>

      <div className="grid min-h-0 flex-1 gap-5 lg:grid-cols-2">
        <BrutalCard className="flex min-h-0 flex-col overflow-hidden p-0">
          <div className="flex items-center justify-between border-b-[3px] border-presentation-ink bg-presentation-ink px-5 py-4 text-presentation-surface">
            <div>
              <p className="font-mono text-xs font-black uppercase tracking-[0.14em] text-presentation-accent">Document information</p>
              <h3 className="text-3xl font-black uppercase">Head</h3>
            </div>
            <Info className="size-8" strokeWidth={3} aria-hidden="true" />
          </div>
          <div className="flex flex-1 flex-col justify-center p-5 md:p-7">
            <code className="font-mono text-xl font-black text-presentation-accent">{`<title>HTML хичээл</title>`}</code>
            <div className="mt-6 flex items-center gap-3 border-[3px] border-presentation-ink bg-presentation-paper p-3">
              <PanelTop className="size-6 shrink-0" strokeWidth={3} aria-hidden="true" />
              <span className="font-black">Browser tab: HTML хичээл</span>
            </div>
            <p className="mt-5 text-sm font-bold leading-relaxed">
              Title нь page-ийн tab эсвэл title bar-д нэр өгнө. Гол viewport дотор өөрөө харагдахгүй.
            </p>
          </div>
        </BrutalCard>

        <BrutalCard className="flex min-h-0 flex-col overflow-hidden p-0">
          <div className="flex items-center justify-between border-b-[3px] border-presentation-ink bg-presentation-accent px-5 py-4 text-presentation-surface">
            <div>
              <p className="font-mono text-xs font-black uppercase tracking-[0.14em]">Visible content</p>
              <h3 className="text-3xl font-black uppercase">Body</h3>
            </div>
            <Eye className="size-8" strokeWidth={3} aria-hidden="true" />
          </div>
          <div className="flex flex-1 flex-col justify-center p-5 md:p-7">
            <code className="font-mono text-xl font-black text-presentation-accent">{`<h1>HTML хичээл</h1>`}</code>
            <div className="mt-6 border-[3px] border-presentation-ink bg-white p-5 text-black">
              <h4 className="text-3xl font-bold">HTML хичээл</h4>
            </div>
            <p className="mt-5 text-sm font-bold leading-relaxed">
              H1 нь body доторх content. Browser-ийн үндсэн цонхонд хэрэглэгчид шууд харагдана.
            </p>
          </div>
        </BrutalCard>
      </div>
    </Slide>
  );
}
