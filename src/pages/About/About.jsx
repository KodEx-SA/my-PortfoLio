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
import { FaReact, FaNodeJs, FaPython, FaDocker } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import GitHubStats from "@/components/GitHubStats";
import ErrorBoundary from "@/components/ErrorBoundary";
import { CountUp } from "@/components/ui/count-up";
import { SectionHeading } from "@/components/ui/section-heading";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

const orbitIconInner = [
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: SiNextdotjs, color: "var(--ink)" },
  { Icon: SiTypescript, color: "#3178C6" },
];
const orbitIconOuter = [
  { Icon: FaNodeJs, color: "#339933" },
  { Icon: FaPython, color: "#3776AB" },
  { Icon: FaDocker, color: "#2496ED" },
];

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
    <section id="about" className="bg-[var(--bg)] text-[var(--ink)] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading eyebrow={"// about"} title="A bit about me" />

        {/* Intro */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[320px_1fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-full aspect-square max-w-[320px] mx-auto flex items-center justify-center"
          >
            <OrbitingCircles radius={95} duration={16} iconSize={32}>
              {orbitIconInner.map(({ Icon, color }, i) => (
                <div key={i} className="w-full h-full rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shadow-sm">
                  <Icon className="w-4 h-4" style={{ color }} />
                </div>
              ))}
            </OrbitingCircles>
            <OrbitingCircles radius={135} duration={24} iconSize={28} reverse>
              {orbitIconOuter.map(({ Icon, color }, i) => (
                <div key={i} className="w-full h-full rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shadow-sm">
                  <Icon className="w-3.5 h-3.5" style={{ color }} />
                </div>
              ))}
            </OrbitingCircles>
            <img
              src={HeroImg}
              alt="Ashley Motsie"
              className="relative z-10 w-[170px] h-[170px] rounded-full object-cover border-2 border-[var(--bg)] shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-lg text-[var(--ink-muted)] leading-relaxed">
              I'm <strong className="text-[var(--ink)]">Ashley Motsie</strong>, a
              software developer and AI engineer based in Rustenburg, South
              Africa, building production-ready web apps and AI-powered
              tools. I care about clean code, great UX, and shipping things
              that work.
            </p>
            <p className="text-lg text-[var(--ink-muted)] leading-relaxed">
              I freelance for South African businesses under my GitHub
              organisation, KodEx-SA, and I'm actively seeking international
              remote opportunities.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-2 max-w-sm">
              <div className="card-surface text-center py-4">
                <div className="text-xl font-bold text-[var(--accent)]">
                  <CountUp value={3} suffix="+" />
                </div>
                <div className="text-xs text-[var(--ink-muted)] mt-1">Years experience</div>
              </div>
              <div className="card-surface text-center py-4">
                <div className="text-xl font-bold text-[var(--accent)]">
                  <CountUp value={15} suffix="+" />
                </div>
                <div className="text-xs text-[var(--ink-muted)] mt-1">Projects shipped</div>
              </div>
              <div className="card-surface text-center py-4">
                <div className="text-xl font-bold text-[var(--accent)]">
                  <CountUp value={4} />
                </div>
                <div className="text-xs text-[var(--ink-muted)] mt-1">Certifications</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What I do */}
        <div className="mt-24">
          <SectionHeading
            eyebrow={"// what I do"}
            title="Services & expertise"
            description="From idea to deployment — covering the full stack of modern software development."
            level={2}
          />

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
