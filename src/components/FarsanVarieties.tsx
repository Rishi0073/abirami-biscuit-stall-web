import React from 'react';
import { Scale, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';
import { ImageWithFallback } from './ImageWithFallback';

export const FarsanVarieties: React.FC = () => {
  const { farsanVarieties } = businessConfig;

  return (
    <section id="farsan-varieties" className="py-16 md:py-24 bg-cream-100 border-b border-cream-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider mb-3.5 border border-saffron-200">
            <Sparkles className="w-3.5 h-3.5 text-saffron-600" />
            <span>{farsanVarieties.sectionSubtitle}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-950 tracking-tight leading-tight mb-4">
            {farsanVarieties.sectionTitle}
          </h2>

          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-2xl mx-auto">
            {farsanVarieties.description}
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cream-200/80 text-xs text-charcoal-800 font-medium border border-cream-300">
            <Scale className="w-3.5 h-3.5 text-saffron-700" />
            <span>Loose varieties also available by the kilogram for retail stores</span>
          </div>
        </div>

        {/* 19 Product Varieties Grid (Responsive 2 cols on mobile, 3 on md, 4 on lg) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {farsanVarieties.items.map((item, idx) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl border border-cream-200 hover:border-saffron-400 p-3 sm:p-4 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Product Photograph Container */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-cream-50 border border-cream-100 p-2 sm:p-3 flex items-center justify-center group-hover:bg-amber-50/30 transition-colors">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                    fallbackText={item.name}
                  />

                  {/* Variety Index Tag */}
                  <span className="absolute top-2 left-2 text-[10px] font-bold text-charcoal-700 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full border border-cream-200">
                    #{idx + 1}
                  </span>
                </div>

                {/* Content underneath photo: Display ONLY the actual clean product name */}
                <div className="pt-3 sm:pt-4">
                  <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-saffron-700 mb-1">
                    {item.categoryTag}
                  </span>
                  
                  {/* Clean Product Name (No prefixes, no prices, no SKU) */}
                  <h3 className="font-serif text-base sm:text-lg font-bold text-forest-950 group-hover:text-saffron-700 transition-colors leading-snug">
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* In-Store Availability Indicator */}
              <div className="mt-3 pt-2.5 border-t border-cream-100 flex items-center justify-between text-[11px] text-charcoal-700">
                <span className="inline-flex items-center gap-1 font-medium text-forest-900">
                  <CheckCircle2 className="w-3 h-3 text-saffron-600 flex-shrink-0" />
                  <span>Wholesale Stock</span>
                </span>
                <span className="text-[10px] text-charcoal-700">In Store</span>
              </div>
            </article>
          ))}
        </div>

        {/* Wholesale Purchasing Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-forest-900 text-cream-100 shadow-elevated border border-forest-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 text-saffron-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Scale className="w-3.5 h-3.5" />
              <span>Physical Wholesale Storefront</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
              Ready to Restock Farsan for Your Kirana Store?
            </h3>
            <p className="text-xs sm:text-sm text-cream-200 leading-relaxed">
              {farsanVarieties.retailerNote}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto flex-shrink-0">
            <a
              href="#visit-shop"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5 text-center"
            >
              <MapPin className="w-4 h-4 text-saffron-200" />
              <span>Visit Shop in Dharavi</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
