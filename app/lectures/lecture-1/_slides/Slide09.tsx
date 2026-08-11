import {
  BrutalCard,
  BrutalTag,
  Eyebrow,
  Slide,
} from "@/components/presentation";
import { ArrowRight, Braces, FolderTree, Terminal } from "lucide-react";

const commandGroups = [
  {
    label: "Байршил",
    title: "Хаана байгаагаа мэд",
    commands: [
      ["pwd", "Одоогийн folder-ийн бүтэн замыг харуулна."],
      ["ls", "Доторх file болон folder-уудыг жагсаана."],
    ],
  },
  {
    label: "Хөдөлгөөн",
    title: "Folder хооронд шилж",
    commands: [
      ["cd project", "project folder руу орно."],
      ["cd ..", "Нэг түвшин дээш гарна."],
    ],
  },
  {
    label: "Бүтээх",
    title: "Ажлын орчноо үүсгэ",
    commands: [
      ["mkdir website", "website нэртэй шинэ folder үүсгэнэ."],
      ["touch index.html", "index.html нэртэй шинэ file үүсгэнэ."],
      ["clear", "Terminal-ийн харагдацыг цэвэрлэнэ."],
    ],
  },
] as const;

export default function Slide09() {
  return (
    <Slide
      number="09"
      label="Terminal"
      totalSlides={20}
      className="md:overflow-y-auto lg:overflow-hidden"
    >
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>
            <Terminal className="size-4" aria-hidden="true" />
            Command reference
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.055em] md:text-7xl">
            Terminal commands
          </h2>
        </div>
        <p className="max-w-md border-l-[5px] border-presentation-ink pl-4 font-mono text-xs font-black uppercase leading-relaxed tracking-[0.08em]">
          Command бүр компьютерт хийх нэг тодорхой үйлдлийг хэлнэ.
        </p>
      </div>

      <div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-[0.58fr_1.42fr]">
        <BrutalCard className="flex min-h-64 flex-col justify-between bg-presentation-ink p-5 text-presentation-surface md:p-6">
          <div className="flex items-center justify-between border-b-[3px] border-presentation-surface pb-3 font-mono text-xs font-black uppercase tracking-[0.14em]">
            <span>Command anatomy</span>
            <Braces className="size-5" strokeWidth={3} aria-hidden="true" />
          </div>

          <div className="my-4">
            <span className="font-mono text-5xl font-black leading-none text-presentation-accent md:text-6xl">
              ➜
            </span>
            <p className="mt-2 text-xl font-black leading-tight md:text-2xl">
              Command + argument
            </p>
            <p className="mt-2 max-w-md text-sm font-bold leading-snug text-presentation-surface/80">
              Эхний үг нь хийх үйлдэл, дараагийн үг нь аль file эсвэл folder
              дээр ажиллахыг заана.
            </p>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-[3px] border-presentation-surface bg-presentation-surface p-3 text-presentation-ink">
            <div>
              <span className="block font-mono text-[10px] font-black uppercase tracking-[0.12em]">
                Command
              </span>
              <code className="text-xl font-black">cd</code>
            </div>
            <ArrowRight
              className="size-6"
              strokeWidth={3}
              aria-hidden="true"
            />
            <div>
              <span className="block font-mono text-[10px] font-black uppercase tracking-[0.12em]">
                Argument
              </span>
              <code className="text-xl font-black text-presentation-accent">
                project
              </code>
            </div>
          </div>
        </BrutalCard>

        <div className="grid gap-3 md:grid-cols-3">
          {commandGroups.map((group, groupIndex) => (
            <BrutalCard
              key={group.label}
              shadow="sm"
              className="flex min-h-0 flex-col p-4 md:p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <BrutalTag>{group.label}</BrutalTag>
                  <h3 className="mt-3 text-xl font-black uppercase leading-tight md:text-2xl">
                    {group.title}
                  </h3>
                </div>
                <span className="font-mono text-4xl font-black text-presentation-accent">
                  {groupIndex + 1}
                </span>
              </div>

              <div className="mt-5 flex flex-1 flex-col">
                {group.commands.map(([command, description]) => (
                  <div
                    key={command}
                    className="flex flex-1 flex-col justify-center border-t-[3px] border-presentation-ink py-3 first:border-t-0 first:pt-0"
                  >
                    <code className="w-fit bg-presentation-ink px-2 py-1 font-mono text-lg font-black text-presentation-surface">
                      {command}
                    </code>
                    <p className="mt-2 text-sm font-bold leading-snug">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </BrutalCard>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3 border-[3px] border-presentation-ink bg-presentation-accent px-4 py-3 font-mono text-xs font-black uppercase tracking-[0.1em] text-presentation-surface shadow-[4px_4px_0_var(--presentation-ink)]">
        <FolderTree
          className="size-5 shrink-0"
          strokeWidth={3}
          aria-hidden="true"
        />
        <span>pwd → ls → cd → mkdir → touch</span>
        <span className="ml-auto hidden sm:inline">
          Эхлээд хар · Дараа нь хөдөл · Эцэст нь бүтээ
        </span>
      </div>
    </Slide>
  );
}
