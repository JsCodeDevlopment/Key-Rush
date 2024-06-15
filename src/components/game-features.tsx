export function GameFeatures() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-[#ff3434] text-center">
          Recursos do Jogo
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-zinc-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#ff3434]">
              Ação Rápida
            </h3>
            <p className="mt-2 text-zinc-500">
              Experimente a emoção de um jogo de digitação rápido que desafia seus reflexos e precisão.
            </p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#ff3434]">
              Sequências Aleatórias
            </h3>
            <p className="mt-2 text-zinc-500">
              Cada jogo apresenta um novo conjunto de sequências aleatórias de letras, mantendo você alerta.
            </p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#ff3434]">
              Pontuação de Combos
            </h3>
            <p className="mt-2 text-zinc-500">
              Construa seu combo para maximizar sua pontuação e chegar ao topo do placar.
            </p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#ff3434]">
              Desafio de Tempo
            </h3>
            <p className="mt-2 text-zinc-500">
              Corra contra o relógio com um cronômetro de 60 segundos para alcançar a maior pontuação possível.
            </p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#ff3434]">
              Feedback Instantâneo
            </h3>
            <p className="mt-2 text-zinc-500">
              Receba feedback imediato sobre suas teclas pressionadas para melhorar suas habilidades de digitação.
            </p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#ff3434]">
              Fácil de Jogar
            </h3>
            <p className="mt-2 text-zinc-500">
              Controles simples tornam fácil para qualquer pessoa pegar e jogar, mas difícil de dominar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
