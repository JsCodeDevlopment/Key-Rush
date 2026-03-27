"use client";

import Image from "next/image";
import { Points } from "@/components/points";
import { Keys } from "@/components/keys";
import { CountDownTimer } from "@/components/countdown-timer";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import { useAudio } from "@/context/AudioContext";
import { GameOverMessage } from "@/components/game-over-message";
import { generateSequence } from "@/helpers/generate-sequence";
import { useGame } from "@/hooks/game-hook";
import { character } from "@/interfaces/character";
import { characterPictures } from "@/helpers/mocks/characters-pictures";
import { BackButton } from "@/components/back-button";
import { Volume2, VolumeX } from "lucide-react";



interface GameProps {
  params: {
    id: number;
  };
}

export default function Game({ params: { id } }: GameProps) {
  const [started, setStarted] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [score, setScore] = useState<number>(0);
  const [combo, setCombo] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentSequence, setCurrentSequence] = useState<string[]>([]);
  const [userInput, setUserInput] = useState<string[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);
  const [character, setCharacter] = useState<character>({} as character);
  const [playerRecord, setPlayerRecord] = useState<{
    score: number;
    combo: number;
  }>({ score: 0, combo: 0 });

    const { 
        playCorrectSound, 
        playWrongSound, 
        isEffectsEnabled, 
        toggleEffects, 
        volume, 
        setVolume 
    } = useAudio();
    const { addRanking, characterById } = useGame();
    const { male, female } = characterPictures();

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                // Cast id to number to ensure mock/db lookup works
                const numericId = Number(id);
                if (isNaN(numericId)) return;

                const data = await characterById(numericId);
                setCharacter(data);
                if (data.records && data.records.length > 0) {
                    const highestScore = Math.max(...data.records.map((record: any) => record.score));
                    const highestScoreRecord = data.records.find((record: any) => record.score === highestScore);
                    if (highestScoreRecord) {
                        setPlayerRecord({
                            score: highestScoreRecord.score,
                            combo: highestScoreRecord.combo,
                        });
                    }
                }
            } catch (error) {
                console.error("Failed to fetch character", error);
            }
        };
        fetchCharacters();
    }, [id, characterById]);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (timeLeft > 0 && started) {
            interval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0 && started) {
            endGame();
        }
        return () => clearInterval(interval);
    }, [timeLeft, started]);

    const startGame = () => {
        setScore(0);
        setCombo(0);
        setTimeLeft(60);
        setCurrentIndex(0);
        setCurrentSequence(generateSequence());
        setUserInput([]);
        setHasError(false);
        setStarted(true);
        setGameOver(false);
    };

    const endGame = () => {
        setStarted(false);
        setGameOver(true);
        addRanking(Number(id), combo, score);
    };

    const resetGame = () => {
        setGameOver(false);
        setStarted(false);
        setScore(0);
        setCombo(0);
        setTimeLeft(60);
    };

    const handleKeyPress = useCallback(
        (event: KeyboardEvent) => {
            if (!started || gameOver) return;

            const keyPressed = event.key.toLowerCase();
            // Only allow lowercase a-z keys
            if (!/^[a-z]$/.test(keyPressed)) return;

            if (currentSequence[userInput.length] === keyPressed) {
                const newUserInput = [...userInput, keyPressed];
                setUserInput(newUserInput);
                setScore((prevScore) => prevScore + 25 + Math.floor(combo / 10) * 5);
                setCombo((prevCombo) => prevCombo + 1);
                playCorrectSound();
                setCurrentIndex((prevIndex) => prevIndex + 1);
                setHasError(false);
                if (newUserInput.length === currentSequence.length) {
                    setUserInput([]);
                    setCurrentSequence(generateSequence());
                    setCurrentIndex(0);
                }
            } else {
                playWrongSound();
                setHasError(true);
                endGame();
            }
        },
        [currentSequence, userInput, combo, started, gameOver, playCorrectSound, playWrongSound, id, addRanking]
    );

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [handleKeyPress]);

    return (
        <section className="min-h-[85vh] w-full relative flex flex-col gap-8 bg-zinc-950/40 border border-zinc-900 p-8 rounded-2xl items-center overflow-hidden backdrop-blur-md">
            {/* Visual Decor */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff3434]/50 to-transparent animate-pulse" />
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

            {/* Header Bar */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center relative z-10 border-b border-zinc-900 pb-8 gap-6">
                <div className="flex items-center gap-6">
                    <BackButton />

                    {/* Improved Audio Controls */}
                    <div className="flex items-center gap-4 px-6 py-2 bg-zinc-900/40 border border-zinc-800 rounded-2xl group hover:border-[#ff3434]/50 transition-all duration-300">
                        <button
                            onClick={toggleEffects}
                            className={`p-1 transition-all hover:scale-110 ${isEffectsEnabled ? 'text-[#ff3434]' : 'text-zinc-700'}`}
                        >
                            {isEffectsEnabled && volume > 0 ? <Volume2 size={24} /> : <VolumeX size={24} />}
                        </button>
                        <div className="flex flex-col gap-1 w-24">
                            <div className="flex justify-between items-center px-0.5">
                                <span className="text-[7px] font-black text-zinc-600 uppercase tracking-widest">Master</span>
                                <span className="text-[7px] font-black text-[#ff3434] font-mono">{Math.round(volume * 100)}%</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={volume * 100}
                                onChange={(e) => setVolume(Number(e.target.value))}
                                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#ff3434] hover:accent-white transition-all"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <h2 className="text-[#ff3434] text-xs font-black tracking-[0.5em] uppercase opacity-50 px-2">Missão Operacional</h2>
                    <h1 className="text-white text-3xl font-black tracking-tighter uppercase italic drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        KEY <span className="text-[#ff3434] glow-text-red">RUSH</span>
                    </h1>
                </div>

                <div className="hidden md:flex flex-col items-end gap-1">
                    <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900/80 border border-zinc-800 rounded-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                        <span className="text-emerald-500 text-[9px] font-black tracking-widest uppercase">Sync Established</span>
                    </div>
                    <span className="text-zinc-700 text-[9px] font-black font-mono tracking-tighter">PROTOCOL: KEY_RUSH_V2</span>
                </div>
            </div>


            <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10 flex-1 mt-4">

                {/* Left Side: Avatar & Stats */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="p-1 corner-accent bg-zinc-900/50 border border-zinc-800 backdrop-blur-md overflow-hidden">
                        <div className="bg-zinc-950 p-6 flex flex-col items-center gap-6 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-radial from-[#ff3434]/10 to-transparent scale-150 animate-pulse pointer-events-none" />
                            
                            <div className="relative w-48 h-48 flex items-center justify-center">
                                {/* Cyber Frame */}
                                <div className="absolute inset-0 border border-zinc-800 rounded-2xl rotate-45 group-hover:rotate-90 transition-transform duration-700" />
                                <div className="absolute inset-2 border border-dashed border-[#ff3434]/20 rounded-2xl rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
                                
                                {character.pictureName && (
                                    <Image
                                        src={
                                            character.gender === "male"
                                                ? male.find((m) => m.title === character.pictureName)?.picture ?? male[0].picture
                                                : female.find((m) => m.title === character.pictureName)?.picture ?? female[0].picture
                                        }
                                        className="w-40 h-40 object-contain drop-shadow-[0_0_20px_rgba(255,52,52,0.4)] relative z-10 group-hover:scale-110 transition-transform duration-500"
                                        width={200}
                                        height={200}
                                        alt="Operator"
                                        priority
                                    />
                                )}
                            </div>

                            <div className="text-center space-y-2 relative z-10 mt-2">
                                <p className="text-[#ff3434] text-[10px] font-black uppercase tracking-[0.3em] opacity-80">Identidade Verificada</p>
                                <h3 className="text-white text-2xl font-black uppercase italic tracking-tighter w-full px-2 border-b-2 border-[#ff3434]/20 pb-2">
                                    {character.name || "Offline"}
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 pt-4 px-2">
                        <div className="flex justify-between items-end border-b border-zinc-900 pb-3 hover:border-[#ff3434]/30 transition-colors">
                            <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">Lifetime High</span>
                            <span className="text-white font-mono font-bold text-lg">{playerRecord?.score?.toLocaleString() ?? 0}</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-zinc-900 pb-3 hover:border-[#ff3434]/30 transition-colors">
                            <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">Peak Combo</span>
                            <span className="text-[#ff3434] font-mono font-bold text-lg">x{playerRecord.combo}</span>
                        </div>
                    </div>
                </div>

                {/* Center: Main Game Area */}
                <div className="lg:col-span-2 flex flex-col items-center justify-center p-4 lg:p-12 bg-zinc-900/10 border border-zinc-800/80 rounded-[2.5rem] relative overflow-hidden min-h-[500px] shadow-2xl">
                    {/* Animated background lines */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="h-full w-[1px] bg-white absolute left-1/4 animate-pulse" />
                        <div className="h-full w-[1px] bg-[#ff3434] absolute left-2/4 animate-pulse delay-75" />
                        <div className="h-full w-[1px] bg-white absolute left-3/4 animate-pulse delay-150" />
                    </div>

                    {!started && !gameOver ? (
                        <div className="flex flex-col items-center gap-12 animate-fade-in text-center relative z-10">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff3434]/10 border border-[#ff3434]/50">
                                    <div className="w-2 h-2 rounded-full bg-[#ff3434] animate-ping" />
                                    <span className="text-[#ff3434] text-[10px] font-black uppercase tracking-widest">Ready to Initialize</span>
                                </div>
                                <h3 className="text-white text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-tight drop-shadow-2xl">
                                    PREPARAR PARA <br /> <span className="text-[#ff3434] glow-text-red">OPERAR</span>
                                </h3>
                                <p className="text-zinc-500 font-medium tracking-tight max-w-sm mx-auto">Sua interface neural está pronta. Inicie a sequência para dominar o teclado.</p>
                            </div>
                            <Button
                                onClick={startGame}
                                size="xl"
                                className="bg-[#ff3434] hover:bg-white text-white hover:text-black font-black px-20 h-24 text-3xl rounded-none transition-all corner-accent scale-100 hover:scale-110 shadow-[0_0_60px_rgba(255,52,52,0.3)] group"
                            >
                                <span className="relative z-10">INICIALIZAR</span>
                                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                            </Button>
                        </div>
                    ) : started ? (
                        <div className="flex flex-col gap-16 w-full items-center animate-fade-in relative z-10">
                            <Keys
                                userInput={userInput}
                                currentIndex={currentIndex}
                                hasError={hasError}
                                sequence={currentSequence}
                            />
                            <CountDownTimer timeLeft={timeLeft} />
                        </div>
                    ) : gameOver && (
                        <div className="flex flex-col gap-10 w-full items-center animate-fade-in text-center relative z-10">
                            <GameOverMessage
                                combo={combo}
                                hasError={hasError}
                                score={score}
                            />
                            <Button
                                onClick={resetGame}
                                size="xl"
                                className="bg-[#ff3434] hover:bg-white text-white hover:text-black font-black px-16 h-20 rounded-none corner-accent transition-all animate-bounce shadow-[0_0_40px_rgba(255,52,52,0.2)]"
                            >
                                TENTAR NOVAMENTE
                            </Button>
                        </div>
                    )}
                </div>

                {/* Right Side: Current Session Stats */}
                <div className="lg:col-span-1 flex flex-col gap-8">
                    <div className="bg-zinc-900/40 border border-zinc-800 p-10 rounded-[2rem] flex-1 flex flex-col justify-center gap-16 backdrop-blur-xl relative overflow-hidden group hover:border-[#ff3434]/40 transition-all duration-500">
                        {/* Session Decor */}
                        <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#ff3434]/5 blur-[40px] rounded-full" />
                        
                        <div className="space-y-4 relative z-10">
                            <p className="text-zinc-600 text-[11px] font-black uppercase tracking-[0.3em] pl-1">Score_Tracker</p>
                            <div className="text-7xl font-black text-white italic tracking-tighter tabular-nums drop-shadow-2xl group-hover:scale-105 transition-transform duration-500">
                                {score.toLocaleString()}
                            </div>
                        </div>

                        <div className="space-y-4 relative z-10">
                            <div className="flex items-center justify-between pl-1 pr-2">
                                <p className="text-zinc-600 text-[11px] font-black uppercase tracking-[0.3em]">Combo_Peak</p>
                                {combo > 10 && <span className="text-[#ff3434] text-[10px] font-black uppercase italic animate-pulse">On Fire!</span>}
                            </div>
                            <div className={`
                                text-8xl font-black text-[#ff3434] italic tracking-tighter tabular-nums drop-shadow-[0_0_30px_rgba(255,52,52,0.3)] transition-all duration-300
                                ${combo > 0 ? 'scale-110' : 'scale-100'}
                            `}>
                                x{combo}
                                {combo > 5 && (
                                    <div className="absolute -inset-4 bg-[#ff3434]/10 blur-[40px] -z-10 animate-pulse rounded-full" />
                                )}
                            </div>
                        </div>

                        {started && (
                            <div className="pt-8 border-t border-zinc-800 flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Active Link Established</span>
                                </div>
                                <div className="text-zinc-800 text-[8px] font-mono">ENCRYPTION: AES_RUSH_256</div>
                            </div>
                        )}
                    </div>
                </div>

            </div>

            {/* Footer Technical Line */}
            <div className="w-full flex items-center gap-4 text-zinc-900 font-black text-[10px] tracking-[0.5em] uppercase pointer-events-none mt-auto pt-12 pb-4">
                <span className="h-[1px] flex-1 bg-zinc-900/50" />
                <span>Hardware_Sinc_v2.0</span>
                <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-zinc-900" />
                    <span className="w-2 h-2 rounded-full border border-zinc-900" />
                </div>
                <span>Battle_Logic_Active</span>
                <span className="h-[1px] flex-1 bg-zinc-900/50" />
            </div>
        </section>
    );
}

