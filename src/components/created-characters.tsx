import Image from "next/image";
import Link from "next/link";
import male0 from "@/assets/images/characters/male0.png";
import male3 from "@/assets/images/characters/male3.png";
import female3 from "@/assets/images/characters/female3.png";
import female4 from "@/assets/images/characters/female4.png";

export function CreatedCharacters() {
  return (
    <>
      <Link href={"/game"}>
        <div className="flex flex-col h-48 w-32 items-center justify-between p-2 bg-[#ff3434] rounded-md">
          <Image
            src={male0}
            className="w-36"
            width={200}
            height={200}
            alt="character1"
          />
          <p className="text-white">Fire Hands</p>
        </div>
      </Link>
      <div className="flex flex-col h-48 w-32 items-center justify-between p-2 bg-[#ff3434] rounded-md">
        <Image
          src={male3}
          className="w-36"
          width={200}
          height={200}
          alt="character1"
        />
        <p className="text-white">King of Words</p>
      </div>
      <div className="flex flex-col h-48 w-32 items-center justify-between p-2 bg-[#ff3434] rounded-md">
        <Image
          src={female3}
          className="w-36"
          width={200}
          height={200}
          alt="character1"
        />
        <p className="text-white">Queen of Words</p>
      </div>
      <div className="flex flex-col h-48 w-32 items-center justify-between p-2 bg-[#ff3434] rounded-md">
        <Image
          src={female4}
          className="w-36"
          width={200}
          height={200}
          alt="character1"
        />
        <p className="text-white">Word Warrior</p>
      </div>
    </>
  );
}
