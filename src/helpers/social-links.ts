import github from "@/assets/icons/github.svg";
import linkedin from "@/assets/icons/linkedin.svg";
import port from "@/assets/icons/world.svg";
import insta from "@/assets/icons/instagram.svg";

interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
  alt: string;
}

interface UseSocialLinks {
  socialLinks: SocialLink[];
}

export function useSocialLinks(): UseSocialLinks {
  const socialLinks = [
    {
      id: 1,
      name: "GitHub",
      url: "https://github.com/JsCodeDevlopment",
      icon: github,
      alt: "link para o github do desenvolvedor"
    },
    {
      id: 2,
      name: "Linkedin",
      url: "https://www.linkedin.com/in/jscodedevelopment/",
      icon: linkedin,
      alt: "link para o linkedin do desenvolvedor"
    },
    {
      id: 3,
      name: "Portfolio",
      url: "https://jonatas-silva-developer.vercel.app/",
      icon: port,
      alt: "link para o portfólio do desenvolvedor"
    },
    {
      id: 4,
      name: "Instagram",
      url: "https://www.instagram.com/jonatasilva14",
      icon: insta,
      alt: "link para o instagram do desenvolvedor"
    },
  ];
  return { socialLinks };
}
