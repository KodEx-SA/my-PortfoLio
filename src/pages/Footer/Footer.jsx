/* eslint-disable react-hooks/purity */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowUp,
  Heart,
  Code2,
  Terminal,
  Zap,
  Radio,
} from "lucide-react";
import LogoImage from "@/assets/images/logo_images/Logo.png";

// Data Stream Component
const DataStream = () => {
  const chars = '01アイウエオ';
  const streams = Array.from({ length: 3 }, (_, i) => ({
    left: `${20 + i * 30}%`,
    delay: `${Math.random() * 3}s`,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5 z-5">
      {streams.map((stream, i) => (
        <div
          key={i}
          className="absolute bottom-0 text-green-400 text-xs font-mono animate-data-stream-up"
          style={{
            left: stream.left,
            animationDelay: stream.delay,
          }}
        >
          {Array.from({ length: 20 }, () =>
            chars[Math.floor(Math.random() * chars.length)]
          ).join('')}
        </div>
      ))}
    </div>
  );
};

// Circuit Lines Component
const CircuitLines = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0)" />
            <stop offset="50%" stopColor="rgba(34, 197, 94, 0.5)" />
            <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
          </linearGradient>
        </defs>
        <path
          d="M 0 50 L 200 50 L 200 100 L 400 100"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          fill="none"
          className="animate-circuit-flow"
        />
        <path
          d="M 100% 30 L 80% 30 L 80% 80 L 60% 80"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          fill="none"
          className="animate-circuit-flow"
          style={{ animationDelay: '1s' }}
        />
      </svg>
    </div>
  );
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/KodEx-SA",
      color: "hover:text-green-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ashley-k-motsie-718686263/",
      color: "hover:text-green-400",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:motsieashley31@gmail.com",
      color: "hover:text-green-400",
    },
  ];

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-green-500/20 text-white overflow-hidden">
      {/* Data Stream Effect */}
      <DataStream />

      {/* Circuit Lines */}
      <CircuitLines />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div 
          className="absolute -bottom-20 right-1/4 w-64 h-64 bg-green-600/5 rounded-full blur-3xl animate-pulse-slow" 
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Grid background with green tint */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, #000 70%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, #000 70%, transparent 100%)",
        }}
      />

      {/* Top scan line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green-400/30 to-transparent animate-scan-line" />

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm relative overflow-hidden group">
            <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse relative z-10" />
            <Terminal className="w-3 h-3 text-green-400 relative z-10" />
            <span className="text-green-400 text-xs font-medium font-mono relative z-10">
              SYSTEM_STATUS: ONLINE
            </span>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 relative group"
          >
            {/* Tech corner bracket */}
            <div className="absolute top-0 left-0 w-6 h-6 opacity-30 group-hover:opacity-100 transition-opacity">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-green-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              <div className="absolute top-0 left-0 w-[2px] h-full bg-green-400 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 delay-75" />
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={LogoImage}
                  alt="Ashley Motsie Logo"
                  className="h-10 w-auto relative z-10"
                />
                {/* Pulsing ring around logo */}
                <div className="absolute inset-0 border-2 border-green-400/30 rounded-lg animate-ping-slow" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent font-mono">
                Ashley K Motsie
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-mono">
              <span className="text-green-400">&gt;</span> Full-stack Developer specializing in building exceptional digital
              experiences with modern web technologies.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400 font-mono group/location hover:text-green-400 transition-colors">
              <MapPin className="w-4 h-4 text-green-400 animate-pulse" />
              <Terminal className="w-3 h-3" />
              <span>Rustenburg, South Africa</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 relative group"
          >
            {/* Tech corner bracket */}
            <div className="absolute top-0 right-0 w-6 h-6 opacity-30 group-hover:opacity-100 transition-opacity">
              <div className="absolute top-0 right-0 w-full h-[2px] bg-green-400 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300" />
              <div className="absolute top-0 right-0 w-[2px] h-full bg-green-400 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 delay-75" />
            </div>

            <h4 className="text-lg font-semibold text-white font-mono flex items-center gap-2">
              <Zap className="w-4 h-4 text-green-400 animate-pulse" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm inline-flex items-center gap-2 group/link font-mono"
                  >
                    <Terminal className="w-3 h-3 text-green-400 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    <span className="w-0 h-[2px] bg-green-400 group-hover/link:w-4 transition-all duration-300" />
                    #{link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 relative group"
          >
            {/* Tech corner bracket */}
            <div className="absolute bottom-0 left-0 w-6 h-6 opacity-30 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-green-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              <div className="absolute bottom-0 left-0 w-[2px] h-full bg-green-400 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 delay-75" />
            </div>

            <h4 className="text-lg font-semibold text-white font-mono flex items-center gap-2">
              <Radio className="w-4 h-4 text-green-400 animate-pulse" />
              Connect
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className={`relative flex items-center gap-3 text-gray-400 ${social.color} transition-colors text-sm group/social font-mono overflow-hidden`}
                  >
                    {/* Hover sweep effect */}
                    <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover/social:translate-x-[100%] transition-transform duration-500 ease-out" />
                    
                    <div className="relative p-2 rounded-lg bg-green-500/10 border border-green-500/20 group-hover/social:bg-green-500/20 group-hover/social:border-green-400/40 transition-all">
                      <Icon className="w-4 h-4 relative z-10" />
                      {/* Pulsing ring */}
                      <span className="absolute inset-0 rounded-lg border-2 border-green-400/30 opacity-0 group-hover/social:opacity-100 group-hover/social:animate-ping-slow" />
                    </div>
                    <span className="relative z-10">
                      <Terminal className="inline w-3 h-3 mr-1" />
                      {social.name}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Newsletter/CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 relative group"
          >
            {/* Tech corner bracket */}
            <div className="absolute bottom-0 right-0 w-6 h-6 opacity-30 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 right-0 w-full h-[2px] bg-green-400 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300" />
              <div className="absolute bottom-0 right-0 w-[2px] h-full bg-green-400 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 delay-75" />
            </div>

            <h4 className="text-lg font-semibold text-white font-mono flex items-center gap-2">
              <Mail className="w-4 h-4 text-green-400 animate-pulse" />
              Get in Touch
            </h4>
            <p className="text-gray-400 text-sm font-mono">
              <span className="text-green-400">&gt;</span> Have a project in mind? Let&apos;s work together to bring your ideas to life.
            </p>
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 hover:border-green-400/50 transition-all text-sm font-medium font-mono overflow-hidden group/cta"
            >
              {/* Sweep effect */}
              <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover/cta:translate-x-[100%] transition-transform duration-500 ease-out" />
              
              <Terminal className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Contact Me</span>
              <Zap className="w-3 h-3 relative z-10 group-hover/cta:rotate-12 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Animated Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent mb-8 overflow-hidden"
        >
          {/* Moving scan line on divider */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/50 to-transparent animate-scan-line" />
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-400 text-sm font-mono">
            <Terminal className="w-3 h-3 text-green-400" />
            <span className="text-green-400">&gt;</span>
            <span>© {currentYear} Ashley K Motsie.</span>
            <span className="hidden sm:inline">Made with</span>
            <Heart className="w-4 h-4 text-green-400 fill-green-400 animate-pulse hidden sm:inline" />
            <span className="hidden sm:inline">and</span>
            <Code2 className="w-4 h-4 text-green-400 hidden sm:inline animate-pulse" />
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="relative group/top flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 hover:border-green-400/50 transition-all text-sm font-medium font-mono overflow-hidden"
            aria-label="Scroll to top"
          >
            {/* Sweep effect */}
            <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover/top:translate-x-[100%] transition-transform duration-500 ease-out" />
            
            <Terminal className="w-3 h-3 relative z-10" />
            <span className="relative z-10">Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover/top:-translate-y-1 transition-transform relative z-10 animate-pulse" />
          </button>
        </motion.div>

        {/* Bottom status indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-8"
        >
          <div className="flex items-center gap-2 text-xs text-green-400/50 font-mono">
            <div className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
            <span>END_OF_TRANSMISSION</span>
            <div className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes data-stream-up {
          0% { transform: translateY(100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
        @keyframes scan-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.2; }
          100% { transform: scale(1); opacity: 0.5; }
        }
        @keyframes circuit-flow {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-data-stream-up {
          animation: data-stream-up 12s linear infinite;
        }
        .animate-scan-line {
          animation: scan-line 2s linear infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 3s ease-in-out infinite;
        }
        .animate-circuit-flow {
          stroke-dasharray: 1000;
          animation: circuit-flow 5s linear infinite;
        }
      `}</style>
    </footer>
  );
}