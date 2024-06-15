interface GameVerMessageProps {
  score: number;
  combo: number;
  hasError: boolean;
}

export function GameOverMessage({
  score,
  combo,
  hasError,
}: GameVerMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-zinc-800 border border-[#ff3434] rounded-lg shadow-md">
      <h2 className="text-2xl text-[#ff3434] font-bold mb-4">
        {!hasError ? "Parabéns!" : "Fim de Jogo!"}
      </h2>
      <p className="mb-2 text-zinc-500">
        {!hasError
          ? "Você acertou todas as teclas! Será que temos um novo recorde?"
          : "Você errou a tecla! Não desanime, tente novamente e bata o seu recorde!"}
      </p>
      <div className="flex w-full items-center justify-around mb-2">
        <p className="text-xl text-white">
          Pontuação: <span className="text-2xl text-[#ff3434]">{score}</span>
        </p>
        <p className="text-xl text-white">
          Combo: <span className="text-2xl text-[#ff3434]">{combo}</span>
        </p>
      </div>
    </div>
  );
}
