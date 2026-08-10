import { Bot, Check, CircleHelp } from "lucide-react";

import {
  BrutalCard,
  BrutalTag,
  Callout,
  Slide,
} from "@/components/presentation";

import { TOTAL_SLIDES } from "./constants";

export function AiActivitySlide() {
  return (
    <Slide
      number="14"
      label="AI mini activity"
      totalSlides={TOTAL_SLIDES}
      title="AI-д хариу биш, даалгавар өг."
    >
      <div className="grid flex-1 gap-5 lg:grid-cols-[0.82fr_1.18fr]">
        <BrutalCard className="flex flex-col justify-between bg-black p-5 text-[#fffdf5] shadow-[8px_8px_0_#5b8cff]">
          <div className="flex items-center justify-between">
            <Bot className="size-12 text-[#5de2a5]" strokeWidth={3} />
            <BrutalTag className="border-[#fffdf5] bg-[#ffe75c]">4 минут</BrutalTag>
          </div>
          <div>
            <p data-presentation="label-danger" className="font-mono text-xs font-black text-[#ff5c5c]">
              MINI_MISSION
            </p>
            <p className="mt-3 text-3xl font-black leading-tight">
              Browser ба server-ийг 10 настай хүүхдэд 3 өгүүлбэрээр тайлбарлуул.
            </p>
          </div>
          <p className="mt-5 border-t border-zinc-700 pt-4 font-bold text-zinc-300">
            Дараа нь нэг өгүүлбэрийг нь өөрийн үгээр шалгаж зас.
          </p>
        </BrutalCard>

        <div className="grid gap-4">
          <BrutalCard shadow="sm" className="bg-[#ff5c5c] p-4">
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs font-black">СУЛ PROMPT</p>
              <span className="grid size-8 place-items-center border-[3px] border-black bg-[#fffdf5] text-xl font-black">×</span>
            </div>
            <p className="mt-4 text-2xl font-black">“Вебийг тайлбарла.”</p>
            <p className="mt-2 font-bold">Хэнд, хэр урт, ямар зорилгоор гэдэг нь алга.</p>
          </BrutalCard>

          <BrutalCard className="bg-[#5de2a5] p-4">
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs font-black">ТОД PROMPT</p>
              <span className="grid size-8 place-items-center border-[3px] border-black bg-[#fffdf5]">
                <Check className="size-5" strokeWidth={4} />
              </span>
            </div>
            <p className="mt-4 text-xl font-black leading-snug md:text-2xl">
              “Browser ба server хэрхэн хамтардгийг 10 настай хүүхдэд, зөөгчийн жишээгээр, 3 өгүүлбэрт тайлбарла.”
            </p>
          </BrutalCard>

          <Callout icon={<CircleHelp className="size-6" />} className="bg-[#ffe75c]">
            AI-ийн хариуг үнэн гэж шууд зөвшөөрөх үү? Ямар нэг claim-ийг шалга.
          </Callout>
        </div>
      </div>
    </Slide>
  );
}
