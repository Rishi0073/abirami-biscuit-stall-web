import React from 'react';
import { Scale, CheckCircle2, MapPin } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';
import { ImageWithFallback } from './ImageWithFallback';

export const FarsanSpotlight: React.FC = () => {
  const { farsanSpotlight } = businessConfig;

  return (
    <section id="farsan-spotlight" className="py-16 md:py-24 bg-cream-50 border-y border-cream-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Scale className="w-3.5 h-3.5 text-saffron-600" />
            <span>Wholesale Category Spotlight</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-950 tracking-tight leading-tight mb-4">
            {farsanSpotlight.headline}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
            {farsanSpotlight.description}
          </p>
        </div>

        {/* Editorial Layout: Large Photo + Structured Wholesale Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Visual Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-cream-300 bg-white">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <ImageWithFallback
                  src={farsanSpotlight.image}
                  alt={farsanSpotlight.imageAlt}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  fallbackText="Assorted Savoury Farsan & Namkeen"
                />
              </div>

              {/* In-Image Information Overlay */}
              <div className="p-6 bg-gradient-to-t from-cream-100 via-cream-50 to-white border-t border-cream-200">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-saffron-700">
                    Retailer Supply Advantage
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-saffron-100 text-saffron-800">
                    <Scale className="w-3 h-3 text-saffron-700" />
                    Loose by the Kg
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-forest-950 mb-2">
                  Loose & Packaged Farsan Varieties
                </h3>
                <p className="text-sm text-charcoal-700 leading-relaxed">
                  {farsanSpotlight.wholesaleNotice}
                </p>
              </div>
            </div>
          </div>

          {/* Highlights & Information Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              {farsanSpotlight.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-cream-200 hover:border-saffron-300 shadow-soft hover:shadow transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 p-1.5 rounded-full bg-saffron-50 text-saffron-600 flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-forest-900 text-base">
                          {item.name}
                        </h4>
                        <p className="text-sm text-charcoal-700 mt-1 leading-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {item.looseByKg && (
                      <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-cream-100 text-[11px] font-semibold text-charcoal-700 border border-cream-300 flex-shrink-0">
                        <Scale className="w-3 h-3 text-saffron-600" />
                        By Kg
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Visit Shop Prompt specifically for Farsan */}
            <div className="p-5 rounded-xl bg-forest-900 text-cream-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-white text-base">Inspect Farsan Freshness in Person</h4>
                <p className="text-xs text-cream-200 mt-0.5">
                  Visit our Dharavi shop to check textures, aromas, and buy loose stock by kilogram.
                </p>
              </div>
              <a
                href="#visit-shop"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-saffron-600 hover:bg-saffron-700 text-white text-xs sm:text-sm font-semibold transition-colors flex-shrink-0"
              >
                <MapPin className="w-4 h-4" />
                <span>Visit Our Shop</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
