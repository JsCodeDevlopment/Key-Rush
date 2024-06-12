import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col relative pb-2 bg-[#111111] bg-hero bg-contain bg-center bg-no-repeat bg-blend-overlay w-full min-h-screen">
      <Header />
      <section className="flex flex-1 p-20">
        {children}
      </section>
      <Footer />
    </main>
  );
}
