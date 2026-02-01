import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function MagneticButton({
    children,
    href,
    onClick,
    variant = 'primary',
    className = ''
}) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set((e.clientX - centerX) * 0.3);
        y.set((e.clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const baseClass = `magnetic-btn magnetic-btn-${variant} ${className}`;

    const MotionComponent = href ? motion.a : motion.button;
    const linkProps = href ? {
        href,
        target: href.startsWith('http') ? '_blank' : undefined,
        rel: href.startsWith('http') ? 'noopener noreferrer' : undefined,
    } : {};

    return (
        <MotionComponent
            ref={ref}
            className={baseClass}
            style={{ x: xSpring, y: ySpring }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            whileTap={{ scale: 0.95 }}
            {...linkProps}
        >
            <motion.span
                style={{
                    x: useTransform(xSpring, (val) => val * 0.5),
                    y: useTransform(ySpring, (val) => val * 0.5),
                }}
                className="flex items-center gap-2"
            >
                {children}
            </motion.span>
        </MotionComponent>
    );
}
