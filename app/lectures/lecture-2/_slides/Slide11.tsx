import { BrutalCard, Slide } from "@/components/presentation";
import Image from "next/image";
import { TOTAL_SLIDES } from "./constants";

export default function Slide11() {
  return (
    <Slide number="12" label="HTML" totalSlides={TOTAL_SLIDES}>
      <BrutalCard className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="HTML CSS JavaScript"
          fill
          sizes="100vw"
          quality={100}
          className="object-contain"
          priority
        />
      </BrutalCard>
    </Slide>
  );
}
