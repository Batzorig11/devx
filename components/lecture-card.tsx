import { ArrowRight, Clock3, Globe2 } from "lucide-react";
import Link from "next/link";

import type { lecturesMetadatas } from "@/app/lectures/metadata/lecturesMetaData";

type LectureMetadata = (typeof lecturesMetadatas)[number];

type LectureCardProps = {
  lectureMetadata: LectureMetadata;
};

export function LectureCard({ lectureMetadata }: LectureCardProps) {
  return (
    <Link
      href={lectureMetadata.lecturePath}
      className="group flex min-h-72 flex-col justify-between border-2 border-border bg-secondary-background p-5 text-foreground shadow-shadow transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <div>
        <div className="flex items-center justify-between border-b-2 border-border pb-4">
          <span className="bg-main px-2 py-1 text-xs font-black text-main-foreground [font-family:var(--font-noto-sans-mono)]">
            ЛЕКЦ {lectureMetadata.lectureNumber}
          </span>
          <Globe2 className="size-7" strokeWidth={2.5} aria-hidden="true" />
        </div>
        <h2 className="mt-6 text-3xl font-black leading-[0.95] tracking-tighter">
          {lectureMetadata.title}
        </h2>
        <p className="mt-3 text-sm font-semibold leading-relaxed text-foreground/65">
          {lectureMetadata.description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em]">
          <Clock3 className="size-4" aria-hidden="true" />
          {lectureMetadata.estimatedMinutes} мин
        </span>
        <span className="flex items-center gap-2 font-black">
          Нээх
          <ArrowRight
            className="size-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
