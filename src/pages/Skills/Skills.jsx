import { motion } from "framer-motion";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaFigma,
} from "react-icons/fa";
import {
  SiBootstrap, SiTailwindcss, SiPostgresql, SiMongodb, SiDjango,
  SiFirebase, SiVercel, SiVite, SiTypescript,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="w-4 h-4 text-[#7952B3]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
      { name: "HTML5", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" /> },
      { name: "CSS3", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" /> },
    ],
  },
  {
    icon: Database,
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
      { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
      { name: "Django", icon: <SiDjango className="w-4 h-4 text-[#4DB6AC]" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
      { name: "REST APIs", icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" /> },
    ],
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    skills: [
      { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
      { name: "Wireframing", icon: <BsGrid1X2 className="w-4 h-4 text-[#9CA3AF]" /> },
      { name: "Prototyping", icon: <MdAnimation className="w-4 h-4 text-[#F59E0B]" /> },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker", icon: <FaDocker className="w-4 h-4 text-[#2496ED]" /> },
      { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
      { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-[var(--ink)]" /> },
    ],
  },
  {
    icon: Cpu,
    title: "Tools & Tech",
    skills: [
      { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
      { name: "Firebase", icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" /> },
      { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
    ],
  },
  {
    icon: Paintbrush,
    title: "Creative",
    skills: [
      { name: "SVG Animation", icon: <MdAnimation className="w-4 h-4 text-[#00C853]" /> },
      { name: "UI Animation", icon: <MdAnimation className="w-4 h-4 text-[#FF4081]" /> },
      { name: "Framer Motion", icon: <MdAnimation className="w-4 h-4 text-[#BB4CCA]" /> },
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
    <main className="bg-[var(--bg)] text-[var(--ink)] min-h-screen py-20 md:py-28">
      <section className="max-w-6xl mx-auto px-5 md:px-8">
        <span className="eyebrow">// skills</span>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
          Skills & technologies
        </h1>
        <p className="mt-3 text-[var(--ink-muted)] max-w-xl">
          The tools and technologies I use to build web applications.
        </p>

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
    </main>
  );
}
