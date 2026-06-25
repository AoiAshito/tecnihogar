import { Phone, Mail, MapPin, Clock, Drama as Instagram, Notebook as Facebook } from 'lucide-react';

const services = [
  'Electricidad Profesional',
  'Plomería',
  'Gas',
  'Climatización',
  'Durlock y Yeso',
  'Pintura',
  'Impermeabilización',
  'Albañilería',
  'Reparaciones en General',
];

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Plan de Mantenimiento', href: '#mantenimiento' },
  { label: 'Contacto', href: '#contacto' },
];

const scrollTo = (id: string) => {
  document.getElementById(id.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="bg-ebony-deep border-t border-white/5">
      <div className="container-site py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <img
              src="/logo.jpg"
              alt="TecniHogar"
              className="h-16 w-auto object-contain rounded mb-4"
            />
            <p className="text-text-dark-secondary text-sm leading-relaxed mb-5">
              Mantenimiento del hogar con profesionalismo, compromiso y la calidad
              que tu propiedad merece.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/mytecnihogar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gold/20 border border-white/10 hover:border-gold/40 flex items-center justify-center text-white/60 hover:text-gold transition-all duration-200"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/mytecnihogar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gold/20 border border-white/10 hover:border-gold/40 flex items-center justify-center text-white/60 hover:text-gold transition-all duration-200"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-gold" />
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-text-dark-secondary text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-gold transition-all duration-200 flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-gold" />
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#servicios"
                    onClick={(e) => { e.preventDefault(); scrollTo('#servicios'); }}
                    className="text-text-dark-secondary text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-gold transition-all duration-200 flex-shrink-0" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-gold" />
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-text-dark-secondary text-xs mb-0.5">Teléfono</div>
                  <a href="tel:+541155640049" className="text-white text-sm hover:text-gold transition-colors duration-200">
                    +54 11 5564 0049
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-text-dark-secondary text-xs mb-0.5">Email</div>
                  <a href="mailto:info@mytecnihogar.com" className="text-white text-sm hover:text-gold transition-colors duration-200 break-all">
                    info@mytecnihogar.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-text-dark-secondary text-xs mb-0.5">Horario</div>
                  <span className="text-white text-sm">Lun-Vie 8:00 - 18:00</span>
                  <br />
                  <span className="text-white text-sm">Sáb 8:00 - 13:00</span>
                  <br />
                  <span className="text-gold text-sm font-semibold">Urgencias 24/7</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-text-dark-secondary text-xs mb-0.5">Zona de cobertura</div>
                  <span className="text-white text-sm">Buenos Aires y Gran Buenos Aires</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p className="text-text-dark-secondary text-xs">
            &copy; {new Date().getFullYear()} TecniHogar. Todos los derechos reservados.
          </p>
          <p className="text-text-dark-secondary text-xs">
            Diseño web orientado a resultados &mdash; Soluciones Confiables
          </p>
        </div>
      </div>
    </footer>
  );
}
