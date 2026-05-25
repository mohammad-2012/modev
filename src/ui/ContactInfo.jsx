import { useDarkModeShadow } from "../context/DarkModeShadow";

export default function ContactInfo({ contactInfo, socialLinks }) {
  const { darkModeShadow } = useDarkModeShadow();

  return (
    <div className="lg:col-span-1 space-y-4">
      {contactInfo.map((info, index) => (
        <div
          key={index}
          className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          style={{ boxShadow: darkModeShadow }}
        >
          <div className="w-10 h-10 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary text-lg">
            {info.icon}
          </div>
          <div>
            <h3 className="text-text-secondary text-xs uppercase tracking-wide">
              {info.title}
            </h3>
            {info.link ? (
              <a
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="text-text-primary font-medium text-sm hover:text-accent-primary transition-colors"
              >
                {info.value}
              </a>
            ) : (
              <p className="text-text-primary font-medium text-sm">
                {info.value}
              </p>
            )}
          </div>
        </div>
      ))}

      <div className="p-4 rounded-xl bg-secondary/30 border border-border">
        <h3 className="text-text-secondary text-xs uppercase tracking-wide mb-3 text-center">
          Follow Me
        </h3>
        <div className="flex justify-center gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/20 text-accent-primary transition-all duration-300 hover:scale-105 hover:bg-accent-primary hover:text-grey-0 group"
            >
              <span className="text-xl">{social.icon}</span>
              <span className="text-sm font-medium">{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
