import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollUtils() {
    const [visible, setVisible] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <>
            {/* Scroll progress bar */}
            <motion.div
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 origin-left z-[9999] shadow-[0_0_8px_rgba(34,197,94,0.8)]"
            />

            {/* Back to top button */}
            <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8, pointerEvents: visible ? "auto" : "none" }}
                transition={{ duration: 0.2 }}
                className="fixed bottom-24 right-6 z-50 w-10 h-10 rounded-full bg-[#0a0a0a] border border-green-500/40 text-green-400 flex items-center justify-center shadow-[0_0_16px_rgba(34,197,94,0.2)] hover:bg-green-500/10 hover:border-green-500/70 hover:shadow-[0_0_24px_rgba(34,197,94,0.3)] transition-all duration-200 group"
                aria-label="Back to top"
            >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </motion.button>
        </>
    );
}