import {
  FaGithub,
  FaLinkedinIn,
  FaArrowDown,
  FaCode,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-20 text-white"
    >
      {/* Background decoration */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div>

          {/* Small intro */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />

            <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Welcome to my portfolio
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Bhavi
            <span className="text-cyan-400"> Jaiswal</span>
          </h1>

          {/* Role */}
          <h2 className="mt-5 text-2xl font-semibold text-gray-300 sm:text-3xl">
            Full Stack Developer
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            Aspiring Software Developer skilled in Java,Python, C, React.js, Node.js, and MongoDB. Experienced in
building responsive web apps using REST APIs, CRUD operations, and modern UI frameworks. Strong
understanding of DSA, OOP, DBMS, OS fundamentals, and problem solving ability. Familiar with Git,
version control, and AI, ML and AWS concepts
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
            >
              View My Projects
              <FaArrowDown className="text-sm" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg border border-gray-700 px-6 py-3 font-semibold text-gray-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              Download Resume
            </a>

          </div>

          {/* Social links */}
          <div className="mt-10 flex items-center gap-4">

            <span className="text-sm text-gray-500">
              Connect with me
            </span>

            <a
              href="https://github.com/bhavijaiswal24"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-gray-700 p-3 text-gray-400 transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/bhavijaiswal8900/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-gray-700 p-3 text-gray-400 transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaLinkedinIn />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE — Developer Visual */}
        <div className="hidden lg:flex justify-center">

          <div className="relative w-full max-w-md">

            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-cyan-400/10 blur-2xl" />

            {/* Code window */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">

              {/* Window header */}
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">

                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />

                <span className="ml-3 text-xs text-gray-500">
                  portfolio.jsx
                </span>

              </div>

              {/* Code */}
              <div className="p-7 font-mono text-sm leading-8">

                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">developer</span>{" "}
                  = {"{"}
                </div>

                <div className="pl-5">
                  <span className="text-gray-500">name:</span>{" "}
                  <span className="text-green-400">
                    "Bhavi Jaiswal"
                  </span>
                  ,
                </div>

                <div className="pl-5">
                  <span className="text-gray-500">role:</span>{" "}
                  <span className="text-green-400">
                    "Full Stack Developer"
                  </span>
                  ,
                </div>

                <div className="pl-5">
                  <span className="text-gray-500">skills:</span>{" "}
                  [
                </div>

                <div className="pl-10 text-cyan-300">
                  "Programming Languages: Java, C,JavaScript, Springboot",
                </div>

                <div className="pl-10 text-cyan-300">
                  "Frontend Development: HTML, CSS, React.js, Bootstrap
Backend Ecosystem: Node.js, Express.js, RESTful APIs, JW",
                </div>

                <div className="pl-10 text-cyan-300">
                  "Databases & Storage: MongoDB, SQL, PostgreSQL",
                </div>

                <div className="pl-10 text-cyan-300">
                  "CS Fundamentals: DSA, OS, DBMS, OOPs, CN, SE.",
                </div>

                <div className="pl-10 text-cyan-300">
                  "Tools: Git, GitHub, VS Code."
                </div>

                <div className="pl-5">
                  ],
                </div>

                <div>
                  {"}"};
                </div>

                <div className="mt-5 text-gray-500">
                  <span className="text-purple-400">return</span>{" "}
                  <span className="text-cyan-300">
                    developer
                  </span>
                  ;
                </div>

              </div>

              {/* Bottom label */}
              <div className="flex items-center gap-3 border-t border-white/10 px-6 py-4">
                <FaCode className="text-cyan-400" />

                <span className="text-sm text-gray-400">
                  Turning ideas into working software.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;