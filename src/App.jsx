import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsMarquee from "./components/SkillsMarquee";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Spotlight from "./components/Spotlight";
import Contact from "./components/Content";
import Education from "./components/Education";

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden relative">
      {/* Spotlight */}
      <Spotlight />

      {/* Background Gradients */}

      <div
        className="
          fixed
          top-0
          left-0
          w-[700px]
          h-[700px]
          bg-blue-500
          blur-[180px]
          opacity-10
          pointer-events-none
        "
      />

      <div
        className="
          fixed
          bottom-0
          right-0
          w-[700px]
          h-[700px]
          bg-purple-500
          blur-[180px]
          opacity-10
          pointer-events-none
        "
      />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <SkillsMarquee />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
