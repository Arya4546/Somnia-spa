/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fredoka One"', 'system-ui', 'sans-serif'],
        body: ['"Baloo 2"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Soft, cartoon-friendly palette
        candy: {
          pink: "#FF7AA2",
          yellow: "#FFE36E",
          mint: "#7EF3D5",
          blue: "#7EC8FF",
          purple: "#B59AFF",
          ink: "#0b1020",
        },
      },
      keyframes: {
        flapLeft: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
        flapRight: {
          "0%, 100%": { transform: "rotate(6deg)" },
          "50%": { transform: "rotate(-10deg)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        squish: {
          "0%": { transform: "scale(1,1)" },
          "50%": { transform: "scale(1.06,0.94)" },
          "100%": { transform: "scale(1,1)" },
        },
      },
      animation: {
        flapLeft: "flapLeft 1.25s ease-in-out infinite",
        flapRight: "flapRight 1.25s ease-in-out infinite",
        floaty: "floaty 4s ease-in-out infinite",
        squish: "squish 0.6s ease-in-out",
      },
      dropShadow: {
        candy: "0 6px 0 rgba(0,0,0,.25)",
      },
    },
  },
  plugins: [],
};
