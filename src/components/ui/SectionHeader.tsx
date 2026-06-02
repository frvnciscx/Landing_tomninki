import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  /** Badge text above the title (optional) */
  badge?: string;
  /** Main title — supports JSX for gradient spans */
  title: ReactNode;
  /** Subtitle paragraph */
  subtitle?: string;
  /** Horizontal alignment */
  align?: 'center' | 'left';
  /** Extra class on the wrapper */
  className?: string;
}

/**
 * SectionHeader — encabezado estándar de sección con badge, título animado y subtítulo.
 *
 * @example
 * <SectionHeader
 *   badge="Blog Oficial"
 *   title={<>Ideas para tu <span className="text-primary">libertad financiera</span></>}
 *   subtitle="Artículos y guías del equipo de Tomin-Ki."
 * />
 */
export function SectionHeader({ badge, title, subtitle, align = 'center', className = '' }: SectionHeaderProps) {
  const textAlign = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${textAlign} mb-16 ${className}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/15 text-primary text-sm font-semibold border border-primary/25"
        >
          {badge}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: badge ? 0.05 : 0 }}
        className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-4 leading-tight"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
