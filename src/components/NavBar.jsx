import { Link } from "react-router-dom";
import { PiGameControllerFill } from "react-icons/pi";
import AnimatedBird from "./AnimatedBird";

const IconButton = ({ label, url }) => {
  return (
    <Link
      to={url}
      className="relative inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14
                 rounded-full bg-white hover:bg-gray-200 backdrop-blur-md
                 transition-all hover:scale-105 active:scale-95 text-black"
      title={label}
      aria-label={label}
    >
      <PiGameControllerFill className="w-6 h-6 md:w-7 md:h-7" />
      <span className="absolute -bottom-5 text-xs font-display">{label}</span>
    </Link>
  );
};

export default function NavBar() {
  return (
    <header className="fixed top-4 left-0 right-0 z-20">
      <nav className="mx-auto max-w-6xl px-4 flex items-center justify-between">
        {/* Left: Somnia bird (click -> home) */}
        <Link
          to="/"
          className="rounded-full hover:scale-105 active:scale-95 transition-transform"
          aria-label="Go Home"
          title="Go Home"
        >
          <AnimatedBird size={56} />
        </Link>

        {/* Right: icons navigate to game routes */}
        <div className="flex items-center gap-4 md:gap-6">
          <IconButton label="Game 1" url="/game1" />
          <IconButton label="Game 2" url="/game2" />
          <IconButton label="Game 3" url="/game3" />
          <IconButton label="Game 4" url="/game4" />
        </div>
      </nav>
    </header>
  );
}