import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import WeStories from "./components/WeStories";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
			<HeroSection />
			<AboutSection />
			<WeStories />
    </main>
  );
}
