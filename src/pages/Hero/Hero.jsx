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
              linear-gradient(to right, white 0.5px, transparent 0.5px),
              linear-gradient(to bottom, white 0.5px, transparent 0.5px)
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
    "Software Development",
    "AI & API Integration",
  ];

  const [code] = useState(`
const profile = {
    name: 'Ashley K Motsie',
    title: 'Developer',
    skills: [
        'React', 'Flask', 'Django', 'MSSQL',
        'Python', 'Javascript', 'MySQL', 
        'PostgreSQL', 'Docker','Bootstrap', 
        'Tailwindcss','Git', 'GitHub'
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    yearsOfExperience: 4+, 
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5 &&
            this.yearsOfExperience >= 3
        );
    }
};
  `);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <main className="bg-[#000000] text-white min-h-screen">
      <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Background Elements */}
        <GridBackground />

        {/* Meteors Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
          <Meteors number={10} />
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 gap-8 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 relative">
            {/* Decorative Blurs */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-800/10 rounded-full blur-3xl hidden lg:block"></div>
            <div className="absolute top-40 -right-20 w-64 h-64 bg-green-400/10 rounded-full blur-3xl hidden lg:block"></div>

            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black backdrop-blur-sm border border-green-700/50 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">
                Welcome to my universe
              </span>
            </div>

            {/* Name Section */}
            <div className="relative mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <SparklesText text="Hello" />
                <span className="relative inline-block">
                  I&apos;m
                  <span className="typing-effect gradient-text ml-2">
                    Ashley K Motsie
                  </span>
                </span>
              </h1>
              <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-32 h-32 bg-green-700/20 rounded-full blur-2xl animate-pulse"></div>
            </div>

            {/* Role Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-green-600/10 to-teal-600/10 border border-blue-500/20 mb-8 backdrop-blur-sm">
              <Rocket className="text-green-400 animate-bounce w-5 h-5" />
              <FlipWords
                className="text-xl text-green-400 font-medium"
                words={words}
              />
            </div>

            {/* Description */}
            <div className="relative mb-12 max-w-xl">
              <p className="text-xl text-gray-300/90 leading-relaxed">
                Tech Enthusiast | Utilizing frameworks and coding the future
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* View Projects Button */}
              <a
                href="https://github.com/KodEx-SA"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
              >
                <span className="flex items-center justify-center gap-2 w-full px-8 py-4 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                  <span className="text-white font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 transform transition-all duration-300 group-hover:translate-x-1" />
                </span>
              </a>

              {/* Contact Button */}
              <a
                href="/src/assets/Ashley Motsie's Resume_20250807_043908_0000.pdf"
                download="Ashley_Motsie_Resume.pdf"
                className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-green-800 to-green-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
              >
                <span className="flex items-center justify-center gap-2 w-full px-8 py-4 rounded-[11px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                  <span className="text-gray-300 font-medium group-hover:text-white">Get Resume</span>
                  <Download className="w-4 h-4 transform transition-all duration-300 group-hover:rotate-12" />
                </span>
              </a>
            </div>

            {/* Floating Badges */}
            <div className="hidden lg:block absolute left-24 top-10 animate-float-slow">
              <div className="px-4 py-2 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400">
                <Wand2 className="inline w-4 h-4 mr-2" />
                Chatbots Craftor
              </div>
            </div>
            <div className="hidden lg:block absolute right-10 top-20 animate-float">
              <div className="px-4 py-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400">
                <Code className="inline w-4 h-4 mr-2" />
                Clean Code Practitioner
              </div>
            </div>
            <div className="hidden lg:block absolute top-72 left-3/4 transform -translate-x-1/2 animate-float">
              <div className="px-4 py-2 rounded-lg bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-400">
                <Lightbulb className="inline w-4 h-4 mr-2" />
                Innovator
              </div>
            </div>
          </div>

          {/* Right Column - Code Window */}
          <div className="w-full lg:w-1/2">
            <div className="gradient-border">
              <div className="code-window bg-[#091121]">
                <div className="window-header">
                  <div className="window-dot bg-red-500"></div>
                  <div className="window-dot bg-yellow-500"></div>
                  <div className="window-dot bg-green-500"></div>
                  <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    developer.js
                  </span>
                </div>
                <pre className="language-javascript">
                  <code className="language-javascript">{code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}