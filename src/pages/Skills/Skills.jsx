import { motion } from "framer-motion";
import IconCloudDemo from "@/components/globe";
import { SectionHeading } from "@/components/ui/section-heading";
import { Code2, Database, Cpu, Cloud, Paintbrush, Server } from "lucide-react";
import {
  FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaFigma, FaLinux,
} from "react-icons/fa";
import {
  SiTailwindcss, SiPostgresql, SiMongodb, SiFastapi, SiFlask,
  SiVercel, SiNetlify, SiRender, SiTypescript, SiNextdotjs, SiPrisma, SiRedis,
  SiLangchain,    SiAnthropic, SiCanvas, SiFramer,
} from "react-icons/si";
import { BsFileEarmarkCode } from "react-icons/bs";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-[var(--ink)]" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
      { name: "Framer Motion", icon: <SiFramer className="w-4 h-4 text-[#BB4CCA]" /> },
      { name: "HTML5 / CSS3", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" /> },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
      { name: "Express", icon: <FaNodeJs className="w-4 h-4 text-[var(--ink-muted)]" /> },
      { name: "NestJS", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E0234E]" /> },
      { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
      { name: "FastAPI", icon: <SiFastapi className="w-4 h-4 text-[#009688]" /> },
      { name: "Flask", icon: <SiFlask className="w-4 h-4 text-[var(--ink-muted)]" /> },
      { name: "REST APIs", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#FF6C37]" /> },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
      { name: "Neon DB", icon: <SiPostgresql className="w-4 h-4 text-[#00E599]" /> },
      { name: "Supabase", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#3ECF8E]" /> },
      { name: "Prisma ORM", icon: <SiPrisma className="w-4 h-4 text-[#2D3748]" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
      { name: "Redis", icon: <SiRedis className="w-4 h-4 text-[#DC382D]" /> },
    ],
  },
  {
    icon: Cpu,
    title: "AI & ML",
    skills: [
      { name: "Groq API", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#F55036]" /> },
      { name: "OpenAI API", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#412991]" /> },
      { name: "Anthropic Claude", icon: <SiAnthropic className="w-4 h-4 text-[#D97757]" /> },
      { name: "LangChain", icon: <SiLangchain className="w-4 h-4 text-[#1C3C3C]" /> },
      { name: "LiveKit", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#FF6600]" /> },
      { name: "PyTorch", icon: <FaPython className="w-4 h-4 text-[#EE4C2C]" /> },
    ],
  },
  {
    icon: Cloud,
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: <FaDocker className="w-4 h-4 text-[#2496ED]" /> },
      { name: "Git & GitHub", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
      { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-[var(--ink)]" /> },
      { name: "Netlify", icon: <SiNetlify className="w-4 h-4 text-[#00C7B7]" /> },
      { name: "Render", icon: <SiRender className="w-4 h-4 text-[#46E3B7]" /> },
      { name: "Linux Mint", icon: <FaLinux className="w-4 h-4 text-[#87CF3E]" /> },
    ],
  },
  {
    icon: Paintbrush,
    title: "Design",
    skills: [
      { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
      { name: "Canva", icon: <SiCanvas className="w-4 h-4 text-[#00C4CC]" /> },
      { name: "UI/UX Design", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#9CA3AF]" /> },
      { name: "Responsive Design", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#F59E0B]" /> },
    ],
  },
];


function SkillCard({ icon: Icon, title, skills, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="card-surface p-6"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center">
          <Icon className="w-5 h-5 text-[var(--accent)]" />
        </div>
        <div>
          <h3 className="font-semibold text-[var(--ink)]">{title}</h3>
          <div className="text-xs text-[var(--ink-muted)]">{skills.length} skills</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs bg-[var(--surface-2)] text-[var(--ink-muted)] rounded-lg"
          >
            {skill.icon}
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-[var(--bg)] text-[var(--ink)] py-20 md:py-28">
      <section className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow={"// skills"}
          title="Skills & technologies"
          description="The tools and technologies I use to build web applications."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center my-14"
        >
          <IconCloudDemo />
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, index) => (
            <SkillCard key={cat.title} {...cat} index={index} />
          ))}
        </div>
      </section>
    </section>
  );
}
