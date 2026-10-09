import { ArrowRight, Sparkles, WandSparkles } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import profileImage from "../assets/Profile image.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function Hero() {
  return (
    <section id="home" className="min-h-[calc(100vh-80px)] flex items-center py-4 px-6 sm:px-8 lg:px-12 mx-auto w-full max-w-7xl">
      <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] w-full">
        <Reveal className="relative space-y-3" delay={120}>
          <motion.p
            custom={0.05}
            initial={false}
            animate="visible"
            variants={fadeUp}
            className="text-xs font-medium uppercase tracking-[0.35em] text-neon-cyan/85 sm:text-sm"
          >
            AI/ML Engineer
          </motion.p>
          <motion.h1
            custom={0.12}
            initial={false}
            animate="visible"
            variants={fadeUp}
            className="text-4xl font-semibold leading-tight tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl"
          >
            Niket Talekar
          </motion.h1>
          <motion.h2
            custom={0.2}
            initial={false}
            animate="visible"
            variants={fadeUp}
            className="max-w-2xl text-2xl font-semibold leading-[1.12] tracking-[-0.04em] text-white sm:text-3xl lg:text-4xl"
          >
            <span className="max-w-4xl text-gradient font-bold">
              Building Intelligent AI Systems
            </span>
            <br />
            that turn ideas into
            <br />
            <span className="max-w-4xl text-gradient font-bold">
              real-world applications.
            </span>
          </motion.h2>
          <motion.div
            custom={0.28}
            initial={false}
            animate="visible"
            variants={fadeUp}
            className="eyebrow-line"
          />
          <motion.p
            custom={0.34}
            initial={false}
            animate="visible"
            variants={fadeUp}
            className="max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8"
          >
            I build AI-powered applications using machine learning, computer vision,
            Generative AI, and Python backend technologies. From real-time object
            detection with YOLOv8 to multi-agent AI systems with CrewAI and FastAPI, I
            focus on turning complex AI capabilities into practical, reliable software.
          </motion.p>

          <motion.div
            custom={0.42}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col gap-4 sm:w-fit sm:flex-row"
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-ocean px-6 py-3 font-medium text-space-975 transition duration-300 hover:-translate-y-1 hover:shadow-neon"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-neon-blue/40 hover:shadow-neon"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
              <Sparkles size={18} />
            </motion.a>
          </motion.div>
        </Reveal>

        <Reveal className="relative" delay={320}>
          <motion.div
            className="group relative mx-auto w-full max-w-[43rem] scale-90 transition duration-500 ease-out hover:shadow-neon lg:rotate-[2deg] lg:hover:rotate-0"
            initial={false}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
              rotate: 2,
            }}
            transition={{
              opacity: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            }}
            whileHover={{ scale: 1.05, y: -14, rotate: 0 }}
          >
            <div className="pointer-events-none absolute -inset-4 rounded-[40px] border border-white/5 opacity-60" />
            <div className="quiet-card relative overflow-hidden p-6 transition duration-500 group-hover:border-neon-cyan/30 group-hover:shadow-neon sm:p-8">              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(103,232,249,0.14),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(79,140,255,0.12),_transparent_34%)]" />
              <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 opacity-25 animate-spinSlow" />
              <div className="absolute right-10 top-12 h-20 w-20 rounded-full border border-neon-cyan/20 bg-neon-cyan/10 blur-sm" />
              <div className="absolute left-8 top-32 h-28 w-28 rounded-full border border-neon-blue/20 bg-neon-blue/10 blur-sm" />
              <div className="relative flex min-h-0 flex-col justify-between gap-4">
                <div className="flex items-start justify-between">
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-neon-cyan">
                    Visual System
                  </div>
                  <Sparkles className="text-neon-pink/70" size={20} />
                </div>

                <div className="relative mx-auto flex h-48 w-48 items-center justify-center transition duration-500 group-hover:scale-[1.03] sm:h-60 sm:w-60">
                  <div className="absolute inset-0 rounded-full border border-white/10 opacity-50" />
                  <div className="absolute inset-8 rounded-full border border-neon-cyan/20 opacity-80" />
                  <div className="absolute inset-16 rounded-full border border-neon-blue/20 opacity-80" />
                  <div className="absolute inset-5 overflow-hidden rounded-[2rem] border border-white/20 bg-[#121212] shadow-neon transition duration-500 group-hover:-translate-y-2 group-hover:rotate-[-4deg] sm:inset-7">
                    <img
                      src={profileImage}
                      alt="Niket Talekar"
                      className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-space-975/30 via-transparent to-neon-cyan/10" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-[0.32em] text-white/45">Focus</p>
                    <p className="mt-2 text-lg font-semibold text-white">AI-native interfaces</p>
                    <p className="mt-1 text-xs leading-6 text-white/60">
                      Product design, frontend systems, and intelligent interaction patterns.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-[#121212]/40 p-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.32em] text-neon-cyan">Stack</p>
                      <p className="mt-2 text-lg font-semibold text-white">Backend + AI Workflows</p>
                      <p className="mt-1 text-xs leading-6 text-white/60">
                        Scalable APIs, intelligent automation, and reliable systems built for real-world products.
                      </p>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-neon-pink/80">
                      <WandSparkles size={18} />
                      <span className="text-xs uppercase tracking-[0.25em]">2026 Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="pointer-events-none absolute -right-8 top-8 h-24 w-24 rounded-full border border-neon-cyan/40 bg-neon-cyan/10 blur-sm" />
          <div className="pointer-events-none absolute -left-10 bottom-10 h-20 w-20 rounded-full border border-neon-blue/40 bg-neon-blue/10 blur-sm" />
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
