import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#top' },
    { name: 'Farsan Spotlight', href: '#farsan-spotlight' },
    { name: 'Snack Varieties', href: '#farsan-varieties' },
    { name: 'Brands', href: '#brands' },
    { name: 'Our Range', href: '#categories' },
    { name: 'About Us', href: '#about' },
    { name: 'Visit Us', href: '#visit-shop' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-soft border-b border-cream-200/80 py-3'
          : 'bg-cream-100/90 backdrop-blur-sm border-b border-cream-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Text-based Brand Wordmark */}
          <a
            href="#top"
            className="group flex flex-col focus-visible:ring-offset-cream-50 rounded-lg"
            aria-label="Abirami Biscuit Stall - Home"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-saffron-600 inline-block"></span>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-forest-900 group-hover:text-saffron-700 transition-colors">
                {businessConfig.name}
              </span>
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-700 pl-4.5">
              Wholesale Kirana & Snacks · Dharavi
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-charcoal-800 hover:text-saffron-700 hover:bg-cream-200/60 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#visit-shop"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-forest-900 hover:bg-forest-950 text-white text-sm font-semibold shadow-sm hover:shadow transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <MapPin className="w-4 h-4 text-saffron-500" />
              <span>Visit Our Shop</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-charcoal-800 hover:bg-cream-200/80 focus:outline-none focus:ring-2 focus:ring-saffron-600"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-[65px] z-50 bg-cream-50/98 backdrop-blur-xl border-t border-cream-200 lg:hidden flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200"
        >
          <nav className="flex flex-col gap-2 pt-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="px-4 py-3 rounded-lg text-base font-semibold text-forest-900 hover:bg-cream-200/70 hover:text-saffron-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-cream-200/80 space-y-3 pb-8">
            <a
              href="#visit-shop"
              onClick={handleLinkClick}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-forest-900 text-white font-semibold text-base shadow-sm hover:bg-forest-950 transition-colors"
            >
              <MapPin className="w-5 h-5 text-saffron-500" />
              <span>Visit Our Shop</span>
            </a>
            <p className="text-center text-xs text-charcoal-700">
              Wholesale destination for kirana stores · Dharavi, Mumbai
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
