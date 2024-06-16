"use client";

import { useCharacter } from "@/hooks/use-characters";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { characterPictures } from "@/helpers/mocks/characters-pictures";
import { character } from "@/interfaces/character";

const Ranking: React.FC = () => {
  const [ranking, setRankings] = useState<character[]>([]);

  const { male, female } = characterPictures();
  const { rankings } = useCharacter();

  useEffect(() => {
    const fetchRankings = async () => {
      const data = await rankings();
      setRankings(data);
    };

    fetchRankings();
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 justify-center w-full bg-zinc-800 p-8">
      <h1 className="text-3xl font-extrabold text-[#ff3434] text-center">
        Ranking
      </h1>
      <p className="text-lg text-white text-center">
        Veja suas melhores pontuações.
      </p>
      <ul className="flex w-full items-center justify-center gap-2 flex-wrap">
        {ranking.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-center bg-zinc-950 p-4 mb-2 shadow-md rounded-lg"
          >
            <div className="flex flex-col items-center justify-center">
              <p className="text-xl text-white font-bold">{item.name}</p>
              <div className="bg-[#ff3434] rounded-md">
                <Image
                  src={
                    item.gender === "male"
                      ? male.find((m) => m.title === item.pictureName)
                          ?.picture ?? ""
                      : female.find((m) => m.title === item.pictureName)
                          ?.picture ?? ""
                  }
                  className="w-20"
                  width={200}
                  height={200}
                  alt="character1"
                />
              </div>
              <p className="text-zinc-500">Pontuação: {item.record[0].score}</p>
              <p className="text-zinc-500">Combo: {item.record[0].combo}</p>
              <p className="text-zinc-500">
                Letras/s: {(item.record[0].combo / 60).toFixed(2)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ranking;
