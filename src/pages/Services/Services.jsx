import { motion } from "framer-motion";
import { useState } from "react";
import {
  Sparkles,
  Code2,
  Brain,
  Smartphone,
  Cloud,
  Palette,
  Database,
  ArrowRight,
  CheckCircle,
  Terminal,
  Zap,
} from "lucide-react";
import DataStream from "@/components/DataStream";

const services = [
  {
    id: "fullstack",
    icon: Code2,
    title: "Full-Stack Development",
    tagline: "End-to-end web solutions",
    color: "from-green-400 to-emerald-500",
    glow: "rgba(34,197,94,0.15)",
    description:
      "I build complete web applications from database schema to polished UI — using React, Next.js, Node.js, NestJS, and TypeScript. Production-ready, scalable, and maintainable.",
    features: [
      "React / Next.js frontends",
      "NestJS / Express backends",
      "PostgreSQL & MongoDB databases",
      "REST API design & integration",
      "Authentication & role-based access",
    ],
    badge: "Core Service",
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI Integration & Chatbots",
    tagline: "Smart features, real impact",
    color: "from-emerald-400 to-teal-500",
    glow: "rgba(52,211,153,0.15)",
    description:
      "I integrate large language models and AI APIs into your products — from custom chatbots and AI assistants to intelligent automation pipelines using Groq, OpenAI, and PyTorch.",
    features: [
      "AI chatbot development",
      "Groq & OpenAI API integration",
      "PyTorch model deployment",
      "Prompt engineering & fine-tuning",
      "Conversational UX design",
    ],
    badge: "Specialisation",
  },
  {
    id: "ui",
    icon: Palette,
    title: "UI/UX & Graphic Design",
    tagline: "Interfaces people actually enjoy",
    color: "from-green-300 to-green-500",
    glow: "rgba(134,239,172,0.12)",
    description:
      "I design visually striking interfaces that balance aesthetics with usability — using Figma for wireframes and Tailwind CSS for pixel-perfect implementation.",
    features: [
      "Figma wireframes & prototypes",
      "Tailwind CSS implementation",
      "Brand identity & logo design",
      "Dark & light theme systems",
      "Motion & micro-interaction design",
    ],
    badge: "Creative",
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & DevOps",
    tagline: "Deploy with confidence",
    color: "from-teal-400 to-green-500",
    glow: "rgba(45,212,191,0.12)",
    description:
      "I configure and manage cloud infrastructure — from CI/CD pipelines on GitHub Actions to containerised deployments with Docker, hosted on Vercel, Netlify, or cloud providers.",
    features: [
      "Vercel & Netlify deployments",
      "Docker containerisation",
      "GitHub Actions CI/CD",
      "Environment & secrets management",
      "Cloud architecture planning",
    ],
    badge: "Infrastructure",
  },
  {
    id: "it",
    icon: Database,
    title: "IT Support & Systems",
    tagline: "Keep things running smoothly",
    color: "from-green-500 to-emerald-600",
    glow: "rgba(34,197,94,0.12)",
    description:
      "Hardware diagnostics, network configuration, system administration, and internal tooling — I keep tech environments healthy and teams productive.",
    features: [
      "Network setup & troubleshooting",
      "Hardware diagnostics & repair",
      "Internal systems administration",
      "Help desk & ticketing systems",
      "IT infrastructure planning",
    ],
    badge: "Support",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Responsive Web & PWA",
    tagline: "Works everywhere, looks great",
    color: "from-emerald-300 to-green-400",
    glow: "rgba(110,231,183,0.12)",
    description:
      "Every project I build is fully responsive and mobile-first. I also develop Progressive Web Apps (PWAs) that offer native-like experiences across all devices.",
    features: [
      "Mobile-first responsive design",
      "PWA with offline support",
      "Performance optimisation",
      "Cross-browser compatibility",
      "Lighthouse score improvement",
    ],
    badge: "Mobile",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="services"
      className="relative py-16 md:py-32 text-white bg-[#0a0a0a] min-h-screen overflow-hidden"
    >
      <DataStream count={4} />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-green-600/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="scanline-main" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 z-20">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm relative overflow-hidden group">
            <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <Zap className="w-4 h-4 text-green-400 relative z-10 animate-pulse" />
            <span className="text-green-400 text-sm font-medium font-mono relative z-10">
              What I Offer
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent font-mono"
          >
            Services & Expertise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-mono"
          >
            From idea to deployment — I cover the full stack of modern software
            development.
          </motion.p>

          <div className="relative w-24 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-green-400 animate-scan-line" />
          </div>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => {
            const Icon = s.icon;
            const isActive = active === s.id;
            return (
              <motion.div
                key={s.id}
                variants={cardVariants}
                onMouseEnter={() => setActive(s.id)}
                onMouseLeave={() => setActive(null)}
                className={`relative rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 flex flex-col gap-4 cursor-default group
                  ${isActive ? "bg-green-500/8 border-green-500/50" : "bg-white/2 border-green-500/15"}`}
                style={{ boxShadow: isActive ? `0 0 30px ${s.glow}` : "none" }}
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-green-500/40 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-500/20 rounded-br-2xl" />

                {/* Badge */}
                <span className="absolute top-4 right-4 text-[10px] font-mono text-green-500/60 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full">
                  {s.badge}
                </span>

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} p-0.5 flex-shrink-0`}
                >
                  <div className="w-full h-full rounded-xl bg-[#0a0a0a] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-green-400" />
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-white font-bold font-mono text-lg">
                    {s.title}
                  </h3>
                  <p className="text-green-400/60 text-xs font-mono">
                    {s.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed font-mono flex-1">
                  {s.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-xs font-mono text-gray-400"
                    >
                      <CheckCircle className="w-3 h-3 text-green-500/70 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Hover glow line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-b-2xl transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 space-y-4"
        >
          <p className="text-gray-500 font-mono text-sm">
            Need something custom?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 font-mono text-sm hover:bg-green-500/20 hover:border-green-500/60 transition-all duration-200 group"
          >
            <Terminal className="w-4 h-4" />
            Discuss Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
