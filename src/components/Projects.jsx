import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, X } from "lucide-react";
import { FaBehance } from "react-icons/fa";
import { projects } from "../data/Projects";

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState(null);

  const displayedProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-black text-white mb-34">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
            My Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Explore my work in web development and UI/UX design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:border-white/20"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative group overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.type === "dev" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  ) : (
                    <a
                      href={project.behance}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors"
                    >
                      <FaBehance size={20} />
                    </a>
                  )}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 hidden bg-[#D2A2FF] rounded-full text-black hover:bg-[#b58ff2] transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed line-clamp-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#1a1a1a] border border-[#D2A2FF]/30 text-gray-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <motion.button
            className="px-6 py-3 rounded-xl border border-[#D2A2FF] bg-white/5 text-[#D2A2FF] font-semibold shadow-lg hover:bg-[#D2A2FF] hover:text-black transition-all"
            onClick={() => (window.location.href = "/projects")}
          >
            See More
          </motion.button>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#111111] border border-white/20 rounded-xl max-w-3xl w-full overflow-hidden relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 text-white rounded-full hover:bg-white/20"
            >
              <X size={20} />
            </button>
            <div className="p-6 mt-8">
              {/* Video ou Image */}
              {selectedProject.preview && (
                selectedProject.preview.includes("cloudinary.com") ? (
                  <iframe
                    src={selectedProject.preview}
                    width="100%"
                    height="400"
                    className="rounded-lg mb-4"
                    allow="autoplay; fullscreen; encrypted-media"
                    allowFullScreen
                    frameBorder="0"
                    title={selectedProject.title}
                  />
                ) : selectedProject.preview.endsWith(".mp4") ? (
                  <video
                    src={selectedProject.preview}
                    controls
                    className="w-full rounded-lg mb-4"
                    onError={(e) => {
                      // si la vidéo ne se charge pas, on remplace par l'image
                      e.target.style.display = "none";
                      const img = document.createElement("img");
                      img.src = selectedProject.image;
                      img.alt = selectedProject.title;
                      img.className = "w-full rounded-lg mb-4";
                      e.target.parentNode.insertBefore(
                        img,
                        e.target.nextSibling
                      );
                    }}
                  />
                ) : (
                  <img
                    src={selectedProject.preview}
                    alt={selectedProject.title}
                    className="w-full rounded-lg mb-4"
                  />
                )
              )}

              <h3 className="text-2xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
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
        </div>
      )}
    </section>
  );
};

export default Projects;