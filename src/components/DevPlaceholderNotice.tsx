import React, { useState } from 'react';
import { Info, X, MapPin } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

export const DevPlaceholderNotice: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  // If all key contact information is confirmed, hide notice
  const isFullyConfigured =
    businessConfig.contact.isAddressConfirmed &&
    businessConfig.contact.isPhoneConfirmed &&
    businessConfig.contact.isMapsConfirmed;

  if (isFullyConfigured || !isVisible) {
    return null;
  }

  return (
    <aside
      aria-label="Configuration notice"
      className="bg-amber-50 border-b border-amber-200 text-amber-900 text-xs px-4 py-2 relative z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-amber-700 flex-shrink-0" />
          <span>
            <strong>Shop Owner Note:</strong> Exact street address, phone, and Google Maps link are currently editable placeholders in{' '}
            <code className="bg-amber-100 px-1.5 py-0.5 rounded font-mono text-[11px] text-amber-800">
              src/config/businessConfig.ts
            </code>
            . No fabricated contact details are published.
          </span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href="#visit-shop"
            className="hidden sm:inline-flex items-center gap-1 font-semibold text-amber-800 hover:text-amber-950 underline underline-offset-2"
          >
            <MapPin className="w-3 h-3" />
            View Location Section
          </a>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss notice"
            className="p-1 rounded hover:bg-amber-200/60 transition-colors text-amber-700"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
