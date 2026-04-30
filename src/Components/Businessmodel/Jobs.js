import React from 'react';

import {
  Box,
  Typography,
  Container,
  Button,
} from '@mui/material';

import jobsImage from "../../Assets/jobs.png";
import jobs1 from "../../Assets/jobs1.png";

const Jobs = () => {

  // MAIN SECTION
  const sectionStyle = {
    py: { xs: 6, md: 10 },
    px: { xs: 2, md: 4 },
    backgroundColor: '#f8f9fa',
  };

  // MAIN WRAPPER
  const wrapperStyle = {
    display: 'flex',

    flexDirection: {
      xs: 'column',
      md: 'row',
    },

    alignItems: 'center',

    gap: 6,
  };

  // LEFT CONTENT
  const leftContentStyle = {
    width: {
      xs: '100%',
      md: '45%',
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

  // HEADING
  const headingStyle = {
    fontWeight: 700,

    fontSize: {
      xs: '34px',
      md: '46px',
    },

    color: '#111',

    mb: 3,

    lineHeight: 1.2,
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

    padding: '12px 28px',

    fontSize: '15px',

    boxShadow: '0 8px 20px rgba(60,96,182,0.35)',

    '&:hover': {
      background:
        'linear-gradient(98.76deg, #3C60B6 -45.06%, #3C60B6 34.8%, #4EB2CE 114.24%)',
    },
  };

  // RIGHT SECTION
  const rightSectionStyle = {
    width: {
      xs: '100%',
      md: '55%',
    },

    position: 'relative',

    display: 'flex',

    justifyContent: 'center',

    alignItems: 'center',
  };

  // MAIN IMAGE
  const imageStyle = {
    width: {
      xs: '100%',
      sm: '90%',
      md: '550px',
    },

    maxWidth: '100%',

    height: 'auto',

    objectFit: 'contain',

    borderRadius: '24px',

    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
  };

  // FLOATING IMAGE
  const floatingImageStyle = {
    position: 'absolute',

    top: {
      xs: '20px',
      md: '80px',
    },

    left: {
      xs: '-10px',
      md: '-10px',
    },

    width: {
      xs: '120px',
      md: '220px',
    },

    height: 'auto',

    objectFit: 'contain',

    borderRadius: '5px',

    boxShadow: '0 12px 25px rgba(0,0,0,0.15)',

    zIndex: 5,
  };

  return (

    <Box sx={sectionStyle}>

      <Container maxWidth="xl">

        <Box sx={wrapperStyle}>

          {/* LEFT CONTENT */}
          <Box sx={leftContentStyle}>

            <Typography sx={headingStyle}>
              RONO Jobs
            </Typography>

            <Typography sx={bodyStyle}>
             Best job finder platform made for people who're trying multiple job platform still unable to find their dream job
            </Typography>

            <Button
              variant="contained"
              sx={buttonStyle}
            >
              Try RONO Jobs
            </Button>

          </Box>

          {/* RIGHT IMAGE SECTION */}
          <Box sx={rightSectionStyle}>

            {/* MAIN IMAGE */}
            <Box
              component="img"
              src={jobsImage}
              alt="RONO Jobs"
              sx={imageStyle}
            />

            {/* LEFT FLOATING IMAGE */}
            <Box
              component="img"
              src={jobs1}
              alt="Jobs Card"
              sx={floatingImageStyle}
            />

          </Box>

        </Box>

      </Container>

    </Box>
  );
};

export default Jobs;