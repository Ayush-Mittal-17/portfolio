import { motion } from 'framer-motion';

export default function ProjectCard({
    project,
    index = 0,
    featured = false
}) {
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.1
            }
        }
    };

    return (
        <motion.article
            className={`glass-card p-6 md:p-8 group cursor-pointer ${featured ? 'md:col-span-2' : ''
                }`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -4 }}
        >
            {/* Category badge */}
            <div className="flex items-center justify-between mb-4">
                <span className="pill">{project.category}</span>
                <div className="flex gap-3">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View on GitHub"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View live site"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>

            {/* Title and tagline */}
            <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-[var(--accent-blue)] transition-colors">
                {project.title}
            </h3>
            <p className="text-[var(--text-secondary)] mb-4">
                {project.tagline}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-4 mb-6">
                {project.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                        <div className="text-lg font-semibold gradient-text">
                            {metric.value}
                        </div>
                        <div className="text-xs text-[var(--text-muted)]">
                            {metric.label}
                        </div>
                    </div>
                ))}
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                    <span
                        key={i}
                        className="text-xs font-medium text-[var(--text-muted)] bg-[var(--bg-secondary)] px-2 py-1 rounded"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.06), transparent 40%)'
                }}
            />
        </motion.article>
    );
}
