import { BrutalCard, Eyebrow, Slide } from "@/components/presentation";
import { Code2, MousePointer2, Terminal } from "lucide-react";

export default function Slide08() {
  return (
    <Slide number="10" label="Интернет" totalSlides={20}>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow className="bg-[#5de2a5] text-black">
            <Code2 className="size-4" aria-hidden="true" />
            Strongest tool
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-tighter md:text-7xl">Terminal</h2>
        </div>
        <p className="max-w-sm font-mono text-xs font-bold text-[#5de2a5]">Basic terminal commands</p>
      </div>

      <div className="grid flex-1 gap-4 lg:grid-cols-[1.25fr_0.75fr]">
        <BrutalCard className={`p-4 `}>
          <div className="flex items-center justify-between border-b-[3px] border-black pb-3 font-mono font-black text-2xl">
            <span>Terminal гэж юу вэ?</span>
          </div>
          <div className="mt-4 space-y-3">
            <BrutalCard shadow="sm" className={` p-4`}>
              <div className="flex items-start justify-between gap-3">
                <p className="mt-5 text-3xl font-black md:text-5xl">
                  Terminal бол компьютерт command бичиж удирдах текстэн орчин. Developer-үүд програм ажиллуулах, package
                  суулгах, Git болон server-тэй ажиллахдаа ашигладаг.
                </p>
                <MousePointer2 className="size-5 shrink-0" />
              </div>
              <div className="mt-6 flex items-center justify-between"></div>
            </BrutalCard>
          </div>
        </BrutalCard>

        <div className="flex flex-col border-[3px] border-[#fffdf5] bg-[#fffdf5] text-black shadow-[8px_8px_0_#ff5c5c]">
          <div className="flex items-center gap-2 border-b-[3px] border-black bg-[#ffe75c] px-4 py-3 font-mono text-xs font-black">
            <Terminal className="size-4" /> TERMINAL
          </div>

          <div className="flex-1 space-y-4 bg-black p-5 font-mono text-xs font-bold text-[#fffdf5] md:text-sm">
            <p>
              <span className="text-[#ffe75c]">➜</span> pwd
            </p>
            <p className="text-zinc-400">/Users/student/projects</p>

            <p>
              <span className="text-[#ffe75c]">➜</span> ls
            </p>
            <p className="text-zinc-400">Desktop Documents Downloads project</p>

            <p>
              <span className="text-[#ffe75c]">➜</span> cd project
            </p>

            <p>
              <span className="text-[#ffe75c]">➜</span> mkdir website
            </p>

            <p>
              <span className="text-[#ffe75c]">➜</span> touch index.html
            </p>

            <p>
              <span className="text-[#ffe75c]">➜</span> clear
            </p>

            <p className="border-t border-zinc-700 pt-4 text-[#5de2a5]">Ready for the next command _</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
