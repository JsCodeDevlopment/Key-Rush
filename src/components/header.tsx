import Image from "next/image";

export function Header() {
  return (
    <nav>
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <Image src="/logo.png" alt="Menu burguer" width={100} height={100} />
    </nav>
  );
}
