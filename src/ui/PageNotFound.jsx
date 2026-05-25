import { FaHome, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDarkModeShadow } from "../context/DarkModeShadow";

export default function PageNotFound() {
  const { darkModeShadow, isDarkMode } = useDarkModeShadow();

  return (
    <div
      className={`h-dvh flex flex-col items-center justify-center transition-colors duration-300 text-grey-0 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div
        className="mb-6 p-6 rounded-full bg-secondary/30 border border-border inline-flex items-center justify-center animate-bounce"
        style={{ boxShadow: darkModeShadow }}
      >
        <FaRocket className="text-7xl text-accent-primary animate-pulse" />
      </div>

      <h1 className="text-8xl md:text-9xl font-bold text-accent-primary mb-2 animate-pulse">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3 animate-fade-in">
        Page Not Found
      </h2>

      <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mb-5 rounded-full animate-pulse"></div>

      <p className="text-text-secondary text-center mb-8 animate-slide-up">
        Oops! The page you are looking for doesn't exist.
      </p>

      <Link
        to="/home"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-primary text-black font-semibold shadow-lg hover:shadow-neon hover:-translate-y-1 transition-all duration-300 group"
      >
        <FaHome className="group-hover:scale-110 transition-transform duration-300" />
        Back to Home
      </Link>
    </div>
  );
}
