import { motion } from "framer-motion";
import HeroImg from "@/assets/img/my_pic.jpg";
import {
  Code2,
  Brain,
  Cloud,
  Smartphone,
  Database,
  CheckCircle,
} from "lucide-react";
import GitHubStats from "@/components/GitHubStats";
import ErrorBoundary from "@/components/ErrorBoundary";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Complete web applications from database schema to polished UI, using React, Next.js, Node.js, NestJS, and TypeScript.",
    features: ["React / Next.js frontends", "NestJS / Express backends", "PostgreSQL & MongoDB", "REST API design"],
  },
  {
    icon: Brain,
    title: "AI Integration & Chatbots",
    description:
      "Large language models and AI APIs built into products — custom chatbots, AI assistants, and automation pipelines with Groq, OpenAI, and PyTorch.",
    features: ["AI chatbot development", "Groq & OpenAI integration", "PyTorch model deployment", "Prompt engineering"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Cloud infrastructure end to end — CI/CD pipelines on GitHub Actions, containerised deployments with Docker, hosted on Vercel, Netlify, or cloud providers.",
    features: ["Vercel & Netlify deploys", "Docker containerisation", "GitHub Actions CI/CD", "Cloud architecture"],
  },
  {
    icon: Smartphone,
    title: "Responsive Web & PWA",
    description:
      "Every project is mobile-first and fully responsive. I also build Progressive Web Apps with native-like offline experiences.",
    features: ["Mobile-first design", "PWA offline support", "Performance tuning", "Cross-browser testing"],
  },
  {
    icon: Database,
    title: "IT Support & Systems",
    description:
      "Hardware diagnostics, network configuration, and internal tooling — keeping tech environments healthy and teams productive.",
    features: ["Network troubleshooting", "Systems administration", "Help desk & ticketing", "Infrastructure planning"],
  },
];

export default function About() {
  return (
    <section className="bg-[var(--bg)] text-[var(--ink)] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <span className="eyebrow">// about</span>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
          A bit about me
        </h1>

        {/* Intro */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[280px_1fr] items-start">
          <motion.img
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            src={HeroImg}
            alt="Ashley Motsie"
            className="rounded-2xl w-full max-w-[280px] object-cover border border-[var(--border)]"
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-lg text-[var(--ink-muted)] leading-relaxed">
              I'm <strong className="text-[var(--ink)]">Ashley Motsie</strong>, a
              software developer based in Rustenburg, South Africa, building
              efficient, user-friendly web applications. My work is driven by
              curiosity and a desire to solve real problems through code.
            </p>
            <p className="text-lg text-[var(--ink-muted)] leading-relaxed">
              I'm a lifelong learner — sometimes a teacher, always looking to
              expand my range as a full-stack developer who builds robust,
              maintainable software.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-2 max-w-sm">
              <div className="card-surface text-center py-4">
                <div className="text-xl font-bold text-[var(--accent)]">3+</div>
                <div className="text-xs text-[var(--ink-muted)] mt-1">Years experience</div>
              </div>
              <div className="card-surface text-center py-4">
                <div className="text-xl font-bold text-[var(--accent)]">10+</div>
                <div className="text-xs text-[var(--ink-muted)] mt-1">Projects built</div>
              </div>
              <div className="card-surface text-center py-4">
                <div className="text-xl font-bold text-[var(--accent)]">4</div>
                <div className="text-xs text-[var(--ink-muted)] mt-1">Certifications</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What I do */}
        <div className="mt-24">
          <span className="eyebrow">// what I do</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">
            Services & expertise
          </h2>
          <p className="mt-2 text-[var(--ink-muted)] max-w-xl">
            From idea to deployment — covering the full stack of modern
            software development.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="card-surface p-6 flex flex-col gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--ink)]">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-[var(--ink-muted)] leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                  <ul className="space-y-1.5 mt-auto pt-2 border-t border-[var(--border)]">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-[var(--ink-muted)]">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* GitHub stats */}
        <div className="mt-24">
          <ErrorBoundary>
            <GitHubStats username="KodEx-SA" />
          </ErrorBoundary>
        </div>
      </div>
    </section>
  );
}
