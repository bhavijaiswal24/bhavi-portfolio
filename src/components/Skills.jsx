import { useState } from "react";
import {
  FaJava,
  FaDatabase,
  FaLock,
  FaCode,
  FaLayerGroup,
  FaHtml5,
  FaCss3Alt,
  FaRobot,
  FaBrain,
} from "react-icons/fa";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiStreamlit,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "AI & Emerging Technologies",
    "Programming Languages",
    "Frontend Development",
    "Backend Development",
    "Databases",
    "Developer Tools",
  ];

  const skillList = [
    // 1. AI & Emerging Technologies
    {
      name: "TensorFlow",
      category: "AI & Emerging Technologies",
      icon: SiTensorflow,
      color: "text-amber-500",
      type: "Applied Project",
      highlight: "CNN MRI Classification",
    },
    {
      name: "Keras",
      category: "AI & Emerging Technologies",
      icon: SiKeras,
      color: "text-rose-500",
      type: "Applied Project",
      highlight: "Deep Learning Models",
    },
    {
      name: "OpenCV",
      category: "AI & Emerging Technologies",
      icon: SiOpencv,
      color: "text-emerald-400",
      type: "Applied Project",
      highlight: "Image Preprocessing",
    },
    {
      name: "Streamlit",
      category: "AI & Emerging Technologies",
      icon: SiStreamlit,
      color: "text-red-400",
      type: "Applied Project",
      highlight: "AI Web Inference UI",
    },
    {
      name: "Intelligent Automation",
      category: "AI & Emerging Technologies",
      icon: FaRobot,
      color: "text-purple-400",
      type: "Practical Experience",
      highlight: "Workflow & Repetitive Task Automation",
    },
    {
      name: "Deep Learning Core",
      category: "AI & Emerging Technologies",
      icon: FaBrain,
      color: "text-indigo-400",
      type: "Continuous Learning",
      highlight: "Neural Nets & Architectures",
    },

    // 2. Programming Languages
    {
      name: "Java",
      category: "Programming Languages",
      icon: FaJava,
      color: "text-amber-500",
      type: "Practical Experience",
      highlight: "OOP, ATM Simulator & DSA",
    },
    {
      name: "Python",
      category: "Programming Languages",
      icon: SiPython,
      color: "text-blue-400",
      type: "Practical Experience",
      highlight: "AI Models, Scripting & OpenCV",
    },
    {
      name: "JavaScript",
      category: "Programming Languages",
      icon: SiJavascript,
      color: "text-yellow-400",
      type: "Practical Experience",
      highlight: "ES6+, Async/Await & Full-Stack",
    },
    {
      name: "TypeScript",
      category: "Programming Languages",
      icon: SiTypescript,
      color: "text-blue-500",
      type: "Practical Experience",
      highlight: "Type Safety & Venkatesh Website",
    },
    {
      name: "SQL",
      category: "Programming Languages",
      icon: FaDatabase,
      color: "text-indigo-400",
      type: "Practical Experience",
      highlight: "Complex Queries & Schema Design",
    },
    {
      name: "C",
      category: "Programming Languages",
      icon: FaCode,
      color: "text-slate-300",
      type: "Academic Foundation",
      highlight: "Pointers & Memory Principles",
    },

    // 3. Frontend Development
    {
      name: "React.js",
      category: "Frontend Development",
      icon: SiReact,
      color: "text-cyan-400",
      type: "Practical Experience",
      highlight: "Component State, Hooks & Context",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend Development",
      icon: SiTailwindcss,
      color: "text-sky-400",
      type: "Practical Experience",
      highlight: "Modern Utility-First Styling",
    },
    {
      name: "HTML5",
      category: "Frontend Development",
      icon: FaHtml5,
      color: "text-orange-500",
      type: "Practical Experience",
      highlight: "Semantic & Accessible Markup",
    },
    {
      name: "CSS3",
      category: "Frontend Development",
      icon: FaCss3Alt,
      color: "text-blue-500",
      type: "Practical Experience",
      highlight: "Flexbox, Grid & Animations",
    },
    {
      name: "Bootstrap",
      category: "Frontend Development",
      icon: SiBootstrap,
      color: "text-purple-400",
      type: "Practical Experience",
      highlight: "Responsive UI Framework",
    },

    // 4. Backend Development
    {
      name: "Node.js",
      category: "Backend Development",
      icon: SiNodedotjs,
      color: "text-emerald-500",
      type: "Practical Experience",
      highlight: "Asynchronous Server Runtime",
    },
    {
      name: "Express.js",
      category: "Backend Development",
      icon: SiExpress,
      color: "text-slate-200",
      type: "Practical Experience",
      highlight: "Routing, Middleware & APIs",
    },
    {
      name: "REST APIs",
      category: "Backend Development",
      icon: FaLayerGroup,
      color: "text-purple-400",
      type: "Practical Experience",
      highlight: "CRUD Endpoints & Error Handling",
    },
    {
      name: "JWT Authentication",
      category: "Backend Development",
      icon: FaLock,
      color: "text-rose-400",
      type: "Practical Experience",
      highlight: "Token-Based Session Security",
    },

    // 5. Databases
    {
      name: "PostgreSQL",
      category: "Databases",
      icon: SiPostgresql,
      color: "text-sky-400",
      type: "Practical Experience",
      highlight: "Garmenting ERP & Relations",
    },
    {
      name: "MongoDB",
      category: "Databases",
      icon: SiMongodb,
      color: "text-emerald-400",
      type: "Practical Experience",
      highlight: "Document Store & Mongoose Models",
    },
    {
      name: "MySQL",
      category: "Databases",
      icon: SiMysql,
      color: "text-blue-400",
      type: "Practical Experience",
      highlight: "Relational Tables & CRUD",
    },
    {
      name: "Database Design",
      category: "Databases",
      icon: FaDatabase,
      color: "text-indigo-400",
      type: "Practical Experience",
      highlight: "Normalization & Data Modeling",
    },

    // 6. Developer Tools
    {
      name: "Git",
      category: "Developer Tools",
      icon: SiGit,
      color: "text-orange-500",
      type: "Practical Experience",
      highlight: "Branching, Merging & VCS",
    },
    {
      name: "GitHub",
      category: "Developer Tools",
      icon: SiGithub,
      color: "text-slate-100",
      type: "Practical Experience",
      highlight: "Collaboration & Open Source",
    },
    {
      name: "Visual Studio Code",
      category: "Developer Tools",
      icon: VscVscode,
      color: "text-blue-400",
      type: "Practical Experience",
      highlight: "Daily Primary Environment",
    },
    {
      name: "Postman",
      category: "Developer Tools",
      icon: SiPostman,
      color: "text-orange-400",
      type: "Practical Experience",
      highlight: "API Testing & Validation",
    },
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skillList
      : skillList.filter((s) => s.category === activeCategory);

  const getTypeBadgeClass = (type) => {
    switch (type) {
      case "Practical Experience":
        return "border-emerald-500/25 bg-emerald-500/10 text-emerald-300";
      case "Applied Project":
        return "border-blue-500/25 bg-blue-500/10 text-blue-300";
      case "Continuous Learning":
        return "border-purple-500/25 bg-purple-500/10 text-purple-300";
      default:
        return "border-slate-500/25 bg-slate-500/10 text-slate-300";
    }
  };

  return (
    <section id="skills" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#0b0f19]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-600/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-purple-300">
            Technical Stack
          </div>
          <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight break-words">
            Curated{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
              Engineering Expertise
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400 text-xs sm:text-base">
            Structured across six foundational domains—distinguishing proven production experience from applied project work and ongoing learning.
          </p>
        </div>

        {/* Category Pill Tabs */}
        <div className="mb-8 sm:mb-10 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md shadow-purple-600/25 scale-105"
                  : "border border-white/5 bg-slate-900/60 text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Legend / Distinction Bar */}
        <div className="mb-6 sm:mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] text-slate-400">
          <span className="font-semibold text-slate-300">Experience Key:</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 sm:px-2.5 py-0.5 text-emerald-300">
            ● Practical Experience
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-2 sm:px-2.5 py-0.5 text-blue-300">
            ● Applied Project
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-2 sm:px-2.5 py-0.5 text-purple-300">
            ● Continuous Learning / Academic
          </span>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative flex flex-col justify-between rounded-xl border border-white/5 bg-slate-900/40 p-3.5 sm:p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                    <span className={`text-xl sm:text-2xl ${skill.color} transition-transform group-hover:scale-110`}>
                      <Icon />
                    </span>
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[9px] font-semibold ${getTypeBadgeClass(
                        skill.type
                      )}`}
                    >
                      {skill.type === "Practical Experience"
                        ? "Practical"
                        : skill.type === "Applied Project"
                        ? "Applied"
                        : "Learning"}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {skill.name}
                  </h3>
                </div>

                <div className="mt-2.5 sm:mt-3 border-t border-white/5 pt-2">
                  <span className="text-[10px] sm:text-[11px] text-slate-400 leading-tight block break-words">
                    {skill.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
