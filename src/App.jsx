import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import BackgroundVideo from "./components/BackgroundVideo";
import Hero from "./components/Hero";
import Stars3D from "./components/Stars3D";
import GameSection from "./components/GameSection";
import { initLenis } from "./lib/lenis";

export default function App() {
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
      <NavBar />

      <main className="relative z-10">
        <Routes>
          <Route
            path="/"
            element={
              <section id="home" className="min-h-[100svh] flex items-center">
                <Hero />
              </section>
            }
          />
          <Route
            path="/game1"
            element={<GameSection title="Game 1" iframeId="game1" url="https://yourgame1.com" />}
          />
          <Route
            path="/game2"
            element={<GameSection title="Game 2" iframeId="game2" url="https://yourgame2.com" />}
          />
          <Route
            path="/game3"
            element={<GameSection title="Game 3" iframeId="game3" url="https://yourgame3.com" />}
          />
          <Route
            path="/game4"
            element={<GameSection title="Game 4" iframeId="game4" url="https://yourgame4.com" />}
          />
        </Routes>

        <footer className="pb-16 pt-8 text-center text-black/70">
          <p className="text-sm">
            Built for Somnia Mini-Games on Testnet — cartoon UI, buttery smooth scroll, and iframe-powered play.
          </p>
        </footer>
      </main>
    </div>
  );
}