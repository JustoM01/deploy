
import { Box, Typography, Button, styled } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// all my styled Components
// all my styled Components
// all my styled Components
const HeroSection = styled(Box)({
  background: 'linear-gradient(to right, #1b1b1b, #343434)',
  color: '#FFFFFF',
  textAlign: 'center',
  padding: '100px 0',
});

const HeroHeading = styled(Typography)({
  fontFamily: 'Raleway, sans-serif',
  fontWeight: 700,
  fontSize: '3.5rem',
  letterSpacing: '1px',
  marginBottom: '20px',
});

const HeroSubheading = styled(Typography)({
  fontFamily: 'Raleway',
  fontSize: '1.5rem',
  margin: '20px 0',
});

const HeroButton = styled(Button)({
  background: '#4CAF50',
  color: '#FFFFFF',
  padding: '12px 24px',
  borderRadius: '25px',
  fontWeight: 700,
  fontFamily:'Raleway',
  textTransform: 'uppercase',
  '&:hover': {
    backgroundColor: '#388e3c',
  },
});

const Hero = () => {
  return (
    <HeroSection>
      <HeroHeading variant="h1">Welcome to Our  Barbershop</HeroHeading>
      <HeroSubheading variant="subtitle1">
        Experience the Perfect Cut and Grooming
      </HeroSubheading>
      <HeroButton   component={Link} to='/Booking' variant="contained">Book Now</HeroButton>
    </HeroSection>
  );
};

export default Hero;
