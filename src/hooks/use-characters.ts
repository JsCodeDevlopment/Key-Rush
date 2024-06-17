import { character } from "@/interfaces/character";
import axios from "axios";
import { toast } from "sonner";

interface useCharacter {
  characters: () => Promise<character[]>;
  addRanking: (characterId: number, combo: number, score: number) => Promise<any>
  characterById: (charId: number) => Promise<character>;
  addCharacter: (name: string, pictureName: string, gender: string) => Promise<character>
  rankings: () => Promise<any[]>;
}

export function useCharacter(): useCharacter {
  const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL });

  const characters = async () => {
    const response = await fetch('/api/characters');
    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }
  
    const data = await response.json();
    return data;
  };

  const characterById = async (id: number) => {
    const response = await fetch(`/api/characters/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch character');
    }
  
    const data: character = await response.json();
    return data;
  };

  const addCharacter = async (name: string, pictureName: string, gender: string) => {
    const response = await fetch('/api/characters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, pictureName, gender }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to create character');
    }
  
    const data: character = await response.json();
    toast.success('Character created successfully');
    return data;
  };

  const rankings = async () => {
    const response = await fetch('/api/rankings');
    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }
  
    const data = await response.json();
    return data;
  };

  const addRanking = async (characterId: number, combo: number, score: number) => {
    const response = await fetch(`/api/characters/${characterId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ combo, score }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to add record');
    }
  
    const data = await response.json();
    return data;
  };

  return { characters, addRanking, characterById, addCharacter, rankings };
}
