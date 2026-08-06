import { motion } from "framer-motion";
import { Network, Code2, Cpu, MapPin, Briefcase, Quote, Star } from "lucide-react";

const experiences = [
  {
    icon: Network,
    title: "Software Developer & IT Technician",
    company: "Eullafied Tech Solutions",
    location: "On-site · Rustenburg, SA",
    period: "June 2025 — Present",
    description:
      "Collaborate with cross-functional teams on agile project development, work on code optimisation, and play a key part in the overall development process.",
    tags: ["Agile", "IT Support", "Software"],
  },
  {
    icon: Code2,
    title: "AI Software Developer",
    company: "AI Global Networks",
    location: "Remote · Johannesburg",
    period: "July 2025 — Present",
    description:
      "Develop scalable applications with integrated AI features, focused on improving app performance and efficiency, with robust testing protocols.",
    tags: ["React", "API", "AI"],
  },
  {
    icon: Cpu,
    title: "Web Developer & Graphic Designer",
    company: "Maps Media Productions",
    location: "Remote · Mahikeng, SA",
    period: "August 2025 — Present",
    description:
      "Develop and maintain client websites, collaborate on graphic design projects, and communicate directly with clients on delivery.",
    tags: ["Next.js", "Tailwind CSS", "Graphic Design"],
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

function ExperienceCard({ icon: Icon, title, company, location, period, description, tags }) {
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
    <section className="bg-[var(--bg)] text-[var(--ink)] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <span className="eyebrow">// experience</span>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-3">
          <Briefcase className="w-7 h-7 text-[var(--accent)]" />
          Where I've worked
        </h1>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} {...exp} />
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <span className="eyebrow">// what people say</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">
            Client feedback
          </h2>

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
