import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome, FaUser, FaBriefcase, FaLaptopCode, FaCode,
  FaGraduationCap, FaEnvelope, FaBars, FaTimes,
} from "react-icons/fa";
import { ArrowUpRight, Download } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { id: "home", icon: FaHome, text: "Home", path: "/" },
  { id: "about", icon: FaUser, text: "About", path: "/about" },
  { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
  { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
  { id: "experience", icon: FaBriefcase, text: "Experience", path: "/experience" },
  { id: "education", icon: FaGraduationCap, text: "Education", path: "/education" },
  { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
];

export default function Header() {
  const location = useLocation();
  const activeLink = location.pathname.substring(1) || "home";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setHidden(y > lastY && y > 120);
      lastY = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        animate={{ y: hidden && !isMenuOpen ? -96 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-4"
      >
        <div
          className={`flex items-center gap-1 w-full max-w-3xl rounded-full pl-4 pr-1.5 py-1.5 border transition-all duration-300 ${
            scrolled
              ? "bg-[var(--bg)]/85 backdrop-blur-md border-[var(--border)] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]"
              : "bg-[var(--bg)]/60 backdrop-blur-sm border-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 mr-1 shrink-0">
            <span className="w-7 h-7 rounded-full bg-[var(--ink)] text-[var(--bg)] flex items-center justify-center font-mono text-[10px] font-semibold">
              AM
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5 flex-1">
            {links.map(({ id, text, path }) => (
              <Link key={id} to={path} className="relative px-3.5 py-2 rounded-full text-sm font-medium">
                {activeLink === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-[var(--accent-soft)]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className={`relative z-10 ${activeLink === id ? "text-[var(--accent)]" : "text-[var(--ink-muted)] hover:text-[var(--ink)]"}`}>
                  {text}
                </span>
              </Link>
            ))}
          </nav>

          <a
            href="/Ashley_K_Motsie_Resume.pdf"
            download="Ashley_K_Motsie_Resume.pdf"
            className="hidden md:inline-flex items-center gap-1.5 ml-auto px-4 py-2 rounded-full bg-[var(--ink)] text-[var(--bg)] text-sm font-medium hover:bg-[var(--accent-ink)] transition-colors shrink-0"
          >
            Resume
            <Download className="w-3.5 h-3.5" />
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden ml-auto p-2.5 rounded-full text-[var(--ink)] hover:bg-[var(--surface-2)]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--bg)] md:hidden"
          >
            <div className="h-full flex flex-col justify-center px-8">
              <nav className="flex flex-col gap-1">
                {links.map(({ id, text, path }, i) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                  >
                    <Link
                      to={path}
                      className="flex items-baseline gap-4 py-3 group"
                    >
                      <span className="font-mono text-xs text-[var(--ink-faint)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-3xl font-display font-semibold tracking-tight ${
                          activeLink === id ? "text-[var(--accent)]" : "text-[var(--ink)] group-hover:text-[var(--accent)]"
                        } transition-colors`}
                      >
                        {text}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <a
                href="/Ashley_K_Motsie_Resume.pdf"
                download="Ashley_K_Motsie_Resume.pdf"
                className="mt-10 inline-flex items-center gap-2 self-start px-5 py-3 rounded-full bg-[var(--ink)] text-[var(--bg)] font-medium text-sm"
              >
                Download resume
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  );
}
