"use client";

import Image from "next/image";
import male0 from "@/assets/images/characters/male0.png";
import { Points } from "@/components/points";
import { Keys } from "@/components/keys";
import { CountDownTimer } from "@/components/countdown-timer";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { GenerateSequence } from "@/helpers/generate-sequence";

export default function Game() {
  const [started, setStarded] = useState<boolean>(false);

  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [gameInterval, setGameInterval] = useState<NodeJS.Timeout | number>(0);
  const [score, setScore] = useState<number>(0);
  const [combo, setCombo] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currenSequence, setCurrentSequence] = useState<number[]>([]);

  // const { sequence } = GenerateSequence();

  const startGame = () => {
    setStarded(true);

    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);
    setGameInterval(interval);
  };

  const endGame = (message: string) => {
    if (gameInterval) {
      clearInterval(gameInterval);
      setGameInterval(0);
      console.log(message);
    }
  };

  useEffect(() => {
    return () => {
      if (gameInterval) {
        clearInterval(gameInterval);
      }
    };
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeLeft(60);
      setStarded(false);
      endGame("Time is up!");
    }
  }, [timeLeft, endGame]);

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
      {!started ? (
        <div className="flex h-full items-center justify-center">
          <Button
          onClick={() => startGame()}
            size={"lg"}
            className="bg-[#ff3434] hover:scale-125 animate-bounce w-48 h-20 text-xl"
          >
            COMEÇAR
          </Button>
        </div>
      ) : (
        <>
          <Points />
          <Keys />
          <CountDownTimer timeLeft={timeLeft} />
        </>
      )}
    </section>
  );
}
