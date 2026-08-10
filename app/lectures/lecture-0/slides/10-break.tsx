import { BreakSlide as PresentationBreakSlide } from "@/components/presentation";

import { TOTAL_SLIDES } from "./constants";

export function BreakSlide() {
  return <PresentationBreakSlide number="10" totalSlides={TOTAL_SLIDES} durationMinutes={20} tone="paper" />;
}
