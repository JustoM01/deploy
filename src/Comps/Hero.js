import { Box, Typography, Button, styled } from '@mui/material';
import { Link } from 'react-router-dom';
// my styling for main comp
const HeroSection = styled(Box)({
  position: 'relative',
  background: 'linear-gradient(to right, #1b1b1b, #343434)',
  color: '#FFFFFF',
  textAlign: 'center',

  minHeight: '500px',
 

});

const HeroHeading = styled(Typography)({
  fontFamily: 'Raleway',
  fontWeight: 700,
  fontSize: '3.5rem',
  letterSpacing: '1px',
 
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
 color:'white'
});

const HeroSubheading = styled(Typography)({
  fontFamily: 'Raleway',
  fontSize: '1.5rem',
  margin: '20px 0',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
});

const HeroButton = styled(Button)({
  background: '#4CAF50',
  color: '#FFFFFF',
  padding: '12px 24px',
  borderRadius: '25px',
  fontWeight: 700,
  fontFamily:'Raleway',
  textTransform: 'uppercase',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#388e3c',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  },
});

const Hero = () => {
  return (
    <HeroSection>
      <HeroHeading variant="h1">Welcome to Our Barbershop</HeroHeading>
      <HeroSubheading variant="subtitle1">
        {/* styling i got on stack oveflow */}
        <span style={{ animation: 'bounce 2s infinite' }}>Experience the Perfect Cut and Grooming</span>
      </HeroSubheading>
      <HeroButton component={Link} to='/Booking' variant="contained">
       
        <span role="img" aria-label="book icon" style={{ marginRight: '8px' }}>📅</span>
        Book Now
      </HeroButton>
      {/* Example: Testimonial */}
      <Typography variant="body1" style={{ marginTop: '20px' }}>
        {/* Highlighted text */}
        <span>★★★★★</span> "Best barbershop in town! Highly recommended."
      </Typography>
      {/*  Social proof */}
      <Typography variant="body2">
        <span style={{ fontWeight: 'bold' }}>Over 1000</span> satisfied customers served
      </Typography>
    </HeroSection>
  );
};

export default Hero;
