import Image from "next/image";
import menu from "@/assets/svg/menu.svg";
import cancel from "@/assets/svg/cancel.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  return (
    <nav className="flex w-full items-center justify-between py-5 px-20">
      <h1 className="text-[#ff3434] text-3xl font-black">KEY RUSH</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Image
            src={menu}
            alt="Menu"
            className="w-10 select-none"
            width={100}
            height={100}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-[#111111]/30 border-[#ff3434] text-white">
          <DropdownMenuLabel>MENU</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-[#ff3434]" />
          <DropdownMenuItem>Regras</DropdownMenuItem>
          <DropdownMenuItem>Ranking</DropdownMenuItem>
          <DropdownMenuItem>Configurações</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
