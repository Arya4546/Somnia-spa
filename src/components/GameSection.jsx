import { useState } from "react";
import { motion } from "framer-motion";

export default function GameSection({ title, iframeId, url }) {
  const [src, setSrc] = useState("");
  const [loading, setLoading] = useState(false);

  const start = () => {
    if (!url) return;
    setLoading(true);
    setSrc(url);
  };

  return (
    <section id={iframeId} className="scroll-mt-24">
      <motion.div
        className="glass p-4 md:p-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2 className="font-display text-2xl md:text-3xl">{title}</h2>
          <button className="cartoon-btn" onClick={start}>
            Start Game
          </button>
        </div>

        <div className="mt-4 md:mt-6 aspect-video w-full rounded-xl overflow-hidden border border-white/20 bg-black/40">
          {!src && (
            <div className="h-full w-full flex items-center justify-center text-white/80 text-center px-6">
              Click <span className="mx-2 font-display text-candy-yellow">Start Game</span> to load the game iframe.
            </div>
          )}
          {src && (
            <iframe
              title={title}
              src={src}
              className="h-full w-full"
              allow="autoplay; fullscreen; clipboard-read; clipboard-write; gamepad; xr-spatial-tracking"
              onLoad={() => setLoading(false)}
            />
          )}
        </div>

        {loading && (
          <div className="mt-3 text-sm text-white/80">
            Loading… (if a site blocks iframes, replace URL or enable CORS-friendly embed)
          </div>
        )}
      </motion.div>
    </section>
  );
}
