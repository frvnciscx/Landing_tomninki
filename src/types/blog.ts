// ─── Types ─────────────────────────────────────────────────────────────────────

export type PostStatus = 'published' | 'draft';

export type PostCategory =
  | 'Finanzas Personales'
  | 'Ahorro'
  | 'Inversiones'
  | 'Tecnología'
  | 'Consejos'
  | 'Sin categoría';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: PostCategory;
  author: string;
  date: string;          // ISO date string
  readTime: string;      // e.g. "5 min"
  slug: string;
  status: PostStatus;
  featured: boolean;
  gradient: string;      // Tailwind gradient classes e.g. "from-blue-500 to-indigo-600"
  views: number;
  updatedAt: string;     // ISO date string
}

export const POST_CATEGORIES: PostCategory[] = [
  'Finanzas Personales',
  'Ahorro',
  'Inversiones',
  'Tecnología',
  'Consejos',
  'Sin categoría',
];

export const GRADIENT_OPTIONS = [
  { label: 'Azul Índigo',    value: 'from-blue-500 to-indigo-600' },
  { label: 'Verde Esmeralda',value: 'from-emerald-500 to-teal-600' },
  { label: 'Violeta Fucsia', value: 'from-purple-500 to-fuchsia-600' },
  { label: 'Ámbar Naranja',  value: 'from-amber-500 to-orange-500' },
  { label: 'Cielo Azul',     value: 'from-sky-500 to-blue-600' },
  { label: 'Rosa Fucsia',    value: 'from-rose-500 to-pink-600' },
];
