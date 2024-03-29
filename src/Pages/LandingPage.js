import React from 'react';
import HeroSection from '../Comps/Hero';
import AboutUsSection from '../Comps/About';
import ServicesSection from '../Comps/Service';
import Gallery from '../Comps/Gallery';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <Gallery></Gallery>
      <ServicesSection />
      <AboutUsSection />

    </div>
  );
};

export default LandingPage;
