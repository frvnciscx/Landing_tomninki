import { motion } from 'framer-motion';
import { Layers, Palette, RefreshCw, Sparkles, Smartphone, CreditCard } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function SystemFunctions() {
  return (
    <section id="system-functions" className="py-24 px-6 bg-slate-50 dark:bg-[#09090b] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6 text-slate-900 dark:text-white"
          >
            Capacidades del <span className="text-primary">Sistema</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Conoce a fondo las mecánicas internas que hacen de Tomin-Ki la plataforma definitiva para tu autonomía financiera.
          </motion.p>
        </div>

        <div className="space-y-32">
          {/* Feature 1: Gestión de Espacios */}
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="relative aspect-square md:aspect-video lg:aspect-square bg-slate-200 dark:bg-[#121217] rounded-3xl overflow-hidden border border-slate-300 dark:border-white/10 flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
                <div className="grid grid-cols-2 gap-4 w-full h-full">
                  <div className="bg-white dark:bg-[#1C1C22] rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-white/5 flex flex-col justify-between">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center"><Layers className="w-5 h-5 text-emerald-500"/></div>
                    <div><div className="h-2 w-16 bg-slate-200 dark:bg-white/10 rounded-full mb-2"></div><div className="h-4 w-24 bg-slate-300 dark:bg-white/20 rounded-full"></div></div>
                  </div>
                  <div className="bg-white dark:bg-[#1C1C22] rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-white/5 flex flex-col justify-between">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center"><Layers className="w-5 h-5 text-blue-500"/></div>
                    <div><div className="h-2 w-16 bg-slate-200 dark:bg-white/10 rounded-full mb-2"></div><div className="h-4 w-24 bg-slate-300 dark:bg-white/20 rounded-full"></div></div>
                  </div>
                  <div className="bg-white dark:bg-[#1C1C22] rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-white/5 flex flex-col justify-between">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center"><Layers className="w-5 h-5 text-amber-500"/></div>
                    <div><div className="h-2 w-16 bg-slate-200 dark:bg-white/10 rounded-full mb-2"></div><div className="h-4 w-24 bg-slate-300 dark:bg-white/20 rounded-full"></div></div>
                  </div>
                  <div className="bg-white dark:bg-[#1C1C22] rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-white/5 flex flex-col justify-between">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center"><Layers className="w-5 h-5 text-purple-500"/></div>
                    <div><div className="h-2 w-16 bg-slate-200 dark:bg-white/10 rounded-full mb-2"></div><div className="h-4 w-24 bg-slate-300 dark:bg-white/20 rounded-full"></div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Layers className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Gestión por Espacios</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Segmenta tu mundo financiero. Tomin-Ki permite crear múltiples espacios (Personal, Negocio, Inversiones, Familiar). 
                Cada espacio cuenta con su propia administración, configuración y balance independiente para que nunca mezcles tus fondos.
              </p>
            </div>
          </motion.div>

          {/* Feature 2: Personalización de Tarjetas */}
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Palette className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Personalización de Tarjetas</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Identifica tus plásticos al instante. Diseña la representación digital de tus tarjetas bancarias personalizando colores sólidos, 
                imágenes, patrones y selecciona logotipos predefinidos (Visa, Mastercard, Amex) para una organización visual inigualable.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-square md:aspect-video lg:aspect-square bg-slate-200 dark:bg-[#121217] rounded-3xl overflow-hidden border border-slate-300 dark:border-white/10 flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-tl from-accent/10 to-transparent pointer-events-none" />
                <div className="relative w-full max-w-sm aspect-[1.6/1] bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 text-white shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                  <CreditCard className="absolute top-6 left-6 w-8 h-8 opacity-50" />
                  <div className="absolute top-6 right-6 text-xl font-black italic tracking-tighter">VISA</div>
                  <div className="absolute bottom-6 left-6">
                    <div className="text-xs opacity-70 mb-1">Cuentas Claras</div>
                    <div className="text-lg tracking-widest">**** **** **** 4821</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 3: Sincronización Total */}
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="relative aspect-square md:aspect-video lg:aspect-square bg-slate-200 dark:bg-[#121217] rounded-3xl overflow-hidden border border-slate-300 dark:border-white/10 flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none" />
                <div className="flex items-center justify-center gap-6 w-full">
                  <div className="w-24 h-48 bg-white dark:bg-[#1C1C22] rounded-[2rem] border-4 border-slate-300 dark:border-slate-700 shadow-xl flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-slate-400" />
                  </div>
                  <RefreshCw className="w-8 h-8 text-emerald-500 animate-spin-slow" />
                  <div className="w-48 h-32 bg-white dark:bg-[#1C1C22] rounded-xl border-4 border-slate-300 dark:border-slate-700 shadow-xl flex items-center justify-center">
                    <div className="w-full h-full border-[6px] border-transparent rounded-lg flex items-center justify-center bg-slate-100 dark:bg-[#121217]">
                      <span className="text-slate-400 font-bold text-xs">PORTAL WEB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6">
                <RefreshCw className="w-7 h-7 text-emerald-500" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Sincronización Total</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Tu información en tiempo real sin importar desde dónde interactúes. Todos los datos, transacciones y balances 
                están sincronizados de manera bidireccional entre la aplicación móvil y el portal web.
              </p>
            </div>
          </motion.div>

          {/* Feature 4: IA Básica */}
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Herramientas de I.A.</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Deja el pensamiento numérico en nuestras manos. Herramientas básicas de Inteligencia Artificial que analizarán 
                tus patrones de consumo para proporcionarte predicciones, sugerencias automáticas de recorte de gastos y salud financiera.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-square md:aspect-video lg:aspect-square bg-slate-200 dark:bg-[#121217] rounded-3xl overflow-hidden border border-slate-300 dark:border-white/10 flex items-center p-8">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent pointer-events-none" />
                <div className="w-full space-y-4">
                  <div className="bg-white dark:bg-[#1C1C22] p-4 rounded-2xl rounded-tl-none border border-slate-200 dark:border-white/5 shadow-sm max-w-[80%] flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <p className="text-sm text-slate-600 dark:text-slate-300">He detectado que podrias ahorrar un 15% este mes si reducimos las compras en "Suscripciones". ¿Calculo una nueva meta?</p>
                  </div>
                  <div className="bg-primary p-4 rounded-2xl rounded-tr-none shadow-sm max-w-[80%] ml-auto text-white">
                    <p className="text-sm">Sí, por favor aplica el ajuste a mis límites recomendados.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
