import { useState } from "react";
import {
  Award,
  Calendar,
  BookOpen,
  Trophy,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";

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
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-green-600/5 rounded-full blur-3xl animate-pulse"
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

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm">
            <GraduationCap className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">
              Academic Background
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent animate-gradient-x">
            Educational Journey
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover how academic excellence shapes innovative thinking and
            professional growth.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full mx-auto" />
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

              {/* Corner accents */}
              <div
                className={`absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 rounded-tl-2xl transition-colors duration-300 ${
                  hoveredIndex === index
                    ? "border-green-400"
                    : "border-green-500/20"
                }`}
              />
              <div
                className={`absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 rounded-br-2xl transition-colors duration-300 ${
                  hoveredIndex === index
                    ? "border-green-400"
                    : "border-green-500/20"
                }`}
              />

              <div className="space-y-6 relative z-10">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl p-3 bg-green-500/10 rounded-xl border border-green-500/20">
                      {edu.mascot}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                        {edu.degree}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-2 pl-1">
                    <p className="text-base md:text-lg text-gray-300 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-green-500" />
                      {edu.school}
                    </p>
                    <p className="text-gray-400 flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-green-500" />
                      {edu.year}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-green-600 rounded-full" />
                  <p className="text-gray-300 text-sm leading-relaxed pl-4">
                    {edu.description}
                  </p>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-green-400" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 flex items-center gap-2 text-xs md:text-sm hover:bg-green-500/20 transition-colors"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-green-400" />
                    Key Skills Learned
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-green-500/5 border border-green-500/20 text-gray-300 hover:text-green-400 hover:border-green-400/40 transition-all"
                      >
                        {skill}
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
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 font-medium">
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
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </section>
  );
};

export default EducationSection;
