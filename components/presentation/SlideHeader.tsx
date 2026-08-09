type SlideHeaderProps = {
  label: string;
  number: number;
  totalSlides: number;
};

export default function SlideHeader({ label, number, totalSlides }: SlideHeaderProps) {
  return (
    <div className="relative z-20 mb-5 flex items-center justify-between border-b-[3px] border-black pb-3 font-mono text-xs font-black uppercase tracking-[0.18em] md:text-sm">
      <span>{label}</span>
      <span>
        {number} / {totalSlides}
      </span>
    </div>
  );
}
