"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import male0 from "@/assets/images/characters/male0.png";
import female0 from "@/assets/images/characters/female0.png";

import { useState } from "react";
import { characterPictures } from "@/helpers/mocks/characters-pictures";
import { useGame } from "@/hooks/game-hook";
import { useRouter } from "next/navigation"


export function CreateCharacterForm() {
  const [isMale, setIsMale] = useState<boolean>(true); // Default to true
  const [options, setOptions] = useState<string>("");
  const [name, setName] = useState<string>("");

  const { male, female } = characterPictures();
  const { addCharacter } = useGame();
  const router = useRouter();

  const currentPreview = isMale
    ? male.find((m) => m.title === options)?.picture ?? male[0].picture
    : female.find((m) => m.title === options)?.picture ?? female[0].picture;

  const handleSubmit = async () => {
    if (!name || !options) return;
    const gender = isMale ? "male" : "female";
    const data = await addCharacter(name, options, gender);
    if (data) {
      router.push(`/created-character`);
    }
  };

  return (
    <Card className="w-[450px] bg-zinc-950 border-zinc-900 rounded-2xl overflow-hidden shadow-2xl relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      
      <CardHeader className="relative z-10 border-b border-zinc-900 pb-8">
        <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-3 bg-[#ff3434]" />
            <h2 className="text-white text-xl font-black uppercase tracking-widest">Identidade Operacional</h2>
        </div>
        <CardDescription className="text-zinc-500 font-medium tracking-tight">
          Sincronize sua conta com um novo avatar de desempenho.
        </CardDescription>
      </CardHeader>

      <CardContent className="relative z-10 space-y-8 pt-8">
        {/* Preview & Selection Container */}
        <div className="flex items-center gap-8">
            {/* Character Frame */}
            <div className="relative group">
                <div className="absolute -inset-1 bg-[#ff3434]/20 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-32 h-32 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden corner-accent flex items-center justify-center p-2">
                    <Image
                        src={currentPreview}
                        className="w-full h-full object-contain animate-float"
                        width={200}
                        height={200}
                        alt="Preview"
                    />
                </div>
            </div>

            {/* Gender Switch */}
            <div className="flex-1 space-y-4">
                <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em]">Série de Gênero</p>
                <div className="flex p-1 bg-zinc-900 border border-zinc-800 rounded-lg">
                    <button 
                        onClick={() => setIsMale(true)}
                        className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded-md transition-all ${isMale ? 'bg-[#ff3434] text-white' : 'text-zinc-500 hover:text-white'}`}
                    >
                        MASC
                    </button>
                    <button 
                        onClick={() => setIsMale(false)}
                        className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded-md transition-all ${!isMale ? 'bg-[#ff3434] text-white' : 'text-zinc-500 hover:text-white'}`}
                    >
                        FEM
                    </button>
                </div>
            </div>
        </div>

        {/* Inputs */}
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">Codinome (Max 12 chars)</Label>
            <Input
              id="name"
              className="bg-zinc-900/50 border-zinc-800 text-white font-bold h-12 focus:border-[#ff3434] transition-all rounded-lg placeholder:text-zinc-700"
              placeholder="Digite seu nome..."
              maxLength={12}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="icon" className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">Versão de Perfil</Label>
            <select
              id="icon"
              className="w-full bg-zinc-900 border border-zinc-800 text-white text-sm rounded-lg focus:ring-[#ff3434] focus:border-[#ff3434] block p-3 appearance-none cursor-pointer outline-none transition-all font-bold"
              onChange={(e) => setOptions(e.target.value)}
              value={options}
            >
              <option value="" disabled>Escolha um modelo visual</option>
              {(isMale ? male : female).map((char, index) => (
                <option key={index} value={char.title} className="bg-zinc-950">
                  Modelo 0{index + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      </CardContent>

      <CardFooter className="relative z-10 pt-4 pb-8">
        <Button 
            onClick={handleSubmit} 
            size="xl"
            disabled={!name || !options}
            className="w-full bg-[#ff3434] hover:bg-white text-white hover:text-black font-black uppercase tracking-widest rounded-none h-14 corner-accent transition-all animate-fade-in disabled:opacity-30 disabled:grayscale"
        >
          Sincronizar Operador
        </Button>
      </CardFooter>
    </Card>
  );
}

