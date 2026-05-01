import React from 'react';

import {
  Box,
  Typography,
  Container,
  Button,
} from '@mui/material';


import Recrutimg from "../../Assets/Recrutimg.png";


const Recruiter = () => {

  // MAIN SECTION
  const sectionStyle = {
    py: { xs: 3, md: 5 },
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

  // RIGHT IMAGE SECTION
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

  // LEFT BOX
  const candidateBoxStyle = {
    width: '280px',

    height: '48px',

    backgroundColor: '#fff',

    border: '2px solid #3C60B6',

    borderRadius: '12px',

    display: 'flex',

    alignItems: 'center',

    justifyContent: 'space-between',

    px: 2,

    boxShadow: '0 6px 15px rgba(0,0,0,0.08)',

    position: 'relative',

    zIndex: 5,
  };

  
  return (
    <Box sx={sectionStyle}>

      <Container maxWidth="xl">

        <Box sx={wrapperStyle}>

          {/* LEFT CONTENT */}
          <Box sx={leftContentStyle}>

            <Typography sx={headingStyle}>
              RONO Recruiter
            </Typography>

            <Typography sx={bodyStyle}>
              Try the most powerful and feature loaded recruitment
              platform to get the right workforce for your business
              needed most
            </Typography>

            <Button
              variant="contained"
              sx={buttonStyle}
            >
              Try RONO Recruiter
            </Button>

          </Box>

          {/* RIGHT IMAGE SECTION */}
          <Box sx={rightSectionStyle}>

            {/* BACKGROUND IMAGE */}
            <Box
              component="img"
              src={Recrutimg}
              alt="Recruiter"

              sx={{
                width: {
                  xs: '100%',
                  md: '560px',
                },

                height: 'auto',

                objectFit: 'contain',

                borderRadius: '28px',

                display: 'block',
              }}
            />

            {/* TITLE */}
            <Typography
              sx={{
                position: 'absolute',

                top: '28px',

                left: '50%',

                transform: 'translateX(-50%)',

                color: '#fff',

                fontSize: '14px',

                fontWeight: 500,

                zIndex: 5,
              }}
            >
              Candidates Applied
            </Typography>

            {/* LEFT BOXES */}
            <Box
              sx={{
                position: 'absolute',

                top: '85px',

                left: '-20px',

                display: 'flex',

                flexDirection: 'column',

                gap: 2,

                zIndex: 5,
              }}
            >

              {/* BOX 1 */}
              <Box sx={candidateBoxStyle}>

                <Typography fontWeight={600}>
                  Shiny Coachlin
                </Typography>

                <Typography fontSize={13}>
                  BA
                </Typography>

              </Box>

              {/* BOX 2 */}
              <Box sx={candidateBoxStyle}>

                <Typography fontWeight={600}>
                  Kishan Patel
                </Typography>

                <Typography fontSize={13}>
                  Developer
                </Typography>

              </Box>

              {/* BOX 3 */}
              <Box sx={candidateBoxStyle}>

                <Typography fontWeight={600}>
                  Sunny Singh
                </Typography>

                <Typography fontSize={13}>
                  Designer
                </Typography>

              </Box>

            </Box>

            
            
          </Box>

        </Box>

      </Container>

    </Box>
  );
};

export default Recruiter;