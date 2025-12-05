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

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname.substring(1) || "home";
    return path;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Update active link when route changes
  useEffect(() => {
    const path = location.pathname.substring(1) || "home";
    setActiveLink(path);
    setIsMenuOpen(false); // Close menu on route change
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", path: "/" },
    {
      id: "experience",
      icon: FaBriefcase,
      text: "Experience",
      path: "/experience",
    },
    { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
    { id: "about", icon: FaUser, text: "About", path: "/about" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    {
      id: "education",
      icon: FaGraduationCap,
      text: "Education",
      path: "/education",
    },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        {/* Desktop Navigation */}
        <div className="hidden md:block md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2">
          <div
            className={`p-[2px] rounded-full bg-gradient-to-r from-green-500 via-green-400 to-green-500 animate-gradient-x transition-all duration-300 ${
              scrolled ? "shadow-lg shadow-green-500/20" : ""
            }`}
          >
            <nav className="bg-[#0a0a0a] backdrop-blur-md rounded-full px-6 py-2.5">
              <div className="flex items-center gap-1 lg:gap-2">
                {navLinks.map(({ id, icon: Icon, text, path }) => (
                  <Link
                    key={id}
                    to={path}
                    onClick={() => setActiveLink(id)}
                    className={`group relative px-4 py-2 rounded-full text-sm font-medium
                      transition-all duration-300 flex items-center gap-2
                      ${
                        activeLink === id
                          ? "bg-green-500/20 text-green-400"
                          : "text-gray-400 hover:text-green-400"
                      }
                    `}
                  >
                    <Icon
                      className={`text-base transition-transform duration-300 ${
                        activeLink === id
                          ? "scale-110"
                          : "group-hover:scale-110"
                      }`}
                    />
                    <span>{text}</span>

                    {/* Active indicator dot */}
                    {activeLink === id && (
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full animate-pulse" />
                    )}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-b border-green-500/20">
          <div className="flex justify-between items-center px-4 py-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-black font-bold text-sm">AM</span>
              </div>
              <span className="text-white font-bold text-lg">Portfolio</span>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-400 p-2 hover:bg-green-500/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 py-3 space-y-1 border-t border-green-500/10">
              {navLinks.map(({ id, icon: Icon, text, path }) => (
                <Link
                  key={id}
                  to={path}
                  onClick={() => {
                    setActiveLink(id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                    ${
                      activeLink === id
                        ? "bg-green-500/20 text-green-400 border-l-4 border-green-400"
                        : "text-gray-400 hover:text-green-400 hover:bg-green-500/5 border-l-4 border-transparent"
                    }
                  `}
                >
                  <Icon className="text-lg" />
                  <span className="font-medium">{text}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 md:h-0" />

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </>
  );
}
