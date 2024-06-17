"use client"

import { BackButton } from "@/components/back-button";
import { CreatedCharacters } from "@/components/created-characters";
import Link from "next/link";

export default function CreateCharacter() {
  return (
    <section className="flex flex-col w-full bg-[#7d7373]/30 border border-[#ff3434] p-5 rounded-lg items-center">
      <div className="flex flex-1 items-start w-full">
        <BackButton />
      </div>
      <h1 className="text-[#ff3434] text-3xl font-bold">
        ESCOLHA SEU PERSONAGEM
      </h1>
      <p className="text-zinc-500 text-lg">
        Escolha um personagem já criado anteriormente ou crie um novo personagem
        para jogar.
      </p>
      <article className="flex w-full gap-3 p-5 flex-wrap items-center justify-center">
        <Link href={"/create-character"}>
          <div className="flex items-center justify-center h-48 w-32 bg-[#ff3434] rounded-md">
            <h1 className="text-black font-bold text-7xl">+</h1>
          </div>
        </Link>
        <CreatedCharacters />
      </article>
    </section>
  );
}
