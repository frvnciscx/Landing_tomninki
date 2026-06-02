import type { ReactNode } from 'react';

type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger' | 'amber' | 'purple' | 'ghost';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  dot?: boolean;         // Animated ping dot
  className?: string;
}

const VARIANTS: Record<BadgeVariant, string> = {
  primary: 'bg-primary/15 text-primary border border-primary/25',
  success: 'bg-emerald-500/15 text-emerald-500 border border-emerald-500/25',
  warning: 'bg-amber-500/15 text-amber-500 border border-amber-500/25',
  danger:  'bg-red-500/15 text-red-500 border border-red-500/25',
  amber:   'bg-amber-500/20 text-amber-400 border border-amber-500/30',
  purple:  'bg-purple-500/15 text-purple-500 border border-purple-500/25',
  ghost:   'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10',
};

const DOT_COLORS: Record<BadgeVariant, string> = {
  primary: 'bg-primary',
  success: 'bg-emerald-500',
  warning: 'bg-amber-500',
  danger:  'bg-red-500',
  amber:   'bg-amber-400',
  purple:  'bg-purple-500',
  ghost:   'bg-slate-400',
};

/**
 * Badge — etiqueta de estado, categoría o indicador.
 *
 * @example
 * <Badge variant="success" dot>Publicado</Badge>
 * <Badge variant="warning">Borrador</Badge>
 * <Badge variant="primary">Acceso Anticipado</Badge>
 */
export function Badge({ children, variant = 'ghost', dot = false, className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${VARIANTS[variant]} ${className}`}>
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${DOT_COLORS[variant]} opacity-60`} />
          <span className={`relative inline-flex rounded-full h-2 w-2 ${DOT_COLORS[variant]}`} />
        </span>
      )}
      {children}
    </span>
  );
}
