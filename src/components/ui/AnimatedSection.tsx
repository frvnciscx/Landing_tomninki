import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'fade';
}

const INIT: Record<NonNullable<AnimatedSectionProps['direction']>, any> = {
  up:    { opacity: 0, y: 30 },
  left:  { opacity: 0, x: -30 },
  right: { opacity: 0, x: 30 },
  fade:  { opacity: 0 },
};

/**
 * AnimatedSection — wrapper de animación de entrada con whileInView.
 * Elimina la necesidad de repetir `initial/animate/viewport` en cada componente.
 *
 * @example
 * <AnimatedSection delay={0.2} direction="left">
 *   <div>Contenido animado</div>
 * </AnimatedSection>
 */
export function AnimatedSection({ children, className = '', delay = 0, direction = 'up' }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={INIT[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
