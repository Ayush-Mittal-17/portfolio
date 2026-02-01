import { motion } from 'framer-motion';

export default function HowIWork() {
    const steps = [
        {
            number: '01',
            title: 'Discover',
            description: 'Understanding the problem space, users, and business goals.',
            icon: '🔍'
        },
        {
            number: '02',
            title: 'Design',
            description: 'Architecting solutions with scalability and UX in mind.',
            icon: '✏️'
        },
        {
            number: '03',
            title: 'Develop',
            description: 'Writing clean, tested code with continuous iteration.',
            icon: '⚡'
        },
        {
            number: '04',
            title: 'Deploy',
            description: 'Shipping with confidence and monitoring real usage.',
            icon: '🚀'
        }
    ];

    return (
        <section className="section relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent-purple)]/5 to-transparent pointer-events-none" />

            <div className="container relative z-10">
                {/* Section header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block mb-4 text-[var(--accent-cyan)] mono text-sm uppercase tracking-wider">
                        Process
                    </span>
                    <h2 className="display-xl mb-4">
                        How I <span className="gradient-text-static">work</span>
                    </h2>
                </motion.div>

                {/* Process timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Connecting line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-cyan)] via-[var(--accent-purple)] to-transparent hidden md:block" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            className={`flex items-center gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            {/* Content */}
                            <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                <motion.div
                                    className="inline-block p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] backdrop-blur-sm"
                                    whileHover={{ scale: 1.02, borderColor: 'var(--border-glow)' }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span className="text-3xl mb-3 block">{step.icon}</span>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-[var(--text-secondary)] text-sm">{step.description}</p>
                                </motion.div>
                            </div>

                            {/* Number node */}
                            <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-cyan)] text-[var(--accent-cyan)] font-bold z-10">
                                {step.number}
                            </div>

                            {/* Spacer for opposite side */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>

                {/* Currently exploring */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <span className="text-[var(--text-muted)] text-sm mb-4 block">Currently exploring</span>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['Next.js', 'TypeScript', 'Testing', 'System Design'].map((item, i) => (
                            <motion.span
                                key={item}
                                className="floating-pill"
                                whileHover={{ scale: 1.05, y: -2 }}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                            >
                                {item}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
