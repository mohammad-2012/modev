export default function SkillOfAboutMe({ skill }) {
  return (
    <div
      className={`group flex flex-col items-center gap-2 p-4 rounded-xl bg-primary/50 border border-border transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer ${skill.color}`}
    >
      <div className="text-text-secondary group-hover:text-accent-primary transition-colors duration-300">
        {skill.icon}
      </div>
      <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-300">
        {skill.name}
      </span>
    </div>
  );
}
