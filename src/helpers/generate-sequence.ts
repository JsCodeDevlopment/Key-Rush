import { useState } from "react";

interface IGenerateSequence {
  sequence: string[];
}

export function GenerateSequence(): IGenerateSequence {
  const [sequence, setSequence] = useState<string[]>([]);

  const letters = "abcdefghijklmnopqrstuvwxyzç";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    setSequence((prev) => [...prev, letters[randomIndex]]);
  }

  return { sequence };
}
