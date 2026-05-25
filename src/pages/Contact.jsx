import {
  FaTelegram,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import PageTopic from "../ui/PageTopic";
import ContactInfo from "../ui/ContactInfo";
import ContactForm from "../ui/ContactForm";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+98 914 821 1044",
      link: "tel:09148211044",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "mohammad1391akbari0@gmail.com",
      link: "mailto:mohammad1391akbari0@gmail.com",
    },
    {
      icon: <FaTelegram />,
      title: "Telegram",
      value: "@mohammad_dev_2012",
      link: "https://t.me/mohammad_dev_2012",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "mohammad-2012",
      link: "https://github.com/mohammad-2012",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Meshgin Shahr, Iran",
      link: null,
    },
    {
      icon: <FaClock />,
      title: "Response Time",
      value: "In less than 24 hours",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaTelegram />,
      url: "https://t.me/mohammad_dev_2012",
      label: "Telegram",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/mohammad-2012",
      label: "GitHub",
    },
  ];

  return (
    <div className="min-h-screen pb-20 pt-8 px-4 md:px-8 text-grey-0">
      <div className="max-w-[1200px] mx-auto">
        <PageTopic>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Get In
            <span className="block text-accent-primary mt-2">Touch</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </PageTopic>

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          <ContactInfo contactInfo={contactInfo} socialLinks={socialLinks} />
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
