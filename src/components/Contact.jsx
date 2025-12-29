import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_t2o0aza",
        "template_snm9pat",
        formRef.current,
        "AwgQ62syyIE65InVG"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message ❌");
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="container mx-auto px-6 lg:px-20 py-16"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-heading-grey/80 dark:text-gray-500 tracking-tight">
          Contact
        </h1>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Let’s work together
          </h2>

          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-md">
            I’m open to frontend opportunities, internships, and collaborative projects.
            Feel free to send me a message anytime.
          </p>

          <div className="space-y-4 text-gray-600 dark:text-gray-400 text-sm">
            <div className="flex items-center gap-3">
              <span className="material-icons text-primary">mail</span>
              <span>tasnimakthertanha@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="material-icons text-primary">location_on</span>
              <span>Sylhet, Bangladesh</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
        >
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-sm
              focus:outline-none focus:ring-2 focus:ring-primary focus:scale-[1.01] transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-sm
              focus:outline-none focus:ring-2 focus:ring-primary focus:scale-[1.01] transition"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-sm resize-none
              focus:outline-none focus:ring-2 focus:ring-primary focus:scale-[1.01] transition"
            />

            {/* Button */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary text-gray-900 font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-full
              disabled:opacity-60 transition-all duration-300"
            >
              <span className="material-icons text-sm">send</span>
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
