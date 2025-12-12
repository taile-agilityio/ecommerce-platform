import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "United Deals - Best Online Shopping Platform",
  description: "Shop the latest deals on electronics, fashion, and more",
};

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
