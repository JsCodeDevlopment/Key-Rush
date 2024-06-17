import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";


export function BackButton() {
  const router = useRouter();
  return <Button className="bg-[#ff3434]" size={"sm"} onClick={() => router.back()}>
    <ChevronLeft size={24} /> voltar
  </Button>;
}
