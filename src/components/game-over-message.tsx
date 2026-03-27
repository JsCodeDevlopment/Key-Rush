"use client";

import { CheckCircle2, XCircle, BarChart3, Target, Zap } from "lucide-react";

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
  
  // Calculate a Rank based on score/combo
  const getRank = () => {
    if (score > 2500 && combo > 30) return { grade: "S", color: "text-amber-400 font-black glow-text-amber" };
    if (score > 1500) return { grade: "A", color: "text-white font-black" };
    if (score > 800) return { grade: "B", color: "text-zinc-300 font-bold" };
    return { grade: "C", color: "text-zinc-500 font-medium" };
  };

  const rank = getRank();

  return (
    <div className="w-full max-w-2xl bg-zinc-950/60 border border-zinc-900 rounded-3xl p-10 backdrop-blur-md relative overflow-hidden shadow-3xl">
      {/* Background visual indicators */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#ff3434] opacity-30" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#ff3434]/10 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Header Result */}
      <header className="flex flex-col items-center text-center space-y-4 mb-12">
        <div className={`
          p-4 rounded-full border mb-2 transition-all duration-700
          ${!hasError ? 'bg-green-500/10 border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.2)]' : 'bg-[#ff3434]/10 border-[#ff3434]/50 shadow-[0_0_30px_rgba(255,52,52,0.2)]'}
        `}>
          {!hasError ? (
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          ) : (
            <XCircle className="w-12 h-12 text-[#ff3434]" />
          )}
        </div>
        
        <div className="space-y-1">
             <h2 className="text-zinc-600 text-xs font-black uppercase tracking-[0.5em]">Relatório Final</h2>
             <h3 className={`text-5xl font-black uppercase italic tracking-tighter ${!hasError ? 'text-green-500 italic' : 'text-[#ff3434]'}`}>
                Missão: {!hasError ? "Cumprida" : "Abortada"}
             </h3>
        </div>
        <p className="max-w-md text-zinc-500 font-medium text-sm leading-relaxed">
          {!hasError
            ? "Sequência completa de inputs finalizada com sucesso. Protocolo de performance de elite verificado."
            : "Interrupção crítica detectada na sincronização de reflexos. Sistema reiniciando para nova tentativa."}
        </p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center gap-3 relative overflow-hidden group hover:border-[#ff3434]/30 transition-colors">
            <div className="p-2 bg-zinc-950 border border-zinc-800 rounded-lg group-hover:border-[#ff3434]/50 transition-colors">
                <Target className="w-4 h-4 text-zinc-600 group-hover:text-[#ff3434]" />
            </div>
            <div className="text-center">
                <p className="text-zinc-500 text-[8px] font-black uppercase mb-1 tracking-widest">Total Pontuação</p>
                <p className="text-white text-3xl font-black italic tracking-tighter">{score.toLocaleString()}</p>
            </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center gap-3 relative overflow-hidden group hover:border-[#ff3434]/30 transition-colors">
             <div className="p-2 bg-zinc-950 border border-zinc-800 rounded-lg group-hover:border-[#ff3434]/50 transition-colors">
                <Zap className="w-4 h-4 text-zinc-600 group-hover:text-[#ff3434]" />
            </div>
            <div className="text-center">
                <p className="text-zinc-500 text-[8px] font-black uppercase mb-1 tracking-widest">Combo Peak</p>
                <p className="text-[#ff3434] text-3xl font-black italic tracking-tighter">x{combo}</p>
            </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center gap-3 relative overflow-hidden group hover:border-[#ff3434]/30 transition-colors">
             <div className="p-2 bg-zinc-950 border border-zinc-800 rounded-lg group-hover:border-[#ff3434]/50 transition-colors">
                <BarChart3 className="w-4 h-4 text-zinc-600 group-hover:text-[#ff3434]" />
            </div>
            <div className="text-center">
                <p className="text-zinc-500 text-[8px] font-black uppercase mb-1 tracking-widest">Global Rank</p>
                <p className={`text-4xl ${rank.color} transition-all`}>{rank.grade}</p>
            </div>
        </div>
      </div>

      {/* Decorative footer elements */}
      <div className="flex items-center gap-4 text-zinc-800 font-black text-[8px] tracking-[0.5em] uppercase pointer-events-none mt-4">
        <span className="h-[1px] flex-1 bg-zinc-900/50" />
        <span>Performance_Rating_v2_Active</span>
        <span className="h-[1px] flex-1 bg-zinc-900/50" />
      </div>
    </div>
  );
}
