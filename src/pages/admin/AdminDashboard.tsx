import { Link } from 'react-router-dom';
import { useBlogStore } from '../../store/useBlogStore';
import { FileText, Eye, Star, TrendingUp, PlusCircle, ArrowRight, CheckCircle2, Clock } from 'lucide-react';

export function AdminDashboard() {
  const { posts, stats } = useBlogStore();
  const recent = [...posts].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).slice(0, 5);

  const statCards = [
    { label: 'Total de Entradas', value: stats.total, icon: FileText, color: 'from-blue-500 to-indigo-600', bg: 'bg-blue-500/10', text: 'text-blue-500' },
    { label: 'Publicadas',        value: stats.published, icon: CheckCircle2, color: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-500/10', text: 'text-emerald-500' },
    { label: 'Borradores',        value: stats.drafts, icon: Clock, color: 'from-amber-500 to-orange-500', bg: 'bg-amber-500/10', text: 'text-amber-500' },
    { label: 'Total de Vistas',   value: stats.totalViews.toLocaleString(), icon: Eye, color: 'from-purple-500 to-fuchsia-600', bg: 'bg-purple-500/10', text: 'text-purple-500' },
    { label: 'Destacadas',        value: stats.featured, icon: Star, color: 'from-rose-500 to-pink-600', bg: 'bg-rose-500/10', text: 'text-rose-500' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">Dashboard</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Gestiona el contenido del blog de Tomin-Ki.</p>
        </div>
        <Link
          to="/admin/posts/new"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/30"
        >
          <PlusCircle className="w-4 h-4" />
          Nueva Entrada
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {statCards.map(card => (
          <div key={card.label} className="bg-white dark:bg-[#111116] rounded-2xl p-5 border border-slate-200 dark:border-white/8">
            <div className={`w-10 h-10 rounded-xl ${card.bg} flex items-center justify-center mb-3`}>
              <card.icon className={`w-5 h-5 ${card.text}`} />
            </div>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">{card.value}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{card.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Recent Posts */}
        <div className="lg:col-span-2 bg-white dark:bg-[#111116] rounded-2xl border border-slate-200 dark:border-white/8">
          <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-white/5">
            <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Entradas Recientes</h3>
            <Link to="/admin/posts" className="text-xs text-primary hover:underline flex items-center gap-1">
              Ver todas <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-white/5">
            {recent.map(post => (
              <div key={post.id} className="flex items-center gap-4 px-6 py-4">
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 dark:text-white truncate">{post.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{post.category} · {post.readTime}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <Eye className="w-3 h-3" />{post.views.toLocaleString()}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    post.status === 'published'
                      ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                      : 'bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400'
                  }`}>
                    {post.status === 'published' ? 'Publicado' : 'Borrador'}
                  </span>
                  <Link to={`/admin/posts/${post.id}/edit`} className="text-xs text-primary hover:underline">
                    Editar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* By Category */}
        <div className="bg-white dark:bg-[#111116] rounded-2xl border border-slate-200 dark:border-white/8">
          <div className="p-6 border-b border-slate-100 dark:border-white/5">
            <h3 className="font-semibold text-slate-900 dark:text-white text-sm flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              Por Categoría
            </h3>
          </div>
          <div className="p-6 space-y-4">
            {Object.entries(stats.byCategory).map(([cat, count]) => (
              <div key={cat}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-600 dark:text-slate-400 font-medium">{cat}</span>
                  <span className="text-slate-900 dark:text-white font-bold">{count}</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100 dark:bg-white/10">
                  <div
                    className="h-1.5 rounded-full bg-primary transition-all"
                    style={{ width: stats.total > 0 ? `${(count / stats.total) * 100}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
