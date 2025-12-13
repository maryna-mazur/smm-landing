import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
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
        className={`${montserrat.className} antialiased w-[100dvw] h-[100dvh]mt-3 p-4 flex overflow-x-hidden`}
      >
        {children}{" "}
      </body>
    </html>
  );
}
