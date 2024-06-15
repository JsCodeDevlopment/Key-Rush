import { Progress } from "@/components/ui/progress";
import { normalizeValue } from "@/helpers/normalize-value";

interface ICountDownTimer {
  timeLeft: number;
}

export function CountDownTimer({ timeLeft }: ICountDownTimer) {
  const { value } = normalizeValue({ currentValue: timeLeft });
  return (
    <>
      <div className="flex p-2 bg-[#111111] border border-[#ff3434] rounded-md flex-col gap-1 items-center justify-center">
        <p className="text-[#ff3434] text-5xl font-bold">{timeLeft}</p>
        <p className="text-white text-xs">Segundos restantes</p>
      </div>
      <Progress value={value} className="w-1/2" />
    </>
  );
}
