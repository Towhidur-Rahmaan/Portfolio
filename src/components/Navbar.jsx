import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed
        top-6
        left-1/2
        -translate-x-1/2
        z-50
        transition-all
        duration-500
        ${scrolled ? "w-[90%]" : "w-[95%]"}
      `}
    >
      <nav
        className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-full
          px-8
          py-4
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          {/* Logo */}

          <a
            href="#home"
            className="
              font-bold
              text-xl
              tracking-wider
              
    relative
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-white
    after:transition-all
    hover:after:w-full
  "
          >
            TR.
          </a>

          {/* Links */}

          <div
            className="
              hidden
              md:flex
              items-center
              gap-8
            "
          >
            <a
              href="#about"
              className="
    relative
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-white
    after:transition-all
    hover:after:w-full
  "
            >
              About
            </a>

            <a
              href="#experience"
              className="
    relative
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-white
    after:transition-all
    hover:after:w-full
  "
            >
              Experience
            </a>

            <a
              href="#projects"
              className="
    relative
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-white
    after:transition-all
    hover:after:w-full
  "
            >
              Projects
            </a>

            <a
              href="#contact"
              className="
    relative
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-white
    after:transition-all
    hover:after:w-full
  "
            >
              Contact
            </a>
          </div>

          {/* Button */}

          <a
            href="/resume.pdf"
            className="
            
    relative
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-white
    after:transition-all
    hover:after:w-full
  
              bg-white
              text-black
              px-5
              py-2
              rounded-full
              font-medium
            "
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
