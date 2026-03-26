/* eslint-disable react-hooks/purity */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import {
  Code2,
  Network,
  Cpu,
  MapPin,
  Terminal,
  ArrowUpRight,
  Briefcase,
} from "lucide-react";
import DataStream from "@/components/DataStream";

const experiences = [
  {
    icon: Network,
    title: "Software Developer & IT Technician",
    company: "Eullafied Tech Solutions",
    location: "On-Site · Rustenburg, SA",
    period: "June 2025 — Present",
    description:
      "Collaborate with cross-functional teams to contribute to agile project development. Work on code optimization techniques & play a key part in the overall development process.",
    tags: ["Agile", "IT Support", "Full-Stack"],
    accent: "from-green-400 to-emerald-500",
    index: 0,
  },
  {
    icon: Code2,
    title: "AI Software Developer",
    company: "AI Global Networks",
    location: "Remote · Johannesburg",
    period: "July 2025 — Present",
    description:
      "Responsible for developing scalable applications with integrated AI features. Focused on improving app performance & efficiency. Implementing robust testing protocols to ensure high-quality software.",
    tags: ["React", "Groq API", "TypeScript", "AI/LLM"],
    accent: "from-emerald-400 to-teal-500",
    index: 1,
  },
  {
    icon: Cpu,
    title: "Web Developer & Graphic Designer",
    company: "Maps Media Productions",
    location: "Remote · Mahikeng, SA",
    period: "August 2025 — Present",
    description:
      "Responsible for developing & maintaining client websites. Collaborating on graphic design projects as needed. Ensuring timely project delivery. Communicating with clients under the company's direction.",
    tags: ["Next.js", "Tailwind CSS", "Graphic Design"],
    accent: "from-teal-400 to-green-500",
    index: 2,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.15 },
  }),
};

function ExperienceCard({
  icon: Icon,
  title,
  company,
  location,
  period,
  description,
  tags,
  accent,
  index,
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative"
    >
      {/* Glow ring */}
      <motion.div
        className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${accent} blur-sm`}
        initial={{ opacity: 0.06 }}
        whileHover={{ opacity: 0.3 }}
        transition={{ duration: 0.35 }}
      />

      <div className="relative bg-[#111214] rounded-2xl border border-green-500/15 group-hover:border-green-500/35 transition-colors duration-300 overflow-hidden h-full">
        {/* Scanline */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-10">
          <div className="scanline-card" />
        </div>

        {/* Shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />

        {/* Corner brackets */}
        <div className="absolute top-4 right-4 w-5 h-5 opacity-30 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            className="absolute top-0 right-0 w-full h-[2px] bg-green-400"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            style={{ originX: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="absolute top-0 right-0 w-[2px] h-full bg-green-400"
            initial={{ scaleY: 0 }}
            whileHover={{ scaleY: 1 }}
            style={{ originY: 0 }}
            transition={{ duration: 0.2, delay: 0.05 }}
          />
        </div>
        <div className="absolute bottom-4 left-4 w-5 h-5 opacity-30 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            className="absolute bottom-0 left-0 w-full h-[2px] bg-green-400"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            style={{ originX: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[2px] h-full bg-green-400"
            initial={{ scaleY: 0 }}
            whileHover={{ scaleY: 1 }}
            style={{ originY: 1 }}
            transition={{ duration: 0.2, delay: 0.05 }}
          />
        </div>

        <div className="relative z-10 p-7 flex flex-col gap-5 h-full">
          {/* Icon + title row */}
          <div className="flex items-start gap-4">
            <div
              className={`relative flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${accent} bg-opacity-10 border border-green-500/20 group-hover:border-green-400/40 transition-all`}
            >
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${accent} opacity-10`}
              />
              <Icon className="w-6 h-6 text-green-400 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-300 font-mono leading-snug">
                {title}
              </h3>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <span
                  className={`text-sm font-semibold font-mono bg-gradient-to-r ${accent} bg-clip-text text-transparent`}
                >
                  {company}
                </span>
              </div>
            </div>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-500 bg-white/3 px-3 py-1 rounded-full border border-green-500/10">
              <MapPin className="w-3 h-3" />
              {location}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-green-400 bg-green-500/8 px-3 py-1 rounded-full border border-green-500/20">
              <Terminal className="w-3 h-3 animate-pulse" />
              {period}
            </span>
          </div>

          {/* Divider */}
          <div className="relative h-px overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 via-green-500/50 to-transparent" />
            <div className="absolute inset-0 bg-green-400 animate-scan-line" />
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed font-mono flex-1">
            <span className="text-green-400">&gt;</span> {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-green-500/8 text-green-400 border border-green-500/20 hover:border-green-400/50 hover:bg-green-500/15 transition-all duration-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden pt-32 pb-20">
      <DataStream count={5} />

      {/* Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      {/* Scan line */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="scanline-main" />
      </div>

      {/* Ambient blobs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-green-600/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative container mx-auto px-6 z-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center space-y-6 mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm relative overflow-hidden group">
            <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            <Briefcase className="w-4 h-4 text-green-400 relative z-10 animate-pulse" />
            <span className="text-green-400 text-sm font-medium font-mono relative z-10">
              Work History
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-center animate-gradient-x font-mono relative">
            <span className="relative inline-block">
              Professional Journey
              <span className="absolute inset-0 text-green-400 opacity-0 hover:opacity-30 animate-glitch-subtle">
                Professional Journey
              </span>
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 font-medium text-center max-w-2xl font-mono">
            <span className="text-green-400">&gt;</span> Transforming ideas into
            digital reality, one project at a time
          </p>

          <div className="relative w-24 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-green-400 animate-scan-line" />
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 pt-2">
            {[
              { label: "Roles", value: "3" },
              { label: "Years Exp.", value: "4+" },
              { label: "Status", value: "Open" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-green-400 font-bold font-mono text-xl">
                  {s.value}
                </div>
                <div className="text-gray-600 font-mono text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} {...exp} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm relative overflow-hidden hover:border-green-400/50 transition-all"
          >
            <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse relative z-10" />
            <span className="text-green-400 font-medium font-mono relative z-10">
              Open to new opportunities
            </span>
            <ArrowUpRight className="w-4 h-4 text-green-400 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient-x { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes scan-line { 0%{transform:translateX(-100%)} 100%{transform:translateX(100%)} }
        @keyframes glitch-subtle { 0%,100%{transform:translate(0)} 33%{transform:translate(-1px,1px)} 66%{transform:translate(1px,-1px)} }
        @keyframes pulse-slow { 0%,100%{opacity:0.3} 50%{opacity:0.6} }
        .animate-gradient-x{animation:gradient-x 3s ease infinite;background-size:200% 200%}
        .animate-scan-line{animation:scan-line 2s linear infinite}
        .animate-glitch-subtle{animation:glitch-subtle 0.4s infinite}
        .animate-pulse-slow{animation:pulse-slow 4s ease-in-out infinite}
        .scanline-main{position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent 0%,rgba(74,222,128,0.3) 50%,transparent 100%);animation:scan-main 6s linear infinite}
        .scanline-card{position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent 0%,rgba(74,222,128,0.35) 50%,transparent 100%);animation:scan-card 3s linear infinite}
        @keyframes scan-main{0%{transform:translateY(0)}100%{transform:translateY(100vh)}}
        @keyframes scan-card{0%{transform:translateY(0)}100%{transform:translateY(400px)}}
      `}</style>
    </div>
  );
}
