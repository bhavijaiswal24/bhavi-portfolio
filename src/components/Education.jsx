const education = [
  {
    degree: "Bachelor of Technology",
    field: "Information Technology",
    institution: "Government Engineering College, Bilaspur",
    location: "Bilaspur, Chhattisgarh",
    period: "2022 – 2026",
    score: "8.2 / 10.0 CGPA",
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
    degree: "Class XII",
    field: "Senior Secondary",
    institution: "Vishwadeep Senior Secondary School",
    location: "Durg, Chhattisgarh",
    period: "2021 – 2022",
    score: "86%",
    coursework: [],
  },
  {
    degree: "Class X",
    field: "Secondary School",
    institution: "Vishwadeep Senior Secondary School",
    location: "Durg, Chhattisgarh",
    period: "2019 – 2020",
    score: "90%",
    coursework: [],
  },
];

function Education() {
  return (
    <section
      id="education"
      className="bg-slate-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Academic Background
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            My <span className="text-cyan-400">Education</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            My academic journey and foundation in computer science and
            information technology.
          </p>
        </div>

        {/* Education timeline */}
        <div className="relative">

          {/* Timeline */}
          <div className="absolute left-3 top-0 hidden h-full w-px bg-cyan-400/30 md:block" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <div
                key={`${item.degree}-${index}`}
                className="relative md:pl-12"
              >

                {/* Timeline dot */}
                <div className="absolute left-0 top-7 hidden h-7 w-7 items-center justify-center rounded-full border border-cyan-400 bg-slate-900 md:flex">
                  <div className="h-2 w-2 rounded-full bg-cyan-400" />
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-white/10 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">

                  <div className="flex flex-col justify-between gap-4 md:flex-row">

                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                        {item.degree}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold">
                        {item.field}
                      </h3>

                      <p className="mt-2 text-lg text-gray-300">
                        {item.institution}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {item.location}
                      </p>
                    </div>

                    <div className="md:text-right">
                      <span className="inline-block rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                        {item.period}
                      </span>

                      <p className="mt-3 text-2xl font-bold text-cyan-400">
                        {item.score}
                      </p>
                    </div>

                  </div>

                  {/* Coursework */}
                  {item.coursework.length > 0 && (
                    <div className="mt-7 border-t border-white/10 pt-6">
                      <h4 className="font-semibold">
                        Relevant Coursework
                      </h4>

                      <div className="mt-4 flex flex-wrap gap-3">
                        {item.coursework.map((course) => (
                          <span
                            key={course}
                            className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;