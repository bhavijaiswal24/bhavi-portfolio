import { FaGithub, FaExternalLinkAlt, FaCodeBranch, FaCheckCircle } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#0b0f19]">
      {/* Background ambient light */}
      <div className="pointer-events-none absolute top-1/4 right-0 h-80 sm:h-96 w-80 sm:w-96 rounded-full bg-blue-600/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-purple-300">
            Featured Portfolio
          </div>
          <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight break-words">
            Engineered{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
              Projects & Systems
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400 text-xs sm:text-base">
            Real-world web platforms, enterprise ERP tools, AI image diagnostic classifiers, and software applications built with modern engineering standards.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id || project.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/40 p-4 sm:p-6 md:p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-500/40 hover:bg-slate-900/70 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-semibold text-purple-300">
                    {project.badge || project.category}
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs text-slate-500 flex items-center gap-1">
                    <FaCodeBranch size={10} className="text-purple-400" />
                    Verified
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Contributions */}
                {project.responsibilities && project.responsibilities.length > 0 && (
                  <div className="mt-4 space-y-1.5 border-t border-white/5 pt-3">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                      Key Contributions:
                    </span>
                    {project.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <FaCheckCircle className="mt-0.5 text-purple-400 flex-shrink-0" size={11} />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-5 sm:mt-6">
                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-5 border-t border-white/5 pt-3.5 sm:pt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/5 bg-slate-800/60 px-2 py-0.5 text-[11px] font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
  
                {/* Action Links */}
                <div className="flex flex-col min-[380px]:flex-row items-stretch min-[380px]:items-center gap-2.5 sm:gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-800/50 py-2.5 px-3 min-h-[44px] text-xs font-semibold text-slate-200 transition hover:border-purple-400/50 hover:bg-slate-800 hover:text-white"
                  >
                    <FaGithub size={13} />
                    <span>Source Code</span>
                  </a>

                  {project.live && project.live !== "#" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 py-2.5 px-3 min-h-[44px] text-xs font-semibold text-white shadow-md shadow-purple-600/25 transition hover:opacity-95"
                    >
                      <FaExternalLinkAlt size={11} />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <span className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/5 bg-slate-900/40 py-2.5 px-3 min-h-[44px] text-xs font-medium text-slate-500 cursor-not-allowed">
                      <span>Internal Repo / Demo</span>
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
