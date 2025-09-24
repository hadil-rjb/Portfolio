import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaYoutube } from "react-icons/fa";

const Tutorials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  // État de chargement pour chaque vidéo
  const [loadingVideos, setLoadingVideos] = useState(
    videos.reduce((acc, video) => ({ ...acc, [video.id]: true }), {})
  );

  const handleVideoLoad = (id) => {
    setLoadingVideos((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <section
      id="tutorials"
      className="py-40 bg-gradient-to-b from-black via-[#D2A2FF40] to-black"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
            My Video Tutorials
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-base lg:text-lg">
            I love creating tutorials to share my passion and help others learn
            step by step. Here, I show you how to do cool things in a simple
            way. You can also visit my YouTube channel{" "}
            <span className="font-semibold text-[#D2A2FF]">Berbesha</span> for
            more videos.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: video.id * 0.2 }}
              className="rounded-xl bg-white/5 overflow-hidden shadow-lg hover:shadow-2xl transition-all relative"
            >
              <div className="relative w-full h-66">
                {loadingVideos[video.id] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                    <div className="loader border-t-4 border-b-4 border-[#D2A2FF] w-12 h-12 rounded-full animate-spin"></div>
                  </div>
                )}
                <iframe
                  className="absolute inset-0 w-full h-full rounded-xl border border-white/20"
                  src={video.videoUrl}
                  title={`Video ${video.id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={() => handleVideoLoad(video.id)}
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

      {/* Loader CSS */}
      <style>
        {`
          .loader {
            border-radius: 50%;
            border-top-color: transparent;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </section>
  );
};

export default Tutorials;
