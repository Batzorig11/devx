import { Blocks, Globe2, Route, TrendingUp } from "lucide-react";

import { BrutalCard, Eyebrow, Slide } from "@/components/presentation";

import { TOTAL_SLIDES } from "./constants";

const advantages = [
  {
    title: "БҮТЭЭНЭ",
    copy: "Санаагаа бодит бүтээгдэхүүн, автоматжуулалт, үйлчилгээ болгоно.",
    icon: Blocks,
  },
  {
    title: "СОНГОЛТТОЙ",
    copy: "Finance, education, health, media гээд бараг бүх салбарт ажиллана.",
    icon: Route,
  },
  {
    title: "ӨСӨЛТТЭЙ",
    copy: "Сурсан ур чадвар бүр дараагийн боломжийн суурь болж хуримтлагдана.",
    icon: TrendingUp,
  },
];

export function SoftwareEngineerAdvantagesSlide() {
  return (
    <Slide
      number="12"
      label="Career advantages"
      totalSlides={TOTAL_SLIDES}
      title="Software engineer байх давуу тал."
    >
      <div className="grid flex-1 gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <BrutalCard className="flex flex-col justify-between bg-[#5b8cff] p-6">
          <div className="flex items-start justify-between">
            <Eyebrow className="bg-[#fffdf5]">GLOBAL PROFESSION</Eyebrow>
            <Globe2 className="size-12" strokeWidth={3} aria-hidden="true" />
          </div>

          <div className="my-10">
            <p className="font-mono text-xs font-black uppercase tracking-[0.16em]">
              Ажиллах орчин нэг газраар хязгаарлагдахгүй
            </p>
            <h2 className="mt-4 text-[clamp(3rem,6vw,5.8rem)] font-black uppercase leading-[0.84] tracking-[-0.06em]">
              Боломж
              <span className="block">хаана ч бий.</span>
            </h2>
          </div>

          <p className="border-l-[7px] border-black pl-4 text-lg font-bold">
            Remote баг, олон улсын бүтээгдэхүүн, өөрийн startup — нэг ур чадвар олон зам нээнэ.
          </p>
        </BrutalCard>

        <div className="grid gap-3">
          {advantages.map(({ title, copy, icon: Icon }, index) => (
            <BrutalCard key={title} shadow="sm" className="flex items-center gap-5 bg-[#fffdf5] p-5">
              <span className="font-mono text-sm font-black">0{index + 1}</span>
              <Icon className="size-10 shrink-0" strokeWidth={3} aria-hidden="true" />
              <div>
                <h2 className="text-2xl font-black">{title}</h2>
                <p className="mt-1 font-bold leading-snug">{copy}</p>
              </div>
            </BrutalCard>
          ))}
        </div>
      </div>

      <div className="mt-5 border-[3px] border-black bg-black p-3 font-mono text-sm font-black uppercase tracking-[0.1em] text-[#fffdf5] shadow-[4px_4px_0_#111]">
        Нэг profession · Олон салбар · Тасралтгүй өсөх боломж
      </div>
    </Slide>
  );
}
