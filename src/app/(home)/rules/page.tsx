export default function Rules() {
  return (
    <div className="bg-zinc-800 min-h-screen py-8 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-[#ff3434] text-center">
          Regras do Jogo
        </h1>
        <h1 className="text-lg text-white text-center">
          Regras e objetivos do Jogo
        </h1>
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-[#ff3434]">Objetivo</h2>
          <p className="mt-2 text-lg text-zinc-500">
            O objetivo é digitar a sequência de letras exibida o mais rápido
            possível dentro de 60 segundos. Cada letra correta lhe dá 25 pontos
            e adiciona 1 combo.
          </p>

          <h2 className="text-2xl font-bold text-[#ff3434] mt-6">Como Jogar</h2>
          <ol className="mt-2 text-lg text-zinc-500 list-decimal list-inside">
            <li>Uma sequência de 6 letras aleatórias será exibida na tela.</li>
            <li>Digite as letras na ordem exata em que são exibidas.</li>
            <li>
              Cada tecla pressionada corretamente pontua 25 pontos e adiciona 1
              combo.
            </li>
            <li>
              Se você pressionar uma tecla errada, o jogo terminará
              imediatamente.
            </li>
            <li>O jogo continua com novas sequências até que o tempo acabe.</li>
          </ol>

          <h2 className="text-2xl font-bold text-[#ff3434] mt-6">Pontuação</h2>
          <ul className="mt-2 text-lg text-zinc-500 list-disc list-inside">
            <li>Tecla pressionada corretamente: 25 pontos e 1 combo.</li>
            <li>Sequências de 10 combos irão adicionar +5 de pontuação extra.</li>
            <li>Tecla pressionada errada: Fim de jogo.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#ff3434] mt-6">Dicas</h2>
          <ul className="mt-2 text-lg text-zinc-500 list-disc list-inside">
            <li>Mantenha o foco e tente lembrar da sequência assim que olhar.</li>
            <li>
              Pratique para melhorar sua velocidade e precisão na digitação.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
