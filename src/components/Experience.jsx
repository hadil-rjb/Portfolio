import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, MapPin } from "lucide-react";

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [visibleCount, setVisibleCount] = useState(2); // afficher 2 cards initialement

  const experiences = [
    {
      id: 1,
      title: "Summer Internship",
      company: "UX Boğa",
      period: "July 2025 - August 2025",
      location: "Remote",
      description: "Built an AI-powered UI/UX feedback platform.",
      achievements: [
        "Developed interactive prototypes and dashboards",
        "Implemented React.js and Tailwind CSS for responsive design",
      ],
      technologies: ["React.js", "Node.js", "Tailwind CSS", "MongoDB", "APIs"],
    },
    {
      id: 2,
      title: "UX Boğa | Fintech Marketing Solution",
      company: "UX Boğa",
      location: "Remote",
      roles: [
        {
          position: "Senior Product Designer",
          period: "Sept 2025 – Present",
          description:
            "Design intuitive fintech products that enhance user experience.",
          achievements: [
            "Redesigned dashboards to improve usability",
            "Created scalable design systems",
            "Aligned UX with business objectives",
          ],
        },
        {
          position: "UI Designer",
          period: "Aug 2024 – Sept 2025",
          description:
            "Designed user-friendly interfaces for mobile and web applications.",
          achievements: [
            "Delivered clean, accessible UI designs",
            "Collaborated with developers for pixel-perfect results",
          ],
        },
      ],
      technologies: ["Figma", "Framer", "Branding"],
    },
    {
      id: 3,
      title: "Design Agent",
      company: "GDG On Campus – EPI",
      period: "Dec 2024 – Present",
      location: "Sousse, Tunisia",
      description:
        "Designed visual identities and communication assets for tech events.",
      achievements: [
        "Created branding and promotional materials for 5+ events",
        "Boosted engagement with social media assets",
      ],
      technologies: ["Figma", "Canva"],
    },
    {
      id: 4,
      title: "End-of-Studies Internship",
      company: "Vitalait",
      period: "Feb 2023 – Jun 2023",
      location: "Mahdia, Tunisia",
      description: "Developed dynamic web projects using modern frameworks.",
      achievements: [
        "Built responsive web modules with Laravel and Tailwind CSS",
        "Optimized database queries and UI performance",
      ],
      technologies: ["Laravel", "Tailwind CSS", "MySQL", "Git"],
    },
    {
      id: 5,
      title: "Summer Internship",
      company: "Compagnie des Phosphates de Gafsa (CPG)",
      period: "Aug 2022",
      location: "Gafsa, Tunisia",
      description: "Worked on web design and front-end development projects.",
      achievements: [
        "Built prototypes and layouts with Angular",
        "Gained practical experience in front-end frameworks",
      ],
      technologies: ["Angular", "SpringBoot", "HTML", "CSS", "MySQL"],
    },
  ];

  // Fonction pour afficher plus de cards
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 2); // ajoute 2 cards supplémentaires à chaque clic
  };

  return (
    <section className="py-24 bg-black text-white relative">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            Professional Experience
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-base lg:text-lg">
            From internships to full-time roles, discover how I’ve contributed
            to impactful projects and honed my skills in design and development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative h-full">
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute hidden lg:block left-6 lg:left-1/2 transform lg:-translate-x-1/2 bottom-0 w-1 bg-[#B387DF]"
          />

          {/* Flèche en haut qui suit la ligne */}
          <motion.div
            initial={{ bottom: 0 }}
            animate={inView ? { bottom: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute hidden lg:block -top-5 left-6 lg:left-1/2 transform lg:-translate-x-1/2 w-0 h-0 border-l-10 border-l-transparent border-r-10 border-r-transparent border-b-16 border-b-[#B387DF]"
          />

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.slice(0, visibleCount).map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute hidden lg:block left-6 lg:left-1/2 transform lg:-translate-x-1/2 w-6 h-6 bg-[#D2A2FF] rounded-full border-4 border-black shadow-lg z-10" />

                {/* Card */}
                <div
                  className={`w-full lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                  }`}
                >
                  <div className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10 hover:border-[#D2A2FF]/50 hover:bg-[#D2A2FF20] transition-all">
                    {/* Title & Company */}
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {exp.title}
                    </h3>
                    <p className="text-gray-300 font-semibold mb-3">
                      {exp.company}
                    </p>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>

                    {/* Roles or Description */}
                    {exp.roles ? (
                      exp.roles.map((role, idx) => (
                        <div key={idx} className="mb-5">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[#D2A2FF] font-semibold">
                              {role.position}
                            </span>
                            <span className="text-gray-400 text-sm">
                              {role.period}
                            </span>
                          </div>
                          <p className="text-gray-400 mb-2">
                            {role.description}
                          </p>
                          <ul className="list-disc list-inside text-gray-400 space-y-1">
                            {role.achievements.map((a, i) => (
                              <li key={i}>{a}</li>
                            ))}
                          </ul>
                        </div>
                      ))
                    ) : (
                      <>
                        <p className="text-gray-400 mb-5 leading-relaxed">
                          {exp.description}
                        </p>
                        <div className="mb-5">
                          <h4 className="font-semibold text-white mb-2">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((a, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-gray-400"
                              >
                                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[#1a1a1a] border border-[#D2A2FF]/30 text-gray-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* See More Button */}
        {visibleCount < experiences.length && (
          <div className="flex justify-center mt-16">
            <motion.button
              onClick={handleShowMore}
              className="px-6 py-3 rounded-xl bg-white/10 border border-[#D2A2FF] bg-white/5 text-[#D2A2FF] font-semibold shadow-lg hover:bg-[#D2A2FF] hover:text-black transition-all"
            >
              See More
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
