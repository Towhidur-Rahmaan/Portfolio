import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaLaptopCode } from "react-icons/fa";

const experiences = [
  {
    company: "Mediusware",
    role: "MERN Stack Developer Intern",
    duration: "Oct 2024 - Dec 2024",
    description:
      "Worked on full-stack web applications using React, Node.js, Express.js, and MongoDB. Collaborated with developers, implemented responsive UI components, integrated APIs, and gained experience with real-world development workflows.",
  },

  {
    company: "Xphere",
    role: "Frontend Developer (Client Project)",
    duration: "2025",
    description:
      "Contributed to the frontend development of an immersive technology platform. Built responsive sections, improved UI/UX, and implemented modern React and Tailwind CSS components.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-blue-400 text-3xl mb-3">Experience</p>

        <h2
          className="
            text-5xl
            md:text-7xl
            font-bold
            mb-20
          "
        >
          Building Real
          <br />
          World Solutions
        </h2>

        <div className="relative">
          {/* Timeline Line */}

          <div
            className="
              absolute
              left-5
              top-0
              h-full
              w-[2px]
              bg-white/10
            "
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
              }}
              className="
                relative
                pl-16
                mb-12
              "
            >
              {/* Timeline Dot */}

              <div
                className="
                  absolute
                  left-0
                  top-3
                  h-10
                  w-10
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  to-purple-500
                  flex
                  items-center
                  justify-center
                "
              >
                <FaBriefcase />
              </div>

              {/* Card */}

              <div
                className="
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-[32px]
                  p-8
                  hover:border-blue-500/30
                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    md:flex-row
                    md:justify-between
                    md:items-center
                    gap-4
                  "
                >
                  <div>
                    <h3 className="text-3xl font-bold">{exp.role}</h3>

                    <p className="text-blue-400 mt-2">{exp.company}</p>
                  </div>

                  <span
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-white/10
                      text-sm
                    "
                  >
                    {exp.duration}
                  </span>
                </div>

                <p
                  className="
                    text-gray-400
                    mt-6
                    leading-relaxed
                  "
                >
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Cards */}

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <div
            className="
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              rounded-[32px]
              p-8
            "
          >
            <FaCode className="text-4xl mb-4 text-blue-400" />

            <h3 className="text-4xl font-bold">4+</h3>

            <p className="text-gray-400 mt-2">Full-Stack Projects</p>
          </div>

          <div
            className="
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              rounded-[32px]
              p-8
            "
          >
            <FaLaptopCode className="text-4xl mb-4 text-purple-400" />

            <h3 className="text-4xl font-bold">1</h3>

            <p className="text-gray-400 mt-2">Internship Experience</p>
          </div>

          <div
            className="
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              rounded-[32px]
              p-8
            "
          >
            <FaBriefcase className="text-4xl mb-4 text-cyan-400" />

            <h3 className="text-4xl font-bold">1+</h3>

            <p className="text-gray-400 mt-2">Client Project</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
