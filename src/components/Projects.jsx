import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const projects = [
  {
    title: "AI-Powered Human Detection, Tracking & Entry Analytics System",
    description:
      "Developed a real-time computer vision system that detects and tracks human movement across defined boundary lines for automated entry counting. Connected the tracking pipeline to a local database and web dashboard for live entry monitoring and analytics visualization.",
    tags: ["YOLOv8", "OpenCV", "Python", "Flask", "SQLite", "HTML/CSS"],
    github: "https://github.com/tallekar/AI-Powered-Human-Detection-Tracking-and-Entry-Analytics-System",
    live: "https://ai-powered-human-detection-tracking-and.onrender.com/",
  },
  {
    title: "Employee Management System with ML-Based Prediction",
    description:
      "Engineered an end-to-end predictive web application designed to estimate project completion timelines using machine learning models. Handled dataset preprocessing, feature engineering, and model training to assist in data-driven workforce planning and decision-making.",
    tags: ["Scikit-learn", "Pandas", "NumPy", "Python", "Flask", "HTML/CSS"],
    github: "#",
    live: "https://emp-two-kohl.vercel.app/",
  },
  {
    title: "Multi-Agent AI Software Development Platform",
    description:
      "Built an autonomous software development platform that automates requirement analysis, code generation, and automated code reviews using collaborative AI agents. Integrated a real-time front-end dashboard with an asynchronous backend to stream generated software artifacts dynamically.",
    tags: ["CrewAI", "LLMs", "LangChain", "FastAPI", "React", "Python", "REST APIs"],
    github: "https://github.com/tallekar/ai_multi_agent_software_development_platform",
    live: "#",
  },
  {
    title: "Facial Emotion Detection System",
    description:
      "Built a computer vision application to recognize and classify human facial emotions from visual input. Implemented image preprocessing, feature extraction, and model evaluation techniques to achieve high emotion prediction accuracy.",
    tags: ["Python", "OpenCV", "DeepFace", "Machine Learning", "Scikit-learn"],
    github: "https://github.com/tallekar/Emotion_Detection_ML",
    live: "#",
  },
  {
    title: "AI-Powered Project Time Estimator",
    description:
      "An ML-powered web application that predicts software project completion time using a Random Forest Regressor. It analyzes seven project and team factors to provide duration estimates, confidence ranges, feature importance, and actionable suggestions, with support for natural-language project descriptions.",
    tags: ["Python", "Scikit-learn", "Random Forest", "Flask", "Pandas", "NumPy", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/tallekar/AI_Time_Estimator",
    live: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="section-shell relative overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full top-0 left-0" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full bottom-0 right-0" />
      </div>

      <Reveal>
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-kicker">Projects</span>

            {/* 🔥 Gradient heading */}
            <h2 className="section-heading !text-2xl bg-gradient-to-r from-cyan-300 via-blue-400 to-teal-200 bg-clip-text text-transparent sm:!text-3xl lg:!text-[2.2rem]">
              Selected builds from the future-facing stack.
            </h2>

            <div className="eyebrow-line" />
          </div>

          <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            A mix of AI systems, product engineering, and interfaces designed to make complex
            workflows feel intuitive and fast.
          </p>
        </div>
      </Reveal>

      <div className="grid auto-rows-[34rem] gap-6 lg:auto-rows-[32rem] lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 120 + 80}>
            <motion.article
              whileHover={{ scale: 1.04 }}
              className="glass-panel spotlight-card group relative h-full overflow-hidden p-7 transition duration-500 hover:-translate-y-2 hover:border-neon-cyan/30 hover:shadow-[0_0_30px_rgba(103,232,249,0.25)]"

              // 🔥 Cursor glow effect
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty("--x", `${x}px`);
                e.currentTarget.style.setProperty("--y", `${y}px`);
              }}
            >
              {/* 🔥 Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(103,232,249,0.15),transparent_40%)]">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-pink" />
                <div className="absolute -right-12 top-8 h-28 w-28 rounded-full bg-neon-cyan/10 blur-2xl" />
                <div className="absolute -bottom-12 left-0 h-32 w-32 rounded-full bg-neon-violet/10 blur-2xl" />
              </div>

              <div className="relative flex h-full flex-col">
                {/* Project Number */}
                <div className="mb-6 inline-flex rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-neon-cyan">
                  0{index + 1}
                </div>

                {/* Title */}
                <h3 className="h-32 shrink-0 text-xl font-semibold text-white sm:h-28 sm:text-2xl">
                  {project.title}
                </h3>

                <div className="project-card-content mt-4 min-h-0 flex-1 overflow-y-auto pr-2">
                  <p className="text-sm leading-7 text-white/65">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex h-12 shrink-0 items-center gap-5 border-t border-white/10 pt-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-cyan-300 transition"
                  >
                    <Github size={16} />
                    Code
                  </a>

                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-white/70 hover:text-cyan-300 transition"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}

                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;