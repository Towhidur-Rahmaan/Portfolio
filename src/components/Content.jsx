import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-[40px]
            p-10
            md:p-16
            text-center
          "
        >
          <p className="text-blue-400 text-2xl">Get In Touch</p>

          <h2
            className="
              text-5xl
              md:text-7xl
              font-black
              mt-4
              leading-tight
            "
          >
            Let's Build
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
              Something Amazing
            </span>
          </h2>

          <p
            className="
              text-gray-400
              mt-8
              max-w-2xl
              mx-auto
              text-lg
            "
          >
            I'm currently open to junior developer roles, freelance projects,
            and exciting collaborations.
          </p>

          {/* Email Button */}

          <a
            href="mailto:shaontalukdar0@gmail.com"
            className="
              inline-block
              mt-10
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
            Send Me An Email
          </a>

          {/* Social Links */}

          <div
            className="
              flex
              justify-center
              gap-6
              mt-12
            "
          >
            <a
              href="https://github.com/Towhidur-Rahmaan"
              target="_blank"
              rel="noopener noreferrer"
              className="
                h-16
                w-16
                rounded-full
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                text-2xl
                hover:scale-110
                hover:border-blue-500
                transition-all
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/towhidur-rahman-83b4aa15a/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                h-16
                w-16
                rounded-full
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                text-2xl
                hover:scale-110
                hover:border-blue-500
                transition-all
              "
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:shaontalukdar0@gmail.com"
              className="
                h-16
                w-16
                rounded-full
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                text-2xl
                hover:scale-110
                hover:border-blue-500
                transition-all
              "
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
