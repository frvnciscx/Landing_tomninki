import { motion, type Variants } from 'framer-motion';
import type { ElementType } from 'react';

interface BenefitItemProps {
  icon: ElementType;
  iconColor?: string;     // Tailwind text color e.g. 'text-amber-500'
  iconBg?: string;        // Tailwind bg color e.g. 'bg-amber-500/20'
  title: string;
  description: string;
  /** For staggered parent animations */
  variants?: Variants;
}

/**
 * BenefitItem — ítem de lista de beneficio con ícono circular, título y descripción.
 * Usado en EarlyAccess y puede usarse en cualquier sección de "por qué elegirnos".
 *
 * @example
 * <BenefitItem
 *   icon={Crown}
 *   iconColor="text-amber-500"
 *   iconBg="bg-amber-500/20"
 *   title="1 Mes de Plan PRO Gratis"
 *   description="Desbloquea instantáneamente…"
 * />
 */
export function BenefitItem({ icon: Icon, iconColor = 'text-primary', iconBg = 'bg-primary/20', title, description, variants }: BenefitItemProps) {
  const Wrapper = variants ? motion.div : 'div';
  return (
    <Wrapper {...(variants ? { variants } : {})} className="flex gap-4">
      <div className={`flex-shrink-0 w-12 h-12 rounded-full ${iconBg} flex items-center justify-center`}>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <div>
        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{title}</h4>
        <p className="text-slate-600 dark:text-slate-400">{description}</p>
      </div>
    </Wrapper>
  );
}
