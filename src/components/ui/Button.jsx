import { motion } from 'framer-motion';

export default function Button({
    children,
    variant = 'primary',
    href,
    onClick,
    icon,
    className = ''
}) {
    const baseClass = `btn btn-${variant} ${className}`;

    const content = (
        <>
            {children}
            {icon && <span className="text-lg">{icon}</span>}
        </>
    );

    if (href) {
        return (
            <motion.a
                href={href}
                className={baseClass}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            className={baseClass}
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {content}
        </motion.button>
    );
}
