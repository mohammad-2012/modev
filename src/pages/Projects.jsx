import { useEffect, useState } from "react";
import {
  FaReact,
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaMobileAlt,
  FaDesktop,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiJavascript,
} from "react-icons/si";
import PageTopic from "../ui/PageTopic";
import MotivationalSentence from "../ui/MotivationalSentence";
import { useDarkModeShadow } from "../context/DarkModeShadow";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const { darkModeShadow } = useDarkModeShadow();
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/comingSoon");
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce website with shopping cart, product filtering, and payment gateway integration.",
      image: "https://picsum.photos/id/20/400/250",
      tags: ["React.js", "Redux", "TailwindCSS"],
      icons: [<FaReact />, <SiRedux />, <SiTailwindcss />],
      category: "fullstack",
      github: "https://github.com/",
      demo: "https://example.com",
      features: ["Shopping Cart", "Product Filtering", "Responsive Design"],
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing skills, projects, and certifications with dark/light mode.",
      image: "https://picsum.photos/id/30/400/250",
      tags: ["React.js", "TailwindCSS", "React Router"],
      icons: [<FaReact />, <SiTailwindcss />, <FaMobileAlt />],
      category: "frontend",
      github: "https://github.com/",
      demo: "https://example.com",
      features: ["Dark/Light Mode", "Responsive", "Animations"],
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A task manager with drag-and-drop functionality, local storage, and real-time updates.",
      image: "https://picsum.photos/id/26/400/250",
      tags: ["React.js", "JavaScript", "TailwindCSS"],
      icons: [<FaReact />, <SiJavascript />, <SiTailwindcss />],
      category: "frontend",
      github: "https://github.com/",
      demo: "https://example.com",
      features: ["Drag & Drop", "Local Storage", "Task Filters"],
    },
    {
      id: 4,
      title: "Weather App",
      description:
        "Weather application with API integration, showing current weather and 5-day forecast.",
      image: "https://picsum.photos/id/29/400/250",
      tags: ["React.js", "API Integration", "TailwindCSS"],
      icons: [<FaReact />, <FaCode />, <SiTailwindcss />],
      category: "frontend",
      github: "https://github.com/",
      demo: "https://example.com",
      features: ["API Integration", "Geolocation", "5-day Forecast"],
    },
    {
      id: 5,
      title: "Blog Platform",
      description:
        "Full-stack blog platform with user authentication, comments, and markdown support.",
      image: "https://picsum.photos/id/22/400/250",
      tags: ["Next.js", "TailwindCSS", "MongoDB"],
      icons: [<SiNextdotjs />, <SiTailwindcss />, <FaDesktop />],
      category: "fullstack",
      github: "https://github.com/",
      demo: "https://example.com",
      features: ["User Auth", "Markdown", "Comments"],
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "frontend", name: "Front-End" },
    { id: "fullstack", name: "Full-Stack" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen pb-20 pt-8 px-4 md:px-8 text-grey-0">
      <div className="max-w-[1200px] mx-auto">
        <PageTopic>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            My
            <span className="block text-accent-primary mt-2">Projects</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Here are some of my best works. Each project is built with passion
            and modern technologies.
          </p>
        </PageTopic>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                filter === cat.id
                  ? "bg-accent-primary text-white shadow-lg"
                  : "bg-secondary/30 text-text-secondary hover:bg-secondary/50 border border-border"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-secondary/30 border border-border overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              style={{ boxShadow: darkModeShadow }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4 gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-accent-primary transition-all duration-300"
                  >
                    <FaGithub className="text-white text-xl" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-accent-primary transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="text-white text-lg" />
                  </a>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  {project.icons.map((icon, i) => (
                    <span key={i} className="text-accent-primary text-sm">
                      {icon}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {project.title}
                </h3>

                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-accent-primary/10 rounded-full text-xs text-accent-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-border">
                  <div className="flex items-center justify-between text-xs text-text-secondary">
                    <span className="flex items-center gap-1">
                      <FaCode className="text-accent-primary" />
                      {project.features.length} features
                    </span>
                    <span className="text-accent-primary">View Details →</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <MotivationalSentence>
          <p className="text-text-primary italic text-lg">
            "Code is like humor. When you have to explain it, it's not that
            good."
          </p>
          <p className="text-text-secondary text-sm mt-2">
            - Keep building, keep improving -
          </p>
        </MotivationalSentence>
      </div>
    </div>
  );
}
