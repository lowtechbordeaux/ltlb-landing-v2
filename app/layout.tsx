import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <body className="bg-white font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
