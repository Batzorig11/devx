import type { Metadata } from "next";
import Link from "next/link";

import { CopyColorButton } from "./copy-color-button";

export const metadata: Metadata = {
  title: "Lecture 0 color palette · Dev-X",
  description: "The four-color presentation system used by Dev-X Lecture 0.",
};

const colors = [
  {
    name: "Ink",
    hex: "#0A1E41",
    variable: "--presentation-ink",
    description: "Primary text, borders, outlines, and hard shadows.",
    cardClassName:
      "bg-presentation-ink text-presentation-surface lg:col-span-7",
    copyClassName:
      "border-presentation-surface bg-presentation-surface text-presentation-ink shadow-[4px_4px_0_var(--presentation-accent)] focus-visible:ring-offset-presentation-ink",
  },
  {
    name: "Accent",
    hex: "#6569DF",
    variable: "--presentation-accent",
    description: "Highlights, buttons, counters, and active markers.",
    cardClassName:
      "bg-presentation-accent text-presentation-surface lg:col-span-5",
    copyClassName:
      "border-presentation-ink bg-presentation-surface text-presentation-ink shadow-[4px_4px_0_var(--presentation-ink)] focus-visible:ring-offset-presentation-accent",
  },
  {
    name: "Paper",
    hex: "#EFEEE8",
    variable: "--presentation-paper",
    description: "The warm canvas behind every standard lecture slide.",
    cardClassName:
      "bg-presentation-paper text-presentation-ink lg:col-span-5",
    copyClassName:
      "border-presentation-ink bg-presentation-ink text-presentation-surface shadow-[4px_4px_0_var(--presentation-accent)] focus-visible:ring-offset-presentation-paper",
  },
  {
    name: "Surface",
    hex: "#FFFDF5",
    variable: "--presentation-surface",
    description: "Cards, panels, controls, and high-contrast reading areas.",
    cardClassName:
      "bg-presentation-surface text-presentation-ink lg:col-span-7",
    copyClassName:
      "border-presentation-ink bg-presentation-ink text-presentation-surface shadow-[4px_4px_0_var(--presentation-accent)] focus-visible:ring-offset-presentation-surface",
  },
] as const;

export default function PalettePage() {
  return (
    <main className="min-h-dvh bg-presentation-paper text-presentation-ink selection:bg-presentation-accent selection:text-presentation-surface [background-image:radial-gradient(circle,var(--presentation-ink-muted)_1px,transparent_1px)] [background-size:22px_22px]">
      <div className="mx-auto w-full max-w-[94rem] px-5 py-5 sm:px-8 lg:px-12 lg:py-8">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b-[3px] border-presentation-ink pb-4 font-mono text-xs font-black uppercase tracking-[0.16em]">
          <Link
            href="/"
            className="border-b-2 border-transparent py-1 transition-colors hover:border-presentation-ink focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-presentation-accent focus-visible:ring-offset-2 focus-visible:ring-offset-presentation-paper"
          >
            ← Lectures
          </Link>
          <p>Dev-X · Lecture 0 · Color reference</p>
        </header>

        <section className="grid gap-8 py-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16 lg:py-16">
          <div>
            <p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.18em] text-presentation-accent sm:text-sm">
              Presentation palette
            </p>
            <h1 className="max-w-5xl text-[clamp(4rem,10vw,9.5rem)] font-black uppercase leading-[0.76] tracking-[-0.085em]">
              Four colors.
              <span className="block text-presentation-accent">One system.</span>
            </h1>
          </div>

          <div className="border-l-[7px] border-presentation-ink pl-5 lg:mb-2 lg:pl-7">
            <p className="text-lg font-bold leading-snug sm:text-xl">
              Lecture 0 uses one restrained palette for every slide, card,
              label, and interaction.
            </p>
            <p className="mt-4 font-mono text-xs font-black uppercase tracking-[0.12em]">
              Select a color · Copy its hex code
            </p>
          </div>
        </section>

        <div
          className="mb-7 grid h-16 grid-cols-4 overflow-hidden border-[3px] border-presentation-ink shadow-[6px_6px_0_var(--presentation-ink)] sm:h-20"
          aria-label="Lecture 0 palette preview"
        >
          <span className="bg-presentation-ink" title="Ink" />
          <span className="bg-presentation-accent" title="Accent" />
          <span className="bg-presentation-paper" title="Paper" />
          <span className="bg-presentation-surface" title="Surface" />
        </div>

        <section aria-labelledby="color-board-title">
          <h2 id="color-board-title" className="sr-only">
            Color codes
          </h2>
          <div className="grid gap-5 lg:grid-cols-12">
            {colors.map((color) => (
              <article
                key={color.hex}
                className={`flex min-h-[22rem] flex-col justify-between border-[3px] border-presentation-ink p-5 shadow-[7px_7px_0_var(--presentation-ink)] sm:p-7 ${color.cardClassName}`}
              >
                <div className="flex items-start justify-between gap-4 border-b-[3px] border-current pb-4 font-mono text-xs font-black uppercase tracking-[0.16em]">
                  <h3>{color.name}</h3>
                  <code>{color.variable}</code>
                </div>

                <div className="my-10">
                  <code className="block break-all font-mono text-[clamp(3.4rem,8vw,7.5rem)] font-black leading-none tracking-[-0.08em]">
                    {color.hex}
                  </code>
                  <p className="mt-5 max-w-xl text-base font-bold leading-relaxed sm:text-lg">
                    {color.description}
                  </p>
                </div>

                <CopyColorButton
                  value={color.hex}
                  className={color.copyClassName}
                />
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t-[3px] border-presentation-ink py-5 font-mono text-xs font-black uppercase tracking-[0.14em]">
          <span>Dev-X presentation system</span>
          <span>Ink · Accent · Paper · Surface</span>
        </footer>
      </div>
    </main>
  );
}
