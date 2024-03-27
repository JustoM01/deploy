import React from 'react';
import { Box, Typography, styled } from '@mui/material';

// Styled components for enhanced styling
const AboutSection = styled(Box)({
  background: 'linear-gradient(to right, #1b1b1b, #343434)',
  color: '#FFFFFF',
  padding: '80px 0',
});

const AboutHeading = styled(Typography)({
  fontFamily: 'Raleway',
  fontWeight: 700,
  fontSize: '2.5rem',
  marginBottom: '40px',
});

const AboutContent = styled(Box)({
  maxWidth: 800,
  margin: '0 auto',
  textAlign: 'center',
});

const AboutPage = () => {
  return (
    <AboutSection>
      <AboutContent>
        <AboutHeading variant="h2">About Us</AboutHeading>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare purus nec nisi pretium dapibus.
          Phasellus malesuada, dolor ut cursus viverra, odio velit laoreet elit, eget consequat lacus sem nec orci.
          Aliquam erat volutpat. Nullam sit amet sapien purus. Integer et justo enim. Proin non justo urna. In hac
          habitasse platea dictumst.
        </Typography>
        <Typography variant="body1" paragraph>
          Fusce accumsan ultrices turpis. Suspendisse potenti. Praesent laoreet risus nec nunc eleifend, non maximus
          metus pretium. Donec vehicula, tortor et laoreet vehicula, felis odio egestas tellus, sit amet gravida nunc
          ante nec eros. Vestibulum non eros non enim blandit laoreet.
        </Typography>
        <Typography variant="body1" paragraph>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam eleifend,
          tortor sit amet euismod sollicitudin, leo risus suscipit eros, eget ultrices lacus augue nec enim. Donec id
          nisi commodo, ullamcorper tortor sed, fermentum ipsum.
        </Typography>
      </AboutContent>
    </AboutSection>
  );
};

export default AboutPage;
