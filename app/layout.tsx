import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import { fontClasses } from "./fonts";

export const metadata: Metadata = {
  title: "Low-tech Lab Bordeaux",
  description: "Site web du Low-tech Lab Bordeaux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={fontClasses}>
      <body className="bg-white font-sans text-base">
        {/* <Banner /> */}
        <Header />
        <main className="flex flex-col items-center ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
