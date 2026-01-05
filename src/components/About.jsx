import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="mx-auto max-w-7xl px-6 lg:px-28 py-16">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-10">
                
              
               {/* Left: About Content */}
<div className="w-full lg:w-1/2 text-left lg:pl-8">
  <motion.h2
      className="text-5xl md:text-6xl font-extrabold tracking-tight text-heading-grey/80 dark:text-gray-500 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
  >
      About
  </motion.h2>

  <motion.p
      className="text-lg md:text-xl leading-relaxed text-text-light dark:text-text-dark mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
  >
      Hello! <br />
      This is Tasnim Akther Tanha ~ an aspiring junior frontend developer. <br />  
      I focus on building practical and responsive web applications with clean and maintainable code. I enjoy creating user-friendly interfaces and bringing ideas to life with HTML, CSS, JavaScript, React.js, and Tailwind CSS.
  </motion.p>

  <motion.p
      className="text-lg md:text-xl leading-relaxed text-text-light dark:text-text-dark"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
  >
      I’m continuously learning new technologies like Next.js and improving my workflow by building projects, experimenting with modern tools, and following best practices.
  </motion.p>
</div>


{/* Right: Profile Image */}
<div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-16">

  <motion.div
    className="
      relative
      w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96
      rounded-full
      border-4 border-gray-300 dark:border-gray-600
      ring-2 ring-gray-300/60 dark:ring-gray-600/60
      ring-offset-8 ring-offset-background-light dark:ring-offset-background-dark
      overflow-hidden
      transform translate-y-6
    "
    initial={{ scale: 0.85, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <img
      src="/images/myprofile1.jpeg"
      alt="My Profile"
      className="w-full h-full object-cover"
    />
  </motion.div>

</div>


            </div>
        </section>
    );
}
