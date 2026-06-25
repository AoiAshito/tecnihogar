import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function BottomCTA() {
  const ref = useRef<HTMLElement>(null);

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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="section-padding-sm bg-gold relative overflow-hidden"
    >
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #000 0px, #000 1px,
            transparent 1px, transparent 50%
          )`,
          backgroundSize: '20px 20px',
        }}
      />

      <div className="container-site relative z-10 text-center animate-on-scroll">
        <h2 className="font-heading font-bold text-ebony-deep text-3xl md:text-4xl mb-3">
          Pedí Tu Presupuesto Ahora
        </h2>
        <p className="text-ebony-deep/70 text-base md:text-lg mb-8 max-w-xl mx-auto">
          Sin compromiso, sin costo. Solo decinos qué necesitás y armamos un presupuesto
          a medida en menos de 24 horas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-2 bg-ebony-deep text-white font-heading font-semibold uppercase tracking-widest text-sm px-8 py-4 rounded hover:bg-ebony hover:shadow-xl transition-all duration-300"
          >
            Formulario de Contacto
            <ArrowRight size={16} />
          </button>
          <a
            href="https://wa.me/541155640049?text=Hola%20TecniHogar!%20Quiero%20solicitar%20un%20presupuesto."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-heading font-semibold uppercase tracking-widest text-sm px-8 py-4 rounded hover:bg-[#1ebe5c] hover:shadow-xl transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Directo
          </a>
        </div>
      </div>
    </section>
  );
}
