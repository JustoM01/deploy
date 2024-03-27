import React from 'react';
import { Typography, TextField, Button, Container, styled, MenuItem, FormControl, InputLabel, Select } from '@mui/material';

// Styled Container component with custom styles
const StyledContainer = styled(Container)({
  backgroundColor: '#f9f9f9', 
  padding: '40px',
  border: '1px solid #ddd', 
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
  maxWidth: '600px',
  margin: 'auto', 
  marginTop:'20px',
  marginBottom:'60px'
});

const BookingPage = () => {
  const [service, setService] = React.useState('');
  const [barber, setBarber] = React.useState('');

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  const handleBarberChange = (event) => {
    setBarber(event.target.value);
  };

  return (
    <>
      <StyledContainer>
        <Typography variant="h2" gutterBottom>
          Book a Haircut
        </Typography>
        <form >
          <TextField label="Name" variant="outlined" fullWidth margin="normal" />
          <TextField label="Email" variant="outlined" fullWidth margin="normal" />
          <TextField label="Phone" variant="outlined" fullWidth margin="normal" />
          <TextField type="date" variant="outlined" fullWidth margin="normal" />
          <TextField label="Time" type="time" variant="outlined" fullWidth margin="normal" />

          {/* Dropdown for choosing service */}
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="service-label">Service</InputLabel>
            <Select
              labelId="service-label"
              value={service}
              onChange={handleServiceChange}
              label="Service"
            >
              <MenuItem value="haircut">Haircut</MenuItem>
              <MenuItem value="beard">Beard Trimming</MenuItem>
              <MenuItem value="facial">Facial Treatment</MenuItem>
            </Select>
          </FormControl>

          {/* Dropdown for choosing barber */}
                    {/* Dropdown for choosing barber */}
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="barber-label">Barber</InputLabel>
            <Select
              labelId="barber-label"
              value={barber}
              onChange={handleBarberChange}
              label="Barber"
            >
              <MenuItem value="john">John</MenuItem>
              <MenuItem value="emma">Emma</MenuItem>
              <MenuItem value="alex">Alex</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained" style={{ backgroundColor: 'green' }}>Book Appointment</Button>
        </form>
      </StyledContainer>
    </>
  );
};

export default BookingPage;
