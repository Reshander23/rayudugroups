import React from 'react';

import { Box, Typography, Container, Button } from '@mui/material';

import herodright from '../Assets/herodright.png';
import herodleft from '../Assets/Herodleft (1).png';

// MAIN MOBILE IMAGE
import mobileImage from '../Assets/Heromobile1.png';

// FLOATING IMAGES
import Mobilefloat1 from '../Assets/Mobilefloat1.png';
import Mobilefloat2 from '../Assets/Mobilefloat2.png';

const Hero = () => {

  // MAIN HERO SECTION
  const heroStyle = {
    position: 'relative',

    width: '100%',

    minHeight: '100vh',

    backgroundColor: '#ffffff',

    overflow: 'hidden',

    display: 'flex',

    justifyContent: 'center',

    alignItems: 'center',

    flexDirection: 'column',

    padding: {
      xs: '40px 20px',
      md: '80px 40px',
    },
  };

  // CONTENT SECTION
  const contentStyle = {
    display: 'flex',

    flexDirection: 'column',

    justifyContent: 'center',

    alignItems: 'center',

    textAlign: 'center',

    maxWidth: '850px',

    width: '100%',

    margin: '0 auto',

    zIndex: 2,

    marginBottom: {
      xs: '10px',
      md: '15px',
    },
  };

  // HEADING
  const headingStyle = {
    fontFamily: 'RM Neue',
    fontWeight: 500,

    fontSize: {
      xs: '40px',
      sm: '55px',
      md: '75px',
    },

    lineHeight: 1.1,

    color: '#000',

    mb: 2,

    whiteSpace: 'nowrap',

    letterSpacing: '-0.5px',
  };

  // ORANGE TEXT
  const orangeTextStyle = {
    fontFamily: 'RM Neue',
    color: '#F25828',
  };

  // SUBHEADING
  const subheadingStyle = {
    fontFamily: 'RM Neue',
    fontSize: {
      xs: '16px',
      md: '20px',
    },

    color: '#555',

    // lineHeight: 1.6,

    mb: 4,
  };

  // BUTTON CONTAINER
  const buttonsContainerStyle = {
    display: 'flex',

    justifyContent: 'center',

    alignItems: 'center',

    flexWrap: 'wrap',

    gap: 2,
  };

  // PRIMARY BUTTON
  const buttonStyle = {
    fontFamily: 'RM Neue',
    background:
      'linear-gradient(98.76deg, #3C60B6 -45.06%, #3C60B6 34.8%, #4EB2CE 114.24%)',

    color: '#fff',

    textTransform: 'none',

    fontWeight: 600,

    fontSize: '14px',

    width: '220px',

    height: '50px',

    borderRadius: '50px',

    '&:hover': {
      background:
        'linear-gradient(98.76deg, #3C60B6 -45.06%, #3C60B6 34.8%, #4EB2CE 114.24%)',
    },
  };

  // SECONDARY BUTTON
  const secondaryButtonStyle = {
    fontFamily: 'RM Neue',
    backgroundColor: 'transparent',

    color: '#000',

    border: '1px solid #000',

    textTransform: 'none',

    fontWeight: 600,

    fontSize: '14px',

    width: '170px',

    height: '50px',

    borderRadius: '50px',
  };

  // MOBILE IMAGE CONTAINER
  const mobileImagesContainerStyle = {
    position: 'relative',

    display: 'flex',

    justifyContent: 'center',

    alignItems: 'center',

    width: '100%',

    zIndex: 2,
  };

  // MAIN MOBILE IMAGE
  const mobileImageStyle = {
    width: {
      xs: '100%',
      sm: '90%',
      md: '950px',
    },

    maxWidth: '100%',

    height: 'auto',

    objectFit: 'contain',

    mt: {
      xs: '20px',
      md: '40px',
    },
  };

  // LEFT FLOATING IMAGE
  const mobileFloatLeftStyle = {
    position: 'absolute',

    left: {
      xs: '-10px',
      sm: '20px',
      md: '40px',
    },

    top: {
      xs: '45%',
      md: '66%',
    },

    transform: 'translateY(-50%)',

    width: {
      xs: '110px',
      sm: '150px',
      md: '260px',
    },

    height: 'auto',

    objectFit: 'contain',

    zIndex: 5,

    filter: 'none',

    boxShadow: 'none',
  };

  // RIGHT FLOATING IMAGE
  const mobileFloatRightStyle = {
    position: 'absolute',

    right: {
      xs: '-10px',
      sm: '20px',
      md: '40px',
    },

    top: {
      xs: '45%',
      md: '70%',
    },

    transform: 'translateY(-50%)',

    width: {
      xs: '110px',
      sm: '150px',
      md: '260px',
    },

    height: 'auto',

    objectFit: 'contain',

    zIndex: 5,

    filter: 'none',

    boxShadow: 'none',
  };

  // LEFT FLOATING ICON
  const leftImageContainerStyle = {
    position: 'absolute',

    top: {
      xs: '58%',
      md: '38%',
    },

    left: {
      xs: '10px',
      md: '60px',
    },

    zIndex: 3,
  };

  // RIGHT FLOATING ICON
  const rightImageContainerStyle = {
    position: 'absolute',

    top: {
      xs: '58%',
      md: '28%',
    },

    right: {
      xs: '10px',
      md: '60px',
    },

    zIndex: 3,
  };

  // FLOATING ICON STYLE
  const floatingImageStyle = {
    width: {
      xs: '55px',
      md: '75px',
    },

    height: {
      xs: '55px',
      md: '75px',
    },

    border: '2px solid #F25828',

    borderRadius: '16px',

    padding: '14px',

    backgroundColor: '#fff',

    objectFit: 'contain',

    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
  };

  return (
    <Container maxWidth= 'xl'>
    <Box sx={heroStyle}>

      <Container maxWidth="xl">

        {/* CONTENT SECTION */}
        <Box sx={contentStyle}>

          <Typography sx={headingStyle}>
            Streamline Your{' '}
            <Box component="span" sx={orangeTextStyle}>
              Business
            </Box>
          </Typography>

          <Typography sx={subheadingStyle}>
            at rono we offer tools that scale your business rapidly
          </Typography>

          {/* BUTTONS */}
          <Box sx={buttonsContainerStyle}>

            <Button variant="contained" sx={buttonStyle}>
              Explore Rono Products
            </Button>

            <Button variant="outlined" sx={secondaryButtonStyle}>
              Request Demo
            </Button>

          </Box>

        </Box>

        {/* MOBILE IMAGE SECTION */}
        <Box sx={mobileImagesContainerStyle}>

          {/* MAIN MOBILE IMAGE */}
          <Box
            component="img"
            src={mobileImage}
            alt="Hero Mobile"
            sx={mobileImageStyle}
          />

          {/* LEFT FLOATING IMAGE */}
          <Box
            component="img"
            src={Mobilefloat1}
            alt="Floating Left"
            sx={mobileFloatLeftStyle}
          />

          {/* RIGHT FLOATING IMAGE */}
          <Box
            component="img"
            src={Mobilefloat2}
            alt="Floating Right"
            sx={mobileFloatRightStyle}
          />

        </Box>

        {/* LEFT FLOATING ICON */}
        <Box sx={leftImageContainerStyle}>

          <Box
            component="img"
            src={herodleft}
            alt="Left Icon"
            sx={floatingImageStyle}
          />

        </Box>

        {/* RIGHT FLOATING ICON */}
        <Box sx={rightImageContainerStyle}>

          <Box
            component="img"
            src={herodright}
            alt="Right Icon"
            sx={floatingImageStyle}
          />

        </Box>

      </Container>

    </Box>
    </Container>
  );
};

export default Hero;