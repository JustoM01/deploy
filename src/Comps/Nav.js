import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Hidden, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event'; // Import BookingIcon;
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// Styled components for enhanced styling
// Styled components for enhanced styling
// Styled components for enhanced styling
        const StyledAppBar = styled(AppBar)({
  background: 'linear-gradient(to right, #1b1b1b, #343434)',
  color: '#fff',
  borderBottom: '2px solid #4CAF50',
  boxShadow: 'none',
  
          });

         const MenuIconButton = styled(IconButton)({
        color: '#fff',
         });

const StyledButton = styled(Button)({
  color: '#fff',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar position="static">
      <Toolbar>

        {/* menu icon that shows on small screens only */}
          {/* menu icon that shows on small screens only */}
            {/* menu icon that shows on small screens only */}
        <Hidden mdUp>
          <MenuIconButton edge="start" aria-label="menu" onClick={handleMenu}>
            <MenuIcon />
          </MenuIconButton>
        </Hidden>

        <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontFamily: 'Raleway', letterSpacing: '2px', fontWeight: 600 }}>
          My Barbershop
        </Typography>
         {/* menu that shows on big screens */}
                  {/* menu that shows on big screens */}
                           {/* menu that shows on big screens */}
        <Hidden smDown>
          <StyledButton  component={Link} to='/'  startIcon={<HomeIcon />}>Home</StyledButton>
          <StyledButton  component={Link} to='/Booking'  startIcon={<EventIcon />}>Book</StyledButton>
          <StyledButton component={Link} to='/About'   startIcon={<InfoIcon />}>About</StyledButton>
        
        </Hidden>
       {/* menu that displays when menu icon is clicked */}
         {/* menu that displays when menu icon is clicked */}
           {/* menu that displays when menu icon is clicked */}
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component={Link} to='/'  onClick={handleClose}>Home</MenuItem>
          <MenuItem component={Link} to='/Booking'  onClick={handleClose}>Booking</MenuItem>
          <MenuItem component={Link} to='/About'  onClick={handleClose}>About</MenuItem>

        </Menu>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
