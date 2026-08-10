import { BrushCleaning, Clock, Hand, Play, Sparkles, Trash } from "lucide-react";

import { BrutalCard, Callout, Slide } from "@/components/presentation";

import { TOTAL_SLIDES } from "./constants";

export function ClassRulesSlide() {
  return (
    <Slide number="07" label="Ангийн дүрэм" totalSlides={TOTAL_SLIDES} title="Дагаж мөрдөх дүрмүүд">
      <div className="grid flex-1 grid-cols-2 gap-4 lg:grid-cols-5">
        {[
          ["ЦАГАА БАРИХ", "Бусдыг хүндлэх", Clock, "bg-[#ffe75c]"],
          ["ХИЧЭЭЛЭЭ ТАСЛАХГҮЙ БАЙХ", "Хичээл бүрээс шинэ зүйл сурах боломжтой", Play, "bg-[#5b8cff]"],
          [
            "АНГИЙН ЭД ЗҮЙЛД ГАМТАЙ ХАНДАХ",
            "Компьютер, keyboard, mouse д гамтай хандаж, цэвэрхэн хэрэглэх",
            BrushCleaning,
            "bg-[#5de2a5]",
          ],
          ["ХОГОО ХОГИЙН САВАНД ХАЯХ", "Суралцаж буй орчноо цэвэрхэн байлгах", Trash, "bg-[#0A1E41]"],
          ["БУСАДТАЙ ХҮНДЭТГЭЛТЭЙ ХАРЬЦАХ", "Сургалтын орчинд биеэ зөв зохистой авч явах", Hand, "bg-[#fffdf5]"],
        ].map(([title, copy, Icon], index) => {
          const RuleIcon = Icon as typeof Hand;
          return (
            <BrutalCard
              key={String(title)}
              shadow="sm"
              className={`flex text-black flex-col p-4 bg-[#6569DF] ${index === 4 ? "col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-black">0{index + 1}</span>
                <RuleIcon className="size-8" strokeWidth={3} />
              </div>
              <div className="flex flex-1 flex-col justify-center py-6">
                <p className="text-2xl font-black  leading-tight">{String(title)}</p>
                <p className="mt-2 text-sm font-bold">{String(copy)}</p>
              </div>
            </BrutalCard>
          );
        })}
      </div>
      <Callout icon={<Sparkles className="size-6" />} className="mt-5 bg-black text-[#fffdf5]">
        Дүрэмгүй тоглоом гэж үгүй.
      </Callout>
    </Slide>
  );
}
