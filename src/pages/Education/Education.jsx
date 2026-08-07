import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import {
  GraduationCap,
  Award,
  BookOpen,
  Monitor,
  Shield,
  Cpu,
  Wifi,
  Code2,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import CertItEssentials from "@/assets/certificates/cert-it-essentials.jpeg";
import CertCybersecurity from "@/assets/certificates/cert-cybersecurity.jpeg";
import CertItCompletion from "@/assets/certificates/cert-it-completion.jpeg";
import CertGetConnected from "@/assets/certificates/cert-get-connected.jpeg";

const educationData = [
  {
    degree: "Secondary School Certificate (NSC)",
    school: "Malefo Secondary School",
    year: "2016 — 2020",
    description:
      "Focused on science subjects with emphasis on practical laboratory work and scientific research methodologies.",
    skills: ["Mathematics", "Physics", "Biology"],
  },
  {
    degree: "College Certificate (NCV)",
    school: "Orbit TVET College",
    year: "2022 — 2024",
    description:
      "Developed strong critical thinking skills through comprehensive study of Information Technology and Computer Sciences.",
    skills: ["Computer Programming", "System Analysis & Design", "Multimedia", "Data Networking"],
  },
];

const certifications = [
  {
    id: 1,
    title: "IT Essentials: PC Hardware and Software",
    issuer: "Cisco Networking Academy",
    date: "Jan 2024",
    icon: Monitor,
    image: CertItEssentials,
  },
  {
    id: 2,
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    date: "Aug 2023",
    icon: Shield,
    image: CertCybersecurity,
  },
  {
    id: 3,
    title: "IT Essentials — Course Completion",
    issuer: "Cisco Networking Academy",
    date: "Jan 2024",
    icon: Cpu,
    image: CertItCompletion,
  },
  {
    id: 4,
    title: "Get Connected",
    issuer: "Cisco Networking Academy",
    date: "Aug 2022",
    icon: Wifi,
    image: CertGetConnected,
  },
  {
    id: 5,
    title: "NCV National Certificate in IT & Computer Sciences",
    issuer: "Orbit TVET College",
    date: "2024",
    icon: BookOpen,
    image: null,
  },
  {
    id: 6,
    title: "React (Basic) Certificate",
    issuer: "HackerRank",
    date: "2024",
    icon: Code2,
    image: null,
  },
];

function Lightbox({ certs, activeIndex, onClose, onPrev, onNext }) {
  const c = certs[activeIndex];

  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
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
        <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 max-w-2xl w-full mx-4"
        >
          <img src={c.image} alt={c.title} className="w-full rounded-xl" />
          <p className="mt-3 text-center text-white/80 text-sm">{c.title} — {c.issuer}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function EducationSection() {
  const withImages = certifications.filter((c) => c.image);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="education" className="bg-[var(--bg)] text-[var(--ink)] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading eyebrow={"// education"} title="Education & certifications" icon={GraduationCap} />

        {/* Education timeline */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {educationData.map((edu) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="card-surface p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[var(--ink)]">{edu.degree}</h3>
                <span className="text-xs text-[var(--ink-muted)]">{edu.year}</span>
              </div>
              <p className="text-sm text-[var(--accent)] font-medium mt-1">{edu.school}</p>
              <p className="mt-3 text-sm text-[var(--ink-muted)] leading-relaxed">{edu.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {edu.skills.map((s) => (
                  <span key={s} className="text-[11px] px-2 py-1 rounded-md bg-[var(--surface-2)] text-[var(--ink-muted)]">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-24">
          <SectionHeading eyebrow={"// certifications"} title="Certifications" icon={Award} level={2} />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              const imgIndex = withImages.findIndex((c) => c.id === cert.id);
              const clickable = cert.image != null;
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                  onClick={() => clickable && setActiveIndex(imgIndex)}
                  className={`card-surface p-5 flex items-start gap-4 ${clickable ? "cursor-pointer" : ""}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-soft)] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-[var(--ink)] leading-snug">{cert.title}</h3>
                    <p className="text-xs text-[var(--ink-muted)] mt-1">{cert.issuer} · {cert.date}</p>
                    {clickable && (
                      <span className="inline-flex items-center gap-1 text-xs text-[var(--accent)] mt-2">
                        <ZoomIn className="w-3 h-3" /> View certificate
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          certs={withImages}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onPrev={() => setActiveIndex((i) => (i - 1 + withImages.length) % withImages.length)}
          onNext={() => setActiveIndex((i) => (i + 1) % withImages.length)}
        />
      )}
    </section>
  );
}
