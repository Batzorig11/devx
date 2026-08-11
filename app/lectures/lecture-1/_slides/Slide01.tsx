import { BrutalCard, Slide } from "@/components/presentation";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Slide01() {
  return (
    <Slide label="label 1" number="1" totalSlides={2} title="Интернет гэж юу вэ?">
      <div className="grid flex-1 gap-5 lg:grid-cols-[1fr_0.7fr]">
        <BrutalCard className="flex min-h-0 flex-col justify-center p-5">
          <div>
            <h3 className="text-3xl font-black text-center leading-tight md:text-4xl">
              Интернет гэдэг нь дэлхий даяарх компьютер, төхөөрөмжүүдийг хооронд нь холбодог асар том сүлжээ юм.
            </h3>
          </div>
        </BrutalCard>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <BrutalCard className="bg-[#EFEEE8] flex justify-center relative">
            {/*<Flame className="size-9" strokeWidth={3} />*/}
            <Link
              href="https://upload.wikimedia.org/wikipedia/commons/3/3f/Internet_map_1024_-_transparent%2C_inverted.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
              target="_blank"
            >
              <Image alt="network" src="/network.png" fill className="object-contain" />
            </Link>
          </BrutalCard>
          <BrutalCard
            shadow="none"
            className="p-4 bg-[#6569DF] py-8 px-8 flex flex-col justify-between shadow-[7px_7px_0_black]"
          >
            <Globe className="size-9 text-white" strokeWidth={3} />
            <p className="text-4xl font-black text-white">Inter + Network</p>
            <p className="font-mono mt-2 font-black uppercase text-white">
              inter - “хооронд, дунд”; network - “сүлжээний алба” буюу товчоор “сүлжээ”
            </p>
          </BrutalCard>
        </div>
      </div>
    </Slide>
  );
}
