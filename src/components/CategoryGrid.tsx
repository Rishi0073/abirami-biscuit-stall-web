import React from 'react';
import { Layers, Check, Sparkles } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';
import { ImageWithFallback } from './ImageWithFallback';

export const CategoryGrid: React.FC = () => {
  const { categories } = businessConfig;

  return (
    <section id="categories" className="py-16 md:py-24 bg-cream-50 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-saffron-600" />
            <span>Comprehensive Wholesale Range</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-950 tracking-tight leading-tight mb-4">
            More for Your Kirana Shop
          </h2>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
            From hero savoury farsan to popular packaged treats and household cleaning staples, explore the breadth of wholesale categories available at our Dharavi shop.
          </p>
        </div>

        {/* Categories Grid (Category Cards, NOT ecommerce product cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`rounded-2xl overflow-hidden bg-white border transition-all duration-300 flex flex-col justify-between ${
                cat.isHero
                  ? 'border-saffron-400 ring-2 ring-saffron-500/20 shadow-elevated'
                  : 'border-cream-200 shadow-soft hover:shadow-md hover:border-cream-300'
              }`}
            >
              <div>
                {/* Category Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-cream-200">
                  <ImageWithFallback
                    src={cat.image}
                    alt={cat.imageAlt}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    fallbackText={cat.title}
                  />
                  {cat.isHero && (
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-forest-900/90 backdrop-blur-sm text-white text-xs font-bold shadow-sm">
                      <Sparkles className="w-3 h-3 text-saffron-400" />
                      <span>Hero Category</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-saffron-700 block mb-1">
                    {cat.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-charcoal-700 leading-relaxed mb-5">
                    {cat.description}
                  </p>

                  {/* Representative Items / Wholesale formats */}
                  <div className="pt-4 border-t border-cream-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-700 block mb-2">
                      Key Wholesale Items:
                    </span>
                    <ul className="flex flex-wrap gap-1.5" aria-label={`Items in ${cat.title}`}>
                      {cat.examples.map((item, i) => (
                        <li
                          key={i}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-cream-100 text-xs text-charcoal-800 font-medium"
                        >
                          <Check className="w-3 h-3 text-saffron-600 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer notice */}
              <div className="px-6 py-3.5 bg-cream-50/80 border-t border-cream-100 text-[11px] text-charcoal-700 flex items-center justify-between">
                <span>Physical wholesale stock</span>
                <span className="font-semibold text-forest-900">Available In-Store</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Context Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-cream-200/60 border border-cream-300 text-center max-w-3xl mx-auto">
          <p className="text-sm text-charcoal-800">
            <strong>Approximately 500 everyday wholesale products</strong> are carried across our categories. Visit our Dharavi storefront to view complete current stock and variety in person.
          </p>
        </div>

      </div>
    </section>
  );
};
