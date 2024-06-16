import { character } from "@/interfaces/character";
import axios from "axios";

interface useCharacter {
  characters: () => Promise<character[]>;
  addRanking: (
    characterId: number,
    record: {
      combo: number;
      score: number;
    }
  ) => Promise<any>;
  characterById: (charId: number) => Promise<character[]>;
  rankings: () => Promise<any[]>;
}

export function useCharacter(): useCharacter {
  const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL });

  const characters = async () => {
    const response = await api.get("/characters");
    const characters: character[] = response.data;
    return characters;
  };

  const characterById = async (charId: number) => {
    const response = await api.get(`/characters/${charId}`);
    const characters: character[] = response.data;
    return characters;
  };

  const addCharacter = async (character: {
    name: string;
    pictureName: string;
    gender: string;
  }) => {
    const response = await api.post("/characters", character);
    return response.data;
  };

  const rankings = async () => {
    const response = await api.get("/characters");
    const characters: character[] = response.data;
    let allRecords: any[] = [];

    characters.forEach((character: character) => {
      character.record.forEach((record: any) => {
        allRecords.push({ ...record, ...character });
      });
    });

    allRecords.sort((a, b) => b.score - a.score) as character[];
    return allRecords.slice(0, 5);
  };

  const addRanking = async (
    characterId: number,
    record: { combo: number; score: number }
  ) => {
    const characterResponse = await api.get(`/characters/${characterId}`);
    const character = characterResponse.data;
    character.record.push(record);
    const response = await api.put(`/characters/${characterId}`, character);
    return response.data;
  };

  return { characters, addRanking, characterById, rankings };
}
