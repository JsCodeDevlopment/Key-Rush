"use client";

import { Progress } from "@/components/ui/progress";
import { normalizeValue } from "@/helpers/normalize-value";

interface ICountDownTimer {
  timeLeft: number;
}

export function CountDownTimer({ timeLeft }: ICountDownTimer) {
  const { value } = normalizeValue({ currentValue: timeLeft });
  
  // Color logic for time remaining
  const isLowTime = timeLeft <= 10;
  
  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md">
      {/* Time Display Panel */}
      <div className={`
        relative flex flex-col items-center justify-center px-12 py-6 rounded-2xl border transition-all duration-300
        ${isLowTime ? 'bg-[#ff3434]/10 border-[#ff3434] shadow-[0_0_30px_rgba(255,52,52,0.2)] scale-110' : 'bg-zinc-950/80 border-zinc-800 shadow-xl'}
      `}>
        {/* Decorative corner indicators */}
        <div className="absolute top-2 left-2 w-1 h-1 bg-zinc-700 rounded-full" />
        <div className="absolute top-2 right-2 w-1 h-1 bg-zinc-700 rounded-full" />
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-zinc-700 rounded-full" />
        <div className="absolute bottom-2 right-2 w-1 h-1 bg-zinc-700 rounded-full" />

        <div className="flex flex-col items-center">
             <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] mb-1">Crono_Link</span>
             <p className={`
                text-7xl font-mono font-black italic tracking-tighter transition-colors
                ${isLowTime ? 'text-[#ff3434] animate-pulse' : 'text-white'}
             `}>
                {timeLeft.toString().padStart(2, '0')}<span className="text-2xl not-italic ml-1">S</span>
             </p>
        </div>
      </div>

      {/* Modern Scanning Progress Bar */}
      <div className="w-full space-y-2">
          <div className="flex justify-between items-center text-[8px] font-black text-zinc-700 uppercase tracking-widest px-1">
              <span>Time_Left</span>
              <span>{Math.round(value)}%</span>
          </div>
          <div className="h-2 w-full bg-zinc-900 border border-zinc-800 p-[1px] rounded-full overflow-hidden shadow-inner">
             <div 
                className={`h-full rounded-full transition-all duration-1000 ease-linear ${isLowTime ? 'bg-[#ff3434] shadow-[0_0_15px_#ff3434]' : 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.3)]'}`}
                style={{ width: `${value}%` }}
             />
          </div>
      </div>
    </div>
  );
}
