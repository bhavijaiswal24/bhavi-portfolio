import { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaBars, FaTimes, FaFileAlt } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-[#090d16]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/25 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={handleLinkClick}
          className="group flex items-center gap-2 text-lg sm:text-xl font-bold tracking-tight text-white transition-all min-h-[44px] min-w-[44px] items-center"
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
              className="rounded-full px-3.5 py-1.5 text-xs font-medium text-slate-300 transition-all hover:text-white hover:bg-white/10 active:scale-95"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons & Socials */}
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

        {/* Mobile Menu Button - Touch friendly (min 44x44px) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 text-slate-200 lg:hidden hover:text-white active:scale-95 transition-transform"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[61px] sm:top-[69px] z-40 bg-black/70 backdrop-blur-sm lg:hidden transition-opacity duration-200"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="relative z-50 border-b border-white/10 bg-[#0b0f19] px-4 sm:px-6 py-5 shadow-2xl lg:hidden max-h-[calc(100dvh-69px)] overflow-y-auto overscroll-contain animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition active:bg-purple-600/20 active:text-purple-300 hover:bg-white/5 min-h-[44px]"
              >
                {link.name}
              </a>
            ))}

            <div className="mt-3 flex flex-col gap-3 border-t border-white/10 pt-4">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/bhavijaiswal24"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-900/80 text-xs font-medium text-slate-300 active:scale-95 transition"
                >
                  <FaGithub size={15} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/bhavijaiswal8900"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-900/80 text-xs font-medium text-slate-300 active:scale-95 transition"
                >
                  <FaLinkedinIn size={15} />
                  <span>LinkedIn</span>
                </a>
              </div>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-4 text-xs font-semibold text-white shadow-md active:scale-98 transition"
              >
                <FaFileAlt size={13} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
