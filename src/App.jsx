import "./assets/css/index.css";
import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ReactLenis } from "lenis/react";

import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Footer from "./pages/Footer/Footer";
import AIChatbot from "./components/AIChatbot";
import ScrollUtils from "./components/ScrollUtils";
import { SectionSkeleton } from "./components/ui/section-skeleton";

// Hero renders above the fold on first paint, so it's the only section
// bundled eagerly. Everything below the fold is code-split into its own
// chunk and streamed in as the browser has spare capacity — this keeps
// the initial JS payload (and Time-to-Interactive) small even though the
// whole site now lives on one scrolling page.
const About = lazy(() => import("./pages/About/About"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Experience = lazy(() => import("./pages/Experience/Experience"));
const Education = lazy(() => import("./pages/Education/Education"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

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
  }, [navigate, hash]);
  return null;
}

function LazySection({ children }) {
  return <Suspense fallback={<SectionSkeleton />}>{children}</Suspense>;
}

function SinglePage() {
  return (
    <main>
      <Hero />
      <LazySection><About /></LazySection>
      <LazySection><Projects /></LazySection>
      <LazySection><Skills /></LazySection>
      <LazySection><Experience /></LazySection>
      <LazySection><Education /></LazySection>
      <LazySection><Contact /></LazySection>
    </main>
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
