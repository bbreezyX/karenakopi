import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Menu } from "@/components/sections/Menu";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <Menu />
      <Footer />
    </main>
  );
}
