import { FaGithub, FaTelegram, FaInstagram, FaEnvelope } from "react-icons/fa";

const iconMap = {
  github: FaGithub,
  telegram: FaTelegram,
  instagram: FaInstagram,
  email: FaEnvelope,
};

export default function SocialLink({ href, icon, label, isEmail = false }) {
  const IconComponent = iconMap[icon];

  return (
    <a
      href={href}
      target="_blank"
      rel={isEmail ? undefined : "noopener noreferrer"}
      className="group text-grey-0 relative flex items-center gap-3 bg-gradient-to-br from-secondary/80 to-secondary/40 backdrop-blur-sm border border-border text-text-secondary hover:text-text-secondary transition-all duration-500 text-2xl px-5 py-2.5 rounded-xl shadow-[0_8px_20px_-6px_rgba(0,0,0,0.2)] dark:shadow-[0_0_12px_rgba(255,255,255,0.15),0_8px_20px_-6px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_25px_-8px_var(--accent-primary)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.2),0_15px_30px_-8px_var(--accent-primary),0_0_15px_rgba(0,255,170,0.3)] hover:-translate-y-1 w-[160px]"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <IconComponent className="drop-shadow-md relative z-10" />
      <span className="text-sm font-semibold tracking-wide text-text-secondary group-hover:text-text-secondary transition-colors duration-300 relative z-10">
        {label}
      </span>
    </a>
  );
}
