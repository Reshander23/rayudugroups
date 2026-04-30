import React from 'react';
import { Box, Typography, Container, Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  // Style for main navbar container
  const navbarStyle = {
    backgroundColor: '#fff',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  // Style for the content container
  const contentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    py: 2,
    px: { xs: 2, md: 3 },
  };

  // Style for navigation links
  const linkStyle = {
    fontSize: 16,
    fontWeight: 500,
    color: '#000',
    cursor: 'pointer',
    padding: '8px 16px',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  };

  // Style for dropdown items
  const dropdownStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    cursor: 'pointer',
    color: '#000',
    fontWeight: 500,
    fontSize: 16,
    padding: '8px 16px',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  };

  // Style for the contact button
  const buttonStyle = {
    background: 'linear-gradient(98.76deg, #3C60B6 -45.06%, #3C60B6 34.8%, #4EB2CE 114.24%)',
    color: '#fff',
    textTransform: 'none',
    fontWeight: 500,
    px: 3,
    py: 1,
    borderRadius: '50px',
    '&:hover': {
      opacity: 0.9,
    },
  };

  return (
    <Box sx={navbarStyle}>
      <Container maxWidth="xl">
        <Box sx={contentStyle}>
          
          {/* Left side - Logo and brand name */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              component="img"
              src={require('../Assets/Logo.png')}
              alt="RONO Logo"
              sx={{ height: 40, width: 'auto', display: 'block' }}
            />
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: 24,
                color: '#000',
                letterSpacing: '-0.5px',
                textTransform: 'lowercase'
              }}
            >
              rono
            </Typography>
          </Box>

          {/* Middle - Navigation links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            <Typography sx={linkStyle}>About us</Typography>
            
            <Box sx={dropdownStyle}>
              Products
              <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
            </Box>
            
            <Box sx={dropdownStyle}>
              Resources
              <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
            </Box>
          </Box>

          {/* Right side - Search and contact */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton sx={{ color: '#000', '&:hover': { backgroundColor: '#f5f5f5' } }}>
              <SearchIcon />
            </IconButton>

            <Button variant="contained" sx={buttonStyle}>
              Contact Us
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;