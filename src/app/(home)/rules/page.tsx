"use client";

import { BackButton } from "@/components/back-button";
import { Target, Zap, MousePointer2, AlertTriangle, Lightbulb, ShieldCheck } from "lucide-react";

export default function Rules() {
  const briefingItems = [
    {
      icon: <Target className="w-6 h-6 text-[#ff3434]" />,
      title: "Objetivo Primário",
      description: "Neutralizar sequências neurais de 6 caracteres na ordem exata. Você tem exatamente 60 segundos de link estável para acumular a pontuação máxima."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#ff3434]" />,
      title: "Cálculo de Score",
      description: "Cada input correto gera +25 pontos básicos. Manter o fluxo aumenta seu multiplicador de Combo, adicionando bônus progressivos a cada 10 acertos consecutivos."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-[#ff3434]" />,
      title: "Falha de Sistema",
      description: "Qualquer input incorreto causa uma dessincronização imediata (Game Over). Precisão é mais valiosa que velocidade bruta nos níveis iniciais."
    }
  ];

  const tips = [
    "Mantenha os dedos na posição inicial (ASDF-JKL;).",
    "Foque na sequência completa antes de começar a digitar.",
    "Utilize fones de ouvido para feedback sonoro de confirmação.",
    "O bônus de combo é a chave para o topo do ranking global."
  ];

  return (
    <section className="min-h-[85vh] w-full relative flex flex-col gap-12 bg-zinc-950/40 border border-zinc-900 p-8 md:p-12 rounded-3xl items-center overflow-hidden backdrop-blur-md">
      {/* Visual Decor */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff3434]/30 to-transparent animate-pulse" />
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#ff3434]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between relative z-10 gap-8">
        <BackButton />
        <div className="text-center md:text-right">
             <h2 className="text-[#ff3434] text-xs font-black tracking-[0.5em] uppercase opacity-60 px-2 lg:px-0">Manual de Operações</h2>
             <h1 className="text-white text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
                Inteligência <span className="text-[#ff3434]">Tática</span>
             </h1>
        </div>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        
        {/* Left Column: Briefing Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {briefingItems.map((item, index) => (
                <div key={index} className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl group hover:border-[#ff3434]/40 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        {item.icon}
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl w-fit group-hover:border-[#ff3434]/50 transition-colors">
                            {item.icon}
                        </div>
                        <h3 className="text-white text-xl font-black uppercase italic tracking-tight">{item.title}</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed font-medium">{item.description}</p>
                    </div>
                    {/* Index Indicator */}
                    <div className="absolute bottom-4 right-6 text-[8px] font-mono text-zinc-800 font-black">REF_00{index + 1}</div>
                </div>
            ))}

            {/* Controls Visualizer */}
            <div className="bg-zinc-950/60 border border-zinc-800 p-8 rounded-2xl flex flex-col gap-6 md:col-span-1">
                 <div className="flex items-center gap-3">
                    <MousePointer2 className="w-5 h-5 text-[#ff3434]" />
                    <h3 className="text-white text-lg font-black uppercase italic">Interface de Input</h3>
                 </div>
                 <div className="grid grid-cols-3 gap-3">
                    {['Q','W','E'].map(c => (
                        <div key={c} className="h-16 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-zinc-600 font-black text-xl italic">{c}</div>
                    ))}
                 </div>
                 <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em] text-center">Standard Keyboard Link Ready</p>
            </div>
        </div>

        {/* Right Column: Tips & Performance */}
        <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="bg-gradient-to-b from-[#ff3434]/20 to-zinc-950 border border-[#ff3434]/30 p-8 rounded-2xl flex flex-col gap-6 shadow-[0_20px_50px_rgba(255,52,52,0.1)]">
                <div className="flex items-center gap-3">
                    <Lightbulb className="w-6 h-6 text-white" />
                    <h3 className="text-white text-xl font-black uppercase italic tracking-tight">Dicas de Campo</h3>
                </div>
                <div className="space-y-4">
                    {tips.map((tip, i) => (
                        <div key={i} className="flex gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#ff3434] mt-1.5 shrink-0 shadow-[0_0_8px_#ff3434]" />
                            <p className="text-zinc-300 text-sm font-medium leading-snug">{tip}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 text-center">
                <ShieldCheck className="w-10 h-10 text-emerald-500 opacity-50" />
                <div className="space-y-1">
                    <h4 className="text-zinc-400 text-[10px] font-black uppercase tracking-widest">Protocolo de Treino</h4>
                    <p className="text-white text-sm font-bold italic">CONSISTÊNCIA É O CAMINHO PARA O RANK S.</p>
                </div>
            </div>
        </div>

      </div>

      {/* Decorative Technical Footer */}
      <div className="mt-auto w-full flex items-center gap-4 text-zinc-900 font-black text-[10px] tracking-[0.5em] uppercase pointer-events-none pt-12 pb-4">
        <span className="h-[1px] flex-1 bg-zinc-900/50" />
        <span>Intelligence_Center_Active</span>
        <span className="h-[1px] flex-1 bg-zinc-900/50" />
      </div>
    </section>
  );
}
