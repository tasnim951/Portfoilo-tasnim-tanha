import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

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
          toast.success("Message sent successfully!");
          formRef.current.reset();
          setLoading(false);
        },
        () => {
          toast.error("Failed to send message. Try again!");
          setLoading(false);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="mx-auto max-w-6xl px-6 lg:px-20 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-heading-grey/80 dark:text-gray-400 tracking-tight mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </motion.h2>

      {/* Glass / Pink Container */}
      <motion.div
        className="
          flex flex-col lg:flex-row rounded-3xl overflow-hidden
          backdrop-blur-2xl
          bg-primary/15
          border border-primary/30
          shadow-lg
          dark:bg-white/10 dark:border-white/20
        "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Side */}
        <div className="lg:w-1/2 p-10 flex flex-col justify-center gap-6">
          <h3 className="text-3xl font-bold text-black dark:text-white">
            Let’s work together
          </h3>

          <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
            I’m open to frontend opportunities, internships, and collaborative
            projects. Feel free to reach out anytime.
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3 text-black dark:text-gray-300">
              <span className="material-icons text-primary">mail</span>
              <span>tasnimakthertanha@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-black dark:text-gray-300">
              <span className="material-icons text-primary">call</span>
              <a href="tel:01341648950" className="hover:underline">
                01341648950
              </a>
            </div>

            <div className="flex items-center gap-3 text-black dark:text-gray-300">
              <span className="material-icons text-primary">location_on</span>
              <span>Sylhet, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 p-10">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-6"
          >
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="
                w-full rounded-xl px-4 py-3 text-sm
                bg-primary/20
                border border-primary/40
                text-black placeholder-gray-700
                focus:ring-2 focus:ring-primary outline-none
                dark:bg-white/10 dark:border-white/20 dark:text-white
                dark:placeholder-gray-400
              "
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="
                w-full rounded-xl px-4 py-3 text-sm
                bg-primary/20
                border border-primary/40
                text-black placeholder-gray-700
                focus:ring-2 focus:ring-primary outline-none
                dark:bg-white/10 dark:border-white/20 dark:text-white
                dark:placeholder-gray-400
              "
            />

            {/* Message */}
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
              className="
                w-full rounded-xl px-4 py-3 text-sm resize-none
                bg-primary/20
                border border-primary/40
                text-black placeholder-gray-700
                focus:ring-2 focus:ring-primary outline-none
                dark:bg-white/10 dark:border-white/20 dark:text-white
                dark:placeholder-gray-400
              "
            />

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                inline-flex items-center justify-center gap-2
                bg-primary text-gray-900 font-bold
                text-xs tracking-widest uppercase
                px-8 py-4 rounded-full
                transition
                disabled:opacity-60
              "
            >
              <span className="material-icons text-sm">send</span>
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </motion.section>
  );
}
