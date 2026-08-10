import { CalendarCheck2, CheckCircle2, Repeat2, Target } from "lucide-react";

import { BrutalCard, Eyebrow, Slide } from "@/components/presentation";

import { TOTAL_SLIDES } from "./constants";

const loop = [
  {
    step: "01",
    title: "SAME TIME",
    copy: "Өдөр бүр тогтсон цагтаа суу.",
    icon: CalendarCheck2,
  },
  {
    step: "02",
    title: "SMALL TASK",
    copy: "Нэг жижиг, тодорхой зорилго сонго.",
    icon: Target,
  },
  {
    step: "03",
    title: "FINISH",
    copy: "Ажилладаг жижиг үр дүн гарга.",
    icon: CheckCircle2,
  },
  {
    step: "04",
    title: "REPEAT",
    copy: "Маргааш ижил системээ давт.",
    icon: Repeat2,
  },
];

export function ConsistencySlide() {
  return (
    <Slide
      number="13"
      label="Developer mindset"
      totalSlides={TOTAL_SLIDES}
      title="Сайн developer болох түлхүүр."
    >
      <div className="grid flex-1 gap-5 lg:grid-cols-[0.78fr_1.22fr]">
        <BrutalCard className="flex flex-col justify-between bg-[#5b8cff] p-6">
          <Eyebrow className="bg-[#fffdf5]">CONSISTENCY WINS</Eyebrow>

          <div className="my-9">
            <p className="font-mono text-xs font-black uppercase tracking-[0.16em]">
              Motivation түр зуурынх
            </p>
            <h2 className="mt-4 text-[clamp(3.2rem,6vw,6rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]">
              Өдөр бүр
              <span className="block">бага багаар.</span>
            </h2>
          </div>

          <p className="border-l-[7px] border-black pl-4 text-lg font-bold">
            Том үсрэлтээс илүү олон жижиг давталт developer-ийг чадваржуулдаг.
          </p>
        </BrutalCard>

        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-3 border-[3px] border-black bg-[#fffdf5] p-3">
            <span className="font-mono text-xs font-black uppercase tracking-[0.16em]">
              Deterministic practice loop
            </span>
            <span className="font-mono text-xs font-black">INPUT → PROCESS → PROGRESS</span>
          </div>

          <div className="mt-3 grid flex-1 gap-3 sm:grid-cols-2">
            {loop.map(({ step, title, copy, icon: Icon }) => (
              <BrutalCard key={step} shadow="sm" className="flex flex-col justify-between bg-[#fffdf5] p-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black">{step}</span>
                  <Icon className="size-8" strokeWidth={3} aria-hidden="true" />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-1 font-bold leading-snug">{copy}</p>
                </div>
              </BrutalCard>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 border-[3px] border-black bg-black p-3 text-center font-mono text-sm font-black uppercase tracking-[0.1em] text-[#fffdf5] shadow-[4px_4px_0_#111]">
        Тогтсон систем + тууштай давталт = бодит ур чадвар
      </div>
    </Slide>
  );
}
