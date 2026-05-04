import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Typography,
  Button
} from '@mui/material';

import Contactimg from '../Assets/Contactimg.png';

const Contact= () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: '100%',

        px: {
          xs: 2,
          md: 4,
        },

        py: {
          xs: 6,
          md: 10,
        },

        bgcolor: '#fff',
      }}
    >

      <Box
        sx={{
          position: 'relative',

          background:
            'linear-gradient(197.65deg, #F25828 36.25%, #F25828 36.48%, #F7CE25 82.13%)',

          borderRadius: '32px',

          px: {
            xs: 3,
            md: 8,
          },

          pt: {
            xs: 4,
            md: 8,
          },

          pb: {
            xs: 0,
            md: 8,
          },

          display: 'flex',

          flexDirection: {
            xs: 'column',
            md: 'row',
          },

          alignItems: 'center',

          justifyContent: 'space-between',

          overflow: {
            xs: 'hidden',
            md: 'visible',
          },

          minHeight: {
            xs: 'auto',
            md: '360px',
          },
        }}
      >

        {/* LEFT CONTENT */}
        <Box
          sx={{
            maxWidth: {
              xs: '100%',
              md: '55%',
            },

            zIndex: 2,

            textAlign: {
              xs: 'center',
              md: 'left',
            },

            mb: {
              xs: 2,
              md: 0,
            },

            mt: {
              xs: 2,
              md: 0,
            },
          }}
        >

          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,

              fontSize: {
                xs: 32,
                md: 48,
              },

              lineHeight: 1.2,

              letterSpacing: '-1px',

              color: '#fff',

              mb: 2,
            }}
          >
            Ready to Transform Your Workforce Management?
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: 14,
                md: 16,
              },

              lineHeight: 1.6,

              color: 'rgba(255,255,255,0.9)',

              mb: 4,

              maxWidth: '90%',

              mx: {
                xs: 'auto',
                md: 0,
              },
            }}
          >
            Join hundreds of businesses using RONO HUB to streamline
            operations and scale faster.
          </Typography>

          <Button
            variant="contained"
            onClick={() => navigate('/contact')}
            sx={{
              bgcolor: '#fff',

              color: '#000',

              textTransform: 'none',

              px: 4,

              py: 1.5,

              fontSize: 16,

              fontWeight: 500,

              borderRadius: '50px',

              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',

              '&:hover': {
                bgcolor: '#f5f5f5',
              },
            }}
          >
            Contact Us
          </Button>

        </Box>

        {/* RIGHT IMAGE */}
        <Box
          sx={{
            position: {
              xs: 'relative',
              md: 'absolute',
            },

            right: {
              xs: 'auto',
              md: '8%',
            },

            bottom: 0,

            top: {
              xs: '20px',
              md: 'auto',
            },

            width: {
              xs: '60%',
              md: 'auto',
            },

            height: {
              xs: 'auto',
              md: '115%',
            },

            maxHeight: {
              xs: 'none',
              md: 500,
            },

            zIndex: 1,

            display: 'flex',

            justifyContent: 'center',

            alignItems: 'flex-end',
          }}
        >

          <Box
            component="img"
            src={Contactimg}
            alt="Contact"
            sx={{
              height: '100%',

              width: 'auto',

              objectFit: 'contain',

              objectPosition: 'bottom',

              display: 'block',
            }}
          />

        </Box>

      </Box>

    </Box>
  );
};

export default Contact;