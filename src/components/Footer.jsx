import { FaGithub, FaLinkedinIn, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">

        {/* Logo / Name */}
        <div className="text-center md:text-left">
          <a
            href="#home"
            className="text-2xl font-bold"
          >
            Bhavi<span className="text-cyan-400">.</span>
          </a>

          <p className="mt-1 text-sm text-gray-500">
            Full Stack Developer
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">

          <a
            href="https://github.com/bhavijaiswal24"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-gray-700 p-3 text-gray-400 transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/bhavijaiswal8900/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-gray-700 p-3 text-gray-400 transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaLinkedinIn size={18} />
          </a>

        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Bhavi Jaiswal
          </p>

          <p className="mt-1 flex items-center justify-center gap-1">
            Made with <FaHeart className="text-cyan-400" /> using React
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;