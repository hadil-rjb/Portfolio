import React from "react";
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AllProjects from "../components/AllProjects";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Header />
      <main>
        <AllProjects />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Projects;
