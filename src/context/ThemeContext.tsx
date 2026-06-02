import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

export type ThemeMode = 'dark' | 'light';

interface ThemeContextValue {
  mode: ThemeMode;           // Selección del usuario: dark | light
  isDark: boolean;           // Valor efectivo según el modo activo
  setMode: (m: ThemeMode) => void;
  toggleTheme: () => void;   // Alterna entre dark y light
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getInitialTheme(): ThemeMode {
  const saved = localStorage.getItem('tomin-ki-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  
  // Detección automática inicial del navegador
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// ─── Context ──────────────────────────────────────────────────────────────────

const ThemeContext = createContext<ThemeContextValue | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(getInitialTheme);
  const [isDark, setIsDark] = useState(mode === 'dark');

  // Sync <html> class whenever mode changes
  useEffect(() => {
    const dark = mode === 'dark';
    setIsDark(dark);
    document.documentElement.classList.toggle('dark', dark);
  }, [mode]);

  const setMode = (m: ThemeMode) => {
    setModeState(m);
    localStorage.setItem('tomin-ki-theme', m);
  };

  const toggleTheme = () => setMode(mode === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ mode, isDark, setMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


// ─── Hook ─────────────────────────────────────────────────────────────────────

/**
 * useTheme — Accede al tema y su selector desde cualquier componente.
 *
 * @example
 * const { mode, isDark, setMode, toggleTheme } = useTheme();
 * setMode('system'); // Sigue la preferencia del sistema operativo
 */
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
}
