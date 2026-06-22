import { useRef, useEffect } from 'react';
import {
  Zap,
  Droplets,
  Sprout,
  Wind,
  Layers,
  Paintbrush,
  Shield,
  Home,
  Hammer,
  Wrench,
} from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Electricidad Profesional',
    items: [
      'Instalaciones eléctricas completas',
      'Tableros y circuitos',
      'Iluminación LED y domotica',
      'Reparación de averías urgentes',
    ],
  },
  {
    icon: Droplets,
    title: 'Plomería',
    items: [
      'Instalación de cañerías',
      'Destape y limpieza',
      'Reparación de filtraciones',
      'Sanitarios y grifería',
    ],
  },
  {
    icon: Sprout,
    title: 'Riego Automático',
    items: [
      'Diseño y planificación de red',
      'Instalación de aspersores',
      'Programadores y sensores',
      'Mantenimiento y ajuste estacional',
    ],
  },
  {
    icon: Wind,
    title: 'Climatización',
    items: [
      'Instalación de equipos Split y multi-split',
      'Reparación de aires acondicionados',
      'Mantenimiento preventivo',
      'Lavado interior y exterior del equipo',
      'Sistemas de ventilación',
    ],
  },
  {
    icon: Layers,
    title: 'Durlock y Yeso',
    items: [
      'Tabiques y cielorrasos',
      'Terminaciones y masillado',
      'Molduras y nichos',
      'Reparación de revoques',
    ],
  },
  {
    icon: Paintbrush,
    title: 'Pintura',
    items: [
      'Pintura interior y exterior',
      'Preparación y lijado',
      'Terminaciones látex y esmalte',
      'Texturados y efectos decorativos',
    ],
  },
  {
    icon: Shield,
    title: 'Impermeabilización de Terrazas',
    items: [
      'Membranas líquidas y asfálticas',
      'Pintura impermeabilizante',
      'Reparación de filtraciones',
      'Tratamiento de juntas y fisuras',
    ],
  },
  {
    icon: Home,
    title: 'Modernización del Hogar',
    items: [
      'Actualización de instalaciones',
      'Smart home y domótica básica',
      'Reforma de baños y cocinas',
      'Renovación de ambientes',
    ],
  },
  {
    icon: Hammer,
    title: 'Albañilería',
    items: [
      'Construcción y ampliaciones',
      'Reparación de estructuras',
      'Revestimientos y pisos',
      'Contrapisos y fundaciones',
    ],
  },
  {
    icon: Wrench,
    title: 'Reparaciones en General',
    items: [
      'Reparaciones de urgencia',
      'Instalación de muebles y accesorios',
      'Trabajos de herrería básica',
      'Todo lo que tu hogar necesite',
    ],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const titleEl = sectionRef.current?.querySelector('.section-animate');
    if (titleEl) observer.observe(titleEl);

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicios" className="section-padding bg-neutral-off" ref={sectionRef}>
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-14 section-animate animate-on-scroll">
          <span className="section-label">Lo que hacemos</span>
          <h2 className="section-title text-text-primary mb-4">
            ¿Cómo Podemos Ayudarte?
          </h2>
          <div className="gold-divider mx-auto" />
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mt-4 leading-relaxed italic">
            "Hay hogares que necesitan estar en perfectas condiciones para que sus dueños
            vivan tranquilos. Nosotros nos ocupamos de que así sea."
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                ref={(el) => { cardRefs.current[index] = el; }}
                className="service-card animate-on-scroll"
                style={{ transitionDelay: `${(index % 4) * 80}ms` }}
              >
                <div className="mb-4">
                  <Icon size={44} className="text-gold stroke-[1.5]" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-text-primary mb-3">
                  {service.title}
                </h3>
                <ul className="space-y-1.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-text-secondary text-sm leading-snug">
                      <span className="text-gold mt-1 flex-shrink-0">&#x2713;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Solicitar Presupuesto Gratis
          </button>
        </div>
      </div>
    </section>
  );
}
