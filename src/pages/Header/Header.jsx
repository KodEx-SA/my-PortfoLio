/* eslint-disable react-hooks/purity */
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
    setIsMenuOpen(false);
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
          <nav className={`relative bg-[#0a0a0a]/80 backdrop-blur-md rounded-full px-6 py-2.5 transition-all duration-300 ${
            scrolled ? "shadow-lg shadow-green-500/10" : ""
          }`}>
            {/* Scan line effect */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <div className="scanline" />
            </div>

            {/* Floating particles background */}
            <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-green-400 rounded-full animate-float-particle opacity-20"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>

            <div className="flex items-center gap-1 lg:gap-2 relative z-10">
              {navLinks.map(({ id, icon: Icon, text, path }) => (
                <Link
                  key={id}
                  to={path}
                  onClick={() => setActiveLink(id)}
                  className={`group relative px-4 py-2 rounded-full text-sm font-medium
                    transition-all duration-300 flex items-center gap-2 overflow-hidden
                    ${
                      activeLink === id
                        ? "bg-green-500/20 text-green-400"
                        : "text-gray-400 hover:text-green-400"
                    }
                  `}
                >
                  {/* Glitch effect on hover */}
                  {activeLink !== id && (
                    <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                  )}

                  {/* Holographic glow for active link */}
                  {activeLink === id && (
                    <span className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/20 to-green-400/0 animate-pulse" />
                  )}

                  <Icon
                    className={`relative z-10 text-base transition-transform duration-300 ${
                      activeLink === id
                        ? "scale-110 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]"
                        : "group-hover:scale-110"
                    }`}
                  />
                  <span className="relative z-10 font-mono tracking-wide">{text}</span>

                  {/* Enhanced active indicator */}
                  {activeLink === id && (
                    <>
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full animate-pulse" />
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-[2px] bg-green-400/30 rounded-full blur-sm" />
                    </>
                  )}
                </Link>
              ))}
            </div>

            {/* Tech corner brackets */}
            <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-green-500/30 rounded-tl" />
            <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-green-500/30 rounded-tr" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-green-500/30 rounded-bl" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-green-500/30 rounded-br" />
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md relative overflow-hidden">
          {/* Scan line effect for mobile */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="scanline" />
          </div>

          {/* Floating particles background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-green-400 rounded-full animate-float-particle opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          <div className="flex justify-between items-center px-4 py-3 relative z-10">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(74,222,128,0.5)] transition-all duration-300">
                  <span className="text-black font-bold text-sm font-mono">AM</span>
                </div>
                {/* Pulsing ring */}
                <span className="absolute inset-0 rounded-full border-2 border-green-400/30 animate-ping-slow" />
              </div>
              <span className="text-white font-bold text-lg font-mono tracking-wider">Portfolio</span>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative text-green-400 p-2 hover:bg-green-500/10 rounded-lg transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              <span className="absolute inset-0 bg-green-400/0 group-hover:bg-green-400/5 rounded-lg transition-all duration-300" />
              <span className="relative z-10">
                {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </span>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 py-3 space-y-1 relative">
              {/* Data stream effect */}
              <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-green-500/30 to-transparent" />
              
              {navLinks.map(({ id, icon: Icon, text, path }, index) => (
                <Link
                  key={id}
                  to={path}
                  onClick={() => {
                    setActiveLink(id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 relative overflow-hidden group
                    ${
                      activeLink === id
                        ? "bg-green-500/20 text-green-400"
                        : "text-gray-400 hover:text-green-400 hover:bg-green-500/5"
                    }
                  `}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Hover glitch effect */}
                  <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-out" />
                  
                  <Icon className={`relative z-10 text-lg transition-transform duration-200 ${
                    activeLink === id ? "drop-shadow-[0_0_6px_rgba(74,222,128,0.5)]" : ""
                  }`} />
                  <span className="relative z-10 font-medium font-mono tracking-wide">{text}</span>

                  {/* Active indicator */}
                  {activeLink === id && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 md:h-0" />

      <style>{`
        @keyframes float-particle {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.2;
          }
          25% {
            transform: translate(10px, -10px);
            opacity: 0.4;
          }
          50% {
            transform: translate(-5px, -20px);
            opacity: 0.2;
          }
          75% {
            transform: translate(-10px, -10px);
            opacity: 0.3;
          }
        }
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.2;
          }
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
        }
        .animate-float-particle {
          animation: float-particle ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 3s ease-in-out infinite;
        }
        .scanline {
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
          animation: scan 3s linear infinite;
          pointer-events: none;
        }
        @keyframes scan {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </>
  );
}