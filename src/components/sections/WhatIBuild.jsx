import { motion } from 'framer-motion';
import TiltCard from '../ui/TiltCard';
import { skills } from '../../data/projects';

export default function WhatIBuild() {
    const skillsArray = Object.values(skills);

    const iconMap = {
        '✨': (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        '⚡': (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        '🎯': (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        ),
    };

    return (
        <section id="about" className="section bg-[var(--bg-secondary)]/50">
            <div className="container">
                {/* Section header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block mb-4 text-[var(--accent-purple)] mono text-sm uppercase tracking-wider">
                        What I Build
                    </span>
                    <h2 className="display-xl mb-6">
                        Full-stack <span className="gradient-text-static">capabilities</span>
                    </h2>
                    <p className="body-md max-w-xl mx-auto">
                        From frontend to backend, I build complete solutions that work seamlessly together.
                    </p>
                </motion.div>

                {/* Skills grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {skillsArray.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <TiltCard className="h-full p-8">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--accent-cyan)]/20 to-[var(--accent-purple)]/20 flex items-center justify-center mb-6 text-[var(--accent-cyan)]">
                                    {iconMap[skill.icon] || skill.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>

                                {/* Description */}
                                <p className="text-[var(--text-secondary)] text-sm mb-6">
                                    {skill.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {skill.technologies.map((tech, i) => (
                                        <span key={i} className="text-xs text-[var(--text-muted)] bg-[var(--bg-primary)] px-3 py-1 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
