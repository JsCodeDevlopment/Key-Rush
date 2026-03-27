"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useGame } from "@/hooks/game-hook";
import { character } from "@/interfaces/character";
import { characterPictures } from "@/helpers/mocks/characters-pictures";

export function CreatedCharacters() {
  const [character, setCharacter] = useState<character[]>([]);

  const { characters } = useGame();
  const { male, female } = characterPictures();


  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await characters();
      setCharacter(data);
    };
    fetchCharacters();
  }, []);

  return (
    <>
      {character.map((char) => (
        <Link key={char.id} href={`/game/${char.id}`} className="group h-full">
          <div className="relative flex flex-col aspect-[3/4] items-center justify-end p-6 bg-zinc-900/60 border border-zinc-800/50 rounded-xl hover:border-[#ff3434]/50 transition-all duration-500 overflow-hidden corner-accent shadow-xl">
            
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
               <Image
                src={
                  char.gender === "male"
                    ? male.find((m) => m.title === char.pictureName)?.picture ?? ""
                    : female.find((m) => m.title === char.pictureName)?.picture ?? ""
                }
                className="w-full h-full object-contain opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale-[0.5] group-hover:grayscale-0 pt-4"
                width={300}
                height={400}
                alt={char.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full text-center space-y-2">
              <div className="flex items-center justify-center gap-1.5 px-2 py-0.5 rounded-full bg-zinc-950/80 border border-zinc-800 text-[8px] font-black text-[#ff3434] uppercase tracking-widest w-fit mx-auto animate-pulse">
                <div className="w-1 h-1 rounded-full bg-[#ff3434]" />
                Status: Ready
              </div>
              
              <p className="text-white text-base font-black uppercase tracking-tight truncate group-hover:text-[#ff3434] transition-colors">
                {char.name}
              </p>
              
              <div className="h-[1px] w-full bg-zinc-800 group-hover:bg-[#ff3434]/50 transition-colors" />
              
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest group-hover:text-zinc-300">
                 Visualizar Perfil
              </p>
            </div>

            {/* Hover Glow */}
            <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-[#ff3434]/5 to-transparent -rotate-45 group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
          </div>
        </Link>
      ))}
    </>
  );
}

