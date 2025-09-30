import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, X, Search } from "lucide-react";
import { FaBehance } from "react-icons/fa";
import { projects } from "../data/Projects";

const AllProjects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  // filtrage des projets
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(search.toLowerCase())
      );
    const matchesFilter = filter === "all" || project.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <section
      id="projects"
      className="py-20 text-white min-h-screen mt-16 mb-16"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#B387DF30] to-black"></div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
            All Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Explore all my projects in web development and UI/UX design.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute top-3 left-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-lg bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B19EEF] transition-all"
            />
          </div>

          <div className="flex gap-3">
            {["all", "dev", "design"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-xl font-semibold transition-colors ${
                  filter === type
                    ? "bg-[#D2A2FF] text-black"
                    : "bg-[#1a1a1a] text-gray-300 border border-white/10 hover:bg-white/20"
                }`}
              >
                {type === "all"
                  ? "All"
                  : type === "dev"
                  ? "Development"
                  : "Design"}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de projets */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
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
                    className="w-full h-[220px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
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
                        className="px-3 py-1 bg-[#1a1a1a] border border-[#B19EEF]/30 text-gray-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400 text-lg italic">
            Aucun projet trouvé.
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#111111] border border-white/20 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Close button */}
            <div className="sticky top-0 z-20 flex justify-between items-center bg-[#111111] p-6">
              <h1 className="text-3xl font-bold text-white">
                {selectedProject.title}
              </h1>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              {selectedProject.preview &&
                (selectedProject.preview.includes("cloudinary.com") ? (
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
                  />
                ) : (
                  <img
                    src={selectedProject.preview}
                    alt={selectedProject.title}
                    className="w-full rounded-lg mb-4"
                  />
                ))}
              <p className="text-gray-400 mb-6">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#1a1a1a] border border-[#B19EEF]/30 text-gray-200 text-sm rounded-full"
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

export default AllProjects;
