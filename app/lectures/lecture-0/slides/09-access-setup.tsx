import { ArrowRight, Check, LockKeyhole, Wifi } from "lucide-react";

import { BrutalCard, BrutalTag, Slide } from "@/components/presentation";

import { TOTAL_SLIDES } from "./constants";

export function AccessSetupSlide() {
  return (
    <Slide number="09" label="Access setup" totalSlides={TOTAL_SLIDES} title="Wi-Fi, computer-н нууц үг">
      <div className="grid flex-1 gap-5 lg:grid-cols-2">
        <BrutalCard className="flex flex-col justify-between bg-[#5b8cff] p-5">
          <div className="flex items-center justify-between">
            <Wifi className="size-12" strokeWidth={3} />
            <BrutalTag className="bg-[#5de2a5]">01 · NETWORK</BrutalTag>
          </div>
          <div className="mt-8 space-y-3">
            <div className="border-[3px] border-black bg-[#fffdf5] p-4">
              <p className="font-mono text-xs font-black">WI-FI NAME</p>
              <p className="mt-1 text-3xl font-black">Erxes Mongolia LLC</p>
            </div>
            <div className="border-[3px] border-black bg-[#ffe75c] p-4">
              <p className="font-mono text-xs font-black">PASSWORD</p>
              <p className="mt-1 text-2xl font-black">ErxeS$999</p>
            </div>
          </div>
        </BrutalCard>

        <BrutalCard className="flex flex-col justify-between bg-[#ffe75c] p-5">
          <div className="flex items-center justify-between">
            <LockKeyhole className="size-12" strokeWidth={3} />
            <BrutalTag className="bg-[#ff5c5c]">02 · COMPUTER</BrutalTag>
          </div>
          <div className="mt-8 space-y-3">
            <div className="border-[3px] border-black bg-[#fffdf5] p-4">
              <p className="font-mono text-xs font-black">USER</p>
              <p className="mt-1 text-3xl font-black">DevX-1-XX</p>
            </div>
            <div className="border-[3px] border-black bg-[#5de2a5] p-4">
              <p className="font-mono text-xs font-black">PASSWORD</p>
              <p className="mt-1 text-2xl font-black">devX-XX</p>
            </div>
          </div>
        </BrutalCard>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-[3px] border-black bg-[#fffdf5] p-3 font-bold shadow-[4px_4px_0_#111]">
        <span className="flex items-center gap-2">
          <Check className="size-5" /> Wi-Fi connected
        </span>
        <ArrowRight className="hidden size-5 md:block" />
        <span className="flex items-center gap-2">
          <Check className="size-5" /> Computer unlocked
        </span>
        <ArrowRight className="hidden size-5 md:block" />
        <span className="flex items-center gap-2">
          <Check className="size-5" /> Browser opened
        </span>
      </div>
    </Slide>
  );
}
