import { LectureCard } from "@/components/lecture-card";
import { Container } from "@/components/ui/container";
import { Title } from "@/components/ui/title";

import { lecturesMetadatas } from "@/app/lectures/metadata/lecturesMetaData";

export default function Home() {
  return (
    <Container>
      <div>
        <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-foreground/60 [font-family:var(--font-noto-sans-mono)]">
          erxes Academy : Dev-X
        </p>
        <Title>Лекцүүд</Title>
      </div>
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {lecturesMetadatas.map((lectureMetadata) => (
          <LectureCard
            key={lectureMetadata.id}
            lectureMetadata={lectureMetadata}
          />
        ))}
      </div>
    </Container>
  );
}
