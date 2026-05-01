import React from 'react';

import {
  Box,
  Typography,
  Container,
  Button,
} from '@mui/material';

import hrmsImage from "../../Assets/Hrmsimg.png";

// FLOATING IMAGE
import hrmsFloat from "../../Assets/hrms1.png";

const Hrms = () => {

  // MAIN SECTION
  const sectionStyle = {
    py: { xs: 6, md: 10 },
    px: { xs: 2, md: 4 },
    backgroundColor: '#ffffff',
  };

  // MAIN WRAPPER
  const wrapperStyle = {
    display: 'flex',

    flexDirection: {
      xs: 'column',
      md: 'row',
    },

    alignItems: 'center',

    gap: {
      xs: 5,
      md: 8,
    },
  };

  // LEFT IMAGE SECTION
  const imageSectionStyle = {
    width: {
      xs: '100%',
      md: '50%',
    },

    display: 'flex',

    justifyContent: 'center',

    alignItems: 'center',

    position: 'relative',
  };

  // HEADING
  const headingStyle = {
    fontFamily: 'RM Neue',

    fontWeight: 600,

    fontSize: {
      xs: '32px',
      md: '40px',
    },

    color: '#111',

    mb: 3,

    lineHeight: '32px',

    letterSpacing: '-0.01em',
  };

  // BODY
  const bodyStyle = {
    fontSize: {
      xs: '16px',
      md: '18px',
    },

    color: '#666',

    lineHeight: 1.8,

    maxWidth: '500px',

    mb: 4,
  };

  // BUTTON
  const buttonStyle = {
    width: 'fit-content',

    background:
      'linear-gradient(98.76deg, #3C60B6 -45.06%, #3C60B6 34.8%, #4EB2CE 114.24%)',

    color: '#fff',

    textTransform: 'none',

    fontWeight: 600,

    borderRadius: '50px',

    padding: '12px 30px',

    fontSize: '15px',

    boxShadow: '0 8px 20px rgba(60,96,182,0.35)',

    '&:hover': {
      background:
        'linear-gradient(98.76deg, #3C60B6 -45.06%, #3C60B6 34.8%, #4EB2CE 114.24%)',
    },
  };

  // RIGHT CONTENT
  const contentStyle = {
    width: {
      xs: '100%',
      md: '50%',
    },

    display: 'flex',

    flexDirection: 'column',

    justifyContent: 'center',

    alignItems: {
      xs: 'center',
      md: 'flex-start',
    },

    textAlign: {
      xs: 'center',
      md: 'left',
    },
  };

  // MAIN IMAGE
  const imageStyle = {
    width: {
      xs: '100%',
      sm: '90%',
      md: '520px',
    },

    height: 'auto',

    display: 'block',

    objectFit: 'cover',

    borderRadius: '28px',

    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
  };

  // FLOATING IMAGE STYLE
  const floatingImageStyle = {
    position: 'absolute',

    top: {
      xs: '55%',
      md: '50%',
    },

    left: {
      xs: '-10px',
      md: '310px',
    },

    transform: 'translateY(-50%)',

    width: {
      xs: '140px',
      sm: '180px',
      md: '320px',
    },

    height: 'auto',

    objectFit: 'contain',

    zIndex: 5,

    filter: 'none',

    boxShadow: 'none',
  };

  return (

    <Box sx={sectionStyle}>

      <Container maxWidth="xl">

        <Box sx={wrapperStyle}>

          {/* LEFT IMAGE SIDE */}
          <Box sx={imageSectionStyle}>

            {/* MAIN BACKGROUND IMAGE */}
            <Box
              component="img"
              src={hrmsImage}
              alt="HRMS"
              sx={imageStyle}
            />

            {/* FLOATING IMAGE */}
            <Box
              component="img"
              src={hrmsFloat}
              alt="HRMS Floating"
              sx={floatingImageStyle}
            />

          </Box>

          {/* RIGHT CONTENT */}
          <Box sx={contentStyle}>

            <Typography sx={headingStyle}>
              RONO HRMS
            </Typography>

            <Typography sx={bodyStyle}>
              Comprehensive Human Resource Management System that simplifies operations, improves efficiency, and enhances employee management for businesses of all sizes.
            </Typography>

            <Button
              variant="contained"
              sx={buttonStyle}
            >
              Try RONO HRMS
            </Button>

          </Box>

        </Box>

      </Container>

    </Box>
  );
};

export default Hrms;