"use client";
import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";
import {
  Rocket,
  Code,
  ArrowRight,
  Wand2,
  Lightbulb,
  Download,
} from "lucide-react";

// Grid Background Component
const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-10">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, #22c55e 0.5px, transparent 0.5px),
              linear-gradient(to bottom, #22c55e 0.5px, transparent 0.5px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </div>
  );
};

export default function Hero() {
  const words = [
    "Software Developer",
    "Problem Solver", 
    "Tech Enthusiast"
  ];

  const [code] = useState(`const profile = {
  name: 'Ashley K Motsie',
  title: 'Developer',
  skills: [
    'React', 'Flask', 'Python', 
    'Javascript', 'Typescript', 
    'PostgreSQL', 'Node.js', 'Bootstrap', 
    'Tailwind CSS', 'Git', 'GitHub'
  ],
  currentFocus: [
    "Django REST APIs",
    "AI, NLP, ML with Python",
    "Cloud automation & scalability"
  ],
  motto: "Learn, Code, Build, Repeat!",
  getVision() { 
    return "Empowering ideas with scalable tech."; 
  },
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  yearsOfExperience: 4, 
  hireable() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5 &&
      this.yearsOfExperience >= 3
    );
  }
};`);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Background Elements */}
        <GridBackground />

        {/* Meteors Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
          <Meteors number={50} />
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-30 gap-8 lg:gap-16 max-w-7xl">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 relative">
            {/* Decorative Blurs */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl hidden lg:block"></div>
            <div className="absolute top-40 -right-20 w-64 h-64 bg-green-400/10 rounded-full blur-3xl hidden lg:block"></div>

            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] backdrop-blur-sm border border-green-500/30 mb-8 hover:border-green-400/50 transition-colors">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">
                Welcome to my universe
              </span>
            </div>

            {/* Name Section */}
            <div className="relative mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <SparklesText text="Hello" />
                <span className="block mt-2">
                  I&apos;m{" "}
                  <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent animate-gradient-x">
                    Ashley K Motsie
                  </span>
                </span>
              </h1>
              <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-32 h-32 bg-green-500/20 rounded-full blur-2xl animate-pulse"></div>
            </div>

            {/* Role Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 mb-8 backdrop-blur-sm">
              <Rocket className="text-green-400 w-5 h-5" />
              <FlipWords
                className="text-xl text-green-400 font-medium"
                words={words}
              />
            </div>

            {/* Description */}
            <div className="relative mb-12 max-w-xl">
              <p className="text-xl text-gray-300 leading-relaxed">
                Tech Enthusiast | Utilizing frameworks and coding the future
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* View Projects Button */}
              <a
                href="https://github.com/KodEx-SA"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#22c55e] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2 text-white font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>

              {/* Resume Button */}
              <a
                href="/Ashley Motsie's Resume_20250807_043908_0000.pdf"
                download="Ashley_Motsie_Resume.pdf"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-green-500/50 bg-[#1a1a1a] transition-all duration-300 hover:scale-105 hover:border-green-400 hover:bg-green-500/10"
              >
                <span className="flex items-center gap-2 text-gray-300 font-medium group-hover:text-green-400 transition-colors">
                  Get Resume
                  <Download className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-y-1" />
                </span>
              </a>
            </div>

            {/* Floating Badges */}
            <div className="hidden lg:block absolute left-24 top-10 animate-float-slow">
              <div className="px-4 py-2 rounded-lg bg-green-500/10 backdrop-blur-sm border border-green-500/30 text-green-400">
                <Wand2 className="inline w-4 h-4 mr-2" />
                Chatbot Crafter
              </div>
            </div>
            <div className="hidden lg:block absolute right-10 top-20 animate-float">
              <div className="px-4 py-2 rounded-lg bg-green-500/10 backdrop-blur-sm border border-green-500/30 text-green-400">
                <Code className="inline w-4 h-4 mr-2" />
                Clean Code Practitioner
              </div>
            </div>
            <div className="hidden lg:block absolute top-72 left-3/4 transform -translate-x-1/2 animate-float-delayed">
              <div className="px-4 py-2 rounded-lg bg-green-500/10 backdrop-blur-sm border border-green-500/30 text-green-400">
                <Lightbulb className="inline w-4 h-4 mr-2" />
                Innovator
              </div>
            </div>
          </div>

          {/* Right Column - Code Window */}
          <div className="w-full lg:w-1/2">
            <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-green-500 via-green-400 to-green-500 animate-gradient-x">
              <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-green-500/20">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-sm text-green-400 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    developer.js
                  </span>
                </div>
                <pre className="language-javascript p-6 max-h-[500px] overflow-y-auto">
                  <code className="language-javascript">{code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(-50%); }
          50% { transform: translateY(-20px) translateX(-50%); }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3.5s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}