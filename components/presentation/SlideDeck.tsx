"use client";

import { Children, type ReactNode, useState } from "react";
import { Button } from "../ui/button";

type SlideDeckProps = {
  children: ReactNode;
};

export function SlideDeck({ children }: SlideDeckProps) {
  const slides = Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (slides.length === 0) {
    return null;
  }

  function showPreviousSlide() {
    setCurrentIndex((index) => Math.max(index - 1, 0));
  }

  function showNextSlide() {
    setCurrentIndex((index) => Math.min(index + 1, slides.length - 1));
  }

  return (
    <section>
      {slides[currentIndex]}

      <nav aria-label="Slide navigation" className="absolute w-full p-10 flex bottom-0 items-center justify-between">
        <Button
          type="button"
          onClick={showPreviousSlide}
          disabled={currentIndex === 0}
          className="rounded-lg bg-slate-900 px-5 py-2.5 text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          ← Previous
        </Button>

        <p className="text-sm font-medium text-slate-600">
          {currentIndex + 1} / {slides.length}
        </p>

        <Button
          type="button"
          onClick={showNextSlide}
          disabled={currentIndex === slides.length - 1}
          className="rounded-lg bg-slate-900 px-5 py-2.5 text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next →
        </Button>
      </nav>
    </section>
  );
}
