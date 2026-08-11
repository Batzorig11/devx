import {
  BrutalCard,
  BrutalTag,
  Eyebrow,
  Slide,
} from "@/components/presentation";
import {
  Check,
  Clock3,
  FolderCog,
  FolderTree,
  TerminalSquare,
} from "lucide-react";

const buildSteps = [
  ["01", "mkdir devx-portfolio", "Root project folder үүсгэ."],
  ["02", "cd devx-portfolio", "Project folder руугаа ор."],
  [
    "03",
    "mkdir -p assets/images assets/icons css js",
    "Nested folder-уудыг нэг command-аар үүсгэ.",
  ],
  ["04", "touch index.html", "Entry file-аа root түвшинд үүсгэ."],
  [
    "05",
    "touch css/style.css js/main.js",
    "File-уудыг шууд зөв folder дотор үүсгэ.",
  ],
  ["06", "ls -R", "Бүх folder, file-аа recursive байдлаар шалга."],
] as const;

export default function Slide11() {
  return (
    <Slide
      number="11"
      label="Folder structure practice"
      totalSlides={20}
      className="md:overflow-y-auto lg:overflow-hidden"
    >
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <FolderCog className="size-4" aria-hidden="true" />
            Level up
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-7xl">
            Folder structure challenge
          </h2>
        </div>
        <div className="flex items-center gap-3 border-[3px] border-presentation-ink bg-presentation-accent px-4 py-3 font-mono text-xs font-black uppercase tracking-[0.1em] text-presentation-surface shadow-[4px_4px_0_var(--presentation-ink)]">
          <Clock3 className="size-5" strokeWidth={3} aria-hidden="true" />
          <span>10 минут · Pair work</span>
        </div>
      </div>

      <div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-[0.76fr_1.24fr]">
        <BrutalCard className="flex min-h-0 flex-col overflow-hidden p-0">
          <div className="flex items-center justify-between border-b-[3px] border-presentation-ink bg-presentation-accent px-4 py-3 font-mono text-xs font-black uppercase tracking-[0.12em] text-presentation-surface">
            <span>Target architecture</span>
            <FolderTree
              className="size-5"
              strokeWidth={3}
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-1 flex-col justify-center bg-presentation-ink p-5 text-presentation-surface md:p-6">
            <p className="font-mono text-xs font-black uppercase tracking-[0.12em] text-presentation-accent">
              ~/Desktop/devx-portfolio
            </p>
            <pre className="mt-4 font-mono text-sm font-black leading-7 sm:text-base md:text-lg md:leading-8">
              {`devx-portfolio/
├── index.html
├── assets/
│   ├── images/
│   └── icons/
├── css/
│   └── style.css
└── js/
    └── main.js`}
            </pre>
          </div>

          <div className="grid grid-cols-3 border-t-[3px] border-presentation-ink bg-presentation-surface text-center font-mono text-[10px] font-black uppercase tracking-[0.08em] text-presentation-ink">
            {[
              ["-p", "Nested path"],
              ["/", "Inside folder"],
              ["-R", "Recursive list"],
            ].map(([syntax, meaning]) => (
              <div
                key={syntax}
                className="border-r-[3px] border-presentation-ink p-3 last:border-r-0"
              >
                <code className="block text-lg text-presentation-accent">
                  {syntax}
                </code>
                <span>{meaning}</span>
              </div>
            ))}
          </div>
        </BrutalCard>

        <BrutalCard className="flex min-h-0 flex-col p-4 md:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-presentation-ink pb-3">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center bg-presentation-ink text-presentation-surface">
                <TerminalSquare
                  className="size-6"
                  strokeWidth={3}
                  aria-hidden="true"
                />
              </span>
              <div>
                <p className="font-mono text-[10px] font-black uppercase tracking-[0.14em]">
                  Build sequence
                </p>
                <h3 className="text-xl font-black uppercase md:text-2xl">
                  Blueprint-ийг command болго
                </h3>
              </div>
            </div>
            <BrutalTag>6 commands</BrutalTag>
          </div>

          <ol className="mt-4 grid min-h-0 flex-1 gap-2 sm:grid-cols-2">
            {buildSteps.map(([number, command, instruction]) => (
              <li
                key={number}
                className="grid grid-cols-[auto_1fr] gap-3 border-[3px] border-presentation-ink bg-presentation-paper p-3"
              >
                <span className="grid size-9 place-items-center bg-presentation-accent font-mono text-xs font-black text-presentation-surface">
                  {number}
                </span>
                <div className="min-w-0">
                  <code className="block break-words font-mono text-xs font-black text-presentation-accent md:text-sm">
                    {command}
                  </code>
                  <p className="mt-1 text-xs font-bold leading-snug">
                    {instruction}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-3 flex items-center gap-3 bg-presentation-accent px-4 py-3 text-sm font-black text-presentation-surface">
            <span className="grid size-6 shrink-0 place-items-center bg-presentation-surface text-presentation-ink">
              <Check className="size-4" strokeWidth={4} aria-hidden="true" />
            </span>
            <span>
              `ls -R`-ийн output blueprint-тэй яг ижил байвал mission complete.
            </span>
          </div>
        </BrutalCard>
      </div>
    </Slide>
  );
}
