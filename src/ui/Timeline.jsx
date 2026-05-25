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

  const timelineData = [
    {
      year: "2024 (Oct)",
      title: "Started with WordPress",
      description:
        "Began my journey with WordPress, learning how to build websites easily.",
      icon: <FaWordpress />,
    },
    {
      year: "2025 (Jan)",
      title: "Switched to Programming",
      description:
        "Found my true passion in coding. Started learning HTML, CSS, and Bootstrap deeply.",
      icon: <FaCode />,
    },
    {
      year: "2025 (Jun)",
      title: "JavaScript & TailwindCSS",
      description:
        "Mastered JavaScript, TailwindCSS, and responsive design principles.",
      icon: <FaLaptopCode />,
    },
    {
      year: "2025 (Dec)",
      title: "React.js & Modern Frameworks",
      description:
        "Started learning React.js, Next.js, Redux, and React Query. Building dynamic web apps.",
      icon: <FaRocket />,
    },
    {
      year: "2026 - 2027",
      title: "Full-Stack Journey",
      description:
        "Learning Node.js, Express, and databases. Moving toward Full-Stack Development.",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <div
      className="rounded-2xl p-10 border border-border transition-all duration-300 mt-10"
      style={{ boxShadow: darkModeShadow }}
    >
      <h2 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-2">
        <FaAward className="text-accent-primary" />
        My Journey Timeline
      </h2>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent-primary to-accent-secondary"></div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col ${
              index % 2 === 0 ? "items-start" : "items-end"
            } mb-8 last:mb-0`}
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-primary rounded-full border-4 border-border z-10"></div>

            <div
              style={{ boxShadow: darkModeShadow }}
              className={`
              w-[45%] p-5 rounded-xl bg-secondary/30 border border-border 
              transition-all duration-500 hover:scale-105 cursor-pointer
               ${
                 index % 2 === 0
                   ? "mr-auto ml-0 hover:translate-x-4"
                   : "ml-auto mr-0 hover:-translate-x-4"
               }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary text-xl">
                  {item.icon}
                </div>
                <div>
                  <span className="text-accent-primary font-bold text-lg">
                    {item.year}
                  </span>
                  <h3 className="text-text-primary font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
