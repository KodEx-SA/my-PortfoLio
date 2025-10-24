import HeroImg from "@/assets/img/my_pic.png";
import LogoImage from "@/assets/images/logo_images/Logo.png";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 text-white bg-[#000000] min-h-screen">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
          Forever a Student, sometimes a Teacher, always a Coder.
        </h2>
        
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="relative rounded-2xl p-px bg-gradient-to-b from-zinc-300 via-zinc-600 to-transparent">
              <div className="bg-[#04081A] rounded-[15px] p-2">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow-2xl w-full h-auto object-cover"
                  alt="Ashley Motsie profile"
                  width={1207}
                  height={929}
                />
              </div>
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-gray-300 leading-relaxed">
              I&apos;m Ashley Motsie, a passionate <strong className="text-white">Software Developer</strong> based in{" "}
              <em className="text-emerald-400">South Africa</em> with expertise in building efficient, 
              user-friendly modern web applications. My journey in tech has been driven by curiosity 
              and a desire to solve complex problems through innovative solutions.{" "}
              <span className="font-bold text-emerald-400">
                As a growing Developer in Tech Industry
              </span>
              , I&apos;m dedicated to learning development workflows.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              My focus is on software development and currently, I&apos;m expanding
              to be a full-stack developer and create
              efficient, robust web applications.
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 border-emerald-400 pl-4 bg-gray-800/20 p-4 rounded-r-lg">
                <p className="text-gray-300 italic">
                  I&apos;m a lifelong learner, sometimes a teacher and innovator,
                  driven by a desire to contribute to the developer community.
                  {/* with new ideas and
                  tools that deliver real value. I&apos;m learning JavaScript frameworks to build scalable applications. */}
                </p>

                <div className="mt-6 space-y-3">
                  {/* <cite className="block font-medium text-white not-italic">
                    Ashley K Motsie, Software Developer
                  </cite> */}
                  <div className="flex items-center gap-2">
                    <img
                      className="h-5 w-auto"
                      src={LogoImage}
                      alt="Logo"
                      height="20"
                    />
                    <span className="text-emerald-400 font-medium">Developer</span>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}