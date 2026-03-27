"use client"

import { BackButton } from "@/components/back-button";
import { CreatedCharacters } from "@/components/created-characters";
import { Plus, Users } from "lucide-react";
import Link from "next/link";

export default function CreateCharacter() {
  return (
    <section className="min-h-[80vh] flex flex-col w-full bg-zinc-950/40 border border-zinc-900 p-8 md:p-12 rounded-2xl items-center relative overflow-hidden backdrop-blur-md">
      {/* Visual Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff3434]/5 blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff3434]/5 blur-[100px] -z-10" />
      
      <div className="flex items-start w-full mb-8">
        <BackButton />
      </div>

      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-black text-[#ff3434] uppercase tracking-widest mb-2">
          <Users className="w-3 h-3" />
          Perfil de Operador
        </div>
        <h1 className="text-white text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
          ESCOLHA SEU <span className="text-[#ff3434] glow-text-red">PERSONAGEM</span>
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-medium">
          Selecione uma identidade de elite disponível ou inicialize um novo registro de combate para dominar a arena.
        </p>
      </div>

      <article className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-7xl mx-auto">
        {/* Create New Card */}
        <Link href="/create-character" className="group h-full">
          <div className="flex flex-col items-center justify-center aspect-[3/4] bg-zinc-900/50 border-2 border-dashed border-zinc-800 rounded-xl hover:border-[#ff3434] hover:bg-zinc-900 transition-all duration-300 relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#ff3434] group-hover:border-[#ff3434] transition-all duration-300">
               <Plus className="w-8 h-8 text-zinc-500 group-hover:text-white transition-colors" />
            </div>
            <p className="mt-6 text-zinc-500 font-black text-xs uppercase tracking-widest group-hover:text-white transition-colors">NOVO REGISTRO</p>
            
            {/* Grid background effect on hover */}
            <div className="absolute inset-0 bg-grid-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        </Link>
        
        <CreatedCharacters />
      </article>

      {/* Decorative footer line */}
      <div className="mt-20 w-full flex items-center gap-4 text-zinc-800 font-black text-[10px] tracking-[0.5em] uppercase pointer-events-none">
        <span className="h-[1px] flex-1 bg-zinc-900" />
        <span>Select_Operator_Identity</span>
        <span className="h-[1px] flex-1 bg-zinc-900" />
      </div>
    </section>
  );
}

