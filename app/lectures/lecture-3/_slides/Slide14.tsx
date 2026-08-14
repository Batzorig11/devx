import { BrutalCard, BrutalTag, Eyebrow, Slide } from "@/components/presentation";
import { Image as ImageIcon, PaintBucket } from "lucide-react";

import { CodePanel } from "../_components/CodePanel";
import { TOTAL_SLIDES } from "./constants";

const backgroundCode = `.hero {
  background-color: #0a1e41;
  background-image: url("pattern.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}`;

const properties = [
  ["background-color", "Арын үндсэн өнгө"],
  ["background-image", "Зураг эсвэл gradient"],
  ["background-repeat", "Зураг давтагдах эсэх"],
  ["background-position", "Зургийн байрлал"],
  ["background-size", "Зургийн хэмжээг тааруулах"],
] as const;

export default function Slide14() {
  return (
    <Slide
      number="16"
      label="CSS background"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <PaintBucket className="size-4" aria-hidden="true" />
            Element-ийн арын давхарга
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-6xl">
            Background
          </h2>
        </div>
        <BrutalTag>Color · Image · Position · Size</BrutalTag>
      </div>

      <div className="grid min-h-0 flex-1 gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="grid min-h-0 grid-rows-[1fr_auto] gap-4">
          <CodePanel code={backgroundCode} title="styles.css" codeClassName="flex items-center text-lg leading-9" />
          <BrutalCard
            shadow="sm"
            className="relative min-h-28 overflow-hidden bg-presentation-ink p-5 text-presentation-surface [background-image:radial-gradient(circle,#6569df_2px,transparent_2px)] [background-size:22px_22px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-presentation-ink via-presentation-ink/80 to-transparent" />
            <div className="relative flex h-full items-center justify-between gap-4">
              <div>
                <span className="font-mono text-sm font-black uppercase tracking-widest">Live example</span>
                <p className="mt-1 text-2xl font-black uppercase">Layered background</p>
              </div>
              <ImageIcon className="size-9" strokeWidth={3} aria-hidden="true" />
            </div>
          </BrutalCard>
        </div>

        <BrutalCard className="flex min-h-0 flex-col overflow-hidden p-0">
          <div className="border-b-[3px] border-presentation-ink bg-presentation-accent px-4 py-3 font-mono text-base font-black uppercase tracking-widest text-presentation-surface">
            Background toolbox
          </div>
          <div className="grid min-h-0 flex-1 grid-rows-5">
            {properties.map(([property, copy]) => (
              <div
                key={property}
                className={`grid min-h-0 grid-cols-2 border-b-[3px] border-presentation-ink last:border-b-0`}
              >
                <p className="flex items-center px-3 font-mono text-lg font-black text-presentation-accent">{property}</p>
                <p className="flex items-center border-l-[3px] border-presentation-ink px-3 text-lg font-bold leading-snug">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </BrutalCard>
      </div>
    </Slide>
  );
}
