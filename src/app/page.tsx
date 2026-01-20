import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BrandStory } from "@/components/sections/BrandStory";
import { Menu } from "@/components/sections/Menu";
import { Community } from "@/components/sections/Community";
import { VisitUs } from "@/components/sections/VisitUs";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <BrandStory />

      <Menu />
      <Community />
      <VisitUs />
      <Footer />
    </main>
  );
}
