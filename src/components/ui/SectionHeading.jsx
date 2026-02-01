import { motion } from 'framer-motion';

export default function SectionHeading({
    label,
    title,
    description,
    align = 'left'
}) {
    const alignClass = align === 'center' ? 'text-center mx-auto' : '';

    return (
        <motion.div
            className={`mb-12 md:mb-16 max-w-2xl ${alignClass}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
        >
            {label && (
                <span className="inline-block mb-3 text-sm font-medium text-[var(--accent-blue)] tracking-wide uppercase">
                    {label}
                </span>
            )}
            <h2 className="display-md mb-4">{title}</h2>
            {description && (
                <p className="body-lg">{description}</p>
            )}
        </motion.div>
    );
}
