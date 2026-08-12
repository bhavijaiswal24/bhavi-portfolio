import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            I'm open to software development opportunities, internships,
            collaborations and interesting projects.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-8">

            <h3 className="text-2xl font-bold">
              Contact Information
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Feel free to reach out to me through email or connect with me
              on LinkedIn and GitHub.
            </p>

            <div className="mt-8 space-y-6">

              {/* Email */}
              <a
                href="mailto:bhavijaiswal241203@gmail.com"
                className="group flex items-center gap-4"
              >
                <div className="rounded-xl bg-cyan-400/10 p-4 text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                  <FaEnvelope size={20} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <p className="text-gray-200 group-hover:text-cyan-400">
                    bhavijaiswal241203@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-cyan-400/10 p-4 text-cyan-400">
                  <FaMapMarkerAlt size={20} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Location
                  </p>

                  <p className="text-gray-200">
                    Chhattisgarh, India
                  </p>
                </div>
              </div>

              {/* GitHub */}
              <a
                href="https://github.com/bhavijaiswal24"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <div className="rounded-xl bg-cyan-400/10 p-4 text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                  <FaGithub size={20} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    GitHub
                  </p>

                  <p className="text-gray-200 group-hover:text-cyan-400">
                    github.com/bhavijaiswal24
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/bhavijaiswal8900/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <div className="rounded-xl bg-cyan-400/10 p-4 text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                  <FaLinkedinIn size={20} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    LinkedIn
                  </p>

                  <p className="text-gray-200 group-hover:text-cyan-400">
                    linkedin.com/in/bhavijaiswal8900
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* Opportunity Card */}
          <div className="flex flex-col justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-8">

            <h3 className="text-3xl font-bold">
              Have a project or opportunity?
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              Whether you're looking for a developer, want to collaborate
              on a project, or simply want to connect, I'd love to hear
              from you.
            </p>

            <a
              href="mailto:bhavijaiswal241203@gmail.com"
              className="mt-8 inline-flex w-fit items-center gap-3 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              <FaEnvelope />
              Send Me an Email
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;