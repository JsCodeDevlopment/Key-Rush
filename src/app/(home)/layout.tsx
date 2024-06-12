import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col relative bg-[#111111] bg-hero bg-cover bg-blend-overlay w-full min-h-screen">
      <Header />
      <section className="flex p-20">
        {children}
      </section>
      <Footer />
    </main>
  );
}
