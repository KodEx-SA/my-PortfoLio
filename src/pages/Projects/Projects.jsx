/* eslint-disable react-hooks/purity */
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import AIAssistantImg from "@/assets/img/AI-Assistant.png";
import GautengRentalsImg from "@/assets/img/gauteng-rentals.png";
import WebAppConverterImg from "@/assets/img/web-app-converter.jpeg";
import UbizoiMarketImg from "@/assets/img/ubizo.png";
import IsongCafeImg from "@/assets/img/Isong.png";
import { Code2, ExternalLink, Terminal, Github, Globe, ArrowUpRight } from "lucide-react";
import DataStream from "@/components/DataStream";

const projects = [
  {
    title: "Generative AI Chatbot",
    description:
      "Real-time conversational AI chatbot powered by Groq API with streaming responses, context memory, typing indicators, and a polished dark UI. Built for production at AI Global Networks.",
    src: AIAssistantImg,
    tags: ["React", "Groq API", "TypeScript", "Tailwind CSS"],
    stack: ["React+vite", "Javascript", "Groq API"],
    githubLink: "https://github.com/KodEx-SA/ReactJs-ChatBot",
    liveLink: "https://generativechatbot.netlify.app/",
    status: "Live",
    year: "2024",
    accent: "from-green-400 to-emerald-500",
  },
  {
    title: "Modern Ubizo iMarket",
    description:
      "Full-featured South African e-commerce landing platform connecting buyers and sellers. Responsive, fast, and built with a modern Vite-powered React stack.",
    src: UbizoiMarketImg,
    tags: ["E-Commerce"],
    stack: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/KodEx-SA/ubizo-e-commerce-landing-page",
    liveLink: "https://ubizo-e-commerce-landing-page.onrender.com/",
    status: "Live",
    year: "2024",
    accent: "from-emerald-400 to-teal-500",
  },
  {
    title: "Temperature Converter",
    description:
      "Clean, efficient web app for temperature unit conversions with an intuitive UI. A focused tool demonstrating state management and real-time calculation logic.",
    src: WebAppConverterImg,
    tags: ["Logic"],
    stack: ["JavaScript", "HTML5", "CSS3"],
    githubLink: "https://github.com/KodEx-SA/web_app_temp_conveter",
    liveLink: "https://my-web-app-temperature-conveter.vercel.app/",
    status: "Live",
    year: "2023",
    accent: "from-teal-400 to-green-500",
  },
  {
    title: "Isong Cafe — Bar & Grill",
    description:
      "A polished, mobile-first website for a local cafe and grill featuring a full menu showcase, brand story, location info, and smooth scroll UX.",
    src: IsongCafeImg,
    tags: ["Hospitality"],
    stack: ["HTML5", "Tailwind CSS", "JavaScript"],
    githubLink: "https://github.com/KodEx-SA/Isong-Cafe-website",
    liveLink: "https://isong-cafe.vercel.app/",
    status: "Live",
    year: "2023",
    accent: "from-green-300 to-green-500",
  },
  {
    title: "Gauteng Rentals Directory",
    description:
      "AI-powered rental property search for Gauteng province — fast filtering, smart recommendations, and a clean UI designed for South African users.",
    src: GautengRentalsImg,
    tags: ["Real Estates"],
    stack: ["HTML5", "CSS3", "JavaScript",],
    githubLink: "https://github.com/KodEx-SA/jhb-rental-directory",
    liveLink: "https://gauteng-rental-directory-landing-pa.vercel.app/",
    status: "Live",
    year: "2024",
    accent: "from-emerald-300 to-emerald-500",
  },
  {
    title: "TMA Modelling Agency",
    description:
      "Professional brand website for Taahirah Modelling Agency in Mahikeng — showcasing talent, services, and bookings with a high-fashion aesthetic.",
    src: "",
    tags: ["Branding", "Modelling],
    stack: ["HTML5", "CSS3", "JavaScript"],
    githubLink: "https://github.com/KodEx-SA/TMA",
    liveLink: "https://tmaofficial.co.za/",
    status: "Live",
    year: "2023",
    accent: "from-teal-300 to-teal-500",
  },
  {
    title: "Sasbo AI Symposium",
    description:
      "Finance union AI Symposium 2026 platform — advanced animations, event schedule, speaker showcase, and registration. Built with Next.js 15 and TypeScript.",
    src: "",
    tags: ["Finanace Union - Event"],
    stack: ["TypeScript", "Next.js 15", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/KodEx-SA/sasbo-ai-symposium",
    liveLink: "https://sasbo-ai-symposium.vercel.app/",
    status: "Live",
    year: "2025",
    accent: "from-green-400 to-teal-500",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card { scale: 0.85; margin-top: -5vh; }
        .project-container { height: 90vh; }
      }
    `;
    document.head.appendChild(style);
    const checkResolution = () => {
      const t = window.innerWidth >= 1360 && window.innerWidth <= 1370 && window.innerHeight >= 760 && window.innerHeight <= 775;
      document.documentElement.style.setProperty("--project-scale", t ? "0.85" : "1");
      document.documentElement.style.setProperty("--project-margin", t ? "-5vh" : "0");
    };
    checkResolution();
    window.addEventListener("resize", checkResolution);
    return () => { document.head.removeChild(style); window.removeEventListener("resize", checkResolution); };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-[#0a0a0a] relative" ref={container}>
        <DataStream count={5} fixed />

        {/* Grid background */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

        {/* Scan line */}
        <div className="fixed inset-0 pointer-events-none z-10">
          <div className="scanline-main" />
        </div>

        {/* Header */}
        <section className="w-full bg-[#0a0a0a] pt-32 pb-16 px-6 relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm relative overflow-hidden group">
                <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse relative z-10" />
                <span className="text-green-400 text-sm font-medium font-mono relative z-10">My Work</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-center animate-gradient-x font-mono relative">
                <span className="relative inline-block">
                  Featured Projects
                  <span className="absolute inset-0 text-green-400 opacity-0 hover:opacity-30 animate-glitch-subtle">
                    Featured Projects
                  </span>
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-400 font-medium text-center max-w-2xl font-mono">
                <span className="text-green-400">&gt;</span> A showcase of my recent work in web development, AI integration, and full-stack solutions
              </p>

              <div className="relative w-24 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-green-400 animate-scan-line" />
              </div>

              {/* Count pill */}
              <div className="flex items-center gap-6 pt-2">
                {[
                  { label: "Projects", value: projects.length },
                  { label: "All Live", value: "✓" },
                  { label: "Open Source", value: projects.length },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-green-400 font-bold font-mono text-xl">{s.value}</div>
                    <div className="text-gray-600 font-mono text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="text-white w-full bg-[#0a0a0a] pb-20 relative z-20">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function TerminalPlaceholder({ title, accent }) {
  const lines = [
    { text: "$ npm run dev", delay: 0 },
    { text: "> building project...", delay: 0.4 },
    { text: "> compiled successfully", delay: 0.8 },
    { text: `> ${title.toLowerCase().replace(/\s/g, "-")}`, delay: 1.2 },
    { text: "✓ ready on localhost:5173", delay: 1.6 },
  ];
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-[#0d0d0d] relative overflow-hidden p-8">
      {/* Faint grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Glow blob */}
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-5 blur-3xl`} />

      {/* Terminal window */}
      <div className="relative z-10 w-full max-w-sm">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a] rounded-t-xl border border-green-500/20 border-b-0">
          <span className="w-3 h-3 rounded-full bg-red-500/60" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <span className="w-3 h-3 rounded-full bg-green-500/60" />
          <span className="flex-1 text-center text-[10px] font-mono text-gray-600">bash</span>
        </div>

        {/* Terminal body */}
        <div className="bg-[#111] border border-green-500/20 rounded-b-xl p-4 space-y-1.5 font-mono text-xs">
          {lines.map((l, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: l.delay, duration: 0.3 }}
              className={idx === 0 ? "text-green-400" : idx === lines.length - 1 ? "text-emerald-400" : "text-gray-500"}
            >
              {l.text}
              {idx === lines.length - 1 && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-1.5 h-3.5 bg-green-400 ml-0.5 align-middle"
                />
              )}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ i, title, description, src, tags, stack, status, year, accent, progress, range, targetScale, githubLink, liveLink }) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const [hovered, setHovered] = useState(false);

  // Alternate image side: even = image left, odd = image right
  const imageRight = i % 2 !== 0;

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 project-container">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 25}px)`, transform: `scale(var(--project-scale, 1))`, marginTop: "var(--project-margin, 0)" }}
        className="relative -top-[25%] h-auto w-[92%] md:w-[88%] lg:w-[78%] xl:w-[68%] origin-top project-card"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
      >
        {/* Outer glow ring — animates on hover */}
        <motion.div
          className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${accent} blur-sm`}
          animate={{ opacity: hovered ? 0.35 : 0.08 }}
          transition={{ duration: 0.4 }}
        />

        {/* Card shell */}
        <div className={`relative w-full flex flex-col ${imageRight ? "md:flex-row-reverse" : "md:flex-row"} bg-[#111214] rounded-2xl overflow-hidden border border-green-500/15 transition-colors duration-300 ${hovered ? "border-green-500/35" : ""}`}>

          {/* Scanline */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-10">
            <div className="scanline-card" />
          </div>

          {/* Large faded project number — behind content */}
          <div className="absolute bottom-4 right-6 text-[120px] md:text-[160px] font-black font-mono text-green-500/4 leading-none select-none pointer-events-none z-0">
            {String(i + 1).padStart(2, "0")}
          </div>

          {/* ── IMAGE PANEL ── */}
          <div className="w-full md:w-[52%] h-[240px] md:h-[420px] relative overflow-hidden group/img flex-shrink-0">

            {src ? (
              <>
                <motion.img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover"
                  animate={{ scale: hovered ? 1.06 : 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />

                {/* Dark gradient blend into content panel */}
                <div className={`absolute inset-y-0 ${imageRight ? "left-0 bg-gradient-to-r" : "right-0 bg-gradient-to-l"} from-[#111214] via-[#111214]/40 to-transparent w-20 z-10`} />

                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#111214]/80 to-transparent z-10" />

                {/* Colour tint overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${accent} mix-blend-overlay`}
                  animate={{ opacity: hovered ? 0.25 : 0 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Animated corner brackets on hover */}
                <div className="absolute inset-0 pointer-events-none z-20">
                  {[["top-4 left-4", "top-0 left-0", "w-full h-[2px]", "top-0 left-0 w-[2px] h-full"],
                    ["bottom-4 right-4", "bottom-0 right-0", "w-full h-[2px] origin-right", "bottom-0 right-0 w-[2px] h-full origin-bottom"]
                  ].map(([pos, _, hClass, vClass], bIdx) => (
                    <div key={bIdx} className={`absolute ${pos} w-8 h-8`}>
                      <motion.div
                        className={`absolute ${bIdx === 0 ? "top-0 left-0" : "bottom-0 right-0"} w-full h-[2px] bg-green-400`}
                        animate={{ scaleX: hovered ? 1 : 0 }}
                        style={{ originX: bIdx === 0 ? 0 : 1 }}
                        transition={{ duration: 0.25, delay: 0.05 }}
                      />
                      <motion.div
                        className={`absolute ${bIdx === 0 ? "top-0 left-0" : "bottom-0 right-0"} w-[2px] h-full bg-green-400`}
                        animate={{ scaleY: hovered ? 1 : 0 }}
                        style={{ originY: bIdx === 0 ? 0 : 1 }}
                        transition={{ duration: 0.25, delay: 0.1 }}
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <TerminalPlaceholder title={title} accent={accent} />
            )}

            {/* Project number badge */}
            <div className="absolute top-4 left-4 z-30">
              <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111214]/80 backdrop-blur-md border border-green-500/30 text-green-400 text-xs font-mono transition-all duration-300 ${hovered ? "shadow-[0_0_12px_rgba(74,222,128,0.25)] border-green-500/60" : ""}`}>
                <Terminal className="w-3 h-3 animate-pulse" />
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>

            {/* Year badge bottom */}
            <div className="absolute bottom-4 left-4 z-30">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111214]/70 backdrop-blur-sm border border-green-500/15 text-gray-500">
                {year}
              </span>
            </div>
          </div>

          {/* ── GLOWING VERTICAL DIVIDER ── */}
          <div className="hidden md:block w-px self-stretch flex-shrink-0 relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-green-500/30 to-transparent transition-all duration-500 ${hovered ? "via-green-400/60" : ""}`} />
            <motion.div
              className="absolute w-full bg-green-400/80 blur-[1px]"
              style={{ height: "30%" }}
              animate={{ y: hovered ? ["0%", "240%"] : "0%" }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </div>

          {/* ── CONTENT PANEL ── */}
          <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col gap-5 relative z-10">

            {/* Status chip */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                {status}
              </span>
              {stack.map((s) => (
                <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/3 border border-green-500/10 text-gray-500">
                  {s}
                </span>
              ))}
            </div>

            {/* Title */}
            <div>
              <motion.h2
                animate={{ color: hovered ? "#4ade80" : "#ffffff" }}
                transition={{ duration: 0.3 }}
                className="text-xl md:text-2xl lg:text-[1.65rem] font-bold font-mono leading-snug mb-1"
              >
                {title}
              </motion.h2>
              {/* Animated underline */}
              <motion.div
                className={`h-[2px] bg-gradient-to-r ${accent} rounded-full`}
                animate={{ width: hovered ? "100%" : "2rem" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-mono flex-1">
              <span className="text-green-400 mr-1">&gt;</span>{description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  className="px-2.5 py-1 text-[11px] font-mono bg-green-500/8 text-green-400 rounded-lg border border-green-500/20 hover:border-green-400/50 hover:bg-green-500/15 transition-all duration-200 cursor-default"
                >
                  #{tag}
                </motion.span>
              ))}
            </div>

            {/* Divider */}
            <div className="relative h-px w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 via-green-500/50 to-transparent" />
              <div className="absolute inset-0 bg-green-400 animate-scan-line" />
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* Live — filled primary */}
              {liveLink && (
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`group/btn relative flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${accent} text-black font-semibold font-mono text-sm overflow-hidden shadow-lg transition-all duration-200 hover:shadow-green-500/25`}
                >
                  <span className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300" />
                  <Globe className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5 relative z-10 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                </motion.a>
              )}

              {/* GitHub — outlined secondary */}
              <motion.a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group/btn relative flex items-center gap-2 px-5 py-2.5 rounded-xl bg-transparent border border-green-500/30 text-green-400 font-mono text-sm overflow-hidden hover:border-green-400/60 hover:bg-green-500/8 transition-all duration-200"
              >
                <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500" />
                <Github className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Source</span>
                <Code2 className="w-3.5 h-3.5 relative z-10 opacity-60" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string,
  tags: PropTypes.array,
  stack: PropTypes.array,
  status: PropTypes.string,
  year: PropTypes.string,
  accent: PropTypes.string,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
};

TerminalPlaceholder.propTypes = {
  title: PropTypes.string.isRequired,
  accent: PropTypes.string,
};

const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes gradient-x {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
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
  .animate-gradient-x {
    animation: gradient-x 3s ease infinite;
    background-size: 200% 200%;
  }
  .animate-scan-line {
    animation: scan-line 2s linear infinite;
  }
  .animate-glitch-subtle {
    animation: glitch-subtle 0.4s infinite;
  }
  .scanline-main {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, rgba(74,222,128,0.3) 50%, transparent 100%);
    animation: scan-main 6s linear infinite;
  }
  .scanline-card {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(74,222,128,0.35) 50%, transparent 100%);
    animation: scan-card 3s linear infinite;
  }
  @keyframes scan-main {
    0% { transform: translateY(0); }
    100% { transform: translateY(100vh); }
  }
  @keyframes scan-card {
    0% { transform: translateY(0); }
    100% { transform: translateY(500px); }
  }
`;
if (typeof document !== "undefined") {
  document.head.appendChild(styleSheet);
}
