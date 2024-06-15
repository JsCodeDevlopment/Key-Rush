interface PointsProps {
  points: number;
  combo: number;
}

export function Points({ points, combo }: PointsProps) {
  return (
    <div className="flex flex-col gap-3 w-64 bg-zinc-950 p-3 border border-[#ff3434]">
      <div className="flex flex-col p-2 bg-[#111111] text-white">
        <div className="flex items-center justify-center">
          <p className="text-[#ff3434] text-3xl font-bold">Recorde</p>
        </div>
        <p className="text-sm">
          Maior Combo:{" "}
          <span className="text-lg text-[#ff3434] font-black">30x</span>
        </p>
        <p className="text-sm">
          Maior Pontuação:{" "}
          <span className="text-lg text-[#ff3434] font-black">750pts</span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center p-2 bg-[#111111] text-white">
        <div className="flex w-full items-center justify-center">
          <p className="text-[#ff3434] text-3xl font-bold">Atual</p>
        </div>
        <div className="flex w-full items-end justify-center">
          <p className="text-7xl text-[#ff3434] font-black">{combo}</p>
          <span className="text-xl font-bold text-white">x</span>
        </div>
        <div className="flex w-full items-end justify-center">
          <p className="text-3xl text-[#ff3434] font-black">{points}</p>
          <span className="text-xl font-bold text-white">pts</span>
        </div>
      </div>
    </div>
  );
}
