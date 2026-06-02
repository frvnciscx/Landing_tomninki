/**
 * colors.ts — Tokens de color de Tomin-Ki para uso en TypeScript/React
 *
 * Espejo de src/styles/colors.css para usar en:
 *  - inline styles       → style={{ color: colors.primary }}
 *  - framer-motion       → animate={{ backgroundColor: colors.primaryGlow }}
 *  - canvas / charts     → fill: colors.accent
 *  - lógica condicional  → if (color === colors.vip)
 *
 * NO uses estos valores directamente en className de Tailwind
 * (usa las clases `text-primary`, `bg-primary`, etc. allí).
 */

// ─── Marca ────────────────────────────────────────────────────────────────────

export const colors = {
  // Primario (Azul Fintech)
  primary:        '#432DD7',
  primaryHover:   '#3826c0',
  primaryLight:   '#ede9ff',
  primaryGlow:    'rgba(67, 45, 215, 0.4)',

  // Acento (Cyan)
  accent:         '#00F2FE',
  accentHover:    '#00d4df',

  // VIP / Acceso Anticipado (Ámbar)
  vip:            '#f59e0b',
  vipHover:       '#d97706',
  vipSubtle:      'rgba(245, 158, 11, 0.15)',

  // ─── Estado ────────────────────────────────────────────────────────────────

  success:        '#10b981',
  successSubtle:  'rgba(16, 185, 129, 0.15)',

  warning:        '#f59e0b',
  warningSubtle:  'rgba(245, 158, 11, 0.1)',

  danger:         '#ef4444',
  dangerSubtle:   'rgba(239, 68, 68, 0.1)',

  info:           '#3b82f6',
  infoSubtle:     'rgba(59, 130, 246, 0.1)',

  // ─── Escala de Grises ──────────────────────────────────────────────────────

  dark: {
    base:         '#09090b',
    card:         '#1E1E28',
    muted:        '#121217',
    border:       'rgba(255, 255, 255, 0.08)',
    textPrimary:  '#f8fafc',
    textSecond:   '#cbd5e1',
    textMuted:    '#64748b',
  },

  light: {
    base:         '#f8fafc',
    card:         '#ffffff',
    muted:        '#f1f5f9',
    border:       '#e2e8f0',
    textPrimary:  '#0f172a',
    textSecond:   '#475569',
    textMuted:    '#94a3b8',
  },
} as const;

// ─── Helper: color según modo actual ──────────────────────────────────────────

/**
 * Devuelve un color distinto según el modo activo.
 *
 * @example
 * const bg = themeColor(isDark, colors.dark.card, colors.light.card);
 */
export function themeColor(isDark: boolean, darkValue: string, lightValue: string): string {
  return isDark ? darkValue : lightValue;
}

// ─── Tipos ────────────────────────────────────────────────────────────────────

export type ColorToken = typeof colors;
