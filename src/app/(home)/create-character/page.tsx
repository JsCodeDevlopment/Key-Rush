"use client";

import { BackButton } from "@/components/back-button";
import { CreateCharacterForm } from "@/components/create-character";
import { CreatedCharacters } from "@/components/created-characters";

export default function CreateCharacter() {
  return (
    <section className="flex flex-col w-full bg-[#7d7373]/30 border border-[#ff3434] p-5 rounded-lg items-center">
      <div className="flex flex-1 items-start w-full">
        <BackButton />
      </div>
      <h1 className="text-[#ff3434] text-3xl font-bold">CRIE SEU PERSONAGEM</h1>
      <article className="flex w-full gap-3 p-5 flex-wrap items-center justify-center">
        <CreateCharacterForm />
      </article>
    </section>
  );
}
