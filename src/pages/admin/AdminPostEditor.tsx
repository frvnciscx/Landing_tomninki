import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBlogStore } from '../../store/useBlogStore';
import { POST_CATEGORIES, GRADIENT_OPTIONS } from '../../types/blog';
import type { BlogPost, PostCategory, PostStatus } from '../../types/blog';
import { Save, Send, ArrowLeft, Eye, Star } from 'lucide-react';

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

const EMPTY_FORM: Omit<BlogPost, 'id' | 'views' | 'updatedAt'> = {
  title: '',
  excerpt: '',
  content: '',
  category: 'Finanzas Personales',
  author: 'Equipo Tomin-Ki',
  date: new Date().toISOString().split('T')[0],
  readTime: '5 min',
  slug: '',
  status: 'draft',
  featured: false,
  gradient: 'from-blue-500 to-indigo-600',
};

export function AdminPostEditor() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getPost, createPost, updatePost } = useBlogStore();
  const isEditing = Boolean(id);

  const [form, setForm] = useState(EMPTY_FORM);
  const [saved, setSaved] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Load existing post when editing
  useEffect(() => {
    if (id) {
      const post = getPost(id);
      if (post) {
        const { views: _v, updatedAt: _u, id: _id, ...rest } = post;
        setForm(rest);
      }
    }
  }, [id, getPost]);

  // Auto-generate slug from title
  useEffect(() => {
    if (!isEditing) {
      setForm(f => ({ ...f, slug: generateSlug(f.title) }));
    }
  }, [form.title, isEditing]);

  const set = <K extends keyof typeof form>(key: K, value: typeof form[K]) => {
    setForm(f => ({ ...f, [key]: value }));
    setErrors(e => ({ ...e, [key]: '' }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.title.trim()) e.title = 'El título es requerido.';
    if (!form.excerpt.trim()) e.excerpt = 'El resumen es requerido.';
    if (!form.content.trim()) e.content = 'El contenido es requerido.';
    if (!form.slug.trim()) e.slug = 'El slug es requerido.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSave = (status: PostStatus) => {
    if (!validate()) return;
    const data = { ...form, status };
    if (isEditing && id) {
      updatePost(id, data);
    } else {
      createPost(data);
    }
    setSaved(true);
    setTimeout(() => {
      navigate('/admin/posts');
    }, 800);
  };

  const wordCount = form.content.split(/\s+/).filter(Boolean).length;
  const estimatedRead = Math.max(1, Math.ceil(wordCount / 200));

  const Field = ({ label, error, required, children }: { label: string; error?: string; required?: boolean; children: React.ReactNode }) => (
    <div>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );

  const inputClass = (hasError?: boolean) =>
    `w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border ${hasError ? 'border-red-400' : 'border-slate-200 dark:border-white/10'} text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition`;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/admin/posts')} className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
              {isEditing ? 'Editar Entrada' : 'Nueva Entrada'}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {wordCount} palabras · {estimatedRead} min de lectura estimado
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {saved && (
            <span className="text-sm text-emerald-500 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Guardado
            </span>
          )}
          <button
            onClick={() => handleSave('draft')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
          >
            <Save className="w-4 h-4" />
            Guardar Borrador
          </button>
          <button
            onClick={() => handleSave('published')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            <Send className="w-4 h-4" />
            Publicar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Main Fields */}
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white dark:bg-[#111116] rounded-2xl border border-slate-200 dark:border-white/8 p-6 space-y-5">

            <Field label="Título" required error={errors.title}>
              <input
                type="text"
                value={form.title}
                onChange={e => set('title', e.target.value)}
                placeholder="Ej: 5 hábitos financieros que cambiarán tu vida"
                className={inputClass(!!errors.title)}
              />
            </Field>

            <Field label="Resumen / Excerpt" required error={errors.excerpt}>
              <textarea
                rows={3}
                value={form.excerpt}
                onChange={e => set('excerpt', e.target.value)}
                placeholder="Descripción breve que se mostrará en el listado del blog..."
                className={inputClass(!!errors.excerpt)}
              />
            </Field>

            <Field label="Slug (URL)" required error={errors.slug}>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">/blog/</span>
                <input
                  type="text"
                  value={form.slug}
                  onChange={e => set('slug', e.target.value)}
                  placeholder="mi-entrada-del-blog"
                  className={`${inputClass(!!errors.slug)} pl-14`}
                />
              </div>
            </Field>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-[#111116] rounded-2xl border border-slate-200 dark:border-white/8 p-6">
            <Field label="Contenido (Markdown)" required error={errors.content}>
              <textarea
                rows={18}
                value={form.content}
                onChange={e => set('content', e.target.value)}
                placeholder={`## Introducción\n\nEscribe aquí el contenido de tu entrada...\n\n## Sección 1\n\nPuedes usar formato Markdown.`}
                className={`${inputClass(!!errors.content)} font-mono text-xs leading-relaxed resize-none`}
              />
            </Field>
            <p className="text-xs text-slate-400 mt-2">{wordCount} palabras · estimado: {estimatedRead} min</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">

          {/* Status & Meta */}
          <div className="bg-white dark:bg-[#111116] rounded-2xl border border-slate-200 dark:border-white/8 p-5 space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Meta</h3>

            <Field label="Estado">
              <select value={form.status} onChange={e => set('status', e.target.value as PostStatus)} className={inputClass()}>
                <option value="draft">Borrador</option>
                <option value="published">Publicado</option>
              </select>
            </Field>

            <Field label="Categoría">
              <select value={form.category} onChange={e => set('category', e.target.value as PostCategory)} className={inputClass()}>
                {POST_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </Field>

            <Field label="Autor">
              <input type="text" value={form.author} onChange={e => set('author', e.target.value)} className={inputClass()} />
            </Field>

            <div className="grid grid-cols-2 gap-3">
              <Field label="Fecha">
                <input type="date" value={form.date} onChange={e => set('date', e.target.value)} className={inputClass()} />
              </Field>
              <Field label="Tiempo lectura">
                <input type="text" value={form.readTime} onChange={e => set('readTime', e.target.value)} placeholder="5 min" className={inputClass()} />
              </Field>
            </div>
          </div>

          {/* Visual */}
          <div className="bg-white dark:bg-[#111116] rounded-2xl border border-slate-200 dark:border-white/8 p-5 space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Visual</h3>

            <Field label="Gradiente de Color">
              <div className="grid grid-cols-3 gap-2">
                {GRADIENT_OPTIONS.map(g => (
                  <button
                    key={g.value}
                    onClick={() => set('gradient', g.value)}
                    title={g.label}
                    className={`h-10 rounded-xl bg-gradient-to-br ${g.value} transition-all ${
                      form.gradient === g.value ? 'ring-2 ring-offset-2 ring-primary dark:ring-offset-[#111116] scale-95' : 'hover:scale-95'
                    }`}
                  />
                ))}
              </div>
            </Field>

            {/* Preview Card */}
            <div className={`h-16 rounded-xl bg-gradient-to-br ${form.gradient} flex items-center justify-center`}>
              <span className="text-white text-xs font-bold opacity-80 px-4 text-center line-clamp-2">
                {form.title || 'Vista previa del gradiente'}
              </span>
            </div>
          </div>

          {/* Options */}
          <div className="bg-white dark:bg-[#111116] rounded-2xl border border-slate-200 dark:border-white/8 p-5 space-y-3">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Opciones</h3>

            <label className="flex items-center justify-between gap-3 cursor-pointer group">
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <Star className="w-4 h-4 text-amber-500" />
                Artículo Destacado
              </div>
              <div
                onClick={() => set('featured', !form.featured)}
                className={`relative w-11 h-6 rounded-full transition-colors ${form.featured ? 'bg-primary' : 'bg-slate-200 dark:bg-white/10'}`}
              >
                <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all ${form.featured ? 'left-6' : 'left-1'}`} />
              </div>
            </label>

            <label className="flex items-center justify-between gap-3 cursor-pointer">
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <Eye className="w-4 h-4 text-slate-400" />
                Vista previa pública
              </div>
              <a
                href={`/blog/${form.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline"
              >
                Abrir →
              </a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
