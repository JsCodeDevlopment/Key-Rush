import { useSocialLinks } from "@/helpers/mocks/social-links";
import Image from "next/image";

export function Footer() {
  const { socialLinks } = useSocialLinks();
  return (
    <nav className="flex w-full items-center justify-end px-20 gap-3">
      {socialLinks.map((link) => (
        <a href={link.url} key={link.id} target="_blank" >
          <Image
            src={link.icon}
            alt={link.alt}
            className="w-7"
            width={400}
            height={400}
          />
        </a>
      ))}
    </nav>
  );
}
