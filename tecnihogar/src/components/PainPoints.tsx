import { useRef, useEffect } from 'react';
import { AlertTriangle, Clock, CheckCircle } from 'lucide-react';

const problems = [
  { icon: AlertTriangle, text: 'Técnicos que prometen y no aparecen' },
  { icon: Clock, text: 'Trabajos que nunca se terminan a tiempo' },
  { icon: AlertTriangle, text: 'Precios que cambian después del presupuesto' },
];

export default function PainPoints() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('is-visible'), i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="section-padding bg-ebony-deep relative overflow-hidden"
    >
      {/* Decorative gold accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
      <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-gold/5 pointer-events-none" />
      <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-gold/5 pointer-events-none" />

      <div className="container-site relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-on-scroll">
            <span className="section-label">Entendemos tu frustración</span>
            <h2 className="font-heading font-bold text-white text-3xl md:text-5xl mb-6 leading-tight">
              ¿Cansado de técnicos que{' '}
              <span className="text-gold">no resuelven?</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            {problems.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="animate-on-scroll flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-left"
                >
                  <Icon size={20} className="text-gold flex-shrink-0" />
                  <span className="text-text-dark-secondary text-sm">{p.text}</span>
                </div>
              );
            })}
          </div>

          <div className="animate-on-scroll mb-8">
            <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/30 rounded-xl px-6 py-4 mb-6">
              <CheckCircle size={24} className="text-gold flex-shrink-0" />
              <p className="text-white font-heading font-semibold text-lg">
                El verdadero lujo es no preocuparse por nada.
              </p>
            </div>
            <p className="text-text-dark-secondary text-base leading-relaxed max-w-xl mx-auto">
              En TecniHogar llegamos, trabajamos y terminamos. Sin excusas,
              sin sorpresas en el precio, sin vueltas. Tu hogar en manos de
              profesionales que responden.
            </p>
          </div>

          <div className="animate-on-scroll">
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary inline-block"
            >
              Hablá con Nosotros
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
