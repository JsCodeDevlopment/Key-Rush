import Image from "next/image";
import Link from "next/link";
import menu from "@/assets/svg/menu.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between py-6 px-6 md:px-20 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-900">
      <Link href={"/"} className="group flex items-center gap-2">
        <div className="w-10 h-10 bg-[#ff3434] rounded-lg flex items-center justify-center font-black text-white text-xl group-hover:scale-110 transition-transform">
          K
        </div>
        <h1 className="text-white text-2xl font-black tracking-tighter group-hover:text-[#ff3434] transition-colors">KEY RUSH</h1>
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/rankings" className="hidden md:block text-sm font-semibold text-zinc-400 hover:text-white transition-colors">
          Ranking
        </Link>
        <Link href="/rules" className="hidden md:block text-sm font-semibold text-zinc-400 hover:text-white transition-colors">
          Regras
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 hover:bg-zinc-900 rounded-full transition-colors">
              <Image
                src={menu}
                alt="Menu"
                className="w-8 select-none invert"
                width={32}
                height={32}
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mt-2 bg-zinc-900 border-zinc-800 text-white p-2 rounded-xl">
            <DropdownMenuLabel className="px-3 py-2 text-zinc-500 text-xs font-bold uppercase tracking-wider">Navegação</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-zinc-800 my-1" />
            <Link href={"/rules"}>
              <DropdownMenuItem className="rounded-lg py-2 cursor-pointer hover:bg-zinc-800">Regras</DropdownMenuItem>
            </Link>
            <Link href={"/rankings"}>
              <DropdownMenuItem className="rounded-lg py-2 cursor-pointer hover:bg-zinc-800">Ranking</DropdownMenuItem>
            </Link>
            <Link href={"/settings"}>
              <DropdownMenuItem className="rounded-lg py-2 cursor-pointer hover:bg-zinc-800">Configurações</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
