import { BrutalCard, Slide } from "@/components/presentation";
import Image from "next/image";
import { TOTAL_SLIDES } from "./constants";

export default function Slide13() {
  return (
    <Slide number="15" label="Register form-ийн жишээ" totalSlides={TOTAL_SLIDES}>
      <BrutalCard className="relative h-full w-full">
        <Image
          src="/register.png"
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
