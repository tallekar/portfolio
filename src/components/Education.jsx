import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";

const earlierEducation = [
  {
    level: "HSC — Class XII",
    completed: "Completed 2022",
  },
  {
    level: "SSC — Class X",
    completed: "Completed 2019",
  },
];

function Education() {
  return (
    <section id="education" className="section-shell relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-neon-cyan/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-neon-blue/10 blur-3xl" />
      </div>

      <Reveal>
        <div className="mb-12">
          <span className="section-kicker">Education</span>
          <h2 className="section-heading !text-2xl bg-gradient-to-r from-cyan-300 via-blue-400 to-teal-200 bg-clip-text text-transparent sm:!text-3xl lg:!text-[2.2rem]">
            Learning that shaped my journey.
          </h2>
          <div className="eyebrow-line" />
        </div>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        <Reveal className="md:col-span-2">
          <article className="glass-panel flex h-full flex-col gap-8 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0">
              <div className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl border border-neon-cyan/20 bg-neon-cyan/10 text-neon-cyan">
                <GraduationCap size={24} aria-hidden="true" />
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-neon-cyan">
                Completed June 2026
              </p>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-white sm:text-2xl">
                B.Tech in Artificial Intelligence &amp; Data Science
              </h3>
              <p className="mt-3 text-base leading-7 text-white/65">
                Government College of Engineering, Ratnagiri
              </p>
            </div>

            <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 md:min-w-40 md:text-center">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/50">
                CGPA
              </p>
              <p className="mt-2 text-2xl font-semibold text-neon-cyan">6.3 <span className="text-base text-white/55">/ 10</span></p>
            </div>
          </article>
        </Reveal>

        {earlierEducation.map((item, index) => (
          <Reveal key={item.level} delay={index * 120 + 80} className="h-full">
            <article className="glass-panel h-full p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-neon-cyan">
                {item.completed}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                {item.level}
              </h3>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Education;
