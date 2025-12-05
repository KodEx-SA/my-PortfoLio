import { motion } from "framer-motion";
import HeroImg from "@/assets/img/my_pic.png";
import LogoImage from "@/assets/images/logo_images/Logo.png";
import { Code2, Heart, Sparkles, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-32 text-white bg-[#0a0a0a] min-h-screen overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-600/5 rounded-full blur-3xl" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative mx-auto max-w-6xl space-y-12 px-6 md:space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">About Me</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-3xl mx-auto text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent"
          >
            Forever a Student, sometimes a Teacher, always a Coder.
          </motion.h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full mx-auto" />
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
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-green-400 via-green-500 to-green-600 animate-gradient-rotate">
              <div className="bg-[#0a0a0a] rounded-[15px] p-2">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow-2xl w-full h-auto object-cover"
                  alt="Ashley Motsie profile"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-green-500/20 backdrop-blur-md border border-green-400/30 text-green-400 px-4 py-2 rounded-full text-sm font-medium animate-float hidden md:block">
              <Code2 className="inline w-4 h-4 mr-2" />
              Developer
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500/20 backdrop-blur-md border border-green-400/30 text-green-400 px-4 py-2 rounded-full text-sm font-medium animate-float-delayed hidden md:block">
              <GraduationCap className="inline w-4 h-4 mr-2" />
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
              <p className="text-gray-300 leading-relaxed text-lg">
                I&apos;m <strong className="text-white">Ashley Motsie</strong>,
                a passionate{" "}
                <strong className="text-green-400">Software Developer</strong>{" "}
                based in{" "}
                <span className="text-green-400 font-medium">South Africa</span>{" "}
                with expertise in building efficient, user-friendly modern web
                applications. My journey in tech has been driven by curiosity
                and a desire to solve complex problems through innovative
                solutions.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
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
              <div className="relative border-l-4 border-green-500 pl-6 bg-green-500/5 p-6 rounded-r-xl backdrop-blur-sm">
                <div className="absolute top-4 left-4 text-green-500/20 text-6xl font-serif leading-none">
                  "
                </div>

                <p className="text-gray-300 italic text-lg leading-relaxed relative z-10">
                  I&apos;m a lifelong learner, sometimes a teacher and
                  innovator, driven by a desire to contribute to the developer
                  community.
                </p>

                <div className="mt-6 pt-4 border-t border-green-500/20">
                  <div className="flex items-center gap-3">
                    <img
                      className="h-6 w-auto"
                      src={LogoImage}
                      alt="Logo"
                      height="24"
                    />
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-semibold">
                        Ashley Motsie
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 text-sm">
                        Software Developer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats or highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
                <div className="text-2xl font-bold text-green-400 mb-1">4+</div>
                <div className="text-xs text-gray-400 font-medium">
                  Years Experience
                </div>
              </div>
              <div className="text-center p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
                <div className="text-2xl font-bold text-green-400 mb-1">7+</div>
                <div className="text-xs text-gray-400 font-medium">
                  Projects Built
                </div>
              </div>
              <div className="text-center p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Heart className="w-5 h-5 text-green-400 fill-green-400" />
                </div>
                <div className="text-xs text-gray-400 font-medium">
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
      `}</style>
    </section>
  );
}
