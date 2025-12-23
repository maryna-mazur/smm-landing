import { HeroSection } from "@/components/Sections/HeroSection";
import { AboutMe } from "@/components/Sections/AboutMe";
import { MyServices } from "@/components/Sections/MyServices";
import { ComingSoon } from "@/components/ComingSoon";
import { ContactInfo } from "@/components/ContactInfo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-gray-700">
      <HeroSection />
      <AboutMe />
      <MyServices />
      <ComingSoon />
      <ContactInfo />
    </main>
  );
}
