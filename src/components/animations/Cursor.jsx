import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 15, // pour centrer le cercle sur la souris
        y: position.y - 15,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
      className="fixed pointer-events-none z-50 w-8 h-8 rounded-full border-2 border-[#D2A2FF] bg-[#D2A2FF20] mix-blend-plus-lighter"
    />
  );
};

export default Cursor;
