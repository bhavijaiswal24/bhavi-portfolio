import {
  FaAward,
  FaCertificate,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

function Certifications() {
  const certifications = [
    {
      title: "Introduction to Software Development; Programming with Java",
      issuer: "Coursera",
      description:
        "Comprehensive training in software development principles, core Java programming, and OOP architectures.",
      tags: ["Java", "OOP", "Software Development"],
      badge: "Professional Certificate",
    },
    {
      title: "Data Structures & Algorithms: Strings & Graphs",
      issuer: "Coursera",
      description:
        "Deep exploration into algorithmic problem-solving, graph traversals, dynamic programming, and data organization.",
      tags: ["Algorithms", "Data Structures", "Graph Theory"],
      badge: "Algorithmic Specialization",
    },
    {
      title: "Programming in Java",
      issuer: "NPTEL",
      description:
        "Rigorous academic certification covering advanced Java concepts, multithreading, exception handling, and collections.",
      tags: ["Core Java", "NPTEL", "Systems"],
      badge: "Elite Academic",
    },
    {
      title: "Artificial Intelligence and Machine Learning",
      issuer: "NPTEL",
      description:
        "Theoretical and applied foundations of machine learning models, supervised algorithms, and neural networks.",
      tags: ["Machine Learning", "AI", "NPTEL"],
      badge: "AI Specialization",
    },
  ];

  const achievements = [
    {
      title: "Amazon Future Engineer (AFE) Scholar",
      organization: "Amazon",
      description:
        "Awarded competitive scholarship under the Amazon Future Engineer program supporting top computer science and software talent.",
      icon: FaAward,
      color: "text-amber-400",
      badge: "Scholarship Award",
    },
    {
      title: "Department Top 5 Rank",
      organization: "GEC Bilaspur (IT Dept)",
      description:
        "Ranked among the top five students in the Information Technology department, maintaining consistent academic excellence.",
      icon: FaTrophy,
      color: "text-purple-400",
      badge: "Academic Honor",
    },
    {
      title: "3rd Place – CSVTU Vocational Training Competition",
      organization: "CSVTU University",
      description:
        "Secured third position in the university-wide vocational training project competition for software engineering solution demo.",
      icon: FaTrophy,
      color: "text-blue-400",
      badge: "Competition Winner",
    },
    {
      title: "Google Developer Student Clubs (GDSC) Member",
      organization: "Google Developers",
      description:
        "Active member participating in developer workshops, hackathons, and collaborative engineering projects.",
      icon: FaUsers,
      color: "text-emerald-400",
      badge: "Community",
    },
  ];

  return (
    <section id="certifications" className="relative py-24 px-6 bg-[#0b0f19]">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 right-1/4 h-80 w-80 rounded-full bg-purple-600/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-purple-300">
            Merit & Accreditations
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Certifications &{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400 text-sm sm:text-base">
            Verified technical specializations, merit scholarships, and competitive recognitions in computer science.
          </p>
        </div>

        {/* Bento Grid: Achievements (Top) & Certifications (Bottom) */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <FaTrophy className="text-purple-400" size={18} />
            <span>Key Honors & Recognitions</span>
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-slate-900/70"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-2xl ${item.color}`}>
                        <Icon />
                      </span>
                      <span className="rounded-full bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 text-[10px] font-semibold text-purple-300">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs font-medium text-slate-400 mt-1">
                      {item.organization}
                    </p>

                    <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <FaCertificate className="text-blue-400" size={18} />
            <span>Specialized Course Certifications</span>
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/40 p-6 sm:p-7 backdrop-blur-xl transition duration-300 hover:border-blue-500/40 hover:bg-slate-900/70"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-400">
                      {cert.issuer}
                    </span>
                    <span className="rounded-full border border-white/10 bg-slate-800/60 px-2.5 py-0.5 text-[11px] font-medium text-slate-300">
                      {cert.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {cert.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-white/5 pt-4">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/5 bg-slate-800/40 px-2 py-0.5 text-[11px] font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
