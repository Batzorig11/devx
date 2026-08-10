import { CalendarDays, Clock3, Coffee } from "lucide-react";

import { BrutalCard, BrutalTag, Slide } from "@/components/presentation";

import { TOTAL_SLIDES } from "./constants";

const week = [
  { day: "ДАВАА", status: "ХИЧЭЭЛТЭЙ", active: true },
  { day: "МЯГМАР", status: "ХИЧЭЭЛТЭЙ", active: true },
  { day: "ЛХАГВА", status: "АМРАЛТ", active: false },
  { day: "ПҮРЭВ", status: "ХИЧЭЭЛТЭЙ", active: true },
  { day: "БААСАН", status: "ХИЧЭЭЛТЭЙ", active: true },
];

export function CourseScheduleSlide() {
  return (
    <Slide number="08" label="Course schedule" totalSlides={TOTAL_SLIDES} title="Хичээлийн хуваарь">
      <div className="grid flex-1 gap-3 sm:grid-cols-5">
        {week.map((item) => (
          <BrutalCard
            key={item.day}
            shadow="sm"
            className={
              item.active
                ? "flex min-h-40 flex-col justify-between bg-[#fffdf5] p-4"
                : "flex min-h-40 flex-col justify-between bg-black p-4 shadow-[4px_4px_0_#5b8cff]"
            }
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-black">WEEKDAY</span>
              <CalendarDays className="size-7" strokeWidth={3} aria-hidden="true" />
            </div>

            <div className="mt-8">
              <p className="text-4xl font-black md:text-5xl">{item.day}</p>
              <BrutalTag className={item.active ? "mt-3 bg-[#5b8cff]" : "mt-3 bg-[#ffe75c]"}>{item.status}</BrutalTag>
            </div>
          </BrutalCard>
        ))}
      </div>

      <BrutalCard shadow="sm" className="mt-5 bg-[#dce6ff] p-4 shadow-[5px_5px_0_#5b8cff]">
        <div className="flex items-center justify-between gap-4 font-mono text-xs font-black tracking-[0.14em]">
          <span className="flex items-center gap-2">
            <Clock3 className="size-5 text-[#2452ad]" strokeWidth={3} aria-hidden="true" />
            SESSION TIME
          </span>
          <span>MON · TUE · THU · FRI</span>
        </div>

        <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div>
            <p className="text-3xl font-black md:text-5xl">17:30</p>
            <p className="font-mono font-black text-[#2452ad]">Эхлэх</p>
          </div>

          <div className="flex items-center">
            <span className="hidden h-[3px] w-10 bg-black sm:block" aria-hidden="true" />
            <div className="flex items-center gap-2 border-[3px] border-black bg-[#ffe75c] px-3 py-2 text-black">
              <Coffee className="size-6" strokeWidth={3} aria-hidden="true" />
              <div>
                <p className="text-xl font-black leading-none">20 MIN</p>
                <p className="font-mono text-[10px] font-black">BREAK</p>
              </div>
            </div>
            <span className="hidden h-[3px] w-10 bg-black sm:block" aria-hidden="true" />
          </div>

          <div className="text-right">
            <p className="text-3xl font-black md:text-5xl">20:30</p>
            <p className="font-mono font-black text-[#2452ad]">Дуусах</p>
          </div>
        </div>
      </BrutalCard>
    </Slide>
  );
}
