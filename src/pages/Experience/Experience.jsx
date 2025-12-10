/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Code2, Activity, Cpu, Layers, Network, Binary } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-[#0a0a0a] rounded-lg p-8 h-full border border-green-500/30 shadow-xl backdrop-blur-xl hover:border-green-400/50 transition-colors">
      {/* Floating icon with pulse effect */}
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-green-600 opacity-25 rounded-full blur-xl group-hover:opacity-75 transition-all duration-500" />
        <Icon className="w-12 h-12 text-green-400 relative z-10 transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Content with improved typography */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-300 flex-wrap gap-2">
          <span className="font-semibold text-green-400">{company}</span>
          <span className="text-sm font-mono bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
            {period}
          </span>
        </div>
        <p className="text-gray-300 border-l-4 border-green-500/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-4 right-4 w-20 h-20 opacity-50 group-hover:opacity-100 transition-opacity">
        <div className="absolute top-0 right-0 w-6 h-[2px] bg-green-400" />
        <div className="absolute top-0 right-0 w-[2px] h-6 bg-green-400" />
      </div>
      <div className="absolute bottom-4 left-4 w-20 h-20 opacity-50 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-green-500" />
        <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-green-500" />
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Network,
      title: "Jr Software Dev & IT Technician",
      company: "ETS",
      period: "June 2024 - Current",
      description:
        "Collaborate with cross-functional teams to contribute to agile project development. Work on code optimization techniques & play a key part in the overall development process.",
    },
    {
      icon: Code2,
      title: "AI Software Developer",
      company: "AI Global Networks",
      period: "July 2024 - Current",
      description:
        "Responsible for developing scalable applications with integrated AI features. Focused on improving app performance & efficiency. Implementing robust testing protocols to ensure high-quality software.",
    },
    {
      icon: Code2,
      title: "Web Developer & Graphic Designer",
      company: "Maps Media Productions",
      period: "November 2025 - Current",
      description:
        "Responsible for developing & maintaining client websites. Collaborating on graphic design projects as needed. Ensuring timely project delivery. Communicating with clients under the company's direction.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden pt-32 pb-20">
      {/* Grid background with green tint */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
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
      <div className="relative container mx-auto px-6 mt-10">
        {/* Section header with enhanced effects */}
        <div className="flex flex-col items-center space-y-8 mb-20">
          <div className="relative">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-center animate-gradient-x">
              Professional Journey
            </h2>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-500/20 to-green-600/20 blur-3xl rounded-full" />
          </div>
          <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
            &quot;Transforming ideas into digital reality, one project at a
            time&quot;
          </p>

          {/* Decorative line */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full" />
        </div>

        {/* Experience grid with improved layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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

        {/* Call to action or additional info */}
        {/* <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 font-medium">
              Currently open to new opportunities
            </span>
          </div>
        </div> */}
      </div>

      {/* Enhanced background gradient effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/5 rounded-full filter blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-green-600/5 rounded-full filter blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <style>{`
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
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
      `}</style>
    </div>
  );
};

export default ExperienceSection;
