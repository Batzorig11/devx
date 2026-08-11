"use client";

import { Children, type ReactNode, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";

type SlideDeckProps = {
  children: ReactNode;
  className?: string;
  navigationClassName?: string;
  previousLabel?: ReactNode;
  nextLabel?: ReactNode;
};

export function SlideDeck({
  children,
  className,
  navigationClassName,
  previousLabel = "← Previous",
  nextLabel = "Next →",
}: SlideDeckProps) {
  const slides = Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.altKey || event.ctrlKey || event.metaKey) {
        return;
      }

      const target = event.target;
      if (target instanceof HTMLElement && (target.isContentEditable || target.matches("input, textarea, select"))) {
        return;
      }

      switch (event.key) {
        case "ArrowLeft":
        case "PageUp":
          event.preventDefault();
          setCurrentIndex((index) => Math.max(index - 1, 0));
          break;
        case "ArrowRight":
        case "PageDown":
          event.preventDefault();
          setCurrentIndex((index) => Math.min(index + 1, slides.length - 1));
          break;
        case "Home":
          event.preventDefault();
          setCurrentIndex(0);
          break;
        case "End":
          event.preventDefault();
          setCurrentIndex(slides.length - 1);
          break;
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slides.length]);

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
    <section
      className={cn(
        "relative min-h-dvh bg-presentation-paper text-presentation-ink selection:bg-presentation-accent selection:text-presentation-surface",
        className,
      )}
    >
      {slides[currentIndex]}

      <nav
        aria-label="Slide navigation"
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 flex w-full items-center justify-between px-4 py-4 md:px-8",
          navigationClassName,
        )}
      >
        <span className="sr-only">
          Use Left Arrow or Page Up for the previous slide, Right Arrow or Page Down for the next slide, Home for the
          first slide, and End for the last slide.
        </span>
        <Button
          type="button"
          onClick={showPreviousSlide}
          disabled={currentIndex === 0}
          aria-keyshortcuts="ArrowLeft PageUp"
          className="w-30 pointer-events-auto h-11 rounded-none border-[3px] border-presentation-ink bg-presentation-surface px-4 font-mono text-xs font-black uppercase text-presentation-ink shadow-[4px_4px_0_var(--presentation-ink)] transition-transform active:translate-x-1 active:translate-y-1 active:shadow-none disabled:cursor-not-allowed disabled:opacity-40"
        >
          {previousLabel}
        </Button>

        <p
          aria-live="polite"
          aria-atomic="true"
          data-presentation="slide-counter"
          className="border-[3px] border-presentation-ink bg-presentation-accent px-3 py-2 font-mono text-xs font-black text-presentation-surface shadow-[3px_3px_0_var(--presentation-ink)]"
        >
          {currentIndex + 1} / {slides.length}
        </p>

        <Button
          type="button"
          onClick={showNextSlide}
          disabled={currentIndex === slides.length - 1}
          aria-keyshortcuts="ArrowRight PageDown"
          className="w-30 pointer-events-auto h-11 rounded-none border-[3px] border-presentation-ink bg-presentation-surface px-4 font-mono text-xs font-black uppercase text-presentation-ink shadow-[4px_4px_0_var(--presentation-ink)] transition-transform active:translate-x-1 active:translate-y-1 active:shadow-none disabled:cursor-not-allowed disabled:opacity-40"
        >
          {nextLabel}
        </Button>
      </nav>
    </section>
  );
}
