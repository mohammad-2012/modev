import { FaCode } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";

export default function LoadingSpinner() {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center transition-colors duration-300"
      style={{
        backgroundColor: isDarkMode ? "#0a0a0a" : "#ffffff",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <div
            className="w-28 h-28 rounded-full border-4 animate-spin"
            style={{
              borderColor: isDarkMode
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
              borderTopColor: "var(--accent-primary)",
              borderRightColor: "var(--accent-secondary)",
            }}
          ></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center animate-pulse"
              style={{
                backgroundColor: isDarkMode
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(0,0,0,0.05)",
              }}
            >
              <FaCode
                className="text-3xl animate-pulse"
                style={{ color: "var(--accent-primary)" }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-2">
          <div
            className="w-3 h-3 rounded-full animate-bounce"
            style={{
              backgroundColor: "var(--accent-primary)",
              animationDelay: "0ms",
            }}
          ></div>
          <div
            className="w-3 h-3 rounded-full animate-bounce"
            style={{
              backgroundColor: "var(--accent-secondary)",
              animationDelay: "150ms",
            }}
          ></div>
          <div
            className="w-3 h-3 rounded-full animate-bounce"
            style={{
              backgroundColor: "var(--accent-primary)",
              animationDelay: "300ms",
            }}
          ></div>
        </div>

        <p
          className="mt-4 text-sm tracking-wide animate-pulse font-medium"
          style={{ color: isDarkMode ? "#ffffff" : "#0a0a0a" }}
        >
          Loading...
        </p>
      </div>
    </div>
  );
}
