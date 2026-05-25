// // import NavLinkItem from "./NavLinkItem";
// // import DarkModeButton from "./DarkModeButton";
// // import Logo from "./Logo";
// // import ChangeLanguage from "./ChangeLanguage";
// // import { useDarkMode } from "../context/DarkModeContext";

// // export default function Header() {
// //   const { isDarkMode } = useDarkMode();

// //   return (
// //     <header
// //       className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-border transition-all duration-300"
// //       style={{
// //         boxShadow: isDarkMode
// //           ? "0 4px 25px rgba(0, 255, 170, 0.528), 0 2px 5px rgba(0, 0, 0, 0.2)"
// //           : "0 4px 25px rgba(0, 180, 216, 0.4), 0 2px 5px rgba(0, 0, 0, 0.05)",
// //       }}
// //     >
// //       <div className="max-w-[1200px] mx-auto px-8 py-4 flex items-center justify-between">
// //         <Logo />

// //         <nav
// //           className="px-6 py-4 rounded-full"
// //           style={{
// //             backgroundColor: "var(--bg-secondary)",
// //             backdropFilter: "blur(4px)",
// //           }}
// //         >
// //           <ul className="flex items-center gap-8">
// //             <NavLinkItem path="/home">Home</NavLinkItem>
// //             <NavLinkItem path="/about-me">About Me</NavLinkItem>
// //             <NavLinkItem path="/skills">Skills</NavLinkItem>
// //             <NavLinkItem path="/projects">Projects</NavLinkItem>
// //             <NavLinkItem path="/contact">Contact</NavLinkItem>
// //           </ul>
// //         </nav>

// //         <div className="flex items-center gap-3">
// //           <DarkModeButton />
// //           <ChangeLanguage />
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }

// import NavLinkItem from "./NavLinkItem";
// import DarkModeButton from "./DarkModeButton";
// import Logo from "./Logo";
// import ChangeLanguage from "./ChangeLanguage";
// import { useDarkMode } from "../context/DarkModeContext";
// import { useTranslation } from "react-i18next";

// export default function Header() {
//   const { isDarkMode } = useDarkMode();
//   const { t } = useTranslation();

//   return (
//     <header
//       className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-border transition-all duration-300"
//       style={{
//         boxShadow: isDarkMode
//           ? "0 4px 25px rgba(0, 255, 170, 0.528), 0 2px 5px rgba(0, 0, 0, 0.2)"
//           : "0 4px 25px rgba(0, 180, 216, 0.4), 0 2px 5px rgba(0, 0, 0, 0.05)",
//       }}
//     >
//       <div className="max-w-[1200px] mx-auto px-8 py-4 flex items-center justify-between">
//         <Logo />

//         <nav
//           className="px-6 py-4 rounded-full"
//           style={{
//             backgroundColor: "var(--bg-secondary)",
//             backdropFilter: "blur(4px)",
//           }}
//         >
//           <ul className="flex items-center gap-8">
//             <NavLinkItem path="/home">{t("nav.home")}</NavLinkItem>
//             <NavLinkItem path="/about-me">{t("nav.aboutMe")}</NavLinkItem>
//             <NavLinkItem path="/skills">{t("nav.skills")}</NavLinkItem>
//             <NavLinkItem path="/projects">{t("nav.projects")}</NavLinkItem>
//             <NavLinkItem path="/contact">{t("nav.contact")}</NavLinkItem>
//           </ul>
//         </nav>

//         <div className="flex items-center gap-3">
//           <DarkModeButton />
//           <ChangeLanguage />
//         </div>
//       </div>
//     </header>
//   );
// }

import { useState } from "react";
import NavLinkItem from "./NavLinkItem";
import DarkModeButton from "./DarkModeButton";
import Logo from "./Logo";
import ChangeLanguage from "./ChangeLanguage";
import { useDarkMode } from "../context/DarkModeContext";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-border transition-all duration-300"
        style={{
          boxShadow: isDarkMode
            ? "0 4px 25px rgba(0, 255, 170, 0.528), 0 2px 5px rgba(0, 0, 0, 0.2)"
            : "0 4px 25px rgba(0, 180, 216, 0.4), 0 2px 5px rgba(0, 0, 0, 0.05)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Logo size="h-12 md:h-14" />

          <nav
            className="hidden lg:block px-6 py-4 rounded-full"
            style={{
              backgroundColor: "var(--bg-secondary)",
              backdropFilter: "blur(4px)",
            }}
          >
            <ul className="flex items-center gap-8">
              <NavLinkItem path="/home">{t("nav.home")}</NavLinkItem>
              <NavLinkItem path="/about-me">{t("nav.aboutMe")}</NavLinkItem>
              <NavLinkItem path="/skills">{t("nav.skills")}</NavLinkItem>
              <NavLinkItem path="/projects">{t("nav.projects")}</NavLinkItem>
              <NavLinkItem path="/contact">{t("nav.contact")}</NavLinkItem>
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <DarkModeButton />
            <ChangeLanguage />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden z-50 relative flex items-center justify-center"
              style={{ color: "var(--color-grey-0)" }}
            >
              {isMenuOpen ? (
                <span className="text-5xl font-light leading-none">
                  &times;
                </span>
              ) : (
                <FaBars size={28} />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[100] transition-transform duration-300 ease-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundColor: isDarkMode ? "#0a0a0a" : "#ffffff",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-4 text-grey-0">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-text-primary"
          >
            <FaTimes className="w-9 h-9" />
          </button>
          <div className="mb-8">
            <Logo size="h-16" />
          </div>
          <NavLinkItem path="/home" onClick={handleLinkClick}>
            {t("nav.home")}
          </NavLinkItem>
          <NavLinkItem path="/about-me" onClick={handleLinkClick}>
            {t("nav.aboutMe")}
          </NavLinkItem>
          <NavLinkItem path="/skills" onClick={handleLinkClick}>
            {t("nav.skills")}
          </NavLinkItem>
          <NavLinkItem path="/projects" onClick={handleLinkClick}>
            {t("nav.projects")}
          </NavLinkItem>
          <NavLinkItem path="/contact" onClick={handleLinkClick}>
            {t("nav.contact")}
          </NavLinkItem>
        </div>
      </div>
    </>
  );
}
