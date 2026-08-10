import { Slide } from "@/components/presentation";

import { TOTAL_SLIDES } from "./constants";

export function WhyDevxSlide() {
  return (
    <Slide number="06" label="Big question" totalSlides={TOTAL_SLIDES} contentClassName="grid place-items-center pb-6">
      <h1 className="text-center space-y-2 text-[clamp(3.25rem,11vw,11rem)] font-black uppercase leading-[0.82] tracking-[-0.065em]">
        <span className="block">Яагаад</span>
        <span className="mt-[0.16em] inline-block border-[0.035em] border-black bg-[#5b8cff] px-[0.12em] pb-[0.08em] pt-[0.04em] shadow-[0.075em_0.075em_0_#111]">
          DevX
        </span>
        <span className="block">сонгосон бэ?</span>
      </h1>
    </Slide>
  );
}
