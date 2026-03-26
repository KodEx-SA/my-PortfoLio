import { motion } from "framer-motion";
import { useState } from "react";
import {
  Award,
  Trophy,
  Star,
  BookOpen,
  Code2,
  Cpu,
  CheckCircle,
  Calendar,
  ExternalLink,
  Sparkles,
  Medal,
} from "lucide-react";
import DataStream from "@/components/DataStream";

const certifications = [
  {
    id: 1,
    title: "NCV National Certificate in IT & Computer Sciences",
    issuer: "Orbit TVET College",
    date: "2022",
    type: "Qualification",
    icon: BookOpen,
    color: "from-green-400 to-emerald-500",
    description:
      "National Certificate Vocational (NCV) Level 4 in Information Technology and Computer Sciences.",
    verified: true,
  },
//   {
//     id: 2,
//     title: "React Developer Certification",
//     issuer: "HackerRank",
//     date: "2024",
//     type: "Technical",
//     icon: Code2,
//     color: "from-emerald-400 to-teal-500",
//     description:
//       "Verified proficiency in React.js — hooks, state management, component architecture, and performance optimisation.",
//     verified: true,
//     link: "https://www.hackerrank.com",
//   },
//   {
//     id: 3,
//     title: "Python (Basic) Certificate",
//     issuer: "HackerRank",
//     date: "2024",
//     type: "Technical",
//     icon: Cpu,
//     color: "from-teal-400 to-green-500",
//     description:
//       "Core Python programming — data structures, functions, OOP, and competitive programming fundamentals.",
//     verified: true,
//     link: "https://www.hackerrank.com",
//   },
//   {
//     id: 4,
//     title: "JavaScript (Intermediate) Certificate",
//     issuer: "HackerRank",
//     date: "2023",
//     type: "Technical",
//     icon: Code2,
//     color: "from-green-300 to-green-500",
//     description:
//       "Intermediate JavaScript — closures, async/await, DOM manipulation, and ES6+ features.",
//     verified: true,
//     link: "https://www.hackerrank.com",
//   },
//   {
//     id: 5,
//     title: "Problem Solving (Basic) Certificate",
//     issuer: "HackerRank",
//     date: "2023",
//     type: "Technical",
//     icon: Trophy,
//     color: "from-emerald-300 to-emerald-500",
//     description:
//       "Algorithms and data structures — sorting, searching, recursion, and complexity analysis.",
//     verified: true,
//     link: "https://www.hackerrank.com",
//   },
//   {
//     id: 6,
//     title: "SQL (Basic) Certificate",
//     issuer: "HackerRank",
//     date: "2023",
//     type: "Technical",
//     icon: Cpu,
//     color: "from-teal-300 to-teal-500",
//     description:
//       "Relational database fundamentals — SELECT queries, joins, aggregations, and subqueries.",
//     verified: true,
//     link: "https://www.hackerrank.com",
//   },
];

const achievements = [
  {
    id: 1,
    title: "eDuBaskets Platform Launch",
    description:
      "Successfully launched a student hamper delivery platform serving multiple South African universities from Day 1 with zero downtime.",
    metric: "0",
    metricLabel: "Downtime on launch",
    icon: Trophy,
    color: "text-green-400",
  },
  {
    id: 2,
    title: "3 Simultaneous Roles",
    description:
      "Managing full-time responsibilities across three companies — AI Global Networks, Eullafied Tech Solutions, and Maps Media — concurrently.",
    metric: "3",
    metricLabel: "Active roles at once",
    icon: Star,
    color: "text-emerald-400",
  },
  {
    id: 3,
    title: "AI Chatbot Shipped to Production",
    description:
      "Built and deployed a company-level AI chatbot using Groq API and React for AI Global Networks, serving real client interactions daily.",
    metric: "1K+",
    metricLabel: "Monthly interactions",
    icon: Cpu,
    color: "text-teal-400",
  },
  {
    id: 4,
    title: "4+ Years Full-Stack Experience",
    description:
      "Consistently delivered full-stack projects from scratch — from client briefs to deployed production applications — across multiple industries.",
    metric: "4+",
    metricLabel: "Years of experience",
    icon: Award,
    color: "text-green-300",
  },
  {
    id: 5,
    title: "10+ Production Projects",
    description:
      "Shipped more than 10 live production applications across AI, e-commerce, events, hospitality, real estate, and corporate sectors.",
    metric: "10+",
    metricLabel: "Live projects delivered",
    icon: Medal,
    color: "text-emerald-300",
  },
  {
    id: 6,
    title: "PayFast SA Integration",
    description:
      "One of few developers to successfully implement and maintain PayFast payment processing in a Next.js 15 production environment.",
    metric: "100%",
    metricLabel: "Payment success rate",
    icon: CheckCircle,
    color: "text-teal-300",
  },
];

const typeColors = {
  Qualification: "text-green-400 bg-green-500/10 border-green-500/30",
  Technical: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Achievements() {
  const [tab, setTab] = useState("achievements");

  return (
    <section
      id="achievements"
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
        <div className="text-center space-y-6 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm relative overflow-hidden group">
            <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <Award className="w-4 h-4 text-green-400 relative z-10 animate-pulse" />
            <span className="text-green-400 text-sm font-medium font-mono relative z-10">
              Achievements & Certs
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent font-mono"
          >
            Milestones & Credentials
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-mono"
          >
            Verified skills, real-world wins, and the credentials behind the
            code.
          </motion.p>

          <div className="relative w-24 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-green-400 animate-scan-line" />
          </div>
        </div>

        {/* Tab switch */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-1 p-1 rounded-xl bg-green-500/5 border border-green-500/20">
            {["achievements", "certifications"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 rounded-lg text-xs font-mono capitalize transition-all duration-200 ${
                  tab === t
                    ? "bg-green-500/20 text-green-400 border border-green-500/40"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Achievements grid */}
        {tab === "achievements" && (
          <motion.div
            key="achievements"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {achievements.map((a) => {
              const Icon = a.icon;
              return (
                <motion.div
                  key={a.id}
                  variants={itemVariants}
                  className="relative rounded-2xl border border-green-500/15 bg-white/2 p-6 backdrop-blur-sm flex flex-col gap-4 hover:bg-green-500/5 hover:border-green-500/35 transition-all duration-300 group"
                >
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-green-500/40 rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-500/20 rounded-br-2xl" />

                  <div className="flex items-start justify-between">
                    <Icon className={`w-6 h-6 ${a.color}`} />
                    <div className="text-right">
                      <div
                        className={`text-2xl font-bold font-mono ${a.color}`}
                      >
                        {a.metric}
                      </div>
                      <div className="text-[10px] text-gray-600 font-mono">
                        {a.metricLabel}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-white font-bold font-mono text-base">
                    {a.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-mono leading-relaxed flex-1">
                    {a.description}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Certifications grid */}
        {tab === "certifications" && (
          <motion.div
            key="certifications"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {certifications.map((c) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.id}
                  variants={itemVariants}
                  className="relative rounded-2xl border border-green-500/15 bg-white/2 p-6 backdrop-blur-sm flex items-start gap-5 hover:bg-green-500/5 hover:border-green-500/35 transition-all duration-300 group"
                >
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-green-500/40 rounded-tl-2xl" />

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} p-0.5 flex-shrink-0 mt-0.5`}
                  >
                    <div className="w-full h-full rounded-xl bg-[#0a0a0a] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-green-400" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                      <h3 className="text-white font-bold font-mono text-sm leading-snug">
                        {c.title}
                      </h3>
                      {c.link ? (
                        <a
                          href={c.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-500/50 hover:text-green-400 transition-colors flex-shrink-0"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : null}
                    </div>

                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${typeColors[c.type]}`}
                      >
                        {c.type}
                      </span>
                      <span className="text-gray-600 text-xs font-mono flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {c.date}
                      </span>
                      <span className="text-gray-600 text-xs font-mono">
                        {c.issuer}
                      </span>
                    </div>

                    <p className="text-gray-400 text-xs font-mono leading-relaxed">
                      {c.description}
                    </p>

                    {c.verified && (
                      <div className="flex items-center gap-1 mt-2 text-green-500/60 text-[10px] font-mono">
                        <CheckCircle className="w-3 h-3" />
                        Verified credential
                      </div>
                    )}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
