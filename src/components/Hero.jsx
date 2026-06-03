import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      <div
        className="
    absolute
    inset-0
    bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
    bg-size-[80px_80px]
    opacity-20
  "
      />
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
          className="flex flex-wrap gap-5 mt-12"
        >
          <a
            href="#projects"
            className="
      group
      relative
      overflow-hidden
      flex
      items-center
      gap-3
      px-8
      py-4
      rounded-2xl
      bg-gradient-to-r
      from-cyan-500
      via-blue-500
      to-purple-500
      font-semibold
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-[0_0_40px_rgba(59,130,246,0.35)]
    "
          >
            <span className="relative z-10">View Projects</span>

            <FaArrowRight
              className="
        relative
        z-10
        group-hover:translate-x-1
        transition
      "
            />
          </a>

          <a
            href="/Towhidur_Rahman_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="
      flex
      items-center
      gap-3
      px-8
      py-4
      rounded-2xl
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      hover:border-cyan-400/40
      hover:bg-white/10
      transition-all
      duration-300
    "
          >
            Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <div className="flex items-center gap-4 mt-12">
          <a
            href="https://github.com/Towhidur-Rahmaan"
            target="_blank"
            rel="noreferrer"
            className="
      group
      relative
      h-14
      w-14
      rounded-2xl
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      flex
      items-center
      justify-center
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-cyan-400/50
      hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
    "
          >
            <FaGithub className="text-xl group-hover:scale-110 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/towhidur-rahman-83b4aa15a/"
            target="_blank"
            rel="noreferrer"
            className="
      group
      relative
      h-14
      w-14
      rounded-2xl
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      flex
      items-center
      justify-center
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-blue-500/50
      hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
    "
          >
            <FaLinkedin className="text-xl group-hover:scale-110 transition" />
          </a>

          <div className="h-8 w-px bg-white/10 mx-2" />

          <span className="text-gray-500 text-sm tracking-wider">
            AVAILABLE FOR WORK
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 mt-20 max-w-3xl">
          <div
            className="group
bg-white/3
hover:bg-white/6
hover:-translate-y-2

transition-all
duration-500 border border-white/10 backdrop-blur-xl rounded-3xl p-6"
          >
            <h3 className="text-4xl font-bold">4+</h3>
            <p className="text-gray-400">Projects</p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
            <h3 className="text-4xl font-bold">1</h3>
            <p className="text-gray-400">Internship</p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
            <h3 className="text-4xl font-bold">1+</h3>
            <p className="text-gray-400">Client Project</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
