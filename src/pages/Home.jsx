import HeroContent from "../ui/HeroContent";
import HeroImage from "../ui/HeroImage";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Skills from "./Skills";

export default function Home() {
  return (
    <>
      <div className="min-h-[calc(100vh-120px)] flex items-center justify-center px-6   pb-3 md:pb-20 text-grey-0 pt-26 md:pt-0">
        <div className="max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <HeroContent />
          <HeroImage />
        </div>
      </div>

      <AboutMe />
      <Skills />
      <Contact />
    </>
  );
}
