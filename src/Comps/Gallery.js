import React from 'react';
import { Box, Typography, styled } from '@mui/material';

const one = require('./utils/gallery.jpg')

// Styled components for enhanced styling
const PortfolioSection = styled(Box)({
  background: 'linear-gradient(to right, #1b1b1b, #343434)',
  padding: '80px 0',
  textAlign: 'center',
});

const PortfolioHeading = styled(Typography)({
  fontFamily: 'Raleway',
  fontWeight: 700,
  fontSize: '2.5rem',
  marginBottom: '40px',
  color: '#FFFFFF', 
});

const PortfolioContent = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
});

const PortfolioImage = styled('img')({
  width: '300px',
  height: '200px',
  objectFit: 'cover',
  border:'1px solid white',
  borderRadius: '8px',
  margin: '20px',
  boxShadow: '0 6px 12px rgba(0,0,0,0.3)', 
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)', 
  },
});

const Gallery = () => {
  return (
    <PortfolioSection>
      <PortfolioHeading variant="h2">Some of our Gallery</PortfolioHeading>
      <PortfolioContent>
        <PortfolioImage src={one} alt="Haircut 1" />
        <PortfolioImage src={one} alt="Haircut 1" />
        <PortfolioImage src={one} alt="Haircut 1" />
        {/* Add more images as needed */}
      </PortfolioContent>
    </PortfolioSection>
  );
};

export default Gallery;
