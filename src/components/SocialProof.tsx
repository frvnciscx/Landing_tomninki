import { motion } from 'framer-motion';
import { ReviewCard } from './ui';
import { SectionHeader } from './ui';

const REVIEWS = [
  { name: 'María González', role: 'Usuario Particular',  text: 'Desde que uso Tomin-ki puedo controlar mis gastos diarios y saber exactamente en qué gasto mi dinero cada mes.' },
  { name: 'Carlos Mendoza', role: 'Pequeño Empresario',  text: 'Las proyecciones financieras me ayudaron a planificar mis ahorros y ahora puedo ahorrar el 20% de mi ingreso mensual.' },
  { name: 'Ana López',      role: 'Madre de Familia',    text: 'Mi familia ahora gestiona nuestras finanzas juntos. Mis hijos aprenden a manejar dinero desde temprana edad.' },
  { name: 'Roberto Sánchez',role: 'Contador',            text: 'Antes estaba endeudado con varias tarjetas, ahora Tomin-ki me ayuda a pagar todo a tiempo y mejorar mi score crediticio.' },
  { name: 'Laura Ramírez',  role: 'Freelancer',          text: 'Como freelancer, gestionar mis ingresos irregulares fue siempre un reto. Con Tomin-ki puedo planificar mejor mis impuestos.' },
  { name: 'Miguel Torres',  role: 'Emprendedor',         text: 'La función de espacios me permite separar mis gastos personales de los negocios. Es exactamente lo que necesitaba.' },
];

export function SocialProof() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-primary/5 dark:from-[#09090b] dark:to-[#090915] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={<>Lo que dicen nuestros <span className="text-primary">usuarios</span></>}
          subtitle="Historias reales de personas que ya transformaron sus finanzas para siempre."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <ReviewCard {...review} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
