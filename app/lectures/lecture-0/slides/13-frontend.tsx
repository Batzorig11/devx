import { Braces, FileCode2, Globe2, Palette } from "lucide-react";

import {
  BrowserFrame,
  BrutalCard,
  BrutalTag,
  Slide,
} from "@/components/presentation";

import { TOTAL_SLIDES } from "./constants";

export function FrontendSlide() {
  return (
    <Slide
      number="13"
      label="Frontend"
      totalSlides={TOTAL_SLIDES}
      title="Frontend = таны хүрч буй хэсэг."
    >
      <div className="grid flex-1 gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <BrowserFrame
          title="my-first-page.html"
          className="flex flex-col"
          bodyClassName="flex flex-1 bg-[#5b8cff]"
        >
          <div className="border-[3px] border-black bg-[#fffdf5] p-5 shadow-[5px_5px_0_#111]">
            <div className="flex items-center justify-between border-b-[3px] border-black pb-3">
              <p className="text-2xl font-black">DEV-X CLUB</p>
              <BrutalTag>ONLINE</BrutalTag>
            </div>
            <div className="grid min-h-48 place-items-center text-center">
              <div>
                <Globe2 className="mx-auto size-12" strokeWidth={3} />
                <p className="mt-3 text-4xl font-black">Hello, web!</p>
                <p className="mt-2 font-bold">Энэ бол browser-ийн харуулж буй frontend.</p>
              </div>
            </div>
          </div>
        </BrowserFrame>

        <div className="grid gap-3">
          {[
            ["HTML", "БҮТЭЦ", "Юу байх вэ?", FileCode2, "bg-[#ffe75c]"],
            ["CSS", "ХАРАГДАЦ", "Яаж харагдах вэ?", Palette, "bg-[#ff5c5c]"],
            ["JS", "ҮЙЛДЭЛ", "Юу хийх вэ?", Braces, "bg-[#5de2a5]"],
          ].map(([name, role, question, Icon, color]) => {
            const TechIcon = Icon as typeof FileCode2;
            return (
              <BrutalCard key={String(name)} shadow="sm" className={`flex items-center gap-4 p-4 ${String(color)}`}>
                <TechIcon className="size-9 shrink-0" strokeWidth={3} />
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-2xl font-black">{String(name)}</p>
                    <span className="font-mono text-xs font-black">{String(role)}</span>
                  </div>
                  <p className="font-bold">{String(question)}</p>
                </div>
              </BrutalCard>
            );
          })}
        </div>
      </div>
    </Slide>
  );
}
