import { useSocialLinks } from "@/helpers/mocks/social-links";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const { socialLinks } = useSocialLinks();

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Link
            href="/"
            className="text-white text-xl font-black tracking-tighter"
          >
            KEY RUSH
          </Link>
          <nav className="flex gap-6 text-zinc-500 text-xs font-black uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">
              Início
            </Link>
            <Link
              href="/rankings"
              className="hover:text-white transition-colors"
            >
              Ranking
            </Link>
            <Link href="/rules" className="hover:text-white transition-colors">
              Regras
            </Link>
          </nav>
        </div>

        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              href={link.url}
              key={link.id}
              target="_blank"
              className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-[#ff3434] hover:bg-[#ff3434]/10 transition-all group"
            >
              <Image
                src={link.icon}
                alt={link.alt}
                className="w-5 grayscale group-hover:grayscale-0 transition-all invert"
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>

        <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} KEY RUSH. DESENVOLVIDO POR JS DEV.
        </p>
      </div>
    </footer>
  );
}
