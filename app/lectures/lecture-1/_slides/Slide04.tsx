import { BrutalCard, Eyebrow, Slide } from "@/components/presentation";
import { Rocket } from "lucide-react";

export default function Slide04() {
  return (
    <Slide number="07" label="Process" totalSlides={20}>
      <div className="grid flex-1 gap-6 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">
        <div>
          <Eyebrow className="bg-[#0A1E41]">
            <Rocket className="size-4" aria-hidden="true" />
            5-day sprint
          </Eyebrow>
          <h2 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">
            Web development
            <br />
            ХӨГЖЛИЙН ҮЕ ШАТ
          </h2>
          <p className="mt-5 max-w-md text-lg font-bold">Өдөр бүр нэг тодорхой output дараагийн өдрийн input болно.</p>
        </div>

        <div className="relative grid gap-3 md:grid-cols-5">
          <div className="absolute left-8 right-8 top-1/2 hidden h-1.25 -translate-y-1/2 bg-black md:block" />
          {[
            ["1991–1995", "STATIC HTML", "Text, зураг, hyperlink бүхий энгийн web page.", "bg-[#FFFDF5]"],
            ["1996–2000", "INTERACTIVE", "CSS + JavaScript website-ийг интерактив болгов.", "bg-[#FFFDF5]"],
            ["2000s", "DYNAMIC WEB", "Server + Database ашигласан website-ууд хөгжөв.", "bg-[#FFFDF5]"],
            ["2010s", "FRAMEWORKS", "React, Angular, Vue ашигласан web app-ууд хөгжөв.", "bg-[#FFFDF5]"],
            ["2020s", "MODERN WEB", "Full-stack, Cloud, API, AI бүхий web application-ууд.", "bg-[#FFFDF5]"],
          ].map(([day, action, text, color], index) => (
            <BrutalCard
              key={index}
              shadow="sm"
              className={`relative z-10 p-3 py-6 ${color} ${index % 2 ? "md:translate-y-10" : "md:-translate-y-10"}`}
            >
              <div className="flex items-center justify-between font-mono font-black">
                <span>{day}</span>
                <span>{index + 1}</span>
              </div>
              <div className="my-5 grid size-12 place-items-center rounded-full border-[3px] border-black bg-black text-[#fffdf5] text-xl font-black">
                {action.slice(0, 1)}
              </div>
              <p className="text-2xl font-black">{action}</p>
              <p className="mt-2 text-xl font-bold leading-tight">{text}</p>
            </BrutalCard>
          ))}
        </div>
      </div>
    </Slide>
  );
}
