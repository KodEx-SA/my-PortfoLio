import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  X,
  Send,
  MessageSquare,
  Loader2,
  Download,
  Mail,
  Minimize2,
  Maximize2,
  Trash2,
  Bot,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Portfolio context ────────────────────────────────────────────────────────
const PORTFOLIO_CONTEXT = `You are Smith, Ashley Motsie's professional portfolio assistant.
You help visitors learn about Ashley's work and capabilities.

ABOUT ASHLEY:
- Full Name: Ashley K Motsie
- Gender: Male
- Location: Rustenburg, South Africa
- Role: Full-Stack Developer & AI Engineer
- Years of Experience: 4+
- Email: motsieashley31@gmail.com
- GitHub: https://github.com/KodEx-SA
- LinkedIn: https://www.linkedin.com/in/ashley-k-motsie-718686263/

SKILLS:
- Frontend: React, TypeScript, Next.js, Bootstrap, Tailwind CSS, HTML5, CSS3
- Backend: Node.js, Python, Django, PostgreSQL, MongoDB, REST APIs
- AI: Groq API, LLaMA, NLP, ML with Python
- Tools: VS Code, Git, Docker, Firebase, Vercel, Vite, Figma

EXPERIENCE:
1. Jr Software Developer & IT Technician at Eullafied Tech Solutions (June 2024 - Current)
   - Cross-functional team collaboration, code optimization, agile development
2. AI Software Developer at AI Global Networks (July 2024 - Current)
   - Building scalable applications with AI features, performance optimization
3. Web Developer & Graphic Designer at MapsMediaProductions (August 2025 - Current)
   - Developing and maintaining client websites, graphic design projects

EDUCATION:
1. Secondary School Certificate (NSC) - Malefo Secondary School (2016-2020)
2. College Certificate (NCV) in IT & Computer Science - Orbit TVET College (2022-2024)
3. Cisco Networking & IT Essentials Certification (2024)

KEY PROJECTS:
1. Generative AI Chatbot - Real-time chatbot powered by Groq AI (Live demo available)
2. Ubizo iMarket - E-commerce platform connecting buyers/sellers in South Africa
3. Gauteng Rentals Directory - AI-powered rental search platform
4. RealHomes - Luxury real estate platform with advanced search
5. Temperature Converter - Clean, efficient web app
6. Isong Cafe Website - Local business site with menu and location
7. TMA Modelling Agency - Professional agency portfolio (tmaofficial.co.za)
8. Sasbo AI Symposium - Finance union event platform (Next.js + TypeScript)

PERSONALITY:
- Professional but friendly
- Helpful and informative
- Enthusiastic about technology
- Direct and clear in communication

INSTRUCTIONS:
- Keep responses concise (2-3 sentences max unless more detail is requested)
- Guide visitors to the right section of the portfolio
- If asked about contact, provide the email and direct them to the Contact page
- If asked about resume, mention the download button in this chat
- Stay professional and on-topic about Ashley's portfolio
- Do NOT make up information — only use what is provided above
- If unsure, say so and suggest contacting Ashley directly`;

// ─── Helpers ──────────────────────────────────────────────────────────────────
const INITIAL_MESSAGE = {
  role: "assistant",
  content:
    "Hi! I'm Smith, Ashley's AI assistant. Ask me about his skills, projects, or experience — or tap a quick action below.",
  timestamp: new Date(),
};

function formatTime(date) {
  if (!date) return "";
  return new Date(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

// ─── Component ────────────────────────────────────────────────────────────────
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

  // Scroll to latest message
  useEffect(() => {
    if (!isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isMinimized]);

  // Auto-focus input when chat opens or is restored
  useEffect(() => {
    if (isOpen && !isMinimized) {
      const t = setTimeout(() => inputRef.current?.focus(), 80);
      return () => clearTimeout(t);
    }
  }, [isOpen, isMinimized]);

  // ── Send message ────────────────────────────────────────────────────────────
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
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content:
                "Configuration error — the AI key is missing. Please contact Ashley directly at motsieashley31@gmail.com.",
              timestamp: new Date(),
            },
          ]);
          return;
        }

        const response = await fetch(
          "https://api.groq.com/openai/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model: "llama-3.3-70b-versatile",
              messages: [
                { role: "system", content: PORTFOLIO_CONTEXT },
                ...messages
                  .filter((m) => m.role !== "error")
                  .map(({ role, content }) => ({ role, content })),
                { role: "user", content: text },
              ],
              temperature: 0.7,
              max_tokens: 300,
            }),
          },
        );

        if (!response.ok) throw new Error(`API ${response.status}`);

        const data = await response.json();
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              data.choices[0]?.message?.content ??
              "I couldn't generate a response — please try again.",
            timestamp: new Date(),
          },
        ]);
      } catch (err) {
        console.error("Chat error:", err);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Sorry, something went wrong. Please try again or reach Ashley at motsieashley31@gmail.com.",
            timestamp: new Date(),
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [input, isLoading, messages],
  );

  // ── Keyboard: Enter to send ─────────────────────────────────────────────────
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // ── Clear chat ──────────────────────────────────────────────────────────────
  const clearChat = () => {
    setMessages([{ ...INITIAL_MESSAGE, timestamp: new Date() }]);
    setShowClearConfirm(false);
  };

  // ── Go to contact — React Router, no full-page reload ───────────────────────
  const goToContact = () => {
    setIsOpen(false);
    setIsMinimized(false);
    navigate("/contact");
  };

  // ── Open / close helpers ────────────────────────────────────────────────────
  const openChat = () => {
    setIsOpen(true);
    setIsMinimized(false);
  };
  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  // ── Quick actions ───────────────────────────────────────────────────────────
  const quickActions = [
    { label: "🚀 Projects", msg: "Tell me about Ashley's projects" },
    { label: "⚡ Skills", msg: "What are Ashley's technical skills?" },
    { label: "💼 Experience", msg: "Tell me about Ashley's work experience" },
    { label: "📬 Contact", msg: "How can I contact Ashley?" },
  ];

  // ────────────────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Floating Launcher Button ─────────────────────────────────────── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openChat}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-3 sm:p-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/40 hover:shadow-xl hover:shadow-green-500/60 transition-shadow"
            aria-label="Open AI Assistant"
          >
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-300 rounded-full border-2 border-green-600 animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat Widget ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile backdrop — only when fully open */}
            {!isMinimized && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeChat}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              />
            )}

            {/* ── Main chat container ─────────────────────────────────────── */}
            <motion.div
              layout
              initial={{ opacity: 0, y: 80, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 80, scale: 0.85 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className={[
                "fixed z-50 flex flex-col overflow-hidden rounded-2xl",
                "bg-[#1a1a1a] border-2 border-green-500/30 shadow-2xl shadow-green-500/10",
                "transition-[width,height] duration-300 ease-in-out",
                isMinimized
                  ? "bottom-4 right-4 sm:bottom-6 sm:right-6 w-auto h-auto"
                  : "bottom-4 left-4 right-4 top-4 sm:inset-auto sm:bottom-4 sm:right-4 sm:w-[460px] sm:h-[660px] sm:max-h-[calc(100vh-2rem)] md:bottom-6 md:right-6 md:w-[490px] md:h-[700px]",
              ].join(" ")}
            >
              {/* ── Header ─────────────────────────────────────────────────── */}
              <div className="bg-gradient-to-r from-green-600 to-green-500 p-3 sm:p-4 flex items-center justify-between flex-shrink-0">
                {/* Left: avatar + name */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="relative flex-shrink-0">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center">
                      <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-300 rounded-full border-2 border-green-600" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm sm:text-base leading-tight">
                      Smith
                    </h3>
                    <p className="text-green-100 text-[10px] sm:text-xs">
                      {isLoading ? "Typing…" : "Online · AI Assistant"}
                    </p>
                  </div>
                </div>

                {/* Right: actions */}
                <div className="flex items-center gap-0.5 sm:gap-1">
                  {/* Clear — only when there are messages beyond the greeting */}
                  {!isMinimized && messages.length > 1 && (
                    <button
                      onClick={() => setShowClearConfirm(true)}
                      className="p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors"
                      aria-label="Clear chat"
                      title="Clear conversation"
                    >
                      <Trash2 className="w-3.5 h-3.5 text-white/70 hover:text-white transition-colors" />
                    </button>
                  )}

                  {/* Minimize / Maximize — visible on ALL screen sizes */}
                  <button
                    onClick={() => setIsMinimized((v) => !v)}
                    className="p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors"
                    aria-label={isMinimized ? "Restore chat" : "Minimize chat"}
                  >
                    {isMinimized ? (
                      <Maximize2 className="w-4 h-4 text-white" />
                    ) : (
                      <Minimize2 className="w-4 h-4 text-white" />
                    )}
                  </button>

                  {/* Close */}
                  <button
                    onClick={closeChat}
                    className="p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Close chat"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* ── Minimized bar ───────────────────────────────────────────── */}
              {isMinimized && (
                <button
                  onClick={() => setIsMinimized(false)}
                  className="px-4 py-3 flex items-center gap-3 w-full hover:bg-white/5 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <p className="text-gray-400 text-xs font-mono flex-1 text-left">
                    Chat minimized — click to restore
                  </p>
                  <Maximize2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                </button>
              )}

              {/* ── Full chat body ──────────────────────────────────────────── */}
              {!isMinimized && (
                <>
                  {/* Clear confirmation overlay */}
                  <AnimatePresence>
                    {showClearConfirm && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="absolute top-[60px] left-4 right-4 z-20 bg-[#1a1a1a] border border-green-500/30 rounded-xl p-4 shadow-xl"
                      >
                        <p className="text-sm text-gray-300 font-mono mb-3">
                          Clear the entire conversation?
                        </p>
                        <div className="flex gap-2">
                          <button
                            onClick={clearChat}
                            className="flex-1 py-1.5 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-mono hover:bg-red-500/30 transition-all"
                          >
                            Yes, clear
                          </button>
                          <button
                            onClick={() => setShowClearConfirm(false)}
                            className="flex-1 py-1.5 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono hover:bg-green-500/20 transition-all"
                          >
                            Cancel
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Messages scroll area */}
                  <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-[#0a0a0a] min-h-0">
                    {messages.map((msg, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.18 }}
                        className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        {/* Smith avatar */}
                        {msg.role === "assistant" && (
                          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 mt-1 border border-green-400/30">
                            <Bot className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                          </div>
                        )}

                        <div
                          className={`flex flex-col gap-1 max-w-[78%] ${msg.role === "user" ? "items-end" : "items-start"}`}
                        >
                          <div
                            className={`rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 ${
                              msg.role === "user"
                                ? "bg-gradient-to-r from-green-500 to-green-600 text-white rounded-br-none"
                                : "bg-[#1a1a1a] text-gray-200 border border-green-500/20 rounded-bl-none"
                            }`}
                          >
                            <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
                              {msg.content}
                            </p>
                          </div>
                          {msg.timestamp && (
                            <span className="text-[10px] text-gray-600 px-1 font-mono">
                              {formatTime(msg.timestamp)}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    ))}

                    {/* Typing indicator — three bouncing dots */}
                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex gap-2 justify-start"
                      >
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 mt-1 border border-green-400/30">
                          <Bot className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                        </div>
                        <div className="bg-[#1a1a1a] border border-green-500/20 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-1.5">
                          {[0, 150, 300].map((delay) => (
                            <span
                              key={delay}
                              className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce"
                              style={{ animationDelay: `${delay}ms` }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  {/* Quick actions — only on first/reset state */}
                  {messages.length === 1 && (
                    <div className="px-3 pb-2 pt-2 sm:px-4 bg-[#0a0a0a] border-t border-green-500/10 flex-shrink-0">
                      <p className="text-[10px] text-gray-600 mb-1.5 font-mono">
                        Quick actions
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {quickActions.map(({ label, msg }) => (
                          <button
                            key={label}
                            onClick={() => sendMessage(msg)}
                            disabled={isLoading}
                            className="px-2.5 py-1.5 text-[10px] sm:text-xs rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/20 hover:border-green-400/40 transition-all disabled:opacity-50 font-mono whitespace-nowrap"
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Resume & Contact shortcuts */}
                  <div className="px-3 py-2 sm:px-4 bg-[#111] border-t border-green-500/20 flex gap-2 flex-shrink-0">
                    <a
                      href="/Ashley's_resume.pdf"
                      download="Ashley_Motsie_Resume.pdf"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/20 hover:border-green-400/40 text-[11px] sm:text-xs font-mono font-medium transition-all"
                    >
                      <Download className="w-3 h-3 flex-shrink-0" />
                      Resume
                    </a>
                    {/* ✅ Fixed: uses React Router navigate — no page-not-found */}
                    <button
                      onClick={goToContact}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/20 hover:border-green-400/40 text-[11px] sm:text-xs font-mono font-medium transition-all"
                    >
                      <Mail className="w-3 h-3 flex-shrink-0" />
                      Contact
                    </button>
                  </div>

                  {/* Input row */}
                  <div className="p-3 sm:p-4 bg-[#1a1a1a] border-t border-green-500/20 flex-shrink-0">
                    <div className="flex gap-2 items-end">
                      <div className="flex-1 relative">
                        <input
                          ref={inputRef}
                          type="text"
                          value={input}
                          onChange={(e) =>
                            setInput(e.target.value.slice(0, 300))
                          }
                          onKeyDown={handleKeyDown} // ✅ replaces deprecated onKeyPress
                          placeholder="Ask me anything…"
                          disabled={isLoading}
                          maxLength={300}
                          className="w-full px-3 py-2.5 sm:px-4 rounded-xl bg-[#0a0a0a] border border-green-500/30 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 text-white placeholder-gray-600 text-xs sm:text-sm disabled:opacity-50 transition-all font-mono pr-12"
                        />
                        {/* Character counter */}
                        {input.length > 0 && (
                          <span
                            className={`absolute right-3 bottom-2.5 text-[9px] font-mono pointer-events-none ${
                              input.length > 260
                                ? "text-red-400"
                                : "text-gray-600"
                            }`}
                          >
                            {input.length}/300
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => sendMessage()}
                        disabled={!input.trim() || isLoading}
                        className="p-2.5 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex-shrink-0 shadow-md shadow-green-500/20"
                        aria-label="Send message"
                      >
                        {isLoading ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Send className="w-4 h-4" />
                        )}
                      </button>
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
