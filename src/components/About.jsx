import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="container mx-auto px-6 lg:px-20 py-16">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-6xl md:text-6xl font-extrabold tracking-tight text-heading-grey/80 dark:text-gray-500 mb-12 text-center lg:text-left">
                    About
                </h2>

                {/* Main layout */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
                    
                    {/* Left: Profile Image with rotating outer border */}
                    <div className="flex-shrink-0 relative mt-6 lg:mt-12">
                        {/* Rotating outer border */}
                        <motion.div
                            className="absolute -inset-4 rounded-full border-4 lg:border-[6px] border-gray-300 dark:border-gray-600"
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                        ></motion.div>

                        {/* Profile image with static inner border */}
                        <div className="
                            w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72
                            lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-[28rem] 2xl:h-[28rem]
                            rounded-full border-4 lg:border-[6px]
                            border-gray-300 dark:border-gray-600
                            ring-4 lg:ring-[6px] ring-gray-200/50 dark:ring-gray-700/50
                            overflow-hidden
                        ">
                            <img
                                src="/images/myprofile1.jpeg"
                                alt="My Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: About Content */}
                    <div className="text-center lg:text-left">
                        <motion.p
                            className="text-lg md:text-xl leading-relaxed text-text-light dark:text-text-dark mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            I focus on building practical and responsive web applications with clean and maintainable code. I enjoy creating user-friendly interfaces and bringing ideas to life with HTML, CSS, JavaScript, React.js, and Tailwind CSS.
                        </motion.p>

                        <motion.p
                            className="text-lg md:text-xl leading-relaxed text-text-light dark:text-text-dark mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            I’m continuously learning new technologies like Next.js and improving my workflow by building projects, experimenting with modern tools, and following best practices.
                        </motion.p>

                        {/* Tech Skills */}
                        <motion.div
                            className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: {
                                    transition: { staggerChildren: 0.1 },
                                },
                            }}
                        >
                            <SkillBadge name="HTML" icon="html5/html5-original.svg" />
                            <SkillBadge name="CSS" icon="css3/css3-original.svg" />
                            <SkillBadge name="JavaScript" icon="javascript/javascript-original.svg" />
                            <SkillBadge name="React.js" icon="react/react-original.svg" />
                            <SkillBadge name="Node.js" icon="nodejs/nodejs-original.svg" />
                            <SkillBadge name="Express.js" icon="express/express-original.svg" />
                            <SkillBadge name="MongoDB" icon="mongodb/mongodb-original.svg" />
                            <SkillBadge name="Firebase" icon="firebase/firebase-plain.svg" />
                            <SkillBadge name="Tailwind CSS" icon="tailwindcss/tailwindcss-original.svg" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// SkillBadge with icon + pop-in + hover effect
function SkillBadge({ name, icon }) {
    return (
        <motion.div
            className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2 text-sm md:text-base text-gray-700 dark:text-gray-200 cursor-pointer
                hover:scale-110 hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform duration-300"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`}
                className="w-5 h-5"
                alt={name}
            />
            <span>{name}</span>
        </motion.div>
    );
}
