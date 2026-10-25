import { MapPin, Scale, ArrowUp } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-950 text-cream-200 border-t border-forest-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-forest-900/80">
          
          {/* Column 1: Brand & Wholesale Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-saffron-500"></span>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                {businessConfig.name}
              </span>
            </div>

            <p className="text-sm text-cream-300 leading-relaxed max-w-sm">
              Your wholesale destination in Dharavi, Mumbai for savoury farsan, namkeen by the kilogram, biscuits, chips, and fast-moving everyday kirana essentials.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-cream-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-saffron-400 flex-shrink-0" />
                <span>{businessConfig.locationArea}, {businessConfig.city}, {businessConfig.state}</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-saffron-400 flex-shrink-0" />
                <span>Loose farsan available by weight</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#top" className="hover:text-saffron-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#farsan-spotlight" className="hover:text-saffron-400 transition-colors">
                  Farsan Spotlight
                </a>
              </li>
              <li>
                <a href="#farsan-varieties" className="hover:text-saffron-400 transition-colors">
                  Our Farsan Varieties
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-saffron-400 transition-colors">
                  Major Brands
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-saffron-400 transition-colors">
                  Our Wholesale Range
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-saffron-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#visit-shop" className="hover:text-saffron-400 transition-colors">
                  Visit the Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Wholesale Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Wholesale Range
            </h4>
            <ul className="space-y-2 text-sm">
              {businessConfig.categories.map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#categories"
                    className="hover:text-saffron-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.title}</span>
                    {cat.isHero && (
                      <span className="text-[10px] uppercase font-bold text-saffron-400">
                        Hero
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Retailer Notice & Direct Action */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Shop In Person
            </h4>
            <p className="text-xs text-cream-300 leading-relaxed">
              We cater directly to kirana retailers and bulk buyers at our physical shop.
            </p>
            <div className="pt-2">
              <a
                href="#visit-shop"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-saffron-600 hover:bg-saffron-700 text-white text-xs font-bold transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Visit Us in Dharavi</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300">
          <div>
            © {currentYear} {businessConfig.name}. All rights reserved. Physical wholesale supplier in Dharavi, Mumbai.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-forest-900 hover:bg-forest-800 text-cream-200 transition-colors"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
