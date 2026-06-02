import { motion } from 'framer-motion';
import { Mail, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden px-6 min-h-screen flex items-center">
      {/* Grid Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        {/* Left Column: Text & Registration Form */}
        <div className="flex flex-col text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/10 dark:bg-amber-500/5 border border-amber-500/30 dark:border-amber-500/20 text-amber-700 dark:text-amber-400 text-[13px] font-bold mb-8 w-fit shadow-[0_2px_10px_rgba(245,158,11,0.1)] backdrop-blur-sm"

          >
           <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
          </span>
          <span className="tracking-wide uppercase">Programa de Acceso Anticipado VIP</span>
          </motion.div>


          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]"
          >
            Gestiona tus <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">finanzas</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl mb-10"
          >
            Controla tus gastos, inversiones y obtén proyecciones futuras de manera intuitiva y eficiente para llevar tu economía al siguiente nivel.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-md mb-12"
          >
            <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="hero-email" className="sr-only">Correo electrónico</label>
              <Mail className="absolute left-4 w-5 h-5 text-slate-400" aria-hidden="true" />
              <input 
                id="hero-email"
                type="email" 
                name="email"
                autoComplete="email"
                placeholder="Ingresa tu correo electrónico..." 
                className="w-full h-16 pl-12 pr-[140px] rounded-full bg-white dark:bg-[#121217] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all"
                required
              />
              <button 
                type="submit" 
                className="absolute right-2 h-12 px-6 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-colors flex items-center gap-2"
              >
                Empezar
              </button>
            </form>
            <p className="flex items-center gap-2 text-xs text-slate-500 mt-4 ml-4">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Obtén 1 mes del plan Pro GRATIS al registrarte hoy.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-8 opacity-50 grayscale"
          >
            {/* Abstract geometric logos replicating the reference image */}
            <div className="text-2xl font-black tracking-tighter">S</div>
            <div className="w-6 h-6 bg-slate-900 dark:bg-white clip-path-triangle" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
            <div className="w-6 h-6 rounded-full border-[4px] border-slate-900 dark:border-white border-dashed"></div>
            <div className="text-xl font-bold font-serif italic">Tomin</div>
          </motion.div>
        </div>

        {/* Right Column: Dynamic Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative lg:ml-10 mt-10 lg:mt-0"
        >
          {/* Decorative glow behind the image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 blur-[80px] rounded-full" />
          
          <img 
            src="/mockup.png" 
            alt="Dashboard multi-dispositivo mostrando la plataforma Tomin-ki App"
            loading="lazy"
            decoding="async"
            width={1200}
            height={800}
            className="w-full h-auto rounded-3xl border border-white/20 dark:border-white/10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] relative z-10 lg:scale-[1.1] origin-left"
          />
        </motion.div>
      </div>
    </section>
  );
}
