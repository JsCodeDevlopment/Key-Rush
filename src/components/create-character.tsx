import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import male0 from "@/assets/images/characters/male0.png";
import { Switch } from "@/components/ui/switch";

export function CreateCharacterForm() {
  return (
    <Card className="w-[350px] bg-[#111111] border-[#ff3434]">
      <CardHeader>
        <CardDescription className="text-zinc-500">
          Crie um personagem que lhe represente em sua jogatina.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="text-white">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col items-center justify-center h-32 w-full p-2 bg-[#ff3434] rounded-md">
              <Image
                src={male0}
                className="w-24"
                width={200}
                height={200}
                alt="character1"
              />
            </div>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Character Name" />
            </div>
            <div className="flex w-full items-center justify-between">
              <p>Masculino</p>
              <Switch className="bg-[#ff3434]" />
              <p>Feminino</p>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Perfil</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="1">Opção 1</SelectItem>
                  <SelectItem value="2">Opção 2</SelectItem>
                  <SelectItem value="3">Opção 3</SelectItem>
                  <SelectItem value="4">Opção 4</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="bg-[#ff3434] w-full">Salvar</Button>
      </CardFooter>
    </Card>
  );
}
