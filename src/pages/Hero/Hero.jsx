import { FaGithub } from "react-icons/fa";
import { ArrowRight, Download, GitBranch, CheckCircle2 } from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";
import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/ui/terminal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Meteors } from "@/components/ui/meteors";

export default function Hero() {
  const words = ["Software Developer", "AI Engineer", "Tech Enthusiast"];

  return (
    <section id="hero" className="relative bg-[var(--bg)] text-[var(--ink)] min-h-screen overflow-hidden">
      {/* Ambient gradient blobs — bolder visual energy, kept soft and out of the way of content */}
      <div className="glow-blob w-[420px] h-[420px] -top-32 -right-32" style={{ background: "var(--accent)" }} />
      <div className="glow-blob w-[380px] h-[380px] top-1/3 -left-40" style={{ background: "var(--accent-2)" }} />
      <Meteors number={10} />

      <div className="relative z-10 min-h-[calc(100vh-4rem)] flex items-center px-5 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          {/* Left — text */}
          <div className="animate-fade-up">
            <Badge variant="success" dot>Available for opportunities</Badge>

            <span className="eyebrow block mt-5">{"// hello world"}</span>

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
              <Button asChild variant="primary">
                <a href="/projects">
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://github.com/KodEx-SA" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="ghost">
                <a href="/Ashley_K_Motsie_Resume.pdf" download="Ashley_K_Motsie_Resume.pdf">
                  Resume
                  <Download className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right — terminal profile card */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <Terminal className="w-full">
              <TypingAnimation className="text-white/80" duration={40}>
                $ whoami
              </TypingAnimation>
              <AnimatedSpan className="text-[var(--accent-soft)] pl-4">
                &gt; Ashley K Motsie
              </AnimatedSpan>

              <TypingAnimation className="text-white/80" duration={40}>
                $ cat role.txt
              </TypingAnimation>
              <AnimatedSpan className="text-[var(--accent-soft)] pl-4">
                &gt; Software Developer &amp; AI Engineer
              </AnimatedSpan>

              <TypingAnimation className="text-white/80" duration={40}>
                $ pwd
              </TypingAnimation>
              <AnimatedSpan className="text-[var(--accent-soft)] pl-4">
                &gt; /za/north-west/rustenburg
              </AnimatedSpan>

              <TypingAnimation className="text-white/80" duration={40}>
                $ cat status.txt
              </TypingAnimation>
              <AnimatedSpan className="text-[var(--accent-soft)] pl-4">
                &gt; open to remote, on-site, hybrid
              </AnimatedSpan>

              <TypingAnimation className="text-white/80" duration={40}>
                $ ls stack/
              </TypingAnimation>
              <AnimatedSpan className="text-[var(--accent-soft)] pl-4">
                &gt; react/ nextjs/ typescript/ node/ python/ ai/
              </AnimatedSpan>

              <AnimatedSpan className="text-white/40 pt-1">
                <span className="inline-block w-[7px] h-[13px] bg-white/40 align-middle animate-pulse" />
              </AnimatedSpan>
            </Terminal>

            <div className="mt-3 flex items-center justify-between px-1 text-[11px] font-mono text-[var(--ink-faint)]">
              <span className="flex items-center gap-1">
                <GitBranch className="w-3 h-3" /> main
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> 0 errors
              </span>
            </div>
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
