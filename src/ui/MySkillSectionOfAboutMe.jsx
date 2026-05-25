import { useTranslation } from "react-i18next";
import { FaLaptopCode } from "react-icons/fa";
import SkillOfAboutMe from "./SkillOfAboutMe";
import { useDarkModeShadow } from "../context/DarkModeShadow";

export default function MySkillSectionOfAboutMe({ skills }) {
  const { darkModeShadow } = useDarkModeShadow();
  const { t } = useTranslation();

  return (
    <div
      className="bg-secondary/30 rounded-2xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      style={{ boxShadow: darkModeShadow }}
    >
      <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
        <FaLaptopCode className="text-accent-primary" />
        {t("aboutMe.mySkills")}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <SkillOfAboutMe skill={skill} key={index} />
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <p className="text-text-secondary text-center">
          <span className="text-accent-primary font-semibold">
            {t("aboutMe.currently")}
          </span>{" "}
          {t("aboutMe.movingTo")}
        </p>
      </div>
    </div>
  );
}
