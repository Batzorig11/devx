import { BrutalCard, BrutalTag, Eyebrow, Slide } from "@/components/presentation";
import { BookOpenText, Tags } from "lucide-react";

import { TOTAL_SLIDES } from "./constants";

const tagRows = [
  [
    ["<h1>–<h6>", "1–6 түвшний гарчиг үүсгэнэ."],
    ["<div>", "Block түвшний container үүсгэнэ."],
  ],
  [
    ["<p>", "Текстийн догол мөр үүсгэнэ."],
    ["<span>", "Текст доторх inline container үүсгэнэ."],
  ],
  [
    ['<a href="...">', "Link болгохын тулд href-д очих URL-ийг заавал өгнө."],
    ["<br>", "Текстийг шинэ мөрөөс үргэлжлүүлнэ."],
  ],
  [
    ['<img src="...">', "Зураг харуулахын тулд src-д файлын замыг заавал өгнө."],
    ["<form>", "Input-уудыг нэг form-д бүлэглэнэ."],
  ],
  [
    ["<ul>/<ol>", "Тэмдэгт эсвэл дугаартай жагсаалт үүсгэнэ."],
    ["<input>", "Мэдээлэл оруулах талбар үүсгэнэ."],
  ],
  [
    ["<li>", "Жагсаалтын нэг item-ийг тодорхойлно."],
    ["<button>", "Дарах боломжтой товч үүсгэнэ."],
  ],
] as const;

export default function Slide10() {
  return (
    <Slide
      number="11"
      label="Түгээмэл HTML tag-ууд"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <Tags className="size-4" aria-hidden="true" />
            Structure · Text · Media · Form
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-6xl">
            Хамгийн түгээмэл HTML tag-ууд
          </h2>
          <p className="mt-3 text-sm font-bold md:text-base">
            Tag-ийн нэр нь browser-т тухайн content ямар үүрэгтэйг хэлнэ.
          </p>
        </div>
        <BrutalTag className="gap-2">
          <BookOpenText className="size-4" aria-hidden="true" /> 12 essential tags
        </BrutalTag>
      </div>

      <BrutalCard className="flex min-h-0 flex-1 flex-col overflow-hidden p-0">
        <div className="grid grid-cols-[0.43fr_1.07fr_0.43fr_1.07fr] border-b-[3px] border-presentation-ink bg-presentation-ink font-mono text-[10px] font-black uppercase tracking-[0.08em] text-presentation-surface md:text-xs">
          <div className="px-3 py-3">Tag</div>
          <div className="border-l-[3px] border-presentation-surface px-3 py-3">Үүрэг</div>
          <div className="border-l-[3px] border-presentation-surface px-3 py-3">Tag</div>
          <div className="border-l-[3px] border-presentation-surface px-3 py-3">Үүрэг</div>
        </div>

        <div className="grid min-h-0 flex-1 grid-rows-[repeat(6,minmax(0,1fr))]">
          {tagRows.map(([[leftTag, leftCopy], [rightTag, rightCopy]], index) => (
            <div
              key={leftTag}
              className={`grid min-h-0 grid-cols-[0.43fr_1.07fr_0.43fr_1.07fr] border-b-[3px] border-presentation-ink last:border-b-0 ${index % 2 === 0 ? "bg-presentation-paper" : "bg-presentation-surface"}`}
            >
              <div
                className={`flex items-center px-3 ${leftTag.includes("href") || leftTag.includes("src") ? "bg-presentation-accent" : ""}`}
              >
                <code
                  className={`font-mono text-sm font-black md:text-lg ${leftTag.includes("href") || leftTag.includes("src") ? "text-presentation-surface" : "text-presentation-accent"}`}
                >
                  {leftTag}
                </code>
              </div>
              <div className="flex items-center border-l-[3px] border-presentation-ink px-3 text-[11px] font-bold leading-snug md:text-sm">
                {(leftTag.includes("href") || leftTag.includes("src")) && (
                  <span className="mr-2 shrink-0 bg-presentation-ink px-2 py-1 font-mono text-[9px] font-black uppercase text-presentation-surface">
                    Заавал
                  </span>
                )}
                {leftCopy}
              </div>
              <div className="flex items-center border-l-[3px] border-presentation-ink px-3">
                <code className="font-mono text-sm font-black text-presentation-accent md:text-lg">{rightTag}</code>
              </div>
              <div className="flex items-center border-l-[3px] border-presentation-ink px-3 text-[11px] font-bold leading-snug md:text-sm">
                {rightCopy}
              </div>
            </div>
          ))}
        </div>
      </BrutalCard>
    </Slide>
  );
}
