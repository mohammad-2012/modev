import CertificateCard from "./CertificateCard";

export default function CertificatesSection() {
  const certificates = [
    {
      id: 1,
      title: "HTML & CSS Certificate",
      date: "2024",
      thumbnailSrc: "../../public/Documents/html-css.jpeg",
      imageSrc: "../../public/Documents/html-css.jpeg",
    },
    {
      id: 2,
      title: "CSS Advanced Certificate",
      date: "2024",
      thumbnailSrc: "../../public/Documents/css.jpeg",
      imageSrc: "../../public/Documents/css.jpeg",
    },
    {
      id: 3,
      title: "UI/UX Design Certificate",
      date: "2023",
      thumbnailSrc: "../../public/Documents/ui-ux.jpeg",
      imageSrc: "../../public/Documents/ui-ux.jpeg",
    },
    {
      id: 4,
      title: "Cybersecurity & Hacking Certificate",
      date: "2023",
      thumbnailSrc: "../../public/Documents/hack.jpeg",
      imageSrc: "../../public/Documents/hack.jpeg",
    },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
        My Certificates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((cert) => (
          <CertificateCard key={cert.id} certificate={cert} />
        ))}
      </div>
    </div>
  );
}
