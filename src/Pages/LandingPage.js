import React from 'react';
import HeroSection from '../Comps/Hero';
import AboutUsSection from '../Comps/About';
import ServicesSection from '../Comps/Service';
import Gallery from '../Comps/Gallery';
import { Box,  styled } from '@mui/material';
const Landing = styled(Box)({
zIndex:1,
marginTop:'140PX',
position:'sticky'
});
const LandingPage = () => {
  return (
    <Landing  >
      <HeroSection  />
      <Gallery></Gallery>
      <ServicesSection />
      <AboutUsSection />

    </Landing>
  );
};

export default LandingPage;
