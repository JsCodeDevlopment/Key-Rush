import { useCharacter } from "./use-characters";
import { useMockGame } from "./use-mock-game";

// Centralized hook to toggle between Mock and Real database
// To use real DB, set NEXT_PUBLIC_USE_MOCK=false in .env
const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === "true";

export const useGame = USE_MOCK ? useMockGame : useCharacter;

