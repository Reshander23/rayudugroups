import React from 'react';

import {
  Box,
  Typography,
  Container,
  Button,
} from '@mui/material';

import lrImage from "../../Assets/Lrimg.png";
import lr1 from "../../Assets/Lrimg1.png";

const Lr = () => {

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
    fontFamily: 'RM Neue',
    fontWeight: 600,
    fontStyle: 'SemiBold',
    fontSize: {
      xs: '32px',
      md: '40px',
    },

    color: '#111',

    mb: 3,

    lineHeight: '32px',
    letterSpacing: '-1%',
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
      xs: '40%',
      md: '45%',
    },

    left: {
      xs: '50%',
      md: '50%',
    },

    transform: {
      xs: 'translate(-50%, -50%)',
      md: 'translate(-50%, -50%)',
    },

    width: {
      xs: '220px',
      md: '380px',
    },

    height: 'auto',

    objectFit: 'contain',

    borderRadius: '5px',

    zIndex: 5,
  };

  return (

    <Box sx={sectionStyle}>

      <Container maxWidth="xl">

        <Box sx={wrapperStyle}>

          {/* LEFT CONTENT */}
          <Box sx={leftContentStyle}>

            <Typography sx={headingStyle}>
              RONO LR
            </Typography>

            <Typography sx={bodyStyle}>
              A revolunising , fast and easiest Lory Record (LR tools that digitize logistic receipt and manual paper work with all compliances.)
            </Typography>

            <Button
              variant="contained"
              sx={buttonStyle}
            >
              Try RONO LR
            </Button>

          </Box>

          {/* RIGHT IMAGE SECTION */}
          <Box sx={rightSectionStyle}>

            {/* MAIN IMAGE */}
            <Box
              component="img"
              src={lrImage}
              alt="RONO LR"
              sx={imageStyle}
            />

            {/* LEFT FLOATING IMAGE */}
            <Box
              component="img"
              src={lr1}
              alt="LR Card"
              sx={floatingImageStyle}
            />

          </Box>

        </Box>
        {/* BOTTOM HEADING SECTION */}
<Box
  sx={{
    mt: 14,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <Typography
  sx={{
    fontFamily: 'RM Neue',
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: {
      xs: "24px",
      md: "28px",
    },
    lineHeight: "100%",
    letterSpacing: "-1%",
    textTransform: "capitalize",
    color: "#F25828",
    mb: 2,
    textAlign: "center",
  }}
>
  More Tools Coming Soon
</Typography>
</Box>


      </Container>

    </Box>
  );
};

export default Lr;