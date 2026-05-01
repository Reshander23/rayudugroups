import React from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
} from '@mui/material';
import Lmsimg from "../../Assets/Lmsimg.png";

const LMS = () => {
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

    padding: '12px 30px',

    fontSize: '15px',

    boxShadow: '0 8px 20px rgba(60,96,182,0.35)',

    '&:hover': {
      background:
        'linear-gradient(98.76deg, #3C60B6 -45.06%, #3C60B6 34.8%, #4EB2CE 114.24%)',
    },
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
              src={Lmsimg}
              alt="LMS"

              sx={{
                width: {
                  xs: '100%',
                  md: '520px',
                },

                height: 'auto',

                display: 'block',

                borderRadius: '28px',

                objectFit: 'cover',
              }}
            />

            
          </Box>

          {/* RIGHT CONTENT */}
          <Box sx={contentStyle}>

            <Typography sx={headingStyle}>
              RONO LMS
            </Typography>

            <Typography sx={bodyStyle}>
              A Comprehesive Online Learning Management tool
made for teacher, Coaches, cousltants and trainer for better eLearning experience
            </Typography>

            <Button
              variant="contained"
              sx={buttonStyle}
            >
              Try RONO LMS
            </Button>

          </Box>

        </Box>

      </Container>

    </Box>
  );
};

export default LMS;