import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoTicker } from './components/LogoTicker';
import { Features } from './components/Features';
import { DetailedFeatures } from './components/DetailedFeatures';
import { HowItWorks } from './components/HowItWorks';
import { StatsSection } from './components/StatsSection';
import { DiscountFormSection } from './components/DiscountFormSection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand/20">
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <HowItWorks />
      <DetailedFeatures />
      <DiscountFormSection />
      <StatsSection />
      <Testimonials />
      <FAQ />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;