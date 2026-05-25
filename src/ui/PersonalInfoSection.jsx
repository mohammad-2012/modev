import { useTranslation } from "react-i18next";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaHeart,
} from "react-icons/fa";
import { useDarkModeShadow } from "../context/DarkModeShadow";

export default function PersonalInfoSection() {
  const { darkModeShadow } = useDarkModeShadow();
  const { t } = useTranslation();

  return (
    <div
      className="bg-secondary/30 rounded-2xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      style={{ boxShadow: darkModeShadow }}
    >
      <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
        <FaHeart className="text-accent-primary" />
        {t("aboutMe.personalInfo")}
      </h2>

      <div className="space-y-4">
        <div className="flex items-center gap-3 text-text-secondary group cursor-pointer">
          <FaGraduationCap className="text-accent-primary text-xl group-hover:scale-110 transition-transform duration-300" />
          <span className="font-medium">Mohammad Akbari</span>
        </div>

        <div className="flex items-center gap-3 text-text-secondary group cursor-pointer">
          <FaCalendarAlt className="text-accent-primary text-xl group-hover:scale-110 transition-transform duration-300" />
          <span>Born in 2012 (14 years old)</span>
        </div>

        <div className="flex items-center gap-3 text-text-secondary group cursor-pointer">
          <FaMapMarkerAlt className="text-accent-primary text-xl group-hover:scale-110 transition-transform duration-300" />
          <span>Meshgin Shahr, Ardabil, Iran</span>
        </div>
      </div>
    </div>
  );
}
