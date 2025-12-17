import { HeroSection } from "@/components/Sections/HeroSection";
import { AboutMe } from "@/components/Sections/AboutMe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-gray-700">
      <HeroSection />
      <AboutMe />
    </main>
  );
}
