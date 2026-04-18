import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import {
  Award,
  Trophy,
  Star,
  BookOpen,
  Code2,
  Cpu,
  CheckCircle,
  Calendar,
  ExternalLink,
  Medal,
  Shield,
  Wifi,
  Monitor,
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import DataStream from "@/components/DataStream";

// ============================= Certificate image imports =============================
import CertItEssentials from "@/assets/certificates/cert-it-essentials.jpeg";
import CertCybersecurity from "@/assets/certificates/cert-cybersecurity.jpeg";
import CertItCompletion from "@/assets/certificates/cert-it-completion.jpeg";
import CertGetConnected from "@/assets/certificates/cert-get-connected.jpeg";

// ============================= Data =============================
const certifications = [
  {
    id: 1,
    title: "IT Essentials: PC Hardware and Software",
    issuer: "Cisco Networking Academy",
    date: "Jan 2024",
    type: "Technical",
    icon: Monitor,
    color: "from-green-400 to-emerald-500",
    description:
      "Proficiency in selecting, installing, and troubleshooting PC hardware and software, networking fundamentals, and IT professional responsibilities.",
    verified: true,
    image: CertItEssentials,
  },
  {
    id: 2,
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    date: "Aug 2023",
    type: "Security",
    icon: Shield,
    color: "from-emerald-400 to-teal-500",
    description:
      "Core cybersecurity principles — threat landscape, network security, cryptography, and security operations.",
    verified: true,
    image: CertCybersecurity,
  },
  {
    id: 3,
    title: "IT Essentials — Course Completion",
    issuer: "Cisco Networking Academy",
    date: "Jan 2024",
    type: "Technical",
    icon: Cpu,
    color: "from-teal-400 to-green-500",
    description:
      "Comprehensive course completion covering hardware maintenance, OS management, mobile devices, and network configuration.",
    verified: true,
    image: CertItCompletion,
  },
  {
    id: 4,
    title: "Get Connected",
    issuer: "Cisco Networking Academy",
    date: "Aug 2022",
    type: "Networking",
    icon: Wifi,
    color: "from-green-300 to-green-500",
    description:
      "Foundational networking concepts — internet connectivity, wireless communication, and digital literacy.",
    verified: true,
    image: CertGetConnected,
  },
  {
    id: 5,
    title: "NCV National Certificate in IT & Computer Sciences",
    issuer: "Orbit TVET College",
    date: "2024",
    type: "Qualification",
    icon: BookOpen,
    color: "from-emerald-300 to-emerald-500",
    description:
      "National Certificate Vocational (NCV) Level 4 in Information Technology and Computer Sciences.",
    verified: true,
    image: null,
  },
  {
    id: 6,
    title: "React (Basic) Certificate",
    issuer: "HackerRank",
    date: "2024",
    type: "Technical",
    icon: Code2,
    color: "from-teal-300 to-teal-500",
    description:
      "Verified proficiency in React.js — hooks, state management, component architecture, and performance optimisation.",
    verified: true,
    link: "https://www.hackerrank.com",
    image: null,
  },
];

const achievements = [
  {
    id: 1,
    title: "eDuBaskets Platform Launch",
    description:
      "Successfully launched a student hamper delivery platform serving multiple South African universities from Day 1 with zero downtime.",
    metric: "0",
    metricLabel: "Downtime on launch",
    icon: Trophy,
    color: "text-green-400",
  },
  {
    id: 2,
    title: "3 Simultaneous Roles",
    description:
      "Managing full-time responsibilities across three companies — AI Global Networks, Eullafied Tech Solutions, and Maps Media — concurrently.",
    metric: "3",
    metricLabel: "Active roles at once",
    icon: Star,
    color: "text-emerald-400",
  },
  {
    id: 3,
    title: "AI Chatbot Shipped to Production",
    description:
      "Built and deployed a company-level AI chatbot using Groq API and React for AI Global Networks, serving real client interactions daily.",
    metric: "1K+",
    metricLabel: "Monthly interactions",
    icon: Cpu,
    color: "text-teal-400",
  },
  {
    id: 4,
    title: "4+ Years Full-Stack Experience",
    description:
      "Consistently delivered full-stack projects from scratch — from client briefs to deployed production applications — across multiple industries.",
    metric: "4+",
    metricLabel: "Years of experience",
    icon: Award,
    color: "text-green-300",
  },
  {
    id: 5,
    title: "10+ Production Projects",
    description:
      "Shipped more than 10 live production applications across AI, e-commerce, events, hospitality, real estate, and corporate sectors.",
    metric: "10+",
    metricLabel: "Live projects delivered",
    icon: Medal,
    color: "text-emerald-300",
  },
  {
    id: 6,
    title: "PayFast SA Integration",
    description:
      "One of few developers to successfully implement and maintain PayFast payment processing in a Next.js 15 production environment.",
    metric: "100%",
    metricLabel: "Payment success rate",
    icon: CheckCircle,
    color: "text-teal-300",
  },
];

const typeColors = {
  Qualification: "text-green-400 bg-green-500/10 border-green-500/30",
  Technical: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  Security: "text-red-400 bg-red-500/10 border-red-500/30",
  Networking: "text-blue-400 bg-blue-500/10 border-blue-500/30",
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

// ============================= Lightbox =============================
function Lightbox({ certs, activeIndex, onClose, onPrev, onNext }) {
  const c = certs[activeIndex];

  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (!c) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Prev */}
        {activeIndex > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 md:left-8 z-20 p-3 rounded-full bg-white/10 hover:bg-green-500/30 text-white transition-all border border-white/20 hover:border-green-500/50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Next */}
        {activeIndex < certs.length - 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 md:right-8 z-20 p-3 rounded-full bg-white/10 hover:bg-green-500/30 text-white transition-all border border-white/20 hover:border-green-500/50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Certificate */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center gap-4 px-4 max-w-3xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-green-500/30 shadow-2xl shadow-black/60 bg-[#1a1c1e]">
            <img
              src={c.image}
              alt={c.title}
              className="w-full h-auto object-contain"
              style={{ maxHeight: "75vh" }}
            />
          </div>

          {/* Caption */}
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-white font-bold font-mono text-sm">
              {c.title}
            </h3>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 font-mono text-xs">
                {c.issuer}
              </span>
              <span className="text-gray-600 font-mono text-xs">·</span>
              <span className="text-green-400 font-mono text-xs">{c.date}</span>
              {c.verified && (
                <>
                  <span className="text-gray-600 font-mono text-xs">·</span>
                  <span className="flex items-center gap-1 text-green-400 text-xs font-mono">
                    <CheckCircle className="w-3 h-3" /> Verified
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Counter */}
          <div className="flex items-center gap-2">
            {certs.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-6 bg-green-400" : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ============================= Certificate Card =============================
function CertCard({ c, onImageClick }) {
  const Icon = c.icon;
  const [imgError, setImgError] = useState(false);
  const hasImage = c.image && !imgError;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl border border-green-500/15 bg-[#111214] overflow-hidden hover:border-green-500/35 transition-all duration-300 flex flex-col"
    >
      {/* Glow ring */}
      <motion.div
        className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${c.color} blur-sm`}
        initial={{ opacity: 0.05 }}
        whileHover={{ opacity: 0.22 }}
        transition={{ duration: 0.35 }}
      />

      {/* Corner brackets */}
      <div className="absolute top-3 left-3 w-4 h-4 z-10 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-green-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200" />
        <div className="absolute top-0 left-0 w-[1px] h-full bg-green-400 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-200 delay-75" />
      </div>
      <div className="absolute bottom-3 right-3 w-4 h-4 z-10 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-green-400 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-200" />
        <div className="absolute bottom-0 right-0 w-[1px] h-full bg-green-400 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-200 delay-75" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* ============================= Certificate image ============================= */}
        {hasImage ? (
          <div
            className="relative w-full overflow-hidden bg-[#1c1f20] cursor-zoom-in"
            style={{ aspectRatio: "4/3" }}
            onClick={() => onImageClick && onImageClick()}
          >
            {/* Zoom hint overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 rounded-t-2xl">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0a0a]/80 backdrop-blur-sm border border-green-500/40 text-green-400 text-xs font-mono">
                <ZoomIn className="w-4 h-4" /> Click to view
              </div>
            </div>
            {/* Dark frame so white cert doesn't bleed into card */}
            <div className="absolute inset-0 flex items-center justify-center p-3">
              <img
                src={c.image}
                alt={c.title}
                onError={() => setImgError(true)}
                className="max-w-full max-h-full object-contain rounded-lg shadow-xl group-hover:scale-[1.04] transition-transform duration-500"
                style={{ filter: "drop-shadow(0 4px 24px rgba(0,0,0,0.6))" }}
              />
            </div>
            {/* ============================= Subtle vignette ============================= */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111214]/60 via-transparent to-[#111214]/20 pointer-events-none" />
            {/* Scanline */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="scanline-card" />
            </div>
            {/* Verified badge */}
            {c.verified && (
              <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-[#0a0a0a]/80 backdrop-blur-sm border border-green-500/40 text-green-400 text-[10px] font-mono">
                <CheckCircle className="w-3 h-3" /> Verified
              </div>
            )}
          </div>
        ) : (
          /* ============================= Fallback — no image: icon placeholder ============================= */
          <div
            className={`w-full flex items-center justify-center bg-gradient-to-br ${c.color} bg-opacity-5 border-b border-green-500/10`}
            style={{ aspectRatio: "4/3" }}
          >
            <div className="relative">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-10 blur-2xl scale-150`}
              />
              <div
                className={`relative p-5 rounded-2xl bg-gradient-to-br ${c.color} p-0.5`}
              >
                <div className="p-4 rounded-2xl bg-[#111214]">
                  <Icon className="w-10 h-10 text-green-400" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================= Info section ============================= */}
        <div className="p-5 flex flex-col gap-3 flex-1">
          {/* Title + external link */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-white font-bold font-mono text-sm leading-snug group-hover:text-green-400 transition-colors duration-300 flex-1">
              {c.title}
            </h3>
            {c.link && (
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500/40 hover:text-green-400 transition-colors flex-shrink-0 mt-0.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* ============================= Meta row ============================= */}
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${typeColors[c.type] ?? typeColors.Technical}`}
            >
              {c.type}
            </span>
            <span className="text-gray-600 text-[11px] font-mono flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {c.date}
            </span>
            <span className="text-gray-600 text-[11px] font-mono">
              · {c.issuer}
            </span>
          </div>

          {/* ============================= Description ============================= */}
          <p className="text-gray-400 text-xs font-mono leading-relaxed flex-1">
            {c.description}
          </p>

          {/* ============================= Verified row — only for cards without image (image cards show badge on photo) ============================= */}
          {c.verified && !hasImage && (
            <div className="flex items-center gap-1 text-green-500/60 text-[10px] font-mono">
              <CheckCircle className="w-3 h-3" /> Verified credential
            </div>
          )}
        </div>
      </div>

      {/* Bottom scan line glow */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

// ============================= Page =============================
export default function Achievements() {
  const [tab, setTab] = useState("achievements");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const imageCerts = certifications.filter((c) => c.image);

  return (
    <section
      id="achievements"
      className="relative py-16 md:py-32 text-white bg-[#0a0a0a] min-h-screen overflow-hidden"
    >
      <DataStream count={4} />

      {/* ============================= Ambient blobs ============================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-green-600/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* ============================= Grid ============================= */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="scanline-main" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 z-20">
        {/* ============================= Header ============================= */}
        <div className="text-center space-y-6 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm relative overflow-hidden group">
            <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <Award className="w-4 h-4 text-green-400 relative z-10 animate-pulse" />
            <span className="text-green-400 text-sm font-medium font-mono relative z-10">
              Achievements & Certs
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-center animate-gradient-x font-mono"
          >
            Milestones & Credentials
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-mono"
          >
            <span className="text-green-400">&gt;</span> Verified skills,
            real-world wins, and the credentials behind the code.
          </motion.p>

          <div className="relative w-24 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-green-400 animate-scan-line" />
          </div>
        </div>

        {/* ============================= Tab switch ============================= */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-1 p-1 rounded-xl bg-green-500/5 border border-green-500/20">
            {["achievements", "certifications"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 rounded-lg text-xs font-mono capitalize transition-all duration-200 ${
                  tab === t
                    ? "bg-green-500/20 text-green-400 border border-green-500/40"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* ============================= Achievements grid ============================= */}
        <AnimatePresence mode="wait">
          {tab === "achievements" && (
            <motion.div
              key="achievements"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {achievements.map((a) => {
                const Icon = a.icon;
                return (
                  <motion.div
                    key={a.id}
                    variants={itemVariants}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="relative rounded-2xl border border-green-500/15 bg-[#111214] p-6 flex flex-col gap-4 hover:border-green-500/35 transition-all duration-300 group overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-green-500/40 rounded-tl-2xl" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-500/20 rounded-br-2xl" />

                    <div className="flex items-start justify-between">
                      <Icon className={`w-6 h-6 ${a.color}`} />
                      <div className="text-right">
                        <div
                          className={`text-2xl font-bold font-mono ${a.color}`}
                        >
                          {a.metric}
                        </div>
                        <div className="text-[10px] text-gray-600 font-mono">
                          {a.metricLabel}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-white font-bold font-mono text-base group-hover:text-green-400 transition-colors duration-300">
                      {a.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-mono leading-relaxed flex-1">
                      {a.description}
                    </p>

                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* ============================= Certifications grid ============================= */}
          {tab === "certifications" && (
            <motion.div
              key="certifications"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certifications.map((c) => {
                const imgIdx = imageCerts.findIndex((ic) => ic.id === c.id);
                return (
                  <CertCard
                    key={c.id}
                    c={c}
                    onImageClick={
                      imgIdx !== -1 ? () => setLightboxIndex(imgIdx) : null
                    }
                  />
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ============================= Lightbox ============================= */}
      {lightboxIndex !== null && (
        <Lightbox
          certs={imageCerts}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => Math.max(0, i - 1))}
          onNext={() =>
            setLightboxIndex((i) => Math.min(imageCerts.length - 1, i + 1))
          }
        />
      )}

      <style>{`
        @keyframes gradient-x{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
        @keyframes scan-line{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}
        @keyframes pulse-slow{0%,100%{opacity:0.3}50%{opacity:0.6}}
        .animate-gradient-x{animation:gradient-x 3s ease infinite;background-size:200% 200%}
        .animate-scan-line{animation:scan-line 2s linear infinite}
        .animate-pulse-slow{animation:pulse-slow 4s ease-in-out infinite}
        .scanline-main{position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent 0%,rgba(74,222,128,0.3) 50%,transparent 100%);animation:scan-main 6s linear infinite}
        .scanline-card{position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent 0%,rgba(74,222,128,0.35) 50%,transparent 100%);animation:scan-card 3s linear infinite}
        @keyframes scan-main{0%{transform:translateY(0)}100%{transform:translateY(100vh)}}
        @keyframes scan-card{0%{transform:translateY(0)}100%{transform:translateY(300px)}}
      `}</style>
    </section>
  );
}
