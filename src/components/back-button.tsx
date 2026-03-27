import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();
  
  return (
    <Button 
      variant="outline"
      size="sm"
      className="group relative z-50 bg-zinc-950/50 border-zinc-800 hover:border-[#ff3434] hover:bg-zinc-900 text-zinc-400 hover:text-white font-black text-[10px] uppercase tracking-[0.2em] px-5 h-10 rounded-none transition-all duration-300 corner-accent"
      onClick={() => router.back()}
    >
      <div className="flex items-center gap-2">
        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span>Voltar</span>
      </div>
      
      {/* Red dot status */}
      <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-[#ff3434] opacity-50 animate-pulse" />
    </Button>
  );
}

