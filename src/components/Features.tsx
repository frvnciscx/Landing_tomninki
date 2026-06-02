import { motion } from 'framer-motion';
import { PieChart, ShieldCheck, Zap, WalletCards } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function Features() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Built for the modern <span className="text-primary">wealth builder</span></h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Everything you need to manage your personal finances, investments, and daily expenses in one unified, extremely fast platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Large */}
          <motion.div 
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="md:col-span-2 bg-[#121217] border border-white/10 rounded-3xl p-8 hover:border-primary/50 transition-colors group relative overflow-hidden h-full flex flex-col"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-colors" />
            <PieChart className="w-10 h-10 text-accent mb-6 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-white">Smart Analytics & Forecasting</h3>
              <p className="text-slate-300 max-w-md">Our AI engine automatically categorizes your transactions and predicts your cash flow for the next 6 months with 95% accuracy.</p>
            </div>
          </motion.div>

          {/* Card 2: Small */}
          <motion.div 
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-[#121217] border border-white/10 rounded-3xl p-8 hover:border-primary/50 transition-colors h-full flex flex-col"
          >
            <ShieldCheck className="w-10 h-10 text-primary mb-6 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-3 text-white">Bank-level Security</h3>
              <p className="text-slate-300">256-bit AES encryption protecting your data and native biometric authentications.</p>
            </div>
          </motion.div>

          {/* Card 3: Small */}
          <motion.div 
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="bg-[#121217] border border-white/10 rounded-3xl p-8 hover:border-primary/50 transition-colors h-full flex flex-col"
          >
            <WalletCards className="w-10 h-10 text-accent mb-6 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-3 text-white">Multi-account Sync</h3>
              <p className="text-slate-300">Connect to over 10000 financial institutions in 30+ countries seamlessly.</p>
            </div>
          </motion.div>

          {/* Card 4: Large */}
          <motion.div 
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-[#121217] border border-white/10 rounded-3xl p-8 hover:border-primary/50 transition-colors relative overflow-hidden group h-full flex flex-col"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] rounded-full group-hover:bg-accent/20 transition-colors" />
            <Zap className="w-10 h-10 text-primary mb-6 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-white">Lightning Fast Transactions</h3>
              <p className="text-slate-300 max-w-md">Built on edge networks. Your data loads instantly. Tomin-Ki processes millions of events concurrently so you never wait for a dashboard to load.</p>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}
