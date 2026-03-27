import image from "@/assets/images/letter.png";
import { GameFeatures } from "@/components/game-features";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 overflow-hidden selection:bg-[#ff3434]/30 selection:text-white">
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#ff3434]/15 blur-[140px] rounded-full pointer-events-none" />

      <section className="relative pt-24 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
            <div className="flex-1 text-center lg:text-left z-10 space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-zinc-900/50 backdrop-blur-md border border-zinc-800 animate-fade-in shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3434] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff3434]"></span>
                </span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
                  Competição Global Ativa
                </span>
              </div>

              <div className="space-y-4">
                <p className="text-zinc-600 text-sm md:text-base font-black uppercase tracking-[0.4em] mb-2">
                  Desafie Seus Limites
                </p>
                <h1 className="text-6xl md:text-8xl xl:text-[7.5rem] font-black tracking-tighter leading-[0.85] uppercase">
                  Domine o <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3434] via-[#cc2a2a] to-[#ff3434] bg-[length:200%_auto] animate-gradient-x glow-text-red">
                    Teclado
                  </span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-zinc-500 max-w-xl leading-relaxed mx-auto lg:mx-0 font-medium">
                Engine de alta performance para{" "}
                <span className="text-[#ff3434]">jogadores profissionais</span>.
                O teste definitivo de reflexos, precisão e velocidade pura.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link href="/created-character">
                  <Button
                    size="xl"
                    className="relative group bg-[#ff3434] hover:bg-zinc-100 hover:text-black text-white font-black px-10 h-16 text-xl transition-all duration-300 overflow-hidden rounded-none corner-accent"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      INICIAR SESSÃO
                      <MoveRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </Button>
                </Link>
                <Link href="/rules">
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-zinc-800 bg-transparent hover:bg-zinc-900 text-zinc-300 h-16 px-10 text-xl font-bold rounded-none corner-accent"
                  >
                    ESTRATÉGIA
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-12 pt-12 border-t border-zinc-900/50 max-w-md mx-auto lg:mx-0 font-mono">
                <div className="group">
                  <div className="text-xs text-zinc-600 uppercase font-black tracking-widest mb-1 group-hover:text-[#ff3434] transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                    Players Online
                  </div>
                  <div className="text-3xl font-black text-white">1,402</div>
                </div>
                <div className="group">
                  <div className="text-xs text-zinc-600 uppercase font-black tracking-widest mb-1 group-hover:text-[#ff3434] transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                    Recorde WPM
                  </div>
                  <div className="text-3xl font-black text-[#ff3434]">184</div>
                </div>
                <div className="group">
                  <div className="text-xs text-zinc-600 uppercase font-black tracking-widest mb-1 group-hover:text-[#ff3434] transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                    Latência
                  </div>
                  <div className="text-3xl font-black text-white">1ms</div>
                </div>
              </div>
            </div>

            <div className="flex-1 relative animate-float">
              <div className="absolute inset-0 bg-[#ff3434]/10 blur-[120px] rounded-full scale-150 animate-pulse" />

              <div className="relative z-10 p-2 corner-accent bg-zinc-900/10 backdrop-blur-[2px]">
                <Image
                  src={image}
                  className="w-full max-w-[550px] h-auto object-contain drop-shadow-[0_40px_80px_rgba(255,52,52,0.15)] mx-auto hover:rotate-2 transition-transform duration-700"
                  alt="Key Rush Combat Frame"
                  width={800}
                  height={800}
                  priority
                />

                <div className="absolute -top-6 -right-6 bg-zinc-950 border border-[#ff3434] px-4 py-2 font-mono text-xs font-bold text-[#ff3434] shadow-[0_0_20px_rgba(255,52,52,0.3)] animate-pulse">
                  SYSTEM ACTIVE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GameFeatures />

      <section className="py-32 relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#ff3434]/10 blur-[150px] rounded-full" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-12">
          <div className="inline-block p-[1px] bg-gradient-to-r from-transparent via-[#ff3434]/50 to-transparent w-full mb-8" />

          <div className="space-y-4">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none italic animate-pulse">
              Desafie a <span className="text-[#ff3434]">Elite</span>
            </h2>
            <p className="text-xl text-zinc-500 font-bold uppercase tracking-widest">
              NÃO É APENAS UM JOGO.{" "}
              <span className="text-white">É O CAMPO DE TREINAMENTO.</span>
            </p>
          </div>

          <Link href="/created-character" className="inline-block group">
            <Button
              size="xl"
              className="bg-[#ff3434] text-white hover:bg-white hover:text-black font-black px-20 h-24 text-3xl rounded-none transition-all corner-accent scale-100 hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,52,52,0.4)]"
            >
              ENTRAR NA ARENA
            </Button>
          </Link>

          <div className="pt-8 flex items-center justify-center gap-4 text-zinc-600 font-black text-xs tracking-[0.3em]">
            <span>REFLEXOS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
            <span>PRECISÃO</span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
            <span>VELOCIDADE</span>
          </div>
        </div>
      </section>
    </div>
  );
}
