import {
  FaGraduationCap,
  FaAward,
  FaServer,
  FaCheckCircle,
} from "react-icons/fa";


function About() {
  return (
    <section id="about" className="relative py-24 px-6 bg-[#090d16]">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-purple-600/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-purple-300">
            About Me
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering robust software with{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
              purpose and precision.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400 text-sm sm:text-base">
            B.Tech in Information Technology with hands-on experience developing enterprise ERP systems,
            financial applications, and AI diagnostics.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-6 md:grid-cols-12">
          {/* Main Story Bento (7 cols) */}
          <div className="md:col-span-7 flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur-xl transition hover:border-purple-500/30">
            <div>
              <div className="flex items-center gap-3 text-purple-400 mb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <FaServer size={16} />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                  Engineering Journey
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Combining Software Engineering, Full-Stack & Intelligent Automation
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                I am passionate about combining <strong className="text-white font-medium">software engineering</strong>,{" "}
                <strong className="text-white font-medium">full-stack development</strong>, and{" "}
                <strong className="text-white font-medium">AI automation</strong> to build practical, scalable, and intelligent applications.
                My focus centers on delivering resilient systems that solve genuine business friction—whether streamlining enterprise workflows or designing intuitive user experiences.
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                Through hands-on software development at <strong className="text-slate-200">Indux Technology</strong> (Garmenting ERP), full-stack application development at <strong className="text-slate-200">Rays IT</strong>, and ongoing IT & AI automation work at <strong className="text-slate-200">Shri Venkatesh Stock Broker</strong>, I have cultivated practical expertise in building secure RESTful APIs, managing relational & document databases, and implementing MVC architecture. Concurrently, I actively explore applied Machine Learning and intelligent process automation to enhance real-world software workflows.
              </p>
            </div>

            <div className="space-y-2.5 border-t border-white/10 pt-5">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-purple-400 mb-1">
                Practical Foundations & Emerging Pursuits:
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <FaCheckCircle className="text-emerald-400 flex-shrink-0" size={14} />
                <span><strong className="text-slate-100">Practical Experience:</strong> Full-Stack React.js, Node.js, Express, PostgreSQL, MongoDB, MySQL & REST APIs</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <FaCheckCircle className="text-blue-400 flex-shrink-0" size={14} />
                <span><strong className="text-slate-100">Applied Learning & Projects:</strong> AI/ML Image Classification (TensorFlow, OpenCV, CNNs) & Streamlit</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <FaCheckCircle className="text-purple-400 flex-shrink-0" size={14} />
                <span><strong className="text-slate-100">Intelligent Automation:</strong> Workflow optimization, repetitive task reduction & system integration</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <FaCheckCircle className="text-amber-400 flex-shrink-0" size={14} />
                <span><strong className="text-slate-100">CS Core:</strong> Data Structures, Algorithms, DBMS, Operating Systems & Computer Networks</span>
              </div>
            </div>
          </div>

          {/* Right Bento Column (5 cols) */}
          <div className="md:col-span-5 grid gap-6 sm:grid-cols-2 md:grid-cols-1">
            {/* Academic Card */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-7 backdrop-blur-xl transition hover:border-blue-500/30">
              <div className="flex items-center justify-between mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <FaGraduationCap size={18} />
                </span>
                <span className="font-mono text-2xl font-extrabold text-blue-400">8.2 / 10</span>
              </div>
              <h4 className="text-lg font-bold text-white">B.Tech Information Technology</h4>
              <p className="text-xs text-purple-300 font-medium mt-0.5">Government Engineering College, Bilaspur</p>
              <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                Consistent academic performer ranked in the <strong className="text-slate-200">Department Top 5</strong> with rigorous
                coursework in Data Structures, OOP, DBMS, OS, Networks, and Software Engineering.
              </p>
            </div>

            {/* Scholar & Honors Card */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-7 backdrop-blur-xl transition hover:border-purple-500/30">
              <div className="flex items-center justify-between mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <FaAward size={18} />
                </span>
                <span className="rounded-full bg-purple-500/15 border border-purple-500/30 px-2.5 py-0.5 text-[11px] font-semibold text-purple-300">
                  Scholarship
                </span>
              </div>
              <h4 className="text-lg font-bold text-white">Amazon Future Engineer Scholar</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Selected for the prestigious Amazon Future Engineer program. Active Google Developer Student Clubs (GDSC) member and 3rd Place winner at CSVTU Vocational Training Competition.
              </p>
            </div>
          </div>

          {/* Bottom Bento Bar - 3 Feature Cards (4 cols each) */}
          <div className="md:col-span-4 rounded-2xl border border-white/10 bg-slate-900/30 p-6 backdrop-blur-xl transition hover:border-white/20">
            <div className="text-purple-400 mb-3 font-mono text-xs font-semibold tracking-wider uppercase">01 / ARCHITECTURE</div>
            <h4 className="text-base font-bold text-white mb-2">Scalable Architecture</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Applying MVC patterns, structured RESTful API contracts, and defensive input validation for stable enterprise software.
            </p>
          </div>

          <div className="md:col-span-4 rounded-2xl border border-white/10 bg-slate-900/30 p-6 backdrop-blur-xl transition hover:border-white/20">
            <div className="text-blue-400 mb-3 font-mono text-xs font-semibold tracking-wider uppercase">02 / AUTOMATION</div>
            <h4 className="text-base font-bold text-white mb-2">Intelligent Automation</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Researching and deploying AI-powered workflows and computer vision pipelines to eliminate repetitive operational overhead.
            </p>
          </div>

          <div className="md:col-span-4 rounded-2xl border border-white/10 bg-slate-900/30 p-6 backdrop-blur-xl transition hover:border-white/20">
            <div className="text-emerald-400 mb-3 font-mono text-xs font-semibold tracking-wider uppercase">03 / REAL-WORLD IMPACT</div>
            <h4 className="text-base font-bold text-white mb-2">Business-Driven Focus</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Translating operational and business requirements into concrete software modules with real production uptime and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;