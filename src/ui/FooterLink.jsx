import {
  FaArrowRight,
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDarkModeShadow } from "../context/DarkModeShadow";

const iconMap = {
  "/home": FaHome,
  "/about-me": FaUser,
  "/skills": FaCode,
  "/projects": FaProjectDiagram,
  "/contact": FaEnvelope,
};

export default function FooterLink({ to, children }) {
  const Icon = iconMap[to];
  const { darkModeShadow } = useDarkModeShadow();

  return (
    <NavLink
      to={to}
      style={{ boxShadow: darkModeShadow }}
      className={({ isActive }) =>
        `group  text-grey-0  flex items-center justify-between gap-3 px-4 py-2 transition-all duration-300 font-medium rounded-xl w-full ${
          isActive
            ? "text-accent-primary bg-accent-primary/10 shadow-[0_10px_25px_-5px_rgba(0,180,216,0.4),0_8px_10px_-6px_rgba(0,180,216,0.2),inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-[0_10px_25px_-5px_rgba(0,255,170,0.3),0_8px_10px_-6px_rgba(0,255,170,0.15),inset_0_1px_0_0_rgba(255,255,255,0.05)]"
            : "text-text-secondary hover:text-accent-primary hover:bg-secondary/50 hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.15),0_4px_6px_-4px_rgba(0,0,0,0.05),inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:hover:shadow-[0_10px_20px_-5px_rgba(0,255,170,0.2),0_4px_6px_-4px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.03)]"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <div className="flex items-center gap-3">
            {Icon && (
              <Icon
                size={16}
                className={`transition-all duration-300 ${
                  isActive
                    ? "text-accent-primary"
                    : "text-text-secondary group-hover:text-accent-primary"
                }`}
              />
            )}
            <span
              className={
                isActive
                  ? "translate-x-1"
                  : "group-hover:translate-x-1 transition-transform duration-300"
              }
            >
              {children}
            </span>
          </div>
          <FaArrowRight
            size={14}
            className={`transition-all duration-300 ${
              isActive
                ? "opacity-100 translate-x-0 text-accent-primary"
                : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-accent-primary"
            }`}
          />
        </>
      )}
    </NavLink>
  );
}
