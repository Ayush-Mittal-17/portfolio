import { motion } from 'framer-motion';
import TiltCard from '../ui/TiltCard';
import { projects } from '../../data/projects';

export default function Projects() {
    return (
        <section id="work" className="section">
            <div className="container">
                {/* Section header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block mb-4 text-[var(--accent-cyan)] mono text-sm uppercase tracking-wider">
                        Selected Work
                    </span>
                    <h2 className="display-xl mb-6">
                        Projects I've <span className="gradient-text-static">shipped</span>
                    </h2>
                    <p className="body-md max-w-xl mx-auto">
                        Each project is a journey from problem to solution.
                    </p>
                </motion.div>

                {/* Projects grid - larger cards */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <TiltCard className="h-full p-8 lg:p-10">
                                {/* Header row */}
                                <div className="flex items-start justify-between mb-8">
                                    <div>
                                        <span className="text-xs uppercase tracking-wider text-[var(--accent-purple)] mb-2 block">
                                            {project.category}
                                        </span>
                                        <h3 className="text-2xl lg:text-3xl font-bold">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="flex gap-3">
                                        {project.githubUrl && project.githubUrl !== '#' && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2.5 rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-[var(--accent-cyan)] hover:bg-[var(--bg-tertiary)] transition-all"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                                </svg>
                                            </a>
                                        )}
                                        {project.liveUrl && project.liveUrl !== '#' && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2.5 rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-[var(--accent-cyan)] hover:bg-[var(--bg-tertiary)] transition-all"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Tagline - simplified */}
                                <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed">
                                    {project.tagline}
                                </p>

                                {/* Metrics - cleaner layout */}
                                <div className="grid grid-cols-3 gap-6 mb-8 py-6 border-y border-[var(--border-subtle)]">
                                    {project.metrics.map((metric, i) => (
                                        <div key={i}>
                                            <div className="text-2xl font-bold gradient-text-static mb-1">
                                                {metric.value}
                                            </div>
                                            <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">
                                                {metric.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.slice(0, 4).map((tech, i) => (
                                        <span key={i} className="tech-pill">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.techStack.length > 4 && (
                                        <span className="tech-pill opacity-60">
                                            +{project.techStack.length - 4}
                                        </span>
                                    )}
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
