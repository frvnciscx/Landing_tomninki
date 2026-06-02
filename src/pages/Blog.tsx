import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Clock, Tag, ArrowRight, Search, TrendingUp, Shield, Brain,
  Wallet, PenLine, BookOpen, Filter
} from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories = ['Todos', 'Finanzas Personales', 'Ahorro', 'Inversiones', 'Tecnología', 'Consejos'];

const posts = [
  {
    id: 1,
    title: '5 hábitos financieros que cambiarán tu vida en 2025',
    excerpt: 'Descubre las estrategias que los expertos en finanzas personales utilizan para maximizar sus ingresos y reducir gastos innecesarios de forma sostenible.',
    category: 'Finanzas Personales',
    author: 'Equipo Tomin-Ki',
    date: '2 Abr 2025',
    readTime: '5 min',
    icon: TrendingUp,
    color: 'from-blue-500 to-indigo-600',
    featured: true,
  },
  {
    id: 2,
    title: 'Cómo proteger tus datos financieros en la era digital',
    excerpt: 'La seguridad bancaria online evoluciona a ritmo vertiginoso. Aprende cuáles son las mejores prácticas para blindar tu información personal y patrimonial.',
    category: 'Tecnología',
    author: 'Equipo Tomin-Ki',
    date: '29 Mar 2025',
    readTime: '7 min',
    icon: Shield,
    color: 'from-emerald-500 to-teal-600',
    featured: false,
  },
  {
    id: 3,
    title: 'Inteligencia Artificial al servicio de tus finanzas',
    excerpt: 'La IA ya no es ciencia ficción. Así es como Tomin-Ki y otras plataformas usan modelos de lenguaje para predecir gastos futuros y optimizar presupuestos.',
    category: 'Tecnología',
    author: 'Equipo Tomin-Ki',
    date: '22 Mar 2025',
    readTime: '6 min',
    icon: Brain,
    color: 'from-purple-500 to-fuchsia-600',
    featured: false,
  },
  {
    id: 4,
    title: 'Regla del 50/30/20: la guía definitiva para ahorrar',
    excerpt: 'El método de presupuesto más popular del mundo desglosado de forma práctica. Aprende a distribuir tu ingreso mensual sin sacrificar tu calidad de vida.',
    category: 'Ahorro',
    author: 'Equipo Tomin-Ki',
    date: '15 Mar 2025',
    readTime: '4 min',
    icon: Wallet,
    color: 'from-amber-500 to-orange-500',
    featured: false,
  },
  {
    id: 5,
    title: 'Gestión de múltiples fuentes de ingreso desde un solo lugar',
    excerpt: 'Freelancers, emprendedores y empleados a tiempo parcial comparten el mismo reto: ordenar flujos de dinero dispersos. Aquí la solución definitiva.',
    category: 'Finanzas Personales',
    author: 'Equipo Tomin-Ki',
    date: '8 Mar 2025',
    readTime: '8 min',
    icon: TrendingUp,
    color: 'from-sky-500 to-blue-600',
    featured: false,
  },
  {
    id: 6,
    title: 'Inversiones para principiantes: por dónde empezar',
    excerpt: 'No necesitas ser millonario para invertir. Descubre los instrumentos financieros más accesibles en México y Latinoamérica para cualquier nivel de ingreso.',
    category: 'Inversiones',
    author: 'Equipo Tomin-Ki',
    date: '1 Mar 2025',
    readTime: '10 min',
    icon: TrendingUp,
    color: 'from-rose-500 to-pink-600',
    featured: false,
  },
];

// ─── Skeleton Card (perf-skeleton-states) ─────────────────────────────────────

function SkeletonCard() {
  return (
    <div className="flex flex-col bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden animate-pulse">
      <div className="h-1.5 w-full bg-slate-200 dark:bg-white/10" />
      <div className="p-8 flex flex-col gap-4">
        <div className="w-14 h-14 rounded-2xl bg-slate-200 dark:bg-white/10" />
        <div className="h-4 w-24 rounded-full bg-slate-200 dark:bg-white/10" />
        <div className="space-y-2">
          <div className="h-5 w-full rounded bg-slate-200 dark:bg-white/10" />
          <div className="h-5 w-4/5 rounded bg-slate-200 dark:bg-white/10" />
        </div>
        <div className="space-y-1.5 flex-1">
          <div className="h-3.5 w-full rounded bg-slate-100 dark:bg-white/5" />
          <div className="h-3.5 w-5/6 rounded bg-slate-100 dark:bg-white/5" />
          <div className="h-3.5 w-4/6 rounded bg-slate-100 dark:bg-white/5" />
        </div>
        <div className="flex justify-between pt-4 border-t border-slate-200 dark:border-white/5">
          <div className="h-3 w-16 rounded bg-slate-200 dark:bg-white/10" />
          <div className="h-3 w-20 rounded bg-slate-200 dark:bg-white/10" />
        </div>
      </div>
    </div>
  );
}

// ─── Empty State (ia-empty-states) ────────────────────────────────────────────

function EmptyState({ query, category, onClear }: { query: string; category: string; onClear: () => void }) {
  const isSearch = query !== '';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      className="col-span-full flex flex-col items-center py-20 px-6 text-center"
    >
      {/* Illustration */}
      <div className="w-20 h-20 rounded-3xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6">
        {isSearch
          ? <Search className="w-8 h-8 text-slate-400" aria-hidden="true" />
          : <BookOpen className="w-8 h-8 text-slate-400" aria-hidden="true" />}
      </div>

      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
        {isSearch
          ? `Sin resultados para "${query}"`
          : `Aún no hay artículos en "${category}"`}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8 text-sm leading-relaxed">
        {isSearch
          ? 'Prueba con otras palabras clave o explora todas las categorías disponibles.'
          : 'Nuestro equipo está trabajando en contenido para esta categoría. ¡Vuelve pronto!'}
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button
          onClick={onClear}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/30 min-h-[44px]"
        >
          <Filter className="w-4 h-4" aria-hidden="true" />
          {isSearch ? 'Limpiar búsqueda' : 'Ver todos los artículos'}
        </button>
        <Link
          to="/admin/posts/new"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-white/5 transition-all min-h-[44px]"
        >
          <PenLine className="w-4 h-4" aria-hidden="true" />
          Crear artículo
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Card Variants ─────────────────────────────────────────────────────────────

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' as const },
  }),
};

// ─── Blog Page ─────────────────────────────────────────────────────────────────

export function Blog() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [query, setQuery] = useState('');
  const [isLoading] = useState(false); // Set true while fetching from API

  const featured = posts.find(p => p.featured);
  const filtered = posts
    .filter(p => !p.featured)
    .filter(p => activeCategory === 'Todos' || p.category === activeCategory)
    .filter(p =>
      query === '' ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(query.toLowerCase())
    );

  const handleClearFilters = () => {
    setQuery('');
    setActiveCategory('Todos');
  };

  return (
    <div className="min-h-screen pt-24 pb-20">

      {/* Hero Banner */}
      <section className="relative overflow-hidden py-24 px-6 md:px-12 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold border border-primary/30">
            Blog Oficial
          </span>
          <h1 className="text-5xl md:text-6xl font-heading font-black text-slate-900 dark:text-white mb-6 leading-tight">
            Ideas para tu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">
              libertad financiera
            </span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 mb-10">
            Artículos, guías y consejos del equipo de Tomin-Ki para que tomes el control de tu dinero.
          </p>

          {/* Search bar — a11y: aria-label + focus-visible */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" aria-hidden="true" />
            <label htmlFor="blog-search" className="sr-only">Buscar artículos</label>
            <input
              id="blog-search"
              type="search"
              placeholder="Buscar artículos..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full pl-14 pr-5 py-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 transition"
            />
            {/* Clear button — a11y: visible when active */}
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Limpiar búsqueda"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                ✕
              </button>
            )}
          </div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Featured Article */}
        {featured && query === '' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 group cursor-pointer"
          >
            <Link to="/blog/5-habitos-financieros" className="block" aria-label={`Leer artículo destacado: ${featured.title}`}>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-white/10 p-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <div className="relative rounded-[22px] overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${featured.color} opacity-20`} />
                  <div className="relative flex flex-col md:flex-row gap-8 p-10">
                    <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${featured.color} flex items-center justify-center shadow-2xl`}>
                      <featured.icon className="w-10 h-10 text-white" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${featured.color} text-white`}>
                          Destacado
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-slate-300 flex items-center gap-1">
                          <Tag className="w-3 h-3" aria-hidden="true" /> {featured.category}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                        {featured.title}
                      </h2>
                      <p className="text-slate-500 dark:text-slate-400 text-lg mb-6 leading-relaxed">{featured.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                          <span>{featured.author}</span>
                          <span aria-hidden="true">•</span>
                          <span>{featured.date}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" aria-hidden="true" />{featured.readTime}
                          </span>
                        </div>
                        <span className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                          Leer artículo <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Category Filter — a11y: role listbox, min-h touch target */}
        <nav aria-label="Filtrar por categoría" className="flex flex-wrap gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all min-h-[44px] ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Results count */}
        <AnimatePresence mode="wait">
          {!isLoading && (query || activeCategory !== 'Todos') && (
            <motion.p
              key="count"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-sm text-slate-500 dark:text-slate-400 mb-6"
              aria-live="polite"
            >
              {filtered.length > 0
                ? `${filtered.length} artículo${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`
                : 'Sin resultados'}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Articles Grid — skeleton | empty state | cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // perf-skeleton-states: imita el layout del contenido real
            Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          ) : filtered.length > 0 ? (
            filtered.map((post, i) => (
              <motion.article
                key={post.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group flex flex-col bg-slate-50 dark:bg-white/4 border border-slate-200/60 dark:border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 hover:shadow-[0_20px_40px_rgba(67,45,215,0.15)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 h-full"
              >
                <Link
                  to="/blog/5-habitos-financieros"
                  className="flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-inset"
                  aria-label={`Leer: ${post.title}`}
                >
                  {/* Gradient top bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${post.color} opacity-80 group-hover:opacity-100 transition-opacity`} />

                  <div className="p-8 flex flex-col h-full gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${post.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <post.icon className="w-7 h-7 text-white" aria-hidden="true" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/10">
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/5 text-[11px] font-medium text-slate-400 dark:text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" aria-hidden="true" />{post.readTime}
                      </span>
                      <span>{post.date}</span>
                    </div>

                    <span className="mt-2 flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                      Leer artículo <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </motion.article>

            ))
          ) : (
            // ia-empty-states: estado vacío con ilustración + CTA
            <EmptyState
              query={query}
              category={activeCategory}
              onClear={handleClearFilters}
            />
          )}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 rounded-3xl bg-gradient-to-br from-primary to-indigo-950 border border-primary/20 p-12 text-center shadow-2xl shadow-primary/20"
        >
          <h3 className="text-3xl font-heading font-bold text-white mb-3">¿No quieres perderte nada?</h3>
          <p className="text-slate-200 mb-8 max-w-lg mx-auto text-lg leading-relaxed">
            Suscríbete a nuestro boletín semanal y recibe artículos exclusivos directo en tu correo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">Tu correo electrónico</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="tu@correo.com"
              className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/30 text-white placeholder-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 min-h-[44px]"
            />
            <button className="px-7 py-3.5 rounded-full bg-white text-primary hover:bg-slate-100 font-bold transition-all shadow-lg shadow-black/10 whitespace-nowrap min-h-[44px]">
              Suscribirme
            </button>
          </div>
        </motion.div>


      </div>
    </div>
  );
}
