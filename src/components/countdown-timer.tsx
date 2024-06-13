import { Progress } from "@/components/ui/progress";

export function CountDownTimer() {
  return (
    <>
      <div className="flex w-36 h-32 p-2 bg-[#111111] border border-[#ff3434] rounded-md flex-col gap-1 items-center justify-center">
        <p className="text-white text-sm font-bold">Tempo Restante</p>
        <p className="text-[#ff3434] text-5xl font-bold">60</p>
        <p className="text-white text-xs">SEGUNDOS</p>
      </div>
      <Progress value={90} className="w-1/2" />
    </>
  );
}
