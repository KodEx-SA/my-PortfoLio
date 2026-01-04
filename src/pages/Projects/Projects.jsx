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
import { Code2, ExternalLink, Folder } from "lucide-react";

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

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
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
      <main className="bg-[#0a0a0a]" ref={container}>
        {/* Header Section */}
        <section className="w-full bg-[#0a0a0a] pt-32 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">
                  My Work
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-center animate-gradient-x">
                Featured Projects
              </h2>

              <p className="text-lg md:text-xl text-gray-400 font-medium text-center max-w-2xl">
                A showcase of my recent work in web development, AI integration,
                and full-stack solutions
              </p>

              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full" />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="text-white w-full bg-[#0a0a0a] pb-20">
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
        {/* Modern split card design with green theme */}
        <div className="w-full flex flex-col md:flex-row bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-xl border border-green-500/20 hover:border-green-400/40 transition-colors duration-300">
          {/* Image section */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden group">
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
              // Fallback for projects without images
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-500/10 to-green-600/20">
                <div className="text-center">
                  <Folder className="w-20 h-20 text-green-400/50 mx-auto mb-4" />
                  <p className="text-green-400/70 text-sm font-medium">
                    Project Preview
                  </p>
                </div>
              </div>
            )}

            {/* Animated corner accent */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-green-400" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-green-400" />
            </div>

            {/* Project number badge */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-green-500/20 backdrop-blur-md border border-green-400/30 text-green-400 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between bg-[#1a1a1a]">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400" />
                <div className="h-[1px] flex-1 bg-gradient-to-r from-green-500/50 to-transparent" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 hover:text-green-400 transition-colors">
                {title}
              </h2>

              <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">
                {description}
              </p>

              {/* Tags */}
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-green-500/10 text-green-400 rounded-full border border-green-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gradient-to-r from-green-500/30 via-green-500/50 to-transparent mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 hover:border-green-400/50 transition-all"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Code2 className="w-4 h-4 text-green-400" />
                  <span className="text-xs md:text-sm font-medium text-green-400">
                    Code
                  </span>
                </motion.a>

                {/* Live Link */}
                {liveLink && (
                  <motion.a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 hover:border-green-400/50 transition-all"
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ExternalLink className="w-4 h-4 text-green-400" />
                    <span className="text-xs md:text-sm font-medium text-green-400">
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

// Add PropTypes validation
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

// Add styles for animations
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes gradient-x {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  .animate-gradient-x {
    animation: gradient-x 3s ease infinite;
    background-size: 200% 200%;
  }
`;
if (typeof document !== "undefined") {
  document.head.appendChild(styleSheet);
}
