import { Bug, Puzzle, RefreshCw } from "lucide-react";

import { BrutalCard, Callout, Slide } from "@/components/presentation";

import { TOTAL_SLIDES } from "./constants";

const challenges = [
  {
    number: "01",
    title: "ТОДОРХОЙГҮЙ БАЙДАЛ",
    copy: "Асуудал эхэндээ бүдэг байна. Зөв асуулт асууж, жижиг хэсгүүдэд хуваана.",
    icon: Puzzle,
  },
  {
    number: "02",
    title: "BUG + DEBUG",
    copy: "Код анхны оролдлогоор ажиллахгүй байх нь хэвийн. Алдааг нотолгоогоор мөрдөнө.",
    icon: Bug,
  },
  {
    number: "03",
    title: "БАЙНГА СУРАХ",
    copy: "Tool өөрчлөгдөнө. Харин суурь ойлголт, сурах арга барил үргэлж үнэ цэнтэй.",
    icon: RefreshCw,
  },
];

export function CodingChallengesSlide() {
  return (
    <Slide
      number="11"
      label="Coding reality"
      totalSlides={TOTAL_SLIDES}
      title="Код бичихэд сорилт олон."
    >
      <div className="grid flex-1 gap-4 lg:grid-cols-3">
        {challenges.map(({ number, title, copy, icon: Icon }, index) => (
          <BrutalCard
            key={number}
            className={`flex min-h-64 flex-col justify-between p-5 ${index === 1 ? "bg-[#5b8cff]" : "bg-[#fffdf5]"}`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm font-black">{number}</span>
              <Icon className="size-10" strokeWidth={3} aria-hidden="true" />
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-black leading-tight md:text-3xl">{title}</h2>
              <p className="mt-3 text-base font-bold leading-snug md:text-lg">{copy}</p>
            </div>
          </BrutalCard>
        ))}
      </div>

      <Callout className="mt-5 bg-black text-[#fffdf5]">
        Гацах нь чадваргүй гэсэн үг биш. Гацах нь ажлын нэг хэсэг.
      </Callout>
    </Slide>
  );
}
