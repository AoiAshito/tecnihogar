import { useRef, useEffect } from 'react';
import { CircleCheck as CheckCircle, Award, Users, Briefcase } from 'lucide-react';

const ABOUT_IMAGE = '/img/about.jpg';

const expertise = [
  'Electricidad', 'Plomería', 'Gas', 'Climatización', 'Durlock y Yeso',
  'Pintura', 'Impermeabilización', 'Albañilería',
];

const stats = [
  { icon: Award, value: '+10', label: 'Años de experiencia' },
  { icon: Users, value: '+200', label: 'Clientes satisfechos' },
  { icon: Briefcase, value: '+400', label: 'Proyectos terminados' },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right').forEach((el) => {
              el.classList.add('is-visible');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="nosotros" className="section-padding bg-white" ref={ref}>
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <div className="animate-on-scroll-left order-2 lg:order-1 relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src={ABOUT_IMAGE}
                alt="Gonzalo Técnico TecniHogar"
                className="w-full h-auto object-cover"
                style={{ maxHeight: '520px', objectPosition: 'top' }}
              />
              {/* Gold accent corner */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-gold rounded-tl-lg" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-gold rounded-br-lg" />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-4 lg:right-[-2rem] bg-ebony-deep text-white rounded-lg p-5 shadow-xl border-l-4 border-gold hidden sm:block">
              <div className="text-gold font-heading font-bold text-2xl">+10</div>
              <div className="text-white/70 text-xs mt-1">Años de trayectoria</div>
            </div>
          </div>

          {/* Text column */}
          <div className="animate-on-scroll-right order-1 lg:order-2">
            <span className="section-label">Sobre nosotros</span>
            <h2 className="section-title text-text-primary mb-4">
              Más que un Servicio,<br />una Solución de Confianza
            </h2>
            <div className="gold-divider" />

            <p className="text-text-secondary text-base leading-relaxed mb-4">
              Mi nombre es <strong className="text-text-primary">Gonzalo</strong> y fundé TecniHogar
              con una convicción simple: los propietarios merecen técnicos en quienes confiar.
              Después de años trabajando en el rubro, entendí que la mayor queja no era el precio,
              sino la falta de compromiso.
            </p>
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              Hoy TecniHogar es un equipo multidisciplinario de profesionales especializados,
              coordinados para ofrecerte una solución integral: desde una reparación puntual
              hasta la renovación completa de tu espacio. Trabajamos en hogares, oficinas y
              emprendimientos con el mismo nivel de exigencia y cuidado.
            </p>

            {/* Expertise tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {expertise.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 bg-neutral-off border border-gold/30 text-text-primary text-xs font-semibold font-heading uppercase tracking-wide px-3 py-1.5 rounded"
                >
                  <CheckCircle size={13} className="text-gold" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <Icon size={22} className="text-gold mx-auto mb-2" />
                    <div className="font-heading font-bold text-2xl text-text-primary">{stat.value}</div>
                    <div className="text-text-secondary text-xs mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Conocenos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
