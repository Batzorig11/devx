import { AvatarBadge, BrutalCard, Eyebrow, Slide } from "@/components/presentation";
import { ArrowRight, GlobeCheck, MessageSquareQuote, UserRound } from "lucide-react";

export default function Slide03() {
  return (
    <Slide number="15" label="Интернет" title="World Wide Web" totalSlides={20}>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow className="bg-[#6569DF]">
            <UserRound className="size-4" aria-hidden="true" />
            Internet <ArrowRight /> WWW
          </Eyebrow>
        </div>
        <p className="max-w-sm font-mono text-xs font-black uppercase">Website · Webpage · Web Browser · Web Server</p>
      </div>

      <div className="grid flex-1 gap-4 lg:grid-cols-[0.72fr_1.28fr]">
        <BrutalCard className="flex flex-col justify-between p-5">
          <div>
            <div className="flex items-start justify-between">
              <AvatarBadge size="lg" className="bg-[#FFFDF5] shadow-[5px_5px_0_#111]">
                <GlobeCheck className="size-18 fill-white" />
              </AvatarBadge>
              {/*<div className="flex items-center gap-1 border-[3px] border-black bg-[#6569DF] px-2 py-1 font-mono text-xs font-black">
                <Star className="size-4 fill-black" /> 4.8
              </div>*/}
            </div>
            <h3 className="mt-5 text-4xl font-black uppercase">WORLD WIDE WEB</h3>
            <p className="font-mono text-xs font-black uppercase">TIM BERNERS-LEE · 1989 · CERN</p>
          </div>

          <div className="my-5 border-y-[3px] border-black py-4">
            <MessageSquareQuote className="size-7" strokeWidth={3} />
            <p className="mt-3 text-2xl font-black leading-tight">
              Интернэт дээрх web page-үүдийг hyperlink-ээр холбож, browser-аар үзэх систем.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 font-mono text-[10px] font-black">
            {["HTML", "HTTP", "URL", "BROWSER"].map((tag) => (
              <span key={tag} className="border-[3px] border-black text-white text-xl bg-[#0A1E41] px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
        </BrutalCard>

        <div className="grid grid-cols-2 gap-3">
          {[
            [
              "Website",
              "Нэг domain нэрийн дор байрлах олон web page-ийн цуглуулга.",
              "bg-[#FFFDF5]",
              "google.com, youtube.com, wikipedia.org",
            ],
            [
              "Webpage",
              "Website доторх нэг тусдаа хуудас.",
              "bg-[#FFFDF5]",
              "youtube.com/feed/trending, wikipedia.org/wiki/Internet",
            ],
            [
              "Web Browser",
              "Website болон webpage-ийг нээж харуулдаг программ.",
              "bg-[#FFFDF5]",
              "Google Chrome, Firefox, Safari, Microsoft Edge",
            ],
            [
              "Web Server",
              "Website-ийн файл, мэдээллийг хадгалж хэрэглэгчид дамжуулдаг сервер.",
              "bg-[#FFFDF5]",
              "Nginx, Apache, Node.js server",
            ],
          ].map(([label, copy, color, examples]) => (
            <BrutalCard key={label} shadow="sm" className={`flex flex-col justify-between p-4 ${color} `}>
              <p className="font-mono text-xl font-black">{label}</p>
              <p className="mt-8 text-xl font-black leading-tight md:text-3xl">{copy}</p>
              <span className="mt-4 font-mono font-black">{examples}</span>
            </BrutalCard>
          ))}
        </div>
      </div>
    </Slide>
  );
}
