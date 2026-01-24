/* eslint-disable react-hooks/purity */
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import AIAssistantImg from "@/assets/img/AI-Assistant.png";
import GautengRentalsImg from "@/assets/img/gauteng-rentals.png";
import RealHomesImg from "@/assets/img/real-homes.png";
import WebAppConverterImg from "@/assets/img/web-app-converter.jpeg";
import UbizoiMarketImg from "@/assets/img/ubizo.png";
import IsongCafeImg from "@/assets/img/Isong.png";
import { Code2, ExternalLink, Folder, Terminal, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Generative AI Chatbot",
    description:
      "Real-time conversational chatbot powered by Groq AI with advanced natural language processing capabilities.",
    src: AIAssistantImg,
    tags: ["React", "AI", "Groq API"],
    githubLink: "https://github.com/KodEx-SA/ReactJs-ChatBot",
    liveLink: "https://react-js-chat-bot-1.vercel.app/",
  },
  {
    title: "Modern Ubizo iMarket",
    description:
      "Connect buyers and sellers across South Africa on one powerful Ubizo iMarket platform.",
    src: UbizoiMarketImg,
    tags: ["React", "Vite"],
    githubLink: "https://github.com/KodEx-SA/ubizo-e-commerce-landing-page",
    liveLink: "https://ubizo-e-commerce-landing-page.onrender.com/",
  },
  {
    title: "Temperature Converter",
    description:
      "Efficient web app for temperature conversions with a clean, intuitive interface.",
    src: WebAppConverterImg,
    tags: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/KodEx-SA/web_app_temp_conveter",
    liveLink: "https://my-web-app-temperature-conveter.vercel.app/",
  },
  {
    title: "Isong Cafe - Bar & Grill",
    description:
      "A simple and reliable website for a local cafe with menu showcase and location info.",
    src: IsongCafeImg,
    tags: ["HTML", "Tailwind", "Javascript"],
    githubLink: "https://github.com/KodEx-SA/Isong-Cafe-website",
    liveLink: "https://isong-cafe.vercel.app/",
  },
  {
    title: "Gauteng Rentals Directory",
    description:
      "Fast, simple, reliable rental search with AI recommendations for Gauteng province.",
    src: GautengRentalsImg,
    tags: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/KodEx-SA/jhb-rental-directory",
    liveLink: "https://gauteng-rental-directory-landing-pa.vercel.app/",
  },
  {
    title: "TMA Modelling Agency",
    description:
      "Professional modeling agency website for Mahikeng Modelling Agency showcasing talent and services.",
    src: "",
    tags: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/KodEx-SA/TMA",
    liveLink: "https://tmaofficial.co.za/",
  },
  {
    title: "Sasbo AI Symposium",
    description:
      "Finance Union event platform for Sasbo AI Symposium with registration and information.",
    src: "",
    tags: ["Typescript", "Next.js", "Tailwind"],
    githubLink: "https://github.com/KodEx-SA/sasbo-ai-symposium",
    liveLink: "https://sasbo-ai-symposium.vercel.app/",
  },
];

// Data Stream Component
const DataStream = () => {
  const chars = '01アイウエオ';
  const streams = Array.from({ length: 5 }, (_, i) => ({
    left: `${20 + i * 18}%`,
    delay: `${Math.random() * 3}s`,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-5 z-5">
      {streams.map((stream, i) => (
        <div
          key={i}
          className="absolute top-0 text-green-400 text-xs font-mono animate-data-stream"
          style={{
            left: stream.left,
            animationDelay: stream.delay,
          }}
        >
          {Array.from({ length: 40 }, () =>
            chars[Math.floor(Math.random() * chars.length)]
          ).join('')}
        </div>
      ))}
    </div>
  );
};

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
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-[#0a0a0a] relative" ref={container}>
        {/* Data Stream Effect */}
        <DataStream />

        {/* Grid background */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

        {/* Main scan line */}
        <div className="fixed inset-0 pointer-events-none z-10">
          <div className="scanline-main" />
        </div>

        {/* Header Section */}
        <section className="w-full bg-[#0a0a0a] pt-32 pb-16 px-6 relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm relative overflow-hidden group">
                <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse relative z-10" />
                <span className="text-green-400 text-sm font-medium font-mono relative z-10">
                  My Work
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-center animate-gradient-x font-mono relative">
                <span className="relative inline-block">
                  Featured Projects
                  {/* Subtle glitch effect */}
                  <span className="absolute inset-0 text-green-400 opacity-0 hover:opacity-30 animate-glitch-subtle">
                    Featured Projects
                  </span>
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-400 font-medium text-center max-w-2xl font-mono">
                <span className="text-green-400">&gt;</span> A showcase of my recent work in web development, AI integration,
                and full-stack solutions
              </p>

              <div className="relative w-24 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-green-400 animate-scan-line" />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="text-white w-full bg-[#0a0a0a] pb-20 relative z-20">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                src={project.src}
                title={project.title}
                description={project.description}
                tags={project.tags}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  src,
  tags,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Holographic glow effect */}
        <div className="absolute -inset-[2px] bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-2xl opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-300" />

        {/* Modern split card design with green theme */}
        <div className="group w-full flex flex-col md:flex-row bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 relative">
          {/* Scan line over card */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-10">
            <div className="scanline-card" />
          </div>

          {/* Image section */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden group/img">
            {src ? (
              <>
                <motion.img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Green overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-green-600/30 mix-blend-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-500/10 to-green-600/20 relative overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  {[...Array(20)].map((_, idx) => (
                    <div
                      key={idx}
                      className="absolute w-1 h-1 bg-green-400 rounded-full animate-float-particle"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                      }}
                    />
                  ))}
                </div>
                <div className="text-center relative z-10">
                  <Folder className="w-20 h-20 text-green-400/50 mx-auto mb-4 animate-pulse" />
                  <p className="text-green-400/70 text-sm font-medium font-mono">
                    <Terminal className="inline w-3 h-3 mr-1" />
                    Project Preview
                  </p>
                </div>
              </div>
            )}

            {/* Animated tech brackets */}
            <div className="absolute inset-0 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute top-4 left-4 w-8 h-8">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-green-400 origin-left scale-x-0 group-hover/img:scale-x-100 transition-transform duration-300" />
                <div className="absolute top-0 left-0 w-[2px] h-full bg-green-400 origin-top scale-y-0 group-hover/img:scale-y-100 transition-transform duration-300 delay-75" />
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8">
                <div className="absolute bottom-0 right-0 w-full h-[2px] bg-green-400 origin-right scale-x-0 group-hover/img:scale-x-100 transition-transform duration-300" />
                <div className="absolute bottom-0 right-0 w-[2px] h-full bg-green-400 origin-bottom scale-y-0 group-hover/img:scale-y-100 transition-transform duration-300 delay-75" />
              </div>
            </div>

            {/* Project number badge */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-green-500/20 backdrop-blur-md border border-green-400/30 text-green-400 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium font-mono z-20 group-hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] transition-shadow">
              <Terminal className="inline w-3 h-3 mr-1.5 animate-pulse" />
              Project {String(i + 1).padStart(2, '0')}
            </div>
          </div>

          {/* Content section */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between bg-[#1a1a1a] relative">
            {/* Tech corner brackets */}
            <div className="absolute top-4 right-4 w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity">
              <div className="absolute top-0 right-0 w-full h-[1px] bg-green-400" />
              <div className="absolute top-0 right-0 w-[1px] h-full bg-green-400" />
            </div>
            <div className="absolute bottom-4 left-4 w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-green-400" />
              <div className="absolute bottom-0 left-0 w-[1px] h-full bg-green-400" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400 animate-pulse" />
                <div className="h-[1px] flex-1 bg-gradient-to-r from-green-500/50 to-transparent" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 hover:text-green-400 transition-colors font-mono">
                {title}
              </h2>

              <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4 font-mono">
                <span className="text-green-400">&gt;</span> {description}
              </p>

              {/* Tags */}
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium font-mono bg-green-500/10 text-green-400 rounded-full border border-green-500/20 hover:border-green-400/40 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gradient-to-r from-green-500/30 via-green-500/50 to-transparent mb-4 md:mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-green-400 animate-scan-line" />
              </div>

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 hover:border-green-400/50 transition-all overflow-hidden"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="absolute inset-0 bg-green-500/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 ease-out" />
                  <Code2 className="w-4 h-4 text-green-400 relative z-10" />
                  <span className="text-xs md:text-sm font-medium font-mono text-green-400 relative z-10">
                    Code
                  </span>
                </motion.a>

                {/* Live Link */}
                {liveLink && (
                  <motion.a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 hover:border-green-400/50 transition-all overflow-hidden"
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span className="absolute inset-0 bg-green-500/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 ease-out" />
                    <ExternalLink className="w-4 h-4 text-green-400 relative z-10" />
                    <span className="text-xs md:text-sm font-medium font-mono text-green-400 relative z-10">
                      Live
                    </span>
                  </motion.a>
                )}
              </div>
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
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
};

const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes gradient-x {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
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
  @keyframes float-particle {
    0%, 100% { transform: translate(0, 0); opacity: 0.2; }
    50% { transform: translate(-10px, -20px); opacity: 0.5; }
  }
  .animate-gradient-x {
    animation: gradient-x 3s ease infinite;
    background-size: 200% 200%;
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
  .animate-float-particle {
    animation: float-particle 4s ease-in-out infinite;
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
    animation: scan-main 6s linear infinite;
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
    100% { transform: translateY(500px); }
  }
`;
if (typeof document !== "undefined") {
  document.head.appendChild(styleSheet);
}