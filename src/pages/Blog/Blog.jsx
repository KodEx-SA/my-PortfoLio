import { motion } from "framer-motion";
import { useState } from "react";
import { BookOpen, Tag, Clock, ArrowRight, Rss, Sparkles, Search } from "lucide-react";
import DataStream from "@/components/DataStream";

const articles = [
    {
        id: 1,
        title: "Building Production-Ready AI Chatbots with Groq API and React",
        excerpt:
            "A deep dive into architecting scalable AI chatbot systems — from prompt engineering to streaming responses, error handling, and deploying to production with Vercel.",
        category: "AI Engineering",
        tags: ["React", "Groq API", "AI", "TypeScript"],
        readTime: "8 min",
        date: "Feb 2025",
        featured: true,
        slug: "ai-chatbots-groq-react",
    },
    {
        id: 2,
        title: "Next.js 15 & the App Router: What Changed and Why It Matters",
        excerpt:
            "Breaking down the biggest changes in Next.js 15 — Server Components, improved caching, Partial Prerendering, and how I applied these in real client projects.",
        category: "Web Development",
        tags: ["Next.js", "React", "Performance"],
        readTime: "6 min",
        date: "Jan 2025",
        featured: true,
        slug: "nextjs-15-app-router",
    },
    {
        id: 3,
        title: "PayFast Integration in South Africa: A Developer's Honest Guide",
        excerpt:
            "Everything I learned integrating PayFast into the eDuBaskets platform — webhook handling, sandbox quirks, production gotchas, and testing strategies.",
        category: "Payments",
        tags: ["PayFast", "Next.js", "South Africa"],
        readTime: "7 min",
        date: "Dec 2024",
        featured: false,
        slug: "payfast-integration-sa",
    },
    {
        id: 4,
        title: "Migrating from WordPress to NestJS + React: Lessons Learned",
        excerpt:
            "The full story of rebuilding a corporate help desk system from a WordPress base to a custom NestJS API and React frontend — without losing any data or uptime.",
        category: "Architecture",
        tags: ["NestJS", "React", "Migration"],
        readTime: "10 min",
        date: "Nov 2024",
        featured: false,
        slug: "wordpress-to-nestjs",
    },
    {
        id: 5,
        title: "Tailwind CSS v4: The Good, the Great, and the Breaking Changes",
        excerpt:
            "A practical look at Tailwind CSS v4 from a developer who shipped production projects on it. CSS-first config, new utility classes, and how to migrate safely.",
        category: "CSS",
        tags: ["Tailwind CSS", "CSS", "Frontend"],
        readTime: "5 min",
        date: "Oct 2024",
        featured: false,
        slug: "tailwind-v4",
    },
    {
        id: 6,
        title: "Prisma ORM with PostgreSQL: The Setup I Wish I Had on Day One",
        excerpt:
            "From schema design to migrations to query optimisation — the Prisma patterns I now use on every project and the mistakes I stopped making.",
        category: "Database",
        tags: ["Prisma", "PostgreSQL", "TypeScript"],
        readTime: "9 min",
        date: "Sep 2024",
        featured: false,
        slug: "prisma-postgresql-guide",
    },
];

const categories = ["All", "AI Engineering", "Web Development", "Payments", "Architecture", "CSS", "Database"];

const categoryColors = {
    "AI Engineering": "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    "Web Development": "text-green-400 bg-green-500/10 border-green-500/30",
    "Payments": "text-teal-400 bg-teal-500/10 border-teal-500/30",
    "Architecture": "text-green-300 bg-green-400/10 border-green-400/30",
    "CSS": "text-emerald-300 bg-emerald-400/10 border-emerald-400/30",
    "Database": "text-teal-300 bg-teal-400/10 border-teal-400/30",
};

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Blog() {
    const [filter, setFilter] = useState("All");
    const [search, setSearch] = useState("");

    const filtered = articles.filter((a) => {
        const matchCat = filter === "All" || a.category === filter;
        const matchSearch =
            search === "" ||
            a.title.toLowerCase().includes(search.toLowerCase()) ||
            a.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
        return matchCat && matchSearch;
    });

    const featured = filtered.filter((a) => a.featured);
    const rest = filtered.filter((a) => !a.featured);

    return (
        <section
            id="blog"
            className="relative py-16 md:py-32 text-white bg-[#0a0a0a] min-h-screen overflow-hidden"
        >
            <DataStream count={4} />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-600/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
            <div className="absolute inset-0 pointer-events-none z-10"><div className="scanline-main" /></div>

            <div className="relative mx-auto max-w-6xl px-6 z-20">
                {/* Header */}
                <div className="text-center space-y-6 mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm relative overflow-hidden group">
                        <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        <Rss className="w-4 h-4 text-green-400 relative z-10 animate-pulse" />
                        <span className="text-green-400 text-sm font-medium font-mono relative z-10">Blog & Articles</span>
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent font-mono"
                    >
                        Thoughts & Write-ups
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}
                        className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-mono"
                    >
                        Practical guides, lessons from the trenches, and things I wish someone had written first.
                    </motion.p>

                    <div className="relative w-24 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full mx-auto overflow-hidden">
                        <div className="absolute inset-0 bg-green-400 animate-scan-line" />
                    </div>
                </div>

                {/* Search + Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-4 mb-10"
                >
                    {/* Search */}
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500/50" />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search articles..."
                            className="w-full pl-9 pr-4 py-2 rounded-full bg-green-500/5 border border-green-500/20 text-gray-300 text-sm font-mono placeholder-gray-600 focus:outline-none focus:border-green-500/50 focus:bg-green-500/8 transition-all duration-200"
                        />
                    </div>

                    {/* Category filters */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((c) => (
                            <button
                                key={c}
                                onClick={() => setFilter(c)}
                                className={`px-3 py-1.5 rounded-full text-xs font-mono border transition-all duration-200 ${filter === c
                                        ? "bg-green-500/20 border-green-500/60 text-green-400"
                                        : "bg-transparent border-green-500/20 text-gray-500 hover:border-green-500/40 hover:text-gray-300"
                                    }`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Featured articles */}
                {featured.length > 0 && (
                    <div className="mb-8">
                        <p className="text-xs font-mono text-green-500/60 mb-4 flex items-center gap-2">
                            <Sparkles className="w-3 h-3" /> Featured
                        </p>
                        <motion.div
                            key={`featured-${filter}-${search}`}
                            variants={containerVariants} initial="hidden" animate="visible"
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {featured.map((a) => (
                                <ArticleCard key={a.id} article={a} featured />
                            ))}
                        </motion.div>
                    </div>
                )}

                {/* Rest */}
                {rest.length > 0 && (
                    <motion.div
                        key={`rest-${filter}-${search}`}
                        variants={containerVariants} initial="hidden" animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {rest.map((a) => <ArticleCard key={a.id} article={a} />)}
                    </motion.div>
                )}

                {filtered.length === 0 && (
                    <div className="text-center py-20 text-gray-600 font-mono text-sm">
                        No articles match your search.
                    </div>
                )}
            </div>
        </section>
    );
}

function ArticleCard({ article: a, featured = false }) {
    const [hovered, setHovered] = useState(false);
    return (
        <motion.div
            variants={cardVariants}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`relative rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 flex flex-col gap-4 cursor-default group
        ${hovered ? "bg-green-500/8 border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.08)]" : "bg-white/2 border-green-500/15"}
        ${featured ? "md:col-span-1" : ""}`}
        >
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-green-500/40 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-500/20 rounded-br-2xl" />

            {/* Category + meta */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${categoryColors[a.category] || "text-green-400 bg-green-500/10 border-green-500/30"}`}>
                    {a.category}
                </span>
                <div className="flex items-center gap-3 text-gray-600 text-xs font-mono">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{a.readTime}</span>
                    <span>{a.date}</span>
                </div>
            </div>

            {/* Title */}
            <h3 className={`font-bold font-mono text-white leading-snug ${featured ? "text-xl" : "text-base"}`}>
                {a.title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-400 text-sm leading-relaxed font-mono flex-1">{a.excerpt}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
                {a.tags.map((t) => (
                    <span key={t} className="flex items-center gap-1 text-[10px] font-mono text-green-500/60 bg-green-500/5 border border-green-500/15 px-2 py-0.5 rounded-full">
                        <Tag className="w-2.5 h-2.5" />{t}
                    </span>
                ))}
            </div>

            {/* Read more */}
            <div className={`flex items-center gap-1.5 text-green-400 text-xs font-mono transition-all duration-200 ${hovered ? "opacity-100" : "opacity-50"}`}>
                <BookOpen className="w-3.5 h-3.5" />
                Read article
                <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-200 ${hovered ? "translate-x-1" : ""}`} />
            </div>

            <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-b-2xl transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`} />
        </motion.div>
    );
}