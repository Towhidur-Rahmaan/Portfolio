import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { BsClaude } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";
import { RiVercelLine } from "react-icons/ri";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import { FiFramer } from "react-icons/fi";
import { AiOutlineOpenAI } from "react-icons/ai";

const About = () => {
  return (
    <section id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-blue-400 mb-3 text-3xl">About Me</p>

        <h2
          className="
            text-5xl
            md:text-7xl
            font-bold
            mb-16
          "
        >
          More Than Just
          <br />
          Code.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Story */}

          <motion.div
            whileHover={{
              y: -5,
            }}
            className="
              md:col-span-2
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-[32px]
              p-8
            "
          >
            <h3 className="text-3xl font-bold">My Journey</h3>

            <p className="text-gray-400 mt-6 leading-relaxed">
              I started my journey learning JavaScript and gradually moved into
              full-stack development using React, Node.js, Express.js, and
              MongoDB.
              <br />
              <br />
              During my internship at Mediusware, I gained experience working on
              real-world projects, collaborating with teams, and building
              scalable web applications.
              <br />
              <br />
              Today, I focus on creating fast, responsive, and modern web
              experiences that solve real problems.
            </p>
          </motion.div>

          {/* Projects */}

          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-[32px]
              p-8
            "
          >
            <h3
              className="
                text-6xl
                font-black
                bg-gradient-to-r
                from-blue-400
                to-purple-500
                bg-clip-text
                text-transparent
              "
            >
              4+
            </h3>

            <p className="text-gray-400 mt-4">Featured MERN Projects</p>
          </motion.div>

          {/* Internship */}

          <motion.div
            whileHover={{
              y: -5,
            }}
            className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-[32px]
              p-8
            "
          >
            <h3 className="text-2xl font-bold">Experience</h3>

            <p className="text-blue-400 mt-4">Mediusware</p>

            <p className="text-gray-400 mt-2">MERN Stack Intern</p>

            <p className="text-gray-500 mt-4">Oct 2024 - Dec 2024</p>
          </motion.div>

          {/* Tech Stack */}

          <motion.div
            whileHover={{
              y: -5,
            }}
            className="
              md:col-span-2
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-[32px]
              p-8
            "
          >
            <h3 className="text-2xl font-bold">Technologies I Work With</h3>

            <div
              className="
                flex
                flex-wrap
                gap-6
                mt-8
                text-5xl
              "
            >
              <FaReact />

              <FaNodeJs />

              <SiExpress />

              <RiNextjsLine />

              <SiMongodb />

              <SiTailwindcss />

              <FaGithub />
              <BsClaude />
              <SiNetlify />
              <RiVercelLine />
              <PiFigmaLogoDuotone />
              <FiFramer />
              <AiOutlineOpenAI />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
