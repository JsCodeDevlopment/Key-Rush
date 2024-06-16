import male0 from "@/assets/images/characters/male0.png";
import male1 from "@/assets/images/characters/male1.png";
import male2 from "@/assets/images/characters/male2.png";
import male3 from "@/assets/images/characters/male3.png";
import male4 from "@/assets/images/characters/male4.png";
import male5 from "@/assets/images/characters/male5.png";
import male6 from "@/assets/images/characters/male6.png";

import female0 from "@/assets/images/characters/female0.png";
import female1 from "@/assets/images/characters/female1.png";
import female2 from "@/assets/images/characters/female2.png";
import female3 from "@/assets/images/characters/female3.png";
import female4 from "@/assets/images/characters/female4.png";
import female5 from "@/assets/images/characters/female5.png";
import female6 from "@/assets/images/characters/female6.png";
import { StaticImageData } from "next/image";

interface Character {
  title: string;
  picture: StaticImageData;
}

interface characterPictures {
  male: Character[];
  female: Character[];
}

export function characterPictures(): characterPictures {
  const male: Character[] = [
    {
      title: "male0",
      picture: male0,
    },
    {
      title: "male1",
      picture: male1,
    },
    {
      title: "male2",
      picture: male2,
    },
    {
      title: "male3",
      picture: male3,
    },
    {
      title: "male4",
      picture: male4,
    },
    {
      title: "male5",
      picture: male5,
    },
    {
      title: "male6",
      picture: male6,
    },
  ];

  const female = [
    {
      title: "female0",
      picture: female0,
    },
    {
      title: "female1",
      picture: female1,
    },
    {
      title: "female2",
      picture: female2,
    },
    {
      title: "female3",
      picture: female3,
    },
    {
      title: "female4",
      picture: female4,
    },
    {
      title: "female5",
      picture: female5,
    },
    {
      title: "female6",
      picture: female6,
    },
  ];

  return { female, male };
}
