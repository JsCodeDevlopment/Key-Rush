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
import { useCharacter } from "@/hooks/use-characters";
import { character } from "@/interfaces/character";
import { characterPictures } from "@/helpers/mocks/characters-pictures";
import { BackButton } from "@/components/back-button";

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

  const { playCorrectSound, playWrongSound } = useAudio();
  const { addRanking, characterById } = useCharacter();
  const { male, female } = characterPictures();

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await characterById(id);
      setCharacter(data);
      const highestScore = Math.max(
        ...data.records.map((record) => record.score)
      );
      const highestScoreRecord = data.records.find(
        (record) => record.score === highestScore
      );
      if (highestScoreRecord) {
        setPlayerRecord({
          score: highestScoreRecord.score,
          combo: highestScoreRecord.combo,
        });
      }
    };
    fetchCharacters();
  }, [id]);

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
    addRanking(id, combo, score);
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
    <section className="flex w-full relative flex-col gap-2 bg-zinc-800/30 border border-[#ff3434] p-5 rounded-lg items-center">
      <div className="flex flex-1 items-start w-full">
        <BackButton />
      </div>
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
      {!started && !gameOver && (
        <div className="flex h-full w-full absolute items-center justify-center">
          <Button
            onClick={startGame}
            className="bg-[#ff3434] hover:scale-125 hover:bg-zinc-800 text-white animate-bounce text-lg"
          >
            COMEÇAR
          </Button>
        </div>
      )}
      <div className="flex w-full gap-3 items-center justify-between max-lg:flex-col">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[#ff3434] pb-1">Personagem Escolhido</p>
          <div className="flex flex-col h-48 w-32 items-center justify-between p-2 bg-[#ff3434] rounded-md">
            <Image
              src={
                character.gender === "male"
                  ? male.find((m) => m.title === character.pictureName)
                      ?.picture ?? ""
                  : female.find((m) => m.title === character.pictureName)
                      ?.picture ?? ""
              }
              className="w-36"
              width={200}
              height={200}
              alt="character1"
            />
            <p className="text-white text-sm font-bold text-center capitalize">
              {character.name}
            </p>
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
              <Button
                onClick={startGame}
                size={"sm"}
                className="bg-[#ff3434] hover:bg-zinc-800"
              >
                Começar Novamente
              </Button>
            </div>
            <Points
              combo={combo}
              points={score}
              highestCombo={playerRecord.combo}
              highestScore={playerRecord.score}
            />
          </>
        ) : (
          gameOver && (
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
                  className="bg-[#ff3434] hover:bg-zinc-800 hover:scale-125 animate-bounce text-lg"
                >
                  JOGAR DE NOVO
                </Button>
              </div>
            </>
          )
        )}
      </div>
    </section>
  );
}
