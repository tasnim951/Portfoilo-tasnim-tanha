import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.main
      id="home"
      className="
        mx-auto max-w-6xl
        px-6 lg:px-20
        pt-28 pb-16
        flex flex-col lg:flex-row
        items-center
        gap-12 lg:gap-10
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
        <motion.span
          className="text-3xl sm:text-4xl lg:text-5xl text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          I'm
        </motion.span>

        <motion.h1
          className="font-bold leading-tight text-heading-light dark:text-heading-dark"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="block text-6xl sm:text-7xl">Tasnim</span>
          <span className="block text-6xl sm:text-7xl">Tanha</span>
        </motion.h1>

        <motion.span
          className="text-base sm:text-lg lg:text-xl tracking-widest uppercase text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Junior Frontend Developer
        </motion.span>

        <motion.a
          href="/resume.pdf"
          download="Resume_of_Tasnim_Akther_Tanha.pdf"
          className="
            inline-flex items-center gap-2
            bg-primary text-gray-900 font-bold
            text-sm sm:text-base tracking-widest uppercase
            px-8 sm:px-10 py-3
            rounded-full
            transition-all duration-300
            hover:scale-105 hover:shadow-xl
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="material-symbols-outlined text-lg">download</span>
          Download Resume
        </motion.a>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6">
        <motion.p
          className="
            text-text-light dark:text-text-dark
            max-w-md
            text-lg sm:text-xl lg:text-2xl
            leading-relaxed
            text-center lg:text-left
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          A Junior Frontend Developer with hands-on experience in HTML, CSS,
          JavaScript, and basic Node.js. Currently learning Next.js and building
          projects to grow my skills.
        </motion.p>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { name: "Li", href: "https://www.linkedin.com/in/tasnimtanha20" },
            { name: "Fb", href: "https://www.facebook.com/share/1CoZeZ3jZY/" },
            { name: "In", href: "https://www.instagram.com/tasssniiiim" },
            { name: "Wp", href: "https://wa.me/8801341648950" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                w-12 h-12 rounded-full
                border border-gray-300 dark:border-zinc-600
                flex items-center justify-center
                hover:bg-gray-900 hover:text-white
                dark:hover:bg-primary dark:hover:text-gray-900
                transition transform hover:-translate-y-1 hover:scale-110
              "
            >
              <span className="text-[12px] font-bold tracking-widest uppercase">
                {item.name}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </motion.main>
  );
}
