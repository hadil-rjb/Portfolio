import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Mail, Phone } from "lucide-react";
import { FaBehance } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Tutorials", href: "#tutorials" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ];

  return (
<footer className="bg-black text-white py-12">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-3 gap-8 mb-8">
      {/* Brand */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl text-[#B387DF] font-bold mb-4">
          Hadil Rejeb
        </h3>
        <p className="text-white/80 leading-relaxed">
          Computer engineering student specializing in web development and
          UI/UX design, passionate about building clean, responsive
          interfaces and seamless digital experiences.
        </p>
      </motion.div>

      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          {quickLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-white/70 hover:text-[#B387DF] transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h4 className="text-lg font-semibold mb-4">Contact</h4>
        <div className="space-y-3">
          <a
            href="mailto:hadilrjeb19@gmail.com"
            className="flex items-center space-x-3 text-white/70 hover:text-[#B387DF] transition-colors"
          >
            <Mail size={18} />
            <span>hadilrjeb19@gmail.com</span>
          </a>
          <p className="flex items-center space-x-3 text-white/70">
            <Phone size={18} />
            <span>+216 56 180 931</span>
          </p>
        </div>

        <div className="flex space-x-4 mt-6">
          <a
            href="https://www.linkedin.com/in/hadil-rejeb"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/15 rounded-lg hover:text-black hover:bg-[#B387DF] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/hadil-rjb"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/15 rounded-lg hover:text-black hover:bg-[#B387DF] transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://youtube.com/@berbasha_dil?si=USYEUEvhThoRFIFa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/15 rounded-lg hover:text-black hover:bg-[#B387DF] transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>
          <a
            href="https://www.behance.net/hadilrejeb"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/15 rounded-lg hover:text-black hover:bg-[#B387DF] transition-colors"
            aria-label="Behance"
          >
            <FaBehance size={20} />
          </a>
        </div>
      </motion.div>
    </div>

    {/* Bottom Bar */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="border-t border-white/20 pt-8 text-center"
    >
      <p className="text-white/70 flex items-center justify-center space-x-2">
        <span>© {currentYear} Hadil Rejeb</span>
      </p>

      {/* Visitor Badge aligned right */}
      <div className="mt-4 flex justify-end">
          <img
            src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fhadil-rjb%2FPortfolio&labelColor=%23d2a2ff&countColor=%23333333"
            className="rounded-lg shadow-lg"
            alt="Visitor Badge"
          />
      </div>
    </motion.div>
  </div>
</footer>

  );
};

export default Footer;
