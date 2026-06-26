import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = ['inicio', 'servicios', 'nosotros', 'mantenimiento', 'contacto'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-ebony-deep shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-site flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
          className="flex items-center gap-3 flex-shrink-0"
        >
          <img
            src="/logo.jpg"
            alt="TecniHogar Logo"
            className="h-12 w-auto object-contain rounded"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`nav-link font-heading font-semibold text-sm uppercase tracking-wider transition-colors duration-200 ${
                  activeSection === id ? 'text-gold active' : 'text-white hover:text-gold'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <a
          href="tel:+541155640049"
          className="hidden md:flex items-center gap-2 btn-primary text-xs py-3 px-6"
        >
          <Phone size={15} />
          Llamanos
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-ebony-deep transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <div className="container-site flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-white hover:text-gold font-heading font-semibold text-sm uppercase tracking-wider py-3 border-b border-white/10 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+541155640049"
            className="btn-primary text-center mt-4 text-xs"
          >
            Llamanos
          </a>
        </div>
      </div>
    </header>
  );
}
