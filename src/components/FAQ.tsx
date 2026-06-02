import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: "¿Mis datos están seguros?",
    a: "Sí, usamos encriptación de grado bancario y cumplimos con todos los estándares internacionales de seguridad. Tu información está protegida con los más altos niveles de seguridad."
  },
  {
    q: "¿Puedo cancelar en cualquier momento?",
    a: "Sí, puedes cancelar tu suscripción en cualquier momento. No hay penalizaciones ni cargos adicionales por cancelación anticipada."
  },
  {
    q: "¿Tienen soporte técnico?",
    a: "Sí. Según tu plan, tienes soporte por correo o WhatsApp. En planes avanzados te guiamos paso a paso para configurar tu cuenta."
  },
  {
    q: "¿Necesito instalar algo?",
    a: "Totalmente. Puedes usar Tomin-ki desde tu celular, tablet o computadora sin instalar nada: todo corre en tu navegador."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-[#09090b]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-4 text-slate-900 dark:text-white"
          >
            ¿Tienes <span className="text-primary">algunas dudas?</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400">Aquí están las respuestas comunes listas para ti.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
             <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden bg-white dark:bg-[#121217]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-4 flex items-center justify-between font-semibold text-slate-900 dark:text-white transition-opacity hover:opacity-80"
              >
                {faq.q}
                <ChevronDown aria-hidden="true" className={`w-5 h-5 text-primary transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-4 text-slate-600 dark:text-slate-400"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
