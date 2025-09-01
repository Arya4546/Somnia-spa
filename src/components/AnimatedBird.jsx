import { motion } from "framer-motion";

export default function AnimatedBird({ size = 56 }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="relative select-none"
      aria-label="Somnia bird"
      role="img"
    >
      {/* Left wing */}
      <motion.img
        src="/images/somni/somni_left_wing.png"
        alt="somni left wing"
        className="absolute inset-0 object-contain somnia-left-wing"
        animate={{ rotate: [-6, 10, -6] }}
        transition={{ duration: 1.25, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Body */}
      <motion.img
        src="/images/somni/somni_body.png"
        alt="somni body"
        className="absolute inset-0 object-contain"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Right wing */}
      <motion.img
        src="/images/somni/somni_right_wing.png"
        alt="somni right wing"
        className="absolute inset-0 object-contain somnia-right-wing"
        animate={{ rotate: [6, -10, 6] }}
        transition={{ duration: 1.25, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
