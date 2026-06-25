import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const WHATSAPP_NUMBER = '541155640049';
const WHATSAPP_MSG = encodeURIComponent('Hola TecniHogar! Me gustaría consultar sobre sus servicios.');

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      setTimeout(() => setShowTooltip(true), 800);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setShowTooltip(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      style={{ transition: 'opacity 0.4s ease', opacity: visible ? 1 : 0 }}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div className="relative bg-white rounded-xl shadow-xl border border-gray-100 px-4 py-3 max-w-xs"
          style={{ animation: 'fadeInRight 0.3s ease forwards' }}
        >
          <button
            onClick={dismiss}
            className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-500 transition-colors duration-150"
            aria-label="Cerrar"
          >
            <X size={11} />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse-slow" />
            <span className="text-xs font-heading font-semibold text-text-primary">
              Estamos en Línea
            </span>
          </div>
          <p className="text-text-secondary text-xs leading-snug">
            ¿Tenés alguna consulta? Chateá con nosotros ahora.
          </p>
          {/* Triangle pointer */}
          <div
            className="absolute -bottom-2 right-6 w-4 h-2 overflow-hidden"
            style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.05))' }}
          >
            <div className="w-4 h-4 bg-white rotate-45 translate-y-[-50%] border-r border-b border-gray-100" />
          </div>
        </div>
      )}

      {/* WhatsApp button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
        onClick={() => setShowTooltip(false)}
        className="whatsapp-pulse w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#1ebe5c] flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
