import { useState } from "react";
import { Send, MapPin, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

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
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <span className="eyebrow">// contact</span>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
          Let's work together
        </h1>
        <p className="mt-3 text-[var(--ink-muted)] max-w-xl">
          Have a project in mind? Send a message and I'll get back to you soon.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[280px_1fr]">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <a href="mailto:motsieashley31@gmail.com" className="card-surface p-4 flex items-center gap-3 hover:border-[var(--ink-faint)] transition-colors">
              <Mail className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
              <span className="text-sm text-[var(--ink-muted)] break-all">motsieashley31@gmail.com</span>
            </a>
            <div className="card-surface p-4 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
              <span className="text-sm text-[var(--ink-muted)]">Rustenburg, South Africa</span>
            </div>
          </motion.div>

          {/* Form */}
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
