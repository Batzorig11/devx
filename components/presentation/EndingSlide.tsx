import { Check } from "lucide-react";

import { BrutalCard } from "./BrutalCard";
import { Eyebrow } from "./Eyebrow";

export function EndingSlide() {
  return (
    <section
      aria-label="Lecture ending"
      className="relative flex min-h-dvh w-full flex-col overflow-x-hidden overflow-y-auto bg-presentation-paper px-5 pb-28 pt-5 text-presentation-ink [background-image:radial-gradient(circle,var(--presentation-ink-muted)_1px,transparent_1px)] [background-size:22px_22px] md:h-dvh md:overflow-hidden md:px-10 md:pt-8"
    >
      <header className="relative z-20 mb-5 flex items-center justify-between border-b-[3px] border-presentation-ink pb-3 font-mono text-xs font-black uppercase tracking-[0.18em] md:text-sm">
        <span>Lecture complete</span>
        <span>DevX · End</span>
      </header>

      <div className="grid min-h-0 flex-1 items-center">
        <BrutalCard className="grid min-h-[28rem] overflow-hidden p-0 lg:grid-cols-[1fr_0.36fr]">
          <div className="flex flex-col justify-between p-6 md:p-9">
            <Eyebrow>
              <Check className="size-4" strokeWidth={4} aria-hidden="true" />
              Session complete
            </Eyebrow>

            <div className="my-10">
              <p className="font-mono text-xs font-black uppercase tracking-[0.18em] md:text-sm">
                Өнөөдрийн хичээл дууслаа
              </p>
              <h1 className="mt-4 text-[clamp(3rem,10vw,9rem)] font-black uppercase leading-[0.8] tracking-[-0.08em]">
                Баярлалаа.
              </h1>
              <p className="mt-7 max-w-2xl text-xl font-bold md:text-3xl">
                Дараагийн хичээлээр уулзъя.
              </p>
            </div>

            <p className="border-l-[7px] border-presentation-ink pl-4 font-mono text-xs font-black uppercase tracking-[0.12em] md:text-sm">
              Learn · Build · Repeat
            </p>
          </div>

          <div className="flex min-h-64 flex-col items-center justify-between border-t-[3px] border-presentation-ink bg-presentation-accent p-6 text-presentation-surface lg:min-h-0 lg:border-l-[3px] lg:border-t-0">
            <span className="self-end font-mono text-xs font-black uppercase tracking-[0.18em]">
              Dev-X
            </span>
            <span className="text-[clamp(6rem,15vw,13rem)] font-black leading-none tracking-[-0.1em]">
              END
            </span>
            <span className="self-start font-mono text-xs font-black uppercase tracking-[0.18em]">
              See you next time
            </span>
          </div>
        </BrutalCard>
      </div>
    </section>
  );
}
