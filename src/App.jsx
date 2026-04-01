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
import Testimonials from "./pages/Testimonials/Testimonials";
import Services from "./pages/Services/Services";
import Blog from "./pages/Blog/Blog";
import Achievements from "./pages/Achievements/Achievements";
import AIChatbot from "./components/AIChatbot";
import ScrollUtils from "./components/ScrollUtils";
import NotFound from "./pages/NotFound/NotFound";

import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <ScrollUtils />
      {/* Router Mode: Use routes for navigation */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <AIChatbot />
    </>
  );
}