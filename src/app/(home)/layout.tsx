import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col relative bg-zinc-950 w-full min-h-screen">
      <Header />
      <div className="flex-1 flex flex-col pt-4 md:pt-0">
        {children}
      </div>
      <Footer />
    </div>
  );
}
