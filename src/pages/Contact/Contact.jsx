import { useState } from "react";
import { Send, MapPin, Mail, MessageSquare, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "motsieashley31@gmail.com",
    blurb: "Best for project inquiries",
    href: "mailto:motsieashley31@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Rustenburg, North West, ZA",
    blurb: "Open to remote worldwide",
    href: "https://www.google.com/maps/place/Rustenburg",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/KodEx-SA",
    blurb: "See my open source work",
    href: "https://github.com/KodEx-SA",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ashley-motsie",
    blurb: "Professional networking",
    href: "https://linkedin.com/in/ashley-motsie",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) { tempErrors.name = "Name is required"; isValid = false; }
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required"; isValid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      tempErrors.email = "Email is invalid"; isValid = false;
    }
    if (!formData.subject.trim()) { tempErrors.subject = "Subject is required"; isValid = false; }
    if (!formData.message.trim()) { tempErrors.message = "Message is required"; isValid = false; }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus("Please fill in all required fields correctly.");
      return;
    }
    if (!import.meta.env.VITE_WEB3FORMS_KEY) {
      setStatus("Error: Web3Forms access key is missing. Please contact the site owner.");
      return;
    }

    setLoading(true);
    setStatus(null);
    setErrors({});

    const data = {
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
      name: formData.name,
      email: formData.email,
      subject: formData.subject || "New Contact Form Submission",
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("Your message was sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus(result.message || "Error sending message. Please try again.");
      }
    } catch (error) {
      setStatus("Network error. Please check your connection and try again.");
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--ink)] placeholder:text-[var(--ink-faint)] focus:outline-none focus:border-[var(--accent)] transition-colors text-sm";

  return (
    <main className="bg-[var(--bg)] text-[var(--ink)] min-h-screen py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <span className="eyebrow">{"// contact"}</span>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
          Let's work together
        </h1>
        <p className="mt-3 text-[var(--ink-muted)] max-w-xl">
          Have a project in mind? Send a message and I'll get back to you soon.
        </p>

        {/* Contact cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="card-surface group p-5 flex flex-col gap-3 hover:border-[var(--ink-faint)] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center">
                    <Icon className="w-[18px] h-[18px] text-[var(--accent)]" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--ink-faint)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <div className="text-xs font-medium text-[var(--ink-muted)]">{c.label}</div>
                  <div className="mt-0.5 text-sm font-semibold text-[var(--ink)] break-all leading-snug">{c.value}</div>
                  <div className="mt-1.5 text-xs text-[var(--ink-faint)]">{c.blurb}</div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Form */}
        <div className="mt-6">
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="card-surface p-6 md:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-medium text-[var(--ink-muted)]">Name</label>
                <input name="name" value={formData.name} onChange={handleChange} className={`mt-1.5 ${inputClass}`} placeholder="Your name" />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-xs font-medium text-[var(--ink-muted)]">Email</label>
                <input name="email" value={formData.email} onChange={handleChange} className={`mt-1.5 ${inputClass}`} placeholder="you@example.com" />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-[var(--ink-muted)]">Subject</label>
              <input name="subject" value={formData.subject} onChange={handleChange} className={`mt-1.5 ${inputClass}`} placeholder="What's this about?" />
              {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
            </div>
            <div>
              <label className="text-xs font-medium text-[var(--ink-muted)]">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className={`mt-1.5 ${inputClass} resize-none`} placeholder="Tell me about your project..." />
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--ink)] text-[var(--bg)] font-medium text-sm hover:bg-[var(--accent-ink)] transition-colors disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {loading ? "Sending..." : "Send message"}
            </button>

            {status && (
              <p className="flex items-center gap-2 text-sm text-[var(--ink-muted)]">
                <MessageSquare className="w-4 h-4 text-[var(--accent)]" />
                {status}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </main>
  );
}
