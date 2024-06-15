import Image from "next/image";
import Link from "next/link";
import image from "@/assets/images/letter.png";
import { Button } from "@/components/ui/button";
import { GameFeatures } from "@/components/game-features";

export default function Home() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-5">
      <section className="flex h-screen w-full items-start justify-around flex-wrap">
        <article className="flex w-96 items-center justify-center">
          <Image
            src={image}
            className="w-[30rem]"
            alt="hero image"
            width={400}
            height={400}
          />
        </article>
        <article className="flex flex-col gap-2 w-[30rem]">
          <p className="text-white text-3xl font-bold">Bem Vindo ao</p>
          <h1 className="text-[#ff3434] text-7xl font-bold">Key Rush</h1>
          <p className="text-zinc-500 text-sm">
            Desafie seus reflexos e habilidades de digitação com Key Rush! Toque
            as teclas exibidas na tela o mais rápido que puder e veja se
            consegue alcançar o topo do placar. Simples de jogar, mas difícil de
            dominar, Key Rush é perfeito para quem quer melhorar sua velocidade
            de digitação e se divertir ao mesmo tempo. Entre na corrida e mostre
            que você tem os dedos mais rápidos!
          </p>
          <div>
            <Link href="/created-character">
              <Button className="bg-[#ff3434] hover:bg-zinc-800" size={"lg"}>
                Jogar Agora!
              </Button>
            </Link>
          </div>
        </article>
      </section>
      <GameFeatures />
    </section>
  );
}
