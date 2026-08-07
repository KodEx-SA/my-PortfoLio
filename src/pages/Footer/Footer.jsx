import { useLocation, useNavigate } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import LogoImage from "@/assets/images/logo_images/Logo.png";

const quickLinks = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/KodEx-SA" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/ashley-motsie" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/ashley_motsie" },
  { name: "Email", icon: Mail, url: "mailto:motsieashley31@gmail.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const goTo = (id) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      requestAnimationFrame(() =>
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 50)
      );
    }
  };

  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)] text-[var(--ink)]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={LogoImage} alt="Ashley Motsie" className="h-8 w-auto" />
              <span className="font-display font-semibold">Ashley K Motsie</span>
            </div>
            <p className="mt-3 text-sm text-[var(--ink-muted)] leading-relaxed max-w-xs">
              Software developer and AI engineer building production-ready
              web apps and AI-powered tools from Rustenburg, South Africa.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--ink)]">Navigate</h4>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => goTo(link.id)}
                    className="text-sm text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--ink)]">Connect</h4>
            <div className="mt-3 flex flex-col gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    {social.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--border)] text-sm text-[var(--ink-muted)]">
          © {currentYear} Ashley Koketso Motsie. Built with React & Tailwind.
        </div>
      </div>
    </footer>
  );
}
