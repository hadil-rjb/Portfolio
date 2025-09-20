import React from "react";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Formation = () => {
  const education = [
    {
      title: "High School Diploma in Economics & Management",
      institution: "Lycée Elegetar, Gafsa",
      period: "2019 - 2020",
      description: "",
    },
    {
      title: "Bachelor’s Degree in Business Computing",
      institution: "Higher Institute of Computer Science of Mahdia",
      period: "2020 - 2023",
      description: "Specialization in Business Intelligence.",
    },
    {
      title: "Computer Engineering Degree",
      institution: "EPI Digital School, Sousse",
      period: "2023 - Present",
      description: "Specialization in Software Engineering",
    },
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-24 bg-black text-white overflow-x-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
          Formation Académique
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-base lg:text-lg">
          From high school to a Computer Engineering degree, my academic journey
          reflects my passion for learning and growth.
        </p>
      </motion.div>

      <div className="container mx-auto max-w-7xl relative">
        {/* SVG Ligne Wavy avec flèches */}
        <svg
          className="hidden xl:block absolute top-10 left-0 w-full h-20"
          viewBox="0 0 1000 50"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0 35 Q100 -08 200 25 T400 28 T600 20 T800 20 T1000 05"
            fill="transparent"
            stroke="#D2A2FF"
            strokeWidth="3"
            strokeLinecap="round"
            markerEnd="url(#arrow)"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>

        <motion.div
          ref={ref}
          className="flex flex-col items-center space-y-12 xl:flex-row xl:space-x-12 xl:space-y-0 relative xl:py-16 justify-center"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="relative w-full"
            >
              {/* Dot */}
              <div className="hidden xl:block absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#D2A2FF] rounded-full border-4 border-black shadow-lg z-10"></div>

              {/* Card */}
              <div className="xl:mt-20 bg-white/5 p-6 h-auto xl:min-h-[240px] rounded-xl shadow-lg hover:bg-[#D2A2FF20] hover:border-[#D2A2FF60] transition-shadow border border-white/20">
                <div className="flex items-center space-x-2 mb-3">
                  <GraduationCap className="text-[#B387DF]" size={20} />
                  <span className="text-[#D2A2FF] font-semibold">
                    {edu.period}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {edu.title}
                </h4>
                <p className="text-gray-300 font-semibold mb-3">
                  {edu.institution}
                </p>
                <p className="text-gray-400">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Formation;
