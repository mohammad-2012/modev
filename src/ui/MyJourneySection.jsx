import { FaRocket } from "react-icons/fa";
import { useDarkModeShadow } from "../context/DarkModeShadow";

export default function MyJourneySection() {
  const { darkModeShadow } = useDarkModeShadow();

  return (
    <div
      className="bg-secondary/30 rounded-2xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      style={{ boxShadow: darkModeShadow }}
    >
      <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
        <FaRocket className="text-accent-primary" />
        My Journey
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        I started my programming journey{" "}
        <span className="text-accent-primary font-semibold">1.5 years ago</span>{" "}
        at the age of 12. It was a challenging path filled with obstacles, but
        my passion for coding kept me going.
      </p>
      <p className="text-text-secondary leading-relaxed">
        Today, I'm proud to say that I've overcome those difficulties and become
        a
        <span className="text-accent-primary font-semibold">
          {" "}
          Front-End Developer
        </span>{" "}
        with strong skills in modern web technologies. I'm now on an exciting
        journey toward becoming a{" "}
        <span className="text-accent-primary font-semibold">
          Full-Stack Developer
        </span>
        .
      </p>
    </div>
  );
}
