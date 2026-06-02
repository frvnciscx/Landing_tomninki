import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Clock, Tag, ArrowLeft, TrendingUp, Share2, Bookmark,
  CheckCircle2, AlertTriangle, Lightbulb, ChevronRight
} from 'lucide-react';

const relatedPosts = [
  {
    id: 2,
    title: 'Regla del 50/30/20: la guía definitiva para ahorrar',
    category: 'Ahorro',
    readTime: '4 min',
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 3,
    title: 'Gestión de múltiples fuentes de ingreso desde un solo lugar',
    category: 'Finanzas Personales',
    readTime: '8 min',
    color: 'from-sky-500 to-blue-600',
  },
  {
    id: 4,
    title: 'Inteligencia Artificial al servicio de tus finanzas',
    category: 'Tecnología',
    readTime: '6 min',
    color: 'from-purple-500 to-fuchsia-600',
  },
];

export function BlogPost() {
  return (
    <div className="min-h-screen pt-24 pb-20">

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 mb-10">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver al Blog
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center gap-1">
              <Tag className="w-3 h-3" /> Finanzas Personales
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-slate-300 flex items-center gap-1">
              <Clock className="w-3 h-3" /> 5 min de lectura
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-amber-500/20 text-amber-400">
              ⭐ Artículo Destacado
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-slate-900 dark:text-white leading-tight mb-6">
            5 hábitos financieros que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              cambiarán tu vida
            </span>{' '}
            en 2025
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white text-sm">
                TK
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Equipo Tomin-Ki</p>
                <p className="text-xs text-slate-500">2 de Abril, 2025</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all" aria-label="Guardar artículo">
                <Bookmark className="w-4 h-4" />
              </button>
              <button className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all" aria-label="Compartir artículo">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Hero Image Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-5xl mx-auto px-6 md:px-12 mb-16"
      >
        <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-indigo-700/40 to-purple-800/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-24 h-24 text-white/30 mx-auto mb-4" />
              <p className="text-white/40 text-sm">Ilustración del artículo</p>
            </div>
          </div>
          {/* Decorative grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
      </motion.div>

      {/* Article Body + Sidebar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Main Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 min-w-0 prose prose-invert prose-lg max-w-none"
          >
            {/* Intro */}
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10 font-medium border-l-4 border-blue-500 pl-6">
              Las finanzas personales no son una asignatura del colegio, pero deberían serlo. En este artículo compartimos cinco hábitos probados por miles de usuarios de Tomin-Ki que han logrado ahorrar más, endeudarse menos y dormir mejor.
            </p>

            {/* Habit 1 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-lg">1</span>
                <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white m-0">Registra cada gasto, sin excepción</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                El primer paso hacia la libertad financiera es la consciencia. La mayoría de las personas subestiman sus gastos mensuales en un <strong className="text-white">40%</strong>. Esto se debe a que los micro-gastos —el café de camino al trabajo, la suscripción olvidada, el delivery del jueves— pasan desapercibidos.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                Con Tomin-Ki puedes categorizar automáticamente cada transacción y ver en tiempo real hacia dónde va tu dinero. El simple acto de registrar reduce el gasto impulsivo de forma orgánica.
              </p>

              {/* Callout - Tip */}
              <div className="flex gap-4 p-5 rounded-2xl bg-blue-500/10 border border-blue-500/30 my-6">
                <Lightbulb className="flex-shrink-0 w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-blue-300 mb-1">Consejo práctico</p>
                  <p className="text-sm text-slate-400 m-0">Dedica 5 minutos cada noche a revisar tus gastos del día. Hazlo un ritual, como cepillarte los dientes. La consistencia es clave.</p>
                </div>
              </div>
            </section>

            {/* Habit 2 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-lg">2</span>
                <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white m-0">Automatiza tu ahorro antes de gastar</h2>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">
                El cerebro humano es terrible tomando decisiones de ahorro en el momento. La solución: quitar la decisión de la ecuación. Configura una transferencia automática el día de tu pago para mover un porcentaje fijo hacia tu fondo de ahorro.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 my-6">
                {[
                  { value: '3x', label: 'más ahorro con automatización vs. ahorro manual', color: 'text-blue-400' },
                  { value: '73%', label: 'de usuarios reportan menos estrés financiero', color: 'text-indigo-400' },
                ].map(stat => (
                  <div key={stat.label} className="p-5 rounded-2xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-center">
                    <p className={`text-4xl font-black mb-2 ${stat.color}`}>{stat.value}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{stat.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Habit 3 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-lg">3</span>
                <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white m-0">Audita tus suscripciones cada trimestre</h2>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">
                Las suscripciones son el "buen ladrón" de las finanzas modernas. Estudios muestran que el hogar promedio paga por <strong className="text-white">3 a 5 servicios que no usa activamente</strong>. Dedica 30 minutos cada tres meses a revisar tu estado de cuenta y cancelar lo que no agregas valor.
              </p>

              {/* Warning Callout */}
              <div className="flex gap-4 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 my-6">
                <AlertTriangle className="flex-shrink-0 w-5 h-5 text-amber-400 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-amber-300 mb-1">Señal de alerta</p>
                  <p className="text-sm text-slate-400 m-0">Si al revisar tu tarjeta encuentras cargos que no reconoces de inmediato, cancela antes de investigar. Es más fácil reactivar que recuperar el dinero cobrado indebidamente.</p>
                </div>
              </div>
            </section>

            {/* Habit 4 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-lg">4</span>
                <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white m-0">Construye un fondo de emergencia antes de invertir</h2>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">
                La inversión sin red de seguridad es como hacer acrobacias sin colchoneta. Un fondo de emergencia equivalente a 3-6 meses de tus gastos fijos te protege de cometer el error más costoso: liquidar inversiones en mal momento por una urgencia evitable.
              </p>

              <ul className="space-y-3 my-6">
                {[
                  'Calcula tus gastos fijos mensuales (renta, servicios, alimentos básicos)',
                  'Multiplica por 3 si tienes empleo estable, por 6 si eres freelancer',
                  'Guárdalo en una cuenta líquida con rendimiento (CETES, cuenta de ahorro digital)',
                  'No lo toques salvo emergencia real — las vacaciones no cuentan',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                    <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-emerald-500 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Habit 5 */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 font-bold text-lg">5</span>
                <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white m-0">Revisa tu progreso mensualmente</h2>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">
                Lo que no se mide, no mejora. Reserva una "cita financiera contigo mismo" el último día de cada mes. Revisa: ¿cumpliste tu meta de ahorro? ¿En qué categoría te excediste? ¿Hay algo que ajustar en el presupuesto del próximo mes?
              </p>
              <p className="text-slate-400 leading-relaxed">
                Tomin-Ki genera automáticamente un resumen mensual con gráficas de tendencias para que esta revisión tome menos de 10 minutos y sea visualmente clara.
              </p>
            </section>

            {/* CTA inline */}
            <div className="rounded-3xl bg-gradient-to-br from-primary/30 to-indigo-900/30 border border-primary/40 p-8 text-center mb-16">
              <h3 className="text-2xl font-heading font-bold text-white mb-3">¿Listo para empezar?</h3>
              <p className="text-slate-400 mb-6">Únete al Programa de Acceso Anticipado y comienza a aplicar estos hábitos hoy con nuestra plataforma.</p>
              <Link
                to="/#early"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold transition-all hover:shadow-[0_0_24px_rgba(67,45,215,0.5)]"
              >
                Obtener Acceso VIP <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.article>

          {/* Sticky Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-80 flex-shrink-0"
          >
            <div className="sticky top-28 space-y-8">

              {/* Table of Contents */}
              <div className="rounded-2xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-6">
                <h3 className="text-sm font-bold text-slate-500 dark:text-slate-300 uppercase tracking-widest mb-4">Contenido</h3>
                <nav className="space-y-2">
                  {[
                    'Registra cada gasto',
                    'Automatiza tu ahorro',
                    'Audita tus suscripciones',
                    'Fondo de emergencia',
                    'Revisión mensual',
                  ].map((item, i) => (
                    <a
                      key={item}
                      href="#"
                      className="flex items-center gap-3 text-sm text-slate-500 hover:text-white transition-colors py-1.5 group"
                    >
                      <span className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-xs text-slate-600 group-hover:bg-primary/20 group-hover:text-primary transition-all font-medium">
                        {i + 1}
                      </span>
                      {item}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Related Articles */}
              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6">
                <h3 className="text-sm font-bold text-slate-500 dark:text-slate-300 uppercase tracking-widest mb-4">Artículos Relacionados</h3>
                <div className="space-y-4">
                  {relatedPosts.map(post => (
                    <Link
                      key={post.id}
                      to="/blog"
                      className="flex gap-3 group"
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-300 group-hover:text-white transition-colors leading-snug mb-1">
                          {post.title}
                        </p>
                        <p className="text-xs text-slate-600 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6">
                <h3 className="text-sm font-bold text-slate-500 dark:text-slate-300 uppercase tracking-widest mb-4">Compartir</h3>
                <div className="space-y-2">
                  {['Twitter / X', 'LinkedIn', 'WhatsApp', 'Copiar enlace'].map(platform => (
                    <button
                      key={platform}
                      className="w-full text-left text-sm text-slate-500 hover:text-white transition-colors py-1.5 flex items-center justify-between group"
                    >
                      {platform}
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
