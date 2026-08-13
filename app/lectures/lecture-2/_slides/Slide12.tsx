import {
  BrutalCard,
  BrutalTag,
  Eyebrow,
  Slide,
} from "@/components/presentation";
import { ListChecks, TextCursorInput } from "lucide-react";

import { TOTAL_SLIDES } from "./constants";

const inputTypes = [
  ["text", "Текст", "Нэг мөр энгийн текст оруулна."],
  ["email", "И-мэйл", "И-мэйл хаяг авч, format-ийг шалгана."],
  ["password", "Нууц үг", "Оруулсан тэмдэгтүүдийг далдалж харуулна."],
  ["number", "Тоо", "Тоон утга оруулах талбар үүсгэнэ."],
  ["date", "Огноо", "Calendar-аас огноо сонгоно."],
  ["file", "Файл", "Device-ээс файл сонгож хавсаргана."],
  ["checkbox", "Олон сонголт", "Хэд хэдэн сонголтыг зэрэг сонгож болно."],
  ["radio", "Нэг сонголт", "Ижил name-тай сонголтоос нэгийг сонгоно."],
  ["submit", "Илгээх", "Form-ийн мэдээллийг илгээх товч үүсгэнэ."],
] as const;

export default function Slide12() {
  return (
    <Slide
      number="14"
      label="HTML input-ийн төрлүүд"
      totalSlides={TOTAL_SLIDES}
      className="md:overflow-y-auto xl:overflow-hidden"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <TextCursorInput className="size-4" aria-hidden="true" />
            Нэг tag · Олон behavior
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-6xl">
            Input-ийн төрлүүд
          </h2>
          <p className="mt-3 text-sm font-bold md:text-base">
            <code className="bg-presentation-ink px-2 py-1 font-mono text-presentation-surface">
              type
            </code>{" "}
            attribute нь input ямар мэдээлэл авах, хэрхэн ажиллахыг тодорхойлно.
          </p>
        </div>
        <BrutalTag className="gap-2">
          <ListChecks className="size-4" aria-hidden="true" /> 9 common types
        </BrutalTag>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3">
        {inputTypes.map(([type, title, explanation], index) => (
          <BrutalCard
            key={type}
            shadow="sm"
            className={`flex min-h-0 flex-col overflow-hidden p-2.5 ${index === 1 || index === 2 || index === 8 ? "bg-presentation-accent text-presentation-surface" : ""}`}
          >
            <div className="flex items-start justify-between gap-3">
              <code
                className={`px-2 py-1 font-mono text-xs font-black md:text-sm ${index === 1 || index === 2 || index === 8 ? "bg-presentation-surface text-presentation-ink" : "bg-presentation-ink text-presentation-surface"}`}
              >
                {`type="${type}"`}
              </code>
              <span className="font-mono text-[10px] font-black">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-1.5 text-[10px] font-bold leading-tight md:text-[11px]">
              <strong className="mb-0.5 block text-sm font-black uppercase">{title}</strong>
              {explanation}
            </p>
          </BrutalCard>
        ))}
      </div>

      <div className="mt-4 border-[3px] border-presentation-ink bg-presentation-ink px-4 py-3 text-center font-mono text-xs font-black text-presentation-surface shadow-[4px_4px_0_var(--presentation-accent)] md:text-sm">
        {`<input type="email" name="email" placeholder="И-мэйлээ оруулна уу">`}
      </div>
    </Slide>
  );
}
