import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "../context/DarkModeContext";

export default function ChangeLanguage() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language.toUpperCase());
  const dropdownRef = useRef(null);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setLanguage(i18n.language.toUpperCase());
  }, [i18n.language]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang.toLowerCase());
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-10 h-10 rounded-full border transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center font-semibold text-sm"
        style={{
          backgroundColor: isDarkMode ? "#1f2937" : "#f8fafc",
          borderColor: isDarkMode ? "#4b5563" : "#e2e8f0",
          color: isDarkMode ? "#ffffff" : "#374151",
          boxShadow: isDarkMode
            ? "0 0 10px #00ffaa, 0 0 5px #00b4d8"
            : "0 1px 3px rgba(0,0,0,0.1)",
        }}
        aria-label="Change Language"
      >
        {language}
      </button>

      {isOpen && (
        <div
          className="absolute top-12 right-0 w-32 rounded-lg border shadow-lg overflow-hidden z-20 transition-all duration-200"
          style={{
            backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
            borderColor: isDarkMode ? "#4b5563" : "#e2e8f0",
            boxShadow: isDarkMode
              ? "0 0 10px #00ffaa, 0 0 5px #00b4d8"
              : "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <button
            onClick={() => handleLanguageChange("EN")}
            className="w-full px-3 py-2 flex items-center gap-2 transition-colors duration-200 text-sm"
            style={{
              backgroundColor:
                language === "EN" ? "var(--accent-primary)" : "transparent",
              color:
                language === "EN"
                  ? "#ffffff"
                  : isDarkMode
                    ? "#d1d5db"
                    : "#374151",
            }}
            onMouseEnter={(e) => {
              if (language !== "EN") {
                e.currentTarget.style.backgroundColor = isDarkMode
                  ? "#374151"
                  : "#f3f4f6";
                e.currentTarget.style.color = isDarkMode
                  ? "#ffffff"
                  : "#374151";
              }
            }}
            onMouseLeave={(e) => {
              if (language !== "EN") {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = isDarkMode
                  ? "#d1d5db"
                  : "#374151";
              }
            }}
          >
            <span className="text-lg">🇬🇧</span>
            <span>English</span>
            {language === "EN" && <span className="ml-auto">✓</span>}
          </button>

          <button
            onClick={() => handleLanguageChange("FA")}
            className="w-full px-3 py-2 flex items-center gap-2 transition-colors duration-200 text-sm"
            style={{
              backgroundColor:
                language === "FA" ? "var(--accent-primary)" : "transparent",
              color:
                language === "FA"
                  ? "#ffffff"
                  : isDarkMode
                    ? "#d1d5db"
                    : "#374151",
            }}
            onMouseEnter={(e) => {
              if (language !== "FA") {
                e.currentTarget.style.backgroundColor = isDarkMode
                  ? "#374151"
                  : "#f3f4f6";
                e.currentTarget.style.color = isDarkMode
                  ? "#ffffff"
                  : "#374151";
              }
            }}
            onMouseLeave={(e) => {
              if (language !== "FA") {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = isDarkMode
                  ? "#d1d5db"
                  : "#374151";
              }
            }}
          >
            <span className="text-lg">🇮🇷</span>
            <span>فارسی</span>
            {language === "FA" && <span className="ml-auto">✓</span>}
          </button>
        </div>
      )}
    </div>
  );
}
