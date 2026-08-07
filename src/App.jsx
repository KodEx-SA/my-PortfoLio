import "./assets/css/index.css";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ReactLenis } from "lenis/react";

import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Education from "./pages/Education/Education";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";
import AIChatbot from "./components/AIChatbot";
import ScrollUtils from "./components/ScrollUtils";

// Old routes (from the previous multi-page version) redirect to the
// matching anchor on the single page, so bookmarked/shared links still work.
function AnchorRedirect({ hash }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/", { replace: true });
    // Wait for the home page to mount before scrolling to the section.
    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    });
  }, [navigate]);
  return null;
}

function SinglePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.1 }}>
      <Header />
      <ScrollUtils />
      <Routes>
        <Route path="/" element={<SinglePage />} />

        {/* Legacy multi-page routes */}
        <Route path="/about" element={<AnchorRedirect hash="about" />} />
        <Route path="/projects" element={<AnchorRedirect hash="projects" />} />
        <Route path="/skills" element={<AnchorRedirect hash="skills" />} />
        <Route path="/experience" element={<AnchorRedirect hash="experience" />} />
        <Route path="/education" element={<AnchorRedirect hash="education" />} />
        <Route path="/contact" element={<AnchorRedirect hash="contact" />} />
        <Route path="/services" element={<AnchorRedirect hash="about" />} />
        <Route path="/testimonials" element={<AnchorRedirect hash="experience" />} />
        <Route path="/achievements" element={<AnchorRedirect hash="education" />} />

        <Route path="*" element={<AnchorRedirect hash="hero" />} />
      </Routes>
      <Footer />
      <AIChatbot />
    </ReactLenis>
  );
}
