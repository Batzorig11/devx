import { ArrowRight, Bot, Lightbulb, Monitor } from "lucide-react";

import { BrutalCard, BrutalTag, Slide } from "@/components/presentation";

import { TOTAL_SLIDES } from "./constants";

const workflow = [
  {
    label: "INPUT",
    title: "ТАНЫ САНАА",
    copy: "Юу, хэнд зориулж бүтээхээ тодорхойлно.",
    icon: Lightbulb,
    className: "bg-[#fffdf5]",
  },
  {
    label: "CO-PILOT",
    title: "AI AGENT",
    copy: "Төлөвлөж, кодолж, алдааг шалгахад хамтарна.",
    icon: Bot,
    className: "bg-[#5b8cff]",
  },
  {
    label: "OUTPUT",
    title: "FRONT-END",
    copy: "Browser-д ажилладаг интерфэйс бүтээнэ.",
    icon: Monitor,
    className: "bg-[#fffdf5]",
  },
];

export function CourseContextSlide() {
  return (
    <Slide
      number="03"
      label="Хөтөлбөрийн чиглэл"
      totalSlides={TOTAL_SLIDES}
      title={
        <>
          Front-end <span className="text-[#5b8cff]">×</span> Agentic AI.
        </>
      }
    >
      <div className="grid flex-1 items-stretch gap-3 lg:grid-cols-[1fr_auto_1.08fr_auto_1fr]">
        {workflow.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={item.label} className="contents">
              <BrutalCard
                shadow="sm"
                className={["flex min-h-48 flex-col justify-between p-5", item.className].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <BrutalTag className="bg-[#ffe75c]">{item.label}</BrutalTag>
                  <Icon className="size-10" strokeWidth={3} aria-hidden="true" />
                </div>

                <div className="mt-10">
                  <h2 className="text-3xl font-black md:text-4xl">{item.title}</h2>
                  <p className="mt-3 text-lg font-bold leading-snug">{item.copy}</p>
                </div>
                <div></div>
              </BrutalCard>

              {index < workflow.length - 1 && (
                <div className="grid place-items-center py-1 lg:px-1 lg:py-0" aria-hidden="true">
                  <ArrowRight
                    className="size-10 rotate-90 border-[3px] border-black bg-[#ffe75c] p-1 lg:rotate-0"
                    strokeWidth={3}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <BrutalCard
        shadow="sm"
        className="mt-5 flex flex-col gap-3 bg-black p-4 text-[#fffdf5] md:flex-row md:items-center"
      >
        <span
          data-presentation="label-success"
          className="shrink-0 font-mono text-xs font-black tracking-[0.16em] text-[#5de2a5]"
        >
          COURSE_GOAL
        </span>
        <span className="hidden h-8 w-[3px] bg-[#fffdf5] md:block" aria-hidden="true" />
        <p className="text-lg font-black leading-snug md:text-xl">
          AI-д кодоо даатгах биш — agent-ийг чиглүүлж, гарсан кодыг ойлгож, шалгаж, сайжруулж өөрийн гэсэн өрөвмөц
          бүтээл бүтээх.
        </p>
      </BrutalCard>
    </Slide>
  );
}
