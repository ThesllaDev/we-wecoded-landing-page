import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import InspiringHistory from "./components/InspiringHistory";
import SupportOrganizations from "./components/SupportOrganizations";
import WeStories from "./components/WeStories";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <AboutSection />
      <WeStories />
      <InspiringHistory />
      <SupportOrganizations />
    </main>
  );
}
