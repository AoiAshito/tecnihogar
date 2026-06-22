import { useRef, useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcela R.',
    role: 'Propietaria de departamento',
    text: 'Llamé a Gonzalo para una pérdida de agua que me tenía desesperada hace semanas. Vinieron el mismo día, encontraron el problema y lo resolvieron de forma definitiva. El precio fue exactamente el del presupuesto, sin sorpresas. Los recomiendo sin dudar.',
    rating: 5,
    initial: 'M',
  },
  {
    name: 'Roberto F.',
    role: 'Gerente de edificio comercial',
    text: 'Contratamos a TecniHogar para el mantenimiento mensual de nuestras instalaciones eléctricas y de plomería. En ocho meses no hemos tenido ningún imprevisto. Son puntuales, prolijos y conocen muy bien su trabajo. Exactamente lo que buscábamos.',
    rating: 5,
    initial: 'R',
  },
  {
    name: 'Claudia M.',
    role: 'Administradora de barrio privado',
    text: 'Trabajamos con TecniHogar para la impermeabilización de los techos del salón de usos múltiples. Hicieron un trabajo impecable, respetaron los tiempos acordados y la calidad del material fue excelente. Ya les encomendamos otros proyectos.',
    rating: 5,
    initial: 'C',
  },
  {
    name: 'Javier L.',
    role: 'Propietario de local gastronómico',
    text: 'Necesitaba instalar aires acondicionados nuevos antes de la temporada y los tiempos eran muy ajustados. El equipo de TecniHogar trabajó dos días consecutivos hasta dejarlo listo. Esa clase de compromiso es difícil de encontrar.',
    rating: 5,
    initial: 'J',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const goTo = (index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 200);
  };

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((current + 1) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(() => next(), 5500);
    return () => clearInterval(interval);
  }, [current]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el) => {
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

  const t = testimonials[current];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <span className="section-label">Prueba Social</span>
          <h2 className="section-title text-text-primary mb-4">Nos Recomiendan</h2>
          <div className="gold-divider mx-auto" />
        </div>

        {/* Main testimonial */}
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <div className="relative bg-neutral-off rounded-2xl p-8 md:p-12 border border-gold/20 shadow-card">
            {/* Quote icon */}
            <Quote size={48} className="text-gold/20 absolute top-6 left-6" />

            {/* Stars */}
            <div className="flex gap-1 mb-6 justify-center">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={20} className="text-gold fill-gold" />
              ))}
            </div>

            {/* Text */}
            <p
              className={`text-text-secondary text-lg leading-relaxed text-center italic mb-8 transition-opacity duration-200 ${
                animating ? 'opacity-0' : 'opacity-100'
              }`}
            >
              "{t.text}"
            </p>

            {/* Author */}
            <div
              className={`flex items-center gap-4 justify-center transition-opacity duration-200 ${
                animating ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-ebony-deep font-heading font-bold text-lg flex-shrink-0">
                {t.initial}
              </div>
              <div className="text-left">
                <div className="font-heading font-semibold text-text-primary">{t.name}</div>
                <div className="text-text-secondary text-sm">{t.role}</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border-2 border-gold/40 hover:border-gold hover:bg-gold/10 flex items-center justify-center transition-all duration-200 text-gold"
                aria-label="Anterior"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? 'w-6 h-2.5 bg-gold'
                        : 'w-2.5 h-2.5 bg-gold/30 hover:bg-gold/50'
                    }`}
                    aria-label={`Testimonio ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border-2 border-gold/40 hover:border-gold hover:bg-gold/10 flex items-center justify-center transition-all duration-200 text-gold"
                aria-label="Siguiente"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Small cards row */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto animate-on-scroll">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => goTo(i)}
              className={`text-left p-4 rounded-lg border transition-all duration-300 ${
                i === current
                  ? 'border-gold bg-gold/5 shadow-gold'
                  : 'border-transparent bg-neutral-off hover:border-gold/30'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-ebony-deep font-bold text-sm">
                  {t.initial}
                </div>
                <div>
                  <div className="text-xs font-semibold text-text-primary">{t.name}</div>
                  <div className="text-xs text-text-secondary">{t.role}</div>
                </div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={10} className="text-gold fill-gold" />
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
