import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kelechi Madueke | Portfolio",
  description: "My brain is the sexiest part of my body",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} pt-0 smpt:36 bg-black text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
