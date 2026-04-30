import React from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
} from '@mui/material';

import Hrmsimg from "../../Assets/Hrmsimg.png";
import hrms1 from "../../Assets/hrms1.png";


const HRMS = () => {

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
    fontWeight: 700,

    fontSize: {
      xs: '34px',
      md: '46px',
    },

    color: '#111',

    mb: 3,

    lineHeight: 1.2,
  };

  // BODY TEXT
  const bodyStyle = {
    fontSize: {
      xs: '16px',
      md: '18px',
    },

    color: '#666',

    lineHeight: 1.8,

    maxWidth: '520px',

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
              src={Hrmsimg}
              alt="HRMS"

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

            {/* FLOATING PROFILE CARD */}
            <Box
              component="img"
              src={hrms1}
              alt="Profile Card"

              sx={{
                position: 'absolute',

                top: {
                  xs: '50px',
                  md: '-20px',
                },

                right: {
                  xs: '50px',
                  md: '-20px',
                },

                width: {
                  xs: '120px',
                  md: '280px',
                },

                height: '450px',

                objectFit: 'contain',

                zIndex: 5,

                borderRadius: '20px',
              }}
            />

          </Box>

          {/* RIGHT CONTENT */}
          <Box sx={contentStyle}>

            <Typography sx={headingStyle}>
              RONO HRMS
            </Typography>

            <Typography sx={bodyStyle}>
              Still managing your employee manually or with excel? Manage all your employee using just one platform
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

export default HRMS;