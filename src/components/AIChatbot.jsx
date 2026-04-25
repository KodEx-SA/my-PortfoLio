import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Send,
  Terminal,
  Loader2,
  Download,
  Mail,
  Maximize2,
  Trash2,
  GitBranch,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PORTFOLIO_CONTEXT = `You are Smith, Ashley Motsie's professional portfolio assistant.
You help visitors learn about Ashley's work and capabilities.

ABOUT ASHLEY:
- Full Name: Ashley K Motsie
- Location: Rustenburg, South Africa
- Role: Software Developer & AI Engineer
- Years of Experience: 3+
- Email: motsieashley31@gmail.com
- GitHub: https://github.com/KodEx-SA

SKILLS:
- Frontend: React, TypeScript, Next.js, Tailwind CSS, HTML5, CSS3
- Backend: Node.js, Python, Django, PostgreSQL, MongoDB, REST APIs
- AI: Groq API, LLaMA, NLP, ML with Python
- Tools: VS Code, Git, Docker, Firebase, Vercel, Vite, Figma

EXPERIENCE:
1. Jr Software Developer & IT Technician at Eullafied Tech Solutions (June 2024 - Current)
2. AI Software Developer at AI Global Networks (July 2024 - Current)
3. Web Developer & Graphic Designer at MapsMediaProductions (September 2025 - Current)

EDUCATION:
1. Secondary School Certificate (NSC) - Malefo Secondary School (2016-2020)
2. College Certificate (NCV) in IT & Computer Science - Orbit TVET College (2022-2024)
3. Cisco Networking & IT Essentials Certification (2024)

KEY PROJECTS:
1. Generative AI Chatbot - Real-time chatbot powered by Groq AI
2. Ubizo iMarket - E-commerce platform connecting buyers/sellers in South Africa
3. Gauteng Rentals Directory - AI-powered rental search platform
4. RealHomes - Luxury real estate platform
5. Isong Cafe Website - Local business site
6. TMA Modelling Agency (tmaofficial.co.za)
7. Sasbo AI Symposium - Finance union event platform (Next.js + TypeScript)

INSTRUCTIONS:
- Keep responses concise (2-3 sentences max unless more detail is requested)
- Guide visitors to the right section of the portfolio
- If asked about contact, provide the email and direct them to the Contact page
- If asked about resume, mention the download button
- Stay professional and on-topic
- Do NOT make up information`;

const INITIAL_MESSAGE = {
  role: "assistant",
  content: "Hello. I'm Smith — Ashley's AI assistant. Ask me about his skills, projects, or experience.",
  timestamp: new Date(),
};

function formatTime(date) {
  if (!date) return "";
  return new Date(date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function PromptLine({ isUser, time }) {
  return (
    <p className="text-[11px] font-mono leading-4 mb-0.5 select-none">
      {isUser ? (
        <>
          <span className="text-green-400">visitor</span>
          <span className="text-gray-600">@</span>
          <span className="text-blue-400">portfolio</span>
          <span className="text-gray-500"> $ </span>
        </>
      ) : (
        <>
          <span className="text-green-400">smith</span>
          <span className="text-gray-600">:</span>
          <span className="text-blue-400">~/chat</span>
          <span className="text-gray-500"> &gt; </span>
        </>
      )}
      <span className="text-gray-700 text-[10px]">{time}</span>
    </p>
  );
}

export default function AIChatbot() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isMinimized) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isMinimized]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      const t = setTimeout(() => inputRef.current?.focus(), 80);
      return () => clearTimeout(t);
    }
  }, [isOpen, isMinimized]);

  const sendMessage = useCallback(
    async (messageText = input) => {
      const text = (messageText ?? "").trim();
      if (!text || isLoading) return;
      const userMsg = { role: "user", content: text, timestamp: new Date() };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsLoading(true);
      try {
        const apiKey = import.meta.env.VITE_GROQ_API_KEY;
        if (!apiKey) {
          setMessages((prev) => [...prev, { role: "assistant", content: "Configuration error — the AI key is missing. Contact Ashley at motsieashley31@gmail.com.", timestamp: new Date() }]);
          return;
        }
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              { role: "system", content: PORTFOLIO_CONTEXT },
              ...messages.filter((m) => m.role !== "error").map(({ role, content }) => ({ role, content })),
              { role: "user", content: text },
            ],
            temperature: 0.7,
            max_tokens: 300,
          }),
        });
        if (!response.ok) throw new Error(`API ${response.status}`);
        const data = await response.json();
        setMessages((prev) => [...prev, { role: "assistant", content: data.choices[0]?.message?.content ?? "I couldn't generate a response — please try again.", timestamp: new Date() }]);
      } catch (err) {
        console.error("Chat error:", err);
        setMessages((prev) => [...prev, { role: "assistant", content: "Something went wrong. Please try again or reach Ashley at motsieashley31@gmail.com.", timestamp: new Date() }]);
      } finally {
        setIsLoading(false);
      }
    },
    [input, isLoading, messages],
  );

  const handleKeyDown = (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } };
  const clearChat = () => { setMessages([{ ...INITIAL_MESSAGE, timestamp: new Date() }]); setShowClearConfirm(false); };
  const goToContact = () => { setIsOpen(false); setIsMinimized(false); navigate("/contact"); };
  const openChat = () => { setIsOpen(true); setIsMinimized(false); };
  const closeChat = () => { setIsOpen(false); setIsMinimized(false); };

  const quickActions = [
    { label: "Projects", msg: "Tell me about Ashley's projects" },
    { label: "Skills", msg: "What are Ashley's technical skills?" },
    { label: "Experience", msg: "Tell me about Ashley's work experience" },
    { label: "Contact", msg: "How can I contact Ashley?" },
  ];

  return (
    <>
      {/* Floating launcher */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={openChat}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#141617] border border-green-500/30 shadow-xl shadow-black/50 hover:border-green-400/50 transition-all flex items-center justify-center group"
            aria-label="Open AI Assistant"
          >
            <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 group-hover:text-green-300 transition-colors" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-[#0a0a0a] animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat widget */}
      <AnimatePresence>
        {isOpen && (
          <>
            {!isMinimized && (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={closeChat}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              />
            )}

            <motion.div
              layout
              initial={{ opacity: 0, y: 80, scale: 0.88 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 80, scale: 0.88 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className={[
                "fixed z-50 flex flex-col overflow-hidden rounded-2xl font-mono",
                "bg-[#0c0e0f] border border-green-500/20 shadow-2xl shadow-black/60",
                "transition-[width,height] duration-300 ease-in-out",
                isMinimized
                  ? "bottom-4 right-4 sm:bottom-6 sm:right-6 w-auto h-auto"
                  : "bottom-4 left-4 right-4 top-4 sm:inset-auto sm:bottom-4 sm:right-4 sm:w-[460px] sm:h-[660px] sm:max-h-[calc(100vh-2rem)] md:bottom-6 md:right-6 md:w-[490px] md:h-[700px]",
              ].join(" ")}
            >
              {/* Outer glow */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-green-400/10 via-emerald-500/5 to-green-400/10 blur-sm pointer-events-none" />

              {/* Title bar — macOS chrome */}
              <div className="flex items-center gap-3 px-4 py-3 bg-[#141617] border-b border-green-500/10 select-none flex-shrink-0 relative z-10">
                <div className="flex items-center gap-1.5">
                  <button onClick={closeChat} className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-125 transition-all" aria-label="Close" title="Close" />
                  <button onClick={() => setIsMinimized((v) => !v)} className="w-3 h-3 rounded-full bg-[#febc2e] hover:brightness-125 transition-all" aria-label="Minimize" title="Minimize" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840] animate-pulse" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-[12px] text-gray-500">smith@portfolio: ~/chat</span>
                </div>
                <div className="flex items-center gap-2">
                  {!isMinimized && messages.length > 1 && (
                    <button onClick={() => setShowClearConfirm(true)} className="p-1 hover:bg-white/5 rounded transition-colors" aria-label="Clear chat">
                      <Trash2 className="w-3.5 h-3.5 text-gray-600 hover:text-gray-400 transition-colors" />
                    </button>
                  )}
                  <span className="flex items-center gap-1 text-[10px] text-green-500/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                    {isLoading ? "BUSY" : "LIVE"}
                  </span>
                </div>
              </div>

              {/* Minimized bar */}
              {isMinimized && (
                <button onClick={() => setIsMinimized(false)} className="px-4 py-3 flex items-center gap-3 w-full hover:bg-white/3 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <p className="text-gray-500 text-[11px] font-mono flex-1 text-left">chat minimized — click to restore</p>
                  <Maximize2 className="w-3.5 h-3.5 text-green-400/60 flex-shrink-0" />
                </button>
              )}

              {!isMinimized && (
                <>
                  {/* Clear confirm */}
                  <AnimatePresence>
                    {showClearConfirm && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                        className="absolute top-[52px] left-4 right-4 z-20 bg-[#141617] border border-green-500/20 rounded-xl p-4 shadow-xl"
                      >
                        <p className="text-[11px] text-gray-400 font-mono mb-3">
                          <span className="text-green-400">$</span> rm -rf ./conversation — are you sure?
                        </p>
                        <div className="flex gap-2">
                          <button onClick={clearChat} className="flex-1 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] font-mono hover:bg-red-500/20 transition-all">--force</button>
                          <button onClick={() => setShowClearConfirm(false)} className="flex-1 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-[11px] font-mono hover:bg-green-500/20 transition-all">--cancel</button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0a0a0a] min-h-0">
                    {messages.map((msg, idx) => (
                      <motion.div key={idx} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.18 }} className="space-y-1">
                        <PromptLine isUser={msg.role === "user"} time={formatTime(msg.timestamp)} />
                        <div className={`ml-2 px-3 py-2 rounded-lg text-[12px] leading-relaxed whitespace-pre-wrap border ${
                          msg.role === "user"
                            ? "bg-green-500/5 border-green-500/15 text-gray-300 rounded-tl-none"
                            : "bg-[#141617] border-green-500/10 text-gray-200 rounded-tl-none"
                        }`}>
                          {msg.content}
                        </div>
                      </motion.div>
                    ))}

                    {isLoading && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                        <PromptLine isUser={false} time="processing…" />
                        <div className="ml-2 px-3 py-2.5 rounded-lg bg-[#141617] border border-green-500/10 rounded-tl-none flex items-center gap-1.5">
                          {[0, 150, 300].map((delay) => (
                            <span key={delay} className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: `${delay}ms` }} />
                          ))}
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Quick actions */}
                  {messages.length === 1 && (
                    <div className="px-4 py-2.5 bg-[#0a0a0a] border-t border-green-500/10 flex-shrink-0">
                      <p className="text-[10px] text-gray-700 mb-1.5 font-mono"># quick commands</p>
                      <div className="flex flex-wrap gap-1.5">
                        {quickActions.map(({ label, msg }) => (
                          <button key={label} onClick={() => sendMessage(msg)} disabled={isLoading}
                            className="px-2.5 py-1.5 text-[10px] rounded-lg bg-green-500/8 border border-green-500/15 text-green-400/80 hover:bg-green-500/15 hover:border-green-400/30 hover:text-green-400 transition-all disabled:opacity-50 font-mono whitespace-nowrap">
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Shortcuts */}
                  <div className="px-4 py-2 bg-[#0d0f10] border-t border-green-500/10 flex gap-2 flex-shrink-0">
                    <a href="/Ashley_Motsie_Resume.pdf" download="Ashley_Motsie_Resume.pdf"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-green-500/8 border border-green-500/15 text-green-400/70 hover:bg-green-500/15 hover:text-green-400 hover:border-green-400/30 text-[11px] font-mono transition-all">
                      <Download className="w-3 h-3 flex-shrink-0" />
                      ./resume.pdf
                    </a>
                    <button onClick={goToContact}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-green-500/8 border border-green-500/15 text-green-400/70 hover:bg-green-500/15 hover:text-green-400 hover:border-green-400/30 text-[11px] font-mono transition-all">
                      <Mail className="w-3 h-3 flex-shrink-0" />
                      ./contact
                    </button>
                  </div>

                  {/* Input row */}
                  <div className="px-4 py-3 bg-[#141617] border-t border-green-500/10 flex-shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 text-[13px] font-mono flex-shrink-0 select-none">›</span>
                      <div className="flex-1 relative">
                        <input
                          ref={inputRef}
                          type="text"
                          value={input}
                          onChange={(e) => setInput(e.target.value.slice(0, 300))}
                          onKeyDown={handleKeyDown}
                          placeholder="type your query…"
                          disabled={isLoading}
                          maxLength={300}
                          className="w-full bg-transparent border-none outline-none text-gray-200 placeholder-gray-700 text-[12px] font-mono disabled:opacity-50 pr-10 caret-green-400"
                        />
                        {input.length > 0 && (
                          <span className={`absolute right-0 top-1/2 -translate-y-1/2 text-[9px] font-mono pointer-events-none ${input.length > 260 ? "text-red-400" : "text-gray-700"}`}>
                            {input.length}/300
                          </span>
                        )}
                      </div>
                      <button onClick={() => sendMessage()} disabled={!input.trim() || isLoading}
                        className="p-1.5 rounded-lg bg-green-500/15 border border-green-500/20 text-green-400 hover:bg-green-500/25 hover:border-green-400/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex-shrink-0"
                        aria-label="Send message">
                        {isLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Status bar */}
                  <div className="flex items-center justify-between px-4 py-1 bg-green-600/5 border-t border-green-500/10 flex-shrink-0 select-none">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-[10px] text-green-400/40">
                        <GitBranch className="w-3 h-3" /> main
                      </span>
                      <span className="text-[10px] text-gray-800">llama-3.3-70b</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-gray-800">smith.ai</span>
                      <span className="flex items-center gap-1 text-[10px] text-green-400/40">
                        <CheckCircle2 className="w-3 h-3" /> online
                      </span>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
