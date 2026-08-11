import { BrutalCard, Eyebrow, Slide } from "@/components/presentation";
import { CalendarDays } from "lucide-react";

export default function Slide02() {
  return (
    <Slide label="Интернет" number="2" totalSlides={2} title="Түүх">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow className="bg-[#6569DF]">
            <CalendarDays className="size-4" aria-hidden="true" />
            Интернетийн үүсэл
          </Eyebrow>
        </div>
        <div className="border-[3px] border-black bg-[#6569DF] px-4 py-2 font-mono text-xs font-black text-white shadow-[4px_4px_0_#111]">
          Хөгжил
        </div>
      </div>

      <div className="grid flex-1 gap-3 md:grid-cols-5">
        {[
          {
            day: "Нээлт",
            date: "1960s",
            focus:
              "1969 оны 10-р сарын 29-нд Калифорнийн их сургуулийн Лос Анжелес дахь салбар (UCLA) болон Stanford Research Institute-ийн компьютеруудыг хооронд нь холбож, ARPANET-ийн анхны хоёр зангилааг байгуулсан.",
            event: "J. C. R. Licklider нэгдсэн, бүх нийтийн сүлжээ байгуулах санааг дэвшүүлсэн",
            time: "ARPANET",
            color: "bg-[#EFEEE8]",
          },
          {
            day: "internetworking",
            date: "1970s",
            focus:
              "Олон улсын болон бусад сүлжээнүүдтэй холбогдохын хэрээр, өөр өөр сүлжээг нэг систем болгон холбох TCP/IP зэрэг протоколууд хөгжсөн",
            event: "ARPANET ердөө 4 компьютер биш, 15 өөр газар холбогдсон сүлжээ болсон.",
            time: "Merit Network, CYCLADES, British academic networks",
            color: "bg-[#EFEEE8]",
          },
          {
            day: "TCP/IP",
            date: "1980s",
            focus:
              "ISP гарч ирж Internet зөвхөн эрдэмтэд, цэргийн зориулалттай байхаа больсон ISP = Internet Service Provider Unitel, Univision, Mobicom, Skymedia",
            event:
              "NSFNet жижиг сүлжээг дэлхий даяарх “сүлжээнүүдийн сүлжээ” болгон хөгжүүлэхэд гол үүрэг гүйцэтгэсэн.",
            time: "Internet тив хоорондын болсон",
            color: "bg-[#EFEEE8]",
          },
          {
            day: "WWW",
            date: "1990s",
            focus:
              "Internet = компьютеруудыг хооронд нь холбосон дэлхийн сүлжээ, World Wide Web = Internet дээр ажилладаг веб хуудасны систем",
            event:
              "Интернэт судалгаа, цэргийн сүлжээ байхаа больж, арилжааны болон олон нийтийн хэрэглээний систем болсон",
            time: "Tim Berners-Lee",
            color: "bg-[#EFEEE8]",
          },
          {
            day: "21st century",
            date: "2000s",
            focus:
              "1993 онд харилцаа холбоогоор дамжиж байсан мэдээллийн маш бага хэсэг нь Internet ашиглаж байсан. Гэтэл ердөө 14 жилийн дараа бараг бүх дижитал харилцаа холбооны мэдээлэл Internet технологи ашиглан дамждаг болсон. 1993 → 1%, 2000 → 51%, 2007 → 97%+",
            event:
              "Хүмүүсийн харилцаа, мэдээлэл, бизнес, энтертайнмент болон өдөр тутмын амьдралын үндсэн платформ болсон",
            time: "Дэлхийн мэдээлэл Internet рүү шилжсэн",
            color: "bg-[#EFEEE8]",
          },
        ].map((item) => (
          <BrutalCard key={item.day} shadow="sm" className={`flex flex-col p-3 ${item.color} `}>
            <div className="flex items-start justify-between border-b-[3px] border-black pb-3 font-mono font-black">
              <span>{item.day}</span>
              <span className="text-4xl leading-none">{item.date}</span>
            </div>
            <p className="mt-4 font-mono  font-black">{item.focus}</p>
            <div className="mt-auto h-2/5 text-center flex items-center flex-col justify-center border-[3px] border-black bg-[#0A1E41] text-[#EFEEE8] p-3">
              <p className="text-lg font-black leading-tight">{item.event}</p>
              <p className="mt-4 font-mono  font-black">{item.time}</p>
            </div>
          </BrutalCard>
        ))}
      </div>
    </Slide>
  );
}
