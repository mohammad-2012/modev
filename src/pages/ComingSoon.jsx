import { useDarkModeShadow } from "../context/DarkModeShadow";
import { FaTools, FaTelegram } from "react-icons/fa";

export default function ComingSoon() {
  const { darkModeShadow } = useDarkModeShadow();

  return (
    <div className="h-dvh flex items-center justify-center px-4 text-grey-0">
      <div className="max-w-2xl mx-auto text-center">
        <div
          className="mb-8 p-8 rounded-full bg-secondary/30 border border-border inline-flex items-center justify-center animate-bounce"
          style={{ boxShadow: darkModeShadow }}
        >
          <FaTools className="text-6xl text-accent-primary" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-accent-primary mb-4">
          Coming Soon
        </h1>

        <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mb-6 rounded-full"></div>

        <p className="text-text-secondary text-lg md:text-xl mb-8">
          This section is under development. <br />
          I'm working hard to bring something amazing for you!
        </p>

        <p className="text-text-secondary/70 text-sm mb-8">
          Due to the blocking of sites like Vercel & GitHub, this section will
          be completed soon.
        </p>

        <div className="flex justify-center gap-3 mb-8">
          <div className="w-3 h-3 rounded-full bg-accent-primary animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-accent-primary animate-pulse delay-150"></div>
          <div className="w-3 h-3 rounded-full bg-accent-primary animate-pulse delay-300"></div>
        </div>

        <div className="mt-6">
          <a
            href="https://t.me/mohammad_dev_2012"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-text-secondary hover:text-accent-primary hover:bg-accent-primary/20 transition-all duration-300"
          >
            <FaTelegram className="text-accent-primary" />
            <span>@mohammad_dev_2012</span>
          </a>
        </div>
      </div>
    </div>
  );
}
