import { useState, useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { ArrowRight, Download, GitBranch, CheckCircle2 } from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";

// ============================= Terminal profile card (signature element) =============================
const codeLines = [
  'const ashley = {',
  '  name:     "Ashley K Motsie",',
  '  role:     "Software Developer & AI Engineer",',
  '  location: "Rustenburg, South Africa",',
  '  exp:      "3+ years",',
  '  stack: [',
  '    "React", "TypeScript", "Node.js",',
  '    "Python", "PostgreSQL", "Docker",',
  '  ],',
  '  open_to:  ["Full-time", "Freelance", "Remote"],',
  '  hireable: true,',
  '};',
];

function TerminalCard() {
  const [visible, setVisible] = useState(0);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (visible >= codeLines.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 90);
    return () => clearTimeout(t);
  }, [visible]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [visible]);

  const done = visible >= codeLines.length;

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-[var(--chrome)] font-mono shadow-xl">
      {/* Title bar */}
      <div className="flex items-center gap-3 px-4 py-3 bg-black/20 border-b border-white/10 select-none">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="flex-1 text-center text-[12px] text-white/40">
          ashley@kodex-sa: ~/portfolio
        </span>
      </div>

      {/* Body */}
      <div ref={bodyRef} className="p-5 overflow-y-auto" style={{ minHeight: "320px", maxHeight: "380px" }}>
        <p className="text-[12px] leading-5 mb-2">
          <span className="text-[var(--accent-soft)]">ashley@kodex-sa</span>
          <span className="text-white/30">:</span>
          <span className="text-blue-300">~/portfolio</span>
          <span className="text-white/40"> $ </span>
          <span className="text-white/80">cat ashley.ts</span>
        </p>
        <pre className="!bg-transparent !p-0 !m-0 !text-[12px] !leading-5 text-white/70 whitespace-pre-wrap">
          {codeLines.slice(0, visible).join("\n")}
        </pre>
        {!done && (
          <span className="inline-block w-[7px] h-[13px] bg-[var(--accent-soft)] align-middle animate-pulse" />
        )}
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-1.5 bg-black/20 border-t border-white/10 select-none">
        <span className="flex items-center gap-1 text-[10px] text-white/40">
          <GitBranch className="w-3 h-3" /> main
        </span>
        <span className="flex items-center gap-1 text-[10px] text-white/40">
          <CheckCircle2 className="w-3 h-3" /> 0 errors
        </span>
      </div>
    </div>
  );
}

// ============================= HERO =============================
export default function Hero() {
  const words = ["Software Developer", "AI Engineer", "Tech Enthusiast"];

  return (
    <section id="hero" className="relative bg-[var(--bg)] text-[var(--ink)] min-h-screen overflow-hidden">
      {/* Ambient gradient blobs — bolder visual energy, kept soft and out of the way of content */}
      <div className="glow-blob w-[420px] h-[420px] -top-32 -right-32" style={{ background: "var(--accent)" }} />
      <div className="glow-blob w-[380px] h-[380px] top-1/3 -left-40" style={{ background: "var(--accent-2)" }} />

      <div className="relative z-10 min-h-[calc(100vh-4rem)] flex items-center px-5 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          {/* Left — text */}
          <div className="animate-fade-up">
            <span className="eyebrow">{"// hello world"}</span>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              I'm <span className="text-gradient">Ashley Motsie</span>
            </h1>

            <div className="mt-5 text-xl text-[var(--ink-muted)] font-medium">
              <FlipWords words={words} className="text-[var(--accent)] font-semibold" />
            </div>

            <p className="mt-5 max-w-md text-[var(--ink-muted)] leading-relaxed">
              I build production-ready web apps and AI-powered tools.
              Passionate about clean code, great UX, and shipping things that
              work — based in Rustenburg, South Africa.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--ink)] text-[var(--bg)] font-medium text-sm hover:bg-[var(--accent-ink)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/KodEx-SA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--ink)] font-medium text-sm hover:border-[var(--ink-faint)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="/Ashley_K_Motsie_Resume.pdf"
                download="Ashley_K_Motsie_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[var(--ink-muted)] font-medium text-sm hover:text-[var(--ink)] transition-colors"
              >
                Resume
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right — terminal profile card */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <TerminalCard />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-[var(--ink-faint)] hover:text-[var(--accent)] transition-colors animate-float-slow"
        aria-label="Scroll to About"
      >
        <span className="text-[11px] font-mono tracking-wide">scroll</span>
        <span className="w-5 h-8 rounded-full border border-current flex items-start justify-center p-1">
          <span className="w-1 h-1.5 rounded-full bg-current" />
        </span>
      </button>
    </section>
  );
}
