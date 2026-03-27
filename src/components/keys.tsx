"use client";

import { useEffect } from "react";

interface IKeys {
  sequence: string[];
  userInput: string[];
  currentIndex: number;
  hasError: boolean;
}

export function Keys({ sequence, currentIndex, userInput, hasError }: IKeys) {
  useEffect(() => {
    if (currentIndex < sequence.length) {
      const currentElement = document.getElementById(`letter-${currentIndex}`);
      if (currentElement) {
        currentElement.classList.add("zoom-in-out");
        const removeAnimation = () => {
          currentElement.classList.remove("zoom-in-out");
          currentElement.removeEventListener("animationend", removeAnimation);
        };
        currentElement.addEventListener("animationend", removeAnimation);
      }
    }
  }, [currentIndex, sequence.length]);

  return (
    <div className="flex flex-col gap-8 items-center w-full">
        {/* Helper Label */}
        <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.5em] text-zinc-800">
            <span className="w-16 h-[1px] bg-zinc-900" />
            Neural_Sync_Sequence
            <span className="w-16 h-[1px] bg-zinc-900" />
        </div>

        <article className="flex w-full gap-5 p-12 flex-wrap items-center justify-center bg-zinc-950/30 rounded-[3rem] border border-zinc-900/50 shadow-3xl backdrop-blur-2xl relative overflow-hidden group/arena">
          {/* Global Glow */}
          <div className="absolute inset-0 bg-gradient-radial from-[#ff3434]/5 to-transparent opacity-30 pointer-events-none" />
          
          {/* Scanning Line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-white opacity-5 animate-scan" />

          {sequence.map((key, index) => {
            const isTyped = index < userInput.length;
            const isCurrent = index === currentIndex;
            const isError = isCurrent && hasError;
            
            return (
              <div
                key={index}
                id={`letter-${index}`}
                className={`
                  relative flex items-center justify-center w-24 h-24 rounded-[1.5rem] transition-all duration-500
                  ${isTyped ? 'bg-[#ff3434] text-white shadow-[0_0_40px_rgba(255,52,52,0.4)] border-[#ff3434] scale-95 opacity-60' : 'bg-zinc-900/40 border-zinc-800 text-zinc-600'}
                  ${isCurrent && !hasError ? 'border-2 border-white scale-110 shadow-[0_0_30px_rgba(255,255,255,0.2)] z-20' : 'border'}
                  ${isError ? 'bg-zinc-950 border-[#ff3434] text-[#ff3434] animate-shake shadow-[0_0_50px_rgba(255,52,52,0.6)] z-30' : ''}
                  ${!isTyped && !isCurrent ? 'opacity-20 blur-[0.5px]' : 'opacity-100'}
                `}
              >
                {/* Surface Reflection */}
                <div className="absolute inset-x-2 top-2 h-1/3 bg-gradient-to-b from-white/10 to-transparent rounded-t-xl pointer-events-none" />
                
                {/* Key Index */}
                <span className={`absolute top-2 left-3 text-[8px] font-mono font-black transition-opacity ${isCurrent ? 'opacity-60 text-white' : 'opacity-20 text-zinc-500'}`}>
                    [{index + 1}]
                </span>

                <p className={`
                    text-5xl font-black italic tracking-tighter transition-all duration-500
                    ${isCurrent ? 'scale-110 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]' : 'scale-100'}
                `}>
                  {key.toUpperCase()}
                </p>
                
                {/* Indicator for current key */}
                {isCurrent && !hasError && (
                    <div className="absolute -bottom-3 flex flex-col items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                        <span className="text-[6px] font-black text-white uppercase tracking-widest">Target</span>
                    </div>
                )}
                
                {/* Error Indicator */}
                {isError && (
                    <div className="absolute -top-3 px-2 py-0.5 bg-[#ff3434] rounded text-[6px] font-black text-white uppercase animate-pulse">
                        Sync_Error
                    </div>
                )}
              </div>
            );
          })}
        </article>
    </div>
  );
}
