import { Briefcase, Code2, Route, Sparkles, UserRound } from "lucide-react";

import { BrutalCard, BrutalTag, Slide } from "@/components/presentation";

import { TOTAL_SLIDES } from "./constants";

const teacherProfile = {
  name: "Лувсанчүлтэмийн Батзориг",
  work: ["erxes Academy : Багш", "erxes Inc : Front-end developer"],
  profession: ["Software engineer", "Computer technician"],
  hobby: ["Кино үзэх (Fav genre - HORROR!)", "Coding (Duh)", "Video Games (RPG)"],
  experience: ["Computer technician - 2016 оноос", "Coding - 2020 оноос"],
};

const profileDetails = [
  {
    label: "АЖИЛ",
    items: teacherProfile.work,
    icon: Briefcase,
    accent: "border-l-[#5b8cff]",
  },
  {
    label: "МЭРГЭЖИЛ",
    items: teacherProfile.profession,
    icon: Code2,
    accent: "border-l-[#ffe75c]",
  },
  {
    label: "ХОББИ",
    items: teacherProfile.hobby,
    icon: Sparkles,
    accent: "border-l-[#ff5c5c]",
  },
  {
    label: "ТУРШЛАГА",
    items: teacherProfile.experience,
    icon: Route,
    accent: "border-l-[#5de2a5]",
  },
];

export function AboutMeSlide() {
  return (
    <Slide number="02" label="Багшийн танилцуулга" totalSlides={TOTAL_SLIDES} title="Танилцуулга">
      <div className="grid flex-1 gap-5 lg:grid-cols-[0.72fr_1.28fr]">
        <BrutalCard className="flex flex-col justify-between bg-[#5b8cff] p-5">
          <div className="flex items-center justify-between font-mono  font-black">
            <span>TEACHER PROFILE</span>
            <UserRound className="size-8" strokeWidth={3} aria-hidden="true" />
          </div>

          <div className="my-8">
            <p className="mt-6 text-4xl font-black uppercase md:text-6xl">{teacherProfile.name}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["DevX", "Pada-1", "Kami"].map((tag) => (
              <BrutalTag key={tag} className="bg-[#fffdf5]">
                {tag}
              </BrutalTag>
            ))}
          </div>
        </BrutalCard>

        <div className="grid gap-4 sm:grid-cols-2">
          {profileDetails.map((item) => {
            const Icon = item.icon;
            return (
              <BrutalCard
                key={item.label}
                shadow="sm"
                className={`flex flex-col justify-between border-l-12 p-4 ${item.accent}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono  font-black">{item.label}</span>
                  <Icon className="size-8" strokeWidth={3} aria-hidden="true" />
                </div>
                <ul className="mt-6 space-y-3" role="list">
                  {item.items.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-lg font-black leading-tight md:text-xl">
                      <span className="mt-[0.35em] size-3 shrink-0 border-2 border-black bg-black" aria-hidden="true" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div></div>
              </BrutalCard>
            );
          })}
        </div>
      </div>
    </Slide>
  );
}
