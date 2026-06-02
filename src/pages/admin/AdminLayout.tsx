import { useState, useEffect, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, FileText, PlusCircle,
  ExternalLink, ChevronRight, Menu, X
} from 'lucide-react';
import { ThemePicker } from '../../components/ThemePicker';
import logoSvg from '../../logo tominki 1.svg';

const NAV_ITEMS = [
  { to: '/admin',           label: 'Dashboard',     icon: LayoutDashboard, exact: true },
  { to: '/admin/posts',     label: 'Entradas',      icon: FileText,        exact: true },
  { to: '/admin/posts/new', label: 'Nueva Entrada', icon: PlusCircle,      exact: true },
];

export function AdminLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const isActive = (to: string, exact: boolean) =>
    exact ? location.pathname === to : location.pathname.startsWith(to);

  // Close sidebar on navigation (mobile)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="h-screen flex bg-slate-100 dark:bg-[#09090b] text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-hidden relative">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[80] lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 w-64 flex-shrink-0 bg-white dark:bg-[#111116] border-r border-slate-200 dark:border-white/8 flex flex-col z-[90] 
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="h-16 flex items-center justify-between gap-2.5 px-6 border-b border-slate-200 dark:border-white/8">
          <div className="flex items-center gap-2.5">
          <img src={logoSvg} alt="Tomin-Ki" className="w-8 h-8 object-contain" />
            <span className="font-heading font-bold text-slate-900 dark:text-white tracking-tight">Tomin-Ki</span>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-1 rounded-md hover:bg-slate-100 dark:hover:bg-white/5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map(item => {
            const active = isActive(item.to, item.exact);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? 'bg-primary text-white shadow-md shadow-primary/30'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
                {active && <ChevronRight className="w-3.5 h-3.5 ml-auto opacity-60" />}
              </Link>
            );
          })}
        </nav>

        {/* Bottom: External Link */}
        <div className="px-4 pb-5 pt-4 border-t border-slate-200 dark:border-white/8 space-y-4">
          <Link
            to="/"
            target="_blank"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            Ver Sitio Público
          </Link>
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 bg-white dark:bg-[#111116] border-b border-slate-200 dark:border-white/8 flex items-center justify-between px-4 md:px-8 gap-4 flex-shrink-0">
          <div className="flex items-center gap-4 overflow-hidden">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 flex-shrink-0"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-sm font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-2 truncate">
              <span className="hidden sm:inline">Admin</span>
              <ChevronRight className="w-3.5 h-3.5 hidden sm:inline" />
              <span className="text-slate-900 dark:text-white truncate">
                {location.pathname === '/admin'                                              && 'Dashboard'}
                {location.pathname === '/admin/posts'                                       && 'Entradas'}
                {location.pathname === '/admin/posts/new'                                   && 'Nueva Entrada'}
                {location.pathname.includes('/admin/posts/') && location.pathname.includes('/edit') && 'Editar Entrada'}
              </span>
            </h1>
          </div>

          <ThemePicker compact />
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

