import { motion } from "framer-motion";
import { Quote, Star, MessageSquare, Sparkles } from "lucide-react";
import DataStream from "@/components/DataStream";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sipho Dlamini",
    role: "CEO",
    company: "AI Global Networks",
    avatar: "SD",
    color: "from-green-400 to-emerald-600",
    rating: 5,
    text: "Ashley delivered an exceptional AI-powered chatbot application that transformed how we engage with clients. The React and Groq API integration was seamless, and the attention to detail in the UI was outstanding. A true full-stack professional.",
    tag: "AI Development",
  },
  {
    id: 2,
    name: "Thabo Mokoena",
    role: "Project Manager",
    company: "Eullafied Tech Solutions",
    avatar: "TM",
    color: "from-green-500 to-teal-500",
    rating: 5,
    text: "Working with Ashley on our help desk system was a pleasure. The transition from WordPress to a full NestJS/React stack was handled professionally, on time, and with all our requirements met. The agile workflow kept everything transparent.",
    tag: "Full-Stack Dev",
  },
  {
    id: 3,
    name: "Lerato Nkosi",
    role: "Creative Director",
    company: "Maps Media Productions",
    avatar: "LN",
    color: "from-emerald-400 to-green-600",
    rating: 5,
    text: "Ashley consistently delivers polished websites that exceed client expectations. The combination of web development and graphic design sensibility is rare — every project has both technical excellence and visual appeal. Highly recommend.",
    tag: "Web Design",
  },
  {
    id: 4,
    name: "Keanu Petersen",
    role: "Technical Lead",
    company: "Sasbo AI Symposium",
    avatar: "KP",
    color: "from-teal-400 to-green-500",
    rating: 5,
    text: "Ashley built our Symposium website with incredible animations and a professional presentation layer that impressed every attendee. The Next.js 15 implementation was cutting-edge, and the turnaround time was remarkable.",
    tag: "Next.js 15",
  },
  {
    id: 5,
    name: "Amahle Dube",
    role: "Owner",
    company: "Taahirah Modelling Agency",
    avatar: "AD",
    color: "from-green-400 to-teal-600",
    rating: 5,
    text: "Ashley captured our brand identity perfectly. The website is elegant, fast, and exactly what we envisioned. Clients consistently compliment us on how professional our online presence looks. The whole experience was smooth from start to finish.",
    tag: "Brand & Web",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Testimonials() {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "AI Development",
    "Full-Stack Dev",
    "Web Design",
    "Next.js / TypeScript",
    "Next.js 15",
    "Brand & Web",
  ];

  const filtered =
    activeFilter === "All"
      ? testimonials
      : testimonials.filter((t) => t.tag === activeFilter);

  return (
    <section
      id="testimonials"
      className="relative py-16 md:py-32 text-white bg-[#0a0a0a] min-h-screen overflow-hidden"
    >
      {/* Data Stream */}
      <DataStream count={4} />

      {/* Ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-green-600/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/3 rounded-full blur-3xl" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Scan line */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="scanline-main" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 z-20">
        {/* Header */}
        <div className="text-center space-y-6 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm relative overflow-hidden group">
            <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            <MessageSquare className="w-4 h-4 text-green-400 relative z-10 animate-pulse" />
            <span className="text-green-400 text-sm font-medium font-mono relative z-10">
              Client Testimonials
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent font-mono"
          >
            What Clients Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-mono"
          >
            Real feedback from real people I've built real things for.
          </motion.p>

          <div className="relative w-24 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-green-400 animate-scan-line" />
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 mb-12 max-w-lg mx-auto"
        >
          {[
            { value: "6+", label: "Happy Clients" },
            { value: "5.0", label: "Avg. Rating" },
            { value: "100%", label: "Satisfaction" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-xl bg-green-500/5 border border-green-500/20 backdrop-blur-sm"
            >
              <div className="text-2xl font-bold text-green-400 font-mono">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 font-mono mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono border transition-all duration-200 ${
                activeFilter === f
                  ? "bg-green-500/20 border-green-500/60 text-green-400"
                  : "bg-transparent border-green-500/20 text-gray-500 hover:border-green-500/40 hover:text-gray-300"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((t) => (
            <motion.div
              key={t.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredId(t.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 flex flex-col gap-4 group cursor-default
                ${
                  hoveredId === t.id
                    ? "bg-green-500/8 border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.08)]"
                    : "bg-white/2 border-green-500/15"
                }`}
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-green-500/40 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-500/20 rounded-br-2xl" />

              {/* Quote icon */}
              <div className="flex items-start justify-between">
                <Quote className="w-7 h-7 text-green-500/40 flex-shrink-0" />
                <span className="text-[10px] font-mono text-green-500/60 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full">
                  {t.tag}
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 text-green-400 fill-green-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed font-mono flex-1">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-green-500/10">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-xs font-bold text-black font-mono flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold font-mono">
                    {t.name}
                  </div>
                  <div className="text-green-400/70 text-xs font-mono">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>

              {/* Hover glow line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-b-2xl transition-opacity duration-300 ${
                  hoveredId === t.id ? "opacity-100" : "opacity-0"
                }`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 font-mono text-sm mb-4">
            Want to work together?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 font-mono text-sm hover:bg-green-500/20 hover:border-green-500/60 transition-all duration-200"
          >
            <Sparkles className="w-4 h-4" />
            Let's Build Something Great
          </a>
        </motion.div>
      </div>
    </section>
  );
}
