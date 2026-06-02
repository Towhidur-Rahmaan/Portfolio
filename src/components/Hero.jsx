import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* Glow Background */}
      <div className="absolute top-20 left-10 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-purple-500/20 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-20 relative z-10 w-full">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            mb-8
          "
        >
          <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse " />
          Open To Work
        </motion.div>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            uppercase
            tracking-[0.4em]
            text-blue-400
            mb-6
          "
        >
          Towhidur Rahman
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
    text-5xl
    md:text-7xl
    xl:text-[7rem]
    font-black
    leading-[0.9]
    tracking-tight
  "
        >
          Crafting Modern
          <br />
          <span
            className="
      bg-linear-to-r
      from-cyan-400
      via-blue-500
      to-purple-500
      bg-clip-text
      text-transparent
    "
          >
            Web Experiences
          </span>
          <br />
          That People Love
        </motion.h1>

        {/* Typewriter */}
        <div className="mt-8 h-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-300">
            <Typewriter
              words={[
                "MERN Stack Developer",
                "Frontend Engineer",
                "React Specialist",
                "Building Modern Web Apps",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
            />
          </h2>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="
    max-w-3xl
    text-lg
    md:text-2xl
    text-gray-400
    mt-8
    leading-relaxed
  "
        >
          MERN Stack Developer with experience building responsive, scalable,
          and user-focused web applications. Passionate about transforming ideas
          into polished digital products using React, Node.js, Express.js, and
          MongoDB.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <a
            href="#projects"
            className="
              flex
              items-center
              gap-3
              px-8
              py-4
              rounded-full
              bg-white
              text-black
              font-semibold
              hover:scale-105
              transition
            "
          >
            View Projects
            <FaArrowRight />
          </a>

          <a
            href="/resume.pdf"
            className="
              px-8
              py-4
              rounded-full
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              hover:bg-white/10
              transition
            "
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <div className="flex gap-5 text-2xl mt-10">
          <a
            href="https://github.com/YOUR_GITHUB"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 mt-20 max-w-3xl">
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6">
            <h3 className="text-4xl font-bold">4+</h3>
            <p className="text-gray-400">Projects</p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6">
            <h3 className="text-4xl font-bold">1</h3>
            <p className="text-gray-400">Internship</p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6">
            <h3 className="text-4xl font-bold">1+</h3>
            <p className="text-gray-400">Client Project</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="
    absolute
    bottom-8
    left-1/2
    -translate-x-1/2
    z-50
    transition-all
    duration-500
    hidden lg:block
  "
      >
        <p
          className="
      text-xs
      tracking-[0.3em]
      uppercase
      text-gray-500
    "
        >
          Scroll
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
