import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            name: "Food Lover Network",
            description: "A comprehensive platform for food enthusiasts to discover, share, and rate recipes. Featuring a dynamic search engine and user profile management system.",
            image: "public/images/project1.png",
            techs: [
                "mongodb/mongodb-original.svg",
                "express/express-original.svg",
                "react/react-original.svg",
                "nodejs/nodejs-original.svg",
                "firebase/firebase-plain.svg",
                "tailwindcss/tailwindcss-original.svg",
            ],
            links: [
                { label: "Server", href: "https://github.com/tasnim951/local-food-server", icon: "dns" },
                { label: "Client", href: "https://github.com/tasnim951/local-food-client", icon: "code" },
                { label: "Live", href: "https://grand-medovik-1777fc.netlify.app/", icon: "open_in_new" },
            ],
        },
        {
            name: "GameHub",
            description: "A Game Library application that allows users to explore, rate, and curate their video game collections. Includes smooth animations and personalized recommendations.",
            image: "public/images/project2.png",
            reverse: true,
            techs: [
                "react/react-original.svg",
                "firebase/firebase-plain.svg",
                "tailwindcss/tailwindcss-original.svg",
            ],
            extraTech: { icon: "animation", label: "Framer Motion", color: "text-purple-500" },
            links: [
                { label: "Client", href: "https://github.com/tasnim951/game-hub-repo", icon: "code" },
                { label: "Live", href: "https://nimble-torte-4651c3.netlify.app/", icon: "open_in_new" },
            ],
        },
        {
            name: "Book Courier",
            description: "A library delivery management system where users can request book pickup, delivery from nearby libraries. Helps students, researchers, and readers borrow and return books without visiting physically.",
            image: "public/images/project3.png",
            techs: [
                "react/react-original.svg",
                "tailwindcss/tailwindcss-original.svg",
                "firebase/firebase-plain.svg",
                "nodejs/nodejs-original.svg",
                "mongodb/mongodb-original.svg",
            ],
            links: [
                { label: "Server", href: "https://github.com/tasnim951/book-server-repo", icon: "dns" },
                { label: "Client", href: "https://github.com/tasnim951/book-client-repo", icon: "code" },
                { label: "Live", href: "https://dazzling-frangollo-06a1cd.netlify.app/", icon: "open_in_new" },
            ],
        },
    ];

    return (
        <section id="projects" className="container mx-auto px-6 lg:px-20 py-16">
            <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <h1 className="text-5xl md:text-6xl font-extrabold text-heading-grey/80 dark:text-gray-500 tracking-tight">
                    Projects
                </h1>
            </motion.div>

            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </section>
    );
}

function ProjectCard({ project }) {
    return (
        <motion.div
            className={`flex flex-col ${project.reverse ? 'md:flex-row-reverse text-right md:items-end' : 'md:flex-row'} items-center gap-16 lg:gap-24 mb-20 group`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {/* Project Image */}
            <motion.div
                className={`w-full md:w-1/2 flex justify-center ${project.reverse ? 'md:justify-end' : 'md:justify-start'}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full max-w-[420px] object-contain"
                />
            </motion.div>

            {/* Project Details */}
            <motion.div
                className={`w-full md:w-1/2 flex flex-col justify-center ${project.reverse ? 'md:items-end md:text-right' : 'text-left'}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">{project.name}</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed text-sm md:text-base">{project.description}</p>

                {/* Tech Badges */}
                <div className="mb-8">
                    <motion.div
                        className={`flex flex-wrap gap-x-6 gap-y-3 ${project.reverse ? 'justify-end' : 'justify-start'}`}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                    >
                        {project.techs.map((tech, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img className="w-5 h-5" src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}`} alt="" />
                                <span>{tech.split('/')[0]}</span>
                            </motion.div>
                        ))}
                        {project.extraTech && (
                            <motion.div
                                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <span className={`material-icons ${project.extraTech.color} text-[20px]`}>{project.extraTech.icon}</span>
                                <span>{project.extraTech.label}</span>
                            </motion.div>
                        )}
                    </motion.div>
                </div>

                {/* Links */}
                <motion.div
                    className="flex flex-wrap gap-20 text-gray-400"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    {project.links.map((link, i) => (
                        <a key={i} href={link.href} className="flex items-center gap-1 hover:text-primary transition">
                            <span className="material-icons text-xl">{link.icon}</span>
                            <span className="text-sm font-medium">{link.label}</span>
                        </a>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
