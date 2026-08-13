import { BreakSlide, EndingSlide, SlideDeck, TicketCoverSlide } from "@/components/presentation";

import Slide01 from "./_slides/Slide01";
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
import Slide12 from "./_slides/Slide12";
import Slide13 from "./_slides/Slide13";
import Slide14 from "./_slides/Slide14";
import { TOTAL_SLIDES } from "./_slides/constants";

export default function Lecture2() {
  return (
    <SlideDeck previousLabel="← Өмнөх" nextLabel="Дараах →">
      <TicketCoverSlide
        slideNumber="01"
        totalSlides={TOTAL_SLIDES}
        lectureNumber="02"
        title="HTML-ийн"
        highlightedTitle="танилцуулга"
        label="Front-End хөгжүүлэлтийн үндэс"
        passLabel="Web document entry pass"
        details="HTML · INTRODUCTION"
        kicker="Web page-ийн эхлэл"
        actionLabel="ЭХЭЛЬЕ"
      />
      <Slide01 />
      <Slide02 />
      <Slide03 />
      <Slide04 />
      <Slide05 />
      <Slide06 />
      <Slide07 />
      <Slide08 />
      <Slide09 />
      <Slide10 />
      <Slide11 />
      <BreakSlide number="13" totalSlides={TOTAL_SLIDES} />
      <Slide12 />
      <Slide13 />
      <Slide14 />
      <EndingSlide />
    </SlideDeck>
  );
}
