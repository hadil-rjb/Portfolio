import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_c38zclq", // ton Service ID
        "template_618j4jw", // ton Template ID
        templateParams,
        "wTO67HsvU-vDUdPkF" // ta clé publique
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          // Vide le formulaire après envoi
          setFormData({ name: "", email: "", subject: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message. Try again later.");
          setIsSubmitting(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hadilrjeb19@gmail.com",
      href: "mailto:hadilrjeb19@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+216 56 180 931",
      href: "tel:+21656180931",
    },
    { icon: MapPin, label: "Location", value: "Gafsa, Tunis", href: "#" },
  ];

  return (
    <section id="contact" className="py-20 bg-black text-white mb-34">
      <div className="container mx-auto px-14">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-26"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Let's chat! Fill out the form below or use
            the contact details.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Contact Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="md:w-1/3 mb-10 md:mb-0"
          >
            <h3 className="text-xl font-semibold mb-6 text-[#D2A2FF]">
              Contact Info
            </h3>
            <ul className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-center space-x-4">
                  <Icon className="text-[#D2A2FF] w-6 h-6 flex-shrink-0" />
                  {href !== "#" ? (
                    <a
                      href={href}
                      className="transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {value}
                    </a>
                  ) : (
                    <span>{value}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="md:w-2/3 bg-white/5 border border-white/10 p-8 rounded-2xl shadow-lg space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="mb-2 text-white/70 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-[#B387DF] outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-2 text-white/70 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-[#B387DF] outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="subject"
                className="mb-2 text-white/70 font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-[#B387DF] outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="mb-2 text-white/70 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="2"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-[#B387DF] outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-[#D2A2FF] text-black font-semibold hover:bg-white transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting && (
                <svg
                  className="animate-spin h-5 w-5 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4l-3 3 3 3h-4z"
                  ></path>
                </svg>
              )}
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
