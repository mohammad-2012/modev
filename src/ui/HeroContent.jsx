import Typewriter from "typewriter-effect";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaRegPaperPlane,
} from "react-icons/fa";

export default function HeroContent() {
  return (
    <div className="flex-1 text-center lg:text-left">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
        Hi, I'm
        <span className="block text-accent-primary mt-2">Mohammad Akbari</span>
      </h1>

      <div className="text-xl md:text-2xl text-text-secondary mb-6 h-20">
        <Typewriter
          options={{
            strings: [
              "< Front-End Developer />",
              "Proficient in React.js & Next.js",
              "< A Professional programmer />",
            ],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
            pauseFor: 2000,
          }}
        />
      </div>

      <p className="text-text-secondary/80 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
        I'm a front-end developer passionate about building beautiful and
        efficient user experiences. With React, Next.js, and modern web tools, I
        turn ideas into reality.
      </p>

      <div className="flex gap-4 justify-center lg:justify-start">
        <button
          className="px-6 py-3 rounded-full bg-accent-primary font-semibold shadow-lg hover:shadow-neon hover:-translate-y-1 transition-all duration-300"
          style={{ color: "#000000" }}
        >
          View Projects
        </button>

        <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-border text-text-secondary font-semibold hover:bg-secondary/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
          <FaRegPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          Contact Me
        </button>
      </div>

      <div className="flex gap-5 justify-center lg:justify-start mt-8">
        <SocialIcon href="https://github.com/" icon={<FaGithub />} />
        <SocialIcon href="https://linkedin.com/" icon={<FaLinkedin />} />
        <SocialIcon href="https://twitter.com/" icon={<FaTwitter />} />
        <SocialIcon href="mailto:mo@example.com" icon={<FaEnvelope />} />
      </div>
    </div>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-text-secondary hover:text-accent-primary transition-all duration-300 text-xl hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}
