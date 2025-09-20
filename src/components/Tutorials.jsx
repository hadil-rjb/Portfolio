import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaYoutube, FaArrowRight } from "react-icons/fa";

const Tutorials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Tes vidéos (tu peux ajouter titre et description si tu veux)
  const videos = [
    {
      id: 1,
      videoUrl: "https://www.youtube.com/embed/Xsg16hwa-wk",
    },
    {
      id: 2,
      videoUrl: "https://www.youtube.com/embed/_5xsQBX_uTc",
    },
    {
      id: 3,
      videoUrl: "https://www.youtube.com/embed/2thUT3P9BJk",
    },
  ];

  return (
    <section id="tutorials" className="py-40 bg-gradient-to-b from-black via-[#D2A2FF40] to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            Video Tutorials
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-base lg:text-lg">
            Watch my latest tutorials directly here or visit my YouTube channel <span className="font-semibold text-[#D2A2FF]">Berbesha</span>.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: video.id * 0.2 }}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative w-full h-66">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-xl border border-white/20"
                  src={video.videoUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex justify-center">
          <a
            href="https://youtube.com/@berbasha_dil?si=AJ-GJ-Pd59meU5rx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D2A2FF] text-black font-semibold px-5 py-3 rounded-xl shadow-md hover:bg-white hover:text-black transition"
          >
            <FaYoutube className="text-2xl" />
            Visit My YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
