import "./assets/css/index.css";
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import Footer from "./pages/Footer/Footer";
import AIChatbot from "./components/AIChatbot";
import ScrollUtils from "./components/ScrollUtils";
import NotFound from "./pages/NotFound/NotFound";

import { Route, Routes, Navigate } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <ScrollUtils />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />

        {/* Merged into other sections — keep old links from breaking */}
        <Route path="/services" element={<Navigate to="/about" replace />} />
        <Route path="/testimonials" element={<Navigate to="/experience" replace />} />
        <Route path="/achievements" element={<Navigate to="/education" replace />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <AIChatbot />
    </>
  );
}
