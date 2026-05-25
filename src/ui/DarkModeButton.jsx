import { useDarkMode } from "../context/DarkModeContext";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";

export default function DarkModeButton() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`relative w-20 h-10 rounded-full border transition-all duration-300 shadow-lg hover:shadow-xl ${
        isDarkMode
          ? "bg-gray-800 border-gray-600 shadow-neon"
          : "bg-secondary border-border"
      }`}
      aria-label="Toggle Dark Mode"
    >
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 z-10 ${
          !isDarkMode
            ? "left-0 bg-accent-primary text-white shadow-sm"
            : "left-0 text-gray-300"
        }`}
      >
        <IoSunny size={18} />
      </div>

      <div
        className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 z-10 ${
          isDarkMode
            ? "right-1 bg-accent-primary text-white shadow-sm"
            : "right-0 text-gray-700"
        }`}
      >
        <IoMoon size={18} />
      </div>

      <div
        className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-accent-primary rounded-full shadow-md transition-all duration-300 z-0 ${
          isDarkMode ? "translate-x-10" : "translate-x-0"
        }`}
      />
    </button>
  );
}
