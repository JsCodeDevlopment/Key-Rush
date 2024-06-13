"use client";

import Image from "next/image";
import male0 from "@/assets/images/characters/male0.png";
import { Points } from "@/components/points";
import { Keys } from "@/components/keys";
import { CountDownTimer } from "@/components/countdown-timer";

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
      <Points />
      <Keys />
      <CountDownTimer />
    </section>
  );
}
