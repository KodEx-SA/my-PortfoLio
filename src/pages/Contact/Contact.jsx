/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Send,
  Phone,
  MapPin,
  Mail,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Please fill in all required fields correctly.");
      return;
    }

    if (!import.meta.env.VITE_WEB3FORMS_KEY) {
      setStatus(
        "Error: Web3Forms access key is missing. Please contact the site owner."
      );
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
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setStatus(
          "Your message is sent successfully! I'll get back to you soon."
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
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

  return (
    <main className="pt-20 lg:pt-0 bg-[#0a0a0a] text-white min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-green-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, #000 70%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, #000 70%, transparent 100%)",
        }}
      />

      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm">
              <MessageSquare className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">
                Let&apos;s Connect
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent animate-gradient-x">
              Get in Touch
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Have a question or want to work together? Drop a message!
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                {/* Email */}
                <div className="group flex items-start space-x-4 p-4 rounded-xl bg-[#1a1a1a] border border-green-500/20 hover:border-green-400/40 transition-all hover:scale-[1.02]">
                  <div className="bg-green-500/10 p-3 rounded-lg border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                    <Mail className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <a
                      href="mailto:motsieashley31@gmail.com"
                      className="text-gray-400 hover:text-green-400 transition-colors break-all"
                    >
                      motsieashley31@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="group flex items-start space-x-4 p-4 rounded-xl bg-[#1a1a1a] border border-green-500/20 hover:border-green-400/40 transition-all hover:scale-[1.02]">
                  <div className="bg-green-500/10 p-3 rounded-lg border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">Location</h3>
                    <p className="text-gray-400">
                      South Africa, Rustenburg 0200
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info Card */}
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-green-500/5 to-green-600/10 border border-green-500/20">
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-green-400/30 rounded-tl-xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-green-400/30 rounded-br-xl" />

                <div className="relative space-y-3">
                  <div className="flex items-center gap-2 text-green-400 mb-4">
                    <Sparkles className="w-5 h-5" />
                    <h3 className="font-semibold">Quick Response</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    I typically respond within 24 hours. Looking forward to
                    hearing from you!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="backdrop-blur-lg bg-[#1a1a1a] p-8 rounded-2xl shadow-xl border border-green-500/20">
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 gap-6">
                    {/* Name Input */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border ${
                          errors.name ? "border-red-500" : "border-green-500/30"
                        } focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all text-white placeholder-gray-500`}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        aria-invalid={!!errors.name}
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                      />
                      {errors.name && (
                        <p
                          id="name-error"
                          className="text-red-400 text-sm mt-1"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border ${
                          errors.email
                            ? "border-red-500"
                            : "border-green-500/30"
                        } focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all text-white placeholder-gray-500`}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          className="text-red-400 text-sm mt-1"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Subject Input */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="Project Inquiry"
                        className={`w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border ${
                          errors.subject
                            ? "border-red-500"
                            : "border-green-500/30"
                        } focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all text-white placeholder-gray-500`}
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        aria-invalid={!!errors.subject}
                        aria-describedby={
                          errors.subject ? "subject-error" : undefined
                        }
                      />
                      {errors.subject && (
                        <p
                          id="subject-error"
                          className="text-red-400 text-sm mt-1"
                        >
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Tell me about your project..."
                        rows="4"
                        className={`w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border ${
                          errors.message
                            ? "border-red-500"
                            : "border-green-500/30"
                        } focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all resize-none text-white placeholder-gray-500`}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        aria-invalid={!!errors.message}
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                      ></textarea>
                      {errors.message && (
                        <p
                          id="message-error"
                          className="text-red-400 text-sm mt-1"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-green-600 hover:to-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-green-500/20 hover:scale-[1.02]"
                    aria-label="Send message"
                  >
                    <span>{loading ? "Sending..." : "Send Message"}</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                {/* Status Message */}
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 text-center p-4 rounded-lg ${
                      status.includes("success") || status.includes("sent")
                        ? "bg-green-500/10 text-green-400 border border-green-500/30"
                        : "bg-red-500/10 text-red-400 border border-red-500/30"
                    }`}
                    role="alert"
                    aria-live="polite"
                  >
                    <p>{status}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </main>
  );
}
