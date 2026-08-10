import { Code2, Globe2, ListChecks, Monitor, Rocket } from "lucide-react";

import { BrutalCard, Slide } from "@/components/presentation";

import { TOTAL_SLIDES } from "./constants";

export function ProgramSlide() {
  return (
    <Slide number="04" label="Хөтөлбөр" totalSlides={TOTAL_SLIDES} title="Хөтөлбөрийн үндсэн 5 модуль.">
      <div className="grid flex-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
        {[
          {
            step: "01",
            title: "Хөгжүүлэлтийн орчин",
            copy: "Agentic хөгжүүлэлтийн орчинг бэлдэж суурь мэдлэгүүдийг авах",
            color: "bg-[#ff5c5c]",
            icon: Globe2,
          },
          {
            step: "02",
            title: "Front-End хөгжүүлэлтийн үндэс",
            copy: "HTML, CSS, JavaScript",
            color: "bg-[#ff5c5c]",
            icon: Code2,
          },
          {
            step: "03",
            title: "Контекст инженерчлэл",
            copy: "Browser, DevTools, Git, AI-г зөв ашиглана.",
            color: "bg-[#ff5c5c]",
            icon: Monitor,
          },
          {
            step: "04",
            title: "Агенттай хөгжүүлэлт",
            copy: "Өөрийн санааг ажилладаг веб болгоно.",
            color: "bg-[#ff5c5c]",
            icon: Rocket,
          },
          {
            step: "05",
            title: "AI бүтээгдэхүүн бүтээх",
            copy: "LLM API, урсгалт интерфэйс, tool calling ба агент, MCP, үнэлгээ, аюулгүй байдал, зардал",
            color: "bg-[#ff5c5c]",
            icon: ListChecks,
          },
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <BrutalCard
              key={item.step}
              className={`relative flex flex-col justify-between p-4 ${item.color} ${index % 2 ? "md:translate-y-3" : "md:-translate-y-1"}`}
            >
              <div className="flex items-start justify-between">
                <Icon className="size-9" strokeWidth={3} />
                <span className="font-mono text-sm ">{item.step} / 05</span>
              </div>
              <div className="mt-12">
                <h2 className="text-3xl font-black">{item.title}</h2>
                <p className="mt-2 font-bold leading-snug">{item.copy}</p>
              </div>
              <div></div>
            </BrutalCard>
          );
        })}
      </div>
    </Slide>
  );
}
