/* eslint-disable react-hooks/purity */
/* eslint-disable react/prop-types */
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import {
  Code2,
  Paintbrush,
  Database,
  Layout,
  Cpu,
  Cloud,
  Sparkles,
  Terminal,
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

// Data Stream Component
const DataStream = () => {
  const chars = '01アイウエオ';
  const streams = Array.from({ length: 5 }, (_, i) => ({
    left: `${20 + i * 18}%`,
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
          {Array.from({ length: 35 }, () =>
            chars[Math.floor(Math.random() * chars.length)]
          ).join('')}
        </div>
      ))}
    </div>
  );
};

const SkillCard = ({ icon: Icon, title, skills }) => (
  <Card className="group relative overflow-hidden bg-[#1a1a1a] border-green-500/30 hover:border-green-400/50 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20 backdrop-blur-sm">
    {/* Animated shimmer effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>

    {/* Scan line over card */}
    <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
      <div className="scanline-card" />
    </div>

    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative p-3 rounded-xl bg-green-500/10 border border-green-500/20 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-8 h-8 text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
          {/* Pulsing ring behind icon */}
          <span className="absolute inset-0 rounded-xl border-2 border-green-400/30 animate-ping-slow" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-500 font-mono">
          {title}
        </h3>
      </div>

      {/* Tech corner brackets */}
      <div className="absolute top-3 right-3 w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity">
        <div className="absolute top-0 right-0 w-full h-[1px] bg-green-400" />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-green-400" />
      </div>
      <div className="absolute bottom-3 left-3 w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-green-400" />
        <div className="absolute bottom-0 left-0 w-[1px] h-full bg-green-400" />
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-green-500/5 hover:bg-green-500/10 text-gray-300 hover:text-green-400 border-green-500/20 hover:border-green-400/40 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 overflow-hidden font-mono"
          >
            {/* Sweep effect on badge hover */}
            <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover/badge:translate-x-[100%] transition-transform duration-500 ease-out" />
            <span className="relative z-10 transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="relative z-10 font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: [
        {
          name: "React",
          icon: <FaReact className="w-4 h-4 text-[#61DAFB]" />,
        },
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
      title: "Backend Development",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Python",
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "Django",
          icon: <SiDjango className="w-4 h-4 text-[#092E20]" />,
        },
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
      skills: [
        {
          name: "Docker",
          icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
        },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
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
      title: "Creative Skills",
      skills: [
        {
          name: "SVG Animation",
          icon: <MdAnimation className="w-4 h-4 text-[#00C853]" />,
        },
        {
          name: "UI Animation",
          icon: <MdAnimation className="w-4 h-4 text-[#FF4081]" />,
        },
      ],
    },
  ];

  return (
    <main className="pt-16 lg:pt-20 text-white min-h-screen bg-[#0a0a0a] relative overflow-hidden">
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
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
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

      <section className="container mx-auto px-4 py-12 relative z-20">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm relative overflow-hidden group">
            <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            <Sparkles className="w-4 h-4 text-green-400 relative z-10 animate-pulse" />
            <span className="text-green-400 text-sm font-medium font-mono relative z-10">
              Technical Expertise
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-400 animate-gradient-x font-mono relative">
            <span className="relative inline-block">
              Skills & Technologies
              {/* Glitch effect */}
              <span className="absolute inset-0 text-green-400 opacity-0 hover:opacity-30 animate-glitch-subtle">
                Skills & Technologies
              </span>
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed font-mono">
            <span className="text-green-400">&gt;</span> A comprehensive overview of my technical skills and the tools I use
            to build amazing digital experiences.
          </p>

          <div className="relative w-24 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-green-400 animate-scan-line" />
          </div>
        </div>

        {/* Icon Cloud Demo */}
        <div className="flex justify-center items-center mb-16">
          <div className="relative">
            {/* Glow effect behind icon cloud */}
            <div className="absolute inset-0 bg-green-500/10 blur-3xl rounded-full scale-150 animate-pulse-slow" />
            {/* Rotating ring */}
            <div className="absolute inset-0 rounded-full border-2 border-green-400/20 animate-spin-slow" style={{ animationDuration: '20s' }} />
            <IconCloudDemo />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <SkillCard
                icon={category.icon}
                title={category.title}
                skills={category.skills}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm relative overflow-hidden group hover:border-green-400/50 transition-all">
            <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse relative z-10" />
            <span className="text-green-400 font-medium font-mono relative z-10">
              <Terminal className="inline w-3 h-3 mr-2" />
              Always learning and expanding my skillset
            </span>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-data-stream {
          animation: data-stream 12s linear infinite;
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
        .animate-spin-slow {
          animation: spin-slow linear infinite;
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
          100% { transform: translateY(400px); }
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;