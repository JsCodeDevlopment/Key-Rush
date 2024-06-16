"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCharacter } from "@/hooks/use-characters";
import { character } from "@/interfaces/character";
import { characterPictures } from "@/helpers/mocks/characters-pictures";

export function CreatedCharacters() {
  const [character, setCharacter] = useState<character[]>([]);

  const { characters } = useCharacter();
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
        <>
          <Link key={char.id} href={`/game?charId=${char.id}`}>
            <div className="flex flex-col h-48 w-32 items-center justify-between p-2 bg-[#ff3434] rounded-md">
              <Image
                src={
                  char.gender === "male"
                    ? male.find((m) => m.title === char.pictureName)?.picture ??
                      ""
                    : female.find((m) => m.title === char.pictureName)
                        ?.picture ?? ""
                }
                className="w-36"
                width={200}
                height={200}
                alt="character1"
              />
              <p className="text-white">{char.name}</p>
            </div>
          </Link>
        </>
      ))}
    </>
  );
}
