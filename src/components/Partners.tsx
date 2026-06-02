import { motion } from 'framer-motion';

const PARTNERS = ['Stripe', 'Visa', 'Mastercard', 'Plaid', 'Coinbase', 'Binance'];

export function Partners() {
  return (
    <section className="py-12 border-y border-slate-200 dark:border-white/5 bg-slate-100/50 dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-widest mb-8">
          Trusted by innovative financial teams worldwide
        </p>
        
        <div className="flex gap-12 md:gap-24 items-center justify-center flex-wrap opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {PARTNERS.map((partner, i) => (
            <motion.div 
              key={partner}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-xl md:text-2xl font-heading font-black tracking-tighter text-slate-700 dark:text-slate-300"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
