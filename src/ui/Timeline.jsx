import { useTranslation } from "react-i18next";
import {
  FaCode,
  FaRocket,
  FaGraduationCap,
  FaLaptopCode,
  FaAward,
  FaWordpress,
} from "react-icons/fa";
import { useDarkModeShadow } from "../context/DarkModeShadow";

export default function Timeline() {
  const { darkModeShadow } = useDarkModeShadow();
  const { t } = useTranslation();

  const timelineData = [
    {
      year: "2024 (Oct)",
      title: t("timeline.startedWordPress"),
      description: t("timeline.startedWordPressDesc"),
      icon: <FaWordpress />,
    },
    {
      year: "2025 (Jan)",
      title: t("timeline.switchedToProgramming"),
      description: t("timeline.switchedToProgrammingDesc"),
      icon: <FaCode />,
    },
    {
      year: "2025 (Jun)",
      title: t("timeline.javascriptTailwind"),
      description: t("timeline.javascriptTailwindDesc"),
      icon: <FaLaptopCode />,
    },
    {
      year: "2025 (Dec)",
      title: t("timeline.reactModern"),
      description: t("timeline.reactModernDesc"),
      icon: <FaRocket />,
    },
    {
      year: "2026 - 2027",
      title: t("timeline.fullStack"),
      description: t("timeline.fullStackDesc"),
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <div
      className="rounded-2xl p-4 md:p-10 border border-border transition-all duration-300 mt-10"
      style={{ boxShadow: darkModeShadow }}
    >
      <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-6 md:mb-8 flex items-center gap-2">
        <FaAward className="text-accent-primary" />
        {t("timeline.title")}
      </h2>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent-primary to-accent-secondary hidden md:block"></div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col ${
              index % 2 === 0 ? "md:items-start" : "md:items-end"
            } mb-6 md:mb-8 last:mb-0`}
          >
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-primary rounded-full border-4 border-border z-10"></div>

            <div
              style={{ boxShadow: darkModeShadow }}
              className={`
              w-full md:w-[45%] p-4 md:p-5 rounded-xl bg-secondary/30 border border-border 
              transition-all duration-500 hover:scale-[1.02] md:hover:scale-105 cursor-pointer
              ${index % 2 === 0 ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"}
              ${
                index % 2 === 0
                  ? "md:hover:translate-x-4"
                  : "md:hover:-translate-x-4"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary text-lg md:text-xl">
                  {item.icon}
                </div>
                <div>
                  <span className="text-accent-primary font-bold text-base md:text-lg">
                    {item.year}
                  </span>
                  <h3 className="text-text-primary font-semibold text-sm md:text-base">
                    {item.title}
                  </h3>
                </div>
              </div>

              <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
