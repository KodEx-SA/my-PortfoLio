/* eslint-disable react-hooks/purity */
import { useState } from "react";
import {
  Award,
  Calendar,
  BookOpen,
  Trophy,
  Sparkles,
  GraduationCap,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";

// Data Stream Component
const DataStream = () => {
  const chars = '01アイウエオ';
  const streams = Array.from({ length: 4 }, (_, i) => ({
    left: `${25 + i * 20}%`,
    delay: `${Math.random() * 3}s`,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5 z-5">
      {streams.map((stream, i) => (
        <div
          key={i}
          className="absolute top-0 text-green-400 text-xs font-mono animate-data-stream"
          style={{
            left: stream.left,
            animationDelay: stream.delay,
          }}
        >
          {Array.from({ length: 30 }, () =>
            chars[Math.floor(Math.random() * chars.length)]
          ).join('')}
        </div>
      ))}
    </div>
  );
};

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Secondary School Certificate (NSC)",
      school: "Malefo Secondary School",
      mascot: "📘",
      year: "2016-2020",
      achievements: ["Subject: Mathematics, Science"],
      skills: ["Mathematics", "Physics", "Biology"],
      description:
        "Focused on science subjects with emphasis on practical laboratory work and scientific research methodologies.",
    },
    {
      degree: "College Certificate (NCV)",
      school: "Orbit Tvet College",
      mascot: "📗",
      year: "2022-2024",
      achievements: ["Subject: IT & Computer Science"],
      skills: [
        "Computer Programming",
        "System Analysis & Design",
        "Multimedia",
        "Data Communication & Networking",
      ],
      description:
        "Developed strong critical thinking skills through comprehensive study of Computer Science.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-32 md:py-40 bg-[#0a0a0a]">
      {/* Data Stream Effect */}
      <DataStream />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-green-600/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Grid Background with green tint */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, #000 70%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, #000 70%, transparent 100%)",
        }}
      />

      {/* Main scan line */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="scanline-main" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-20">
        {/* Header Section */}
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

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent animate-gradient-x font-mono relative">
            <span className="relative inline-block">
              Educational Journey
              {/* Glitch effect */}
              <span className="absolute inset-0 text-green-400 opacity-0 hover:opacity-30 animate-glitch-subtle">
                Educational Journey
              </span>
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-mono">
            <span className="text-green-400">&gt;</span> Discover how academic excellence shapes innovative thinking and
            professional growth.
          </p>

          <div className="relative w-24 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-green-400 animate-scan-line" />
          </div>
        </motion.div>

        {/* Education Cards */}
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
              className={`group relative border rounded-2xl p-8 transition-all duration-300 bg-[#1a1a1a] backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-green-400/50 scale-[1.02] shadow-xl shadow-green-500/20"
                  : "border-green-500/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out rounded-2xl" />

              {/* Scan line over card */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className="scanline-card" />
              </div>

              {/* Tech corner brackets with animation */}
              <div className={`absolute top-4 right-4 w-6 h-6 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-30'}`}>
                <div className={`absolute top-0 right-0 w-full h-[2px] transition-all duration-300 ${hoveredIndex === index ? 'bg-green-400 scale-x-100' : 'bg-green-500/50 scale-x-0'} origin-right`} />
                <div className={`absolute top-0 right-0 w-[2px] h-full transition-all duration-300 delay-75 ${hoveredIndex === index ? 'bg-green-400 scale-y-100' : 'bg-green-500/50 scale-y-0'} origin-top`} />
              </div>
              <div className={`absolute bottom-4 left-4 w-6 h-6 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-30'}`}>
                <div className={`absolute bottom-0 left-0 w-full h-[2px] transition-all duration-300 ${hoveredIndex === index ? 'bg-green-400 scale-x-100' : 'bg-green-500/50 scale-x-0'} origin-left`} />
                <div className={`absolute bottom-0 left-0 w-[2px] h-full transition-all duration-300 delay-75 ${hoveredIndex === index ? 'bg-green-400 scale-y-100' : 'bg-green-500/50 scale-y-0'} origin-bottom`} />
              </div>

              <div className="space-y-6 relative z-10">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="relative text-4xl p-3 bg-green-500/10 rounded-xl border border-green-500/20 group-hover:border-green-400/30 transition-colors">
                      {edu.mascot}
                      {/* Pulsing ring */}
                      <span className="absolute inset-0 rounded-xl border-2 border-green-400/30 animate-ping-slow" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors font-mono">
                        {edu.degree}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-2 pl-1">
                    <p className="text-base md:text-lg text-gray-300 flex items-center gap-2 font-mono">
                      <BookOpen className="w-5 h-5 text-green-500 animate-pulse" />
                      {edu.school}
                    </p>
                    <p className="text-gray-400 flex items-center gap-2 text-sm font-mono">
                      <Calendar className="w-4 h-4 text-green-500" />
                      <Terminal className="w-3 h-3" />
                      {edu.year}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-green-600 rounded-full" />
                  <p className="text-gray-300 text-sm leading-relaxed pl-4 font-mono">
                    <span className="text-green-400">&gt;</span> {edu.description}
                  </p>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2 font-mono">
                    <Trophy className="w-4 h-4 text-green-400 animate-pulse" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="group/badge relative px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 flex items-center gap-2 text-xs md:text-sm hover:bg-green-500/20 transition-all overflow-hidden font-mono"
                      >
                        <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover/badge:translate-x-[100%] transition-transform duration-500 ease-out" />
                        <Award className="w-4 h-4 relative z-10" />
                        <span className="relative z-10">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2 font-mono">
                    <Sparkles className="w-4 h-4 text-green-400 animate-pulse" />
                    Key Skills Learned
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-green-500/5 border border-green-500/20 text-gray-300 hover:text-green-400 hover:border-green-400/40 transition-all font-mono"
                      >
                        #{skill}
                      </span>
                    ))}
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
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes data-stream {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes scan-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes glitch-subtle {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(-1px, 1px); }
          66% { transform: translate(1px, -1px); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.2; }
          100% { transform: scale(1); opacity: 0.5; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-data-stream {
          animation: data-stream 10s linear infinite;
        }
        .animate-scan-line {
          animation: scan-line 2s linear infinite;
        }
        .animate-glitch-subtle {
          animation: glitch-subtle 0.4s infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 3s ease-in-out infinite;
        }
        .scanline-main {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(74, 222, 128, 0.3) 50%, 
            transparent 100%
          );
          animation: scan-main 5s linear infinite;
        }
        .scanline-card {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(74, 222, 128, 0.4) 50%, 
            transparent 100%
          );
          animation: scan-card 3s linear infinite;
        }
        @keyframes scan-main {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
        @keyframes scan-card {
          0% { transform: translateY(0); }
          100% { transform: translateY(500px); }
        }
      `}</style>
    </section>
  );
};

export default EducationSection;