import {
  BrutalCard,
  BrutalTag,
  Eyebrow,
  Slide,
} from "@/components/presentation";
import { EyeOff, MessageSquareText, ShieldAlert } from "lucide-react";

import { CodePanel } from "../_components/CodePanel";
import { TOTAL_SLIDES } from "./constants";

const commentExample = `<!-- Header хэсэг эхэлж байна -->
<header>
  <h1>DevX News</h1>
</header>

<!-- TODO: Нийтлэлийн зураг нэмэх -->
<main>
  <p>Өнөөдрийн шинэ нийтлэл</p>
</main>

<!--
  Олон мөртэй comment
  ингэж бичиж болно.
-->`;

export default function Slide02() {
  return (
    <Slide
      number="03"
      label="HTML comment"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <MessageSquareText className="size-4" aria-hidden="true" />
            Browser-д харагдахгүй тэмдэглэл
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-7xl">
            HTML comment
          </h2>
        </div>
        <BrutalTag>{`<!-- comment -->`}</BrutalTag>
      </div>

      <div className="grid min-h-0 flex-1 gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <CodePanel code={commentExample} title="index.html" />

        <div className="grid min-h-0 grid-rows-[1fr_1fr_auto] gap-3">
          <BrutalCard className="flex min-h-0 items-center gap-4 p-4 md:p-5">
            <span className="grid size-12 shrink-0 place-items-center bg-presentation-ink text-presentation-surface">
              <EyeOff className="size-6" strokeWidth={3} aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-xl font-black uppercase">Юунд хэрэгтэй вэ?</h3>
              <p className="mt-1 text-base font-bold leading-relaxed md:text-lg">
                Кодын хэсгийг тайлбарлах, TODO үлдээх, түр нууж шалгахад ашиглана.
              </p>
            </div>
          </BrutalCard>

          <BrutalCard className="flex min-h-0 items-center gap-4 bg-presentation-accent p-4 text-presentation-surface md:p-5">
            <span className="grid size-12 shrink-0 place-items-center border-[3px] border-presentation-surface bg-presentation-ink">
              <ShieldAlert className="size-6" strokeWidth={3} aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-xl font-black uppercase">Нууц биш!</h3>
              <p className="mt-1 text-base font-bold leading-relaxed md:text-lg">
                Comment нь page дээр харагдахгүй ч View Source-оос уншигдана. Password, API key бүү бич.
              </p>
            </div>
          </BrutalCard>

          <p className="border-[3px] border-presentation-ink bg-presentation-paper px-4 py-3 font-mono text-base font-black shadow-[3px_3px_0_var(--presentation-ink)]">
            Зөв: <span className="text-presentation-accent">ЯАГААД</span> гэдгийг тайлбарла · Код өөрөө ЮУ гэдгээ хэлнэ
          </p>
        </div>
      </div>
    </Slide>
  );
}
