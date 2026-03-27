"use client";

import { useGame } from "@/hooks/game-hook";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { characterPictures } from "@/helpers/mocks/characters-pictures";
import { BackButton } from "@/components/back-button";
import { Trophy, Medal, Star, Target, Zap, Activity } from "lucide-react";

interface RankingItem {
    id: number;
    score: number;
    combo: number;
    characterName: string;
    characterPicture: string;
    characterGender: string;
}

const Ranking: React.FC = () => {
    const [rankingList, setRankingsList] = useState<RankingItem[]>([]);
    const { male, female } = characterPictures();
    const { rankings } = useGame();

    useEffect(() => {
        const fetchRankings = async () => {
            try {
                const data = await rankings();
                setRankingsList(data);
            } catch (err) {
                console.error("Failed to fetch rankings", err);
            }
        };
        fetchRankings();
    }, [rankings]);

    const getAvatar = (name: string, gender: string) => {
        const list = gender === "male" ? male : female;
        return list.find((m) => m.title === name)?.picture ?? list[0].picture;
    };

    const top3 = rankingList.slice(0, 3);
    const others = rankingList.slice(3);

    return (
        <section className="min-h-[85vh] w-full relative flex flex-col gap-12 bg-zinc-950/40 border border-zinc-900 p-8 md:p-12 rounded-3xl items-center overflow-hidden backdrop-blur-md">
            {/* Visual Decor */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff3434]/40 to-transparent animate-pulse" />
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
            
            {/* Header */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between relative z-10 gap-8">
                <BackButton />
                <div className="text-center md:text-right">
                     <h2 className="text-[#ff3434] text-xs font-black tracking-[0.5em] uppercase opacity-60">Database Global</h2>
                     <h1 className="text-white text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
                        Elite <span className="text-[#ff3434]">Ranks</span>
                     </h1>
                </div>
            </div>

            <div className="w-full max-w-7xl flex flex-col gap-16 relative z-10">
                
                {/* Podium Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end px-4">
                    {/* Rank 2 */}
                    {top3[1] && (
                        <div className="order-2 md:order-1 flex flex-col items-center gap-4 group">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-zinc-500/10 blur-2xl rounded-full" />
                                <div className="relative w-32 h-32 p-1 bg-zinc-900 border-2 border-zinc-700 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform">
                                    <Image 
                                        src={getAvatar(top3[1].characterPicture, top3[1].characterGender)}
                                        alt="Rank 2" width={200} height={200} className="w-full h-full object-contain"
                                    />
                                    <div className="absolute -top-3 -right-3 bg-zinc-700 p-2 rounded-lg border border-zinc-600 shadow-xl">
                                        <Medal className="w-4 h-4 text-zinc-300" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-white font-black uppercase text-xl italic tracking-tighter">{top3[1].characterName}</h3>
                                <p className="text-zinc-500 font-mono text-sm">{top3[1].score?.toLocaleString() ?? 0} PTS</p>
                            </div>
                        </div>
                    )}

                    {/* Rank 1 */}
                    {top3[0] && (
                        <div className="order-1 md:order-2 flex flex-col items-center gap-6 group scale-110 md:scale-125 mb-8 md:mb-12">
                            <div className="relative">
                                <div className="absolute -inset-8 bg-[#ff3434]/20 blur-3xl rounded-full animate-pulse" />
                                <div className="relative w-40 h-40 p-1 bg-zinc-900 border-4 border-[#ff3434] rounded-[2rem] shadow-[0_0_40px_rgba(255,52,52,0.3)]">
                                    <Image 
                                        src={getAvatar(top3[0].characterPicture, top3[0].characterGender)}
                                        alt="Rank 1" width={200} height={200} className="w-full h-full object-contain"
                                    />
                                    <div className="absolute -top-4 -right-4 bg-[#ff3434] p-3 rounded-xl border-2 border-white shadow-2xl animate-bounce">
                                        <Trophy className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="inline-flex items-center gap-2 px-3 py-0.5 bg-[#ff3434]/10 border border-[#ff3434]/50 rounded-full mb-1">
                                    <Star className="w-3 h-3 text-[#ff3434] fill-[#ff3434]" />
                                    <span className="text-[#ff3434] text-[8px] font-black uppercase tracking-widest">Global Champions</span>
                                </div>
                                <h3 className="text-white font-black uppercase text-3xl italic tracking-tighter glow-text-red">{top3[0].characterName}</h3>
                                <div className="flex items-center gap-4 justify-center mt-1">
                                    <span className="text-[#ff3434] font-black font-mono text-lg">{top3[0].score?.toLocaleString() ?? 0} <span className="text-[10px]">PTS</span></span>
                                    <span className="w-1 h-1 bg-zinc-800 rounded-full" />
                                    <span className="text-white/40 font-black font-mono text-sm">x{top3[0].combo}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Rank 3 */}
                    {top3[2] && (
                        <div className="order-3 md:order-3 flex flex-col items-center gap-4 group">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-amber-900/10 blur-2xl rounded-full" />
                                <div className="relative w-32 h-32 p-1 bg-zinc-900 border-2 border-amber-900/50 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform">
                                    <Image 
                                        src={getAvatar(top3[2].characterPicture, top3[2].characterGender)}
                                        alt="Rank 3" width={200} height={200} className="w-full h-full object-contain"
                                    />
                                    <div className="absolute -top-3 -right-3 bg-amber-900 p-2 rounded-lg border border-amber-800 shadow-xl">
                                        <Medal className="w-4 h-4 text-amber-500" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-white font-black uppercase text-xl italic tracking-tighter">{top3[2].characterName}</h3>
                                <p className="text-zinc-500 font-mono text-sm">{top3[2].score?.toLocaleString() ?? 0} PTS</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Others Table */}
                <div className="w-full bg-zinc-950/60 border border-zinc-900 rounded-[2.5rem] overflow-hidden shadow-2xl backdrop-blur-xl">
                    <div className="grid grid-cols-4 md:grid-cols-6 gap-4 p-8 border-b border-zinc-900 text-[10px] font-black uppercase text-zinc-600 tracking-[0.2em] bg-zinc-900/20">
                        <div className="col-span-1 pl-4">Rank</div>
                        <div className="col-span-1 md:col-span-2">Operador</div>
                        <div className="hidden md:flex items-center gap-2">Protocolo</div>
                        <div className="text-right">Combo</div>
                        <div className="text-right pr-4">Score_Final</div>
                    </div>

                    <div className="flex flex-col">
                        {others.map((item, index) => (
                            <div key={item.id} className="grid grid-cols-4 md:grid-cols-6 gap-4 p-6 border-b border-zinc-900 last:border-none hover:bg-[#ff3434]/5 transition-colors group">
                                <div className="col-span-1 pl-4 flex items-center gap-4">
                                    <span className="text-zinc-800 text-2xl font-black font-mono group-hover:text-white/20 transition-colors">#{index + 4}</span>
                                </div>
                                
                                <div className="col-span-1 md:col-span-2 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-zinc-900 p-1 rounded-lg border border-zinc-800 group-hover:border-[#ff3434]/50 transition-colors">
                                        <Image 
                                            src={getAvatar(item.characterPicture, item.characterGender)}
                                            alt={item.characterName} width={48} height={48} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                                        />
                                    </div>
                                    <span className="text-white font-black uppercase italic tracking-tighter group-hover:text-[#ff3434] transition-colors">{item.characterName}</span>
                                </div>

                                <div className="hidden md:flex items-center gap-3">
                                    <Activity className="w-3 h-3 text-zinc-800 group-hover:text-emerald-500 transition-colors" />
                                    <span className="text-zinc-600 text-[9px] font-mono group-hover:text-zinc-400 transition-colors">KEY_RUSH_0{Math.floor(Math.random() * 9 + 1)}</span>
                                </div>

                                <div className="flex items-center justify-end gap-2 text-zinc-500 font-mono text-sm pr-2">
                                    <Zap className="w-3 h-3 text-zinc-800 group-hover:text-[#ff3434] transition-colors" />
                                    x{item.combo}
                                </div>

                                <div className="flex flex-col items-end pr-4 justify-center">
                                    <span className="text-white font-black font-mono text-lg">{item.score?.toLocaleString() ?? 0}</span>
                                    <div className="flex items-center gap-1">
                                        <Target className="w-2 h-2 text-zinc-800 group-hover:text-[#ff3434]" />
                                        <span className="text-[8px] text-zinc-700 font-black uppercase">Verified</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {rankingList.length === 0 && (
                            <div className="p-20 flex flex-col items-center gap-4 opacity-20">
                                <Activity className="w-12 h-12 animate-pulse" />
                                <p className="text-xs font-black uppercase tracking-widest">Sincronizando Banco de Dados...</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer Tech Line */}
            <div className="mt-auto w-full flex items-center gap-4 text-zinc-900 font-black text-[10px] tracking-[0.5em] uppercase pointer-events-none pt-12 pb-4">
                <span className="h-[1px] flex-1 bg-zinc-900/50" />
                <span>Rankings_Global_Synced</span>
                <span className="h-[1px] flex-1 bg-zinc-900/50" />
            </div>
        </section>
    );
};

export default Ranking;
