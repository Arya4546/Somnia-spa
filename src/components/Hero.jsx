import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedBird from "./AnimatedBird";

export default function Hero() {
  return (
    <div className="relative w-full">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1.2fr,0.8fr] items-center gap-10">
        <div className="space-y-6">
          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight 
                       text-black drop-shadow-candy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            Somnia Mini-Games <span className="text-candy-yellow">Cartoonverse</span>
          </motion.h1>

          <div className="flex items-center gap-4">
            <Link
              to="/game1"
              className="cartoon-btn"
            >
              Play Mini-Games
            </Link>
            <span className="px-4 py-2 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 text-sm text-black">
              Testnet • EVM • 1M+ TPS*
            </span>
          </div>

          <p className="text-xs text-black/60">
            * According to Somnia’s public materials.
          </p>
        </div>

        <motion.div
          className="justify-self-center md:justify-self-end"
          initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass p-6 md:p-8">
            <div className="flex flex-col items-center gap-4">
              <AnimatedBird size={120} />
              <div className="text-center">
                <p className="font-display text-xl text-black">Wings of the Somnia</p>
                <p className="text-black/70 text-sm">flowing endlessly ⚡</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}