import { Clock3, Search, Send } from "lucide-react";

import {
  BrowserFrame,
  BrutalCard,
  Callout,
  Slide,
} from "@/components/presentation";

import { TOTAL_SLIDES } from "./constants";

export function WebHookSlide() {
  return (
    <Slide
      number="11"
      label="Web hook"
      totalSlides={TOTAL_SLIDES}
      title={
        <>
          Link дарснаас хойш
          <span className="block text-[#ffe75c]">1 секундэд юу болдог вэ?</span>
        </>
      }
      titleClassName="max-w-6xl"
    >
      <div className="grid flex-1 items-center gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <BrowserFrame
          title="browser"
          shadow="none"
          className="border-[#fffdf5] shadow-[8px_8px_0_#5b8cff]"
          toolbarClassName="border-[#fffdf5] bg-[#5b8cff]"
          bodyClassName="bg-[#1c1c1c] p-5 text-[#fffdf5]"
        >
          <div className="flex items-center gap-3 border-[3px] border-[#fffdf5] bg-black p-4 font-mono font-black">
            <Search className="size-5 text-[#5de2a5]" />
            <span>https://dev-x.app/lesson-0</span>
            <Send className="ml-auto size-5 text-[#ffe75c]" />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 text-center text-black">
            {[
              ["?", "ХААШАА?", "bg-[#ffe75c]"],
              ["?", "ХЭНЭЭС?", "bg-[#ff5c5c]"],
              ["?", "ЯАЖ?", "bg-[#5de2a5]"],
            ].map(([mark, label, color]) => (
              <div key={label} className={`border-[3px] border-[#fffdf5] p-3 ${color}`}>
                <p className="text-4xl font-black">{mark}</p>
                <p className="font-mono text-xs font-black">{label}</p>
              </div>
            ))}
          </div>
        </BrowserFrame>

        <div className="space-y-4">
          <Callout icon={<Clock3 className="size-7" />} className="border-[#fffdf5] bg-[#ffe75c] text-lg">
            Энэ богино хугацаанд дор хаяж 4 өөр дүр хамтардаг.
          </Callout>
          <div className="grid grid-cols-2 gap-3">
            {["BROWSER", "DNS", "HTTP", "SERVER"].map((actor, index) => (
              <BrutalCard
                key={actor}
                shadow="none"
                className={`border-[#fffdf5] p-4 text-center shadow-[4px_4px_0_#fffdf5] ${index % 2 ? "bg-[#5de2a5]" : "bg-[#5b8cff]"}`}
              >
                <span className="font-mono text-xs font-black">0{index + 1}</span>
                <p className="mt-2 text-xl font-black">{actor}</p>
              </BrutalCard>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}
