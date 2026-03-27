"use client";

import React from "react";
import { useAudio } from "@/context/AudioContext";
import { BackButton } from "@/components/back-button";
import { Settings, Volume2, VolumeX, Radio, Speaker, ShieldCheck, Play } from "lucide-react";

export default function SettingsPage() {
  const { isEffectsEnabled, volume, toggleEffects, setVolume, playCorrectSound } = useAudio();

  return (
    <section className="min-h-[85vh] w-full relative flex flex-col gap-12 bg-zinc-950/40 border border-zinc-900 p-8 md:p-12 rounded-3xl items-center overflow-hidden backdrop-blur-md">
      {/* Visual Decor */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff3434]/40 to-transparent animate-pulse" />
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#ff3434]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header Bar */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between relative z-10 gap-8">
        <BackButton />
        <div className="text-center md:text-right">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[8px] font-black text-zinc-500 uppercase tracking-widest mb-1">
                <Settings className="w-3 h-3" />
                Control_Panel_v2.1
             </div>
             <h1 className="text-white text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
                Ajustes do <span className="text-[#ff3434]">Sistema</span>
             </h1>
        </div>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        
        {/* Audio Engine Panel */}
        <div className="bg-zinc-900/40 border border-zinc-800 p-10 rounded-3xl flex flex-col gap-8 group hover:border-[#ff3434]/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff3434]/20 to-transparent" />
            
            <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl group-hover:border-[#ff3434]/50 transition-colors">
                    <Speaker className="w-6 h-6 text-[#ff3434]" />
                </div>
                <div className="space-y-1">
                    <h3 className="text-white text-xl font-black uppercase italic tracking-tight">Motor de Áudio</h3>
                    <p className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">SFX_Engine_Link</p>
                </div>
            </div>

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <span className="text-zinc-400 font-bold uppercase text-xs">Sincronização de Efeitos</span>
                    <button 
                        onClick={toggleEffects}
                        className={`
                            relative w-14 h-7 rounded-full transition-all duration-300 border-2
                            ${isEffectsEnabled ? 'bg-[#ff3434]/20 border-[#ff3434] shadow-[0_0_15px_rgba(255,52,52,0.2)]' : 'bg-zinc-900 border-zinc-700'}
                        `}
                    >
                        <div className={`
                            absolute top-1 w-4 h-4 rounded-sm transition-all duration-300
                            ${isEffectsEnabled ? 'left-8 bg-white rotate-45' : 'left-1.5 bg-zinc-700 rotate-0'}
                        `} />
                    </button>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center justify-between px-1">
                        <span className="text-zinc-400 font-bold uppercase text-xs">Volume Master</span>
                        <span className="text-[#ff3434] font-mono font-black text-sm">{Math.round(volume * 100)}%</span>
                    </div>
                    <div className="relative flex items-center gap-4">
                         {volume === 0 ? <VolumeX className="w-4 h-4 text-zinc-700" /> : <Volume2 className="w-4 h-4 text-[#ff3434]" />}
                         <input 
                            type="range"
                            min="0"
                            max="100"
                            value={volume * 100}
                            onChange={(e) => setVolume(Number(e.target.value))}
                            className="flex-1 h-1.5 bg-zinc-950 border border-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#ff3434] hover:accent-white transition-all shadow-inner"
                         />
                    </div>
                </div>

                <button 
                    onClick={() => playCorrectSound()}
                    className="w-full h-12 flex items-center justify-center gap-3 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-[#ff3434]/50 hover:bg-[#ff3434]/5 text-zinc-500 hover:text-white transition-all group/btn"
                >
                    <Play className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    <span className="font-black text-xs uppercase tracking-widest">Testar Saída de Áudio</span>
                </button>
            </div>
        </div>

        {/* Global Connectivity Panel */}
        <div className="bg-zinc-950/60 border border-zinc-800 p-10 rounded-3xl flex flex-col gap-8 group hover:border-emerald-500/30 transition-all duration-500 relative">
             <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl group-hover:border-emerald-500/50 transition-colors">
                    <Radio className="w-6 h-6 text-emerald-500" />
                </div>
                <div className="space-y-1">
                    <h3 className="text-white text-xl font-black uppercase italic tracking-tight">Status da Rede</h3>
                    <p className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">Master_Sync_Protocol</p>
                </div>
            </div>

            <div className="flex-1 space-y-6">
                <div className="p-6 bg-zinc-900/30 border border-dashed border-zinc-800 rounded-2xl flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <span className="text-zinc-500 font-bold text-[10px] uppercase">Base de Dados</span>
                        <div className="flex items-center gap-2 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 rounded text-emerald-500 text-[8px] font-black uppercase shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                             <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                             Online
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-zinc-500 font-bold text-[10px] uppercase">Latency_Sync</span>
                        <span className="text-white font-mono text-xs">1ms (Alpha)</span>
                    </div>
                    <div className="flex items-center justify-between">
                         <span className="text-zinc-500 font-bold text-[10px] uppercase">Encrypted_AES</span>
                         <ShieldCheck className="w-3 h-3 text-emerald-500 opacity-50" />
                    </div>
                </div>

                <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/10 flex flex-col gap-1">
                    <p className="text-zinc-700 text-[8px] font-black uppercase tracking-widest">System_Metadata</p>
                    <p className="text-zinc-500 text-[10px] font-medium leading-relaxed italic">
                        Os ajustes salvos são sincronizados com sua sessão local e aplicados instantaneamente em tempo de execução.
                    </p>
                </div>
            </div>
        </div>

      </div>

      {/* Footer Technical Line */}
      <div className="mt-auto w-full flex items-center gap-4 text-zinc-900 font-black text-[10px] tracking-[0.5em] uppercase pointer-events-none pt-12 pb-4">
        <span className="h-[1px] flex-1 bg-zinc-900/50" />
        <span>Optimization_Core_v2.0_Synced</span>
        <span className="h-[1px] flex-1 bg-zinc-900/50" />
      </div>
    </section>
  );
}
