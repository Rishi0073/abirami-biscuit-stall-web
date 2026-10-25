import React from 'react';
import { Store, ShieldCheck, MapPin } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

export const AboutSection: React.FC = () => {
  const { about } = businessConfig;

  return (
    <section id="about" className="py-16 md:py-24 bg-cream-50 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Contextual Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Store className="w-3.5 h-3.5 text-saffron-600" />
              <span>About Our Wholesale Shop</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950 tracking-tight leading-tight mb-4">
              {about.headline}
            </h2>

            <p className="text-base sm:text-lg font-medium text-saffron-800 mb-6">
              {about.subheadline}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-charcoal-700 leading-relaxed">
              {about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-cream-200 flex flex-wrap items-center gap-6 text-xs text-charcoal-700">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-saffron-600" />
                <span className="font-semibold text-charcoal-900">Dharavi, Mumbai</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-saffron-600" />
                <span className="font-semibold text-charcoal-900">In-Person Wholesale Purchases</span>
              </div>
            </div>
          </div>

          {/* Right Column: Wholesale Pillars */}
          <div className="lg:col-span-5">
            <div className="p-7 sm:p-8 rounded-2xl bg-forest-900 text-cream-100 shadow-elevated border border-forest-800">
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Our Wholesale Focus
              </h3>
              <p className="text-xs text-cream-200 mb-6">
                Designed to support independent retailers and kirana shop owners with efficient local sourcing.
              </p>

              <div className="space-y-5">
                {about.coreValues.map((val, idx) => (
                  <div key={idx} className="pb-4 border-b border-forest-800 last:border-0 last:pb-0">
                    <h4 className="font-bold text-white text-base flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-saffron-500"></span>
                      <span>{val.title}</span>
                    </h4>
                    <p className="text-xs text-cream-200 mt-1 pl-4 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 pt-5 border-t border-forest-800/80">
                <a
                  href="#visit-shop"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white text-sm font-semibold transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Visit Us in Dharavi</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
