import { useDarkModeShadow } from "../context/DarkModeShadow";

export default function MotivationalSentence({ children }) {
  const { darkModeShadow } = useDarkModeShadow();

  return (
    <div className="mt-14 text-center">
      <div
        className="inline-block p-6 rounded-2xl bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 border border-border max-w-2xl mx-auto transition-all duration-500 hover:scale-105"
        style={{ boxShadow: darkModeShadow }}
      >
        {children}
      </div>
    </div>
  );
}
