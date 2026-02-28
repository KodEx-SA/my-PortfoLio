/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
"use client";
import { useState, useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";
import { FaGithub } from "react-icons/fa";
import {
  Rocket,
  Code,
  ArrowRight,
  Wand2,
  Lightbulb,
  Download,
  Terminal,
} from "lucide-react";

// Neural Network Background Component
const NeuralNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const nodes = [];
    const nodeCount = 50;

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    function animate() {
      ctx.fillStyle = "rgba(10, 10, 10, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw node
        ctx.fillStyle = "rgba(74, 222, 128, 0.3)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i === j) return;
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(74, 222, 128, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-30"
      style={{ zIndex: 5 }}
    />
  );
};

// Data Stream Component
const DataStream = () => {
  const chars = "01アイウエオカキクケコサシスセソ";
  const [streams] = useState(() =>
    Array.from({ length: 8 }, (__, i) => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    })),
  );

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden opacity-10"
      style={{ zIndex: 8 }}
    >
      {streams.map((stream, i) => (
        <div
          key={i}
          className="absolute top-0 text-green-400 text-xs font-mono animate-data-stream"
          style={{
            left: stream.left,
            animationDelay: stream.delay,
          }}
        >
          {Array.from(
            { length: 20 },
            () => chars[Math.floor(Math.random() * chars.length)],
          ).join("")}
        </div>
      ))}
    </div>
  );
};

// Grid Background Component with Scan Line
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
      {/* Horizontal scan line */}
      <div className="scanline-horizontal" />
    </div>
  );
};

// Terminal Typing Effect
const TerminalTyping = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span>
      {displayText}
      <span
        className={`${cursorVisible ? "opacity-100" : "opacity-0"} transition-opacity`}
      >
        ▋
      </span>
    </span>
  );
};

export default function Hero() {
  const words = ["Developer | Engineer", "Problem Solver", "Tech Enthusiast"];
  const [showCode, setShowCode] = useState(false);

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
    // Delay code display for terminal effect
    const timer = setTimeout(() => {
      setShowCode(true);
      Prism.highlightAll();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen relative">
      <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Neural Network Background */}
        <NeuralNetwork />

        {/* Data Stream Effect */}
        <DataStream />

        {/* Grid Background with Scan Line */}
        <GridBackground />

        {/* Meteors Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
          <Meteors number={30} />
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-30 gap-8 lg:gap-16 max-w-7xl">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 relative">
            {/* Decorative Blurs */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl hidden lg:block animate-pulse-slow"></div>
            <div
              className="absolute top-40 -right-20 w-64 h-64 bg-green-400/10 rounded-full blur-3xl hidden lg:block animate-pulse-slow"
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Welcome Badge with Glitch */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] backdrop-blur-sm border border-green-500/30 mb-8 hover:border-green-400/50 transition-colors group relative overflow-hidden">
              <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse relative z-10"></div>
              <span className="text-green-400 text-sm font-medium font-mono relative z-10">
                <TerminalTyping text="Welcome to my universe" />
              </span>
            </div>

            {/* Name Section with Glitch Effect */}
            <div className="relative mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <SparklesText text="Hello" />
                <span className="block mt-2 relative">
                  I&apos;m{" "}
                  <span className="relative inline-block group">
                    <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent animate-gradient-x">
                      Ashley K Motsie
                    </span>
                    {/* Glitch layers */}
                    <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-70 animate-glitch-1">
                      Ashley K Motsie
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-70 animate-glitch-2">
                      Ashley K Motsie
                    </span>
                  </span>
                </span>
              </h1>
              <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-32 h-32 bg-green-500/20 rounded-full blur-2xl animate-pulse"></div>
            </div>

            {/* Role Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 mb-8 backdrop-blur-sm relative overflow-hidden group">
              <span className="absolute inset-0 bg-green-500/5 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-out" />
              <Terminal className="text-green-400 w-5 h-5 relative z-10 animate-pulse" />
              <FlipWords
                className="text-xl text-green-400 font-medium font-mono relative z-10"
                words={words}
              />
            </div>

            {/* Description */}
            <div className="relative mb-12 max-w-xl">
              <p className="text-xl text-gray-300 leading-relaxed font-mono">
                <span className="text-green-400">&gt;</span> Tech Enthusiast |
                Utilizing frameworks and coding the future
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              {/* View Projects Button — solid green */}
              <a
                href="/projects"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#22c55e] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2 text-white font-medium font-mono">
                  View Projects
                  <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>

              {/* GitHub Button — outline */}
              <a
                href="https://github.com/KodEx-SA"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-green-500/50 bg-[#1a1a1a] transition-all duration-300 hover:scale-105 hover:border-green-400 hover:bg-green-500/10 overflow-hidden"
              >
                <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                <span className="relative flex items-center gap-2 text-gray-300 font-medium font-mono group-hover:text-green-400 transition-colors">
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </span>
              </a>

              {/* Resume Button — ghost/subtle */}
              <a
                href="/Ashley's_resume.pdf"
                download="Ashley_Motsie_Resume.pdf"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-green-500/30 bg-transparent transition-all duration-300 hover:scale-105 hover:border-green-400/60 hover:bg-green-500/5 overflow-hidden"
              >
                <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                <span className="relative flex items-center gap-2 text-gray-400 font-medium font-mono group-hover:text-green-400 transition-colors">
                  Get Resume
                  <Download className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-y-1" />
                </span>
              </a>
            </div>

            {/* Floating Badges */}
            <div className="hidden lg:block absolute left-24 top-10 animate-float-slow">
              <div className="px-4 py-2 rounded-lg bg-green-500/10 backdrop-blur-sm border border-green-500/30 text-green-400 font-mono text-sm">
                <Wand2 className="inline w-4 h-4 mr-2" />
                Chatbot Crafter
              </div>
            </div>
            <div className="hidden lg:block absolute right-10 top-20 animate-float">
              <div className="px-4 py-2 rounded-lg bg-green-500/10 backdrop-blur-sm border border-green-500/30 text-green-400 font-mono text-sm">
                <Code className="inline w-4 h-4 mr-2" />
                Clean Code Practitioner
              </div>
            </div>
            <div className="hidden lg:block absolute top-72 left-3/4 transform -translate-x-1/2 animate-float-delayed">
              <div className="px-4 py-2 rounded-lg bg-green-500/10 backdrop-blur-sm border border-green-500/30 text-green-400 font-mono text-sm">
                <Lightbulb className="inline w-4 h-4 mr-2" />
                Innovator
              </div>
            </div>
          </div>

          {/* Right Column - Code Window */}
          <div className="w-full lg:w-1/2">
            <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-green-500 via-green-400 to-green-500 animate-gradient-x">
              {/* Scan line over code window */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="scanline-code" />
              </div>

              <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden relative">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-green-500/20">
                  <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer animate-pulse"></div>
                  <span className="ml-2 text-sm text-green-400 flex items-center gap-2 font-mono">
                    <Terminal className="w-4 h-4 animate-pulse" />
                    developer.js
                  </span>
                  <span className="ml-auto text-xs text-green-500/50 font-mono">
                    Live
                  </span>
                </div>

                {/* Code Content */}
                <pre className="language-javascript p-6 max-h-[500px] overflow-y-auto custom-scrollbar">
                  {showCode && (
                    <code className="language-javascript">{code}</code>
                  )}
                </pre>

                {/* Tech corner brackets */}
                <div className="absolute top-16 left-2 w-3 h-3 border-l-2 border-t-2 border-green-500/30" />
                <div className="absolute top-16 right-2 w-3 h-3 border-r-2 border-t-2 border-green-500/30" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-green-500/30" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-green-500/30" />
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
        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(-2px, 2px); }
          66% { transform: translate(2px, -2px); }
        }
        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(2px, -2px); }
          66% { transform: translate(-2px, 2px); }
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
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-data-stream {
          animation: data-stream 8s linear infinite;
        }
        .animate-glitch-1 {
          animation: glitch-1 0.3s infinite;
        }
        .animate-glitch-2 {
          animation: glitch-2 0.3s infinite reverse;
        }
        .scanline-horizontal {
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
          animation: scan-horizontal 4s linear infinite;
          pointer-events: none;
          z-index: 15;
        }
        .scanline-code {
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
          animation: scan-code 3s linear infinite;
          pointer-events: none;
        }
        @keyframes scan-horizontal {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
        @keyframes scan-code {
          0% { transform: translateY(0); }
          100% { transform: translateY(500px); }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(34, 197, 94, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(74, 222, 128, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(74, 222, 128, 0.5);
        }
      `}</style>
    </main>
  );
}
