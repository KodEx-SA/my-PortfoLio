import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { GitBranch, Wifi, TerminalSquare } from "lucide-react";
import DataStream from "@/components/DataStream";

const bootLines = [
  { text: "ashley@kodex-sa:~$ cd /404", delay: 0 },
  { text: "bash: cd: /404: No such file or directory", delay: 600, isError: true },
  { text: "ashley@kodex-sa:~$ ls -la --all", delay: 1200 },
  { text: "drwxr-xr-x  /home  /skills  /projects  /contact", delay: 1800, isDim: true },
  { text: "ashley@kodex-sa:~$ ping universe.dev", delay: 2500 },
  { text: "PING universe.dev: Request timeout for icmp_seq 404", delay: 3100, isError: true },
  { text: "ashley@kodex-sa:~$ # looks like you got lost in the matrix...", delay: 3900, isComment: true },
];

function GlitchText({ children }) {
  const [glitching, setGlitching] = useState(false);
  useEffect(() => {
    const iv = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 200);
    }, 3000);
    return () => clearInterval(iv);
  }, []);
  return (
    <span className="relative inline-block">
      {children}
      {glitching && (
        <>
          <span className="absolute inset-0 text-red-400 opacity-60" style={{ transform: "translate(-2px, 1px)", clipPath: "inset(30% 0 50% 0)" }}>
            {children}
          </span>
          <span className="absolute inset-0 text-cyan-400 opacity-60" style={{ transform: "translate(2px, -1px)", clipPath: "inset(60% 0 10% 0)" }}>
            {children}
          </span>
        </>
      )}
    </span>
  );
}

export default function NotFound() {
  const navigate = useNavigate();
  const [visibleLines, setVisibleLines] = useState([]);
  const [showActions, setShowActions] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    bootLines.forEach(({ text, delay, isError, isDim, isComment }) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, { text, isError, isDim, isComment }]);
      }, delay);
    });
    setTimeout(() => setShowActions(true), 4800);
  }, []);

  useEffect(() => {
    const iv = setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(iv);
  }, []);

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen relative flex items-center justify-center px-4 py-24">
      <DataStream count={6} opacity="opacity-10" />

      {/* Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      {/* Ambient blurs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl">
        {/* 404 headline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-6">
            <TerminalSquare className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-sm font-mono">exit code: 404</span>
          </div>

          <h1 className="text-[80px] md:text-[120px] font-bold font-mono leading-none tracking-tighter">
            <GlitchText>
              <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent">
                404
              </span>
            </GlitchText>
          </h1>
          <p className="text-gray-500 font-mono text-sm mt-2">
            <span className="text-green-400">PAGE_NOT_FOUND</span> · route does not exist
          </p>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="relative w-full"
        >
          {/* Outer glow */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-red-500/30 via-green-500/20 to-red-500/30 blur-sm opacity-40" />

          <div className="relative bg-[#0c0e0f] rounded-2xl overflow-hidden border border-green-500/20 shadow-2xl font-mono">
            {/* Title bar */}
            <div className="flex items-center gap-3 px-4 py-3 bg-[#141617] border-b border-green-500/10 select-none">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840] animate-pulse" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-[12px] text-gray-500">
                  ashley@kodex-sa: ~/404-not-found
                </span>
              </div>
              <span className="flex items-center gap-1 text-[10px] text-red-500/60">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse inline-block" />
                ERROR
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-5 space-y-1.5 min-h-[240px]">
              {visibleLines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className={`text-[12px] leading-5 ${
                    line.isError
                      ? "text-red-400"
                      : line.isDim
                      ? "text-gray-600"
                      : line.isComment
                      ? "text-green-500/50"
                      : "text-gray-300"
                  }`}
                >
                  {line.text}
                </motion.p>
              ))}

              {/* Blinking cursor at end */}
              {!showActions && (
                <span
                  className={`inline-block w-[7px] h-[13px] bg-green-400 align-middle transition-opacity ${
                    cursorVisible ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}

              {/* Action prompt */}
              {showActions && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="pt-3 space-y-3"
                >
                  <p className="text-[12px] text-gray-500">
                    ashley@kodex-sa:~${" "}
                    <span className="text-green-400">
                      # where do you want to go?
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {[
                      { label: "cd ~/home", path: "/" },
                      { label: "cd ~/projects", path: "/projects" },
                      { label: "cd ~/about", path: "/about" },
                      { label: "cd ~/contact", path: "/contact" },
                    ].map(({ label, path }) => (
                      <button
                        key={path}
                        onClick={() => navigate(path)}
                        className="px-3 py-1.5 text-[11px] rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/20 hover:border-green-400/40 transition-all font-mono"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between px-4 py-1.5 bg-red-600/5 border-t border-green-500/10 select-none">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 text-[10px] text-green-400/60">
                  <GitBranch className="w-3 h-3" /> main
                </span>
                <span className="text-[10px] text-gray-700">bash · zsh</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-red-400/50">404.tsx</span>
                <span className="flex items-center gap-1 text-[10px] text-red-400/50">
                  <Wifi className="w-3 h-3" /> 1 error
                </span>
              </div>
            </div>
          </div>

          {/* Corner brackets */}
          <div className="absolute top-3 left-3 w-4 h-4 pointer-events-none opacity-40">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-green-400" />
            <div className="absolute top-0 left-0 w-[1px] h-full bg-green-400" />
          </div>
          <div className="absolute bottom-3 right-3 w-4 h-4 pointer-events-none opacity-40">
            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-green-400" />
            <div className="absolute bottom-0 right-0 w-[1px] h-full bg-green-400" />
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scanline-404 {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </main>
  );
}
