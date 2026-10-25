import React from 'react';
import { Store, Utensils, Award, Eye, MapPin, CheckCircle } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

export const WhyVisitUs: React.FC = () => {
  const { whyVisit } = businessConfig;

  // Icon mapping
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Store':
        return <Store className="w-6 h-6 text-saffron-600" />;
      case 'Utensils':
        return <Utensils className="w-6 h-6 text-saffron-600" />;
      case 'Award':
        return <Award className="w-6 h-6 text-saffron-600" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-saffron-600" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-saffron-600" />;
      default:
        return <CheckCircle className="w-6 h-6 text-saffron-600" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200 text-charcoal-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Wholesale Convenience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-950 tracking-tight leading-tight mb-4">
            {whyVisit.headline}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
            {whyVisit.supportingCopy}
          </p>
        </div>

        {/* Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyVisit.points.map((pt, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-cream-200 hover:border-saffron-300 shadow-soft hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-saffron-50 border border-saffron-100 flex items-center justify-center mb-5">
                  {getIcon(pt.icon)}
                </div>
                <h3 className="font-serif text-xl font-bold text-forest-900 mb-2.5">
                  {pt.title}
                </h3>
                <p className="text-sm text-charcoal-700 leading-relaxed">
                  {pt.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-cream-100 flex items-center gap-2 text-xs font-semibold text-saffron-700">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron-600"></span>
                <span>Wholesale retail benefit</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust & Transparency Note */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-charcoal-700 italic">
            Physical stock and brand availability are refreshed regularly at our shop in Dharavi. We welcome retailers to visit and consult directly on current wholesale batches.
          </p>
        </div>

      </div>
    </section>
  );
};
