import React from 'react';
import { Box, Typography, Link, IconButton, styled } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

// Styled components
const FooterContainer = styled(Box)({
  background: '#333333',
  color: '#FFFFFF',
  padding: '40px 20px',
  textAlign: 'center',

});


const ContactForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
  '& input, & textarea': {
    width: '80%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '2px solid green',
    backgroundColor: '#f9f9f9',
 
  },
  '& button': {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: '#4CAF50',
    },
  },
});




const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="body1">Connect with us:</Typography>
      {/* Social media icons */}
      <IconButton color="inherit" component={Link} href="https://facebook.com" target="_blank">
        <Facebook />
      </IconButton>
      <IconButton color="inherit" component={Link} href="https://twitter.com" target="_blank">
        <Twitter />
      </IconButton>
      <IconButton color="inherit" component={Link} href="https://instagram.com" target="_blank">
        <Instagram />
      </IconButton>


      <ContactForm >
        <Typography variant="h6" gutterBottom>Contact Us</Typography>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required />
        <button type="submit" style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', borderRadius: '5px', marginTop: '10px' }}>Send</button>
      </ContactForm>

      <Typography variant="body2" component="p" style={{ marginTop: '20px', color:'green' }}>
        © 2024 My Barbershop. All rights reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
