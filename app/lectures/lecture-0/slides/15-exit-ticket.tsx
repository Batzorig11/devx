import { ArrowRight, Code2, Globe2, Network, PencilLine } from "lucide-react";

import { AvatarBadge, AvatarStack, BrutalCard, Eyebrow, Slide } from "@/components/presentation";

import { TOTAL_SLIDES } from "./constants";

export function ExitTicketSlide() {
  return (
    <Slide number="11" label="Recap + exit ticket" totalSlides={TOTAL_SLIDES} title="3 ойлголт + 1 асуулт.">
      <div className="grid flex-1 gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-3">
          {[
            ["01", "WEB", "Browser хүсэлт явуулж, server хариу өгнө.", Globe2, "bg-[#5b8cff]"],
            ["02", "DNS", "Домэйн нэрийг IP хаягтай холбоно.", Network, "bg-[#ffe75c]"],
            ["03", "FRONTEND", "HTML + CSS + JS хэрэглэгчийн туршлагыг бүтээнэ.", Code2, "bg-[#5de2a5]"],
          ].map(([step, title, copy, Icon, color]) => {
            const RecapIcon = Icon as typeof Globe2;
            return (
              <BrutalCard key={String(step)} shadow="sm" className={`flex items-center gap-4 p-4 ${String(color)}`}>
                <span className="font-mono text-sm font-black">{String(step)}</span>
                <RecapIcon className="size-9 shrink-0" strokeWidth={3} />
                <div>
                  <p className="text-xl font-black">{String(title)}</p>
                  <p className="font-bold">{String(copy)}</p>
                </div>
              </BrutalCard>
            );
          })}
        </div>

        <BrutalCard className="relative flex flex-col bg-[#ff5c5c] p-5 md:rotate-1">
          <div className="flex items-center justify-between">
            <Eyebrow className="bg-[#fffdf5]">EXIT TICKET</Eyebrow>
            <PencilLine className="size-9" strokeWidth={3} />
          </div>
          <p className="mt-6 text-3xl font-black">Гарахаасаа өмнө бич:</p>
          <div className="mt-5 space-y-3">
            <div className="border-[3px] border-black bg-[#fffdf5] p-4 font-bold">
              Одоо би __________ гэдгийг ойлгосон.
            </div>
            <div className="border-[3px] border-black bg-[#ffe75c] p-4 font-bold">
              Надад __________ гэдэг асуулт үлдсэн.
            </div>
          </div>
          <div className="mt-auto flex items-center justify-between pt-5 font-mono text-xs font-black">
            <span>НЭРЭЭ БИЧ</span>
            <span className="flex items-center gap-2">
              БАГШИД ӨГ <ArrowRight className="size-5" />
            </span>
          </div>
        </BrutalCard>
      </div>

      <div className="mt-5 flex items-center justify-between border-[3px] border-black bg-black p-3 font-black text-[#fffdf5] shadow-[4px_4px_0_#ffe75c]">
        <span>Дараагийн хичээл: HTML-ээр анхны хуудсаа бүтээнэ.</span>
        <AvatarStack className="ml-4">
          {["H", "T", "M"].map((letter, index) => (
            <AvatarBadge
              key={letter}
              size="sm"
              className={index === 0 ? "bg-[#ffe75c]" : index === 1 ? "bg-[#5b8cff]" : "bg-[#5de2a5]"}
            >
              {letter}
            </AvatarBadge>
          ))}
        </AvatarStack>
      </div>
    </Slide>
  );
}
