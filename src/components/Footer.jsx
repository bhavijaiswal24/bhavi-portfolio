import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Footer() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#070a12] px-6 py-12 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        {/* Logo / Tagline */}
        <div className="text-center md:text-left">
          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-xl font-bold tracking-tight text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-600 to-blue-500 font-mono text-xs font-semibold text-white shadow-md shadow-purple-500/20">
              BJ
            </span>
            <span>
              Bhavi<span className="text-purple-400">.dev</span>
            </span>
          </a>
          <p className="mt-1.5 text-xs text-slate-500 max-w-md">
            Full-Stack Development, AI-Powered Applications & Intelligent Automation. Architecting scalable digital systems, robust APIs, and data-driven solutions.
          </p>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-400 transition hover:text-purple-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/bhavijaiswal24"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-slate-900/60 text-slate-300 transition hover:border-purple-400/50 hover:text-white"
            >
              <FaGithub size={14} />
            </a>

            <a
              href="https://www.linkedin.com/in/bhavijaiswal8900"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-slate-900/60 text-slate-300 transition hover:border-blue-400/50 hover:text-white"
            >
              <FaLinkedinIn size={14} />
            </a>

            <a
              href="mailto:bhavijaiswal241203@gmail.com"
              aria-label="Send email"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-slate-900/60 text-slate-300 transition hover:border-purple-400/50 hover:text-white"
            >
              <FaEnvelope size={13} />
            </a>
          </div>

          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} Bhavi Jaiswal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;