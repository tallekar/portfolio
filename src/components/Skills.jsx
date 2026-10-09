import { motion } from "framer-motion";
import Reveal from "./Reveal";

const skillGroups = [
  {
    title: "Machine Learning",
    items: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Model Evaluation",
      "Feature Engineering",
      "Scikit-learn",
      "XGBoost",
    ],
  },
  {
    title: "Deep Learning",
    items: [
      "Neural Networks",
      "CNN (Computer Vision)",
      "TensorFlow",
      "PyTorch",
      "Transfer Learning",
    ],
  },
  {
    title: "Backend Development",
    items: [
      "FASTAPI",
      "RESTful API Development",
      "JWT Authentication & Authorization",
      "PyPika",
      "Database Integration",
      "SQLAlchemy",
    ],
  },
  {
    title: "Databases",
    items: [
      "SQLite",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    title: "AI Engineering",
    items: [
      "LLMs",
      "Prompt Engineering",
      "RAG",
      "LangChain",
      "LangGraph",
      "Agentic AI",
      "CrewAI",
      "Gemini API",
      "Groq API",
      "Vector Databases",
    ],
  },
  {
    title: "Programming Languages",
    items: [
      "Python",
      "CSS",
      "HTML",
      "SQL",
    ],
  },
  {
    title: "Data & Analytics",
    items: [
      "Data Preprocessing",
      "Pandas",
      "NumPy",
      "Feature Engineering",
      "ETL Pipelines",
      "EDA",
    ],
  },
  {
    title: "Visualization & BI Tools",
    items: [
      "Power BI",
      "Tableau",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    title: "Deployment & Hosting",
    items: [
      "Streamlit",
      "Vercel",
      "Render",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section-shell relative overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full top-0 left-0" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full bottom-0 right-0" />
      </div>

      <Reveal>
        <div className="glass-panel p-8 sm:p-10">
          <span className="section-kicker">Skills</span>

          {/* HEADING & DESCRIPTION */}
          <div className="mb-10">
            <h2 className="section-heading !text-2xl bg-gradient-to-r from-cyan-300 via-blue-400 to-teal-200 bg-clip-text text-transparent sm:!text-3xl lg:!text-[2.2rem]">
              A toolkit for modern intelligent products.
            </h2>

            <div className="eyebrow-line" />

            <p className="mt-6 text-base leading-8 text-white/65">
              I work across model experimentation, app development, and experience design,
              choosing the right tools to move from prototype to production without losing
              clarity or speed.
            </p>
          </div>

          {/* SKILLS GRID */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group, index) => (
                <Reveal key={group.title} delay={index * 120 + 80} className="h-full">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    className="spotlight-card group relative flex h-full min-h-[14rem] flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-500 hover:-translate-y-2 hover:border-neon-cyan/30 hover:shadow-[0_0_25px_rgba(103,232,249,0.25)]"

                    // 🔥 Cursor glow effect
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      e.currentTarget.style.setProperty("--x", `${x}px`);
                      e.currentTarget.style.setProperty("--y", `${y}px`);
                    }}
                  >
                    {/* Glow overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(103,232,249,0.15),transparent_40%)]" />

                    {/* Title */}
                    <h3 className="font-display text-xl tracking-[0.12em] text-white">
                      {group.title}
                    </h3>

                    {/* Items */}
                    <div className="mt-5 flex flex-wrap gap-3">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="chip text-xs border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>

        </div>
      </Reveal>
    </section>
  );
}

export default Skills;