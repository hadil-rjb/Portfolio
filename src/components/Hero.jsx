import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Youtube } from "lucide-react";

import { FaBehance } from "react-icons/fa";

import Particles from "./animations/Particles";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Computer Engineer",
    "Web Developer",
    "UI/UX Designer",
    "Product Designer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* animation as background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#B387DF30] to-black">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10 mt-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-white mb-8"
        >
          <span className="font-[100]">Hi there, I'm </span>
          <span className="bg-gradient-to-br from-[#D2A2FF] via-[#D2A2FF] to-white bg-clip-text text-transparent font-bold">
            Hadil Rejeb
          </span>
        </motion.div>

        <div className="text-xl lg:text-2xl mb-8 h-12 text-white/80 mt-6">
          <motion.span
            key={currentRole}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="block"
          >
            {roles[currentRole]}
          </motion.span>
        </div>

        {/* Social Media Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute right-4 top-3/3 flex flex-col gap-4 z-10
             md:top-2/3 sm:top-[60%]"
        >
          <a
            href="https://www.linkedin.com/in/hadil-rejeb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-white/10 text-white rounded-full 
               hover:bg-[#0077B5] hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/hadil-rjb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-white/10 text-white rounded-full 
               hover:bg-[#333] hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://youtube.com/@berbasha_dil?si=USYEUEvhThoRFIFa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-white/10 text-white rounded-full 
               hover:bg-[#FF0000] hover:text-white transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>
          <a
            href="https://www.behance.net/hadilrejeb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-white/10 text-white rounded-full 
               hover:bg-[#1769FF] hover:text-white transition-colors"
            aria-label="Behance"
          >
            <FaBehance size={20} />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white hover:text-purple-300 transition-colors"
        aria-label="Scroll to About section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
