import Image from "next/image";
import image from "@/assets/images/letter.png";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="flex w-full items-center justify-evenly">
      <article className="flex items-center justify-center">
        <Image
          src={image}
          className="w-[30rem]"
          alt="hero image"
          width={400}
          height={400}
        />
      </article>
      <article className="flex flex-col gap-2 w-[50rem]">
        <p className="text-white text-3xl font-bold">Welcome to</p>
        <h1 className="text-[#ff3434] text-9xl font-bold">Key Rush</h1>
        <p className="text-zinc-500 text-xl">
          Desafie seus reflexos e habilidades de digitação com Key Rush! Toque
          as teclas exibidas na tela o mais rápido que puder e veja se consegue
          alcançar o topo do placar. Simples de jogar, mas difícil de dominar,
          Key Rush é perfeito para quem quer melhorar sua velocidade de
          digitação e se divertir ao mesmo tempo. Entre na corrida e mostre que
          você tem os dedos mais rápidos!
        </p>
        <div>
          <Button className="bg-[#ff3434] hover:bg-zinc-800" size={"lg"}>
            Start Now!
          </Button>
        </div>
      </article>
    </section>
  );
}
