import { motion } from "framer-motion";

export default function Skills() {
    const skills = [
        { name: 'HTML', iconClass: 'devicon-html5-plain', percent: 90 },
        { name: 'CSS', iconClass: 'devicon-css3-plain', percent: 85 },
        { name: 'JavaScript', iconClass: 'devicon-javascript-plain', percent: 80 },
        { name: 'React.js', iconClass: 'devicon-react-original', percent: 75 },
        { name: 'Node.js', iconClass: 'devicon-nodejs-plain', percent: 70 },
        { name: 'Express.js', iconClass: 'devicon-express-original', percent: 65, colorClass: 'text-gray-800 dark:text-gray-300' },
        { name: 'MongoDB', iconClass: 'devicon-mongodb-plain', percent: 60 },
    ];

    return (
        <section className="container mx-auto px-6 lg:px-20 py-16">
            {/* Heading */}
            <motion.h2
                className="text-5xl md:text-6xl font-extrabold tracking-tight text-heading-grey/80 dark:text-gray-500 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                Skills
            </motion.h2>

            {/* Skills grid with reduced spacing */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-6 md:gap-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: { transition: { staggerChildren: 0.15 } },
                }}
            >
                {skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                ))}
            </motion.div>
        </section>
    );
}

// Individual skill card
function SkillCard({ skill }) {
    return (
        <motion.div
            className="group relative p-3 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                    <i className={`${skill.iconClass} ${skill.colorClass || 'colored'} text-3xl`}></i>
                    <span className="text-xl font-semibold text-gray-800 dark:text-gray-300">{skill.name}</span>
                </div>
                <span className="text-sm font-bold text-gray-500">{skill.percent}%</span>
            </div>

            {/* Progress Bar */}
            <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-pink-300 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                ></motion.div>
            </div>
        </motion.div>
    );
}
