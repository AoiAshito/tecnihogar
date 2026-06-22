import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HERO_IMAGE = 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToServices = () => {
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold z-10" />

      {/* Content */}
      <div className="container-site relative z-10 text-center px-4">
        <div
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label text-base mb-4 inline-block">
            Mantenimiento del Hogar
          </span>

          <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 max-w-4xl mx-auto">
            Mano de Obra{' '}
            <span className="gold-shimmer">Calificada</span>{' '}
            Para Tu Hogar
          </h1>

          <p
            className={`text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Electricidad, plomería, climatización, Durlock y mucho más.
            Soluciones confiables para hogares y empresas con la calidad y el
            profesionalismo que merecés.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <button onClick={scrollToContact} className="btn-primary w-full sm:w-auto">
              Solicitar Presupuesto
            </button>
            <button onClick={scrollToServices} className="btn-outline-light w-full sm:w-auto">
              Nuestros Servicios
            </button>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className={`mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { value: '+10', label: 'Años de exp.' },
            { value: '+200', label: 'Clientes satisfechos' },
            { value: '24/7', label: 'Disponibilidad' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-gold font-heading font-bold text-2xl md:text-3xl">
                {stat.value}
              </div>
              <div className="text-white/60 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-gold transition-colors duration-200 animate-bounce"
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
