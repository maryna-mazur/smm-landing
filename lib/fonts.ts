import type { Metadata } from "next";
import { Comforter, Montserrat, Shantell_Sans } from "next/font/google";

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const shantellSans = Shantell_Sans({
  weight: ["400", "700"],
  variable: "--font-shantell-Sans",
  subsets: ["latin"],
});

export const comforter = Comforter({
  weight: ["400"],
  variable: "--font-comforter",
  subsets: ["latin"],
});
