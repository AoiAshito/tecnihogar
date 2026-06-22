import { useRef, useEffect } from 'react';
import { Clock, ShieldCheck, Star, PhoneCall, Building2 } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Disponibilidad 24/7',
    desc: 'Urgencias resueltas en cualquier momento, incluso fines de semana y feriados.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantía de Trabajo',
    desc: 'Todos nuestros trabajos tienen garantía escrita. Si algo falla, lo resolvemos sin costo.',
  },
  {
    icon: Star,
    title: 'Técnico Asignado',
    desc: 'Un referente del equipo conoce a fondo tu propiedad para una atención personalizada.',
  },
  {
    icon: PhoneCall,
    title: 'Respuesta Prioritaria',
    desc: 'Los contratos de mantenimiento tienen prioridad de atención sobre llamadas espontáneas.',
  },
];

const clients = [
  { icon: Building2, label: 'Empresas y oficinas' },
  { icon: Building2, label: 'Barrios privados' },
  { icon: Building2, label: 'Edificios y consorcios' },
  { icon: Building2, label: 'Comercios y locales' },
];

export default function MaintenancePlan() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('is-visible'), i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="mantenimiento"
      ref={ref}
      className="section-padding bg-ebony-deep relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5"
        style={{
          background: 'radial-gradient(circle at top right, #D4AF37, transparent 70%)',
        }}
      />

      <div className="container-site relative z-10">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <span className="section-label">Servicio Exclusivo</span>
          <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-4 leading-tight">
            Plan de Mantenimiento Fijo
          </h2>
          <div className="gold-divider mx-auto" />
          <p className="text-text-dark-secondary text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            Diseñado para empresas, barrios privados y propiedades que necesitan
            un servicio técnico de confianza, proactivo y permanente.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="animate-on-scroll bg-white/5 border border-gold/20 rounded-lg p-6 hover:bg-white/10 hover:border-gold/50 transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Icon size={36} className="text-gold mb-4 stroke-[1.5]" />
                <h3 className="font-heading font-semibold text-white text-base mb-2">
                  {f.title}
                </h3>
                <p className="text-text-dark-secondary text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Who is it for */}
        <div className="animate-on-scroll bg-white/5 border border-gold/20 rounded-xl p-8 mb-10">
          <h3 className="font-heading font-semibold text-gold text-sm uppercase tracking-widest mb-4">
            ¿Para quién es este plan?
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {clients.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-2 text-white/80 text-sm"
              >
                <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                {c.label}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="animate-on-scroll text-center">
          <p className="text-text-dark-secondary text-sm mb-6 max-w-lg mx-auto">
            Cada plan se diseña a medida según el tamaño y las necesidades
            específicas de tu propiedad o empresa.
          </p>
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Solicitar Presupuesto a Medida
          </button>
        </div>
      </div>
    </section>
  );
}
