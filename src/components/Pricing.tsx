import { motion } from 'framer-motion';
import { SectionHeader, FeatureList, Button } from './ui';

const PLANS = [
  {
    name: 'Básico',
    price: '$0',
    period: '/mes',
    note: 'Gratis por siempre',
    noteColor: 'text-slate-500',
    features: ['Control básico de gastos', 'Dashboard básico', '2 espacios de gestión', '3 tarjetas por espacio', '1 reporte bimestral'],
    checkColor: 'text-accent',
    highlight: false,
    cta: 'Elegir Básico',
    ctaVariant: 'secondary' as const,
  },
  {
    name: 'Pro',
    price: '$50',
    period: '/mes',
    note: 'O $480/año (Ahorra $120)',
    noteColor: 'text-primary font-bold',
    features: ['Control avanzado', 'Dashboard completo', 'Espacios ilimitados', 'Tarjetas ilimitadas', 'Reportes semanales', 'Proyecciones inteligentes'],
    checkColor: 'text-primary',
    highlight: true,
    cta: 'Elegir Pro',
    ctaVariant: 'primary' as const,
  },
  {
    name: 'Premium',
    price: '$150',
    period: '/mes',
    note: 'O $1,440/año (Ahorra $360)',
    noteColor: 'text-amber-500 font-bold',
    features: ['Todo en Pro', 'Análisis avanzado', 'Soporte prioritario', 'Personalización completa', 'Integraciones API', 'Training incluido'],
    checkColor: 'text-accent',
    highlight: false,
    cta: 'Elegir Premium',
    ctaVariant: 'secondary' as const,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 bg-gradient-to-b from-primary/5 to-slate-100 dark:from-[#090915] dark:to-[#0c0c0f]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={<>Elige tu <span className="text-primary">Plan</span></>}
          subtitle="Elige el plan que mejor se adapte a tus necesidades para recuperar el control."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl p-8 flex flex-col relative ${
                plan.highlight
                  ? 'bg-gradient-to-b from-white to-slate-50 dark:from-[#1c1c24] dark:to-[#15151a] border border-primary ring-1 ring-primary/50 shadow-[0_0_30px_rgba(67,45,215,0.15)] dark:shadow-[0_0_30px_rgba(67,45,215,0.2)]'
                  : 'bg-white dark:bg-[#15151a] border border-slate-200 dark:border-white/10 shadow-sm'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Más Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">{plan.name}</h3>
              <div className="mb-8 flex flex-col">
                <div>
                  <span className="text-5xl font-black text-slate-900 dark:text-white">{plan.price}</span>
                  <span className="text-slate-500">{plan.period}</span>
                </div>
                <span className={`text-sm mt-1 ${plan.noteColor}`}>{plan.note}</span>
              </div>

              <div className="mb-10 flex-1">
                <FeatureList items={plan.features} color={plan.checkColor} />
              </div>

              <Button variant={plan.ctaVariant} fullWidth size="lg">
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
