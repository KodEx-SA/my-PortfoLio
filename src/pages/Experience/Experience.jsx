import { motion } from "framer-motion";
import { Network, Code2, Cpu, MapPin, Briefcase, Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const experiences = [
  {
    icon: Cpu,
    title: "Web Developer & Graphic Designer",
    company: "Maps Media Productions",
    location: "Remote · Rustenburg, SA",
    period: "August 2024 — Present",
    current: true,
    description:
      "Freelancing under the Maps Media Productions brand — designing and building websites for South African small businesses, hospitality brands, real estate, and modelling agencies, plus brand identity and graphic design.",
    tags: ["HTML5", "Tailwind CSS", "Figma", "Canva"],
  },
  {
    icon: Code2,
    title: "AI Software Developer",
    company: "AI Global Networks",
    location: "Remote, South Africa",
    period: "July 2025 — May 2026",
    current: false,
    description:
      "Built and maintained AI-powered web applications and chatbot systems for the company's client base — full-stack architecture, LLM API integration, and production deployment.",
    tags: ["React", "Node.js", "Express", "Groq API"],
  },
  {
    icon: Network,
    title: "Junior Software Developer & IT Technician",
    company: "Eullafied Tech Solutions",
    location: "On-site · Rustenburg, SA",
    period: "June 2025 — May 2026",
    current: false,
    description:
      "Developed internal business tools and client-facing web applications alongside IT support and infrastructure work — including a full Intern Management System and a Help Desk platform.",
    tags: ["NestJS", "React", "TypeScript", "Supabase"],
  },
];

const testimonials = [
  {
    name: "Sipho Dlamini",
    role: "CEO, AI Global Networks",
    avatar: "SD",
    text: "Ashley delivered an exceptional AI-powered chatbot application that transformed how we engage with clients. The React and Groq API integration was seamless, and the attention to detail in the UI was outstanding.",
  },
  {
    name: "Thabo Mokoena",
    role: "Project Manager, Eullafied Tech Solutions",
    avatar: "TM",
    text: "Working with Ashley on our help desk system was a pleasure. The transition to a full NestJS/React stack was handled professionally, on time, and with all requirements met.",
  },
  {
    name: "Lerato Nkosi",
    role: "Creative Director, Maps Media Productions",
    avatar: "LN",
    text: "Ashley consistently delivers polished websites that exceed client expectations — a rare combination of technical excellence and visual sensibility.",
  },
];

function ExperienceCard({ icon: Icon, title, company, location, period, current, description, tags }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className="card-surface p-6 flex flex-col gap-4"
    >
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-[var(--accent)]" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[var(--ink)] leading-snug">{title}</h3>
          <span className="text-sm text-[var(--accent)] font-medium">{company}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs text-[var(--ink-muted)] bg-[var(--surface-2)] px-2.5 py-1 rounded-full">
          <MapPin className="w-3 h-3" />
          {location}
        </span>
        <span className="text-xs text-[var(--ink-muted)] bg-[var(--surface-2)] px-2.5 py-1 rounded-full">
          {period}
        </span>
        {current && (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] bg-[var(--accent-soft)] px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            Current
          </span>
        )}
      </div>

      <p className="text-sm text-[var(--ink-muted)] leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2 mt-auto pt-1">
        {tags.map((tag) => (
          <span key={tag} className="text-[11px] font-mono px-2 py-1 rounded-md bg-[var(--surface-2)] text-[var(--ink-muted)]">
            #{tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-[var(--bg)] text-[var(--ink)] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow={"// experience"}
          title="Where I've worked"
          icon={Briefcase}
          description="1 active role, 2 past roles."
        />

        <div className="mt-10 relative">
          {/* Timeline connector — desktop only */}
          <div className="hidden md:block absolute top-6 left-[16.5%] right-[16.5%] h-px" style={{ background: "var(--gradient-brand)", opacity: 0.35 }} />
          <div className="grid gap-5 md:grid-cols-3">
            {experiences.map((exp, i) => (
              <div key={exp.company} className="relative">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="hidden md:block absolute -top-[1px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full z-10"
                  style={{ background: "var(--accent)" }}
                />
                <ExperienceCard {...exp} />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <SectionHeading eyebrow={"// what people say"} title="Client feedback" level={2} />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="card-surface p-6 flex flex-col gap-4"
              >
                <Quote className="w-6 h-6 text-[var(--accent)]" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[var(--accent)] fill-[var(--accent)]" />
                  ))}
                </div>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed flex-1">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-[var(--border)]">
                  <div className="w-9 h-9 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-xs font-semibold flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--ink)]">{t.name}</div>
                    <div className="text-xs text-[var(--ink-muted)]">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
