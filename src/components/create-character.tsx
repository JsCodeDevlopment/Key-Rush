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
import { useCharacter } from "@/hooks/use-characters";
import { useRouter } from "next/navigation"


export function CreateCharacterForm() {
  const [isMale, setIsMale] = useState<boolean>(false);
  const [options, setOptions] = useState<string>("");
  const [name, setName] = useState<string>("");

  const { male, female } = characterPictures();
  const { addCharacter } = useCharacter();
  const router = useRouter();

  const handleSubmit = async () => {
    const gender = isMale ? "male" : "female";
    const data = await addCharacter(name, options, gender);
    if (data) {
      setIsMale(false);
      setOptions("");
      setName("");
      router.push(`/created-character`);
    }
  };

  return (
    <Card className="w-[350px] bg-[#111111] border-[#ff3434]">
      <CardHeader>
        <CardDescription className="text-zinc-500">
          Crie um personagem que lhe represente em sua jogatina.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="text-white">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col items-center justify-center h-32 w-full p-2 bg-[#ff3434] rounded-md">
              <Image
                src={
                  isMale
                    ? male.find((m) => m.title === options)?.picture ?? male0
                    : female.find((m) => m.title === options)?.picture ??
                      female0
                }
                className="w-24"
                width={200}
                height={200}
                alt="character1"
              />
            </div>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                className="text-black"
                placeholder="Character Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <p>Tu é Homem?</p>
              <input
                type="checkbox"
                className="bg-[#ff3434]"
                onClick={() => setIsMale(!isMale)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">ícone de Perfil</Label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ff3434] focus:border-[#ff3434] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ff3434] dark:focus:border-[#ff3434]"
                onChange={(e) => setOptions(e.target.value)}
              >
                <option disabled selected value="">
                  Escolha um ícone
                </option>
                <option value={isMale ? male[0].title : female[0].title}>
                  Opção 1
                </option>
                <option value={isMale ? male[1].title : female[1].title}>
                  Opção 2
                </option>
                <option value={isMale ? male[2].title : female[2].title}>
                  Opção 3
                </option>
                <option value={isMale ? male[3].title : female[3].title}>
                  Opção 4
                </option>
                <option value={isMale ? male[4].title : female[4].title}>
                  Opção 5
                </option>
                <option value={isMale ? male[5].title : female[5].title}>
                  Opção 6
                </option>
              </select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleSubmit} className="bg-[#ff3434] w-full">
          Salvar
        </Button>
      </CardFooter>
    </Card>
  );
}
