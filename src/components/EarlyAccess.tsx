import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Star, Crown, Compass, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';

// ─── Variants ─────────────────────────────────────────────────────────────────

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

// ─── Benefits data ────────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: Crown,
    color: 'text-amber-500',
    bg: 'bg-amber-500/20',
    title: '1 Mes de Plan PRO Gratis',
    desc: 'Desbloquea instantáneamente por 30 días el acceso sin límite a reportes interactivos, plantillas web exclusivas y sincronización en vivo total sin añadir tarjeta de crédito.',
  },
  {
    icon: Compass,
    color: 'text-primary',
    bg: 'bg-primary/20',
    title: 'Influencia en el Roadmap',
    desc: 'Como "Early Adopter", tu voto valdrá por tres. Decide directamente a qué funciones nuestro equipo de ingeniería debe darle prioridad para los próximos trimestres.',
  },
  {
    icon: Star,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/20',
    title: 'Insignia "Fundador" Vitalicia',
    desc: 'Inmortaliza tu apoyo. Lleva siempre una marca digital en tu perfil que demuestre que tú estuviste aquí controlando tus finanzas antes de que existiera el resto.',
  },
  {
    icon: MessageSquare,
    color: 'text-purple-500',
    bg: 'bg-purple-500/20',
    title: 'Canal de Soporte Directo',
    desc: 'Reporta un bug o da una sugerencia e inmediatamente un desarrollador Senior leerá tu ticket sin bots de por medio, permitiéndote resolver tus necesidades reales mucho más rápido.',
  },
];

// ─── Validation helpers (fb-form-validation) ──────────────────────────────────

function validateName(v: string) {
  if (v && v.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres.';
  return '';
}

function validateEmail(v: string) {
  if (!v.trim()) return 'El correo es obligatorio.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Introduce un correo válido (ej: hola@ejemplo.com).';
  return '';
}

// ─── Component ────────────────────────────────────────────────────────────────

export function EarlyAccess() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [touched, setTouched] = useState({ name: false, email: false });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const emailRef = useRef<HTMLInputElement>(null);

  // fb-form-validation: validate onBlur
  const handleNameBlur = () => {
    setTouched(t => ({ ...t, name: true }));
    setNameError(validateName(name));
  };
  const handleEmailBlur = () => {
    setTouched(t => ({ ...t, email: true }));
    setEmailError(validateEmail(email));
  };

  // Live validation while typing after first touch
  const handleNameChange = (v: string) => {
    setName(v);
    if (touched.name) setNameError(validateName(v));
  };
  const handleEmailChange = (v: string) => {
    setEmail(v);
    if (touched.email) setEmailError(validateEmail(v));
  };

  const isFormValid = !validateName(name) && !validateEmail(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Touch all fields to show errors
    setTouched({ name: true, email: true });
    const ne = validateName(name);
    const ee = validateEmail(email);
    setNameError(ne);
    setEmailError(ee);
    if (ne || ee) {
      // a11y: focus the first invalid field
      emailRef.current?.focus();
      return;
    }

    // fb-system-status: show loading → success/error
    setStatus('loading');
    try {
      await new Promise(resolve => setTimeout(resolve, 1200)); // Simulated API
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const inputBase = (hasError: boolean) =>
    `w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-black/40 border ${
      hasError
        ? 'border-red-400 focus-visible:ring-red-400/50'
        : 'border-slate-300 dark:border-white/10 focus-visible:ring-amber-500/50'
    } text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 transition-colors text-sm`;

  return (
    <section id="early" className="py-24 px-6 bg-gradient-to-b from-slate-100 to-slate-50 dark:from-[#0c0c0f] dark:to-[#09090b] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex flex-col items-center justify-center mb-6"
          >
            <Star className="w-12 h-12 text-amber-500 mb-4" aria-hidden="true" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-slate-900 dark:text-white">
              Programa de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">Acceso Anticipado</span> (PAA)
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            Estamos buscando a nuestros usuarios pioneros. Ayúdanos a probar y robustecer la plataforma Tomin-Ki en un ambiente colaborativo antes del lanzamiento global oficial.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Benefits */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-white/10 pb-4">
              Beneficios Exclusivos como Pionero
            </h3>

            {BENEFITS.map(({ icon: Icon, color, bg, title, desc }) => (
              <motion.div key={title} variants={listItemVariants} className="flex gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full ${bg} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${color}`} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{title}</h4>
                  <p className="text-slate-600 dark:text-slate-400">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 transform scale-[1.03] blur-3xl opacity-20 rounded-3xl" />

            <div className="relative bg-white dark:bg-[#1A1A22] border border-amber-500/30 shadow-2xl rounded-3xl p-8 md:p-12">
              {/* Live indicator */}
              <div className="absolute top-0 right-0 p-6 flex items-center gap-2">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500" />
                </span>
                <span className="text-xs font-bold text-amber-500 tracking-wider">CUPOS ABIERTOS</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 pr-20">Únete a la Lista VIP</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Las invitaciones son enviadas de forma secuencial cada viernes según el orden de suscripción.
              </p>

              {/* ─── Success State (fb-system-status) ─── */}
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-8 gap-4"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">¡Estás en la lista!</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs">
                      Te enviamos un correo de confirmación a <strong className="text-slate-700 dark:text-slate-200">{email}</strong>. Recibirás tu invitación el próximo viernes.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    className="space-y-4"
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Formulario de acceso anticipado"
                  >
                    {/* Name field */}
                    <div>
                      <label htmlFor="name-early-access" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Nombre <span className="text-slate-400 text-xs">(Opcional)</span>
                      </label>
                      <input
                        id="name-early-access"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={e => handleNameChange(e.target.value)}
                        onBlur={handleNameBlur}
                        placeholder="Ej: Juan Pérez"
                        aria-describedby={nameError ? 'name-error' : undefined}
                        aria-invalid={!!nameError}
                        className={inputBase(!!nameError)}
                      />
                      {/* fb-form-validation: error debajo del campo */}
                      <AnimatePresence>
                        {nameError && (
                          <motion.p
                            id="name-error"
                            role="alert"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-xs text-red-500 mt-1"
                          >
                            {nameError}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Email field */}
                    <div>
                      <label htmlFor="email-early-access" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Correo electrónico <span className="text-rose-500" aria-hidden="true">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" aria-hidden="true" />
                        <input
                          ref={emailRef}
                          id="email-early-access"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          value={email}
                          onChange={e => handleEmailChange(e.target.value)}
                          onBlur={handleEmailBlur}
                          placeholder="hola@ejemplo.com"
                          aria-describedby={emailError ? 'email-error' : 'email-hint'}
                          aria-invalid={!!emailError}
                          className={`${inputBase(!!emailError)} pl-12 h-14`}
                        />
                      </div>
                      <AnimatePresence>
                        {emailError ? (
                          <motion.p
                            id="email-error"
                            role="alert"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-xs text-red-500 mt-1"
                          >
                            {emailError}
                          </motion.p>
                        ) : (
                          <p id="email-hint" className="text-xs text-slate-400 mt-1">
                            Nunca compartiremos tu correo con terceros.
                          </p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* fb-system-status: error recovery */}
                    <AnimatePresence>
                      {status === 'error' && (
                        <motion.div
                          role="alert"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-sm text-red-600 dark:text-red-400"
                        >
                          No se pudo completar el registro. Verifica tu conexión e{' '}
                          <button
                            type="submit"
                            className="underline font-medium hover:no-underline"
                          >
                            intenta de nuevo
                          </button>.
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit — fb-cta-specificity + a11y-touch-target */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={status === 'loading' || (touched.email && !isFormValid)}
                        className="w-full h-14 min-h-[44px] bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all flex items-center justify-center gap-2"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                            Registrando…
                          </>
                        ) : (
                          'Solicitar Acceso al PAA'
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
