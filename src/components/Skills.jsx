const skills = [
  {
    name: "Java",
    category: "Language",
    icon: "☕",
  },
  {
    name: "Python",
    category: "Language",
    icon: "🐍",
  },
  {
    name: "JavaScript",
    category: "Language",
    icon: "JS",
  },
  {
    name: "React.js",
    category: "Frontend",
    icon: "⚛",
  },
  {
    name: "HTML5",
    category: "Frontend",
    icon: "HTML",
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: "CSS",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "TW",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "Node",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: "EX",
  },
  {
    name: "MySQL",
    category: "Database",
    icon: "SQL",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: "PG",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: "DB",
  },
  {
    name: "Git",
    category: "Tools",
    icon: "Git",
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: "GH",
  },
  {
    name: "Docker",
    category: "Tools",
    icon: "DK",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            My Expertise
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Technologies and tools I use to build modern and scalable
            applications.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group rounded-2xl border border-white/10 bg-slate-900 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
            >
              <div className="mb-4 text-3xl font-bold text-cyan-400">
                {skill.icon}
              </div>

              <h3 className="font-semibold">
                {skill.name}
              </h3>

              <p className="mt-2 text-xs text-gray-500">
                {skill.category}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;