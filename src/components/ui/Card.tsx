import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  /** Delay for whileInView animation */
  delay?: number;
  /** Extra classes */
  className?: string;
  /** Hover glow color class e.g. 'hover:shadow-primary/20' */
  glow?: boolean;
  /** Remove default padding */
  noPadding?: boolean;
}

/**
 * Card — contenedor animado con borde, fondo y hover.
 * Útil para testimonios, artículos del blog, features, sidebar del admin.
 *
 * @example
 * <Card delay={0.1} glow>
 *   <p>Contenido de la tarjeta</p>
 * </Card>
 */
export function Card({ children, delay = 0, className = '', glow = false, noPadding = false }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className={`
        bg-white dark:bg-[#1A1A22]
        border border-slate-200 dark:border-white/8
        rounded-2xl
        ${noPadding ? '' : 'p-6'}
        ${glow ? 'hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
