const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="font-bold text-xl">Towhidur Rahman</h3>
          <p className="text-gray-500 text-sm">MERN Stack Developer</p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://github.com/Towhidur-Rahmaan"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/towhidur-rahman-83b4aa15a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
