import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Tutorials from '../components/Tutorials';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Tutorials />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Home;