import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaPaperPlane,
  FaTelegram,
} from "react-icons/fa";
import { useDarkModeShadow } from "../context/DarkModeShadow";

export default function ContactForm() {
  const { darkModeShadow } = useDarkModeShadow();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telegram: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status) setStatus(null);
  };

  const sendToTelegram = async (data) => {
    const message = `📬 *New message from MoDev Portfolio*
    
👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
${data.telegram ? `📱 *Telegram:* ${data.telegram}\n` : ""}💬 *Message:* ${data.message}

🕐 *Time:* ${new Date().toLocaleString("en-US")}`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    return response.ok;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    try {
      const success = await sendToTelegram(formData);

      if (success) {
        setStatus({
          type: "success",
          message: t("contact.successMessage"),
        });
        setFormData({ name: "", email: "", telegram: "", message: "" });

        setTimeout(() => {
          setStatus(null);
        }, 5000);
      } else {
        setStatus({
          type: "error",
          message: t("contact.errorMessage"),
        });

        setTimeout(() => {
          setStatus(null);
        }, 5000);
      }
    } catch {
      setStatus({
        type: "error",
        message: t("contact.connectionError"),
      });

      setTimeout(() => {
        setStatus(null);
      }, 5000);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      className="p-4 sm:p-6 rounded-2xl bg-secondary/30 border border-border relative"
      style={{ boxShadow: darkModeShadow }}
    >
      {status && (
        <div
          className={`fixed top-24 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl shadow-lg animate-slide-down ${
            status.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {status.message}
        </div>
      )}

      <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-6">
        {t("contact.sendMessage")}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-text-secondary text-sm mb-2">
            {t("contact.yourName")}
          </label>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary/50" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSending}
              style={{ boxShadow: darkModeShadow }}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-primary/50 border border-border text-text-primary focus:border-accent-primary focus:outline-none transition-colors disabled:opacity-50"
              placeholder="John Doe"
            />
          </div>
        </div>

        <div>
          <label className="block text-text-secondary text-sm mb-2">
            {t("contact.emailAddress")}
          </label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary/50" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSending}
              style={{ boxShadow: darkModeShadow }}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-primary/50 border border-border text-text-primary focus:border-accent-primary focus:outline-none transition-colors disabled:opacity-50"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-text-secondary text-sm mb-2">
            {t("contact.telegram")}{" "}
            <span className="text-xs opacity-60">
              ({t("contact.optional")})
            </span>
          </label>
          <div className="relative">
            <FaTelegram className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary/50" />
            <input
              type="text"
              name="telegram"
              value={formData.telegram}
              onChange={handleChange}
              disabled={isSending}
              style={{ boxShadow: darkModeShadow }}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-primary/50 border border-border text-text-primary focus:border-accent-primary focus:outline-none transition-colors disabled:opacity-50"
              placeholder="@username"
            />
          </div>
        </div>

        <div>
          <label className="block text-text-secondary text-sm mb-2">
            {t("contact.message")}
          </label>
          <div className="relative">
            <FaComment className="absolute left-3 top-4 text-text-secondary/50" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSending}
              rows="5"
              style={{ boxShadow: darkModeShadow }}
              className="w-full pl-10 pr-4 pt-3 rounded-xl bg-primary/50 border border-border text-text-primary focus:border-accent-primary focus:outline-none transition-colors resize-none disabled:opacity-50"
              placeholder="Your message here..."
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent-primary text-black font-semibold shadow-lg hover:shadow-neon hover:-translate-y-1 transition-all duration-300 group disabled:opacity-50 disabled:hover:translate-y-0"
        >
          {isSending ? (
            t("contact.sending")
          ) : (
            <>
              {t("contact.send")}
              <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
