import React from 'react';
import { Box, Typography, Container, Paper, Grid } from '@mui/material';
import AboutImg from '../Assets/Aboutimg.png';
import AboutImg1 from '../Assets/Aboutimg1 (1).png';
import AboutImg2 from '../Assets/Aboutimg2.png';
import AboutImg3 from '../Assets/Aboutimg3.png';
import AboutImg4 from '../Assets/Aboutimg4.png';
import Contact from '../Common/Contactdetails';

// Subcomponent for the floating cards
const FloatingCard = ({ text, sx }) => (
  <Paper
    elevation={0}
    sx={{
      position: 'absolute',
      padding: '12px 24px',
      borderRadius: '8px',
      boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
      backgroundColor: 'white',
      zIndex: 2,
      border: '1px solid rgba(255, 140, 0, 0.15)',
      whiteSpace: 'nowrap',
      ...sx
    }}
  >
    <Typography variant="body2" sx={{ color: '#444', fontWeight: 500, fontSize: { xs: '0.75rem', sm: '0.85rem' } }}>
      {text}
    </Typography>
  </Paper>
);

const Aboutpage = () => {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', pb: 10, fontFamily: '"Inter", sans-serif' }}>
      {/* Background Gradients */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255,218,153,0.4) 0%, rgba(255,255,255,0) 70%)',
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255,200,200,0.3) 0%, rgba(255,255,255,0) 70%)',
          zIndex: -1,
        }}
      />

      <Container maxWidth="lg" sx={{ pt: 12 }}>
        <Typography
          variant="h2"
          component="h1"
          align="center"
          sx={{
            fontFamily: 'RM Neue',
            fontWeight: 700,
            fontSize: {
              xs: '40px',
              sm: '55px',
              md: '75px',
            },
            lineHeight: 1.2,
            color: '#000',
            mb: 2,
            whiteSpace: 'nowrap',
            letterSpacing: '-0.2px',
          }}
        >
          About Rono Hub
        </Typography>

        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          paragraph={true}
          sx={{ mb: 3, maxWidth: '800px', mx: 'auto', lineHeight: 1.8, fontSize: '1.05rem', color: '#555' }}
        >
          A growing digital brand building purpose-driven tools for modern businesses and individuals.
          Each product is designed to solve a specific problem whether it's managing learning, simplifying
          transportation workflows, or connecting people to opportunities. creating focused solutions that
          are simple, reliable, and built for real-world use.
        </Typography>

        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          paragraph={true}
          sx={{ mb: 8, maxWidth: '800px', mx: 'auto', lineHeight: 1.8, fontSize: '1.05rem', color: '#555' }}
        >
          Under Rono, every product stands strong on its own — yet carries the same ideology of clarity,
          usability, and trust.
        </Typography>

        <Box
          sx={{
            width: { xs: '100%', md: '120vw' },
            position: 'relative',
            left: { xs: 0, md: '-10vw' },
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
            height: { xs: '300px', sm: '450px', md: '550px' },
            mb: { xs: 8, md: 15 }
          }}
        >
          <img
            src={AboutImg}
            alt="About Rono Hub Team"
            style={{
              width: '90%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0
            }}
          />
        </Box>

        {/* "Rono is built for" Section */}
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: { xs: '500px', md: '600px' },
            width: '100%',
            mt: 1
          }}
        >
          {/* Glowing center background */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: '300px', md: '500px' },
              height: { xs: '300px', md: '500px' },
              background: 'radial-gradient(circle, rgba(207, 38, 9, 0.15)0%, rgba(134, 10, 10, 0) 70%)',
              zIndex: 0,
            }}
          />

          {/* Concentric circles */}
          <Box sx={{ position: 'absolute', width: { xs: '150px', md: '200px' }, height: { xs: '150px', md: '200px' }, borderRadius: '50%', border: '1px solid rgba(150, 39, 0, 0.2)', zIndex: 0 }} />
          <Box sx={{ position: 'absolute', width: { xs: '250px', md: '350px' }, height: { xs: '250px', md: '350px' }, borderRadius: '50%', border: '1px solid rgba(255, 140, 0, 0.15)', zIndex: 0 }} />
          <Box sx={{ position: 'absolute', width: { xs: '380px', md: '500px' }, height: { xs: '380px', md: '500px' }, borderRadius: '50%', border: '1px solid rgba(255, 140, 0, 0.1)', zIndex: 0 }} />
          <Box sx={{ position: 'absolute', width: { xs: '520px', md: '650px' }, height: { xs: '520px', md: '650px' }, borderRadius: '50%', border: '1px solid rgba(194, 12, 5, 0.05)', zIndex: 0 }} />
          <Box sx={{ position: 'absolute', width: { xs: '650px', md: '800px' }, height: { xs: '650px', md: '800px' }, borderRadius: '50%', border: '1px solid rgba(255, 140, 0, 0.02)', zIndex: 0, display: { xs: 'none', sm: 'block' } }} />

          {/* Large Background Text */}
          <Typography
            sx={{
              position: 'absolute',
              fontSize: { xs: '4rem', sm: '7rem', md: '12rem', lg: '15rem' },
              fontWeight: 900,
              color: 'transparent',
              whiteSpace: 'nowrap',
              zIndex: 0,
              textAlign: 'center',
              pointerEvents: 'none',
              background: 'linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255, 235, 220, 0.5) 50%, rgba(255,255,255,0.9) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: 0.8,
            }}
          >
            Rono is built for
          </Typography>

          {/* Central Text */}
          <Typography
            variant="h3"
            component="h2"
            sx={{
              zIndex: 1,
              fontWeight: 600,
              color: '#000',
              fontSize: { xs: '1.8rem', md: '2.5rem' },
            }}
          >
            Rono is built for
          </Typography>

          {/* Floating Cards */}
          <FloatingCard
            text="Founders who want efficient systems"
            sx={{
              top: { xs: '15%', md: '28%' },
              left: { xs: '5%', md: '15%' },
            }}
          />
          <FloatingCard
            text="Professionals who value simplicity"
            sx={{
              top: { xs: '35%', md: '38%' },
              right: { xs: '5%', md: '15%' },
            }}
          />
          <FloatingCard
            text="Teams that need clarity in operations"
            sx={{
              bottom: { xs: '25%', md: '20%' },
              left: { xs: '5%', md: '18%' },
            }}
          />
          <FloatingCard
            text="Businesses tired of overcomplicated software"
            sx={{
              bottom: { xs: '10%', md: '15%' },
              right: { xs: '5%', md: '10%' },
            }}
          />
        </Box>

        {/* Why Rono Section */}
        <Box sx={{ mt: 15, mb: 10 }}>
          <Typography variant="h3" align="center" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
            Why Rono
          </Typography>
          <Typography variant="body2" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: '600px', mx: 'auto', lineHeight: 1.6, fontSize: '0.95rem' }}>
            Every Rono product is built from scratch to be the best in its space.<br />
            Dedicated tools for specific use-cases
          </Typography>

          <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center" wrap="nowrap" sx={{ alignItems: 'stretch', overflowX: { xs: 'auto', md: 'visible' }, pb: { xs: 2, md: 0 } }}>
            {/* Card 1 */}
            <Grid item xs={4}>
              <Box sx={{ width: '100%', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', height: '100%' }}>
                <img src={AboutImg1} alt="Clean, intuitive experiences" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </Box>
            </Grid>
            {/* Card 2 */}
            <Grid item xs={4}>
              <Box sx={{ width: '100%', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', height: '100%' }}>
                <img src={AboutImg2} alt="Scalable products" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </Box>
            </Grid>
            {/* Card 3 */}
            <Grid item xs={4}>
              <Box sx={{ width: '100%', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', height: '100%' }}>
                <img src={AboutImg3} alt="Designed to deliver value" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Our Vision Section */}
        <Box sx={{ mt: 15, mb: 10, position: 'relative' }}>
          {/* Background blurred glow for Our Vision */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              right: '-15%',
              width: { xs: '300px', md: '600px' },
              height: { xs: '300px', md: '600px' },
              background: 'radial-gradient(circle, rgba(255, 220, 150, 0.5) 0%, rgba(255, 255, 255, 0) 70%)',
              zIndex: -1,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '40%',
              left: '-15%',
              width: { xs: '250px', md: '500px' },
              height: { xs: '250px', md: '500px' },
              background: 'radial-gradient(circle, rgba(255, 200, 200, 0.4) 0%, rgba(255, 255, 255, 0) 70%)',
              zIndex: -1,
            }}
          />

          <Typography variant="h3" align="center" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
            Our Vision
          </Typography>
          <Typography variant="body2" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: '600px', mx: 'auto', lineHeight: 1.6, fontSize: '0.95rem' }}>
            To empower businesses and individuals with tools that are intuitive, practical,<br />
            and built around real-world needs — not complexity.
          </Typography>

          <Box sx={{
            width: '100%',
            maxWidth: '900px',
            mx: 'auto',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            height: { xs: '300px', sm: '450px', md: '500px' },
          }}>
            <img
              src={AboutImg4}
              alt="Our Vision"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </Box>
        </Box>

      </Container>

      {/* Contact Section */}
      <Contact />
    </Box>
  );
};

export default Aboutpage;
