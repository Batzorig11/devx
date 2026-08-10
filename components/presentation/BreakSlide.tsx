"use client";

import { Coffee, Pause, Play, RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { BrutalButton } from "./BrutalButton";
import { Eyebrow } from "./Eyebrow";
import { Slide } from "./Slide";
import type { SlideTone } from "./types";

export type BreakSlideProps = {
  number: string | number;
  totalSlides: number;
  durationMinutes?: number;
  label?: string;
  tone?: SlideTone;
};

export function BreakSlide({
  number,
  totalSlides,
  durationMinutes = 20,
  label = "Завсарлага",
  tone = "ink",
}: BreakSlideProps) {
  const initialSeconds = Math.max(1, Math.round(durationMinutes * 60));
  const [secondsRemaining, setSecondsRemaining] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const endAtRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    function updateTimer() {
      if (endAtRef.current === null) {
        return;
      }

      const nextSeconds = Math.max(0, Math.ceil((endAtRef.current - Date.now()) / 1000));

      setSecondsRemaining(nextSeconds);

      if (nextSeconds === 0) {
        endAtRef.current = null;
        setIsRunning(false);
      }
    }

    updateTimer();
    const intervalId = window.setInterval(updateTimer, 250);

    return () => window.clearInterval(intervalId);
  }, [isRunning]);

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  const progress = (secondsRemaining / initialSeconds) * 100;
  const isComplete = secondsRemaining === 0;

  function toggleTimer() {
    if (isRunning) {
      endAtRef.current = null;
      setIsRunning(false);
      return;
    }

    const nextSeconds = isComplete ? initialSeconds : secondsRemaining;
    setSecondsRemaining(nextSeconds);
    endAtRef.current = Date.now() + nextSeconds * 1000;
    setIsRunning(true);
  }

  function resetTimer() {
    endAtRef.current = null;
    setIsRunning(false);
    setSecondsRemaining(initialSeconds);
  }

  const primaryLabel = isRunning
    ? "Pause"
    : isComplete
      ? "Restart"
      : secondsRemaining === initialSeconds
        ? "Start timer"
        : "Resume";

  return (
    <Slide
      number={number}
      label={label}
      totalSlides={totalSlides}
      tone={tone}
      contentClassName="items-center justify-center text-center"
    >
      <div
        className={`absolute left-[7%] top-[24%] size-20 -rotate-12 border-[3px] bg-[#5b8cff] shadow-[6px_6px_0_#ff5c5c] md:size-24 ${tone === "ink" ? "border-[#fffdf5]" : "border-black"}`}
        aria-hidden="true"
      />
      <div
        className={`absolute bottom-[16%] right-[7%] size-16 rotate-12 rounded-full border-[3px] bg-[#5de2a5] shadow-[5px_5px_0_#ffe75c] md:size-20 ${tone === "ink" ? "border-[#fffdf5]" : "border-black"}`}
        aria-hidden="true"
      />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center">
        <Eyebrow className="bg-[#ff5c5c]">
          <Coffee className="size-4" aria-hidden="true" />
          Ус · Сунгалт · Амралт
        </Eyebrow>

        <p
          data-presentation="label-success"
          className={`mt-5 font-mono text-sm font-black tracking-[0.18em] ${tone === "ink" ? "text-[#5de2a5]" : "text-black"}`}
        >
          {isComplete ? "BREAK_OVER" : isRunning ? "COUNTING_DOWN" : "BREAK_TIMER"}
        </p>

        <time
          className={`mt-1 font-mono text-[clamp(5.5rem,17vw,11rem)] font-black leading-[0.82] tracking-[-0.1em] ${tone === "ink" ? "text-[#ffe75c]" : "text-[#5b8cff] [-webkit-text-stroke:3px_#111]"}`}
          role="timer"
          aria-label={`${minutes} minutes and ${seconds} seconds remaining`}
        >
          {formattedTime}
        </time>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <BrutalButton onClick={toggleTimer} aria-pressed={isRunning} className="min-w-44 bg-[#5de2a5] uppercase">
            {isRunning ? (
              <Pause className="size-5" strokeWidth={3} aria-hidden="true" />
            ) : (
              <Play className="size-5" strokeWidth={3} aria-hidden="true" />
            )}
            {primaryLabel}
          </BrutalButton>
          <BrutalButton
            onClick={resetTimer}
            disabled={!isRunning && secondsRemaining === initialSeconds}
            className={`${tone === "ink" ? "border-[#fffdf5]" : "border-black"} bg-[#fffdf5] uppercase`}
          >
            <RotateCcw className="size-5" strokeWidth={3} aria-hidden="true" />
            Reset
          </BrutalButton>
        </div>

        <div
          className={`mt-6 h-5 w-full max-w-2xl overflow-hidden border-[3px] ${tone === "ink" ? "border-[#fffdf5] bg-black" : "border-black bg-[#fffdf5]"}`}
          aria-hidden="true"
        >
          <div className="h-full bg-[#5b8cff] transition-[width] duration-200" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </Slide>
  );
}
