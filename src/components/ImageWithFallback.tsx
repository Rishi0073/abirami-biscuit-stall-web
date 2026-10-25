import React, { useState } from 'react';
import { Package } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackText,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`bg-cream-200 border border-cream-300 flex flex-col items-center justify-center p-6 text-center text-charcoal-700 ${className}`}
        role="img"
        aria-label={alt || 'Image illustration'}
      >
        <Package className="w-10 h-10 text-saffron-600 mb-2 opacity-80" />
        <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-800">
          {fallbackText || alt || 'Abirami Biscuit Stall'}
        </span>
        <span className="text-[11px] text-charcoal-700 mt-1">Wholesale Kirana & Snacks</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-cream-200 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-saffron-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};
