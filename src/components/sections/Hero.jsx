import { motion } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';
import { personalInfo } from '../../data/projects';

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated grid background */}
            <div className="grid-bg" />

            {/* Floating orbs */}
            <div className="orb orb-cyan w-[500px] h-[500px] -top-20 -left-40 opacity-40" />
            <div className="orb orb-purple w-[400px] h-[400px] -bottom-20 -right-40 opacity-30" />
            <div className="orb orb-cyan w-[300px] h-[300px] top-1/2 right-1/4 opacity-20"
                style={{ animationDelay: '-2s' }} />

            {/* Content */}
            <motion.div
                className="container relative z-10 pt-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-5xl mx-auto text-center">

                    {/* Greeting with typing effect feel */}
                    <motion.div variants={itemVariants} className="mb-6">
                        <span className="inline-flex items-center gap-3 text-[var(--accent-cyan)] mono text-sm md:text-base">
                            <motion.span
                                className="w-3 h-3 rounded-full bg-[var(--accent-green)]"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            Available for opportunities
                        </span>
                    </motion.div>

                    {/* Main headline */}
                    <motion.h1
                        className="display-hero mb-6"
                        variants={itemVariants}
                    >
                        <span className="block text-[var(--text-secondary)] text-[0.4em] mb-2 font-normal tracking-normal">
                            Hello, I'm Ayush
                        </span>
                        <span className="block">
                            I build things
                        </span>
                        <span className="block gradient-text">
                            for the web
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="body-lg max-w-2xl mx-auto mb-12"
                        variants={itemVariants}
                    >
                        Full-stack developer crafting <span className="text-[var(--text-primary)]">interactive experiences</span> with
                        modern frontend technologies and robust backend systems.
                    </motion.p>

                    {/* CTAs with magnetic effect */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                        variants={itemVariants}
                    >
                        <MagneticButton href="#work" variant="primary">
                            <span>Explore My Work</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </MagneticButton>
                        <MagneticButton href="#contact" variant="secondary">
                            <span>Get in Touch</span>
                        </MagneticButton>
                    </motion.div>

                    {/* Floating tech pills */}
                    <motion.div
                        className="flex flex-wrap items-center justify-center gap-3"
                        variants={itemVariants}
                    >
                        {['React', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind'].map((tech, i) => (
                            <motion.span
                                key={tech}
                                className="floating-pill"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
            >
                <motion.div
                    className="flex flex-col items-center gap-2 text-[var(--text-muted)]"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
