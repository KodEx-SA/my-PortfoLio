import { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
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
  const [activeLink, setActiveLink] = useState(() => location.pathname.substring(1) || "home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname.substring(1) || "home");
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-[var(--bg)]/90 backdrop-blur-md transition-shadow duration-200 ${
          scrolled ? "shadow-[0_1px_0_0_var(--border)]" : "border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setActiveLink("home")}>
            <span className="w-8 h-8 rounded-md bg-[var(--ink)] text-[var(--bg)] flex items-center justify-center font-mono text-xs font-semibold">
              AM
            </span>
            <span className="font-display font-semibold text-[var(--ink)] tracking-tight hidden sm:inline">
              Ashley Motsie
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(({ id, text, path }) => (
              <Link
                key={id}
                to={path}
                onClick={() => setActiveLink(id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeLink === id
                    ? "text-[var(--accent)] bg-[var(--accent-soft)]"
                    : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
                }`}
              >
                {text}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden p-2 text-[var(--ink)]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-[var(--border)] ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"
          }`}
        >
          <div className="px-5 py-3 flex flex-col gap-1 bg-[var(--bg)]">
            {links.map(({ id, icon: Icon, text, path }) => (
              <Link
                key={id}
                to={path}
                onClick={() => setActiveLink(id)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  activeLink === id
                    ? "text-[var(--accent)] bg-[var(--accent-soft)]"
                    : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
                }`}
              >
                <Icon className="text-base" />
                {text}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
}
