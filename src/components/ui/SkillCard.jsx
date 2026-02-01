import { motion } from 'framer-motion';

export default function SkillCard({ skill, index = 0 }) {
    return (
        <motion.div
            className="glass-card p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="text-3xl mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-[var(--text-secondary)] text-sm mb-4">
                {skill.description}
            </p>
            <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, i) => (
                    <span key={i} className="pill text-xs">
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
