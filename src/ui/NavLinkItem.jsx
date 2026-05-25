import { NavLink } from "react-router";
import { useState } from "react";

export default function NavLinkItem({ children, path }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavLink to={path}>
      {({ isActive }) => (
        <div
          className="relative text-sm md:text-base font-semibold tracking-wide transition-all duration-300"
          style={{
            color: isActive
              ? "var(--accent-primary)"
              : isHovered
                ? "var(--accent-primary)"
                : "var(--text-secondary)",
            opacity: isActive ? 1 : isHovered ? 0.8 : 1,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {children}
          <span
            className="absolute -bottom-1 left-0 w-full transition-all duration-300"
            style={{
              backgroundColor: "var(--accent-primary)",
              height: isActive ? "2px" : isHovered ? "1px" : "0px",
              transform: isActive || isHovered ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: isActive || isHovered ? "left" : "right",
            }}
          />
        </div>
      )}
    </NavLink>
  );
}
