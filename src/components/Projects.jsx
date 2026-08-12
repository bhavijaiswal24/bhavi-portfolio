import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            My Work
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            A selection of projects I've built while developing my skills in
            full-stack development, APIs, databases and machine learning.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-white/10 bg-slate-950 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10"
            >
              {/* Project visual */}
              <div className="mb-6 flex h-36 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/10 to-blue-500/10">
                <span className="text-5xl font-bold text-cyan-400">
                  {project.title.charAt(0)}
                </span>
              </div>

              <h3 className="text-xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-gray-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  <FaGithub />
                  GitHub
                </a>

                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;