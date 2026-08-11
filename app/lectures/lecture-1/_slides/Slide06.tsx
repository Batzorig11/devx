import { AvatarBadge, BrutalCard, Slide } from "@/components/presentation";
import { MousePointer2 } from "lucide-react";

export default function Slide06() {
  return (
    <Slide number="10" label="Интернет" totalSlides={20}>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          {/*<Eyebrow className="bg-[#ff5c5c]">Work in motion</Eyebrow>*/}
          <h2 className="mt-4 text-4xl font-black uppercase tracking-tighter md:text-7xl">
            Front-End vs Back-end vs UI/UX desginer
          </h2>
        </div>
        <div className="flex gap-2 font-mono text-xs font-black">
          {/*<span className="border-[3px] border-black bg-[#5de2a5] px-3 py-2">8 DONE</span>
          <span className="border-[3px] border-black bg-[#ffe75c] px-3 py-2">3 MOVING</span>*/}
        </div>
      </div>

      <div className="grid flex-1 gap-4 lg:grid-cols-3">
        {[
          {
            title: "FRONT-END",
            count: "01",
            color: "bg-[#6569DF]",
            cards: [
              ["User Interface", "UI", "F"],
              ["HTML · CSS · JavaScript", "CODE", "JS"],
              ["Responsive Design", "WEB", "R"],
              ["Browser Interaction", "CLIENT", "B"],
            ],
          },
          {
            title: "BACK-END",
            count: "02",
            color: "bg-[#FFFDF5]",
            cards: [
              ["Server Logic", "SERVER", "B"],
              ["API Development", "API", "A"],
              ["Database", "DATA", "DB"],
              ["Authentication · Security", "SECURE", "S"],
            ],
          },
          {
            title: "UI/UX DESIGNER",
            count: "03",
            color: "bg-[#FFFDF5]",
            cards: [
              ["User Research", "UX", "U"],
              ["Wireframe", "PLAN", "W"],
              ["UI Design", "DESIGN", "D"],
              ["Prototype · Testing", "TEST", "P"],
            ],
          },
        ].map((column) => (
          <BrutalCard key={column.title} className={`p-4 ${column.color}`}>
            <div className="flex items-center justify-between border-b-[3px] border-black pb-3 font-mono text-xl font-black">
              <span>{column.title}</span>
              <span>{column.count}</span>
            </div>
            <div className="mt-4 space-y-3">
              {column.cards.map(([title, tag, avatar]) => (
                <BrutalCard key={title} shadow="sm" className={`$ p-4`}>
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-2xl font-black">{title}</p>
                    <MousePointer2 className="size-5 shrink-0" />
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="border-[3px] border-black bg-[#0A1E41] text-white px-2 py-1 font-mono text-lg font-black">
                      {tag}
                    </span>
                    <AvatarBadge size="md">{avatar}</AvatarBadge>
                  </div>
                </BrutalCard>
              ))}
            </div>
          </BrutalCard>
        ))}
      </div>
    </Slide>
  );
}
