import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const projects = [
  {
    title: "Car Doctor",
    desc: "Smart auto care service platform with authentication, booking management, and responsive user experience.",
    tech: ["React", "Node", "Express", "MongoDB", "Firebase", "JWT"],
    github: "https://github.com/yourusername/car-doctor",
    live: "https://car-doctor-11635.web.app",
    image: "https://i.ibb.co.com/M566YBf2/car-doctor.jpg",
  },

  {
    title: "Velvet Spoon",
    desc: "Modern cafe website featuring dynamic menus, responsive design, and engaging user interactions.",
    tech: ["React", "Express", "MongoDB", "Node.js", "Firebase", "JWT"],
    github: "https://github.com/yourusername/velvet-spoon",
    live: "https://velvet-spoon-007.web.app",
    image: "https://i.ibb.co.com/1fY7xDP2/velvet-spoon.jpg",
  },

  {
    title: "App Doctor",
    desc: "App store for windows and macOS with user reviews, ratings, and personalized recommendations.",
    tech: ["React", "Tailwind", "DaisyUI", "Firebase"],
    github: "https://github.com/yourusername/app-doctor",
    live: "https://flourishing-toffee-e05d3b.netlify.app",
    image: "https://i.ibb.co.com/v7JXbpq/app-doctor.jpg",
  },

  {
    title: "Xphere",
    desc: "Real-world immersive technology platform where I contributed to frontend development.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "#",
    live: "https://xphere-client.netlify.app",
    image: "https://i.ibb.co.com/S7tsCb11/x-phare.jpg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-blue-400 mb-3 text-3xl">Selected Work</p>

        <h2
          className="
            text-5xl
            md:text-7xl
            font-bold
            mb-16
          "
        >
          Featured Projects
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{
                scale: 1.02,
                y: -10,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                group
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-[32px]
                overflow-hidden
                hover:border-blue-500/30
                transition-all
                duration-500
              "
            >
              {/* Image */}

              <div className="overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Content */}

              <div className="p-8">
                <h3 className="text-3xl font-bold">{project.title}</h3>

                <p className="text-gray-400 mt-4">{project.desc}</p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-white/10
                        text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}

                <div className="flex gap-4 mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-full
                      bg-white
                      text-black
                      font-medium
                    "
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
    flex
    items-center
    gap-2
    px-5
    py-3
    rounded-full
    border
    border-white/20
    hover:bg-white/10
    transition-all
  "
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
