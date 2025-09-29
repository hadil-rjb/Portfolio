import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Upload } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [isDownloading, setIsDownloading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Tutorials", href: "#tutorials" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/"); // retour à la home
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 500); 
    } else {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    setIsDownloading(true);

    const link = document.createElement("a");
    link.href = "/CV/Hadil_Rejeb_CV.pdf";
    link.download = "Hadil_Rejeb_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setIsDownloading(false), 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(item.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity" />}

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/5 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between relative z-50">
          {/* Logo */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-bold text-[#D2A2FF] whitespace-nowrap">
            HR
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center items-center space-x-4">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-xl border transition-colors ${
                  activeSection === item.href
                    ? "bg-white/10 text-[#D2A2FF] border-[#D2A2FF]"
                    : "text-white/70 hover:text-white/80 hover:bg-white/10 border-transparent hover:border-white/60"
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Desktop CV Button */}
          <motion.button
            onClick={handleDownloadCV}
            className="hidden lg:inline-flex items-center gap-2 bg-[#D2A2FF] border border-transparent text-black font-semibold px-4 py-2 rounded-xl shadow-md hover:bg-white hover:text-black transition"
          >
            <Upload size={16} />
            {isDownloading ? "Loading..." : "Get My CV"}
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg text-white relative z-50">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          className="lg:hidden overflow-hidden bg-white/10 border border-white/20 rounded-lg shadow-lg mx-4 relative z-50"
        >
          <div className="p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`w-full px-3 py-2 text-left rounded-lg transition-colors ${
                  activeSection === item.href
                    ? "bg-[#D2A2FF] text-black"
                    : "text-white/70 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                {item.name}
              </button>
            ))}

            {/* Mobile CV Button */}
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 justify-center w-full bg-[#D2A2FF] text-black px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 transition"
            >
              <Upload size={18} />
              {isDownloading ? "Loading..." : "Get My CV"}
            </button>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
};

export default Header;