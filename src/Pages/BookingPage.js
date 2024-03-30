import React from 'react';
import { Typography, TextField, Button, Container, styled, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { Person, Email, Phone, DateRange, AccessTime } from '@mui/icons-material'; // Import icons for input fields

// Styled Container component with custom styles
const StyledContainer = styled(Container)({
  backgroundColor: '#f9f9f9',
  border: '1px solid #ddd',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  margin: 'auto',

 marginBottom:'20px',
 marginTop:'10px'
  
 

  


});

const BookingPage = () => {
  return (
    <>
      <StyledContainer>
        <Typography style={{fontFamily:'Raleway'}} variant="h2" gutterBottom>
          Book a Haircut
        </Typography>
        <form>
          <TextField label="Name" variant="outlined" fullWidth margin="normal" InputProps={{ startAdornment: <Person /> }} />
          <TextField label="Email" variant="outlined" fullWidth margin="normal" InputProps={{ startAdornment: <Email /> }} />
          <TextField label="Phone" variant="outlined" fullWidth margin="normal" InputProps={{ startAdornment: <Phone /> }} />
          <TextField type="date" variant="outlined" fullWidth margin="normal" InputProps={{ startAdornment: <DateRange /> }} />
          <TextField type="time" variant="outlined" fullWidth margin="normal" InputProps={{ startAdornment: <AccessTime /> }} />

          {/* Dropdowns for choosing service and barber */}
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="service-label">Service</InputLabel>
            <Select labelId="service-label" label="Service">
              <MenuItem value="haircut">Haircut</MenuItem>
              <MenuItem value="beard">Beard Trimming</MenuItem>
              <MenuItem value="facial">Facial Treatment</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="barber-label">Barber</InputLabel>
            <Select labelId="barber-label" label="Barber">
              <MenuItem value="john">John</MenuItem>
              <MenuItem value="emma">Emma</MenuItem>
              <MenuItem value="alex">Alex</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained" style={{ backgroundColor: 'green', marginBottom:'14px' }}>Book Appointment</Button>
        </form>
      </StyledContainer>
    </>
  );
};

export default BookingPage;
