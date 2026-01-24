/* eslint-disable react-hooks/purity */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Code2, Activity, Cpu, Layers, Network, Binary, MapPin, Terminal } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  location,
  period,
  description,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    {/* Scan line effect */}
    <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
      <div className="scanline-card" />
    </div>

    <div className="relative bg-[#0a0a0a] rounded-lg p-8 h-full border border-green-500/30 shadow-xl backdrop-blur-xl hover:border-green-400/50 transition-colors">
      {/* Floating icon with pulse effect */}
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-green-600 opacity-25 rounded-full blur-xl group-hover:opacity-75 transition-all duration-500" />
        <Icon className="w-12 h-12 text-green-400 relative z-10 transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
      </div>

      {/* Content with improved typography */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent font-mono">
          {title}
        </h3>
        
        {/* Company and Location */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-green-400 text-lg font-mono">{company}</span>
            {location && (
              <>
                <span className="text-gray-500">•</span>
                <div className="flex items-center gap-1.5 text-gray-400">
                  <MapPin className="w-4 h-4 animate-pulse" />
                  <span className="text-sm font-mono">{location}</span>
                </div>
              </>
            )}
          </div>
          
          {/* Period Badge */}
          <div className="relative inline-block">
            <span className="text-sm font-mono bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20 text-gray-300 inline-block relative z-10">
              <Terminal className="inline w-3 h-3 mr-1.5" />
              {period}
            </span>
          </div>
        </div>
        
        <p className="text-gray-300 border-l-4 border-green-500/50 pl-4 mt-4 leading-relaxed font-mono text-sm">
          <span className="text-green-400">&gt;</span> {description}
        </p>
      </div>

      {/* Tech corner brackets with animation */}
      <div className="absolute top-4 right-4 w-6 h-6 opacity-50 group-hover:opacity-100 transition-all duration-300">
        <div className="absolute top-0 right-0 w-full h-[2px] bg-green-400 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        <div className="absolute top-0 right-0 w-[2px] h-full bg-green-400 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 delay-150" />
      </div>
      <div className="absolute bottom-4 left-4 w-6 h-6 opacity-50 group-hover:opacity-100 transition-all duration-300">
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        <div className="absolute bottom-0 left-0 w-[2px] h-full bg-green-500 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 delay-150" />
      </div>

      {/* Glitch overlay on hover */}
      <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-screen" />
    </div>
  </div>
);

// Data Stream Component
const DataStream = () => {
  const chars = '01アイウエオ';
  const streams = Array.from({ length: 6 }, (_, i) => ({
    left: `${15 + i * 15}%`,
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

// Circuit Lines Component
const CircuitLines = () => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 z-5" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#22c55e', stopOpacity: 0 }} />
          <stop offset="50%" style={{ stopColor: '#22c55e', stopOpacity: 0.5 }} />
          <stop offset="100%" style={{ stopColor: '#22c55e', stopOpacity: 0 }} />
        </linearGradient>
      </defs>
      
      {/* Horizontal lines */}
      <line x1="0" y1="20%" x2="100%" y2="20%" stroke="url(#circuit-gradient)" strokeWidth="1" className="animate-pulse" />
      <line x1="0" y1="50%" x2="100%" y2="50%" stroke="url(#circuit-gradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
      <line x1="0" y1="80%" x2="100%" y2="80%" stroke="url(#circuit-gradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Vertical lines */}
      <line x1="25%" y1="0" x2="25%" y2="100%" stroke="url(#circuit-gradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
      <line x1="75%" y1="0" x2="75%" y2="100%" stroke="url(#circuit-gradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Circuit nodes */}
      <circle cx="25%" cy="20%" r="3" fill="#22c55e" opacity="0.3" className="animate-pulse" />
      <circle cx="75%" cy="50%" r="3" fill="#22c55e" opacity="0.3" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
      <circle cx="50%" cy="80%" r="3" fill="#22c55e" opacity="0.3" className="animate-pulse" style={{ animationDelay: '1.4s' }} />
    </svg>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Network,
      title: "Software Developer & IT Technician",
      company: "Eullafied Tech Solutions",
      location: "On-Site - Rustenburg, SA",
      period: "June 2024 - Current",
      description:
        "Collaborate with cross-functional teams to contribute to agile project development. Work on code optimization techniques & play a key part in the overall development process.",
    },
    {
      icon: Code2,
      title: "AI Software Developer",
      company: "AI Global Networks",
      location: "Remote - Jhb",
      period: "July 2024 - Current",
      description:
        "Responsible for developing scalable applications with integrated AI features. Focused on improving app performance & efficiency. Implementing robust testing protocols to ensure high-quality software.",
    },
    {
      icon: Code2,
      title: "Web Developer & Graphic Designer",
      company: "MapsMediaProductions",
      location: "Remote - Mahikeng, SA",
      period: "August 2025 - Current",
      description:
        "Responsible for developing & maintaining client websites. Collaborating on graphic design projects as needed. Ensuring timely project delivery. Communicating with clients under the company's direction.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden pt-32 pb-20">
      {/* Data Stream Effect */}
      <DataStream />

      {/* Circuit Lines */}
      <CircuitLines />

      {/* Grid background with green tint */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] z-0" />

      {/* Main scan line */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="scanline-main" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-500 rounded-full opacity-30 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="relative container mx-auto px-6 mt-10 z-20">
        {/* Section header with enhanced effects */}
        <div className="flex flex-col items-center space-y-8 mb-20">
          <div className="relative">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-center animate-gradient-x font-mono">
              <span className="relative inline-block">
                Professional Journey
                {/* Glitch effect on title */}
                <span className="absolute inset-0 text-green-400 opacity-0 hover:opacity-50 animate-glitch-1">
                  Professional Journey
                </span>
              </span>
            </h2>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-500/20 to-green-600/20 blur-3xl rounded-full" />
          </div>
          <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl font-mono">
            <span className="text-green-400">&gt;</span> &quot;Transforming ideas into digital reality, one project at a time&quot;
          </p>

          {/* Decorative line with animation */}
          <div className="relative w-24 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-green-400 animate-scan-line" />
          </div>
        </div>

        {/* Experience grid with improved layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ExperienceCard {...exp} />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm relative overflow-hidden group hover:border-green-400/50 transition-all">
            <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse relative z-10" />
            <span className="text-green-400 font-medium font-mono relative z-10">
              Open to new opportunities
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced background gradient effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/5 rounded-full filter blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-green-600/5 rounded-full filter blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <style>{`
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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
        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(-2px, 2px); }
          66% { transform: translate(2px, -2px); }
        }
        .animate-gradient-xy {
          animation: gradient-xy 3s ease infinite;
          background-size: 200% 200%;
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-data-stream {
          animation: data-stream 10s linear infinite;
        }
        .animate-scan-line {
          animation: scan-line 2s linear infinite;
        }
        .animate-glitch-1 {
          animation: glitch-1 0.3s infinite;
        }
        .scanline-main {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(74, 222, 128, 0.4) 50%, 
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
            rgba(74, 222, 128, 0.5) 50%, 
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
    </div>
  );
};

export default ExperienceSection;