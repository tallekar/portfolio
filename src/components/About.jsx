import { motion } from "framer-motion";
import { Brain, Code2, Rocket } from "lucide-react";
import Reveal from "./Reveal";

function About() {
  return (
    <section id="about" className="section-shell relative overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full top-0 left-0" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full bottom-0 right-0" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <Reveal>
          <div>
            <span className="section-kicker">About Me</span>

            <h2 className="section-heading !text-2xl bg-gradient-to-r from-cyan-300 via-blue-400 to-teal-200 bg-clip-text text-transparent sm:!text-3xl lg:!text-[2.2rem]">
              Building intelligent systems with real-world impact.
            </h2>

            <div className="eyebrow-line" />

            <p className="mt-6 text-white/70 leading-7">
              I’m <span className="text-white font-medium">Niket Talekar</span>, an aspiring AI/ML engineer
              focused on building systems that combine machine learning, real-time data, and modern UI.
              My work spans computer vision, predictive modeling, and AI-driven applications.
            </p>

            <p className="mt-4 text-white/60 leading-7">
              I enjoy turning complex problems into intuitive products — from detection systems using YOLO
              to intelligent dashboards powered by ML models. I focus on both engineering and user experience.
            </p>

            {/* 🔥 Highlights */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                🚀 AI Systems
              </div>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                🧠 Machine Learning
              </div>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                🎨 Modern UI
              </div>
            </div>
          </div>
        </Reveal>

        {/* RIGHT SIDE CARDS */}
        <div className="grid gap-6">
          
          <Reveal delay={100}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <Brain className="text-cyan-300 mb-3" size={28} />
              <h3 className="text-lg font-semibold text-white">
                AI & Machine Learning
              </h3>
              <p className="text-sm text-white/60 mt-2">
                Experience in computer vision, predictive modeling, and AI system design.
              </p>
            </motion.div>
          </Reveal>

          <Reveal delay={200}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <Code2 className="text-cyan-300 mb-3" size={28} />
              <h3 className="text-lg font-semibold text-white">
                Backend Development
              </h3>
              <p className="text-sm text-white/60 mt-2">
                Building scalable APIs and microservices using FastAPI and Python.
              </p>
            </motion.div>
          </Reveal>

          <Reveal delay={300}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <Rocket className="text-cyan-300 mb-3" size={28} />
              <h3 className="text-lg font-semibold text-white">
                Product Thinking
              </h3>
              <p className="text-sm text-white/60 mt-2">
                Focused on building real-world solutions with strong UX and performance.
              </p>
            </motion.div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

export default About;