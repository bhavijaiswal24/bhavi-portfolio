import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide text-white"
        >
          Bhavi<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Links + Resume */}
        <div className="hidden items-center gap-5 md:flex">

          {/* GitHub */}
          <a
            href="https://github.com/bhavijaiswal24"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-300 transition duration-300 hover:scale-110 hover:text-cyan-400"
          >
            <FaGithub className="text-xl" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/bhavijaiswal8900"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-300 transition duration-300 hover:scale-110 hover:text-cyan-400"
          >
            <FaLinkedin className="text-xl" />
          </a>

          {/* Resume */}
          <a
            href="/Bhavi-Jaiswal-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-cyan-400 px-4 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xl text-gray-300 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">

            {/* Mobile Nav Links */}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-sm font-medium text-gray-300 transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Social Links */}
            <div className="flex items-center gap-5 pt-2">

              {/* GitHub */}
              <a
                href="https://github.com/bhavijaiswal24"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                onClick={handleLinkClick}
                className="text-gray-300 transition duration-300 hover:scale-110 hover:text-cyan-400"
              >
                <FaGithub className="text-xl" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/bhavijaiswal8900"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                onClick={handleLinkClick}
                className="text-gray-300 transition duration-300 hover:scale-110 hover:text-cyan-400"
              >
                <FaLinkedin className="text-xl" />
              </a>

            </div>

            {/* Mobile Resume */}
            <a
              href="/Bhavi-Jaiswal-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="w-fit rounded-lg border border-cyan-400 px-4 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              Resume
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;