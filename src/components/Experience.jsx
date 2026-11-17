import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      role: "AI & IT Executive",
      company: "Shri Venkatesh Stock Broker India Pvt. Ltd.",
      period: "Sep 2026 – Present",
      location: "Raipur, Chhattisgarh",
      type: "Current Role",
      bullets: [
        "Manage day-to-day IT operations by monitoring business systems, troubleshooting software and technical issues, resolving system errors, and providing technical support to ensure smooth and reliable business operations.",
        "Research, explore, and implement AI-based solutions to automate repetitive tasks, reduce manual effort, improve operational efficiency, and streamline business workflows through intelligent automation and emerging technologies.",
        "Support business software applications, maintain and organize operational data, assist in system configuration and issue resolution, and identify opportunities for technology-driven process improvements while collaborating with cross-functional teams to meet IT requirements.",
      ],
      technologies: ["AI Automation", "IT Operations", "System Troubleshooting", "Workflow Automation", "Process Improvement"],
      badgeColor: "border-purple-500/30 bg-purple-500/10 text-purple-300",
    },
    {
      role: "Software Developer",
      company: "Indux Technology",
      period: "Jun 2026 – Aug 2026",
      location: "Pune, Maharashtra",
      type: "Full-Stack ERP",
      bullets: [
        "Contributed to the development of a Garmenting ERP System using React.js, Node.js, Express.js, and PostgreSQL, supporting garment manufacturing operations, business workflows, and centralized data management.",
        "Developed and enhanced application modules for master data management and garment production workflows, improving the organization of garment-related information and supporting efficient day-to-day manufacturing and business processes.",
        "Integrated React.js frontend components with RESTful backend APIs and PostgreSQL database operations, while debugging application issues, validating data flow, and improving module functionality, reliability, and overall application performance.",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "REST APIs", "ERP Modules"],
      badgeColor: "border-blue-500/30 bg-blue-500/10 text-blue-300",
    },
    {
      role: "Software Development Trainee",
      company: "Rays IT & Design World Pvt. Ltd.",
      period: "May 2025 – June 2025",
      location: "Raipur, Chhattisgarh",
      type: "Full-Stack Training",
      bullets: [
        "Developed full-stack web applications using React.js, Node.js, Express.js, and MongoDB, building responsive interfaces and implementing RESTful APIs and CRUD operations.",
        "Integrated databases and implemented application features using MVC architecture, ensuring structured and maintainable code.",
        "Implemented JWT authentication and used Git/GitHub for version control, debugging, and collaborative software development.",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "MVC", "Git/GitHub"],
      badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    },
    {
      role: "Software Engineering Virtual Intern",
      company: "Persistent Solutions",
      period: "Jul 2024 – Aug 2024",
      location: "Remote",
      type: "Virtual Internship",
      bullets: [
        "Developed project-based software solutions using Java, Object-Oriented Programming (OOP), and Data Structures & Algorithms, applying core programming concepts to build structured, efficient, and reusable applications.",
        "Applied problem-solving, modular programming, and algorithmic thinking to design logical solutions, optimize program execution, and improve code readability, reusability, and maintainability.",
        "Performed debugging, testing, and code optimization to identify and resolve errors, validate application functionality, and applied Git version control and software engineering best practices to maintain code quality.",
      ],
      technologies: ["Java", "OOP", "DSA", "Problem Solving", "Debugging & Testing", "Git"],
      badgeColor: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    },
  ];

  return (
    <section id="experience" className="relative py-24 px-6 bg-[#090d16]">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/3 left-0 h-96 w-96 rounded-full bg-purple-600/5 blur-[130px]" />

      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-purple-300">
            Career Journey
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400 text-sm sm:text-base">
            Hands-on professional software engineering roles across financial operations, manufacturing ERP systems, and web application development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-10 space-y-12 ml-3 sm:ml-6">
          {experiences.map((exp, index) => (
            <div key={`${exp.company}-${index}`} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-purple-500/40 bg-[#090d16] text-purple-400 shadow-md shadow-purple-500/20 group-hover:border-purple-400 group-hover:scale-110 transition-transform">
                <FaBriefcase size={12} />
              </div>

              {/* Card Container */}
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/30 hover:bg-slate-900/60 hover:shadow-xl hover:shadow-purple-500/5">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-white/5 pb-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {exp.role}
                      </h3>
                      <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${exp.badgeColor}`}>
                        {exp.type}
                      </span>
                    </div>

                    <p className="mt-1 text-base font-semibold text-purple-400">
                      {exp.company}
                    </p>

                    <div className="mt-1 flex items-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt className="text-slate-500" size={11} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 self-start rounded-full border border-white/10 bg-slate-800/60 px-3.5 py-1.5 text-xs font-mono font-medium text-slate-300">
                    <FaCalendarAlt size={11} className="text-purple-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <span className="mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap items-center gap-2 border-t border-white/5 pt-4">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mr-1">
                    Tech:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/5 bg-slate-800/50 px-2.5 py-1 text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;