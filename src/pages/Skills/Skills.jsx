/* eslint-disable react-hooks/purity */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import IconCloudDemo from "@/components/globe";
import {
  Code2,
  Paintbrush,
  Database,
  Layout,
  Cpu,
  Cloud,
  Terminal,
  Sparkles,
} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiDjango,
  SiFirebase,
  SiVercel,
  SiVite,
  SiTypescript,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import DataStream from "@/components/DataStream";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    accent: "from-green-400 to-emerald-500",
    skills: [
      { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap className="w-4 h-4 text-[#7952B3]" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
      },
      {
        name: "HTML5",
        icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
      },
      {
        name: "CSS3",
        icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
      },
    ],
  },
  {
    icon: Database,
    title: "Backend",
    accent: "from-emerald-400 to-teal-500",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
      },
      { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
      },
      { name: "Django", icon: <SiDjango className="w-4 h-4 text-[#4DB6AC]" /> },
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
      },
      {
        name: "REST APIs",
        icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
      },
    ],
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    accent: "from-teal-400 to-green-500",
    skills: [
      { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
      {
        name: "Wireframing",
        icon: <BsGrid1X2 className="w-4 h-4 text-[#9CA3AF]" />,
      },
      {
        name: "Prototyping",
        icon: <MdAnimation className="w-4 h-4 text-[#F59E0B]" />,
      },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    accent: "from-green-300 to-green-500",
    skills: [
      { name: "Docker", icon: <FaDocker className="w-4 h-4 text-[#2496ED]" /> },
      { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
      { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
    ],
  },
  {
    icon: Cpu,
    title: "Tools & Tech",
    accent: "from-emerald-300 to-emerald-500",
    skills: [
      {
        name: "VS Code",
        icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
      },
      { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
    ],
  },
  {
    icon: Paintbrush,
    title: "Creative",
    accent: "from-teal-300 to-teal-500",
    skills: [
      {
        name: "SVG Animation",
        icon: <MdAnimation className="w-4 h-4 text-[#00C853]" />,
      },
      {
        name: "UI Animation",
        icon: <MdAnimation className="w-4 h-4 text-[#FF4081]" />,
      },
      {
        name: "Framer Motion",
        icon: <MdAnimation className="w-4 h-4 text-[#BB4CCA]" />,
      },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
  }),
};

function SkillCard({ icon: Icon, title, skills, accent, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative"
    >
      {/* Glow ring */}
      <motion.div
        className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${accent} blur-sm`}
        initial={{ opacity: 0.06 }}
        whileHover={{ opacity: 0.28 }}
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
        <div className="absolute top-3 right-3 w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity">
          <div className="absolute top-0 right-0 w-full h-[1px] bg-green-400 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-200" />
          <div className="absolute top-0 right-0 w-[1px] h-full bg-green-400 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-200 delay-75" />
        </div>
        <div className="absolute bottom-3 left-3 w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-green-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200" />
          <div className="absolute bottom-0 left-0 w-[1px] h-full bg-green-400 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-200 delay-75" />
        </div>

        <div className="relative z-10 p-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="relative p-3 rounded-xl border border-green-500/20 group-hover:border-green-400/40 transition-all">
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${accent} opacity-10 group-hover:opacity-20 transition-opacity`}
              />
              <Icon className="w-6 h-6 text-green-400 relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
              <span className="absolute inset-0 rounded-xl border border-green-400/20 animate-ping-slow" />
            </div>
            <div>
              <h3
                className={`text-lg font-bold font-mono bg-gradient-to-r ${accent} bg-clip-text text-transparent`}
              >
                {title}
              </h3>
              <div className="text-xs text-gray-600 font-mono">
                {skills.length} skills
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative h-px mb-5 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 via-green-500/50 to-transparent" />
            <div className="absolute inset-0 bg-green-400 animate-scan-line" />
          </div>

          {/* Skill tags */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <motion.span
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                className="group/badge relative flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono bg-green-500/5 text-gray-300 hover:text-green-400 border border-green-500/15 hover:border-green-400/40 rounded-lg transition-all duration-200 overflow-hidden cursor-default"
              >
                <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover/badge:translate-x-[100%] transition-transform duration-500 ease-out" />
                <span className="relative z-10">{skill.icon}</span>
                <span className="relative z-10">{skill.name}</span>
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <main className="pt-16 lg:pt-20 text-white min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      <DataStream count={5} />

      {/* Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      {/* Scan line */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="scanline-main" />
      </div>

      {/* Ambient blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-green-600/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none"
        style={{ animationDelay: "1s" }}
      />

      <section className="container mx-auto px-4 py-20 relative z-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm relative overflow-hidden group">
            <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            <Sparkles className="w-4 h-4 text-green-400 relative z-10 animate-pulse" />
            <span className="text-green-400 text-sm font-medium font-mono relative z-10">
              Technical Expertise
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-center animate-gradient-x font-mono relative">
            <span className="relative inline-block">
              Skills & Technologies
              <span className="absolute inset-0 text-green-400 opacity-0 hover:opacity-30 animate-glitch-subtle">
                Skills & Technologies
              </span>
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed font-mono">
            <span className="text-green-400">&gt;</span> A comprehensive
            overview of the tools and technologies I use to build amazing
            digital experiences.
          </p>

          <div className="relative w-24 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-green-400 animate-scan-line" />
          </div>
        </motion.div>

        {/* Icon Cloud */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center items-center mb-16"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/8 blur-3xl rounded-full scale-150 animate-pulse-slow" />
            <div
              className="absolute inset-0 rounded-full border border-green-400/10 animate-spin-slow"
              style={{ animationDuration: "20s" }}
            />
            <IconCloudDemo />
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 max-w-7xl mx-auto">
          {skillCategories.map((cat, index) => (
            <SkillCard key={cat.title} {...cat} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm relative overflow-hidden group hover:border-green-400/50 transition-all">
            <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse relative z-10" />
            <span className="text-green-400 font-medium font-mono relative z-10">
              <Terminal className="inline w-3 h-3 mr-2" />
              Always learning and expanding my skillset
            </span>
          </div>
        </motion.div>
      </section>

      <style>{`
        @keyframes gradient-x{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
        @keyframes scan-line{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}
        @keyframes glitch-subtle{0%,100%{transform:translate(0)}33%{transform:translate(-1px,1px)}66%{transform:translate(1px,-1px)}}
        @keyframes pulse-slow{0%,100%{opacity:0.3}50%{opacity:0.6}}
        @keyframes ping-slow{0%{transform:scale(1);opacity:0.5}50%{transform:scale(1.05);opacity:0.2}100%{transform:scale(1);opacity:0.5}}
        @keyframes spin-slow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        .animate-gradient-x{animation:gradient-x 3s ease infinite;background-size:200% 200%}
        .animate-scan-line{animation:scan-line 2s linear infinite}
        .animate-glitch-subtle{animation:glitch-subtle 0.4s infinite}
        .animate-pulse-slow{animation:pulse-slow 4s ease-in-out infinite}
        .animate-ping-slow{animation:ping-slow 3s ease-in-out infinite}
        .animate-spin-slow{animation:spin-slow linear infinite}
        .scanline-main{position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent 0%,rgba(74,222,128,0.3) 50%,transparent 100%);animation:scan-main 6s linear infinite}
        .scanline-card{position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent 0%,rgba(74,222,128,0.35) 50%,transparent 100%);animation:scan-card 3s linear infinite}
        @keyframes scan-main{0%{transform:translateY(0)}100%{transform:translateY(100vh)}}
        @keyframes scan-card{0%{transform:translateY(0)}100%{transform:translateY(400px)}}
      `}</style>
    </main>
  );
}
