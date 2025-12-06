import { useState, useRef, useEffect } from "react";
import { X, Send, MessageSquare, Loader2, Download, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Portfolio context for AI
const PORTFOLIO_CONTEXT = `You are Ashley Motsie's professional portfolio assistant. 
You help visitors learn about Ashley's work and capabilities.

ABOUT ASHLEY:
- Full Name: Ashley K Motsie
- Location: Rustenburg, South Africa
- Role: Software Developer & Fullstack Developer
- Years of Experience: 4+
- Email: motsieashley31@gmail.com

SKILLS:
- Frontend: React, Typescript, Next.js, Bootstrap, Tailwind CSS, HTML5, CSS3
- Backend: Node.js, Python, Django, PostgreSQL, MongoDB, REST APIs
- Tools: VS Code, Git, Docker, Firebase, Vercel, Vite
- Design: Figma, Wireframing, Prototyping, SVG Animation

EXPERIENCE:
1. Jr Software Dev & IT Technician at ETS (June 2024 - Current)
    - Cross-functional team collaboration
    - Code optimization
    - Agile development
2. AI Software Developer at AI Global Networks (July 2024 - Current)
    - Scalable applications with AI features
    - Performance optimization
    - Testing protocols
3. Web Developer & Graphic Designer at MapsMediaProductions (Nov 205 - Current)
    - Cross-functional team collaboration
    - Designing and Development 

EDUCATION:
1. Secondary School Certificate (NSC) - Malefo Secondary School (2016-2020)
   - Focus: Mathematics, Science
2. College Certificate (NCV) - Orbit Tvet College (2022-2024)
   - Focus: IT & Computer Science

KEY PROJECTS:
1. Generative AI Chatbot - Real-time conversational chatbot with Groq AI
2. Ubizo iMarket - E-commerce platform connecting buyers/sellers
3. Gauteng Rentals Directory - AI-powered rental search
4. RealHomes - Luxury real estate platform
5. Temperature Converter - Efficient web app
6. Isong Cafe Website - Local business site
7. TMA Modelling Agency - Agency portfolio site
8. Sasbo AI Symposium - Finance event platform

PERSONALITY:
- Professional but friendly
- Helpful and informative
- Enthusiastic about technology
- Direct and clear in communication

INSTRUCTIONS:
- Keep responses concise (2-3 sentences max)
- Be helpful and guide visitors
- If asked about contact, provide email and suggest the contact form
- If asked about resume, mention the download option
- Always stay professional and on-topic about Ashley's portfolio
- Don't make up information - only use the context provided`;

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Ashley's AI assistant. I can help you learn about his work, skills, and projects. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async (messageText = input) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage = { role: "user", content: messageText };
    setMessages((prev) => [...prev, userMessage]);
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
              "Error!, Please try again.",
          },
        ]);
        setIsLoading(false);
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
              ...messages.filter((m) => m.role !== "error"),
              userMessage,
            ],
            temperature: 0.7,
            max_tokens: 300,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage = {
        role: "assistant",
        content:
          data.choices[0]?.message?.content ||
          "I apologize, I couldn't generate a response.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I encountered an error. Please try again or contact Ashley directly at motsieashley31@gmail.com",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickActions = [
    {
      label: "View Projects",
      action: () => sendMessage("Tell me about Ashley's projects"),
    },
    {
      label: "View Skills",
      action: () => sendMessage("What are Ashley's technical skills?"),
    },
    {
      label: "Get Contact Info",
      action: () => sendMessage("How can I contact Ashley?"),
    },
  ];

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/50 hover:shadow-xl hover:shadow-green-500/60 transition-all"
            aria-label="Open AI Assistant"
          >
            <MessageSquare className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50 w-[95vw] sm:w-[450px] h-[600px] bg-[#1a1a1a] border-2 border-green-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <MessageSquare className="w-6 h-6 text-white" />
                  <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-300 rounded-full border-2 border-green-600" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">
                    AI Portfolio Assistant
                  </h3>
                  <p className="text-green-100 text-xs">Powered by Groq AI</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0a0a0a]">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      msg.role === "user"
                        ? "bg-green-500 text-white rounded-br-none"
                        : "bg-[#1a1a1a] text-gray-200 border border-green-500/20 rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {msg.content}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-[#1a1a1a] border border-green-500/20 rounded-2xl rounded-bl-none px-4 py-3">
                    <Loader2 className="w-5 h-5 text-green-400 animate-spin" />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="p-4 bg-[#0a0a0a] border-t border-green-500/20">
                <p className="text-xs text-gray-400 mb-2">Quick actions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action, idx) => (
                    <button
                      key={idx}
                      onClick={action.action}
                      className="px-3 py-1.5 text-xs rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 hover:border-green-400/50 transition-all"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="p-3 bg-[#1a1a1a] border-t border-green-500/20 flex gap-2">
              <a
                href="/Ashley Motsie's Resume_20250807_043908_0000.pdf"
                download
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 text-xs font-medium transition-all"
              >
                <Download className="w-3 h-3" />
                Resume
              </a>
              <a
                href="/contact"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 text-xs font-medium transition-all"
              >
                <Mail className="w-3 h-3" />
                Contact
              </a>
            </div>

            {/* Input */}
            <div className="p-4 bg-[#1a1a1a] border-t border-green-500/20">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-[#0a0a0a] border border-green-500/30 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 text-white placeholder-gray-500 text-sm disabled:opacity-50 transition-all"
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || isLoading}
                  className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
