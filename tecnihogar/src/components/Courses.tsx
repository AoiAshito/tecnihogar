import { useRef, useEffect } from 'react';
import { BookOpen, Monitor, Users, Clock, Star, ArrowRight, Award, CircleCheck as CheckCircle } from 'lucide-react';

const INSTRUCTOR_IMAGE = 'https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop';

const courses = [
  {
    icon: Monitor,
    type: 'Online',
    title: 'Electricidad Domiciliaria para No Técnicos',
    desc: 'Aprendé a identificar problemas eléctricos comunes, leer un tablero y hacer reparaciones básicas de forma segura.',
    duration: '6 horas',
    level: 'Inicial',
    price: '$9.900',
    topics: ['Seguridad eléctrica básica', 'Lectura de tablero', 'Cambio de tomas y llaves', 'Detección de averías'],
  },
  {
    icon: Users,
    type: 'Presencial',
    title: 'Plomería Básica: Reparaciones del Hogar',
    desc: 'Destapes, cambio de grifería, reparación de filtraciones y mantenimiento preventivo de tus instalaciones sanitarias.',
    duration: '8 horas',
    level: 'Inicial',
    price: '$14.900',
    topics: ['Destapes manuales y químicos', 'Cambio de grifería', 'Reparación de filtraciones', 'Mantenimiento preventivo'],
  },
  {
    icon: BookOpen,
    type: 'Online',
    title: 'Mantenimiento Preventivo del Hogar',
    desc: 'Guía completa para anticiparte a los problemas más frecuentes y ahorrar en reparaciones de urgencia.',
    duration: '5 horas',
    level: 'Todos los niveles',
    price: '$7.900',
    topics: ['Checklist estacional', 'Cuidado de instalaciones', 'Pinturas y revoques', 'Qué inspeccionar y cuándo'],
  },
];

const instructorCredentials = [
  '+10 años de experiencia en el rubro',
  'Especialista en instalaciones eléctricas y sanitarias',
  'Más de 400 proyectos completados',
  'Formación técnica certificada',
];

/* HIDDEN — para publicar, cambiar COURSES_VISIBLE a true */
const COURSES_VISIBLE = false;

export default function Courses() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('is-visible'), i * 80);
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

  if (!COURSES_VISIBLE) return null;

  return (
    <section id="cursos" ref={ref} className="section-padding bg-neutral-off">
      <div className="container-site">

        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <span className="section-label">Formación Profesional</span>
          <h2 className="section-title text-text-primary mb-4">
            Aprendé de Quien Más Sabe
          </h2>
          <div className="gold-divider mx-auto" />
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Cursos online y presenciales dictados por profesionales del rubro.
            Conocimiento real, aplicable desde el primer día.
          </p>
        </div>

        {/* Instructor card */}
        <div className="animate-on-scroll mb-14">
          <div className="bg-ebony-deep rounded-2xl overflow-hidden border border-gold/20 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Photo */}
              <div className="md:col-span-2 relative min-h-[260px] md:min-h-0">
                <img
                  src={INSTRUCTOR_IMAGE}
                  alt="Gonzalo – Instructor TecniHogar"
                  className="w-full h-full object-cover object-top"
                  style={{ minHeight: '260px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-ebony-deep via-transparent to-transparent" />
                {/* Badge */}
                <div className="absolute bottom-4 left-4 md:hidden flex items-center gap-2 bg-gold/90 backdrop-blur-sm rounded-full px-3 py-1.5">
                  <Award size={14} className="text-ebony-deep" />
                  <span className="text-ebony-deep font-heading font-bold text-xs uppercase tracking-wide">Instructor Certificado</span>
                </div>
              </div>

              {/* Info */}
              <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                <div className="hidden md:flex items-center gap-2 mb-4">
                  <Award size={16} className="text-gold" />
                  <span className="text-gold font-heading font-semibold text-xs uppercase tracking-widest">Instructor Principal</span>
                </div>

                <h3 className="font-heading font-bold text-white text-3xl mb-1">
                  Gonzalo
                </h3>
                <p className="text-gold font-heading font-semibold text-sm uppercase tracking-wider mb-4">
                  Fundador &amp; Especialista Técnico · TecniHogar
                </p>

                <p className="text-text-dark-secondary text-base leading-relaxed mb-6 max-w-lg">
                  Con más de una década en el campo, Gonzalo combina experiencia
                  práctica con una metodología de enseñanza clara y accesible. Sus
                  cursos están diseñados para que cualquier persona —sin importar su
                  nivel— pueda resolver situaciones cotidianas del hogar con confianza
                  y seguridad.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {instructorCredentials.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-text-dark-secondary text-sm">
                      <CheckCircle size={15} className="text-gold mt-0.5 flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>

                {/* Ratings strip */}
                <div className="flex flex-wrap gap-5">
                  {[
                    { value: '4.9', label: 'Calificación promedio' },
                    { value: '+120', label: 'Alumnos formados' },
                    { value: '3', label: 'Cursos disponibles' },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="font-heading font-bold text-gold text-2xl">{s.value}</div>
                      <div className="text-text-dark-secondary text-xs mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {courses.map((course, i) => {
            const Icon = course.icon;
            return (
              <div
                key={course.title}
                className="animate-on-scroll service-card group flex flex-col"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Type badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-gold/10 text-gold text-xs font-heading font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                    <Icon size={12} />
                    {course.type}
                  </span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={11} className="text-gold fill-gold" />
                    ))}
                  </div>
                </div>

                <h3 className="font-heading font-semibold text-text-primary text-lg mb-3 leading-snug">
                  {course.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {course.desc}
                </p>

                {/* Topics */}
                <ul className="space-y-1.5 mb-5 flex-1">
                  {course.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-gold mt-0.5 flex-shrink-0">&#x2713;</span>
                      {t}
                    </li>
                  ))}
                </ul>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-text-secondary mb-5 border-t border-gray-100 pt-4">
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="text-gold" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Award size={12} className="text-gold" />
                    {course.level}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="font-heading font-bold text-2xl text-text-primary">
                    {course.price}
                  </span>
                  <button className="btn-primary text-xs py-3 px-5 flex items-center gap-2">
                    Inscribirme
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="animate-on-scroll text-center">
          <p className="text-text-secondary text-sm">
            ¿Te interesa un tema en particular?{' '}
            <button
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gold font-semibold hover:underline transition-all"
            >
              Consultanos por cursos a medida
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
