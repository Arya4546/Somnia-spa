import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import BackgroundVideo from "./components/BackgroundVideo";
import Hero from "./components/Hero";
import Stars3D from "./components/Stars3D";
import GameSection from "./components/GameSection";
import { initLenis } from "./lib/lenis";
import { GAME_LINKS } from "./lib/gameLinks";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    initLenis();
  }, []);

  return (
    <div className="relative min-h-screen text-black font-body">
      {/* Background layers */}
      <BackgroundVideo />
      <div className="pointer-events-none fixed inset-0 mix-blend-screen opacity-20">
        <Stars3D />
      </div>

      {/* Foreground content */}
      <NavBar setActivePage={setActivePage} />

      <main className="relative z-10">
        {activePage === "home" && (
          <section id="home" className="min-h-[100svh] flex items-center">
            <Hero setActivePage={setActivePage} />
          </section>
        )}

        {activePage === "games" && (
          <section id="games" className="py-12 md:py-20">
            <div className="max-w-6xl mx-auto px-4 grid gap-10">
              <GameSection title="Game 1" iframeId="game-1" url={GAME_LINKS.game1} />
              <GameSection title="Game 2" iframeId="game-2" url={GAME_LINKS.game2} />
              <GameSection title="Game 3" iframeId="game-3" url={GAME_LINKS.game3} />
              <GameSection title="Game 4" iframeId="game-4" url={GAME_LINKS.game4} />
            </div>
          </section>
        )}

        <footer className="pb-16 pt-8 text-center text-black/70">
          <p className="text-sm">
            Built for Somnia Mini-Games on Testnet — cartoon UI, buttery smooth scroll, and iframe-powered play.
          </p>
        </footer>
      </main>
    </div>
  );
}
