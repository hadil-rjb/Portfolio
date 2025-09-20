import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [currentIndex, setCurrentIndex] = useState(null);

  const certificates = [
    { id: 1, image: "/Certificates/UIUXDesign-1.png" },
    { id: 2, image: "/Certificates/Html,css,js-1.png" },
    { id: 3, image: "/Certificates/CertificatDaccomplissement_Les fondements de la programmation-1.png" },
    { id: 4, image: "/Certificates/CertificatDaccomplissement_Lessentiel du HTML5 -1.png" },
    { id: 5, image: "/Certificates/CertificateOfCompletion_Decouvrir lIA generative-1.png" },
    { id: 6, image: "/Certificates/certificat2-1.png" },
    { id: 7, image: "/Certificates/UIDesigner-1.png" },
    { id: 8, image: "/Certificates/UXResearch-1.png" },
    { id: 9, image: "/Certificates/Python-1.png" },
    { id: 10, image: "/Certificates/AWS-1.png" },
  ];

  const openCert = (index) => setCurrentIndex(index);
  const closeCert = () => setCurrentIndex(null);

  const prevCert = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const nextCert = () => {
    setCurrentIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1
    );
  };

  // 🎹 Keyboard navigation
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextCert();
      if (e.key === "ArrowLeft") prevCert();
      if (e.key === "Escape") closeCert();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const MarqueeCertificates = ({ direction = "left", speed = 40 }) => {
    const [isPaused, setIsPaused] = useState(false);
    const duplicated = [...certificates, ...certificates];
    const xValue = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];

    return (
      <motion.div className="w-full overflow-hidden py-4">
        <motion.div
          className="flex gap-6 w-max"
          animate={isPaused ? {} : { x: xValue }}
          transition={{
            repeat: Infinity,
            duration: speed,
            ease: "linear",
          }}
        >
          {duplicated.map((cert, index) => (
            <motion.div
              key={`${cert.id}-${index}`}
              whileHover={{ y: -10, scale: 1.05 }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg cursor-pointer w-[300px] flex-shrink-0"
              onClick={() => openCert(index % certificates.length)}
            >
              <img
                src={cert.image}
                alt={`Certificate ${cert.id}`}
                className="w-full h-50 object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="certificates" className="py-20 bg-black text-white">
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
            Certificates & Trainings
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-base lg:text-lg">
            My certifications and trainings to stay up-to-date with the latest technologies
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
          <MarqueeCertificates direction="left" speed={45} />
          <MarqueeCertificates direction="right" speed={50} />
        </div>

        {/* Modal */}
        {currentIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeCert}
          >
            {/* Prev button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevCert();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-black/60 text-white rounded-full hover:bg-black/80"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Modal box */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative bg-black/90 border border-white/20 rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeCert}
                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70"
              >
                <X size={20} />
              </button>

              <img
                src={certificates[currentIndex].image}
                alt={`Certificate ${certificates[currentIndex].id}`}
                className="w-full h-auto object-contain max-h-[80vh]"
              />
            </motion.div>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextCert();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-black/60 text-white rounded-full hover:bg-black/80"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
