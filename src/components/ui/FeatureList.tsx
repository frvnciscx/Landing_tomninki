import { Check } from 'lucide-react';

interface FeatureListProps {
  items: string[];
  /** Icon color class */
  color?: string;
  /** Gap between items */
  gap?: string;
}

/**
 * FeatureList — lista de características con íconos de check.
 * Usada en los cards de Pricing y en el editor del Blog.
 *
 * @example
 * <FeatureList
 *   items={['Control básico de gastos', 'Dashboard básico', '2 espacios']}
 *   color="text-primary"
 * />
 */
export function FeatureList({ items, color = 'text-primary', gap = 'space-y-4' }: FeatureListProps) {
  return (
    <ul className={gap}>
      {items.map(item => (
        <li key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
          <Check className={`w-5 h-5 flex-shrink-0 ${color}`} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}
