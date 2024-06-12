import Image from "next/image";
import male0 from "@/assets/images/characters/male0.png";
import { Progress } from "@/components/ui/progress";

export default function Game() {
  return (
    <section className="flex flex-col relative w-full gap-5 bg-[#7d7373]/30 border border-[#ff3434] p-5 rounded-lg items-center">
      <h1 className="text-[#ff3434] text-3xl font-bold">HORA DA VERDADE!</h1>
      <div className="flex flex-col items-center p-2 bg-[#ff3434] rounded-md">
        <Image
          src={male0}
          className="w-36"
          width={200}
          height={200}
          alt="character1"
        />
        <p className="text-[#111111]">Fire Hands</p>
      </div>
      <div className="flex flex-col gap-3 absolute bg-[#ff3434]/30 p-3 right-2 border border-[#ff3434]">
        <div className="flex flex-col gap-2 p-2 bg-[#111111] text-white">
          <div className="flex w-full items-center justify-center">
            <p className="text-[#ff3434] text-3xl font-bold">Recorde</p>
          </div>
          <p className="text-xl">
            Maior Combo:{" "}
            <span className="text-3xl text-[#ff3434] font-black">30x</span>
          </p>
          <p className="text-xl">
            Maior Pontuação:{" "}
            <span className="text-3xl text-[#ff3434] font-black">750pts</span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 p-2 bg-[#111111] text-white">
          <div className="flex w-full items-center justify-center">
            <p className="text-[#ff3434] text-3xl font-bold">Atual</p>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <span className="text-7xl text-[#ff3434] font-black">30x</span>
            <p className="text-xl">Combo</p>
          </div>
          <p className="text-xl">
            Pontuação{" "}
            <span className="text-3xl text-[#ff3434] font-black">750pts</span>
          </p>
        </div>
      </div>
      <article className="flex w-full gap-3 p-5 flex-wrap items-center justify-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-md bg-[#7d7373] border border-[#ff3434]">
          <p className="text-white text-5xl font-bold">G</p>
        </div>
        <div className="flex items-center justify-center w-16 h-16 rounded-md bg-[#11111] border border-[#ff3434]">
          <p className="text-[#ff3434] text-5xl font-bold">E</p>
        </div>
        <div className="flex items-center justify-center w-16 h-16 rounded-md bg-[#ff3434] border border-white">
          <p className="text-[#111111] text-5xl font-bold">X</p>
        </div>
        <div className="flex items-center justify-center w-16 h-16 rounded-md bg-[#7d7373] border border-[#ff3434]">
          <p className="text-white text-5xl font-bold">Q</p>
        </div>
        <div className="flex items-center justify-center w-16 h-16 rounded-md bg-[#7d7373] border border-[#ff3434]">
          <p className="text-white text-5xl font-bold">Ç</p>
        </div>
        <div className="flex items-center justify-center w-16 h-16 rounded-md bg-[#7d7373] border border-[#ff3434]">
          <p className="text-white text-5xl font-bold">V</p>
        </div>
      </article>
      <div className="flex w-36 h-32 p-2 bg-[#111111] border border-[#ff3434] rounded-md flex-col gap-1 items-center justify-center">
        <p className="text-white text-sm font-bold">Tempo Restante</p>
        <p className="text-[#ff3434] text-5xl font-bold">60</p>
        <p className="text-white text-xs">SEGUNDOS</p>
      </div>
      <Progress value={90} className="w-1/2" />
    </section>
  );
}
