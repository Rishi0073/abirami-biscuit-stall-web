import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, AlertCircle, ShoppingBag } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

export const VisitShop: React.FC = () => {
  const { contact, visitShop } = businessConfig;

  const hasGenuineMapUrl = Boolean(contact.googleMapsUrl && contact.googleMapsUrl.trim() !== '' && contact.googleMapsUrl !== '#');

  return (
    <section id="visit-shop" className="py-16 md:py-24 bg-cream-100 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-saffron-600" />
            <span>Physical Storefront</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-950 tracking-tight leading-tight mb-4">
            {visitShop.headline}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
            {visitShop.description}
          </p>
        </div>

        {/* Location & Details Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-cream-300 shadow-elevated overflow-hidden">
            
            {/* Top Banner: In-person wholesale notice */}
            <div className="bg-forest-900 text-cream-100 px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-saffron-400 flex-shrink-0" />
                <span className="text-sm font-semibold">
                  Physical Wholesale Purchases Only
                </span>
              </div>
              <span className="text-xs text-cream-200">
                Kirana stores & bulk buyers welcome
              </span>
            </div>

            <div className="p-6 sm:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* 1. Address Block */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-saffron-700 font-bold text-sm uppercase tracking-wider">
                    <MapPin className="w-4 h-4" />
                    <span>Shop Address</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-forest-950 mb-1">
                      {contact.isAddressConfirmed ? contact.addressLine1 : "Dharavi, Mumbai"}
                    </h3>
                    <p className="text-sm text-charcoal-700 leading-relaxed">
                      {contact.isAddressConfirmed ? (
                        <>
                          {contact.addressDetails}
                          <br />
                          {contact.landmarkPlaceholder}
                        </>
                      ) : (
                        <span className="text-charcoal-700">
                          Located in Dharavi, Mumbai, Maharashtra, India.
                          <br />
                          <span className="inline-block mt-2 text-xs bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-md">
                            Exact street address will be published upon confirmation.
                          </span>
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* 2. Contact Phone Block */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-saffron-700 font-bold text-sm uppercase tracking-wider">
                    <Phone className="w-4 h-4" />
                    <span>Contact Number</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-forest-950 mb-1">
                      {contact.isPhoneConfirmed ? contact.phone : "Wholesale Inquiries"}
                    </h3>
                    <p className="text-sm text-charcoal-700 leading-relaxed">
                      {contact.isPhoneConfirmed ? (
                        <span>Call or WhatsApp: {contact.phone}</span>
                      ) : (
                        <span className="text-charcoal-700">
                          Direct phone & WhatsApp contact will be updated once confirmed by the shop owner.
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* 3. Opening Hours Block */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-saffron-700 font-bold text-sm uppercase tracking-wider">
                    <Clock className="w-4 h-4" />
                    <span>Shop Hours</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-forest-950 mb-1">
                      {contact.isHoursConfirmed ? contact.openingHours : "Wholesale Store Timings"}
                    </h3>
                    <p className="text-sm text-charcoal-700 leading-relaxed">
                      {contact.isHoursConfirmed ? (
                        <span>{contact.openingHours}</span>
                      ) : (
                        <span className="text-charcoal-700">
                          Regular market wholesale hours apply. Please visit during daytime commercial hours.
                        </span>
                      )}
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Button & Genuine Maps Link Area */}
              <div className="mt-10 pt-8 border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left w-full sm:w-auto">
                  <div className="text-xs text-charcoal-700 font-medium">
                    {visitShop.noteForRetailers}
                  </div>
                </div>

                <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {hasGenuineMapUrl ? (
                    <a
                      href={contact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>Find Us on Maps</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        alert(
                          "Owner Note: The genuine Google Maps link has not yet been set in src/config/businessConfig.ts. Once provided, clicking this button will open the exact Google Maps location directly."
                        );
                      }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-forest-900 hover:bg-forest-950 text-white font-bold text-sm transition-all"
                      title="Google Maps link awaiting owner confirmation"
                    >
                      <MapPin className="w-4 h-4 text-saffron-400" />
                      <span>Locate in Dharavi</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Configuration transparency notice */}
              {!contact.isMapsConfirmed && (
                <div className="mt-6 p-4 rounded-xl bg-cream-100 border border-cream-300 flex items-start gap-3 text-xs text-charcoal-700">
                  <AlertCircle className="w-4 h-4 text-saffron-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Responsible Publishing Standard:</strong> We do not guess or fabricate coordinates or exact shop numbers. The business owner can paste their confirmed Google Maps pin link in{' '}
                    <code className="bg-white px-1.5 py-0.5 rounded border border-cream-300 font-mono text-charcoal-800">
                      businessConfig.contact.googleMapsUrl
                    </code>{' '}
                    to enable 1-click directions.
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
