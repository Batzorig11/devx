import {
  BrutalCard,
  BrutalTag,
  Eyebrow,
  Slide,
} from "@/components/presentation";
import {
  Check,
  Clock3,
  FileCode2,
  Flag,
  Keyboard,
  Terminal,
} from "lucide-react";

const practiceSteps = [
  ["01", "cd Desktop", "Ажлын байрлал руу шилж."],
  ["02", "mkdir devx-profile", "Project-ийн folder үүсгэ."],
  ["03", "cd devx-profile", "Шинэ folder руугаа ор."],
  [
    "04",
    "touch index.html style.css script.js",
    "HTML, CSS, JavaScript file-уудаа нэг command-аар үүсгэ.",
  ],
  ["05", "ls", "Үүсгэсэн гурван file-аа шалга."],
  ["06", "code .", "Project-оо VS Code дээр нээ."],
] as const;

export default function Slide10() {
  return (
    <Slide
      number="10"
      label="Terminal practice"
      totalSlides={20}
      className="md:overflow-y-auto lg:overflow-hidden"
    >
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <Keyboard className="size-4" aria-hidden="true" />
            Hands-on mission
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-7xl">
            Terminal practice
          </h2>
        </div>
        <div className="flex items-center gap-3 border-[3px] border-presentation-ink bg-presentation-accent px-4 py-3 font-mono text-xs font-black uppercase tracking-[0.1em] text-presentation-surface shadow-[4px_4px_0_var(--presentation-ink)]">
          <Clock3 className="size-5" strokeWidth={3} aria-hidden="true" />
          <span>7 минут · Бие дааж</span>
        </div>
      </div>

      <div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <BrutalCard className="flex min-h-0 flex-col p-4 md:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-presentation-ink pb-3">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center bg-presentation-ink text-presentation-surface">
                <Terminal
                  className="size-6"
                  strokeWidth={3}
                  aria-hidden="true"
                />
              </span>
              <div>
                <p className="font-mono text-[10px] font-black uppercase tracking-[0.14em]">
                  Mission
                </p>
                <h3 className="text-xl font-black uppercase md:text-2xl">
                  Project-оо terminal-аас эхлүүл
                </h3>
              </div>
            </div>
            <BrutalTag>Mouse ашиглахгүй</BrutalTag>
          </div>

          <ol className="mt-4 grid min-h-0 flex-1 gap-2 sm:grid-cols-2">
            {practiceSteps.map(([number, command, instruction]) => (
              <li
                key={number}
                className="grid grid-cols-[auto_1fr] gap-3 border-[3px] border-presentation-ink bg-presentation-paper p-3"
              >
                <span className="grid size-9 place-items-center bg-presentation-accent font-mono text-xs font-black text-presentation-surface">
                  {number}
                </span>
                <div className="min-w-0">
                  <code className="block break-words font-mono text-sm font-black text-presentation-accent md:text-base">
                    {command}
                  </code>
                  <p className="mt-1 text-xs font-bold leading-snug md:text-sm">
                    {instruction}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </BrutalCard>

        <div className="grid min-h-0 gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-[1fr_auto]">
          <BrutalCard className="flex min-h-0 flex-col overflow-hidden p-0">
            <div className="flex items-center justify-between border-b-[3px] border-presentation-ink bg-presentation-accent px-4 py-3 font-mono text-xs font-black uppercase tracking-[0.12em] text-presentation-surface">
              <span>Expected result</span>
              <FileCode2
                className="size-5"
                strokeWidth={3}
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center bg-presentation-ink p-5 font-mono text-presentation-surface">
              <p className="text-xs font-black text-presentation-accent">
                ~/Desktop/devx-profile
              </p>
              <pre className="mt-4 text-base font-black leading-8 md:text-lg">
                {`devx-profile/
├── index.html
├── style.css
└── script.js`}
              </pre>
            </div>
          </BrutalCard>

          <BrutalCard
            shadow="sm"
            className="bg-presentation-accent p-4 text-presentation-surface"
          >
            <div className="flex items-center gap-3">
              <Flag
                className="size-6 shrink-0"
                strokeWidth={3}
                aria-hidden="true"
              />
              <p className="font-mono text-xs font-black uppercase tracking-[0.12em]">
                Дууссан эсэхээ шалга
              </p>
            </div>
            <ul className="mt-4 space-y-2 text-sm font-black">
              {[
                "Folder зөв нэртэй",
                "3 file бүгд үүссэн",
                "VS Code дээр project нээгдсэн",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="grid size-5 shrink-0 place-items-center bg-presentation-surface text-presentation-ink">
                    <Check
                      className="size-4"
                      strokeWidth={4}
                      aria-hidden="true"
                    />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </BrutalCard>
        </div>
      </div>
    </Slide>
  );
}
