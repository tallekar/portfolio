import Reveal from "./Reveal";

const experiences = [
  {
    role: "Intern",
    company: "Aaryak Solution",
    dates: "Feb 2026 - May 2026",
    details: [
      "Developed and enhanced modules for a Corporate Management System, improving workflow efficiency.",
      "Performed application testing and debugging, and collaborated with the team to deliver project milestones.",
    ],
  },
  {
    role: "Intern",
    company: "Gadre Infotech Pvt. Ltd.",
    dates: "Jun 2025 - Aug 2025",
    details: [
      "Worked on data preprocessing and data handling tasks.",
      "Assisted with documentation and workflow optimization.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="section-shell relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-neon-cyan/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-neon-blue/10 blur-3xl" />
      </div>

      <Reveal>
        <div className="mb-12">
          <span className="section-kicker">Experience</span>
          <h2 className="section-heading !text-2xl bg-gradient-to-r from-cyan-300 via-blue-400 to-teal-200 bg-clip-text text-transparent sm:!text-3xl lg:!text-[2.2rem]">
            Building experience through meaningful work.
          </h2>
          <div className="eyebrow-line" />
        </div>
      </Reveal>

      <div className="relative">
        <div className="absolute bottom-4 left-4 top-4 w-px bg-gradient-to-b from-transparent via-neon-cyan/70 to-transparent md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-10 md:space-y-14">
          {experiences.map((experience, index) => {
            const isRight = index % 2 === 1;

            return (
              <Reveal key={`${experience.company}-${experience.dates}`} delay={index * 140}>
                <div className="relative grid items-center gap-6 pl-12 md:grid-cols-[1fr_2rem_1fr] md:gap-8 md:pl-0">
                  <div className={`absolute left-4 top-8 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-space-975 bg-neon-cyan shadow-[0_0_14px_rgba(103,232,249,0.9)] md:static md:col-start-2 md:row-start-1 md:translate-x-0 md:justify-self-center ${isRight ? "md:col-start-2" : ""}`} />

                  <div className={`glass-panel p-6 sm:p-8 ${isRight ? "md:col-start-3" : "md:col-start-1 md:text-right"}`}>
                    <p className="text-xs font-medium uppercase tracking-[0.28em] text-neon-cyan">
                      {experience.dates}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-white">
                      {experience.role}, {experience.company}
                    </h3>
                    <ul className={`mt-5 space-y-3 text-sm leading-7 text-white/65 ${isRight ? "" : "md:ml-auto md:max-w-xl"}`}>
                      {experience.details.map((detail) => (
                        <li key={detail} className="flex gap-3">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan md:hidden" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
