// import Logo from "./Logo";
// import SocialLink from "./SocialLink";
// import CopyrightText from "./CopyrightText";
// import MadeWithHeart from "./MadeWithHeart";
// import ScrollToTopButton from "./ScrollToTopButton";
// import FooterLink from "./FooterLink";
// import { useDarkModeShadow } from "../context/DarkModeShadow";

// export default function Footer() {
//   const { isDarkMode } = useDarkModeShadow();

//   return (
//     <footer
//       className="bg-secondary border-t border-border py-8 mt-auto text-grey-0"
//       style={{
//         boxShadow: isDarkMode
//           ? "0 4px 25px rgba(0, 255, 170, 0.636), 0 5px 8px rgba(0, 0, 0, 0.388)"
//           : "0 4px 25px rgba(0, 180, 216, 0.526), 0 2px 5px rgba(0, 0, 0, 0.05)",
//       }}
//     >
//       <div className="max-w-[1200px] mx-auto px-8">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//           <div className="text-center md:text-left">
//             <Logo size="h-14" />
//             <p className="text-sm text-text-secondary mt-4 font-mono">
//               &lt;Front-End Developer /&gt;
//             </p>
//           </div>

//           <div className="grid grid-cols-3 gap-2 min-w-[200px]">
//             <FooterLink to="/home">Home</FooterLink>
//             <FooterLink to="/about-me">About</FooterLink>
//             <FooterLink to="/skills">Skills</FooterLink>
//             <FooterLink to="/projects">Projects</FooterLink>
//             <FooterLink to="/contact">Contact</FooterLink>
//           </div>

//           <div className="flex flex-col gap-3">
//             <div className="flex gap-4 justify-end">
//               <SocialLink
//                 href="https://github.com/mohammad-2012"
//                 icon="github"
//                 label="GitHub"
//               />
//               <SocialLink
//                 href="https://t.me/mohammad_dev_2012"
//                 icon="telegram"
//                 label="Telegram"
//               />
//             </div>

//             <div className="flex gap-4 justify-end">
//               <SocialLink
//                 href="https://instagram.com/"
//                 icon="instagram"
//                 label="Instagram"
//               />
//               <SocialLink
//                 href="mailto:mohammad1391akbari0@gmail.com"
//                 icon="email"
//                 label="Email"
//                 isEmail={true}
//               />
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 pt-6 border-t border-border">
//           <CopyrightText />
//           <MadeWithHeart />
//         </div>
//       </div>

//       <ScrollToTopButton />
//     </footer>
//   );
// }

import Logo from "./Logo";
import SocialLink from "./SocialLink";
import CopyrightText from "./CopyrightText";
import MadeWithHeart from "./MadeWithHeart";
import ScrollToTopButton from "./ScrollToTopButton";
import FooterLink from "./FooterLink";
import { useDarkModeShadow } from "../context/DarkModeShadow";

export default function Footer() {
  const { isDarkMode } = useDarkModeShadow();

  return (
    <footer
      className="bg-secondary border-t border-border py-6 md:py-8 mt-auto text-grey-0"
      style={{
        boxShadow: isDarkMode
          ? "0 4px 25px rgba(0, 255, 170, 0.636), 0 5px 8px rgba(0, 0, 0, 0.388)"
          : "0 4px 25px rgba(0, 180, 216, 0.526), 0 2px 5px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Logo size="h-14" />
            <p className="text-sm text-text-secondary mt-4 font-mono">
              &lt;Front-End Developer /&gt;
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 min-w-[200px]">
            <FooterLink to="/home">Home</FooterLink>
            <FooterLink to="/about-me">About</FooterLink>
            <FooterLink to="/skills">Skills</FooterLink>
            <FooterLink to="/projects">
              <span className="sm:hidden">Proj.</span>
              <span className="hidden sm:inline">Projects</span>
            </FooterLink>
            <FooterLink to="/contact">
              <span className="sm:hidden">Cont.</span>
              <span className="hidden sm:inline">Contact</span>
            </FooterLink>
          </div>

          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex gap-4 justify-end">
              <SocialLink
                href="https://github.com/mohammad-2012"
                icon="github"
                label="GitHub"
              />
              <SocialLink
                href="https://t.me/mohammad_dev_2012"
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
                href="mailto:mohammad1391akbari0@gmail.com"
                icon="email"
                label="Email"
                isEmail={true}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 mt-6 md:mt-8 pt-4 md:pt-6 border-t border-border">
          <CopyrightText />
          <MadeWithHeart />
        </div>
      </div>

      <ScrollToTopButton />
    </footer>
  );
}
