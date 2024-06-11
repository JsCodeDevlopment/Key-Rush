export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <header>
      <h1>Header</h1>
    </header>
      <main>{children}</main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}
