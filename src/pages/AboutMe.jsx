import { useTranslation } from "react-i18next";
import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiWordpress,
  SiJavascript,
  SiReactquery,
} from "react-icons/si";
import { DiCss3, DiHtml5 } from "react-icons/di";
import PageTopic from "../ui/PageTopic";
import PersonalInfoSection from "../ui/PersonalInfoSection";
import MyJourneySection from "../ui/MyJourneySection";
import MySkillSectionOfAboutMe from "../ui/MySkillSectionOfAboutMe";
import MotivationalSentence from "../ui/MotivationalSentence";
import Timeline from "../ui/Timeline";

export default function AboutMe() {
  const { t } = useTranslation();

  const skills = [
    {
      name: "HTML5",
      icon: <DiHtml5 className="text-3xl" />,
      color: "hover:text-orange-500",
    },
    {
      name: "CSS3",
      icon: <DiCss3 className="text-3xl" />,
      color: "hover:text-blue-500",
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="text-3xl" />,
      color: "hover:text-cyan-400",
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-3xl" />,
      color: "hover:text-purple-500",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-3xl" />,
      color: "hover:text-yellow-500",
    },
    {
      name: "React.js",
      icon: <FaReact className="text-3xl" />,
      color: "hover:text-cyan-400",
    },
    {
      name: "React Query",
      icon: <SiReactquery className="text-3xl" />,
      color: "hover:text-red-500",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-3xl" />,
      color: "hover:text-gray-400",
    },
    {
      name: "Redux",
      icon: <SiRedux className="text-3xl" />,
      color: "hover:text-purple-600",
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-3xl" />,
      color: "hover:text-orange-600",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-3xl" />,
      color: "hover:text-gray-400",
    },
    {
      name: "WordPress",
      icon: <SiWordpress className="text-3xl" />,
      color: "hover:text-blue-600",
    },
  ];

  return (
    <div className="min-h-screen pb-20 pt-8 px-4 md:px-8 text-grey-0">
      <div className="max-w-[1200px] mx-auto">
        <PageTopic>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            {t("aboutMe.title")}
            <span className="block text-accent-primary mt-2">
              {t("aboutMe.subtitle")}
            </span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {t("aboutMe.description")}
          </p>
        </PageTopic>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <PersonalInfoSection />
            <MyJourneySection />
          </div>
          <MySkillSectionOfAboutMe skills={skills} />
        </div>

        <Timeline />

        <MotivationalSentence>
          <p className="text-text-primary italic text-lg">
            "{t("aboutMe.quote")}"
          </p>
          <p className="text-text-secondary text-sm mt-2">
            {t("aboutMe.quoteAuthor")}
          </p>
        </MotivationalSentence>
      </div>
    </div>
  );
}
