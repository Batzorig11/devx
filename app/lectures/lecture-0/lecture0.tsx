import { EndingSlide, SlideDeck } from "@/components/presentation";

import {
  AccessSetupSlide,
  AboutMeSlide,
  BreakSlide,
  ClassRulesSlide,
  CodingChallengesSlide,
  ConsistencySlide,
  CourseContextSlide,
  CourseScheduleSlide,
  IceBreakerSlide,
  ProgramSlide,
  SoftwareEngineerAdvantagesSlide,
  WhyDevxSlide,
  // WelcomeSlide,
} from "./slides";
import styles from "./lecture0.module.css";

export function Lecture0() {
  return (
    <main
      className={`${styles.theme} min-h-dvh bg-presentation-paper font-sans selection:bg-presentation-accent selection:text-presentation-surface`}
    >
      <SlideDeck>
        {/*<WelcomeSlide />*/}
        <AboutMeSlide />
        <CourseContextSlide />
        <ProgramSlide />
        <IceBreakerSlide />
        <WhyDevxSlide />
        <ClassRulesSlide />
        <CourseScheduleSlide />
        <AccessSetupSlide />
        <BreakSlide />
        <CodingChallengesSlide />
        <SoftwareEngineerAdvantagesSlide />
        <ConsistencySlide />
        <EndingSlide />
      </SlideDeck>
    </main>
  );
}
