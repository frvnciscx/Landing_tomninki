import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBlogStore } from '../../store/useBlogStore';
import type { PostStatus, PostCategory } from '../../types/blog';
import {
  PlusCircle, Search, Eye, Star, StarOff, Edit2, Trash2,
  CheckCircle2, Clock, Filter, ArrowUpDown, ChevronDown
} from 'lucide-react';

type SortKey = 'date' | 'title' | 'views' | 'status';

export function AdminPostList() {
  const { posts, toggleStatus, toggleFeatured, deletePost } = useBlogStore();
  const [query, setQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<PostStatus | 'all'>('all');
  const [filterCategory, setFilterCategory] = useState<PostCategory | 'all'>('all');
  const [sortKey, setSortKey] = useState<SortKey>('date');
  const [sortAsc, setSortAsc] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const categories: Array<PostCategory | 'all'> = ['all', 'Finanzas Personales', 'Ahorro', 'Inversiones', 'Tecnología', 'Consejos'];

  const filtered = posts
    .filter(p => filterStatus === 'all' || p.status === filterStatus)
    .filter(p => filterCategory === 'all' || p.category === filterCategory)
    .filter(p =>
      query === '' ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => {
      let cmp = 0;
      if (sortKey === 'date')   cmp = new Date(a.date).getTime() - new Date(b.date).getTime();
      if (sortKey === 'title')  cmp = a.title.localeCompare(b.title);
      if (sortKey === 'views')  cmp = a.views - b.views;
      if (sortKey === 'status') cmp = a.status.localeCompare(b.status);
      return sortAsc ? cmp : -cmp;
    });

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(s => !s);
    else { setSortKey(key); setSortAsc(false); }
  };

  const handleDelete = (id: string) => {
    if (deleteConfirm === id) {
      deletePost(id);
      setDeleteConfirm(null);
    } else {
      setDeleteConfirm(id);
    }
  };

  const SortIcon = ({ k }: { k: SortKey }) => (
    <ArrowUpDown className={`w-3 h-3 ml-1 inline ${sortKey === k ? 'text-primary' : 'opacity-30'}`} />
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">Entradas del Blog</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{filtered.length} entrada{filtered.length !== 1 ? 's' : ''} encontrada{filtered.length !== 1 ? 's' : ''}</p>
        </div>
        <Link
          to="/admin/posts/new"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/30"
        >
          <PlusCircle className="w-4 h-4" />
          Nueva Entrada
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-[#111116] rounded-2xl border border-slate-200 dark:border-white/8 p-4">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="search"
              placeholder="Buscar entradas..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>

          {/* Status filter */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-white/5 rounded-xl p-1">
            {(['all', 'published', 'draft'] as const).map(s => (
              <button
                key={s}
                onClick={() => setFilterStatus(s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filterStatus === s
                    ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {s === 'all' ? 'Todos' : s === 'published' ? 'Publicados' : 'Borradores'}
              </button>
            ))}
          </div>

          {/* Category filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <select
              value={filterCategory}
              onChange={e => setFilterCategory(e.target.value as PostCategory | 'all')}
              className="text-sm bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              <option value="all">Todas las categorías</option>
              {categories.slice(1).map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-[#111116] rounded-2xl border border-slate-200 dark:border-white/8 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 dark:border-white/5">
                <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <button onClick={() => handleSort('title')} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Entrada <SortIcon k="title" />
                  </button>
                </th>
                <th className="text-left px-4 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Categoría
                </th>
                <th className="text-left px-4 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <button onClick={() => handleSort('status')} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Estado <SortIcon k="status" />
                  </button>
                </th>
                <th className="text-left px-4 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <button onClick={() => handleSort('views')} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Vistas <SortIcon k="views" />
                  </button>
                </th>
                <th className="text-left px-4 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <button onClick={() => handleSort('date')} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Fecha <SortIcon k="date" />
                  </button>
                </th>
                <th className="text-right px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-20 text-slate-400 dark:text-slate-500 text-sm">
                    <p className="mb-3">No se encontraron entradas para los filtros seleccionados.</p>
                    <Link
                      to="/admin/posts/new"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary/90 transition-all min-h-[44px]"
                    >
                      Crear primera entrada
                    </Link>
                  </td>
                </tr>
              ) : filtered.map(post => (
                <tr key={post.id} className="hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
                  {/* Title */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                        <span className="text-white text-xs font-bold">{post.title.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white line-clamp-1 max-w-xs">{post.title}</p>
                        <p className="text-xs text-slate-400 mt-0.5">/{post.slug}</p>
                      </div>
                      {post.featured && <Star className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />}
                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-4 py-4">
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-lg">
                      {post.category}
                    </span>
                  </td>

                   {/* Status */}
                  <td className="px-4 py-4">
                    <button
                      onClick={() => toggleStatus(post.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wide transition-all ${
                        post.status === 'published'
                          ? 'bg-emerald-500/10 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20'
                          : 'bg-amber-500/10 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 hover:bg-amber-500/20'
                      }`}
                      title="Click para cambiar estado"
                    >
                      {post.status === 'published'
                        ? <CheckCircle2 className="w-3 h-3" />
                        : <Clock className="w-3 h-3" />}
                      <span>{post.status === 'published' ? 'Publicado' : 'Borrador'}</span>
                      <ChevronDown className="w-3 h-3 ml-0.5 opacity-60" />
                    </button>
                  </td>


                  {/* Views */}
                  <td className="px-4 py-4">
                    <span className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
                      <Eye className="w-3.5 h-3.5" />
                      {post.views.toLocaleString()}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="px-4 py-4 text-sm text-slate-500 dark:text-slate-400">
                    {new Date(post.date).toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </td>

                  {/* Actions — a11y-touch-target: min-h/w 44px + aria-label */}
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-1">
                      {/* Toggle featured */}
                      <button
                        onClick={() => toggleFeatured(post.id)}
                        aria-label={post.featured ? `Quitar destacado de "${post.title}"` : `Destacar "${post.title}"`}
                        aria-pressed={post.featured}
                        className={`p-2.5 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ${
                          post.featured
                            ? 'text-amber-500 hover:bg-amber-100 dark:hover:bg-amber-500/20'
                            : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10'
                        }`}
                      >
                        {post.featured
                          ? <Star className="w-4 h-4 fill-current" aria-hidden="true" />
                          : <StarOff className="w-4 h-4" aria-hidden="true" />}
                      </button>

                      {/* Edit */}
                      <Link
                        to={`/admin/posts/${post.id}/edit`}
                        aria-label={`Editar "${post.title}"`}
                        className="p-2.5 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                      >
                        <Edit2 className="w-4 h-4" aria-hidden="true" />
                      </Link>

                      {/* Delete — fb-destructive-confirmation: 2-click + aria-label change */}
                      <button
                        onClick={() => handleDelete(post.id)}
                        aria-label={
                          deleteConfirm === post.id
                            ? `Confirmar eliminación de "${post.title}"`
                            : `Eliminar "${post.title}"`
                        }
                        className={`p-2.5 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ${
                          deleteConfirm === post.id
                            ? 'bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 ring-1 ring-red-400'
                            : 'text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10'
                        }`}
                      >
                        <Trash2 className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
