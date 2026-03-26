/* eslint-disable react-hooks/purity */
import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  BookOpen,
  Trophy,
  Sparkles,
  GraduationCap,
  Terminal,
} from "lucide-react";
import DataStream from "@/components/DataStream";

const educationData = [
  {
    degree: "Secondary School Certificate (NSC)",
    school: "Malefo Secondary School",
    emoji: "📘",
    year: "2016 — 2020",
    achievements: ["Mathematics", "Science"],
    skills: ["Mathematics", "Physics", "Biology"],
    description:
      "Focused on science subjects with emphasis on practical laboratory work and scientific research methodologies.",
    accent: "from-green-400 to-emerald-500",
  },
  {
    degree: "College Certificate (NCV)",
    school: "Orbit TVET College",
    emoji: "📗",
    year: "2022 — 2024",
    achievements: ["IT & Computer Science"],
    skills: [
      "Computer Programming",
      "System Analysis & Design",
      "Multimedia",
      "Data Networking",
    ],
    description:
      "Developed strong critical thinking skills through comprehensive study of Information Technology and Computer Sciences.",
    accent: "from-emerald-400 to-teal-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function EducationSection() {
  return (
    <section className="min-h-screen relative overflow-hidden py-32 bg-[#0a0a0a]">
      <DataStream count={4} />

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

      <div className="max-w-6xl mx-auto px-4 relative z-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm relative overflow-hidden group">
            <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            <GraduationCap className="w-4 h-4 text-green-400 relative z-10 animate-pulse" />
            <span className="text-green-400 text-sm font-medium font-mono relative z-10">
              Academic Background
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-center animate-gradient-x font-mono relative">
            <span className="relative inline-block">
              Educational Journey
              <span className="absolute inset-0 text-green-400 opacity-0 hover:opacity-30 animate-glitch-subtle">
                Educational Journey
              </span>
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-mono">
            <span className="text-green-400">&gt;</span> Discover how academic
            excellence shapes innovative thinking and professional growth.
          </p>

          <div className="relative w-24 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-green-400 animate-scan-line" />
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative"
            >
              {/* Glow ring */}
              <motion.div
                className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${edu.accent} blur-sm`}
                initial={{ opacity: 0.06 }}
                whileHover={{ opacity: 0.28 }}
                transition={{ duration: 0.35 }}
              />

              <div className="relative bg-[#111214] rounded-2xl border border-green-500/15 group-hover:border-green-500/35 transition-colors duration-300 overflow-hidden">
                {/* Scanline */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-10">
                  <div className="scanline-card" />
                </div>

                {/* Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out rounded-2xl" />

                {/* Corner brackets */}
                <div className="absolute top-4 right-4 w-5 h-5 opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 right-0 w-full h-[2px] bg-green-400 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300" />
                  <div className="absolute top-0 right-0 w-[2px] h-full bg-green-400 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 delay-75" />
                </div>
                <div className="absolute bottom-4 left-4 w-5 h-5 opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-green-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  <div className="absolute bottom-0 left-0 w-[2px] h-full bg-green-400 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 delay-75" />
                </div>

                <div className="relative z-10 p-8 space-y-6">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className="relative text-3xl p-3 bg-green-500/8 rounded-xl border border-green-500/20 group-hover:border-green-400/30 transition-colors flex-shrink-0">
                      {edu.emoji}
                      <span className="absolute inset-0 rounded-xl border border-green-400/20 animate-ping-slow" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-bold font-mono bg-gradient-to-r ${edu.accent} bg-clip-text text-transparent leading-snug`}
                      >
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 flex-wrap">
                        <span className="text-gray-300 font-mono text-sm flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4 text-green-500" />
                          {edu.school}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-green-400 bg-green-500/8 px-2.5 py-1 rounded-full border border-green-500/20 mt-2">
                        <Calendar className="w-3 h-3" />
                        {edu.year}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="relative h-px overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 via-green-500/50 to-transparent" />
                    <div className="absolute inset-0 bg-green-400 animate-scan-line" />
                  </div>

                  {/* Description */}
                  <div className="relative border-l-2 border-green-500/30 pl-4">
                    <p className="text-gray-400 text-sm leading-relaxed font-mono">
                      <span className="text-green-400">&gt;</span>{" "}
                      {edu.description}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-white flex items-center gap-2 font-mono">
                      <Trophy className="w-4 h-4 text-green-400 animate-pulse" />
                      Key Achievements
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((a, i) => (
                        <div
                          key={i}
                          className="group/badge relative px-3 py-1.5 rounded-lg bg-green-500/8 border border-green-500/20 text-green-400 flex items-center gap-1.5 text-xs hover:bg-green-500/15 transition-all overflow-hidden font-mono"
                        >
                          <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover/badge:translate-x-[100%] transition-transform duration-500 ease-out" />
                          <Award className="w-3.5 h-3.5 relative z-10" />
                          <span className="relative z-10">{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-white flex items-center gap-2 font-mono">
                      <Sparkles className="w-4 h-4 text-green-400 animate-pulse" />
                      Key Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs rounded-lg bg-green-500/5 border border-green-500/15 text-gray-400 hover:text-green-400 hover:border-green-400/40 transition-all font-mono cursor-default"
                        >
                          #{skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm relative overflow-hidden group hover:border-green-400/50 transition-all">
            <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse relative z-10" />
            <span className="text-green-400 font-medium font-mono relative z-10">
              <Terminal className="inline w-3 h-3 mr-2" />
              Continuous learning and growth
            </span>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient-x{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
        @keyframes scan-line{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}
        @keyframes glitch-subtle{0%,100%{transform:translate(0)}33%{transform:translate(-1px,1px)}66%{transform:translate(1px,-1px)}}
        @keyframes pulse-slow{0%,100%{opacity:0.3}50%{opacity:0.6}}
        @keyframes ping-slow{0%{transform:scale(1);opacity:0.5}50%{transform:scale(1.05);opacity:0.2}100%{transform:scale(1);opacity:0.5}}
        .animate-gradient-x{animation:gradient-x 3s ease infinite;background-size:200% 200%}
        .animate-scan-line{animation:scan-line 2s linear infinite}
        .animate-glitch-subtle{animation:glitch-subtle 0.4s infinite}
        .animate-pulse-slow{animation:pulse-slow 4s ease-in-out infinite}
        .animate-ping-slow{animation:ping-slow 3s ease-in-out infinite}
        .scanline-main{position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent 0%,rgba(74,222,128,0.3) 50%,transparent 100%);animation:scan-main 6s linear infinite}
        .scanline-card{position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent 0%,rgba(74,222,128,0.35) 50%,transparent 100%);animation:scan-card 3s linear infinite}
        @keyframes scan-main{0%{transform:translateY(0)}100%{transform:translateY(100vh)}}
        @keyframes scan-card{0%{transform:translateY(0)}100%{transform:translateY(500px)}}
      `}</style>
    </section>
  );
}
