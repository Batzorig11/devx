import {
  ArrowUpRight,
  BarChart3,
  Bell,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  Code2,
  Flame,
  FolderOpen,
  GitCompareArrows,
  Globe2,
  Lightbulb,
  Mail,
  MessageSquareQuote,
  MousePointer2,
  Network,
  Palette,
  Play,
  Rocket,
  Search,
  Send,
  Sparkles,
  Star,
  Target,
  Terminal,
  ThumbsUp,
  TrendingUp,
  UserRound,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";

import {
  AvatarBadge,
  AvatarStack,
  BrowserFrame,
  BrutalButton,
  BrutalCard,
  BrutalTag,
  Callout,
  Eyebrow,
  MetricCard,
  ProgressBar,
  Slide,
  SlideDeck,
  StatusDot,
  TicketCoverSlide,
} from "../../components/presentation";

const totalSlides = 22;

export default function SlideDemoPage() {
  return (
    <main className="relative min-h-dvh bg-black font-sans selection:bg-[#ff5c5c] selection:text-black">
      <SlideDeck>
        <TicketCoverSlide
          slideNumber="01"
          totalSlides={totalSlides}
          lectureNumber={0}
          label="Cover option A · Ticket"
          title="Веб хэрхэн"
          highlightedTitle="ажилладаг вэ?"
          subtitle="Нэг click-ийн цаадах аяллыг мөрдөнө."
        />

        <Slide
          number="02"
          label="Cover option B · Boot"
          totalSlides={totalSlides}
          tone="ink"
        >
          <div className="pointer-events-none absolute -right-6 top-20 hidden font-mono text-[22rem] font-black leading-none text-transparent [-webkit-text-stroke:3px_#5b8cff] opacity-35 lg:block">
            00
          </div>

          <div className="relative z-10 grid flex-1 items-center gap-7 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Eyebrow className="bg-[#5de2a5] text-black">
                <Terminal className="size-4" aria-hidden="true" />
                System boot · Lecture 00
              </Eyebrow>
              <h1 className="mt-7 max-w-4xl text-[clamp(4rem,8.5vw,8rem)] font-black uppercase leading-[0.79] tracking-[-0.08em]">
                Вебийн
                <span className="block text-[#ffe75c]">цаана юу</span>
                <span className="block text-[#111] [-webkit-text-stroke:3px_#fffdf5]">болдог вэ?</span>
              </h1>
              <p className="mt-6 max-w-xl font-mono text-sm font-black text-[#ffe75c] md:text-base">
                &gt; НЭГ CLICK · НЭГ REQUEST · НЭГ RESPONSE
              </p>
            </div>

            <BrowserFrame
              title="lecture-00.boot"
              shadow="none"
              className="border-[#fffdf5] bg-[#1b1b1b] shadow-[9px_9px_0_#5b8cff]"
              toolbarClassName="border-[#fffdf5] bg-[#5b8cff] text-black"
              bodyClassName="bg-[#111] p-5 text-[#fffdf5]"
            >
              <div className="space-y-4 font-mono text-xs font-bold md:text-sm">
                <p><span className="text-[#5de2a5]">[01]</span> loading curiosity...</p>
                <p><span className="text-[#ffe75c]">[02]</span> connecting browser...</p>
                <p><span className="text-[#ff5c5c]">[03]</span> finding the server...</p>
                <p><span className="text-[#5b8cff]">[04]</span> decoding the web...</p>
                <div className="border-y border-zinc-700 py-4">
                  <p className="text-zinc-400">MISSION</p>
                  <p className="mt-2 text-xl font-black text-[#fffdf5] md:text-2xl">
                    “Ид шид” гэдэг хариултыг бодит тайлбараар солино.
                  </p>
                </div>
                <div className="flex items-center justify-between bg-[#5de2a5] px-3 py-2 text-black">
                  <span>STATUS: READY</span>
                  <span className="inline-block size-3 animate-pulse rounded-full bg-black motion-reduce:animate-none" />
                </div>
              </div>
            </BrowserFrame>
          </div>
        </Slide>

        <Slide
          number="03"
          label="Cover option C · Course file"
          totalSlides={totalSlides}
        >
          <div className="grid flex-1 items-center px-0 md:px-8">
            <div className="relative mx-auto w-full max-w-6xl pt-8">
              <div className="absolute left-0 top-0 flex items-center gap-2 border-[3px] border-b-0 border-black bg-[#ffe75c] px-5 py-2 font-mono text-xs font-black">
                <FolderOpen className="size-5" strokeWidth={3} />
                DEV-X COURSE FILE
              </div>
              <BrutalCard className="relative grid min-h-[29rem] overflow-hidden bg-[#ffe75c] p-5 md:p-7 lg:grid-cols-[0.7fr_1.3fr] lg:overflow-visible">
                <div className="flex flex-col justify-between border-b-[3px] border-black pb-5 lg:border-b-0 lg:border-r-[3px] lg:pb-0 lg:pr-7">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs font-black">FILE NO.</span>
                    <BrutalTag className="bg-[#fffdf5]">OPEN</BrutalTag>
                  </div>
                  <p className="text-[clamp(7rem,16vw,13rem)] font-black leading-[0.7] tracking-[-0.12em] text-[#5b8cff] [-webkit-text-stroke:3px_#111]">
                    00
                  </p>
                  <p className="font-mono text-xs font-black">UPDATED · TODAY</p>
                </div>

                <div className="flex flex-col justify-between pt-6 lg:pl-7 lg:pt-0">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-black pb-3 font-mono text-xs font-black">
                    <span>SUBJECT / INTERNET</span>
                    <span>90 MIN</span>
                  </div>
                  <div className="my-6">
                    <Eyebrow className="bg-[#ff5c5c]">
                      <Sparkles className="size-4" aria-hidden="true" />
                      Today’s case
                    </Eyebrow>
                    <h1 className="mt-5 max-w-3xl break-words text-[2.85rem] font-black uppercase leading-[0.84] tracking-[-0.065em] sm:text-[clamp(3.5rem,7vw,6.8rem)] sm:leading-[0.82] sm:tracking-[-0.075em]">
                      Веб хэрхэн
                      <span className="block">ажилладаг вэ?</span>
                    </h1>
                    <p className="mt-4 text-xl font-bold md:text-2xl">Нэг click-ийн цаадах аялал.</p>
                  </div>
                  <div className="grid grid-cols-4 gap-2 font-mono text-[10px] font-black sm:text-xs">
                    {["BROWSER", "DNS", "HTTP", "SERVER"].map((topic, index) => (
                      <span key={topic} className={`border-[3px] border-black p-2 text-center ${index === 0 ? "bg-[#5b8cff]" : "bg-[#fffdf5]"}`}>
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute -right-3 top-[24%] hidden translate-x-full flex-col gap-2 lg:flex">
                  {["ASK", "TRACE", "BUILD"].map((tab, index) => (
                    <span key={tab} className={`border border-l-0 border-black px-3 py-3 font-mono text-[10px] font-black [writing-mode:vertical-rl] ${index === 0 ? "bg-[#ff5c5c]" : index === 1 ? "bg-[#5b8cff]" : "bg-[#5de2a5]"}`}>
                      {tab}
                    </span>
                  ))}
                </div>
              </BrutalCard>
            </div>
          </div>
        </Slide>

        <Slide number="04" label="Design system" totalSlides={totalSlides}>
          <div className="grid flex-1 gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <Eyebrow>
                <Palette className="size-4" aria-hidden="true" />
                Visual language
              </Eyebrow>
              <h2 className="mt-5 text-[clamp(3rem,7vw,6.5rem)] font-black uppercase leading-[0.88] tracking-[-0.07em]">
                5 color.
                <br />1 attitude.
              </h2>
              <p className="mt-5 max-w-lg text-lg font-bold md:text-xl">
                Тод өнгө бүр үүрэгтэй: анхаарал, амжилт, хөдөлгөөн, суурь,
                контраст.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                ["INK", "#111111", "bg-[#111111] text-white"],
                ["PAPER", "#FFFDF5", "bg-[#fffdf5]"],
                ["ELECTRIC", "#5B8CFF", "bg-[#5b8cff]"],
                ["CORAL", "#FF5C5C", "bg-[#ff5c5c]"],
                ["ACID", "#FFE75C", "bg-[#ffe75c]"],
                ["MINT", "#5DE2A5", "bg-[#5de2a5]"],
              ].map(([name, hex, color], index) => (
                <BrutalCard
                  key={name}
                  shadow="sm"
                  className={`min-h-36 p-4 ${color} ${index % 2 ? "translate-y-3" : ""}`}
                >
                  <p className="font-mono text-xs font-black">{String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-10 text-xl font-black">{name}</p>
                  <p className="font-mono text-xs font-bold">{hex}</p>
                </BrutalCard>
              ))}
            </div>
          </div>
        </Slide>

        <Slide number="05" label="Component wall" totalSlides={totalSlides}>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow className="bg-[#ff5c5c]">UI specimen</Eyebrow>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.05em] md:text-7xl">
                Small parts. Big voice.
              </h2>
            </div>
            <p className="max-w-sm font-mono text-sm font-bold">
              Buttons · Inputs · Status · Avatars · Progress · Toggle
            </p>
          </div>

          <div className="grid flex-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <BrutalCard className="p-4">
              <p className="font-mono text-xs font-black uppercase">Actions</p>
              <div className="mt-5 flex flex-col gap-3">
                <BrutalButton className="justify-between">
                  Start building <ArrowUpRight className="size-5" aria-hidden="true" />
                </BrutalButton>
                <BrutalButton className="bg-[#fffdf5] shadow-none">
                  View notes
                </BrutalButton>
                <div className="flex items-center gap-2 font-mono text-xs font-black">
                  <BrutalTag>LIVE</BrutalTag>
                  24 people watching
                </div>
              </div>
            </BrutalCard>

            <BrutalCard className="p-4">
              <p className="font-mono text-xs font-black uppercase">Form controls</p>
              <div className="mt-5 space-y-3">
                <div className="border-[3px] border-black bg-white px-3 py-3 font-mono text-sm text-zinc-500">type your idea...</div>
                <div className="flex items-center justify-between border-[3px] border-black bg-[#ff5c5c] px-3 py-2 font-bold">
                  Bold mode
                  <span className="flex h-7 w-12 justify-end border-[3px] border-black bg-[#5de2a5] p-0.5">
                    <span className="size-4 border-2 border-black bg-white" />
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="grid size-7 place-items-center border-[3px] border-black bg-[#5b8cff]"><Check className="size-4" /></span>
                  <span className="grid size-7 place-items-center rounded-full border-[3px] border-black bg-white"><span className="size-2 rounded-full bg-black" /></span>
                  <span className="grid size-7 place-items-center border-[3px] border-black bg-white"><X className="size-4" /></span>
                </div>
              </div>
            </BrutalCard>

            <BrutalCard className="p-4">
              <p className="font-mono text-xs font-black uppercase">People</p>
              <AvatarStack className="mt-5">
                {["Б", "А", "Т", "+8"].map((name, index) => (
                  <AvatarBadge
                    key={name}
                    className={["bg-[#5b8cff]", "bg-[#ff5c5c]", "bg-[#5de2a5]", "bg-[#ffe75c]"][index]}
                  >
                    {name}
                  </AvatarBadge>
                ))}
              </AvatarStack>
              <ProgressBar
                value={84}
                label="Sprint energy"
                className="mt-6 border-[3px] border-black bg-[#5de2a5] p-3"
              />
            </BrutalCard>

            <BrutalCard className="p-4">
              <p className="font-mono text-xs font-black uppercase">Alert stack</p>
              <div className="mt-5 space-y-3 text-sm font-bold">
                <Callout icon={<CheckCircle2 className="size-5" />} className="bg-[#5de2a5]">Idea published.</Callout>
                <Callout icon={<Zap className="size-5" />}>3 decisions waiting.</Callout>
                <div className="flex gap-2 border border-dashed border-black p-3 font-mono text-xs">
                  <span className="font-black">TIP:</span> keep labels short.
                </div>
              </div>
            </BrutalCard>
          </div>
        </Slide>

        <Slide number="06" label="Data story" totalSlides={totalSlides}>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <Eyebrow className="bg-[#5de2a5]">
                <BarChart3 className="size-4" aria-hidden="true" />
                Live dashboard
              </Eyebrow>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.05em] md:text-7xl">Numbers need a punchline.</h2>
            </div>
          </div>

          <div className="grid flex-1 gap-4 lg:grid-cols-[1.35fr_0.65fr]">
            <BrutalCard className="flex min-h-0 flex-col p-4 md:p-6">
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["48K", "VISITS", "+24%", "bg-[#5b8cff]"],
                  ["6.8%", "CONVERT", "+1.2", "bg-[#5de2a5]"],
                  ["09m", "AVG. TIME", "BEST", "bg-[#ffe75c]"],
                ].map(([value, label, delta, color]) => (
                  <MetricCard key={label} value={value} label={label} meta={delta} className={color} />
                ))}
              </div>

              <div className="mt-4 flex min-h-0 flex-1 items-end gap-2 border-[3px] border-black bg-white p-4 md:gap-4">
                {[35, 58, 44, 72, 64, 91, 78, 100].map((height, index) => (
                  <div key={height} className="flex h-full flex-1 flex-col justify-end gap-2">
                    <div
                      className={`w-full border-[3px] border-black ${index === 7 ? "bg-[#ff5c5c]" : index % 2 ? "bg-[#5b8cff]" : "bg-[#ffe75c]"}`}
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-center font-mono text-[9px] font-black">D{index + 1}</span>
                  </div>
                ))}
              </div>
            </BrutalCard>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <BrutalCard className="grid place-items-center p-4">
                <div className="grid size-40 place-items-center rounded-full border-[3px] border-black bg-[conic-gradient(#5de2a5_0_68%,#ffe75c_68%_88%,#5b8cff_88%)] shadow-[5px_5px_0_#111]">
                  <div className="grid size-24 place-items-center rounded-full border-[3px] border-black bg-[#fffdf5] text-center">
                    <span className="text-3xl font-black leading-none">68%</span>
                  </div>
                </div>
                <p className="mt-4 font-mono text-xs font-black uppercase">People reached the “aha!” moment</p>
              </BrutalCard>
              <div className="border-[3px] border-black bg-black p-4 text-[#fffdf5] shadow-[7px_7px_0_#ffe75c]">
                <p className="font-mono text-xs font-black text-[#ff5c5c]">INSIGHT_01</p>
                <p className="mt-3 text-2xl font-black leading-tight">Peak нь launch өдөр биш, demo хийсэн өдөр иржээ.</p>
              </div>
            </div>
          </div>
        </Slide>

        <Slide number="07" label="Process" totalSlides={totalSlides}>
          <div className="grid flex-1 gap-6 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">
            <div>
              <Eyebrow className="bg-[#ffe75c]">
                <Rocket className="size-4" aria-hidden="true" />
                5-day sprint
              </Eyebrow>
              <h2 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">Roadmap биш.<br />Relay race.</h2>
              <p className="mt-5 max-w-md text-lg font-bold">Өдөр бүр нэг тодорхой output дараагийн өдрийн input болно.</p>
            </div>

            <div className="relative grid gap-3 md:grid-cols-5">
              <div className="absolute left-8 right-8 top-1/2 hidden h-[5px] -translate-y-1/2 bg-black md:block" />
              {[
                ["MON", "ASK", "Асуудлаа нэг өгүүлбэр болго", "bg-[#fffdf5]"],
                ["TUE", "SKETCH", "8 муу санаа хурдан гарга", "bg-[#ffe75c]"],
                ["WED", "CHOOSE", "Нэг эрсдэлтэй санааг сонго", "bg-[#5b8cff]"],
                ["THU", "BUILD", "Fake биш, үнэмшилтэй demo", "bg-[#ff5c5c]"],
                ["FRI", "LEARN", "5 хүнээр туршиж шийд", "bg-[#fffdf5]"],
              ].map(([day, action, text, color], index) => (
                <BrutalCard key={day} shadow="sm" className={`relative z-10 p-3 ${color} ${index % 2 ? "md:translate-y-10" : "md:-translate-y-10"}`}>
                  <div className="flex items-center justify-between font-mono text-xs font-black">
                    <span>{day}</span><span>{index + 1}</span>
                  </div>
                  <div className="my-5 grid size-12 place-items-center rounded-full border-[3px] border-black bg-black text-[#fffdf5] text-lg font-black">{action.slice(0, 1)}</div>
                  <p className="text-xl font-black">{action}</p>
                  <p className="mt-2 text-sm font-bold leading-tight">{text}</p>
                </BrutalCard>
              ))}
            </div>
          </div>
        </Slide>

        <Slide number="08" label="Bento map" totalSlides={totalSlides}>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow className="bg-[#fffdf5]">Feature architecture</Eyebrow>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.05em] md:text-7xl">Show the whole system.</h2>
            </div>
            <div className="border-[3px] border-black bg-[#ffe75c] px-4 py-2 font-mono text-xs font-black shadow-[4px_4px_0_#111]">MVP ≠ SMALL VISION</div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2">
            <BrutalCard className="col-span-2 flex flex-col justify-between p-5 md:row-span-2">
              <div className="flex items-start justify-between">
                <Target className="size-10" strokeWidth={3} />
                <span className="border-[3px] border-black bg-[#ff5c5c] px-2 py-1 font-mono text-xs font-black">CORE</span>
              </div>
              <div>
                <p className="text-4xl font-black uppercase md:text-6xl">One shared truth.</p>
                <p className="mt-3 max-w-lg text-lg font-bold">Багийн санаа, шийдвэр, дараагийн алхам нэг canvas дээр амьдарна.</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs font-black">
                {['REAL-TIME', 'VERSIONED', 'SEARCHABLE'].map((tag) => <span key={tag} className="border-[3px] border-black bg-[#5de2a5] px-2 py-1">{tag}</span>)}
              </div>
            </BrutalCard>
            <BrutalCard shadow="sm" className="bg-[#ffe75c] p-4">
              <Lightbulb className="size-8" strokeWidth={3} />
              <p className="mt-5 text-2xl font-black uppercase">Capture</p>
              <p className="text-sm font-bold">Idea алга болохоос өмнө.</p>
            </BrutalCard>
            <BrutalCard shadow="sm" className="bg-[#ff5c5c] p-4">
              <Users className="size-8" strokeWidth={3} />
              <p className="mt-5 text-2xl font-black uppercase">Align</p>
              <p className="text-sm font-bold">Decision бүр owner-той.</p>
            </BrutalCard>
            <BrutalCard shadow="sm" className="bg-[#5de2a5] p-4">
              <Play className="size-8" strokeWidth={3} />
              <p className="mt-5 text-2xl font-black uppercase">Test</p>
              <p className="text-sm font-bold">Ярихаас өмнө үзүүл.</p>
            </BrutalCard>
            <BrutalCard shadow="none" className="bg-black p-4 text-[#fffdf5] shadow-[5px_5px_0_#ffe75c]">
              <Globe2 className="size-8 text-[#5de2a5]" strokeWidth={3} />
              <p className="mt-5 text-2xl font-black uppercase">Ship</p>
              <p className="text-sm font-bold">Perfect биш, public.</p>
            </BrutalCard>
          </div>
        </Slide>

        <Slide
          number="09"
          label="Technical story"
          totalSlides={totalSlides}
          tone="ink"
        >
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow className="bg-[#5de2a5] text-black">
                <Code2 className="size-4" aria-hidden="true" />
                Build log
              </Eyebrow>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.05em] md:text-7xl">Code can tell a story.</h2>
            </div>
            <p className="max-w-sm font-mono text-xs font-bold text-[#5de2a5]">STATUS: ALL SYSTEMS LOUD</p>
          </div>

          <div className="grid flex-1 gap-4 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="border-[3px] border-[#fffdf5] bg-[#1c1c1c] shadow-[8px_8px_0_#5b8cff]">
              <div className="flex items-center gap-2 border-b-[3px] border-[#fffdf5] bg-[#5b8cff] px-4 py-3 text-black">
                <StatusDot className="bg-[#ff5c5c]" /><StatusDot className="bg-[#ffe75c]" /><StatusDot className="bg-[#5de2a5]" />
                <span className="ml-3 font-mono text-xs font-black">launch.tsx</span>
              </div>
              <pre className="overflow-hidden p-5 font-mono text-xs font-bold leading-loose sm:text-sm md:text-base">
                <code>
                  <span className="text-[#5b8cff]">const</span> idea = <span className="text-[#ffe75c]">{`{`}</span>{"\n"}
                  {"  "}<span className="text-[#5de2a5]">problem</span>: <span className="text-[#5de2a5]">&quot;too much talking&quot;</span>,{"\n"}
                  {"  "}<span className="text-[#5de2a5]">prototype</span>: <span className="text-[#5de2a5]">true</span>,{"\n"}
                  {"  "}<span className="text-[#5de2a5]">deadline</span>: <span className="text-[#5de2a5]">&quot;Friday&quot;</span>,{"\n"}
                  <span className="text-[#ffe75c]">{`}`}</span>;{"\n\n"}
                  <span className="text-[#5b8cff]">await</span> ship(idea); <span className="text-zinc-500">{"// no meeting"}</span>
                </code>
              </pre>
            </div>

            <div className="flex flex-col border-[3px] border-[#fffdf5] bg-[#fffdf5] text-black shadow-[8px_8px_0_#ff5c5c]">
              <div className="flex items-center gap-2 border-b-[3px] border-black bg-[#ffe75c] px-4 py-3 font-mono text-xs font-black">
                <Terminal className="size-4" /> TERMINAL
              </div>
              <div className="flex-1 space-y-4 bg-black p-5 font-mono text-xs font-bold text-[#fffdf5] md:text-sm">
                <p><span className="text-[#ffe75c]">➜</span> npm run brave</p>
                <p className="text-zinc-400">checking assumptions...</p>
                <p><span className="bg-[#5de2a5] px-1 text-black">PASS</span> problem is real</p>
                <p><span className="bg-[#5de2a5] px-1 text-black">PASS</span> demo is clear</p>
                <p><span className="bg-[#ff5c5c] px-1 text-black">FAIL</span> logo is 2px off</p>
                <p className="border-t border-zinc-700 pt-4 text-[#5de2a5]">Ship anyway? Y</p>
              </div>
            </div>
          </div>
        </Slide>

        <Slide number="10" label="Kanban" totalSlides={totalSlides}>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow className="bg-[#ff5c5c]">Work in motion</Eyebrow>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.05em] md:text-7xl">Make progress visible.</h2>
            </div>
            <div className="flex gap-2 font-mono text-xs font-black">
              <span className="border-[3px] border-black bg-[#5de2a5] px-3 py-2">8 DONE</span>
              <span className="border-[3px] border-black bg-[#ffe75c] px-3 py-2">3 MOVING</span>
            </div>
          </div>

          <div className="grid flex-1 gap-4 lg:grid-cols-3">
            {[
              {
                title: "BACKLOG",
                count: "04",
                color: "bg-[#ffe75c]",
                cards: [
                  ["Landing copy", "WORDS", "Б"],
                  ["Empty state", "UX", "А"],
                ],
              },
              {
                title: "IN MOTION",
                count: "03",
                color: "bg-[#5b8cff]",
                cards: [
                  ["Prototype flow", "HIGH", "Т"],
                  ["Demo script", "TODAY", "Н"],
                ],
              },
              {
                title: "SHIPPED",
                count: "08",
                color: "bg-[#5de2a5]",
                cards: [
                  ["User interviews", "DONE", "Г"],
                  ["Core metrics", "DONE", "О"],
                ],
              },
            ].map((column) => (
              <BrutalCard key={column.title} className={`p-4 ${column.color}`}>
                <div className="flex items-center justify-between border-b-[3px] border-black pb-3 font-mono text-sm font-black">
                  <span>{column.title}</span><span>{column.count}</span>
                </div>
                <div className="mt-4 space-y-3">
                  {column.cards.map(([title, tag, avatar], index) => (
                    <BrutalCard key={title} shadow="sm" className={`${index ? "-rotate-1" : "rotate-1"} p-4`}>
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-xl font-black">{title}</p>
                        <MousePointer2 className="size-5 shrink-0" />
                      </div>
                      <div className="mt-6 flex items-center justify-between">
                        <span className="border-[3px] border-black bg-[#ff5c5c] px-2 py-1 font-mono text-[10px] font-black">{tag}</span>
                        <AvatarBadge size="sm">{avatar}</AvatarBadge>
                      </div>
                    </BrutalCard>
                  ))}
                </div>
              </BrutalCard>
            ))}
          </div>
        </Slide>

        <Slide number="11" label="Decision matrix" totalSlides={totalSlides}>
          <div className="grid flex-1 gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <Eyebrow className="bg-[#5b8cff]">Choose with evidence</Eyebrow>
              <h2 className="mt-5 text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] md:text-7xl">Taste starts.<br />Criteria decides.</h2>
              <p className="mt-5 max-w-lg text-lg font-bold">Гоё харагдах нь эхлэл. Хэрэглэгч ойлгож, баг хийж, бизнес хэмжиж чадах ёстой.</p>
              <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs font-black">
                <span className="border-[3px] border-black bg-[#5de2a5] px-3 py-2">● STRONG</span>
                <span className="border-[3px] border-black bg-[#ff5c5c] px-3 py-2">● RISK</span>
              </div>
            </div>

            <BrutalCard className="overflow-hidden">
              <div className="grid grid-cols-[1.25fr_repeat(3,0.65fr)] border-b-[3px] border-black bg-black font-mono text-xs font-black text-[#fffdf5]">
                <span className="p-3">CONCEPT</span><span className="border-l-[3px] border-black p-3 text-center">CLEAR</span><span className="border-l-[3px] border-black p-3 text-center">FAST</span><span className="border-l-[3px] border-black p-3 text-center">BOLD</span>
              </div>
              {[
                ["A · Safe update", true, true, false, "bg-white"],
                ["B · Guided demo", true, true, true, "bg-[#5de2a5]"],
                ["C · AI everything", false, false, true, "bg-[#ff5c5c]"],
                ["D · New workflow", true, false, true, "bg-[#5b8cff]"],
              ].map(([name, clear, fast, bold, color]) => (
                <div key={String(name)} className={`grid grid-cols-[1.25fr_repeat(3,0.65fr)] border-b-[3px] border-black last:border-b-0 ${color}`}>
                  <span className="p-4 text-lg font-black">{String(name)}</span>
                  {[clear, fast, bold].map((value, index) => (
                    <span key={index} className="grid place-items-center border-l-[3px] border-black p-4">
                      {value ? <Check className="size-7" strokeWidth={4} /> : <X className="size-7" strokeWidth={4} />}
                    </span>
                  ))}
                </div>
              ))}
              <div className="flex items-center justify-between bg-[#ffe75c] p-4 font-black">
                <span>WINNER</span><span className="border-[3px] border-black bg-black px-3 py-1 font-mono text-sm text-[#fffdf5]">B · 3/3</span>
              </div>
            </BrutalCard>
          </div>
        </Slide>

        <Slide number="12" label="Audience pulse" totalSlides={totalSlides}>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow className="bg-[#fffdf5]">Interactive moment</Eyebrow>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.05em] md:text-6xl">Ask the room.</h2>
            </div>
            <p className="font-mono text-xs font-black">POLL · 42 RESPONSES · LIVE</p>
          </div>

          <div className="grid flex-1 gap-5 lg:grid-cols-[1fr_0.7fr]">
            <BrutalCard className="flex min-h-0 flex-col justify-between p-5">
              <div>
                <p className="font-mono text-xs font-black uppercase">Question of the day</p>
                <h3 className="mt-3 text-3xl font-black leading-tight md:text-4xl">Таны дараагийн deck-д хамгийн их дутагдаж байгаа зүйл?</h3>
              </div>
              <div className="mt-6 space-y-3">
                {[
                  ["A", "Тодорхой message", 78, "bg-[#5b8cff]"],
                  ["B", "Илүү сайн visual", 56, "bg-[#5de2a5]"],
                  ["C", "Бага текст", 43, "bg-[#ffe75c]"],
                  ["D", "Зоригтой дизайн", 91, "bg-[#ff5c5c]"],
                ].map(([letter, label, width, color]) => (
                  <div key={String(letter)} className="relative overflow-hidden border-[3px] border-black bg-white">
                    <div className={`absolute inset-y-0 left-0 ${color}`} style={{ width: `${width}%` }} />
                    <div className="relative flex items-center justify-between px-3 py-1.5 font-black">
                      <span><span className="mr-3 font-mono">{letter}</span>{label}</span><span>{width}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </BrutalCard>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <BrutalCard className="bg-[#5b8cff] p-4">
                <Flame className="size-9" strokeWidth={3} />
                <p className="mt-5 text-5xl font-black">91%</p>
                <p className="font-mono text-xs font-black uppercase">wants more courage</p>
              </BrutalCard>
              <BrutalCard shadow="none" className="bg-black p-4 text-[#fffdf5] shadow-[7px_7px_0_#ffe75c]">
                <p className="font-mono text-xs font-black text-[#ffe75c]">ROOM_NOTE</p>
                <p className="mt-3 text-xl font-black leading-tight">“Safe” гэдэг нь үргэлж “clear” гэсэн үг биш.</p>
                <div className="mt-6 flex -space-x-2">
                  {["Э", "С", "М", "+39"].map((name) => <AvatarBadge key={name} size="sm" className="size-9 border-[3px] border-black bg-[#ff5c5c]">{name}</AvatarBadge>)}
                </div>
              </BrutalCard>
            </div>
          </div>
        </Slide>

        <Slide number="13" label="Pricing story" totalSlides={totalSlides}>
          <div className="mb-3 text-center">
            <Eyebrow className="mx-auto bg-[#ffe75c]">Simple choices</Eyebrow>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.05em] md:text-6xl">Price the outcome.</h2>
            <p className="mt-2 font-bold">Feature list биш — хэрэглэгчийн урагшлах хурдыг зар.</p>
          </div>

          <div className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-4 md:grid-cols-3">
            {[
              ["START", "$0", "Нэг санаагаа test хий", ["3 boards", "Core components", "Public share"], "bg-[#fffdf5]", ""],
              ["MAKE", "$19", "Багаараа хурдан ship хий", ["Unlimited boards", "Live workshop", "Decision log"], "bg-[#5b8cff]", "-rotate-1 md:-translate-y-4"],
              ["SCALE", "$49", "Системээ олон багт түгээ", ["Custom library", "Team analytics", "Priority support"], "bg-[#ff5c5c]", "rotate-1"],
            ].map(([name, price, desc, features, color, transform]) => (
              <BrutalCard key={String(name)} className={`p-4 shadow-[8px_8px_0_#111] ${color} ${transform}`}>
                <div className="flex items-center justify-between">
                  <p className="font-mono text-sm font-black">{String(name)}</p>
                  {name === "MAKE" && <span className="border-[3px] border-black bg-[#ffe75c] px-2 py-1 font-mono text-[10px] font-black">MOST BRAVE</span>}
                </div>
                <p className="mt-4 text-5xl font-black tracking-[-0.08em]">{String(price)}<span className="text-base tracking-normal">/mo</span></p>
                <p className="mt-2 min-h-10 text-base font-bold">{String(desc)}</p>
                <ul className="mt-4 space-y-2 border-t-[3px] border-black pt-3 text-sm font-bold">
                  {(features as string[]).map((feature) => <li key={feature} className="flex items-center gap-2"><span className="grid size-5 place-items-center border-[3px] border-black bg-[#5de2a5]"><Check className="size-3" strokeWidth={4} /></span>{feature}</li>)}
                </ul>
                <div className="mt-4 flex items-center justify-between border-[3px] border-black bg-black px-4 py-3 font-black text-[#fffdf5]">
                  Choose {String(name).toLowerCase()} <ArrowUpRight className="size-5" />
                </div>
              </BrutalCard>
            ))}
          </div>
        </Slide>

        <Slide number="14" label="Checkpoint / CTA" totalSlides={totalSlides}>
          <div className="absolute -bottom-20 -right-14 size-72 rotate-12 border-[3px] border-black bg-[#5b8cff] shadow-[10px_10px_0_#111]" />
          <div className="absolute -right-2 top-24 hidden rotate-6 border-[3px] border-black bg-[#ff5c5c] px-6 py-3 font-mono text-sm font-black shadow-[5px_5px_0_#111] md:block">NO MORE BORING DECKS</div>

          <div className="grid flex-1 items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Eyebrow className="bg-[#5de2a5]">
                <Zap className="size-4" aria-hidden="true" />
                Your turn
              </Eyebrow>
              <h2 className="mt-6 max-w-5xl text-[clamp(4rem,10vw,9rem)] font-black uppercase leading-[0.8] tracking-[-0.085em]">
                Build one
                <span className="block text-[#fffdf5] [-webkit-text-stroke:3px_#111]">brave</span>
                slide.
              </h2>
            </div>

            <BrutalCard className="relative z-10 rotate-2 p-5 md:p-7">
              <p className="font-mono text-xs font-black uppercase">Before you present:</p>
              <ul className="mt-5 space-y-4 text-lg font-black md:text-xl">
                {[
                  "Нэг гол санаа үлдээ",
                  "Гарчгаа conclusion болго",
                  "Өнгө бүрт нэг үүрэг өг",
                  "Текстээ 30% хас",
                  "Төгсгөлд action асуу",
                ].map((item, index) => (
                  <li key={item} className="flex items-center gap-3 border-b-2 border-black pb-3 last:border-0">
                    <span className={`grid size-8 shrink-0 place-items-center border-[3px] border-black ${index % 2 ? "bg-[#5b8cff]" : "bg-[#5de2a5]"}`}><Check className="size-5" strokeWidth={4} /></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between border-[3px] border-black bg-[#ff5c5c] px-4 py-3 font-black shadow-[4px_4px_0_#111]">
                Open Figma. Start ugly. <ArrowUpRight className="size-6" />
              </div>
            </BrutalCard>
          </div>
        </Slide>

        <Slide number="15" label="Persona / Empathy" totalSlides={totalSlides}>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow className="bg-[#ffe75c]">
                <UserRound className="size-4" aria-hidden="true" />
                Real human, not segment
              </Eyebrow>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.055em] md:text-7xl">
                Design for someone.
              </h2>
            </div>
            <p className="max-w-sm font-mono text-xs font-black uppercase">
              Persona · Goals · Friction · Context
            </p>
          </div>

          <div className="grid flex-1 gap-4 lg:grid-cols-[0.72fr_1.28fr]">
            <BrutalCard className="flex flex-col justify-between p-5">
              <div>
                <div className="flex items-start justify-between">
                  <AvatarBadge size="lg" className="bg-[#ff5c5c] shadow-[5px_5px_0_#111]">Н</AvatarBadge>
                  <div className="flex items-center gap-1 border-[3px] border-black bg-[#ffe75c] px-2 py-1 font-mono text-xs font-black">
                    <Star className="size-4 fill-black" /> 4.8
                  </div>
                </div>
                <h3 className="mt-5 text-4xl font-black uppercase">Номин</h3>
                <p className="font-mono text-xs font-black uppercase">Product designer · 27 · UB</p>
              </div>

              <div className="my-5 border-y-[3px] border-black py-4">
                <MessageSquareQuote className="size-7" strokeWidth={3} />
                <p className="mt-3 text-2xl font-black leading-tight">
                  “Надад илүү feature биш, хурдан шийдвэр хэрэгтэй.”
                </p>
              </div>

              <div className="flex flex-wrap gap-2 font-mono text-[10px] font-black">
                {['FIGMA', 'REMOTE', 'FAST MOVER', 'NO MEETINGS'].map((tag) => (
                  <span key={tag} className="border-[3px] border-black bg-[#5de2a5] px-2 py-1">{tag}</span>
                ))}
              </div>
            </BrutalCard>

            <div className="grid grid-cols-2 gap-3">
              {[
                ["SAYS", "“Энийг өнөөдөр test хийж болох уу?”", "bg-[#ffe75c]"],
                ["THINKS", "Баг нэг зүйл ярьж байгаа эсэхэд эргэлздэг.", "bg-[#fffdf5]"],
                ["DOES", "Prototype хийгээд шууд 3 хүн дээр туршдаг.", "bg-[#5de2a5]"],
                ["FEELS", "Хурдтай үедээ хүчтэй, meeting дээрээ ядардаг.", "bg-[#ff5c5c]"],
              ].map(([label, copy, color], index) => (
                <BrutalCard
                  key={label}
                  shadow="sm"
                  className={`flex flex-col justify-between p-4 ${color} ${index === 1 || index === 2 ? "rotate-1" : "-rotate-1"}`}
                >
                  <p className="font-mono text-xs font-black">{label}</p>
                  <p className="mt-8 text-xl font-black leading-tight md:text-2xl">{copy}</p>
                  <span className="mt-4 font-mono text-[10px] font-black">0{index + 1} / EMPATHY</span>
                </BrutalCard>
              ))}
            </div>
          </div>
        </Slide>

        <Slide number="16" label="Growth funnel" totalSlides={totalSlides}>
          <div className="grid flex-1 gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <Eyebrow className="bg-[#5de2a5]">
                <TrendingUp className="size-4" aria-hidden="true" />
                Conversion story
              </Eyebrow>
              <h2 className="mt-5 text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] md:text-7xl">
                Make the leak visible.
              </h2>
              <p className="mt-5 max-w-lg text-lg font-bold">
                Funnel-ийн зорилго тоо харуулах биш. Хаана, яагаад хүмүүс алга болж байгааг заах.
              </p>
              <div className="mt-6 flex w-fit items-center gap-3 border-[3px] border-black bg-black px-4 py-3 font-mono text-xs font-black text-[#fffdf5] shadow-[5px_5px_0_#ffe75c]">
                BIGGEST LEAK <ChevronRight className="size-4" /> ACTIVATION
              </div>
            </div>

            <BrutalCard className="grid gap-4 p-5 lg:grid-cols-[1fr_0.45fr]">
              <div className="flex flex-col items-center justify-center gap-2">
                {[
                  { label: "VISIT", value: "24,800", percent: "100%", width: 100, color: "bg-[#5b8cff]" },
                  { label: "SIGN UP", value: "18,352", percent: "74%", width: 84, color: "bg-[#ffe75c]" },
                  { label: "FIRST WIN", value: "8,816", percent: "48%", width: 66, color: "bg-[#ff5c5c]" },
                  { label: "PAID", value: "1,940", percent: "22%", width: 46, color: "bg-[#5de2a5]" },
                ].map((step) => (
                  <div
                    key={step.label}
                    className={`flex items-center justify-between border-[3px] border-black px-4 py-3 font-black shadow-[4px_4px_0_#111] ${step.color}`}
                    style={{ width: `${step.width}%` }}
                  >
                    <span className="font-mono text-xs">{step.label}</span>
                    <span>{step.value}</span>
                    <span className="font-mono text-xs">{step.percent}</span>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <div className="border-[3px] border-black bg-[#ffe75c] p-3">
                  <p className="font-mono text-[10px] font-black">DROP-OFF</p>
                  <p className="mt-2 text-3xl font-black">52%</p>
                </div>
                <div className="border-[3px] border-black bg-[#5de2a5] p-3">
                  <p className="font-mono text-[10px] font-black">RECOVERABLE</p>
                  <p className="mt-2 text-3xl font-black">+12%</p>
                </div>
                <div className="border-[3px] border-black bg-black p-3 text-[#fffdf5]">
                  <p className="font-mono text-[10px] font-black text-[#ff5c5c]">NEXT TEST</p>
                  <p className="mt-2 text-lg font-black leading-tight">Shorten onboarding to 2 steps.</p>
                </div>
              </div>
            </BrutalCard>
          </div>
        </Slide>

        <Slide number="17" label="Weekly calendar" totalSlides={totalSlides}>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow className="bg-[#5b8cff]">
                <CalendarDays className="size-4" aria-hidden="true" />
                Editorial rhythm
              </Eyebrow>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.055em] md:text-7xl">
                Time is a layout.
              </h2>
            </div>
            <div className="border-[3px] border-black bg-[#5de2a5] px-4 py-2 font-mono text-xs font-black shadow-[4px_4px_0_#111]">
              WEEK 32 · 5 OUTPUTS
            </div>
          </div>

          <div className="grid flex-1 gap-3 md:grid-cols-5">
            {[
              { day: "MON", date: "10", focus: "DISCOVER", event: "User calls", time: "10:00", color: "bg-[#ffe75c]" },
              { day: "TUE", date: "11", focus: "DEFINE", event: "Problem brief", time: "13:30", color: "bg-[#5b8cff]" },
              { day: "WED", date: "12", focus: "MAKE", event: "Prototype jam", time: "ALL DAY", color: "bg-[#ff5c5c]" },
              { day: "THU", date: "13", focus: "TEST", event: "5 interviews", time: "11:00", color: "bg-[#5de2a5]" },
              { day: "FRI", date: "14", focus: "DECIDE", event: "Ship / kill", time: "16:00", color: "bg-[#fffdf5]" },
            ].map((item, index) => (
              <BrutalCard key={item.day} shadow="sm" className={`flex flex-col p-3 ${item.color} ${index === 2 ? "md:-translate-y-2" : ""}`}>
                <div className="flex items-start justify-between border-b-[3px] border-black pb-3 font-mono font-black">
                  <span className="text-xs">{item.day}</span>
                  <span className="text-4xl leading-none">{item.date}</span>
                </div>
                <p className="mt-4 font-mono text-[10px] font-black">{item.focus}</p>
                <div className="mt-auto border-[3px] border-black bg-[#fffdf5] p-3">
                  <p className="text-lg font-black leading-tight">{item.event}</p>
                  <p className="mt-4 font-mono text-[10px] font-black">{item.time}</p>
                </div>
              </BrutalCard>
            ))}
          </div>
        </Slide>

        <Slide number="18" label="Ownership map" totalSlides={totalSlides}>
          <div className="grid flex-1 gap-7 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">
            <div>
              <Eyebrow className="bg-[#ffe75c]">
                <Users className="size-4" aria-hidden="true" />
                Decision rights
              </Eyebrow>
              <h2 className="mt-5 text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] md:text-7xl">
                Every box needs an owner.
              </h2>
              <p className="mt-5 max-w-md text-lg font-bold">
                Role тодорхой биш бол org chart бол зүгээр л хүмүүсийн wallpaper.
              </p>
            </div>

            <BrutalCard className="relative flex flex-col items-center p-5">
              <div className="relative z-10 flex items-center gap-4 border-[3px] border-black bg-[#ff5c5c] px-5 py-3 shadow-[5px_5px_0_#111]">
                <AvatarBadge className="bg-[#ffe75c] text-lg">Э</AvatarBadge>
                <div>
                  <p className="font-mono text-[10px] font-black">ACCOUNTABLE</p>
                  <p className="text-xl font-black">Энхжин · Product lead</p>
                </div>
              </div>

              <div className="h-8 w-[5px] bg-black" />
              <div className="h-[5px] w-2/3 bg-black" />
              <div className="grid w-full grid-cols-3 gap-3">
                {[
                  ["DESIGN", "Номин", "Prototype + UI", "bg-[#5b8cff]", "Н"],
                  ["ENGINEERING", "Тэмүүжин", "Build + quality", "bg-[#ffe75c]", "Т"],
                  ["GROWTH", "Ану", "Reach + learn", "bg-[#5de2a5]", "А"],
                ].map(([team, owner, job, color, avatar]) => (
                  <BrutalCard key={team} shadow="sm" className={`relative p-3 ${color}`}>
                    <span className="absolute -top-8 left-1/2 h-8 w-[5px] -translate-x-1/2 bg-black" />
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[9px] font-black">{team}</p>
                      <AvatarBadge size="sm" className="bg-[#fffdf5]">{avatar}</AvatarBadge>
                    </div>
                    <p className="mt-5 text-xl font-black">{owner}</p>
                    <p className="mt-1 text-xs font-bold">{job}</p>
                    <div className="mt-5 border-t-2 border-black pt-2 font-mono text-[9px] font-black">OWNS THE DECISION</div>
                  </BrutalCard>
                ))}
              </div>
            </BrutalCard>
          </div>
        </Slide>

        <Slide number="19" label="Feedback inbox" totalSlides={totalSlides}>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow className="bg-[#ff5c5c]">
                <Bell className="size-4" aria-hidden="true" />
                Feedback operations
              </Eyebrow>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.055em] md:text-7xl">
                Feedback needs triage.
              </h2>
            </div>
            <span className="border-[3px] border-black bg-[#5de2a5] px-3 py-2 font-mono text-xs font-black shadow-[4px_4px_0_#111]">12 UNREAD</span>
          </div>

          <div className="grid flex-1 gap-4 lg:grid-cols-[0.82fr_1.18fr]">
            <BrutalCard className="flex min-h-0 flex-col overflow-hidden">
              <div className="flex items-center gap-3 border-b-[3px] border-black bg-[#5b8cff] p-3">
                <Search className="size-5" />
                <span className="font-mono text-xs font-black text-zinc-700">search feedback...</span>
              </div>
              <div className="divide-y-[3px] divide-black">
                {[
                  ["Од", "Export нь ойлгомжгүй байна", "2m", "bg-[#ff5c5c]"],
                  ["Sara", "This shortcut is perfect!", "18m", "bg-[#5de2a5]"],
                  ["Билгүүн", "Mobile дээр товч харагдахгүй", "1h", "bg-[#ffe75c]"],
                  ["Mika", "Can I invite a client?", "3h", "bg-[#fffdf5]"],
                ].map(([name, message, time, color], index) => (
                  <div key={name} className={`flex items-center gap-3 p-3 ${index === 0 ? "bg-[#ff5c5c]/20" : "bg-[#fffdf5]"}`}>
                    <AvatarBadge className={`size-10 ${color}`}>{String(name).slice(0, 1)}</AvatarBadge>
                    <div className="min-w-0 flex-1">
                      <div className="flex justify-between gap-2 font-mono text-[10px] font-black"><span>{name}</span><span>{time}</span></div>
                      <p className="truncate text-sm font-bold">{message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </BrutalCard>

            <BrutalCard shadow="none" className="bg-black p-5 text-[#fffdf5] shadow-[7px_7px_0_#5b8cff]">
              <div className="flex items-center justify-between border-b border-zinc-700 pb-3 font-mono text-xs font-black">
                <span className="flex items-center gap-2"><Mail className="size-4 text-[#5de2a5]" /> FEEDBACK_284</span>
                <span>2 MIN AGO</span>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <AvatarBadge className="border-[#fffdf5] bg-[#ff5c5c] text-xl">О</AvatarBadge>
                <div><p className="text-xl font-black">Од · Team admin</p><p className="font-mono text-[10px] text-zinc-400">PRO PLAN · 8 MONTHS</p></div>
              </div>
              <p className="mt-6 text-2xl font-black leading-tight md:text-3xl">“Export дарсны дараа юу болсон нь мэдэгдэхгүй байна.”</p>
              <div className="mt-6 grid grid-cols-3 gap-2 text-center font-mono text-[10px] font-black text-black">
                <span className="border-[3px] border-[#fffdf5] bg-[#ff5c5c] p-2">SEVERITY 8</span>
                <span className="border-[3px] border-[#fffdf5] bg-[#ffe75c] p-2">FREQ 14×</span>
                <span className="border-[3px] border-[#fffdf5] bg-[#5de2a5] p-2">FIX 2H</span>
              </div>
              <div className="mt-5 flex gap-3">
                <div className="flex flex-1 items-center justify-center gap-2 border-[3px] border-[#fffdf5] bg-[#5de2a5] px-3 py-2 font-black text-black"><ThumbsUp className="size-4" /> Prioritize</div>
                <div className="grid size-11 place-items-center border-[3px] border-[#fffdf5] bg-[#5b8cff] text-black"><Send className="size-5" /></div>
              </div>
            </BrutalCard>
          </div>
        </Slide>

        <Slide number="20" label="Before / After" totalSlides={totalSlides}>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow className="bg-[#5de2a5]">
                <GitCompareArrows className="size-4" aria-hidden="true" />
                Transformation
              </Eyebrow>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.055em] md:text-7xl">
                Compare the state.
              </h2>
            </div>
            <p className="font-mono text-xs font-black">NOT THE DECORATION → THE OUTCOME</p>
          </div>

          <div className="grid flex-1 gap-4 lg:grid-cols-2">
            <BrutalCard className="bg-[#ff5c5c] p-4">
              <div className="mb-3 flex items-center justify-between font-mono text-xs font-black"><span>BEFORE</span><span>14 CLICKS</span></div>
              <div className="border-[3px] border-black bg-[#fffdf5]">
                <div className="flex items-center gap-2 border-b-[3px] border-black p-3"><StatusDot className="bg-[#ff5c5c]" /><StatusDot className="bg-[#ffe75c]" /><StatusDot className="bg-[#5de2a5]" /><span className="ml-auto font-mono text-[10px] font-black">settings_v1</span></div>
                <div className="grid grid-cols-[0.4fr_1fr] gap-3 p-4">
                  <div className="space-y-2 border-r-[3px] border-black pr-3">
                    {["Profile", "Workspace", "Billing", "Security", "Advanced"].map((item) => <div key={item} className="border-2 border-black bg-zinc-200 p-2 font-mono text-[9px] font-black">{item}</div>)}
                  </div>
                  <div className="space-y-3">
                    <p className="text-xl font-black">Export workspace data</p>
                    {[78, 55, 88, 42].map((width) => <div key={width} className="h-6 border-2 border-black bg-zinc-200"><div className="h-full bg-zinc-400" style={{ width: `${width}%` }} /></div>)}
                    <div className="border-[3px] border-black bg-zinc-300 p-2 text-center font-bold">Submit</div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xl font-black">User asks: “Одоо яг юу болсон бэ?”</p>
            </BrutalCard>

            <BrutalCard className="bg-[#5de2a5] p-4">
              <div className="mb-3 flex items-center justify-between font-mono text-xs font-black"><span>AFTER</span><span>3 CLICKS</span></div>
              <div className="border-[3px] border-black bg-[#fffdf5]">
                <div className="flex items-center gap-2 border-b-[3px] border-black bg-[#5b8cff] p-3"><StatusDot className="bg-[#ff5c5c]" /><StatusDot className="bg-[#ffe75c]" /><StatusDot className="bg-[#5de2a5]" /><span className="ml-auto font-mono text-[10px] font-black">export_v2</span></div>
                <div className="p-5">
                  <p className="font-mono text-[10px] font-black">EXPORT WORKSPACE</p>
                  <p className="mt-2 text-3xl font-black">Your file is ready.</p>
                  <p className="mt-2 text-sm font-bold">24 boards · 188 MB · ZIP</p>
                  <div className="mt-5 flex items-center justify-between border-[3px] border-black bg-[#ffe75c] px-4 py-3 font-black shadow-[4px_4px_0_#111]">Download export <ArrowUpRight className="size-5" /></div>
                  <div className="mt-4 flex items-center gap-2 text-sm font-bold"><CheckCircle2 className="size-5 text-[#05a85c]" /> We also emailed the link to you.</div>
                </div>
              </div>
              <p className="mt-4 text-xl font-black">User says: “Done. Next.”</p>
            </BrutalCard>
          </div>
        </Slide>

        <Slide number="21" label="Ecosystem map" totalSlides={totalSlides}>
          <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow className="bg-[#ffe75c]">
                <Network className="size-4" aria-hidden="true" />
                Connected system
              </Eyebrow>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.055em] md:text-7xl">
                Show how parts connect.
              </h2>
            </div>
            <span className="border-[3px] border-black bg-[#ff5c5c] px-3 py-2 font-mono text-xs font-black shadow-[4px_4px_0_#111]">1 CORE · 6 SIGNALS</span>
          </div>

          <BrutalCard className="relative grid flex-1 grid-cols-2 gap-3 overflow-hidden p-4 lg:block">
            <div className="absolute left-1/2 top-1/2 hidden h-[5px] w-[70%] -translate-x-1/2 -translate-y-1/2 rotate-[16deg] bg-black lg:block" />
            <div className="absolute left-1/2 top-1/2 hidden h-[5px] w-[70%] -translate-x-1/2 -translate-y-1/2 -rotate-[16deg] bg-black lg:block" />
            <div className="absolute left-1/2 top-1/2 hidden h-[5px] w-[60%] -translate-x-1/2 -translate-y-1/2 rotate-90 bg-black lg:block" />

            <div className="relative z-20 col-span-2 grid place-items-center border-[3px] border-black bg-black p-5 text-center text-[#fffdf5] shadow-[7px_7px_0_#ff5c5c] lg:absolute lg:left-1/2 lg:top-1/2 lg:size-48 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-full">
              <div><Workflow className="mx-auto size-9 text-[#ffe75c]" strokeWidth={3} /><p className="mt-2 font-mono text-xs font-black">CORE IDEA</p><p className="text-2xl font-black">Shared truth</p></div>
            </div>

            {[
              ["CUSTOMER", "Real pain", "lg:left-[8%] lg:top-[10%]", "bg-[#ff5c5c]"],
              ["PRODUCT", "Clear value", "lg:left-[40%] lg:top-[5%]", "bg-[#ffe75c]"],
              ["CHANNEL", "Right moment", "lg:right-[7%] lg:top-[12%]", "bg-[#5de2a5]"],
              ["DATA", "Fast signal", "lg:left-[8%] lg:bottom-[9%]", "bg-[#5de2a5]"],
              ["TEAM", "One owner", "lg:left-[42%] lg:bottom-[5%]", "bg-[#5b8cff]"],
              ["BUSINESS", "Repeatable", "lg:right-[7%] lg:bottom-[10%]", "bg-[#ff5c5c]"],
            ].map(([label, note, position, color], index) => (
              <BrutalCard key={label} shadow="sm" className={`relative z-10 p-3 lg:absolute lg:w-44 ${position} ${color}`}>
                <div className="flex items-center justify-between font-mono text-[9px] font-black"><span>{label}</span><span>0{index + 1}</span></div>
                <p className="mt-4 text-xl font-black">{note}</p>
              </BrutalCard>
            ))}
          </BrutalCard>
        </Slide>

        <Slide
          number="22"
          label="Finale / Manifesto"
          totalSlides={totalSlides}
          tone="ink"
        >
          <div className="absolute -right-14 top-16 hidden size-56 rotate-12 border-[3px] border-[#fffdf5] bg-[#5b8cff] shadow-[10px_10px_0_#ff5c5c] md:block" />
          <div className="grid flex-1 items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Eyebrow className="bg-[#5de2a5] text-black">
                <Workflow className="size-4" aria-hidden="true" />
                The only rule
              </Eyebrow>
              <h2 className="mt-6 text-[clamp(3.8rem,9vw,8.5rem)] font-black uppercase leading-[0.8] tracking-[-0.085em]">
                Steal the
                <span className="block text-[#ffe75c]">structure.</span>
                <span className="block text-[#111111] [-webkit-text-stroke:3px_#fffdf5]">Break the style.</span>
              </h2>
            </div>

            <div className="relative z-10 space-y-3">
              {[
                ["01", "Start with a claim", "Гарчиг чинь conclusion байг.", "bg-[#5b8cff]"],
                ["02", "Choose one shape", "Chart, list, map — нэгийг сонго.", "bg-[#ff5c5c]"],
                ["03", "End with a move", "Үзэгч дараа нь юу хийхийг хэл.", "bg-[#5de2a5]"],
              ].map(([number, title, copy, color], index) => (
                <div key={number} className={`border-[3px] border-[#fffdf5] p-4 text-black shadow-[6px_6px_0_#fffdf5] ${color} ${index === 1 ? "-translate-x-3" : ""}`}>
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs font-black">{number}</span>
                    <div><p className="text-xl font-black uppercase">{title}</p><p className="mt-1 text-sm font-bold">{copy}</p></div>
                  </div>
                </div>
              ))}
              <div className="mt-5 flex items-center justify-between border-[3px] border-[#fffdf5] bg-[#ffe75c] px-5 py-4 text-xl font-black text-black shadow-[7px_7px_0_#ff5c5c]">
                22 layouts. Zero excuses. <ArrowUpRight className="size-6" />
              </div>
            </div>
          </div>
        </Slide>
      </SlideDeck>
    </main>
  );
}
