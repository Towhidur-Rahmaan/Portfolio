import { useState, useEffect } from "react";
import { FaEye, FaDownload, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`
        fixed top-6 left-1/2 -translate-x-1/2 z-50
        transition-all duration-500
        ${scrolled ? "w-[90%]" : "w-[95%]"}
      `}
    >
      <nav className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4">
        {/* TOP BAR */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="font-bold text-xl tracking-wider">
            TR.
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="hover:opacity-70">
              About
            </a>
            <a href="#experience" className="hover:opacity-70">
              Experience
            </a>
            <a href="#projects" className="hover:opacity-70">
              Projects
            </a>
            <a href="#contact" className="hover:opacity-70">
              Contact
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/Towhidur_Rahman_CV.pdf"
              target="_blank"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black font-semibold"
            >
              <FaEye /> Resume
            </a>

            <a
              href="/Towhidur_Rahman_CV.pdf"
              download
              className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5"
            >
              <FaDownload /> CV
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* 🌟 MODERN MOBILE MENU */}
        {/* 🌟 CLEAN MOBILE MENU */}
        <div
          className={`
    md:hidden overflow-hidden transition-all duration-500
    ${open ? "max-h-[500px] mt-4" : "max-h-0"}
  `}
        >
          <div className="bg-black/40 border border-white/10 rounded-2xl p-4 space-y-2">
            {/* Links */}
            {[
              { name: "About", link: "#about" },
              { name: "Experience", link: "#experience" },
              { name: "Projects", link: "#projects" },
              { name: "Contact", link: "#contact" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                onClick={() => setOpen(false)}
                className="
          block px-4 py-3 rounded-xl
          text-white/80
          hover:text-white
          hover:bg-white/10
          transition-all
        "
              >
                {item.name}
              </a>
            ))}

            {/* Divider */}
            <div className="h-px bg-white/10 my-2" />

            {/* Buttons */}
            <a
              href="/Towhidur_Rahman_CV.pdf"
              target="_blank"
              onClick={() => setOpen(false)}
              className="
        flex items-center justify-center gap-2
        px-4 py-3 rounded-xl
        bg-white text-black font-semibold
      "
            >
              <FaEye /> View Resume
            </a>

            <a
              href="/Towhidur_Rahman_CV.pdf"
              download
              onClick={() => setOpen(false)}
              className="
        flex items-center justify-center gap-2
        px-4 py-3 rounded-xl
        border border-white/10 bg-white/5
      "
            >
              <FaDownload /> Download CV
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
