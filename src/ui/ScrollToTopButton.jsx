import { useState, useEffect } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-accent-primary text-white shadow-lg hover:shadow-neon hover:-translate-y-1 transition-all duration-300 z-50 flex items-center justify-center group"
        aria-label="Back to top"
      >
        <IoMdArrowRoundUp
          size={24}
          className="group-hover:-translate-y-1 transition-transform duration-300"
        />
      </button>
    )
  );
}
