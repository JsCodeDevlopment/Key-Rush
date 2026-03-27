import { useCallback, useMemo } from "react";
import { character } from "@/interfaces/character";
import { toast } from "sonner";

interface UseMockGame {
  characters: () => Promise<character[]>;
  addRanking: (characterId: number, combo: number, score: number) => Promise<any>;
  characterById: (charId: number) => Promise<character>;
  addCharacter: (name: string, pictureName: string, gender: string) => Promise<character>;
  rankings: () => Promise<any[]>;
}

const MOCK_CHARACTERS: character[] = [
  {
    id: 1,
    name: "Shadow Walker",
    gender: "male",
    pictureName: "male0",
    records: [
      { id: 101, combo: 45, score: 2500 },
      { id: 102, combo: 88, score: 5600 }
    ]
  },
  {
    id: 2,
    name: "Neon Blade",
    gender: "female",
    pictureName: "female2",
    records: [
      { id: 103, combo: 120, score: 12400 }
    ]
  },
  {
    id: 3,
    name: "Cyber Ghost",
    gender: "male",
    pictureName: "male4",
    records: []
  },
  {
    id: 4,
    name: "Aura Strike",
    gender: "female",
    pictureName: "female5",
    records: [
      { id: 104, combo: 30, score: 1500 }
    ]
  }
];

export function useMockGame(): UseMockGame {
  
  const characters = useCallback(async (): Promise<character[]> => {
    console.log("[Mock] Fetching characters...");
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_CHARACTERS), 500);
    });
  }, []);

  const characterById = useCallback(async (id: number): Promise<character> => {
    console.log(`[Mock] Fetching character ${id}...`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const char = MOCK_CHARACTERS.find(c => c.id === id);
        if (char) resolve(char);
        else reject(new Error("Character not found"));
      }, 500);
    });
  }, []);

  const addCharacter = useCallback(async (name: string, pictureName: string, gender: string): Promise<character> => {
    console.log(`[Mock] Adding character: ${name}...`);
    return new Promise((resolve) => {
      setTimeout(() => {
        const newChar: character = {
          id: Math.floor(Math.random() * 1000) + 10,
          name,
          pictureName,
          gender,
          records: []
        };
        toast.success(`[Mock] Personagem ${name} criado!`);
        resolve(newChar);
      }, 800);
    });
  }, []);

  const rankings = useCallback(async (): Promise<any[]> => {
    console.log("[Mock] Fetching rankings...");
    return new Promise((resolve) => {
      setTimeout(() => {
        const allRankings = MOCK_CHARACTERS.flatMap(char => 
          char.records.map(rec => ({
            ...rec,
            characterName: char.name,
            characterPicture: char.pictureName,
            characterGender: char.gender
          }))
        ).sort((a, b) => b.score - a.score);
        
        resolve(allRankings);
      }, 600);
    });
  }, []);

  const addRanking = useCallback(async (characterId: number, combo: number, score: number): Promise<any> => {
    console.log(`[Mock] Adding ranking for ${characterId}: Combo ${combo}, Score ${score}`);
    return new Promise((resolve) => {
      setTimeout(() => {
        toast.success(`[Mock] Pontuação de ${score} registrada!`);
        resolve({ success: true, id: Math.random() });
      }, 700);
    });
  }, []);

  return useMemo(() => ({
    characters, addRanking, characterById, addCharacter, rankings
  }), [characters, addRanking, characterById, addCharacter, rankings]);
}

