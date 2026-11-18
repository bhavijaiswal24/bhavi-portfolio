import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaBook } from "react-icons/fa";

function Education() {
  const educationList = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Information Technology",
      institution: "Government Engineering College, Bilaspur",
      location: "Bilaspur, Chhattisgarh",
      period: "2022 – 2026",
      score: "CGPA: 8.2 / 10.0",
      highlight: "Department Top 5 Ranking",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
      ],
    },
    {
      degree: "Class XII (Senior Secondary)",
      field: "Science & Mathematics Stream",
      institution: "Vishwadeep Senior Secondary School",
      location: "Durg, Chhattisgarh",
      period: "2021 – 2022",
      score: "86.0%",
      highlight: "Distinction",
      coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    },
    {
      degree: "Class X (Secondary School)",
      field: "General Secondary Curriculum",
      institution: "Vishwadeep Sr. Sec. School",
      location: "Durg, Chhattisgarh",
      period: "2019 – 2020",
      score: "90.0%",
      highlight: "High Distinction",
      coursework: [],
    },
  ];

  return (
    <section id="education" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#090d16]">
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-1/4 left-1/4 h-80 sm:h-96 w-80 sm:w-96 rounded-full bg-indigo-600/5 blur-[120px]" />

      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-purple-300">
            Academic Foundation
          </div>
          <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight break-words">
            Education &{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
              Credentials
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400 text-xs sm:text-base">
            Strong foundational background in Computer Science and Information Technology with consistent academic distinction.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6 sm:space-y-8">
          {educationList.map((item, index) => (
            <div
              key={`${item.degree}-${index}`}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-4 sm:p-6 md:p-8 backdrop-blur-xl transition duration-300 hover:border-purple-500/40 hover:bg-slate-900/60"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <FaGraduationCap className="text-base sm:text-xl" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {item.degree}
                      </h3>
                      <span className="rounded-full bg-purple-500/15 border border-purple-500/30 px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold text-purple-300">
                        {item.highlight}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-purple-300 mt-1">
                      {item.field}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                      {item.institution}
                    </p>

                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                      <FaMapMarkerAlt size={11} className="text-slate-500" />
                      {item.location}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-end gap-2 border-t sm:border-t-0 border-white/5 pt-3 sm:pt-0">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-800/60 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono text-slate-300">
                    <FaCalendarAlt size={10} className="text-purple-400" />
                    <span>{item.period}</span>
                  </div>

                  <p className="font-mono text-lg sm:text-xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {item.score}
                  </p>
                </div>
              </div>

              {item.coursework.length > 0 && (
                <div className="mt-5 sm:mt-6 border-t border-white/5 pt-3.5 sm:pt-4">
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                    <FaBook size={11} className="text-purple-400" />
                    <span>Key Coursework & Domains:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-md border border-white/5 bg-slate-800/40 px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-medium text-slate-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;