import { motion } from "framer-motion";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-blue-400 text-3xl mb-3">Education</p>

        <h2
          className="
            text-5xl
            md:text-7xl
            font-bold
            mb-16
          "
        >
          Learning &
          <br />
          Growth
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Academic */}

          <motion.div
            whileHover={{ y: -5 }}
            className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-[32px]
              p-8
            "
          >
            <FaGraduationCap
              className="
                text-5xl
                text-blue-400
                mb-6
              "
            />

            <h3 className="text-3xl font-bold">Bachelor of Science</h3>

            <p className="text-xl text-gray-300 mt-3">
              Computer Science & Engineering
            </p>

            <p className="text-blue-400 mt-4">
              Independent University Bangladesh(IUB)
            </p>

            <div className="mt-6">
              <span
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-white/10
                  text-sm
                "
              >
                Graduated: 2024
              </span>
            </div>

            <p className="text-gray-400 mt-6">
              Focused on software development, algorithms, databases, web
              technologies, and problem-solving.
            </p>
          </motion.div>

          {/* Continuous Learning */}

          <motion.div
            whileHover={{ y: -5 }}
            className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-[32px]
              p-8
            "
          >
            <FaBookOpen
              className="
                text-5xl
                text-purple-400
                mb-6
              "
            />

            <h3 className="text-3xl font-bold">Continuous Learning</h3>

            <p className="text-gray-400 mt-4">
              Technologies and concepts I am actively improving.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "TypeScript",
                "Next.js",
                "Tailwind CSS",
                "JWT",
                "Firebase",
                "REST API",
              ].map((skill) => (
                <span
                  key={skill}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-white/10
                    text-gray-300
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
