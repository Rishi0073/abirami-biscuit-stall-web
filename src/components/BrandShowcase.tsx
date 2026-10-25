import React from 'react';
import { Tag, HelpCircle } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

export const BrandShowcase: React.FC = () => {
  const { brands } = businessConfig;

  return (
    <section id="brands" className="py-14 md:py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200 text-charcoal-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Tag className="w-3.5 h-3.5 text-saffron-600" />
            <span>Popular Brand Stock</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-forest-950 tracking-tight mb-3">
            Major Brands Carried in Store
          </h2>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
            {brands.supportingSentence}
          </p>
        </div>

        {/* Clean Typographic Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {brands.list.map((brand, idx) => (
            <div
              key={idx}
              className="group relative bg-white p-5 sm:p-6 rounded-xl border border-cream-200 hover:border-saffron-400 shadow-soft hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-saffron-700">
                    {brand.category}
                  </span>
                  {brand.note && (
                    <span
                      title={brand.note}
                      className="inline-flex items-center text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-medium cursor-help"
                    >
                      <HelpCircle className="w-3 h-3 mr-0.5" />
                      Check Stock
                    </span>
                  )}
                </div>

                {/* Brand Name rendered as crisp typography (No fake logos) */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-900 group-hover:text-saffron-700 transition-colors">
                  {brand.name}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-cream-100 flex items-center justify-between text-xs text-charcoal-700">
                <span>Wholesale retail packs</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cream-300 group-hover:bg-saffron-500 transition-colors"></span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Disclaimer */}
        <div className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-xs text-charcoal-700 leading-normal">
            {brands.disclaimer}
          </p>
        </div>

      </div>
    </section>
  );
};
