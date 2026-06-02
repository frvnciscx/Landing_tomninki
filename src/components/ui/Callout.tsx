import type { ReactNode, ElementType } from 'react';

type CalloutVariant = 'info' | 'tip' | 'warning' | 'success';

interface CalloutProps {
  variant?: CalloutVariant;
  icon?: ElementType;
  title?: string;
  children: ReactNode;
  className?: string;
}

const STYLES: Record<CalloutVariant, { wrapper: string; icon: string; title: string }> = {
  info:    { wrapper: 'bg-blue-500/10 border-blue-500/30',    icon: 'text-blue-400',    title: 'text-blue-300' },
  tip:     { wrapper: 'bg-primary/10 border-primary/30',      icon: 'text-primary',      title: 'text-primary' },
  warning: { wrapper: 'bg-amber-500/10 border-amber-500/30',  icon: 'text-amber-400',   title: 'text-amber-300' },
  success: { wrapper: 'bg-emerald-500/10 border-emerald-500/30', icon: 'text-emerald-400', title: 'text-emerald-300' },
};

/**
 * Callout — bloque de llamada de atención para artículos de blog y documentación.
 *
 * @example
 * <Callout variant="warning" icon={AlertTriangle} title="Señal de alerta">
 *   Si al revisar tu tarjeta encuentras cargos…
 * </Callout>
 *
 * <Callout variant="tip" icon={Lightbulb} title="Consejo práctico">
 *   Dedica 5 minutos cada noche…
 * </Callout>
 */
export function Callout({ variant = 'info', icon: Icon, title, children, className = '' }: CalloutProps) {
  const s = STYLES[variant];
  return (
    <div className={`flex gap-4 p-5 rounded-2xl border ${s.wrapper} my-6 ${className}`}>
      {Icon && <Icon className={`flex-shrink-0 w-5 h-5 mt-0.5 ${s.icon}`} />}
      <div>
        {title && <p className={`text-sm font-semibold mb-1 ${s.title}`}>{title}</p>}
        <div className="text-sm text-slate-400 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
