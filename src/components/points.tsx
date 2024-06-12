export function Points() {
  return (
    <div className="flex flex-col gap-3 absolute bg-[#ff3434]/30 p-3 right-2 border border-[#ff3434]">
      <div className="flex flex-col gap-2 p-2 bg-[#111111] text-white">
        <div className="flex w-full items-center justify-center">
          <p className="text-[#ff3434] text-3xl font-bold">Recorde</p>
        </div>
        <p className="text-xl">
          Maior Combo:{" "}
          <span className="text-3xl text-[#ff3434] font-black">30x</span>
        </p>
        <p className="text-xl">
          Maior Pontuação:{" "}
          <span className="text-3xl text-[#ff3434] font-black">750pts</span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 p-2 bg-[#111111] text-white">
        <div className="flex w-full items-center justify-center">
          <p className="text-[#ff3434] text-3xl font-bold">Atual</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <span className="text-7xl text-[#ff3434] font-black">30x</span>
          <p className="text-xl">Combo</p>
        </div>
        <p className="text-xl">
          Pontuação{" "}
          <span className="text-3xl text-[#ff3434] font-black">750pts</span>
        </p>
      </div>
    </div>
  );
}
