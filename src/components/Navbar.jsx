import { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaBars, FaTimes, FaFileAlt } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090d16]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-white transition-all"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 to-blue-500 font-mono text-sm font-semibold text-white shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
            BJ
          </span>
          <span className="font-semibold tracking-tight">
            Bhavi<span className="text-purple-400">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-slate-900/60 px-4 py-1.5 backdrop-blur-md lg:flex shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 text-xs font-medium text-slate-300 transition-all hover:text-white hover:bg-white/10"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons & Socials */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/bhavijaiswal24"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-slate-900/70 text-slate-300 transition hover:border-purple-500/50 hover:text-purple-300 hover:scale-105"
          >
            <FaGithub size={16} />
          </a>

          <a
            href="https://www.linkedin.com/in/bhavijaiswal8900"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-slate-900/70 text-slate-300 transition hover:border-blue-500/50 hover:text-blue-300 hover:scale-105"
          >
            <FaLinkedinIn size={16} />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-purple-600/25 transition-all hover:opacity-95 hover:shadow-purple-600/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            <FaFileAlt size={12} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-slate-900/70 text-slate-300 lg:hidden hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-b border-white/10 bg-[#0b0f19]/95 px-6 py-6 backdrop-blur-2xl lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-purple-300"
              >
                {link.name}
              </a>
            ))}

            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/bhavijaiswal24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-slate-900 text-slate-300"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/bhavijaiswal8900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-slate-900 text-slate-300"
                >
                  <FaLinkedinIn size={16} />
                </a>
              </div>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-md"
              >
                <FaFileAlt size={12} />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;