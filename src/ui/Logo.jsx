import { Link } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";

export default function Logo() {
  const { isDarkMode } = useDarkMode();

  return (
    <Link to="/">
      <img
        src={`../../public/Logo/${isDarkMode ? "Dark-Mode-Logo.webp" : "Light-Mode-Logo.webp"}`}
        alt="Logo"
        className="h-14 w-auto"
      />
    </Link>
  );
}
