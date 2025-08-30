import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar({ dark, setDark }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-extrabold bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent tracking-wide"
        >
          Alex Khanal<span className="animate-pulse">_</span>
        </a>

        {/* Nav Links */}
        <div className="flex items-center gap-8 font-semibold tracking-wide">
          <a href="#about" className="hover:text-indigo-200 transition-colors">About</a>
          <a href="#skills" className="hover:text-indigo-200 transition-colors">Skills</a>
          <a href="#services" className="hover:text-indigo-200 transition-colors">Services</a>
          <a href="#contact" className="hover:text-indigo-200 transition-colors">Contact</a>

          {/* Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className={`relative w-20 h-10 flex items-center rounded-full transition-colors ${
              dark ? "bg-indigo-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute left-1 w-8 h-8 bg-white rounded-full shadow-md transform transition-transform flex items-center justify-center text-yellow-400 ${
                dark ? "translate-x-10" : "translate-x-0"
              }`}
            >
              {dark ? <FaMoon /> : <FaSun />}
            </span>
            <span className="absolute left-3 text-yellow-400 text-sm pointer-events-none"><FaSun /></span>
            <span className="absolute right-3 text-gray-800 text-sm pointer-events-none"><FaMoon /></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
