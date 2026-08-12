function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Get To Know Me
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            About <span className="text-cyan-400">Me</span>
          </h2>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left side */}
          <div>
            <h3 className="mb-5 text-2xl font-semibold">
              Building solutions through code
            </h3>

            <p className="mb-5 leading-8 text-gray-400">
              I'm Bhavi Jaiswal, a Full Stack Developer with a background in
              Information Technology. I enjoy building web applications that
              solve real-world problems and provide a simple, intuitive user
              experience.
            </p>

            <p className="mb-5 leading-8 text-gray-400">
              I have experience working with frontend technologies such as
              React.js, HTML, CSS and JavaScript, along with backend
              technologies including Node.js, Express.js and Python.
            </p>

            <p className="leading-8 text-gray-400">
              I'm continuously learning new technologies and improving my
              problem-solving skills through projects, coding practice and
              hands-on development.
            </p>
          </div>

          {/* Right side */}
          <div className="grid grid-cols-2 gap-5">

            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6 transition hover:border-cyan-400/50">
              <div className="mb-3 text-3xl font-bold text-cyan-400">
                8.0
              </div>

              <h4 className="font-semibold">
                CGPA
              </h4>

              <p className="mt-2 text-sm text-gray-400">
                B.Tech in Information Technology
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6 transition hover:border-cyan-400/50">
              <div className="mb-3 text-3xl font-bold text-cyan-400">
                10+
              </div>

              <h4 className="font-semibold">
                Projects
              </h4>

              <p className="mt-2 text-sm text-gray-400">
                Academic & personal projects
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6 transition hover:border-cyan-400/50">
              <div className="mb-3 text-3xl font-bold text-cyan-400">
                Full
              </div>

              <h4 className="font-semibold">
                Stack Development
              </h4>

              <p className="mt-2 text-sm text-gray-400">
                Frontend & Backend
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6 transition hover:border-cyan-400/50">
              <div className="mb-3 text-3xl font-bold text-cyan-400">
                Always
              </div>

              <h4 className="font-semibold">
                Learning
              </h4>

              <p className="mt-2 text-sm text-gray-400">
                Improving every day
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;