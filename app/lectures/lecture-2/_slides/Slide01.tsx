import { BrutalCard, BrutalTag, Eyebrow, Slide } from "@/components/presentation";
import { Braces, Boxes, FileText, LayoutTemplate, Monitor, Tags } from "lucide-react";

import { TOTAL_SLIDES } from "./constants";

const htmlFacts = [
  {
    text: (
      <>
        HTML гэдэг нь <strong>Hyper Text Markup Language</strong> гэсэн үгийн товчлол.
      </>
    ),
    icon: FileText,
  },
  {
    text: "HTML нь веб хуудас бүтээх стандарт тэмдэглэгээний хэл.",
    icon: Braces,
  },
  {
    text: "HTML нь веб хуудасны бүтцийг тодорхойлдог.",
    icon: LayoutTemplate,
  },
  {
    text: "HTML нь цуврал элементүүдээс бүрддэг.",
    icon: Boxes,
  },
  {
    text: "HTML элементүүд нь агуулгыг хэрхэн харуулахыг browser-т заадаг.",
    icon: Monitor,
  },
  {
    text: (
      <>
        HTML элементүүд нь агуулгын хэсгүүдийг <strong>“энэ бол гарчиг”</strong>,<strong> “энэ бол догол мөр”</strong>,{" "}
        <strong>“энэ бол холбоос”</strong>
        гэх мэтээр тэмдэглэдэг.
      </>
    ),
    icon: Tags,
  },
] as const;

export default function Slide01() {
  return (
    <Slide
      number="02"
      label="HTML гэж юу вэ?"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <Braces className="size-4" aria-hidden="true" />
            What is HTML?
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-7xl">
            HTML гэж юу вэ?
          </h2>
        </div>
        <BrutalTag>Hyper Text Markup Language</BrutalTag>
      </div>

      <div className="grid min-h-0 flex-1 gap-5 lg:grid-cols-[0.68fr_1.32fr]">
        <BrutalCard className="flex min-h-0 flex-col justify-between bg-presentation-accent p-5 text-presentation-surface md:p-7">
          <div className="flex items-start justify-between gap-4">
            <span className="font-mono text-xs font-black uppercase tracking-[0.16em]">Standard language</span>
            <Braces className="size-8 shrink-0" strokeWidth={3} aria-hidden="true" />
          </div>

          <p className="my-7 text-3xl font-black leading-[1.06] md:text-4xl lg:text-4xl xl:text-4xl">
            HTML нь веб хуудас бүтээх стандарт тэмдэглэгээний хэл юм.
          </p>

          <span className="font-mono text-7xl font-black leading-none tracking-[-0.08em] text-presentation-surface/25 md:text-9xl">
            HTML
          </span>
        </BrutalCard>

        <ol className="grid min-h-0 gap-3 sm:grid-cols-2 sm:grid-rows-3">
          {htmlFacts.map(({ text, icon: Icon }, index) => (
            <li
              key={index}
              className="grid min-h-0 grid-cols-[auto_1fr] items-start gap-3 border-[3px] border-presentation-ink bg-presentation-surface p-3 shadow-[3px_3px_0_var(--presentation-ink)] md:p-4"
            >
              <span className="grid size-10 shrink-0 place-items-center bg-presentation-ink text-presentation-surface">
                <Icon className="size-5" strokeWidth={3} aria-hidden="true" />
              </span>
              <div>
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.14em] text-presentation-accent">
                  Fact {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 text-sm font-bold leading-snug md:text-base">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Slide>
  );
}
