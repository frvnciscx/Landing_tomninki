import { motion } from 'framer-motion';
import { PieChart, ShieldCheck, Zap, WalletCards, TrendingUp } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function Solution() {
  return (
    <section id="features" className="py-32 px-6 bg-gradient-to-b from-slate-100 to-slate-50 dark:from-[#0c0c0f] dark:to-[#09090b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-slate-900 dark:text-white">Todo lo que necesitas para <span className="text-primary">mejorar tus finanzas</span></h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Las funciones más avanzadas y herramientas nativas disponibles en la plataforma para una administración perfecta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="md:col-span-2 bg-white dark:bg-[#121217] border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-sm hover:border-primary/50 dark:hover:border-primary/50 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-colors" />
            <PieChart className="w-10 h-10 text-accent mb-6" aria-hidden="true" />
            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Proyecciones Inteligentes</h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-md">Obtén proyecciones financieras calculadas de manera inteligente puramente basadas en el ritmo de tu historial financiero.</p>
          </motion.div>

          <motion.div 
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-white dark:bg-[#121217] border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-sm hover:border-primary/50 dark:hover:border-primary/50 transition-colors"
          >
            <ShieldCheck className="w-10 h-10 text-primary mb-6" aria-hidden="true" />
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Control de Gastos</h3>
            <p className="text-slate-600 dark:text-slate-400">Organiza y controla todos tus movimientos clasificándolos con nuestro sistema de múltiples categorías.</p>
          </motion.div>

          <motion.div 
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="bg-white dark:bg-[#121217] border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-sm hover:border-primary/50 dark:hover:border-primary/50 transition-colors"
          >
            <Zap className="w-10 h-10 text-accent mb-6" aria-hidden="true" />
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Gastos Eventuales</h3>
            <p className="text-slate-600 dark:text-slate-400">Planifica la anticipación de tus gastos inesperados estableciendo potentes alertas predictivas.</p>
          </motion.div>
          
          <motion.div 
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="bg-white dark:bg-[#121217] border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-sm hover:border-primary/50 dark:hover:border-primary/50 transition-colors"
          >
            <TrendingUp className="w-10 h-10 text-primary mb-6" aria-hidden="true" />
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Control de Créditos</h3>
            <p className="text-slate-600 dark:text-slate-400">Evita el agujero del endeudamiento revisando y saldando estratégicamente tus pasivos y cuentas fijas.</p>
          </motion.div>

          <motion.div 
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="md:col-span-2 bg-white dark:bg-[#121217] border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-sm hover:border-primary/50 dark:hover:border-primary/50 transition-colors relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] rounded-full group-hover:bg-accent/20 transition-colors" />
            <WalletCards className="w-10 h-10 text-primary mb-6" aria-hidden="true" />
            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Gestión de Múltiples Tarjetas</h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-md">Controla y haz seguimiento del nivel de endeudamiento o pago en cada tarjeta o producto bancario independientemente.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
