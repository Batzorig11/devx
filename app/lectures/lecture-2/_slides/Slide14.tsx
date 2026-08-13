import { BrutalCard, BrutalTag, Eyebrow, Slide } from "@/components/presentation";
import { Bot, Check, FileCode2, MessageSquareText } from "lucide-react";

import { TOTAL_SLIDES } from "./constants";

const requirements = [
  ["01 · Бүтээ", "index.html", "Сонгосон сэдвээрээ зөвхөн HTML ашигласан, browser-т ажилладаг нэг page үүсгэ."],
  [
    "02 · Шалга",
    "Бүх tag орсон уу?",
    "Tag-ууд зөв nested бүтэцтэй, href, src, type attribute-ууд бодит утгатай эсэхийг шалга.",
  ],
  [
    "03 · Тайлбарла",
    "Код бүрийг ойлго",
    "Tag, attribute, parent–child бүтэц болон input type бүрийн үүргийг өөрийн үгээр тайлбарла.",
  ],
] as const;

export default function Slide14() {
  return (
    <Slide
      number="16"
      label="Дасгал · ChatGPT-тай HTML webpage"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <Bot className="size-4" aria-hidden="true" />
            Generate · Inspect · Explain
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-6xl">
            Дасгал · Нэг webpage бүтээ
          </h2>
        </div>
        <BrutalTag>ChatGPT бол туслах · Чи бол developer</BrutalTag>
      </div>

      <div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-[1.18fr_0.82fr]">
        <BrutalCard className="flex min-h-0 flex-col overflow-hidden bg-presentation-ink p-0 text-presentation-surface">
          <div className="flex items-center justify-between border-b-[3px] border-presentation-surface bg-presentation-accent px-4 py-3">
            <span className="font-mono text-xs font-black uppercase tracking-[0.12em]">ChatGPT-д өгөх prompt</span>
            <MessageSquareText className="size-5" strokeWidth={3} aria-hidden="true" />
          </div>

          <div className="flex flex-1 flex-col justify-between p-4 md:p-5">
            <p className="text-sm font-bold leading-relaxed md:text-base">???</p>

            <div className="mt-4 grid gap-2 font-mono text-[10px] font-black md:text-xs">
              <div className="border-l-4 border-presentation-accent bg-presentation-surface/10 px-3 py-2">
                {`<!DOCTYPE html> · <html> · <head> · <title> · <body>`}
              </div>
              <div className="border-l-4 border-presentation-accent bg-presentation-surface/10 px-3 py-2">
                {`<h1>–<h6> · <p> · <div> · <span> · <br> · <hr>`}
              </div>
              <div className="border-l-4 border-presentation-accent bg-presentation-surface/10 px-3 py-2">
                {`<a href="..."> · <img src="..."> · <ul>/<ol> · <li>`}
              </div>
              <div className="border-l-4 border-presentation-accent bg-presentation-surface/10 px-3 py-2">
                {`<form> · <input type="..."> · <button>`}
              </div>
            </div>
          </div>
        </BrutalCard>

        <div className="grid min-h-0 grid-rows-3 gap-3">
          {requirements.map(([step, title, copy], index) => (
            <BrutalCard
              key={step}
              shadow="sm"
              className={`flex min-h-0 flex-col justify-center p-3 md:p-4 ${index === 2 ? "bg-presentation-accent text-presentation-surface" : ""}`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] font-black uppercase tracking-widest">{step}</span>
                {index === 0 ? (
                  <FileCode2 className="size-5" strokeWidth={3} aria-hidden="true" />
                ) : (
                  <Check className="size-5" strokeWidth={4} aria-hidden="true" />
                )}
              </div>
              <h3 className="mt-2 text-lg font-black uppercase md:text-xl">{title}</h3>
              <p className="mt-1 text-xs font-bold leading-snug md:text-sm">{copy}</p>
            </BrutalCard>
          ))}
        </div>
      </div>

      <p className="mt-4 border-[3px] border-presentation-ink bg-presentation-accent px-4 py-3 text-center text-sm font-black text-presentation-surface shadow-[4px_4px_0_var(--presentation-ink)] md:text-base">
        Амжилтын шалгуур: ChatGPT-ийг хаасны дараа code-ийн мөр бүрийг бүрэн тайлбарлаж чаддаг байх.
      </p>
    </Slide>
  );
}
