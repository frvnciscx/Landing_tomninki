import { motion } from 'framer-motion';

export function PreFooter() {
  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 dark:bg-transparent" />
      <div className="max-w-7xl mx-auto rounded-[2rem] bg-gradient-to-br from-primary to-[#2a1b92] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/40 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white text-3xl md:text-5xl lg:text-6xl font-heading font-black mb-6 relative z-10"
        >
          ¡Transforma tus finanzas hoy!
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10"
        >
          Únete a miles de usuarios que ya controlan sus finanzas con Tomin-ki. La solución completa para gestionar finanzas personales, familiares y pequeños negocios.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="relative z-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a href="/sign-in" className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold text-lg transition-colors hover:bg-slate-50 shadow-xl">
            Regístrate Ahora
          </a>
          <a href="/login" className="inline-block bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors backdrop-blur-sm">
            Iniciar Sesión
          </a>
        </motion.div>
      </div>
    </section>
  );
}
