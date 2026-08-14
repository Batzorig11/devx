import {
  BrutalCard,
  BrutalTag,
  Eyebrow,
  Slide,
} from "@/components/presentation";
import { Check, MessageSquareText, X } from "lucide-react";

import { CodePanel } from "../_components/CodePanel";
import { TOTAL_SLIDES } from "./constants";

const cssComments = `/* Profile card-ийн үндсэн загвар */
.card {
  background: white;
  border: 3px solid navy;
}

/*
  Mobile дээр card-ийн өргөнийг
  дэлгэцэнд тааруулна.
*/
.card {
  max-width: 420px;
}`;

export default function Slide10() {
  return (
    <Slide
      number="12"
      label="CSS comment"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <MessageSquareText className="size-4" aria-hidden="true" />
            Тэмдэглэл бичих өөр syntax
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-7xl">
            CSS comment
          </h2>
        </div>
        <BrutalTag>{`/* comment */`}</BrutalTag>
      </div>

      <div className="grid min-h-0 flex-1 gap-5 lg:grid-cols-[1.12fr_0.88fr]">
        <CodePanel code={cssComments} title="styles.css" />

        <div className="grid min-h-0 grid-rows-2 gap-4">
          <BrutalCard className="flex min-h-0 flex-col justify-between bg-presentation-accent p-5 text-presentation-surface md:p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-base font-black uppercase tracking-widest">Зөв</span>
              <Check className="size-7" strokeWidth={4} aria-hidden="true" />
            </div>
            <code className="my-4 border-[3px] border-presentation-surface bg-presentation-ink px-4 py-3 font-mono text-xl font-black">
              {"/* тайлбар */"}
            </code>
            <p className="text-base font-bold leading-relaxed md:text-lg">Нэг болон олон мөрийн comment-д ижил syntax ашиглана.</p>
          </BrutalCard>

          <BrutalCard className="flex min-h-0 flex-col justify-between p-5 md:p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-base font-black uppercase tracking-widest">Буруу</span>
              <X className="size-7" strokeWidth={4} aria-hidden="true" />
            </div>
            <code className="my-4 border-[3px] border-presentation-ink bg-presentation-paper px-4 py-3 font-mono text-xl font-black text-presentation-accent">
              {"// тайлбар"}
            </code>
            <p className="text-base font-bold leading-relaxed md:text-lg">JavaScript-ийн <code>{"//"}</code> нь энгийн CSS comment биш.</p>
          </BrutalCard>
        </div>
      </div>
    </Slide>
  );
}
