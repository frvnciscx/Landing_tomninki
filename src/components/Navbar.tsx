import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Menu, X, ArrowRight } from 'lucide-react';
import logoSvg from '../logo tominki 1.svg';
import { Link, useLocation } from 'react-router-dom';
import { ThemePicker } from './ThemePicker';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '';

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = isHome ? [
    { name: 'El Problema', href: '#problem' },
    { name: 'Plataforma', href: '#features' },
    { name: 'Precios', href: '#pricing' },
    { name: 'Acceso VIP', href: '#early', highlight: true },
  ] : [
    { name: 'El Problema', href: '/#problem' },
    { name: 'Plataforma', href: '/#features' },
    { name: 'Precios', href: '/#pricing' },
    { name: 'Acceso VIP', href: '/#early', highlight: true },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 h-20 border-b border-black/5 dark:border-white/5 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md z-[60] flex items-center justify-between px-6 md:px-12 transition-colors duration-500"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 relative z-[70]">
          <img src={logoSvg} alt="Tomin-Ki" className="w-9 h-9 object-contain" />
          <span className="font-heading font-bold text-slate-900 dark:text-white tracking-tight text-xl">Tomin-Ki</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={`transition-colors ${link.highlight ? 'text-amber-500 font-bold' : 'hover:text-primary dark:hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/blog"
            className={`transition-colors font-medium border-l border-slate-200 dark:border-white/10 pl-8 ${
              location.pathname.startsWith('/blog')
                ? 'text-primary'
                : 'hover:text-primary dark:hover:text-white'
            }`}
          >
            Blog
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 relative z-[70]">
          <div className="hidden lg:flex items-center gap-3">
            <ThemePicker compact />
            <Link
              to="/admin"
              className="text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-all px-3 py-1.5 rounded-lg items-center gap-1.5 flex"
            >
              <Monitor className="w-3.5 h-3.5" />
              Admin
            </Link>
            <div className="h-4 w-px bg-slate-200 dark:bg-white/10 mx-1 block" />
            <Link
              to="/sign-up"
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white px-4 py-2 rounded-full transition-all"
            >
              Registrarse
            </Link>
          </div>

          <Link
            to="/login"
            className="bg-primary hover:bg-primary/95 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:shadow-[0_4px_15px_rgba(67,45,215,0.35)] active:scale-95 whitespace-nowrap hidden sm:block"
          >
            Iniciar Sesión
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 ml-2 rounded-xl bg-slate-100 dark:bg-white/5 lg:hidden text-slate-600 dark:text-slate-300"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-white dark:bg-[#09090b] z-50 lg:hidden pt-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {/* Navigation Group */}
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 px-2">Navegación</span>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between p-4 rounded-2xl text-xl font-bold transition-colors ${
                      link.highlight ? 'text-amber-500 bg-amber-500/5' : 'text-slate-900 dark:text-white active:bg-slate-50 dark:active:bg-white/5'
                    }`}
                  >
                    {link.name}
                    <ArrowRight className="w-5 h-5 opacity-30" />
                  </a>
                ))}
                <Link
                  to="/blog"
                  className="flex items-center justify-between p-4 rounded-2xl text-xl font-bold text-slate-900 dark:text-white active:bg-slate-50 dark:active:bg-white/5"
                >
                  Blog
                  <ArrowRight className="w-5 h-5 opacity-30" />
                </Link>
              </div>

              {/* Theme Selector */}
              <div className="p-4 rounded-3xl bg-slate-50 dark:bg-white/5">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 block">Apariencia</span>
                <div className="flex justify-center">
                  <ThemePicker />
                </div>
              </div>

              {/* Auth Group */}
              <div className="flex flex-col gap-3 mt-4 pb-12">
                <Link
                  to="/login"
                  className="w-full py-4 rounded-2xl bg-primary text-white text-center font-bold text-lg shadow-xl shadow-primary/20"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  to="/sign-up"
                  className="w-full py-4 rounded-2xl border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-center font-bold text-lg"
                >
                  Crear Cuenta
                </Link>
                <Link
                  to="/admin"
                  className="w-full py-4 rounded-2xl flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 font-medium"
                >
                  <Monitor className="w-4 h-4" />
                  Ir al Panel Admin
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
