import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function TiltCard({ children, className = '' }) {
    const ref = useRef(null);
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    const springConfig = { damping: 20, stiffness: 150 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const rotateX = useTransform(ySpring, [0, 1], [8, -8]);
    const rotateY = useTransform(xSpring, [0, 1], [-8, 8]);
    const glareX = useTransform(xSpring, [0, 1], ['0%', '100%']);
    const glareY = useTransform(ySpring, [0, 1], ['0%', '100%']);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width);
        y.set((e.clientY - rect.top) / rect.height);
    };

    const handleMouseLeave = () => {
        x.set(0.5);
        y.set(0.5);
    };

    return (
        <motion.div
            ref={ref}
            className={`relative interactive-card ${className}`}
            style={{
                rotateX,
                rotateY,
                transformPerspective: 1000,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            {/* Glare effect */}
            <motion.div
                className="absolute inset-0 rounded-[20px] pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: useTransform(
                        [glareX, glareY],
                        ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.1) 0%, transparent 50%)`
                    ),
                }}
            />
            {children}
        </motion.div>
    );
}
