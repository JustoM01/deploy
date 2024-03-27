import React from 'react';
import { Typography, Grid, Box, Container, styled } from '@mui/material';
const about = require('./utils/barber.jpg')
// Styled component for enhanced styling
const AboutSection = styled(Box)({
  backgroundColor: '#1b1b1b',
  color: '#FFFFFF',
  py: 8,
});

const About = () => {
  return (
    <AboutSection>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h2" color="green" gutterBottom>
              About Us
            </Typography>
            <Typography variant="h5" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor libero quis eros
              vestibulum, ut hendrerit urna placerat. Integer nec tortor quis est vehicula congue
              at ac felis. Praesent ultricies odio quis metus pharetra, non bibendum ex feugiat.
            </Typography>
            <Typography variant="h5" gutterBottom>
              Fusce id tortor quis urna tincidunt sollicitudin. Curabitur id fermentum libero, non
              congue risus. In hac habitasse platea dictumst. Nunc et tortor non velit commodo
              interdum sed nec sem. Vestibulum ut consequat justo. Sed et nisi nec ante laoreet
              bibendum. Donec quis diam purus. Cras vehicula ligula sit amet commodo dignissim.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={about} alt="About Us" style={{ width: '100%', borderRadius: 8, height:'' }} />
          </Grid>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About;
