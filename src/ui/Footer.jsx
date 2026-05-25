import Logo from "./Logo";
import SocialLink from "./SocialLink";
import CopyrightText from "./CopyrightText";
import MadeWithHeart from "./MadeWithHeart";
import ScrollToTopButton from "./ScrollToTopButton";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border py-8 mt-auto">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Logo />
            <p className="text-sm  text-grey-0 text-text-secondary mt-4 font-mono">
              &lt;Front-End Developer /&gt;
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 min-w-[200px]">
            <FooterLink to="/home">Home</FooterLink>
            <FooterLink to="/about-me">About</FooterLink>
            <FooterLink to="/skills">Skills</FooterLink>
            <FooterLink to="/projects">Projects</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-4 justify-end">
              <SocialLink
                href="https://github.com/"
                icon="github"
                label="GitHub"
              />
              <SocialLink
                href="https://t.me/"
                icon="telegram"
                label="Telegram"
              />
            </div>

            <div className="flex gap-4 justify-end">
              <SocialLink
                href="https://instagram.com/"
                icon="instagram"
                label="Instagram"
              />
              <SocialLink
                href="mailto:mo@example.com"
                icon="email"
                label="Email"
                isEmail={true}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 pt-6 border-t border-border">
          <CopyrightText />
          <MadeWithHeart />
        </div>
      </div>

      <ScrollToTopButton />
    </footer>
  );
}
