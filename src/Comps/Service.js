import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia,  styled } from '@mui/material';

import hero1 from './utils/hero1.jpg'; 
import hero2 from './utils/hero2.jpg'; 
import hero3 from './utils/hero3.jpg'; 

// Styled components for enhanced styling
const ServiceSection = styled(Box)({
  background: 'linear-gradient(to right, #1b1b1b, #343434)',
  color: '#FFFFFF',
  padding: '80px 0',
});

const ServiceHeading = styled(Typography)({
  fontFamily: 'Raleway',
  fontWeight: 700,
  fontSize: '2.5rem',
  marginBottom: '40px',
});

const ServiceCard = styled(Card)({
  maxWidth: 345,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: '#FFFFFF',
});

const ServiceCardContent = styled(CardContent)({
  minHeight: 150,
});

const ServiceCardImage = styled(CardMedia)({
  height: 200,
});


const services = [
  {
    title: 'Haircuts',
    description: 'Professional haircuts for men and women.',
    image:hero1
  },
  {
    title: 'Beard Trimming',
    description: 'Expert beard trimming and grooming services.',
    image:hero2
  },
  {
    title: 'Facial Treatments',
    description: 'Relaxing facial treatments for a rejuvenated look.',
    image:hero3
  },
];

const Service = () => {
  return (
    <ServiceSection>
      <ServiceHeading variant="h2">Our Services</ServiceHeading>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item key={index}>
            <ServiceCard>
              <ServiceCardImage image={service.image} title={service.title} />
              <ServiceCardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="WHITE">
                  {service.description}
                </Typography>
              </ServiceCardContent>
            </ServiceCard>
          </Grid>
        ))}
      </Grid>
      
    </ServiceSection>
  );
};

export default Service;
