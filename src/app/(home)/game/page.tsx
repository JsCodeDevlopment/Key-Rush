"use client";

import Image from "next/image";
import male0 from "@/assets/images/characters/male0.png";
import { Points } from "@/components/points";
import { Keys } from "@/components/keys";
import { CountDownTimer } from "@/components/countdown-timer";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import { useAudio } from "@/context/AudioContext";
import { GameOverMessage } from "@/components/game-over-message";
import { generateSequence } from "@/helpers/generate-sequence";
import { useCharacter } from "@/hooks/use-characters";

interface GameProps {
  searchParams: {
    charId: number;
  };
}

export default function Game({ searchParams }: GameProps) {
  const [started, setStarted] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [score, setScore] = useState<number>(0);
  const [combo, setCombo] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentSequence, setCurrentSequence] = useState<string[]>([]);
  const [userInput, setUserInput] = useState<string[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);

  const { playCorrectSound, playWrongSound } = useAudio();
  const { addRanking } = useCharacter();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timeLeft > 0 && started) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
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
    window.addEventListener("keydown", handleKeyPress);
  };

  const endGame = () => {
    window.removeEventListener("keydown", handleKeyPress);
    setStarted(false);
    setGameOver(true);
    addRanking(searchParams.charId, {
      score,
      combo,
    });
  };

  const resetGame = () => {
    setGameOver(false);
  };

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const keyPressed = event.key.toLowerCase();
      if (currentSequence[userInput.length] === keyPressed) {
        setUserInput([...userInput, keyPressed]);
        setScore((prevScore) => prevScore + 25 + Math.floor(combo / 10) * 5);
        setCombo((prevCombo) => prevCombo + 1);
        playCorrectSound();
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setHasError(false);
        if (userInput.length + 1 === currentSequence.length) {
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
    [
      currentSequence,
      currentIndex,
      userInput,
      combo,
      playCorrectSound,
      playWrongSound,
    ]
  );

  useEffect(() => {
    if (started) {
      window.addEventListener("keydown", handleKeyPress);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [started, handleKeyPress]);

  return (
    <section className="flex w-full flex-col gap-2 bg-zinc-800/30 border border-[#ff3434] p-5 rounded-lg items-center">
      <h1 className="text-[#ff3434] text-3xl font-bold">
        {!started
          ? "HORA DA VERDADE!"
          : gameOver
          ? "APERTE EM COMEÇAR PARA JOGAR"
          : "VAMOS LÁ!"}
      </h1>
      <p className="text-white text-lg">
        {!started
          ? "Aperte em começar e comece a fazer pontuações insanas."
          : "Se está pronto, então inicie e mostre que é bom de verdade."}
      </p>
      <div className="flex w-full gap-3 items-center justify-between max-lg:flex-col">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[#ff3434]">Personagem Escolhido</p>
          <div className="flex flex-col h-48 w-32 items-center justify-between p-2 bg-[#ff3434] rounded-md">
            <Image
              src={male0}
              className="w-36"
              width={200}
              height={200}
              alt="character1"
            />
            <p className="text-white">Fire Hands</p>
          </div>
        </div>
        {started ? (
          <>
            <div className="flex flex-col gap-2 items-center justify-center">
              <Keys
                userInput={userInput}
                currentIndex={currentIndex}
                hasError={hasError}
                sequence={currentSequence}
              />
              <CountDownTimer timeLeft={timeLeft} />
              <Button onClick={startGame} size={"sm"} className="bg-[#ff3434]">
                Começar Novamente
              </Button>
            </div>
            <Points combo={combo} points={score} />
          </>
        ) : gameOver ? (
          <>
            <div className="flex flex-col gap-2 flex-1 items-center justify-center">
              {hasError && (
                <Keys
                  userInput={userInput}
                  currentIndex={currentIndex}
                  hasError={hasError}
                  sequence={currentSequence}
                />
              )}
              <GameOverMessage
                combo={combo}
                hasError={hasError}
                score={score}
              />
              <Button
                onClick={resetGame}
                className="bg-[#ff3434] hover:scale-125 animate-bounce text-lg"
              >
                JOGAR DE NOVO
              </Button>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-1 items-center justify-center">
            <Button
              onClick={startGame}
              className="bg-[#ff3434] hover:scale-125 text-white animate-bounce text-lg"
            >
              COMEÇAR
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
