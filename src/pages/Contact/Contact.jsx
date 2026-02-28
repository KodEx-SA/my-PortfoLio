/* eslint-disable react-hooks/purity */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Send,
  Phone,
  MapPin,
  Mail,
  MessageSquare,
  Sparkles,
  Terminal,
  Zap,
  Radio,
} from "lucide-react";
import { motion } from "framer-motion";

// Data Stream Component
const DataStream = () => {
  const chars = "01アイウエオ";
  const streams = Array.from({ length: 5 }, (_, i) => ({
    left: `${15 + i * 20}%`,
    delay: `${Math.random() * 3}s`,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5 z-5">
      {streams.map((stream, i) => (
        <div
          key={i}
          className="absolute top-0 text-green-400 text-xs font-mono animate-data-stream"
          style={{
            left: stream.left,
            animationDelay: stream.delay,
          }}
        >
          {Array.from(
            { length: 30 },
            () => chars[Math.floor(Math.random() * chars.length)],
          ).join("")}
        </div>
      ))}
    </div>
  );
};

// Transmission Particles Component
const TransmissionParticles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-green-400 rounded-full animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

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
  const [focusedField, setFocusedField] = useState(null);

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
        "Error: Web3Forms access key is missing. Please contact the site owner.",
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
          "Your message is sent successfully! I'll get back to you soon.",
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
      {/* Data Stream Effect */}
      <DataStream />

      {/* Transmission Particles */}
      <TransmissionParticles />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-green-600/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Grid Background with green tint */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, #000 70%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, #000 70%, transparent 100%)",
        }}
      />

      {/* Main scan line */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="scanline-main" />
      </div>

      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm relative overflow-hidden group">
              <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
              <Radio className="w-4 h-4 text-green-400 relative z-10 animate-pulse" />
              <span className="text-green-400 text-sm font-medium font-mono relative z-10">
                Establish Connection
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent animate-gradient-x font-mono relative">
              <span className="relative inline-block">
                Get in Touch
                {/* Glitch effect */}
                <span className="absolute inset-0 text-green-400 opacity-0 hover:opacity-30 animate-glitch-subtle">
                  Get in Touch
                </span>
              </span>
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed font-mono">
              <span className="text-green-400">&gt;</span> Have a question or
              want to work together? Drop a message!
            </p>

            <div className="relative w-24 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full mx-auto overflow-hidden">
              <div className="absolute inset-0 bg-green-400 animate-scan-line" />
            </div>
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
                {/* Email Card */}
                <div className="group relative flex items-start space-x-4 p-4 rounded-xl bg-[#1a1a1a] border border-green-500/20 hover:border-green-400/40 transition-all hover:scale-[1.02] overflow-hidden">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />

                  {/* Scan line over card */}
                  <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                    <div className="scanline-card" />
                  </div>

                  {/* Tech corner brackets */}
                  <div className="absolute top-3 right-3 w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity">
                    <div className="absolute top-0 right-0 w-full h-[2px] bg-green-400 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300" />
                    <div className="absolute top-0 right-0 w-[2px] h-full bg-green-400 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 delay-75" />
                  </div>

                  <div className="bg-green-500/10 p-3 rounded-lg border border-green-500/20 group-hover:bg-green-500/20 transition-colors relative z-10">
                    <Mail className="w-6 h-6 text-green-400 animate-pulse" />
                  </div>
                  <div className="flex-1 relative z-10">
                    <h3 className="font-semibold text-white mb-1 flex items-center gap-2 font-mono">
                      <Terminal className="w-3 h-3 text-green-400" />
                      Email
                    </h3>
                    <a
                      href="mailto:motsieashley31@gmail.com"
                      className="text-gray-400 hover:text-green-400 transition-colors break-all font-mono text-sm"
                    >
                      motsieashley31@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location Card */}
                <div className="group relative flex items-start space-x-4 p-4 rounded-xl bg-[#1a1a1a] border border-green-500/20 hover:border-green-400/40 transition-all hover:scale-[1.02] overflow-hidden">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />

                  {/* Scan line over card */}
                  <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                    <div className="scanline-card" />
                  </div>

                  {/* Tech corner brackets */}
                  <div className="absolute top-3 right-3 w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity">
                    <div className="absolute top-0 right-0 w-full h-[2px] bg-green-400 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300" />
                    <div className="absolute top-0 right-0 w-[2px] h-full bg-green-400 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 delay-75" />
                  </div>

                  <div className="bg-green-500/10 p-3 rounded-lg border border-green-500/20 group-hover:bg-green-500/20 transition-colors relative z-10">
                    <MapPin className="w-6 h-6 text-green-400 animate-pulse" />
                  </div>
                  <div className="flex-1 relative z-10">
                    <h3 className="font-semibold text-white mb-1 flex items-center gap-2 font-mono">
                      <Terminal className="w-3 h-3 text-green-400" />
                      Location
                    </h3>
                    <p className="text-gray-400 font-mono text-sm">
                      South Africa, Rustenburg 0200
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info Card */}
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-green-500/5 to-green-600/10 border border-green-500/20 overflow-hidden group">
                {/* Animated corner brackets */}
                <div className="absolute top-0 left-0 w-20 h-20 opacity-30 group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-green-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <div className="absolute top-0 left-0 w-[2px] h-full bg-green-400 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 delay-100" />
                </div>
                <div className="absolute bottom-0 right-0 w-20 h-20 opacity-30 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 right-0 w-full h-[2px] bg-green-400 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500" />
                  <div className="absolute bottom-0 right-0 w-[2px] h-full bg-green-400 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 delay-100" />
                </div>

                {/* Scan line */}
                <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                  <div className="scanline-card" />
                </div>

                <div className="relative space-y-3 z-10">
                  <div className="flex items-center gap-2 text-green-400 mb-4">
                    <Zap className="w-5 h-5 animate-pulse" />
                    <h3 className="font-semibold font-mono">Quick Response</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed font-mono">
                    <span className="text-green-400">&gt;</span> I typically
                    respond within 24 hours. Looking forward to hearing from
                    you!
                  </p>

                  {/* Pulsing indicator */}
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-green-500/20">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400 font-mono">
                      SYSTEM ONLINE
                    </span>
                  </div>
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
              <div className="relative backdrop-blur-lg bg-[#1a1a1a] p-8 rounded-2xl shadow-xl border border-green-500/20 overflow-hidden group">
                {/* Shimmer on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500 ease-out pointer-events-none" />

                {/* Scan line over form */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="scanline-card" />
                </div>

                {/* Tech corner brackets with animation */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-30 group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-0 right-0 w-full h-[2px] bg-green-400 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500" />
                  <div className="absolute top-0 right-0 w-[2px] h-full bg-green-400 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 delay-100" />
                </div>
                <div className="absolute bottom-4 left-4 w-8 h-8 opacity-30 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-green-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 w-[2px] h-full bg-green-400 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 delay-100" />
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                  noValidate
                >
                  <div className="grid grid-cols-1 gap-6">
                    {/* Name Input */}
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2 font-mono flex items-center gap-2"
                      >
                        <Terminal className="w-3 h-3 text-green-400" />
                        Your Name
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400 font-mono text-sm pointer-events-none">
                          &gt;
                        </span>
                        <input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          className={`w-full pl-8 pr-4 py-3 rounded-lg bg-[#0a0a0a] border ${
                            errors.name
                              ? "border-red-500"
                              : "border-green-500/30"
                          } focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all text-white placeholder-gray-500 font-mono`}
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          aria-invalid={!!errors.name}
                          aria-describedby={
                            errors.name ? "name-error" : undefined
                          }
                        />
                        {/* Focus indicator */}
                        {focusedField === "name" && (
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        )}
                      </div>
                      {errors.name && (
                        <p
                          id="name-error"
                          className="text-red-400 text-sm mt-1 font-mono flex items-center gap-1"
                        >
                          <span className="text-red-500">✗</span> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2 font-mono flex items-center gap-2"
                      >
                        <Terminal className="w-3 h-3 text-green-400" />
                        Your Email
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400 font-mono text-sm pointer-events-none">
                          &gt;
                        </span>
                        <input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className={`w-full pl-8 pr-4 py-3 rounded-lg bg-[#0a0a0a] border ${
                            errors.email
                              ? "border-red-500"
                              : "border-green-500/30"
                          } focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all text-white placeholder-gray-500 font-mono`}
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          aria-invalid={!!errors.email}
                          aria-describedby={
                            errors.email ? "email-error" : undefined
                          }
                        />
                        {/* Focus indicator */}
                        {focusedField === "email" && (
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        )}
                      </div>
                      {errors.email && (
                        <p
                          id="email-error"
                          className="text-red-400 text-sm mt-1 font-mono flex items-center gap-1"
                        >
                          <span className="text-red-500">✗</span> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Subject Input */}
                    <div className="relative">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-300 mb-2 font-mono flex items-center gap-2"
                      >
                        <Terminal className="w-3 h-3 text-green-400" />
                        Subject
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400 font-mono text-sm pointer-events-none">
                          &gt;
                        </span>
                        <input
                          id="subject"
                          type="text"
                          placeholder="Project Inquiry"
                          className={`w-full pl-8 pr-4 py-3 rounded-lg bg-[#0a0a0a] border ${
                            errors.subject
                              ? "border-red-500"
                              : "border-green-500/30"
                          } focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all text-white placeholder-gray-500 font-mono`}
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                          onFocus={() => setFocusedField("subject")}
                          onBlur={() => setFocusedField(null)}
                          aria-invalid={!!errors.subject}
                          aria-describedby={
                            errors.subject ? "subject-error" : undefined
                          }
                        />
                        {/* Focus indicator */}
                        {focusedField === "subject" && (
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        )}
                      </div>
                      {errors.subject && (
                        <p
                          id="subject-error"
                          className="text-red-400 text-sm mt-1 font-mono flex items-center gap-1"
                        >
                          <span className="text-red-500">✗</span>{" "}
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message Textarea */}
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-2 font-mono flex items-center gap-2"
                      >
                        <Terminal className="w-3 h-3 text-green-400" />
                        Your Message
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-green-400 font-mono text-sm pointer-events-none">
                          &gt;
                        </span>
                        <textarea
                          id="message"
                          placeholder="Tell me about your project..."
                          rows="4"
                          className={`w-full pl-8 pr-4 py-3 rounded-lg bg-[#0a0a0a] border ${
                            errors.message
                              ? "border-red-500"
                              : "border-green-500/30"
                          } focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all resize-none text-white placeholder-gray-500 font-mono`}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          aria-invalid={!!errors.message}
                          aria-describedby={
                            errors.message ? "message-error" : undefined
                          }
                        ></textarea>
                        {/* Focus indicator */}
                        {focusedField === "message" && (
                          <div className="absolute right-3 top-3 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        )}
                      </div>
                      {errors.message && (
                        <p
                          id="message-error"
                          className="text-red-400 text-sm mt-1 font-mono flex items-center gap-1"
                        >
                          <span className="text-red-500">✗</span>{" "}
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group/btn relative w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-green-600 hover:to-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-green-500/20 hover:scale-[1.02] font-mono overflow-hidden"
                    aria-label="Send message"
                  >
                    {/* Button shimmer effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-out" />

                    <Terminal className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">
                      {loading ? "TRANSMITTING..." : "SEND MESSAGE"}
                    </span>
                    <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform relative z-10" />

                    {/* Loading animation */}
                    {loading && (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      </div>
                    )}
                  </button>
                </form>

                {/* Status Message */}
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 relative p-4 rounded-lg overflow-hidden ${
                      status.includes("success") || status.includes("sent")
                        ? "bg-green-500/10 text-green-400 border border-green-500/30"
                        : "bg-red-500/10 text-red-400 border border-red-500/30"
                    }`}
                    role="alert"
                    aria-live="polite"
                  >
                    {/* Scan line effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
                      <div className="scanline-card" />
                    </div>

                    <p className="font-mono text-sm relative z-10 flex items-center gap-2">
                      {status.includes("success") || status.includes("sent") ? (
                        <span className="text-green-400">✓</span>
                      ) : (
                        <span className="text-red-400">✗</span>
                      )}
                      {status}
                    </p>
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
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes data-stream {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes scan-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes glitch-subtle {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(-1px, 1px); }
          66% { transform: translate(1px, -1px); }
        }
        @keyframes particle {
          0% { 
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% { 
            transform: translate(80px, -120px) scale(1);
            opacity: 0;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-data-stream {
          animation: data-stream 10s linear infinite;
        }
        .animate-scan-line {
          animation: scan-line 2s linear infinite;
        }
        .animate-glitch-subtle {
          animation: glitch-subtle 0.4s infinite;
        }
        .animate-particle {
          animation: particle 7s ease-in-out infinite;
        }
        .scanline-main {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(74, 222, 128, 0.3) 50%, 
            transparent 100%
          );
          animation: scan-main 5s linear infinite;
        }
        .scanline-card {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(74, 222, 128, 0.4) 50%, 
            transparent 100%
          );
          animation: scan-card 3s linear infinite;
        }
        @keyframes scan-main {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
        @keyframes scan-card {
          0% { transform: translateY(0); }
          100% { transform: translateY(300px); }
        }
      `}</style>
    </main>
  );
}
