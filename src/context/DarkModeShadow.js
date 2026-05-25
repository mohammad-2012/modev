import { useDarkMode } from "../context/DarkModeContext";

export function useDarkModeShadow() {
  const { isDarkMode } = useDarkMode();

  const darkModeShadow = isDarkMode
    ? "0 0 20px rgba(255, 255, 255, 0.436), 0 0 5px rgba(255, 255, 255, 0.05)"
    : "0 1px 3px rgba(0,0,0,0.1)";

  return { darkModeShadow, isDarkMode };
}
