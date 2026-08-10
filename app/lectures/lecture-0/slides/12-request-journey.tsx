import { ArrowRight, Monitor, Network, Radio, Server } from "lucide-react";

import { BrutalCard, Slide } from "@/components/presentation";

import { TOTAL_SLIDES } from "./constants";

export function RequestJourneySlide() {
  return (
    <Slide number="12" label="Request journey" totalSlides={TOTAL_SLIDES} title="Нэг хүсэлт. Дөрвөн дүр.">
      <div className="grid flex-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        {[
          ["01", "BROWSER", "Хэрэглэгчийн хүсэлтийг эхлүүлнэ.", Monitor, "bg-[#5b8cff]"],
          ["02", "DNS", "Нэрийг IP хаяг болгон олно.", Network, "bg-[#ffe75c]"],
          ["03", "HTTP", "Асуух, хариулах хэлбэрийг тогтооно.", Radio, "bg-[#ff5c5c]"],
          ["04", "SERVER", "Хүсэлтийг боловсруулж хариу өгнө.", Server, "bg-[#5de2a5]"],
        ].map(([step, title, copy, Icon, color], index) => {
          const FlowIcon = Icon as typeof Monitor;
          return (
            <BrutalCard key={String(step)} className={`relative flex flex-col p-4 ${String(color)}`}>
              {index < 3 && (
                <ArrowRight className="absolute -right-6 top-1/2 z-20 hidden size-9 -translate-y-1/2 border-[3px] border-black bg-[#fffdf5] p-1 lg:block" />
              )}
              <div className="flex items-center justify-between font-mono text-xs font-black">
                <span>{String(step)}</span>
                <FlowIcon className="size-8" strokeWidth={3} />
              </div>
              <p className="mt-auto pt-10 text-3xl font-black">{String(title)}</p>
              <p className="mt-2 font-bold leading-snug">{String(copy)}</p>
              <div></div>
            </BrutalCard>
          );
        })}
      </div>

      <div className="mt-5 grid gap-3 font-mono text-sm font-black md:grid-cols-2">
        <div className="border-[3px] border-black bg-black p-3 text-[#fffdf5] shadow-[4px_4px_0_#5b8cff]">
          <span data-presentation="label-success" className="text-[#5de2a5]">
            → REQUEST
          </span>{" "}
          GET /lesson-0
        </div>
        <div className="border-[3px] border-black bg-black p-3 text-[#fffdf5] shadow-[4px_4px_0_#ff5c5c]">
          <span data-presentation="label-warning" className="text-[#ffe75c]">
            ← RESPONSE
          </span>{" "}
          200 OK + HTML
        </div>
      </div>
    </Slide>
  );
}
