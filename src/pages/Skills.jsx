import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiNextdotjs,
  SiRedux,
  SiReactquery,
} from "react-icons/si";

import PageTopic from "../ui/PageTopic";
import SkillCard from "../ui/SkillCard";
import OverallSkills from "../ui/OverallSkills";
import MotivationalSentence from "../ui/MotivationalSentence";
import CertificatesSection from "../ui/CertificatesSection";

export default function Skills() {
  const skillCategories = [
    {
      name: "Front-End Core",
      icon: <FaReact className="text-3xl" />,
      skills: [
        {
          name: "HTML5",
          percent: 99,
          icon: <FaHtml5 className="text-2xl" />,
          color: "text-orange-500",
        },
        {
          name: "CSS3",
          percent: 90,
          icon: <FaCss3Alt className="text-2xl" />,
          color: "text-blue-500",
        },
        {
          name: "JavaScript",
          percent: 99,
          icon: <FaJs className="text-2xl" />,
          color: "text-yellow-500",
        },
        {
          name: "React.js",
          percent: 99,
          icon: <FaReact className="text-2xl" />,
          color: "text-cyan-400",
        },
      ],
    },
    {
      name: "Styling & Frameworks",
      icon: <SiTailwindcss className="text-3xl" />,
      skills: [
        {
          name: "TailwindCSS",
          percent: 90,
          icon: <SiTailwindcss className="text-2xl" />,
          color: "text-cyan-400",
        },
        {
          name: "Bootstrap",
          percent: 70,
          icon: <SiBootstrap className="text-2xl" />,
          color: "text-purple-500",
        },
        {
          name: "Next.js",
          percent: 99,
          icon: <SiNextdotjs className="text-2xl" />,
          color: "text-gray-600 dark:text-gray-400",
        },
        {
          name: "WordPress",
          percent: 80,
          icon: <FaWordpress className="text-2xl" />,
          color: "text-blue-600",
        },
      ],
    },
    {
      name: "State Management & Tools",
      icon: <SiRedux className="text-3xl" />,
      skills: [
        {
          name: "Redux",
          percent: 90,
          icon: <SiRedux className="text-2xl" />,
          color: "text-purple-600",
        },
        {
          name: "React Query",
          percent: 90,
          icon: <SiReactquery className="text-2xl" />,
          color: "text-red-500",
        },
        {
          name: "Git",
          percent: 80,
          icon: <FaGitAlt className="text-2xl" />,
          color: "text-orange-600",
        },
        {
          name: "GitHub",
          percent: 99,
          icon: <FaGithub className="text-2xl" />,
          color: "text-gray-700 dark:text-gray-400",
        },
      ],
    },
  ];

  const overallSkills = [
    { name: "Problem Solving", percent: 80 },
    { name: "Clean Code", percent: 85 },
    { name: "Responsive Design", percent: 90 },
    { name: "Team Work", percent: 75 },
  ];

  return (
    <div className="min-h-screen pb-20 pt-8 px-4 md:px-8 text-grey-0">
      <div className="max-w-[1200px] mx-auto">
        <PageTopic>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            What I<span className="block text-accent-primary mt-2">Can Do</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Here are my technical skills and expertise in web development
          </p>
        </PageTopic>

        <div className="grid lg:grid-cols-2 gap-8">
          <SkillCard category={skillCategories[0]} />
          <SkillCard category={skillCategories[1]} />
          <div className="lg:col-span-2 flex justify-center">
            <div className="w-full lg:w-1/2">
              <SkillCard category={skillCategories[2]} />
            </div>
          </div>
        </div>

        <OverallSkills skills={overallSkills} />

        <CertificatesSection />

        <MotivationalSentence>
          <p className="text-text-primary italic text-lg">
            "Always learning, always growing. Every line of code is a step
            forward."
          </p>
        </MotivationalSentence>
      </div>
    </div>
  );
}
