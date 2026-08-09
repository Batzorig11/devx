import type { ReactNode } from "react";
import SlideTitle from "./SlideTitle";
import SlideHeader from "./SlideHeader";

type SlideProps = {
  title: string;
  children: ReactNode;
  label: string;
  number: number;
  totalSlides: number;
};

export function Slide({ title, children, label, number, totalSlides }: SlideProps) {
  return (
    <section className="flex flex-col justify-between items-stretch max-w-screen w-full max-h-screen h-screen overflow-hidden px-20 py-10">
      <SlideHeader label={label} number={number} totalSlides={totalSlides} />
      <SlideTitle>{title}</SlideTitle>

      <div className="mt-8 flex-1 text-xl">{children}</div>
    </section>
  );
}
