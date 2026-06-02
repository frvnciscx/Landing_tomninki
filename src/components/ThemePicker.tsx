import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import type { ThemeMode } from '../context/ThemeContext';

const OPTIONS: { mode: ThemeMode; label: string; Icon: typeof Sun }[] = [
  { mode: 'light',  label: 'Claro',    Icon: Sun },
  { mode: 'dark',   label: 'Oscuro',   Icon: Moon },
];


/**
 * ThemeToggle — Un switch animado y compacto que alterna entre modos de tema.
 */
export function ThemeToggle() {
  const { mode, setMode } = useTheme();

  const toggle = () => setMode(mode === 'light' ? 'dark' : 'light');

  return (
    <button
      onClick={toggle}
      className="relative flex items-center p-1 rounded-full transition-all duration-500 w-12 h-7 bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/15 active:scale-95 shadow-inner"
      title={`Cambiar a tema ${mode === 'light' ? 'oscuro' : 'claro'}`}
    >
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <Sun className="w-3 h-3 text-amber-500 dark:text-slate-500" />
        <Moon className="w-3 h-3 text-slate-400 dark:text-indigo-400" />
      </div>

      <motion.div
        animate={{ x: mode === 'light' ? 0 : 20 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="z-10 w-5 h-5 bg-white dark:bg-primary rounded-full shadow-md flex items-center justify-center overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {mode === 'light' ? (
              <Sun className="w-3 h-3 text-primary" />
            ) : (
              <Moon className="w-3 h-3 text-white" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </button>
  );
}


/**
 * ThemePicker — Selector visual de tema. Ahora redirige a ThemeToggle para consistencia.
 */
export function ThemePicker({ compact = false }: { compact?: boolean }) {
  const { mode, setMode } = useTheme();

  if (compact) {
    return <ThemeToggle />;
  }

  return (
    <div className="space-y-3">
      <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">
        Apariencia
      </p>
      <div className="flex flex-col gap-1.5">
        {OPTIONS.map(({ mode: m, label, Icon }) => {
          const active = mode === m;
          return (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`group flex items-center justify-between w-full h-11 px-3.5 rounded-xl transition-all duration-200 border ${
                active
                  ? 'bg-primary/8 border-primary text-primary dark:text-primary-foreground dark:bg-primary/20'
                  : 'bg-white/50 dark:bg-white/4 border-slate-200/60 dark:border-white/8 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-white/12 hover:bg-white dark:hover:bg-white/8'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-1.5 rounded-lg transition-colors ${
                  active ? 'bg-primary text-white shadow-sm shadow-primary/20' : 'bg-slate-100 dark:bg-white/5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'
                }`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold">{label}</span>
              </div>
              {active && (
                <motion.div layoutId="active-indicator" className="w-1 h-1 rounded-full bg-primary" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

