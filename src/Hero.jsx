import React, { useRef, useState, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaReact, FaNodeJs, FaDownload } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import CursorGlow from "./CursorGlow";

const Hero = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const parallaxRef = useRef(null);
  const [darkMode, setDarkMode] = useState(true);
  const [showScrollIcon, setShowScrollIcon] = useState(true);

  const scrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    document.body.className = darkMode ? "bg-neutral-950" : "bg-white";

    const handleScroll = () => {
      setShowScrollIcon(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [darkMode]);

  const SectionDivider = ({ label }) => (
    <div className="relative w-72 mx-auto my-20 z-20">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-neutral-950 px-4 text-cyan-400 text-xs font-medium tracking-widest uppercase">
          ✦ {label} ✦
        </span>
      </div>
    </div>
  );

  return (
    <div className={`text-neutral-100 font-sans relative overflow-hidden transition-colors duration-500 ${darkMode ? "bg-neutral-950" : "bg-gray-100 text-black"}`}>
      <CursorGlow />

      {/* Top-Left Controls */}
      <div className="absolute top-4 left-4 z-50 flex flex-wrap items-center gap-3">
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-full text-xs tracking-widest text-purple-700 shadow-md"
        >
          <FaDownload />
          Download Resume
        </a>

        <button onClick={() => scrollTo(aboutRef)} className="bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-full text-xs tracking-widest text-cyan-400 shadow-md">
          About
        </button>
        <button onClick={() => scrollTo(skillsRef)} className="bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-full text-xs tracking-widest text-purple-400 shadow-md">
          Skills
        </button>
        <button onClick={() => scrollTo(contactRef)} className="bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-full text-xs tracking-widest text-pink-400 shadow-md">
          Contact
        </button>
      </div>

      {/* Top-Right Controls */}
      <div className="absolute top-4 right-6 flex items-center gap-4 z-20">
        <a href="https://instagram.com/ahmed.ali.786" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-500 hover:scale-110 transition-transform text-xl" />
        </a>
        <a href="https://facebook.com/AhmedAliKhan" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-blue-500 hover:scale-110 transition-transform text-xl" />
        </a>
        <a href="https://twitter.com/ahmedali7_86" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-sky-400 hover:scale-110 transition-transform text-xl" />
        </a>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-2 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-full text-xs text-white"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      {/* Hero Section */}
      <div ref={parallaxRef} className="relative min-h-screen px-6 pt-20 z-10 flex flex-col items-center justify-center text-center transition-all duration-75">
        <div className="relative w-44 h-44 mb-6 rounded-full overflow-hidden shadow-2xl hover:ring-4 hover:ring-purple-500 transition-all duration-300">
          <img
            src="/me.jpg"
            alt="My Profile"
            className="rounded-full w-full h-full object-cover"
          />
          <div className="absolute inset-0 rounded-full border-2 border-pink-400 animate-pulse blur-md opacity-30" />
        </div>

        <motion.h1 
          className="text-5xl sm:text-6xl font-extrabold mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ahmed Ali Khan
        </motion.h1>

        <motion.p
          className="text-md sm:text-lg text-gray-400 mb-4 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          🚀 Full Stack Web Developer | Futuristic UI Designer
        </motion.p>

        <motion.p
          className="text-base sm:text-lg font-light max-w-2xl text-gray-400 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I build modern, beautiful, and futuristic web apps using {" "}
          <span className="text-purple-400">React</span>, {" "}
          <span className="text-green-400">Node.js</span>, and {" "}
          <span className="text-sky-400">Tailwind CSS</span>.
        </motion.p>

        <motion.div
          className="flex justify-center gap-6 flex-wrap mt-4 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <FaReact className="text-cyan-400 text-3xl hover:scale-110 transition" title="React" />
          <FaNodeJs className="text-green-500 text-3xl hover:scale-110 transition" title="Node.js" />
          <SiTailwindcss className="text-sky-400 text-3xl hover:scale-110 transition" title="Tailwind" />
          <SiMongodb className="text-green-400 text-3xl hover:scale-110 transition" title="MongoDB" />
          <SiJavascript className="text-yellow-300 text-3xl hover:scale-110 transition" title="JavaScript" />
        </motion.div>

        {/* Scroll Indicator */}
        {showScrollIcon && (
          <div className="absolute bottom-6 left-6 animate-bounce">
            <span className="text-gray-400 text-xs">Scroll Down</span>
            <div className="w-1.5 h-6 bg-cyan-400 rounded-full mt-1 mx-auto" />
          </div>
        )}
      </div>

      {/* Sections */}
      <SectionDivider label="About Me" />
      <div ref={aboutRef}>
        <About />
      </div>

      <SectionDivider label="My Skills" />
      <div ref={skillsRef}>
        <Skills />
      </div>

      <SectionDivider label="Contact Me" />
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default Hero;
