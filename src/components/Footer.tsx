import { Mail, Phone, MapPin } from 'lucide-react';
import logoSvg from '../logo tominki 1.svg';

export function Footer() {
  return (
    <footer className="pt-20 pb-10 px-6 bg-slate-50 dark:bg-[#09090b]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <img src={logoSvg} alt="Tomin-Ki" className="w-10 h-10 object-contain" />
            <span className="font-heading font-bold text-slate-900 dark:text-white text-xl">Tomin-Ki</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-6">
            La solución completa para gestionar tus finanzas personales, familiares y de pequeños negocios, respaldada por Tlahtocan Software.
          </p>

          <div className="space-y-3 text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-slate-400" aria-hidden="true" />
              <span>contacto@tlatocan.software</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-slate-400" aria-hidden="true" />
              <span>722 1234 567</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-slate-400" aria-hidden="true" />
              <span>C. Leona Vicario No. 1232-Int. 204</span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-slate-900 dark:text-white font-semibold mb-6">Soporte</h4>
          <ul className="space-y-4 text-slate-600 dark:text-slate-400">
            <li><a href="#" className="hover:text-primary transition-colors">Centro de Ayuda</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Tutoriales</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Estado del servicio</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-slate-900 dark:text-white font-semibold mb-6">Legal</h4>
          <ul className="space-y-4 text-slate-600 dark:text-slate-400">
            <li><a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Aviso de Privacidad</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Política de Cookies</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Política de Seguridad</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Powered by Tlahtocan Software. Todos los derechos reservados.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-slate-800 dark:hover:text-white transition-colors" aria-label="Visitar el perfil de X Twitter">Twitter</a>
          <a href="#" className="hover:text-slate-800 dark:hover:text-white transition-colors" aria-label="Visitar la página de Facebook">Facebook</a>
          <a href="#" className="hover:text-slate-800 dark:hover:text-white transition-colors" aria-label="Visitar perfil de Instagram">Instagram</a>
          <a href="#" className="hover:text-slate-800 dark:hover:text-white transition-colors" aria-label="Visitar LinkedIn">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
