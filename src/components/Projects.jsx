import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Food Lover Network",
      description:
        "A comprehensive platform for food enthusiasts to discover, share, and rate recipes. Featuring a user profile management system.",
      image: "/images/project1.png",
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
      description:
        "A Game Library application that allows users to explore, rate, and curate their video game collections.",
      image: "/images/project2.png",
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
      description:
        "A library delivery management system for book pickup and delivery from nearby libraries.",
      image: "/images/project3.png",
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
    <section id="projects" className="mx-auto max-w-6xl px-6 lg:px-20 py-16">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-heading-grey/80 dark:text-gray-500 mb-12 text-center lg:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h1>

      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div
      className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 p-6 md:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all
        ${project.reverse ? "md:flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={project.image}
          alt={project.name}
          className="w-full max-w-md rounded-lg object-contain"
        />
      </div>

      {/* Content */}
      <div
        className={`w-full md:w-1/2 flex flex-col gap-4
          ${project.reverse ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          {project.name}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-base">{project.description}</p>

        {/* Tech Stack */}
        <div className={`flex flex-wrap gap-3 mb-4
          ${project.reverse ? "md:justify-end" : "md:justify-start"}`}
        >
          {project.techs.map((tech, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}`}
                className="w-5 h-5"
                alt={tech.split("/")[0]}
              />
              <span>{tech.split("/")[0]}</span>
            </div>
          ))}

          {project.extraTech && (
            <div className="flex items-center gap-2 text-sm">
              <span className={`material-icons ${project.extraTech.color}`}>
                {project.extraTech.icon}
              </span>
              <span>{project.extraTech.label}</span>
            </div>
          )}
        </div>

        {/* Links */}
        <div
          className={`flex flex-wrap gap-6 text-gray-400
            ${project.reverse ? "md:justify-end" : "md:justify-start"}`}
        >
          {project.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 whitespace-nowrap hover:text-primary transition"
            >
              <span className="material-icons text-xl">{link.icon}</span>
              <span className="text-sm font-medium">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
