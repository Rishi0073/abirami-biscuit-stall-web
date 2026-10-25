import React from 'react';
import { MapPin, ArrowRight, Store, Scale, Sparkles } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';
import { ImageWithFallback } from './ImageWithFallback';

export const HeroSection: React.FC = () => {
  return (
    <section id="top" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text and Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small introductory label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-100/90 border border-saffron-200 text-saffron-800 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-5">
              <Sparkles className="w-3.5 h-3.5 text-saffron-600" />
              <span>{businessConfig.hero.subheading}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-forest-950 tracking-tight leading-[1.15] text-balance mb-6">
              {businessConfig.hero.headline}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-charcoal-700 leading-relaxed max-w-2xl mb-8">
              {businessConfig.hero.supportingText}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#visit-shop"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-base shadow-elevated transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <MapPin className="w-5 h-5 text-saffron-200" />
                <span>{businessConfig.hero.primaryCtaText}</span>
              </a>

              <a
                href="#categories"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-cream-200/90 hover:bg-cream-300 text-forest-900 font-semibold text-base border border-cream-300 transition-colors duration-200 text-center"
              >
                <span>{businessConfig.hero.secondaryCtaText}</span>
                <ArrowRight className="w-4 h-4 text-forest-800" />
              </a>
            </div>

            {/* Key Business Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-cream-200/90 w-full">
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-cream-200/80 text-saffron-700 flex-shrink-0">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-forest-900 uppercase tracking-wider">Loose Farsan</div>
                  <div className="text-xs text-charcoal-700">Sold by the kilogram</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-cream-200/80 text-saffron-700 flex-shrink-0">
                  <Store className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-forest-900 uppercase tracking-wider">Physical Shop</div>
                  <div className="text-xs text-charcoal-700">In-person retail visits</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
                <div className="p-2 rounded-lg bg-cream-200/80 text-saffron-700 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-forest-900 uppercase tracking-wider">Dharavi, Mumbai</div>
                  <div className="text-xs text-charcoal-700">Central wholesale spot</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Farsan Photography (Hero of the site) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-saffron-200 to-cream-300 rounded-3xl -rotate-1 opacity-70"></div>
              
              {/* Card container */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated bg-cream-50 border border-cream-300">
                <div className="aspect-[4/3] sm:aspect-[5/4] w-full overflow-hidden">
                  <ImageWithFallback
                    src={businessConfig.hero.farsanImage}
                    alt={businessConfig.hero.farsanImageAlt}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    fallbackText="Assorted Indian Farsan & Namkeen"
                  />
                </div>

                {/* Editorial Caption Bar */}
                <div className="p-4 sm:p-5 bg-cream-50 border-t border-cream-200">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-saffron-700">
                        Wholesale Specialty
                      </span>
                      <h3 className="font-serif text-lg font-bold text-forest-950">
                        Assorted Farsan & Savoury Namkeen
                      </h3>
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-forest-900 text-cream-100 whitespace-nowrap">
                      Loose & Packaged
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-charcoal-700">
                    Sev, gathiya, chivda, boondi, and savoury mixtures available for retail store restocking.
                  </p>
                </div>
              </div>

              {/* Floating highlight badge */}
              <div className="absolute -bottom-4 -left-3 sm:-left-5 bg-forest-900 text-white px-4 py-2.5 rounded-xl shadow-elevated flex items-center gap-3 border border-forest-800">
                <Scale className="w-5 h-5 text-saffron-400 flex-shrink-0" />
                <div className="text-left">
                  <div className="text-[11px] uppercase tracking-wider text-cream-200 font-semibold">Bulk Option</div>
                  <div className="text-xs sm:text-sm font-bold text-white">Sold by Kilogram</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
