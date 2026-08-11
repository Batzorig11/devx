import { BreakSlide, EndingSlide, SlideDeck, TicketCoverSlide } from "@/components/presentation";
import { Slide01 } from "./_slides/Slide01";
import Slide02 from "./_slides/Slide02";
import Slide03 from "./_slides/Slide03";
import Slide04 from "./_slides/Slide04";
import Slide05 from "./_slides/Slide05";
import Slide06 from "./_slides/Slide06";
import Slide07 from "./_slides/Slide07";
import Slide08 from "./_slides/Slide08";
import Slide09 from "./_slides/Slide09";
import Slide10 from "./_slides/Slide10";
import Slide11 from "./_slides/Slide11";

export default function Lecture1() {
  return (
    <SlideDeck>
      <TicketCoverSlide
        slideNumber="1"
        totalSlides={20}
        lectureNumber="01"
        title="Интернет "
        highlightedTitle="гэж юу вэ?"
        label="Front-End хөгжүүлэлтийн үндэс"
      />
      <Slide01 />
      <Slide02 />
      <Slide03 />
      <Slide04 />
      <Slide05 />
      <Slide06 />
      <Slide07 />
      <BreakSlide number="08" totalSlides={20} />
      <Slide08 />
      <Slide09 />
      <Slide10 />
      <Slide11 />
      <EndingSlide />
    </SlideDeck>
  );
}
