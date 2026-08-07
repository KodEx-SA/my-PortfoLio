import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";
import AIAssistantImg from "@/assets/img/AI-Assistant.png";
import GautengRentalsImg from "@/assets/img/gauteng-rentals.jpg";
import WebAppConverterImg from "@/assets/img/web-app-converter.jpeg";
import UbizoiMarketImg from "@/assets/img/ubizo.jpg";
import IsongCafeImg from "@/assets/img/Isong.jpg";
import SasboImg from "@/assets/img/sasbo.jpeg";
import { Github, Globe, ArrowUpRight, Code2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const projects = [
  {
    title: "Trading-R1 Trace Market",
    description:
      "A reasoning-trace marketplace built on Arc. AI agents generate structured investment theses via the TradingAgents framework, each trace is pinned to IPFS and hashed on-chain, and users stake USDC on which reasoning patterns converge to profit.",
    src: "",
    tags: ["Arc Testnet", "Web3", "AI", "Finance"],
    stack: ["Next.js 15", "TypeScript", "Wagmi + RainbowKit", "Groq", "Foundry"],
    githubLink: "https://github.com/KodEx-SA/trading-r1",
    liveLink: "https://trading-r1-trace-market.vercel.app/",
    status: "Live",
    year: "2026",
  },
  {
    title: "Generative AI Chatbot",
    description:
      "Real-time conversational AI chatbot powered by Groq API with streaming responses, context memory, and typing indicators. Built for production at AI Global Networks.",
    src: AIAssistantImg,
    tags: ["Generative AI"],
    stack: ["React + Vite", "JavaScript", "Groq API"],
    githubLink: "https://github.com/KodEx-SA/ReactJs-ChatBot",
    liveLink: "https://generativechatbot.netlify.app/",
    status: "Live",
    year: "2024",
  },
  {
    title: "Modern Ubizo iMarket",
    description:
      "Full-featured South African e-commerce landing platform connecting buyers and sellers. Responsive, fast, and built with a modern Vite-powered React stack.",
    src: UbizoiMarketImg,
    tags: ["E-Commerce"],
    stack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/KodEx-SA/ubizo-e-commerce-landing-page",
    liveLink: "https://ubizo-e-commerce-landing-page.onrender.com/",
    status: "Live",
    year: "2024",
  },
  {
    title: "Temperature Converter",
    description:
      "Clean, efficient web app for temperature unit conversions with an intuitive UI, demonstrating state management and real-time calculation logic.",
    src: WebAppConverterImg,
    tags: ["Logic"],
    stack: ["JavaScript", "HTML5", "CSS3"],
    githubLink: "https://github.com/KodEx-SA/web_app_temp_conveter",
    liveLink: "https://my-web-app-temperature-conveter.vercel.app/",
    status: "Live",
    year: "2023",
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
  },
  {
    title: "Gauteng Rentals Directory",
    description:
      "AI-powered rental property search for Gauteng province — fast filtering, smart recommendations, and a clean UI designed for South African users.",
    src: GautengRentalsImg,
    tags: ["Real Estate"],
    stack: ["HTML5", "CSS3", "JavaScript"],
    githubLink: "https://github.com/KodEx-SA/jhb-rental-directory",
    liveLink: "https://gauteng-rental-directory-landing-pa.vercel.app/",
    status: "Live",
    year: "2024",
  },
  {
    title: "TMA Modelling Agency",
    description:
      "Professional brand website for Taahirah Modelling Agency in Mahikeng — showcasing talent, services, and bookings with a high-fashion aesthetic.",
    src: "",
    tags: ["Branding", "Modelling"],
    stack: ["HTML5", "CSS3", "JavaScript"],
    githubLink: "https://github.com/KodEx-SA/TMA",
    liveLink: "https://tmaofficial.co.za/",
    status: "Live",
    year: "2023",
  },
  {
    title: "Sasbo AI Symposium",
    description:
      "Finance union AI Symposium 2026 platform — event schedule, speaker showcase, and registration. Built with Next.js 15 and TypeScript.",
    src: SasboImg,
    tags: ["Event Platform"],
    stack: ["TypeScript", "Next.js 15", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/KodEx-SA/sasbo-ai-symposium",
    liveLink: "https://sasbo-ai-symposium.vercel.app/",
    status: "Live",
    year: "2025",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects" className="relative bg-[var(--bg)] text-[var(--ink)]" ref={container}>
        <section className="max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-14">
          <SectionHeading
            eyebrow={"// projects"}
            title="Featured projects"
            description={`${projects.length} featured projects across AI, Web3, e-commerce, hospitality, and events.`}
          />
        </section>

        <section className="pb-24">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={project.title}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </section>
  );
}

function ImagePlaceholder({ title }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[var(--surface-2)]">
      <span className="text-sm text-[var(--ink-faint)]">{title}</span>
    </div>
  );
}
ImagePlaceholder.propTypes = { title: PropTypes.string.isRequired };

function Card({ i, title, description, src, tags, stack, status, year, progress, range, targetScale, githubLink, liveLink }) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const imageRight = i % 2 !== 0;

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 20}px)` }}
        className="relative -top-[15%] h-auto w-[92%] md:w-[88%] lg:w-[78%] xl:w-[68%] origin-top"
        whileHover={{ y: -4, transition: { duration: 0.3 } }}
      >
        <div
          className={`relative w-full flex flex-col ${
            imageRight ? "md:flex-row-reverse" : "md:flex-row"
          } bg-[var(--surface)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm`}
        >
          {/* Image */}
          <div className="w-full md:w-[52%] h-[220px] md:h-[400px] relative overflow-hidden flex-shrink-0">
            {src ? (
              <img src={src} alt={title} className="w-full h-full object-cover" />
            ) : (
              <ImagePlaceholder title={title} />
            )}
            <div className="absolute top-4 left-4">
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[var(--bg)]/90 border border-[var(--border)] text-[var(--ink-muted)]">
                {String(i + 1).padStart(2, "0")} · {year}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                {status}
              </span>
              {stack.map((s) => (
                <span key={s} className="text-[11px] font-mono px-2 py-1 rounded-full bg-[var(--surface-2)] text-[var(--ink-muted)]">
                  {s}
                </span>
              ))}
            </div>

            <h2 className="text-xl md:text-2xl font-bold tracking-tight">{title}</h2>

            <p className="text-sm md:text-base text-[var(--ink-muted)] leading-relaxed flex-1">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 text-[11px] rounded-md bg-[var(--surface-2)] text-[var(--ink-muted)]">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 flex-wrap pt-2">
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm"
                >
                  <Globe className="w-4 h-4" />
                  Live Demo
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] text-[var(--ink)] font-medium text-sm hover:border-[var(--ink-faint)] transition-colors"
              >
                <Github className="w-4 h-4" />
                Source
                <Code2 className="w-3.5 h-3.5 opacity-60" />
              </a>
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
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
};
