import { useRef, useEffect, useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send, CircleCheck as CheckCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '541155640049';
const WHATSAPP_MSG = encodeURIComponent('Hola TecniHogar! Me gustaría solicitar un presupuesto.');

const contactInfo = [
  { icon: Phone, label: 'Teléfono', value: '+54 11 5564 0049', href: 'tel:+541155640049' },
  { icon: Mail, label: 'Email', value: 'info@mytecnihogar.com', href: 'mailto:info@mytecnihogar.com' },
  { icon: Clock, label: 'Atención', value: 'Lun-Vie 8:00-18:00 / Sáb 8:00-13:00 · Urgencias 24/7', href: undefined },
  { icon: MapPin, label: 'Zona de cobertura', value: 'Buenos Aires y Gran Buenos Aires', href: undefined },
];

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setFormState('loading');

    await new Promise((res) => setTimeout(res, 900));
    setFormState('success');
    setForm({ name: '', phone: '', email: '', service: '', message: '' });
  };

  return (
    <section id="contacto" ref={ref} className="section-padding bg-neutral-off">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <span className="section-label">Contacto</span>
          <h2 className="section-title text-text-primary mb-4">
            Hablemos de Tu Proyecto
          </h2>
          <div className="gold-divider mx-auto" />
          <p className="text-text-secondary text-lg max-w-xl mx-auto mt-4">
            Contanos qué necesitás y te respondemos con un presupuesto claro y sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 animate-on-scroll-left">
            <div className="bg-ebony-deep rounded-xl p-8 h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />

              <h3 className="font-heading font-semibold text-white text-xl mb-6">
                Datos de Contacto
              </h3>

              <div className="space-y-5 mb-8">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-gold" />
                      </div>
                      <div>
                        <div className="text-text-dark-secondary text-xs uppercase tracking-wider mb-0.5">
                          {info.label}
                        </div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-white text-sm font-medium hover:text-gold transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-white text-sm font-medium">
                            {info.value}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* WhatsApp shortcut */}
              <div className="border-t border-white/10 pt-6">
                <p className="text-text-dark-secondary text-sm mb-4">
                  ¿Preferís escribir directamente?
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebe5c] text-white font-heading font-semibold text-sm uppercase tracking-wider py-3.5 rounded-lg transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Escribinos por WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 animate-on-scroll-right">
            <div className="bg-white rounded-xl p-8 shadow-card border border-gold/10">
              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={56} className="text-gold mb-4" />
                  <h3 className="font-heading font-bold text-text-primary text-2xl mb-3">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-text-secondary max-w-sm">
                    Recibimos tu consulta. Te contactaremos a la brevedad, generalmente en menos de 2 horas hábiles.
                  </p>
                  <button
                    className="btn-primary mt-8"
                    onClick={() => setFormState('idle')}
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-heading font-semibold text-text-primary text-xl mb-6">
                    Solicitar Presupuesto Gratuito
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-text-secondary text-xs font-semibold uppercase tracking-wider mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre"
                        className="w-full bg-neutral-off border border-gray-200 rounded px-4 py-3.5 text-text-primary text-sm placeholder-gray-400 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-text-secondary text-xs font-semibold uppercase tracking-wider mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+54 9 11 XXXX-XXXX"
                        className="w-full bg-neutral-off border border-gray-200 rounded px-4 py-3.5 text-text-primary text-sm placeholder-gray-400 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-text-secondary text-xs font-semibold uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full bg-neutral-off border border-gray-200 rounded px-4 py-3.5 text-text-primary text-sm placeholder-gray-400 transition-all duration-200"
                    />
                  </div>

                  <div className="mb-5">
                    <label className="block text-text-secondary text-xs font-semibold uppercase tracking-wider mb-2">
                      Servicio de interés
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-neutral-off border border-gray-200 rounded px-4 py-3.5 text-text-primary text-sm transition-all duration-200"
                    >
                      <option value="">Seleccioná un servicio...</option>
                      <option>Electricidad Profesional</option>
                      <option>Plomería</option>
                      <option>Gas</option>
                      <option>Climatización</option>
                      <option>Durlock y Yeso</option>
                      <option>Pintura</option>
                      <option>Impermeabilización de Terrazas</option>
                      <option>Albañilería</option>
                      <option>Reparaciones en General</option>
                      <option>Plan de Mantenimiento Fijo</option>
                      <option>Otro</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-text-secondary text-xs font-semibold uppercase tracking-wider mb-2">
                      Descripción del trabajo
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Contanos brevemente qué necesitás..."
                      className="w-full bg-neutral-off border border-gray-200 rounded px-4 py-3.5 text-text-primary text-sm placeholder-gray-400 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === 'loading' ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar Consulta
                      </>
                    )}
                  </button>

                  <p className="text-text-secondary text-xs text-center mt-4">
                    Tu información es confidencial y nunca compartida con terceros.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
