import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  role: string;
  text: string;
  rating?: number;
  avatarInitials?: string;
}

/**
 * ReviewCard — tarjeta de testimonio con rating, texto y autor.
 * Usa el patrón de SocialProof pero reutilizable independientemente.
 *
 * @example
 * <ReviewCard
 *   name="María González"
 *   role="Usuario Particular"
 *   text="Desde que uso Tomin-ki puedo controlar mis gastos diarios..."
 * />
 */
export function ReviewCard({ name, role, text, rating = 5, avatarInitials }: ReviewCardProps) {
  const initials = avatarInitials ?? name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div className="bg-white dark:bg-[#1A1A22] p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-white/5 flex flex-col h-full">
      {/* Stars */}
      <div className="flex gap-1 text-amber-500 mb-6" aria-label={`${rating} de 5 estrellas`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-current' : 'opacity-30'}`} />
        ))}
      </div>

      {/* Text */}
      <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg flex-1 leading-relaxed">
        &ldquo;{text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
          {initials}
        </div>
        <div>
          <p className="font-bold text-slate-900 dark:text-white text-sm">{name}</p>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
