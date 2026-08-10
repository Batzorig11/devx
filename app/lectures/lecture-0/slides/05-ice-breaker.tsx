import { MessageCircleQuestion, MousePointerClick, UserRound, Users, Zap } from "lucide-react";

import { BrutalCard, Callout, Eyebrow, Slide } from "@/components/presentation";

import { TOTAL_SLIDES } from "./constants";

export function IceBreakerSlide() {
  return (
    <Slide number="05" label="Ice breaker" totalSlides={TOTAL_SLIDES} title="Secret Common Ground">
      <div className="grid flex-1 items-center gap-5 lg:grid-cols-[0.72fr_1.28fr]">
        <BrutalCard className="bg-[#5b8cff] p-5 md:-rotate-1">
          <div className="flex items-center justify-between">
            <Eyebrow className="bg-[#fffdf5]">60 секунд</Eyebrow>
            <Users className="size-10" strokeWidth={3} />
          </div>
          <p className="mt-8 text-3xl font-black leading-tight md:text-5xl">
            3–4 хүнтэй баг болоод 5 минутын дотор бүгдэд нь нийтлэг 3 зүйл олох.
          </p>
          <p className="mt-5 font-bold">Сонсох нь ярихаас дутахгүй чухал.</p>
        </BrutalCard>

        <div className="grid gap-4 sm:grid-cols-4">
          {[
            ["01", "НЭР, НАС", "Чамайг хэн гэж дуудах вэ?", UserRound, "bg-[#ffe75c]"],
            ["02", "МЭРГЭЖИЛ / СУРГУУЛЬ", "Нэг супер хүч сонговол?", Zap, "bg-[#ff5c5c]"],
            ["03", "HOBBY", "Аль болох олныг хэлэх.", MousePointerClick, "bg-[#ff5c5c]"],
            ["04", "COMMON GROUND", "Танай багийн COMMON GROUND юу байсан бэ?", Zap, "bg-[#ff5c5c]"],
          ].map(([step, title, copy, Icon, color]) => {
            const CardIcon = Icon as typeof UserRound;
            return (
              <BrutalCard key={String(step)} shadow="sm" className={`p-4 ${String(color)}`}>
                <div className="flex items-center justify-between font-mono text-xs font-black">
                  <span>{String(step)}</span>
                  <CardIcon className="size-7" strokeWidth={3} />
                </div>
                <p className="mt-12 text-2xl font-black">{String(title)}</p>
                <p className="mt-2 text-sm font-bold leading-snug">{String(copy)}</p>
              </BrutalCard>
            );
          })}
        </div>
      </div>
      <Callout icon={<MessageCircleQuestion className="size-6" />} className="mt-5 bg-[#fffdf5]">
        “Намайг ___ гэдэг. Би ___ настай. Миний хийх дуртай зүйл бол ...”
      </Callout>
    </Slide>
  );
}
