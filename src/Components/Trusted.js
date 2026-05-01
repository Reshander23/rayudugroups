import React from 'react';
import { Box, Typography, Container } from '@mui/material'
import trustedImg from '../Assets/trusted img.png';

const Trusted = () => {
  // Style for main container
  const containerStyle = {
    py: { xs: 4, md: 8 },
    px: { xs: 2, md: 4 },
    backgroundColor: '#ffffff',
  };

  // Style for section heading
  const headingStyle = {
    fontFamily: 'RM Neue',
    fontWeight: 700,
    fontSize: { xs: 32, md: 48 },
    color: '#000',
    mb: 3,
    textAlign: 'left',
  };

  




  // Trusted items data
  const trustedItems = [
    {
      title: 'IT Companies',
      
    },
    {
       title: 'Startups',
    },
    {
     title: 'Enterprises',
    },
    {
    title: 'Recruitment Agencies',
    },
    {
        title:'Educational Institutions'
    }
  ];

  return (
    <Box sx={containerStyle}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
          <Box sx={{ flex: 1 }}>
            {/* Section Heading */}
            <Typography variant="h2" sx={headingStyle}>
              Trusted by Businesses<br />Across Industries
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            {/* Trusted Items */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
              {/* First row - 3 items */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                {trustedItems.slice(0, 3).map((item, index) => (
                  <Typography key={index} variant="body1" sx={{
                    fontFamily: 'RM Neue',
                    fontWeight: 500,
                    fontSize: 14,
                    color: '#000',
                    textAlign: 'center',
                    border: '1px solid #ddd',
                    padding: '6px 12px',
                    borderRadius: '16px',
                    display: 'inline-block',
                    backgroundColor: '#f5f5f5',
                    margin: '4px'
                  }}>
                    {item.title}
                  </Typography>
                ))}
              </Box>
              {/* Second row - 2 items */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                {trustedItems.slice(3).map((item, index) => (
                  <Typography key={index + 3} variant="body1" sx={{
                    fontFamily: 'RM Neue',
                    fontWeight: 500,
                    fontSize: 14,
                    color: '#000',
                    textAlign: 'center',
                    border: '1px solid #ddd',
                    padding: '6px 12px',
                    borderRadius: '16px',
                    display: 'inline-block',
                    backgroundColor: '#f5f5f5',
                    // margin: '3px'
                  }}>
                    {item.title}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        
        {/* Trusted Image */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <img 
            src={trustedImg} 
            alt="Trusted" 
            style={{ 
              maxWidth: '100%', 
              height: 'auto',
              borderRadius: '8px'
            }} 
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Trusted;