import React from 'react';
import { DevPlaceholderNotice } from './components/DevPlaceholderNotice';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FarsanSpotlight } from './components/FarsanSpotlight';
import { FarsanVarieties } from './components/FarsanVarieties';
import { BrandShowcase } from './components/BrandShowcase';
import { CategoryGrid } from './components/CategoryGrid';
import { WhyVisitUs } from './components/WhyVisitUs';
import { AboutSection } from './components/AboutSection';
import { VisitShop } from './components/VisitShop';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-charcoal-900">
      {/* On-page developer / shop owner configuration notification */}
      <DevPlaceholderNotice />

      {/* Section A: Header and Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 4 & Hero: Farsan hero spotlight and shop introduction */}
        <HeroSection />

        {/* Section B: Farsan Spotlight (Editorial introduction to hero category) */}
        <FarsanSpotlight />

        {/* New Feature: Our Farsan & Snack Varieties (19 Unique Authentic Products) */}
        <FarsanVarieties />

        {/* Section C: Major Brands We Carry */}
        <BrandShowcase />

        {/* Section D: More for your Kirana Shop (6 Wholesale Categories) */}
        <CategoryGrid />

        {/* Section E: Why Visit Abirami Biscuit Stall? */}
        <WhyVisitUs />

        {/* Section F: About the Business */}
        <AboutSection />

        {/* Section G: Visit the Physical Shop in Dharavi */}
        <VisitShop />
      </main>

      {/* Section H: Footer */}
      <Footer />
    </div>
  );
};

export default App;
