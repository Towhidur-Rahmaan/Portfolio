const skills = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind",
  "JavaScript",
  "Git",
  "Firebase",
];

const SkillsMarquee = () => {
  return (
    <section className="py-10 border-y border-white/10 overflow-hidden">
      <div
        className="
      flex
      gap-16
      whitespace-nowrap
      animate-[scroll_20s_linear_infinite]
    "
      >
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <span
            key={index}
            className="
                text-3xl
                font-bold
                text-white/30
              "
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillsMarquee;
