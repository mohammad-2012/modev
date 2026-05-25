import { useDarkModeShadow } from "../context/DarkModeShadow";

export default function SkillCard({ category }) {
  const { darkModeShadow } = useDarkModeShadow();

  return (
    <div
      className="bg-secondary/30 rounded-2xl p-6 border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ boxShadow: darkModeShadow }}
    >
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
        <div className="w-12 h-12 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary">
          {category.icon}
        </div>
        <h2 className="text-xl font-bold text-text-primary">{category.name}</h2>
      </div>

      <div className="space-y-5">
        {category.skills.map((skill, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span
                  className={`${skill.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  {skill.icon}
                </span>
                <span className="text-text-primary font-medium text-sm">
                  {skill.name}
                </span>
              </div>
              <span className="text-accent-primary text-sm font-semibold">
                {skill.percent}%
              </span>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out group-hover:opacity-80"
                style={{
                  width: `${skill.percent}%`,
                  backgroundColor: "var(--accent-primary)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
