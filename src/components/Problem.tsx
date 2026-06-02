import { motion } from 'framer-motion';

export function Problem() {
  return (
    <section id="problem" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-[#09090b] dark:to-[#0c0c0f]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold mb-6 text-slate-900 dark:text-white"
        >
          Una cuenta para todos tus <span className="text-rose-500">gastos.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12"
        >
          La sociedad actual enfrenta serios desafíos en el manejo de sus finanzas personales y familiares. No dejes que la falta de herramientas evite tu crecimiento patrimonial.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
          {[
            { title: "Desconocimiento Mensual", desc: "El 70% de las personas no logran saber con exactitud analítica en qué gastan su capital cada mes." },
            { title: "Desestabilización Familiar", desc: "Los gastos eventuales o imprevistos terminan por quebrar o desestabilizar por completo los ahorros." },
            { title: "El Factor de la Deuda", desc: "El pésimo manejo de tarjetas de crédito y préstamos empuja a las personas a ciclos continuos de endeudamiento." }
          ].map((item, i) => (
             <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="p-6 bg-white dark:bg-[#1A1A22] rounded-2xl shadow-sm border border-slate-200 dark:border-white/5"
            >
              <div className="w-12 h-12 bg-rose-100 dark:bg-rose-500/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-rose-500 w-full h-full text-center flex items-center justify-center font-bold">0{i+1}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
