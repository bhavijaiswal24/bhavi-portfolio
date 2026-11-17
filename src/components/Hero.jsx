import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaArrowRight,
  FaDownload,
  FaCheck,
  FaCopy,
  FaTerminal,
  FaCircle,
} from "react-icons/fa6";

function Hero() {
  const [copied, setCopied] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  const rotatingRoles = [
    "Full-Stack Developer",
    "AI Enthusiast",
    "Software Developer",
    "Intelligent Automation",
    "Backend Developer",
    "Technology Innovator",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [rotatingRoles.length]);

  const brandingPills = [
    "Full-Stack Development",
    "AI-Powered Applications",
    "Intelligent Automation",
    "Backend Engineering",
    "API Development & Integration",
    "Data-Driven Systems",
  ];

  const codeSnippet = `const developer: EngineerProfile = {
  name: "Bhavi Jaiswal",
  specialization: [
    "Full-Stack Development",
    "AI-Powered Application Development",
    "Intelligent Automation",
    "Backend Engineering"
  ],
  coreTechnologies: {
    languages: ["Java", "Python", "JavaScript", "TypeScript", "C", "SQL"],
    frameworks: ["React.js", "Node.js", "Express.js"],
    databases: ["PostgreSQL", "MongoDB", "MySQL"],
    appliedAI: ["TensorFlow", "Keras", "OpenCV", "Streamlit"]
  },
  education: "B.Tech IT @ GEC Bilaspur (8.2 CGPA)",
  status: "Building Scalable & Intelligent Applications"
};`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center justify-center overflow-hidden pt-28 pb-16 px-6"
    >
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[520px] w-[680px] rounded-full bg-gradient-to-tr from-purple-600/15 via-blue-600/10 to-transparent blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl w-full grid items-center gap-12 lg:grid-cols-12">
        {/* Left Content (7 cols on lg) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Dynamic Rotating Role Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-purple-500/25 bg-purple-500/10 px-4 py-1.5 text-xs font-medium text-purple-300 backdrop-blur-md mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-slate-400">Focus:</span>
            <span
              key={roleIndex}
              className="font-semibold text-white transition-all duration-300 animate-in fade-in slide-in-from-bottom-1"
            >
              {rotatingRoles[roleIndex]}
            </span>
          </div>

          {/* User's Exact Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2]">
            Building Intelligent Software,{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
              AI-Powered Solutions
            </span>{" "}
            & Scalable Digital Experiences.
          </h1>

          {/* Expanded Professional Identity Description */}
          <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Hi, I'm <strong className="text-white font-semibold">Bhavi Jaiswal</strong>. I bridge{" "}
            <span className="text-purple-300 font-medium">Software Development</span>,{" "}
            <span className="text-blue-300 font-medium">Full-Stack Engineering</span>, and{" "}
            <span className="text-indigo-300 font-medium">Intelligent Automation</span> to architect high-performance,
            data-driven, and cloud-ready applications that solve genuine operational challenges.
          </p>

          {/* Professional Branding Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {brandingPills.map((pill) => (
              <span
                key={pill}
                className="rounded-md border border-white/5 bg-slate-900/60 px-2.5 py-1 text-[11px] font-medium text-slate-300 backdrop-blur-sm"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-6 grid grid-cols-3 gap-4 border-y border-white/5 py-3.5 w-full max-w-lg text-slate-300">
            <div>
              <p className="text-2xl font-bold text-white font-mono">8.2</p>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider">B.Tech CGPA</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white font-mono">10+</p>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider">Projects Built</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white font-mono">4</p>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider">Tech Roles</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-purple-600/25 transition-all hover:scale-[1.02] hover:shadow-purple-600/40 active:scale-[0.98]"
            >
              <span>Explore Projects</span>
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Bhavi_Jaiswal_Resume.pdf"
              className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-slate-900/60 px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-200 backdrop-blur-md transition-all hover:bg-white/10 hover:border-purple-400/40 hover:text-white"
            >
              <FaDownload className="text-xs text-purple-400" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Profiles */}
          <div className="mt-7 flex items-center gap-4 text-xs text-slate-400">
            <span className="font-medium tracking-wide">CONNECT:</span>
            <div className="flex items-center gap-2.5">
              <a
                href="https://github.com/bhavijaiswal24"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-1.5 text-slate-300 transition hover:border-purple-500/50 hover:text-white"
              >
                <FaGithub size={13} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/bhavijaiswal8900"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-1.5 text-slate-300 transition hover:border-blue-500/50 hover:text-white"
              >
                <FaLinkedinIn size={13} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>


        {/* Right Content — Interactive Code Bento Window (5 cols on lg) */}
        <div className="lg:col-span-5 relative w-full">
          {/* Subtle Glow Backdrop */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl opacity-60" />

          {/* IDE Container */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d121f]/90 shadow-2xl backdrop-blur-xl">
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-[#090d16]/80 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                  <FaTerminal size={10} className="text-purple-400" />
                  bhavi-engineer.ts
                </span>
              </div>

              <button
                onClick={copyCode}
                className="flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs text-slate-400 transition hover:bg-white/10 hover:text-white"
                title="Copy snippet"
              >
                {copied ? (
                  <>
                    <FaCheck size={11} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <FaCopy size={11} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Body */}
            <div className="p-5 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto">
              <pre className="text-slate-300 font-mono">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-300">developer</span>:{" "}
                <span className="text-emerald-400">EngineerProfile</span> = {"{"}
                {"\n"}  <span className="text-slate-400">name:</span>{" "}
                <span className="text-amber-300">"Bhavi Jaiswal"</span>,
                {"\n"}  <span className="text-slate-400">education:</span>{" "}
                <span className="text-amber-300">"B.Tech IT (8.2 CGPA)"</span>,
                {"\n"}  <span className="text-slate-400">focus:</span> [
                {"\n"}    <span className="text-emerald-300">"Full-Stack Development"</span>,
                {"\n"}    <span className="text-emerald-300">"AI-Powered Solutions"</span>,
                {"\n"}    <span className="text-emerald-300">"Intelligent Automation"</span>
                {"\n"}  ],
                {"\n"}  <span className="text-slate-400">databases:</span> [
                {"\n"}    <span className="text-cyan-300">"PostgreSQL"</span>,{" "}
                <span className="text-cyan-300">"MongoDB"</span>,{" "}
                <span className="text-cyan-300">"MySQL"</span>,{" "}
                <span className="text-cyan-300">"SQL"</span>
                {"\n"}  ],
                {"\n"}  <span className="text-slate-400">currentRole:</span>{" "}
                <span className="text-amber-300">"AI & IT Executive"</span>,
                {"\n"}  <span className="text-slate-400">passion:</span>{" "}
                <span className="text-purple-300">"Building Scalable & Intelligent Applications"</span>
                {"\n"}{"}"};
              </pre>
            </div>

            {/* IDE Footer Tagline */}
            <div className="flex items-center justify-between border-t border-white/5 bg-[#090d16]/50 px-4 py-2.5 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-purple-400">
                <FaCircle size={7} />
                <span>Clean Architecture & Test-Driven</span>
              </span>
              <span className="font-mono text-slate-500">TypeScript 5.x</span>
            </div>
          </div>

          {/* Floating Pill Badges */}
          <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 rounded-xl border border-white/10 bg-[#0d121f]/95 px-3.5 py-2 shadow-xl backdrop-blur-md">
            <span className="text-purple-400 font-bold">★</span>
            <span className="text-xs font-medium text-slate-200">Amazon Future Engineer Scholar</span>
          </div>

          <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 rounded-xl border border-white/10 bg-[#0d121f]/95 px-3.5 py-2 shadow-xl backdrop-blur-md">
            <span className="text-emerald-400 font-bold">⚡</span>
            <span className="text-xs font-medium text-slate-200">Full Stack & AI Integration</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
