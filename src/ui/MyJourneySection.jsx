import { useTranslation } from "react-i18next";
import { FaRocket } from "react-icons/fa";
import { useDarkModeShadow } from "../context/DarkModeShadow";

export default function MyJourneySection() {
  const { darkModeShadow } = useDarkModeShadow();
  const { t } = useTranslation();

  return (
    <div
      className="bg-secondary/30 rounded-2xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      style={{ boxShadow: darkModeShadow }}
    >
      <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
        <FaRocket className="text-accent-primary" />
        {t("aboutMe.myJourney")}
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        {t("myJourney.text1")}
        <span className="text-accent-primary font-semibold">
          {t("myJourney.highlight1")}
        </span>
        {t("myJourney.text1_2")}
      </p>
      <p className="text-text-secondary leading-relaxed">
        {t("myJourney.text2")}
        <span className="text-accent-primary font-semibold">
          {t("myJourney.highlight2")}
        </span>
        {t("myJourney.text2_2")}
        <span className="text-accent-primary font-semibold">
          {t("myJourney.highlight3")}
        </span>
        {t("myJourney.text2_3")}
      </p>
    </div>
  );
}
