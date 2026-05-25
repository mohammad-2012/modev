import NavLinkItem from "./NavLinkItem";
import DarkModeButton from "./DarkModeButton";
import Logo from "./Logo";
import ChangeLanguage from "./ChangeLanguage";
import { useDarkMode } from "../context/DarkModeContext";

export default function Header() {
  const { isDarkMode } = useDarkMode();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-border transition-all duration-300"
      style={{
        boxShadow: isDarkMode
          ? "0 4px 25px rgba(0, 255, 170, 0.528), 0 2px 5px rgba(0, 0, 0, 0.2)"
          : "0 4px 25px rgba(0, 180, 216, 0.4), 0 2px 5px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-8 py-4 flex items-center justify-between">
        <Logo />

        <nav
          className="px-6 py-4 rounded-full"
          style={{
            backgroundColor: "var(--bg-secondary)",
            backdropFilter: "blur(4px)",
          }}
        >
          <ul className="flex items-center gap-8">
            <NavLinkItem path="/home">Home</NavLinkItem>
            <NavLinkItem path="/about-me">About Me</NavLinkItem>
            <NavLinkItem path="/skills">Skills</NavLinkItem>
            <NavLinkItem path="/projects">Projects</NavLinkItem>
            <NavLinkItem path="/contact">Contact</NavLinkItem>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <DarkModeButton />
          <ChangeLanguage />
        </div>
      </div>
    </header>
  );
}
