import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Formation from "./Formation";
import Experience from "./Experience";

const roles = [
  {
    main: "Computer Engineer",
    description: "software development & system design",
  },
  {
    main: "Web Developer",
    description: "building responsive & dynamic websites",
  },
  {
    main: "UI/UX Designer",
    description: "creating intuitive user experiences",
  },
  {
    main: "Product Designer",
    description: "designing innovative products",
  },
];

const Stage = [
  {
    main: "Computer Engineering Student",
    description: "seeking an internship to apply software development and system design skills",
  },
  {
    main: "Aspiring Web Developer",
    description: "interested in building responsive and dynamic web applications",
  },
  {
    main: "UI/UX Enthusiast",
    description: "aiming to create intuitive and user-friendly digital experiences",
  },
  {
    main: "Innovative Problem Solver",
    description: "looking to contribute to projects that combine creativity and technology",
  },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentStage = Stage[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 4000); // vitesse du scroll
    return () => clearInterval(interval);
  }, []);

  const currentRole = roles[currentIndex];

  return (
    <div id="about" className="py-20 bg-black text-white mb-34">
      <div className="container mx-auto px-4">
      <section className="hidden relative py-24 bg-black text-white overflow-hidden flex items-center mt-34 mb-34">
        <div className="container mx-auto max-w-5xl px-6 lg:px-0 text-center mt-14 mb-14 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-[clamp(1.6rem,4vw,3rem)] md:text-[clamp(2.5rem,5vw,3rem)] text-white/70 font-light leading-snug"
            >
              I'm a{" "}
              <span className="font-bold text-white">{currentRole.main}</span>{" "}
              specialising in {currentRole.description}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="relative py-24 bg-black text-white overflow-hidden flex items-center mt-34 mb-34">
        <div className="container mx-auto max-w-5xl  text-center mt-14 mb-14 relative">
          <motion.div
            key={currentIndex}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-[clamp(1.6rem,4vw,3rem)] md:text-[clamp(2.5rem,5vw,2rem)] text-white/70 font-light leading-snug"
          >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-[clamp(1.6rem,4vw,1rem)] md:text-[clamp(2.5rem,5vw,2rem)] text-white/70 font-light leading-snug"
            >
              <span className="font-bold text-white">{currentStage.main}</span>{" "}
              {currentStage.description}
            </motion.div>
          </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Formation />
      <Experience />
      </div>
    </div>
  );
};

export default About;
