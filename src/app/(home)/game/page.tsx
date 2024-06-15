"use client";

import Image from "next/image";
import male0 from "@/assets/images/characters/male0.png";
import { Points } from "@/components/points";
import { Keys } from "@/components/keys";
import { CountDownTimer } from "@/components/countdown-timer";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import { useAudio } from "@/context/AudioContext";

export default function Game() {
  const [started, setStarted] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [score, setScore] = useState<number>(0);
  const [combo, setCombo] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentSequence, setCurrentSequence] = useState<string[]>([]);
  const [userInput, setUserInput] = useState<string[]>([]);
  const [gameOverMessage, setGameOverMessage] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);

  const { playCorrectSound, playWrongSound } = useAudio();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timeLeft > 0 && started) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      endGame("Time is up! ");
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
    setGameOverMessage("");
    setHasError(false);
    setStarted(true);
    setGameOver(false);
    window.addEventListener("keydown", handleKeyPress);
  };

  const endGame = (message: string) => {
    window.removeEventListener("keydown", handleKeyPress);
    setStarted(false);
    setGameOver(true);
    setGameOverMessage(`${message}Your Score: ${score}, Your Combo: ${combo}`);
  };

  const resetGame = () => {
    setGameOver(false);
    setGameOverMessage("");
  };

  const generateSequence = () => {
    const letters = "abcdefghijklmnopqrstuvwxyzç";
    let sequence = [];
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      sequence.push(letters[randomIndex]);
    }
    return sequence;
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
        endGame("You pressed the wrong key! ");
      }
    },
    [currentSequence, currentIndex, userInput, combo, playCorrectSound, playWrongSound]
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
    <section className="flex flex-col relative w-full gap-5 bg-[#7d7373]/30 border border-[#ff3434] p-5 rounded-lg items-center">
      <h1 className="text-[#ff3434] text-3xl font-bold">
        {!started ? "HORA DA VERDADE" : "APERTE EM COMEÇAR PARA JOGAR"}
      </h1>
      <div className="flex flex-col items-center p-2 bg-[#ff3434] rounded-md">
        <Image
          src={male0}
          className="w-36"
          width={200}
          height={200}
          alt="character1"
        />
        <p className="text-[#111111]">Fire Hands</p>
      </div>
      {started ? (
        <>
          <Points combo={combo} points={score} />
          <Keys
            currentIndex={currentIndex}
            hasError={hasError}
            sequence={currentSequence}
          />
          <CountDownTimer timeLeft={timeLeft} />
          <Button
            onClick={startGame}
            size={"sm"}
            className="bg-[#ff3434]"
          >
            Começar Novamente
          </Button>
        </>
      ) : gameOver ? (
        <>
          {hasError && (
            <Keys
              currentIndex={currentIndex}
              hasError={hasError}
              sequence={currentSequence}
            />
          )}
          <div id="end-message" style={{ color: "red" }}>
            {gameOverMessage}
          </div>
          <Button
            onClick={resetGame}
            size={"lg"}
            className="bg-[#ff3434] hover:scale-125 animate-bounce w-48 h-20 text-xl"
          >
            JOGAR DE NOVO
          </Button>
        </>
      ) : (
        <div className="flex h-full items-center justify-center">
          <Button
            onClick={startGame}
            size={"lg"}
            className="bg-[#ff3434] hover:scale-125 animate-bounce w-48 h-20 text-xl"
          >
            COMEÇAR
          </Button>
        </div>
      )}
    </section>
  );
}
