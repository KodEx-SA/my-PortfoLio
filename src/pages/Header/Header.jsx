import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { ArrowUpRight, Download, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useLocation, useNavigate } from "react-router-dom";
import { useActiveSection } from "@/hooks/useActiveSection";

const links = [
  { id: "hero", text: "Home" },
  { id: "about", text: "About" },
  { id: "projects", text: "Projects" },
  { id: "skills", text: "Skills" },
  { id: "experience", text: "Experience" },
  { id: "education", text: "Education" },
  { id: "contact", text: "Contact" },
];

const sectionIds = links.map((l) => l.id);

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const activeId = useActiveSection(sectionIds);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Runs once on mount so the theme icon only renders after the client
  // has resolved the real theme — avoids a flash of the wrong icon.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const goTo = (id) => {
    setIsMenuOpen(false);
    if (isHome) {
      scrollToSection(id);
    } else {
      navigate("/");
      requestAnimationFrame(() => setTimeout(() => scrollToSection(id), 50));
    }
  };

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
          <button onClick={() => goTo("hero")} className="flex items-center gap-2 mr-1 shrink-0">
            <span className="w-7 h-7 rounded-full flex items-center justify-center font-mono text-[10px] font-semibold text-white" style={{ background: "var(--gradient-brand)" }}>
              AM
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5 flex-1">
            {links.map(({ id, text }) => (
              <button key={id} onClick={() => goTo(id)} className="relative px-3.5 py-2 rounded-full text-sm font-medium">
                {isHome && activeId === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-[var(--accent-soft)]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className={`relative z-10 ${isHome && activeId === id ? "text-[var(--accent)]" : "text-[var(--ink-muted)] hover:text-[var(--ink)]"}`}>
                  {text}
                </span>
              </button>
            ))}
          </nav>

          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="hidden md:flex ml-auto items-center justify-center w-9 h-9 rounded-full text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--surface-2)] transition-colors shrink-0"
            aria-label="Toggle theme"
          >
            {mounted && resolvedTheme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="/Ashley_K_Motsie_Resume.pdf"
            download="Ashley_K_Motsie_Resume.pdf"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--ink)] text-[var(--bg)] text-sm font-medium hover:bg-[var(--accent-ink)] transition-colors shrink-0"
          >
            Resume
            <Download className="w-3.5 h-3.5" />
          </a>

          {/* Mobile controls */}
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="md:hidden ml-auto p-2.5 rounded-full text-[var(--ink-muted)] hover:bg-[var(--surface-2)]"
            aria-label="Toggle theme"
          >
            {mounted && resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden p-2.5 rounded-full text-[var(--ink)] hover:bg-[var(--surface-2)]"
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
                {links.map(({ id, text }, i) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                  >
                    <button onClick={() => goTo(id)} className="flex items-baseline gap-4 py-3 group text-left w-full">
                      <span className="font-mono text-xs text-[var(--ink-faint)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-3xl font-display font-semibold tracking-tight ${
                          isHome && activeId === id ? "text-[var(--accent)]" : "text-[var(--ink)] group-hover:text-[var(--accent)]"
                        } transition-colors`}
                      >
                        {text}
                      </span>
                    </button>
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
