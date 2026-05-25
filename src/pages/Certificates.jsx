import { useDarkModeShadow } from "../context/DarkModeShadow";
import CertificateCard from "../ui/CertificateCard";

export default function Certificates() {
  const { darkModeShadow } = useDarkModeShadow();

  const certificates = [
    {
      id: 1,
      title: "React.js - The Complete Guide",
      date: "2024",
      thumbnailSrc: "../../public/Documents/html-css.jpeg",
      imageSrc: "../../public/Documents/html-css.jpeg",
    },
    {
      id: 2,
      title: "JavaScript Advanced Concepts",
      date: "2024",
      thumbnailSrc: "../../public/Documents/css.jpeg",
      imageSrc: "../../public/Documents/css.jpeg",
    },
    {
      id: 3,
      title: "TailwindCSS Mastery",
      date: "2023",
      thumbnailSrc: "../../public/Documents/ui-ux.jpeg",
      imageSrc: "../../public/Documents/ui-ux.jpeg",
    },
    {
      id: 4,
      title: "Front-End Development",
      date: "2023",
      thumbnailSrc: "../../public/Documents/hack.jpeg",
      imageSrc: "../../public/Documents/hack.jpeg",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-medium mb-6 backdrop-blur-sm border border-accent-primary/20">
            📜 My Certificates 📜
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            My
            <span className="block text-accent-primary mt-2">Certificates</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Professional certifications and courses I've completed
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>

        <div
          className="mt-12 text-center p-6 rounded-2xl bg-secondary/30 border border-border transition-all duration-500 hover:scale-[1.02]"
          style={{ boxShadow: darkModeShadow }}
        >
          <p className="text-text-secondary text-sm">
            🎓 Always learning, always growing. More certifications coming soon!
          </p>
        </div>
      </div>
    </div>
  );
}
