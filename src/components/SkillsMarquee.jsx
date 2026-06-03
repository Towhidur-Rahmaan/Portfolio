import { FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiVercel,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <FaReact className="text-cyan-400 text-5xl" />,
    desc: "Building modern interactive UIs",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500 text-5xl" />,
    desc: "Scalable backend development",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600 text-5xl" />,
    desc: "NoSQL database management",
  },
  {
    name: "Express",
    icon: <SiExpress className="text-gray-300 text-5xl" />,
    desc: "REST API development",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-sky-400 text-5xl" />,
    desc: "Modern UI styling",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 text-5xl" />,
    desc: "ES6+ & frontend logic",
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-500 text-5xl" />,
    desc: "Authentication & hosting",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-500 text-5xl" />,
    desc: "Version control workflow",
  },
  {
    name: "Vercel",
    icon: <SiVercel className="text-white text-5xl" />,
    desc: "Deployment & CI/CD",
  },
  {
    name: "Figma",
    icon: <FaFigma className="text-pink-500 text-5xl" />,
    desc: "UI/UX collaboration",
  },
];

const SkillsMarquee = () => {
  return (
    <section id="skills" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-blue-400 text-xl mb-4">Technologies</p>

        <h2
          className="
            text-5xl
            md:text-7xl
            font-black
            mb-16
          "
        >
          My Tech Stack
        </h2>

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();

                e.currentTarget.style.setProperty(
                  "--x",
                  `${e.clientX - rect.left}px`,
                );

                e.currentTarget.style.setProperty(
                  "--y",
                  `${e.clientY - rect.top}px`,
                );
              }}
              className="
      skill-card
      group
      relative
      overflow-hidden
      rounded-4xl
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      p-8
      transition-all
      duration-500
      hover:-translate-y-3
      hover:scale-[1.02]
hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
    "
            >
              {/* Mouse Follow Glow */}

              <div className="mouse-glow"></div>

              {/* Gradient Overlay */}

              <div
                className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-500
        bg-linear-to-br
        from-cyan-500/5
        via-blue-500/5
        to-purple-500/5
      "
              />

              {/* Content */}

              <div className="relative z-10">
                <div
                  className="
          mb-6
          transition-transform
          duration-500
          group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]
        "
                >
                  {skill.icon}
                </div>

                <h3
                  className="
          text-2xl
          font-bold
          mb-3
        "
                >
                  {skill.name}
                </h3>

                <p className="text-gray-400 leading-relaxed">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
