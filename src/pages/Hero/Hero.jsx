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
import DataStream from "@/components/DataStream";
import {
  Code,
  ArrowRight,
  Wand2,
  Lightbulb,
  Download,
  Terminal,
  GitBranch,
  Wifi,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

// Neural Network Background
const NeuralNetwork = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const nodes = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));
    let rafId;
    function animate() {
      ctx.fillStyle = "rgba(10, 10, 10, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        ctx.fillStyle = "rgba(74, 222, 128, 0.3)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();
        nodes.forEach((other, j) => {
          if (i === j) return;
          const dx = node.x - other.x,
            dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.strokeStyle = `rgba(74,222,128,${0.2 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });
      rafId = requestAnimationFrame(animate);
    }
    animate();
    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-30"
      style={{ zIndex: 5 }}
    />
  );
};

// Terminal Typing Effect
const TerminalTyping = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  useEffect(() => {
    let index = 0;
    const iv = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else clearInterval(iv);
    }, 30);
    return () => clearInterval(iv);
  }, [text]);
  useEffect(() => {
    const iv = setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(iv);
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

// ─── TERMINAL WINDOW ───
const codeString = `const ashley = {
  name:     "Ashley K Motsie",
  role:     "Full-Stack Developer & AI Engineer",
  location: "South Africa, NW - Rustenburg, ZA",
  exp:      "4+ years",
  stack: [
    "Next.js 15", "React", "TypeScript",
    "Python", "PostgreSQL", "Groq API",
    "AWS", "Docker", "Tailwind CSS",
  ],
  open_to:  ["Full-time", "Freelance", "Remote"],
  hireable: true,
};`;

const TerminalWindow = ({ showCode }) => {
  const lines = codeString.split("\n");
  const [visibleLines, setVisibleLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [done, setDone] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (!showCode) return;
    if (currentLine >= lines.length) {
      setDone(true);
      return;
    }
    const line = lines[currentLine];
    if (typedChars < line.length) {
      const t = setTimeout(() => setTypedChars((c) => c + 1), 14);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
        setCurrentLine((l) => l + 1);
        setTypedChars(0);
      }, 35);
      return () => clearTimeout(t);
    }
  }, [showCode, currentLine, typedChars, lines]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [visibleLines, typedChars]);

  const currentLinePartial =
    currentLine < lines.length ? lines[currentLine].slice(0, typedChars) : "";

  return (
    <div className="relative w-full">
      {/* Outer glow ring */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 blur-sm opacity-15 hover:opacity-30 transition-opacity duration-500" />

      {/* Shell */}
      <div className="relative bg-[#0c0e0f] rounded-2xl overflow-hidden border border-green-500/20 shadow-2xl font-mono">
        {/* Title bar */}
        <div className="flex items-center gap-3 px-4 py-3 bg-[#141617] border-b border-green-500/10 select-none">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57] cursor-pointer hover:brightness-125 transition-all" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e] cursor-pointer hover:brightness-125 transition-all" />
            <div className="w-3 h-3 rounded-full bg-[#28c840] cursor-pointer hover:brightness-125 animate-pulse transition-all" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-[12px] text-gray-500">
              ashley@kodex-sa: ~/portfolio
            </span>
          </div>
          <span className="flex items-center gap-1 text-[10px] text-green-500/60">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
            LIVE
          </span>
        </div>

        {/* Scanline */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-10">
          <div className="scanline-code" />
        </div>

        {/* Terminal body */}
        <div
          ref={bodyRef}
          className="p-5 overflow-y-auto custom-scrollbar relative z-20"
          style={{ minHeight: "380px", maxHeight: "460px" }}
        >
          {/* Initial prompt */}
          <div className="mb-2">
            <p className="text-[12px] leading-5">
              <span className="text-green-400">ashley@kodex-sa</span>
              <span className="text-gray-600">:</span>
              <span className="text-blue-400">~/portfolio</span>
              <span className="text-gray-500"> $ </span>
              <span className="text-white">cat ashley.ts</span>
            </p>
          </div>

          {/* Committed lines — syntax highlighted */}
          <pre className="language-javascript !bg-transparent !p-0 !m-0 !text-[12px] !leading-5">
            {showCode && visibleLines.length > 0 && (
              <code className="language-javascript">
                {visibleLines.join("\n")}
              </code>
            )}
          </pre>

          {/* Currently-typing line */}
          {!done && currentLine < lines.length && (
            <div className="text-[12px] leading-5 text-gray-300 whitespace-pre">
              {currentLinePartial}
              <span className="inline-block w-[7px] h-[13px] bg-green-400 ml-[1px] align-middle animate-cursor-blink" />
            </div>
          )}

          {/* Done — next prompt */}
          {done && (
            <div className="mt-3 text-[12px] leading-5">
              <span className="text-green-400">ashley@kodex-sa</span>
              <span className="text-gray-600">:</span>
              <span className="text-blue-400">~/portfolio</span>
              <span className="text-gray-500"> $ </span>
              <span className="inline-block w-[7px] h-[13px] bg-green-400 ml-[1px] align-middle animate-cursor-blink" />
            </div>
          )}
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-1.5 bg-green-600/10 border-t border-green-500/15 select-none">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[10px] text-green-400/60">
              <GitBranch className="w-3 h-3" /> main
            </span>
            <span className="text-[10px] text-gray-700">bash · zsh</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-gray-700">ashley.ts</span>
            <span className="flex items-center gap-1 text-[10px] text-green-400/50">
              <CheckCircle2 className="w-3 h-3" /> 0 errors
            </span>
          </div>
        </div>
      </div>

      {/* Corner brackets */}
      <div className="absolute top-3 left-3 w-4 h-4 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-green-400" />
        <div className="absolute top-0 left-0 w-[1px] h-full bg-green-400" />
      </div>
      <div className="absolute bottom-3 right-3 w-4 h-4 pointer-events-none opacity-40">
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-green-400" />
        <div className="absolute bottom-0 right-0 w-[1px] h-full bg-green-400" />
      </div>
    </div>
  );
};

// ─── HERO ────────────────────────────────────────────────────────────────────
export default function Hero() {
  const words = ["Full-stack Developer", "Problem Solver", "Tech Enthusiast"];
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCode(true);
      Prism.highlightAll();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen relative">
      <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Neural Network */}
        <NeuralNetwork />

        {/* Data Stream */}
        <DataStream count={8} opacity="opacity-10" />

        {/* Grid — unified with rest of portfolio */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

        {/* Meteors */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
          <Meteors number={30} />
        </div>

        {/* Main Content */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-30 gap-8 lg:gap-16 max-w-7xl">
          {/* ── LEFT — Text ── */}
          <div className="w-full lg:w-1/2 relative">
            {/* Decorative blurs */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl hidden lg:block animate-pulse-slow" />
            <div
              className="absolute top-40 -right-20 w-64 h-64 bg-green-400/10 rounded-full blur-3xl hidden lg:block animate-pulse-slow"
              style={{ animationDelay: "1s" }}
            />

            {/* Welcome badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 backdrop-blur-sm border border-green-500/30 mb-8 hover:border-green-400/50 transition-colors group relative overflow-hidden">
              <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse relative z-10" />
              <span className="text-green-400 text-sm font-medium font-mono relative z-10">
                <TerminalTyping text="Welcome to my universe" />
              </span>
            </div>

            {/* Name */}
            <div className="relative mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <SparklesText text="Hello" />
                <span className="block mt-2 relative">
                  I&apos;m{" "}
                  <span className="relative inline-block group">
                    <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent animate-gradient-x">
                      Ashley K Motsie
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-70 animate-glitch-1">
                      Ashley K Motsie
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-70 animate-glitch-2">
                      Ashley K Motsie
                    </span>
                  </span>
                </span>
              </h1>
              <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-32 h-32 bg-green-500/20 rounded-full blur-2xl animate-pulse" />
            </div>

            {/* Role badge */}
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
              {/* View Projects — solid green (primary) */}
              <a
                href="/projects"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#22c55e] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2 text-black font-semibold font-mono">
                  View Projects
                  <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>

              {/* GitHub — outlined (secondary) */}
              <a
                href="https://github.com/KodEx-SA"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-green-500/30 bg-transparent transition-all duration-300 hover:scale-105 hover:border-green-400/60 hover:bg-green-500/8 overflow-hidden"
              >
                <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                <span className="relative flex items-center gap-2 text-gray-300 font-medium font-mono group-hover:text-green-400 transition-colors">
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </span>
              </a>

              {/* Resume — ghost (tertiary) */}
              <a
                href="/Ashley_Motsie_Resume.pdf"
                download="Ashley_Motsie_Resume.pdf"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-green-500/20 bg-transparent transition-all duration-300 hover:scale-105 hover:border-green-400/40 hover:bg-green-500/5 overflow-hidden"
              >
                <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                <span className="relative flex items-center gap-2 text-gray-500 font-medium font-mono group-hover:text-green-400 transition-colors">
                  Get Resume
                  <Download className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-y-1" />
                </span>
              </a>
            </div>

            {/* Floating Badges */}
            <div className="hidden lg:block absolute left-24 top-10 animate-float-slow">
              <div className="px-4 py-2 rounded-lg bg-green-500/10 backdrop-blur-sm border border-green-500/20 text-green-400 font-mono text-sm">
                <Wand2 className="inline w-4 h-4 mr-2" />
                Chatbot Crafter
              </div>
            </div>
            <div className="hidden lg:block absolute right-10 top-20 animate-float">
              <div className="px-4 py-2 rounded-lg bg-green-500/10 backdrop-blur-sm border border-green-500/20 text-green-400 font-mono text-sm">
                <Code className="inline w-4 h-4 mr-2" />
                Clean Code Practitioner
              </div>
            </div>
            <div className="hidden lg:block absolute top-72 left-3/4 transform -translate-x-1/2 animate-float-delayed">
              <div className="px-4 py-2 rounded-lg bg-green-500/10 backdrop-blur-sm border border-green-500/20 text-green-400 font-mono text-sm">
                <Lightbulb className="inline w-4 h-4 mr-2" />
                Innovator
              </div>
            </div>
          </div>

          {/* ── RIGHT — VS Code window ── */}
          <div className="w-full lg:w-1/2">
            <TerminalWindow showCode={showCode} />
          </div>
        </div>
      </section>

      <style>{`
        @keyframes gradient-x {
          0%,100%{background-position:0% 50%}
          50%{background-position:100% 50%}
        }
        @keyframes float {
          0%,100%{transform:translateY(0px)}
          50%{transform:translateY(-20px)}
        }
        @keyframes float-slow {
          0%,100%{transform:translateY(0px)}
          50%{transform:translateY(-15px)}
        }
        @keyframes float-delayed {
          0%,100%{transform:translateY(0px) translateX(-50%)}
          50%{transform:translateY(-20px) translateX(-50%)}
        }
        @keyframes pulse-slow {
          0%,100%{opacity:0.3}
          50%{opacity:0.6}
        }
        @keyframes glitch-1 {
          0%,100%{transform:translate(0)}
          33%{transform:translate(-2px,2px)}
          66%{transform:translate(2px,-2px)}
        }
        @keyframes glitch-2 {
          0%,100%{transform:translate(0)}
          33%{transform:translate(2px,-2px)}
          66%{transform:translate(-2px,2px)}
        }
        @keyframes scan-line {
          0%{transform:translateX(-100%)}
          100%{transform:translateX(100%)}
        }
        .animate-gradient-x{animation:gradient-x 3s ease infinite;background-size:200% 200%}
        .animate-float{animation:float 3s ease-in-out infinite}
        .animate-float-slow{animation:float-slow 4s ease-in-out infinite}
        .animate-float-delayed{animation:float-delayed 3.5s ease-in-out infinite}
        .animate-pulse-slow{animation:pulse-slow 4s ease-in-out infinite}
        .animate-glitch-1{animation:glitch-1 0.3s infinite}
        .animate-glitch-2{animation:glitch-2 0.3s infinite reverse}
        .scanline-code{
          position:absolute;top:0;left:0;right:0;height:1px;
          background:linear-gradient(90deg,transparent 0%,rgba(74,222,128,0.4) 50%,transparent 100%);
          animation:scan-card 3s linear infinite;
        }
        @keyframes scan-card{
          0%{transform:translateY(0)}
          100%{transform:translateY(460px)}
        }
        .custom-scrollbar::-webkit-scrollbar{width:5px}
        .custom-scrollbar::-webkit-scrollbar-track{background:rgba(34,197,94,0.05);border-radius:4px}
        .custom-scrollbar::-webkit-scrollbar-thumb{background:rgba(74,222,128,0.2);border-radius:4px}
        .custom-scrollbar::-webkit-scrollbar-thumb:hover{background:rgba(74,222,128,0.4)}
        @keyframes cursor-blink{0%,100%{opacity:1}50%{opacity:0}}
        .animate-cursor-blink{animation:cursor-blink 0.8s ease-in-out infinite}
      `}</style>
    </main>
  );
}
