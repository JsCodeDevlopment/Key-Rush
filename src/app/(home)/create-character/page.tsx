"use client";

import { BackButton } from "@/components/back-button";
import { CreateCharacterForm } from "@/components/create-character";
import { CreatedCharacters } from "@/components/created-characters";

export default function CreateCharacter() {
  return (
    <section className="min-h-[85vh] flex flex-col w-full bg-zinc-950/40 border border-zinc-900 p-8 md:p-12 rounded-2xl items-center relative overflow-hidden backdrop-blur-md">
       {/* Visual Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff3434]/5 blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff3434]/5 blur-[100px] -z-10" />
      
      <div className="flex items-start w-full mb-8">
        <BackButton />
      </div>

      <div className="text-center space-y-4 mb-12">
        <h1 className="text-white text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
          NOVO <span className="text-[#ff3434] glow-text-red">OPERADOR</span>
        </h1>
        <p className="text-zinc-500 text-lg font-medium">Configure sua identidade de combate na rede Key Rush.</p>
      </div>

      <article className="flex w-full gap-3 p-5 flex-wrap items-center justify-center relative z-10">
        <CreateCharacterForm />
      </article>

      {/* Tech line footer */}
      <div className="mt-12 w-full flex items-center gap-4 text-zinc-800 font-black text-[10px] tracking-[0.5em] uppercase pointer-events-none">
        <span className="h-[1px] flex-1 bg-zinc-900" />
        <span>Initialization_Protocol_v1.0</span>
        <span className="h-[1px] flex-1 bg-zinc-900" />
      </div>
    </section>
  );
}

