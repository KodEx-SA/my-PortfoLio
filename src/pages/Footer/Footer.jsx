import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowUp,
  Heart,
  Code2,
} from "lucide-react";
import LogoImage from "@/assets/images/logo_images/Logo.png";

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
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute -top-20 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-green-600/5 rounded-full blur-3xl" />
      </div>

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={LogoImage}
                alt="Ashley Motsie Logo"
                className="h-10 w-auto"
              />
              <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                Ashley K Motsie
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-stack Developer specializing in building exceptional digital
              experiences with modern web technologies.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4 text-green-400" />
              <span>Rustenburg, South Africa</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[2px] bg-green-400 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-gray-400 ${social.color} transition-colors text-sm group`}
                  >
                    <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Newsletter/CTA Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <p className="text-gray-400 text-sm">
              Have a project in mind? Let&apos;s work together to bring your ideas to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 hover:border-green-400/50 transition-all text-sm font-medium"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© {currentYear} Ashley K Motsie.</span>
            <span className="hidden sm:inline">Made with</span>
            <Heart className="w-4 h-4 text-green-400 fill-green-400 animate-pulse hidden sm:inline" />
            <span className="hidden sm:inline">and</span>
            <Code2 className="w-4 h-4 text-green-400 hidden sm:inline" />
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 hover:border-green-400/50 transition-all text-sm font-medium"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
