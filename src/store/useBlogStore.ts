import { useState, useCallback } from 'react';
import type { BlogPost, PostStatus, PostCategory } from '../types/blog';

// ─── Seed Data ─────────────────────────────────────────────────────────────────

const SEED_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '5 hábitos financieros que cambiarán tu vida en 2025',
    excerpt: 'Descubre las estrategias que los expertos en finanzas personales utilizan para maximizar sus ingresos y reducir gastos innecesarios de forma sostenible.',
    content: 'Las finanzas personales no son una asignatura del colegio, pero deberían serlo...',
    category: 'Finanzas Personales',
    author: 'Equipo Tomin-Ki',
    date: '2025-04-02',
    readTime: '5 min',
    slug: '5-habitos-financieros',
    status: 'published',
    featured: true,
    gradient: 'from-blue-500 to-indigo-600',
    views: 1240,
    updatedAt: '2025-04-02T10:00:00Z',
  },
  {
    id: '2',
    title: 'Cómo proteger tus datos financieros en la era digital',
    excerpt: 'La seguridad bancaria online evoluciona a ritmo vertiginoso. Aprende cuáles son las mejores prácticas para blindar tu información personal.',
    content: 'La seguridad de los datos financieros es fundamental en el mundo digital actual...',
    category: 'Tecnología',
    author: 'Equipo Tomin-Ki',
    date: '2025-03-29',
    readTime: '7 min',
    slug: 'proteger-datos-financieros',
    status: 'published',
    featured: false,
    gradient: 'from-emerald-500 to-teal-600',
    views: 876,
    updatedAt: '2025-03-29T14:00:00Z',
  },
  {
    id: '3',
    title: 'Inteligencia Artificial al servicio de tus finanzas',
    excerpt: 'La IA ya no es ciencia ficción. Así es como Tomin-Ki y otras plataformas usan modelos de lenguaje para predecir gastos futuros y optimizar presupuestos.',
    content: 'La Inteligencia Artificial está transformando la gestión financiera personal...',
    category: 'Tecnología',
    author: 'Equipo Tomin-Ki',
    date: '2025-03-22',
    readTime: '6 min',
    slug: 'ia-finanzas-personales',
    status: 'draft',
    featured: false,
    gradient: 'from-purple-500 to-fuchsia-600',
    views: 0,
    updatedAt: '2025-03-22T09:00:00Z',
  },
  {
    id: '4',
    title: 'Regla del 50/30/20: la guía definitiva para ahorrar',
    excerpt: 'El método de presupuesto más popular del mundo desglosado de forma práctica.',
    content: 'La regla 50/30/20 es un marco de presupuesto simple pero poderoso...',
    category: 'Ahorro',
    author: 'Equipo Tomin-Ki',
    date: '2025-03-15',
    readTime: '4 min',
    slug: 'regla-50-30-20',
    status: 'published',
    featured: false,
    gradient: 'from-amber-500 to-orange-500',
    views: 2100,
    updatedAt: '2025-03-15T11:00:00Z',
  },
];

// ─── Storage Key ───────────────────────────────────────────────────────────────

const STORAGE_KEY = 'tomin-ki-blog-posts';

function loadFromStorage(): BlogPost[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as BlogPost[];
  } catch { /* ignore */ }
  return SEED_POSTS;
}

function saveToStorage(posts: BlogPost[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

// ─── Store Hook ────────────────────────────────────────────────────────────────

export function useBlogStore() {
  const [posts, setPosts] = useState<BlogPost[]>(loadFromStorage);

  const commit = useCallback((next: BlogPost[]) => {
    setPosts(next);
    saveToStorage(next);
  }, []);

  // Create
  const createPost = useCallback((data: Omit<BlogPost, 'id' | 'views' | 'updatedAt'>): BlogPost => {
    const newPost: BlogPost = {
      ...data,
      id: Date.now().toString(),
      views: 0,
      updatedAt: new Date().toISOString(),
    };
    commit([newPost, ...posts]);
    return newPost;
  }, [posts, commit]);

  // Update
  const updatePost = useCallback((id: string, data: Partial<BlogPost>): void => {
    commit(posts.map(p => p.id === id ? { ...p, ...data, updatedAt: new Date().toISOString() } : p));
  }, [posts, commit]);

  // Delete
  const deletePost = useCallback((id: string): void => {
    commit(posts.filter(p => p.id !== id));
  }, [posts, commit]);

  // Toggle status
  const toggleStatus = useCallback((id: string): void => {
    commit(posts.map(p =>
      p.id === id
        ? { ...p, status: p.status === 'published' ? 'draft' : 'published' as PostStatus, updatedAt: new Date().toISOString() }
        : p
    ));
  }, [posts, commit]);

  // Toggle featured
  const toggleFeatured = useCallback((id: string): void => {
    commit(posts.map(p => p.id === id ? { ...p, featured: !p.featured, updatedAt: new Date().toISOString() } : p));
  }, [posts, commit]);

  // Get by id
  const getPost = useCallback((id: string): BlogPost | undefined => {
    return posts.find(p => p.id === id);
  }, [posts]);

  // Stats
  const stats = {
    total: posts.length,
    published: posts.filter(p => p.status === 'published').length,
    drafts: posts.filter(p => p.status === 'draft').length,
    totalViews: posts.reduce((acc, p) => acc + p.views, 0),
    featured: posts.filter(p => p.featured).length,
    byCategory: Object.fromEntries(
      ['Finanzas Personales', 'Ahorro', 'Inversiones', 'Tecnología', 'Consejos'].map(cat => [
        cat,
        posts.filter(p => p.category === cat as PostCategory).length,
      ])
    ),
  };

  return { posts, stats, createPost, updatePost, deletePost, toggleStatus, toggleFeatured, getPost };
}
