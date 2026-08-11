import { BrutalCard, Slide } from "@/components/presentation";
import Image from "next/image";

export default function Slide07() {
  return (
    <Slide number="10" label="Интернет" totalSlides={20}>
      <BrutalCard className="relative h-full w-full">
        <Image
          src="/html.png"
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
