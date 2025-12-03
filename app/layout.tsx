import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Geist_Mono({
  variable: "--font-montserrat",
  subsets: [],
});

export const metadata: Metadata = {
  title: "SMM-менеджерка | Просування в соціальних мережах",
  description: "Допомагаю брендам звучати справжньо в соціальних мережах",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <body
        className={`${montserrat.variable} antialiased w-[100dvw] h-[100dvh]`}
      >
        {children}{" "}
      </body>
    </html>
  );
}
