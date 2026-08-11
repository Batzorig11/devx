import { BrutalCard, Eyebrow, Slide } from "@/components/presentation";
import { ArrowUpRight, Check, Zap } from "lucide-react";

export default function Slide05() {
  return (
    <Slide number="14" label="Интернет" totalSlides={20}>
      <div className="absolute -bottom-20 -right-14 size-72 rotate-12 border-[3px] border-black bg-[#5b8cff] shadow-[10px_10px_0_#111]" />
      <div className="absolute -right-2 top-24 hidden rotate-6 border-[3px] border-black bg-[#0A1E41] text-white px-6 py-3 font-mono text-sm font-black shadow-[5px_5px_0_#111] md:block">
        CODE. BUILD. IMPROVE. REPEAT.
      </div>

      <div className="grid flex-1 items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <Eyebrow className="bg-[#0A1E41]">
            <Zap className="size-4" aria-hidden="true" />
            Your turn
          </Eyebrow>
          <h2 className="mt-6 max-w-5xl text-[clamp(4rem,10vw,9rem)] font-black uppercase leading-[0.8] tracking-[-0.085em]">
            Web developer
            <span className="block text-[#fffdf5] [-webkit-text-stroke:3px_#111]">гэж хэн бэ?</span>
          </h2>
        </div>

        <BrutalCard className="relative z-10 rotate-2 p-5 md:p-7">
          <p className="font-mono text-xs font-black uppercase">WEB DEVELOPER-ИЙН ҮҮРЭГ:</p>
          <ul className="mt-5 space-y-4 text-lg font-black md:text-xl">
            {[
              "Дизайныг ажилладаг интерфэйс болгоно",
              "Хэрэглэгчийн үйлдлийг кодоор удирдана",
              "Server болон API-тай мэдээлэл солилцоно",
              "Алдаа олж засаж, performance сайжруулна",
              "Website-ийг байнга хөгжүүлж, шинэчилнэ",
            ].map((item, index) => (
              <li key={item} className="flex items-center gap-3 border-b-2 border-black pb-3 last:border-0">
                <span
                  className={`grid size-8 shrink-0 place-items-center border-[3px] border-black ${index % 2 ? "bg-[#5b8cff]" : "bg-[#5de2a5]"}`}
                >
                  <Check className="size-5" strokeWidth={4} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-between border-[3px] border-black bg-[#0A1E41] text-white px-4 py-3 font-black shadow-[4px_4px_0_#111]">
            BUILD FOR THE WEB <ArrowUpRight className="size-6" />
          </div>
        </BrutalCard>
      </div>
    </Slide>
  );
}
