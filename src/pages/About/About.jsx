import { motion } from "framer-motion";
import HeroImg from "@/assets/img/my_pic.png";
import LogoImage from "@/assets/images/logo_images/Logo.png";
import { Code2, Heart, Sparkles, GraduationCap, Terminal, Zap } from "lucide-react";

// Data Stream Component
const DataStream = () => {
  const chars = '01アイウエオ';
  const streams = Array.from({ length: 4 }, (_, i) => ({
    left: `${25 + i * 20}%`,
    delay: `${Math.random() * 3}s`,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5 z-5">
      {streams.map((stream, i) => (
        <div
          key={i}
          className="absolute top-0 text-green-400 text-xs font-mono animate-data-stream"
          style={{
            left: stream.left,
            animationDelay: stream.delay,
          }}
        >
          {Array.from({ length: 30 }, () =>
            chars[Math.floor(Math.random() * chars.length)]
          ).join('')}
        </div>
      ))}
    </div>
  );
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-32 text-white bg-[#0a0a0a] min-h-screen overflow-hidden"
    >
      {/* Data Stream Effect */}
      <DataStream />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-600/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Main scan line */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="scanline-main" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-12 px-6 md:space-y-16 z-20">
        {/* Section Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm relative overflow-hidden group">
            <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            <Sparkles className="w-4 h-4 text-green-400 relative z-10 animate-pulse" />
            <span className="text-green-400 text-sm font-medium font-mono relative z-10">About Me</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-3xl mx-auto text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent font-mono"
          >
            <span className="relative inline-block">
              Forever a Student, sometimes a Teacher, always a Coder.
              {/* Subtle glitch effect */}
              <span className="absolute inset-0 text-green-400 opacity-0 hover:opacity-30 animate-glitch-subtle">
                Forever a Student, sometimes a Teacher, always a Coder.
              </span>
            </span>
          </motion.h2>

          <div className="relative w-24 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-green-400 animate-scan-line" />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-2 md:gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Holographic glow */}
            <div className="absolute -inset-[4px] bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-2xl opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300" />

            <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-green-400 via-green-500 to-green-600 animate-gradient-rotate">
              {/* Scan line over image */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-10">
                <div className="scanline-card" />
              </div>

              <div className="bg-[#0a0a0a] rounded-[15px] p-2 relative">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow-2xl w-full h-auto object-cover"
                  alt="Ashley Motsie profile"
                  width={1207}
                  height={929}
                />

                {/* Tech corner brackets */}
                <div className="absolute top-4 left-4 w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-green-400" />
                  <div className="absolute top-0 left-0 w-[2px] h-full bg-green-400" />
                </div>
                <div className="absolute bottom-4 right-4 w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 right-0 w-full h-[2px] bg-green-400" />
                  <div className="absolute bottom-0 right-0 w-[2px] h-full bg-green-400" />
                </div>
              </div>
            </div>

            {/* Floating badges with enhanced effects */}
            <div className="absolute -top-4 -right-4 bg-green-500/20 backdrop-blur-md border border-green-400/30 text-green-400 px-4 py-2 rounded-full text-sm font-medium font-mono animate-float hidden md:block group-hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] transition-shadow">
              <Terminal className="inline w-4 h-4 mr-2 animate-pulse" />
              Developer
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500/20 backdrop-blur-md border border-green-400/30 text-green-400 px-4 py-2 rounded-full text-sm font-medium font-mono animate-float-delayed hidden md:block group-hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] transition-shadow">
              <GraduationCap className="inline w-4 h-4 mr-2 animate-pulse" />
              Learner
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative space-y-6"
          >
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-lg font-mono">
                <span className="text-green-400">&gt;</span> I&apos;m <strong className="text-white">Ashley K Motsie</strong>,
                a passionate{" "}
                <strong className="text-green-400">Software Developer</strong>{" "}
                based in{" "}
                <span className="text-green-400 font-medium">South Africa</span>{" "}
                with expertise in building efficient, user-friendly modern web
                applications. My journey in tech has been driven by curiosity
                and a desire to solve complex problems through innovative
                solutions.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg font-mono">
                <span className="text-green-400">&gt;</span>{" "}
                <span className="font-semibold text-green-400">
                  As a growing Developer in the Tech Industry
                </span>
                , I&apos;m dedicated to learning development workflows and
                expanding my skills to become a full-stack developer who creates
                efficient, robust web applications.
              </p>
            </div>

            {/* Quote Section */}
            <div className="pt-4">
              <div className="relative border-l-4 border-green-500 pl-6 bg-green-500/5 p-6 rounded-r-xl backdrop-blur-sm overflow-hidden group">
                {/* Scan effect on quote */}
                <span className="absolute inset-0 bg-green-500/5 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-out" />

                <div className="absolute top-4 left-4 text-green-500/20 text-6xl font-serif leading-none">
                  "
                </div>

                <p className="text-gray-300 italic text-lg leading-relaxed relative z-10 font-mono">
                  I&apos;m a lifelong learner, sometimes a teacher and
                  innovator, driven by a desire to contribute to the developer
                  community.
                </p>

                <div className="mt-6 pt-4 border-t border-green-500/20 relative z-10">
                  <div className="flex items-center gap-3">
                    <img
                      className="h-6 w-auto"
                      src={LogoImage}
                      alt="Logo"
                      height="24"
                    />
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-semibold font-mono">
                        Ashley Motsie
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 text-sm font-mono">
                        Software Developer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats with enhanced effects */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="group relative text-center p-4 bg-green-500/5 border border-green-500/20 rounded-xl hover:border-green-400/40 transition-all overflow-hidden">
                <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                <div className="text-2xl font-bold text-green-400 mb-1 font-mono relative z-10">4+</div>
                <div className="text-xs text-gray-400 font-medium font-mono relative z-10">
                  Years Experience
                </div>
              </div>
              <div className="group relative text-center p-4 bg-green-500/5 border border-green-500/20 rounded-xl hover:border-green-400/40 transition-all overflow-hidden">
                <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                <div className="text-2xl font-bold text-green-400 mb-1 font-mono relative z-10">7+</div>
                <div className="text-xs text-gray-400 font-medium font-mono relative z-10">
                  Projects Built
                </div>
              </div>
              <div className="group relative text-center p-4 bg-green-500/5 border border-green-500/20 rounded-xl hover:border-green-400/40 transition-all overflow-hidden">
                <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                <div className="flex items-center justify-center gap-1 mb-1 relative z-10">
                  <Heart className="w-5 h-5 text-green-400 fill-green-400 animate-pulse" />
                </div>
                <div className="text-xs text-gray-400 font-medium font-mono relative z-10">
                  Passion Driven
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-rotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes data-stream {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes scan-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes glitch-subtle {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(-1px, 1px); }
          66% { transform: translate(1px, -1px); }
        }
        .animate-gradient-rotate {
          animation: gradient-rotate 3s ease infinite;
          background-size: 200% 200%;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-data-stream {
          animation: data-stream 10s linear infinite;
        }
        .animate-scan-line {
          animation: scan-line 2s linear infinite;
        }
        .animate-glitch-subtle {
          animation: glitch-subtle 0.4s infinite;
        }
        .scanline-main {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(74, 222, 128, 0.3) 50%, 
            transparent 100%
          );
          animation: scan-main 5s linear infinite;
        }
        .scanline-card {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(74, 222, 128, 0.4) 50%, 
            transparent 100%
          );
          animation: scan-card 3s linear infinite;
        }
        @keyframes scan-main {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
        @keyframes scan-card {
          0% { transform: translateY(0); }
          100% { transform: translateY(500px); }
        }
      `}</style>
    </section>
  );
}
