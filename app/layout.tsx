import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "SMM-менеджерка | Просування в соціальних мережах",
  description: "Допомагаю брендам звучати справжньо в соціальних мережах",
  icons: {
    icon: '/images/icon.PNG',
    apple: '/images/icon.PNG',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <body
        className={`${montserrat.className} antialiased w-[100dvw] h-[100dvh]mt-3 flex flex-col justify-center overflow-x-hidden`}
      >
        {children}{" "}
      </body>
    </html>
  );
}
