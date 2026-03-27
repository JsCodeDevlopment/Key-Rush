import { Clock, Shuffle, Target, Zap } from "lucide-react";

export function GameFeatures() {
  const features = [
    {
      title: "Ação Frenética",
      description:
        "Desafie seus reflexos em uma engine de alta precisão que responde instantaneamente aos seus comandos.",
      icon: <Zap className="w-10 h-10 text-[#ff3434]" />,
      className: "md:col-span-2",
    },
    {
      title: "Algoritmo Randômico",
      description:
        "Sequências geradas proceduralmente para que nenhum jogo seja igual ao anterior.",
      icon: <Shuffle className="w-10 h-10 text-[#ff3434]" />,
      className: "md:col-span-1",
    },
    {
      title: "Combos de Elite",
      description:
        "Maximize sua pontuação com combos encadeados. Errar uma tecla reinicia o multiplicador.",
      icon: <Target className="w-10 h-10 text-[#ff3434]" />,
      className: "md:col-span-1",
    },
    {
      title: "Time Trial",
      description:
        "60 segundos. É tudo o que você tem para provar que é o mais rápido da arena.",
      icon: <Clock className="w-10 h-10 text-[#ff3434]" />,
      className: "md:col-span-2",
    },
  ];

  return (
    <section className="py-32 w-full bg-[#0d0d0d] border-y border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-zinc-600 text-sm font-black uppercase tracking-[0.4em]">
              Hardware Virtual
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
              Recursos de <span className="text-[#ff3434]">Combate</span>
            </h3>
          </div>
          <p className="text-zinc-500 text-lg max-w-sm font-medium">
            Desenvolvido para extrair o máximo de performance de cada
            pressionamento de tecla.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group corner-accent bg-zinc-900/40 p-10 hover:bg-zinc-900/90 transition-all duration-500 cursor-default ${feature.className}`}
            >
              <div className="mb-8 inline-flex items-center justify-center p-4 bg-zinc-950 border border-zinc-900 group-hover:border-[#ff3434]/50 group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>

              <div className="space-y-4">
                <h4 className="text-2xl font-black text-white uppercase group-hover:text-[#ff3434] transition-colors">
                  {feature.title}
                </h4>
                <p className="text-zinc-500 text-lg leading-relaxed group-hover:text-zinc-400 transition-colors">
                  {feature.description}
                </p>
              </div>

              <div className="mt-8 h-[2px] w-full bg-zinc-800 group-hover:bg-[#ff3434]/30 overflow-hidden">
                <div className="h-full w-full bg-[#ff3434] -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 hidden md:flex items-center justify-center gap-12 font-mono text-[10px] font-black text-zinc-800 tracking-[0.5em] uppercase">
          <span>Module_v2.0</span>
          <span className="w-10 h-[1px] bg-zinc-900" />
          <span>Core_Active</span>
          <span className="w-10 h-[1px] bg-zinc-900" />
          <span>Engine_Locked</span>
        </div>
      </div>
    </section>
  );
}
