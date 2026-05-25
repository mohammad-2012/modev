import { useState } from "react";
import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from "react-icons/fa";
import { useDarkModeShadow } from "../context/DarkModeShadow";

export default function ContactForm() {
  const { darkModeShadow } = useDarkModeShadow();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
💬 *Message:* ${data.message}

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
          message: "✅ Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: "❌ Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "❌ Connection error. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      className="p-6 rounded-2xl bg-secondary/30 border border-border"
      style={{ boxShadow: darkModeShadow }}
    >
      <h2 className="text-2xl font-bold text-text-primary mb-6">
        Send Me a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-text-secondary text-sm mb-2">
            Your Name
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
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-primary/50 border border-border text-text-primary focus:border-accent-primary focus:outline-none transition-colors disabled:opacity-50"
              placeholder="John Doe"
            />
          </div>
        </div>

        <div>
          <label className="block text-text-secondary text-sm mb-2">
            Email Address
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
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-primary/50 border border-border text-text-primary focus:border-accent-primary focus:outline-none transition-colors disabled:opacity-50"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-text-secondary text-sm mb-2">
            Message
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
              className="w-full pl-10 pr-4 pt-3 rounded-xl bg-primary/50 border border-border text-text-primary focus:border-accent-primary focus:outline-none transition-colors resize-none disabled:opacity-50"
              placeholder="Your message here..."
            />
          </div>
        </div>

        {status && (
          <div
            className={`text-sm text-center py-2 rounded-lg ${
              status.type === "success"
                ? "text-green-500 bg-green-500/10"
                : "text-red-500 bg-red-500/10"
            }`}
          >
            {status.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSending}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent-primary text-white font-semibold shadow-lg hover:shadow-neon hover:-translate-y-1 transition-all duration-300 group disabled:opacity-50 disabled:hover:translate-y-0"
        >
          {isSending ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
