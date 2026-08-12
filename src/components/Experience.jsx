const experiences = [
  {
    role: "Software Development Trainee",
    company: "Rays IT & Design World Pvt. Ltd.",
    period: "May 2025 – June 2025",
    location: "Raipur, Chhattisgarh",
    description: [
      "Developed responsive full-stack web applications using React.js, Node.js, Express.js, and MongoDB by implementing RESTful APIs, CRUD operations, and MVC architecture.",
      "Built secure applications with JWT authentication while using Git/GitHub for version control, debugging, and collaborative software development.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT",
      "Git",
      "GitHub",
    ],
  },
  {
    role: "Software Engineering Virtual Intern",
    company: "Persistent Systems",
    period: "July 2024 – August 2024",
    location: "Remote",
    description: [
      "Applied Java, Object-Oriented Programming (OOP), and Data Structures & Algorithms to build efficient software solutions while following software engineering best practices.",
      "Enhanced debugging, testing, code optimization, Git version control, and problem-solving skills through project-based software development assignments.",
    ],
    technologies: [
      "Java",
      "OOP",
      "Data Structures",
      "Algorithms",
      "Git",
      "Debugging",
      "Testing",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            My Journey
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Work <span className="text-cyan-400">Experience</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            My professional experience and hands-on exposure to software
            development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline line */}
          <div className="absolute left-3 top-0 hidden h-full w-px bg-cyan-400/30 md:block" />

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <div
                key={`${experience.company}-${index}`}
                className="relative md:pl-12"
              >

                {/* Timeline dot */}
                <div className="absolute left-0 top-7 hidden h-7 w-7 items-center justify-center rounded-full border border-cyan-400 bg-slate-950 md:flex">
                  <div className="h-2 w-2 rounded-full bg-cyan-400" />
                </div>

                {/* Experience card */}
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/5">

                  {/* Header */}
                  <div className="flex flex-col justify-between gap-3 md:flex-row">
                    <div>
                      <h3 className="text-xl font-bold md:text-2xl">
                        {experience.role}
                      </h3>

                      <p className="mt-1 font-medium text-cyan-400">
                        {experience.company}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {experience.location}
                      </p>
                    </div>

                    <span className="h-fit rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
                      {experience.period}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="mt-6 space-y-4">
                    {experience.description.map((item, descriptionIndex) => (
                      <div
                        key={descriptionIndex}
                        className="flex gap-3 text-sm leading-7 text-gray-400"
                      >
                        <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />

                        <p>{item}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;