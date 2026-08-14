import {
  BreakSlide,
  EndingSlide,
  SlideDeck,
  TicketCoverSlide,
} from "@/components/presentation";

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
import Slide15 from "./_slides/Slide15";
import Slide16 from "./_slides/Slide16";
import Slide17 from "./_slides/Slide17";
import Slide18 from "./_slides/Slide18";
import Slide19 from "./_slides/Slide19";
import { TOTAL_SLIDES } from "./_slides/constants";

export default function Lecture3() {
  return (
    <SlideDeck
      previousLabel="← Өмнөх"
      nextLabel="Дараах →"
      className="[&_.text-xs]:text-sm md:[&_.text-xs]:text-base"
    >
      <TicketCoverSlide
        slideNumber="01"
        totalSlides={TOTAL_SLIDES}
        lectureNumber="03"
        title="Semantic HTML &"
        highlightedTitle="CSS-ийн үндэс"
        label="Front-End хөгжүүлэлтийн үндэс"
        passLabel="Structure meets style"
        details="HTML · CSS · BOX MODEL"
        kicker="Өнөөдрийн зорилго"
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
      <BreakSlide number="11" totalSlides={TOTAL_SLIDES} />
      <Slide10 />
      <Slide11 />
      <Slide12 />
      <Slide13 />
      <Slide14 />
      <Slide15 />
      <Slide16 />
      <Slide17 />
      <Slide18 />
      <Slide19 />
      <EndingSlide />
    </SlideDeck>
  );
}
