import React from 'react';
import { Typography, Grid, Box, Container, styled } from '@mui/material';
const about = require('./utils/barber.jpg')
// Styled component for enhanced styling
const AboutSection = styled(Box)({
  backgroundColor: '#1b1b1b',
  color: '#FFFFFF',
  py: 8,
});


const AboutHeader = styled(Typography)({
  fontFamily: 'Raleway'
})

const About = () => {
  return (
    <AboutSection>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <AboutHeader variant="h2" component="h2" color="green" gutterBottom>
              About Us
            </AboutHeader>
            <Typography variant="h5" gutterBottom>
  Welcome to our barbershop, where style meets precision. Our experienced barbers are dedicated to providing you with top-notch grooming services tailored to your unique preferences. Whether you're looking for a classic cut or a modern style, we've got you covered.
</Typography>
<Typography variant="h5" gutterBottom>
  At our barbershop, we pride ourselves on attention to detail and customer satisfaction. From beard trims to hot towel shaves, our skilled barbers will ensure you leave looking and feeling your best. Sit back, relax, and enjoy the ultimate grooming experience in our welcoming and comfortable atmosphere.
</Typography>

          </Grid>
          <Grid item xs={12} md={6}>
            <img src={about} alt="About Us" style={{ width: '100%', borderRadius: 8, height:'500px' }} />
          </Grid>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About;
