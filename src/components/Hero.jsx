import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.main
            id="home"
            className="container mx-auto px-6 lg:px-12 pt-24 pb-16 flex flex-col lg:flex-row items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Left Side */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <motion.span
                    className="block text-2xl sm:text-3xl text-gray-400 mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    I'm
                </motion.span>

               <motion.h1
    className="block font-bold text-heading-light dark:text-heading-dark leading-tight text-center lg:text-left"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
>
    <span className="block text-5xl sm:text-6xl lg:text-7xl">Tasnim</span>
   

    <span className="block text-5xl sm:text-6xl lg:text-7xl">Tanha</span>
</motion.h1>


                <motion.span
                    className="block mt-4 text-sm sm:text-base tracking-widest uppercase text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Junior Frontend Developer
                </motion.span>
            </div>

            {/* Right Side */}
            <div className="lg:w-1/2 lg:pl-16 mt-10 lg:mt-8 flex flex-col items-center lg:items-start">
                <motion.p
                    className="text-text-light dark:text-text-dark max-w-md leading-relaxed mb-8 text-center lg:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    A Junior Frontend Developer with hands-on experience in HTML, CSS,
                    JavaScript, and basic Node.js. Currently learning Next.js and building
                    projects to grow my skills.
                </motion.p>

                {/* Social Icons */}
                <motion.div
                    className="flex gap-4 mb-8 justify-center lg:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {[
                        { name: "Li", href: "https://www.linkedin.com/in/tasnimtanha20" },
                        { name: "Fb", href: "https://www.facebook.com/share/1CoZeZ3jZY/" },
                        { name: "In", href: "https://www.instagram.com/tasssniiiim" },
                    ].map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="w-10 h-10 rounded-full border border-gray-300 dark:border-zinc-600 flex items-center justify-center
                            hover:bg-gray-900 hover:text-white dark:hover:bg-primary dark:hover:text-gray-900
                            transition duration-300 transform hover:-translate-y-1 hover:scale-110"
                        >
                            <span className="text-[10px] font-bold tracking-widest uppercase">
                                {item.name}
                            </span>
                        </a>
                    ))}
                </motion.div>

                {/* Download Resume Button */}
                <motion.a
                    href="https://drive.google.com/file/d/1rCXnaTTP7Rx-r9oizgC3D6QT6AXSBjv8/view"
                    target="_blank"
                    className="
                        inline-flex items-center justify-center gap-2
                        bg-primary text-gray-900 font-bold text-xs tracking-widest uppercase
                        px-10 sm:px-14 py-4 rounded-full w-full sm:w-auto
                        transition-all duration-300 transform
                        hover:scale-105 hover:shadow-xl
                        dark:bg-primary dark:text-gray-900
                        dark:hover:bg-primary/80 dark:hover:text-white
                        hover:bg-primary/90 hover:text-gray-900
                    "
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <span className="material-symbols-outlined">download</span>
                    Download Resume
                </motion.a>
            </div>
        </motion.main>
    );
}
