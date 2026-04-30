import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const insightImg1 = require('../Assets/Insight img1.png');
const insightImg2 = require('../Assets/Insight img2.png');
const insightImg3 = require('../Assets/Insight img3.png');

const Insights = () => {
  const insightsData = [
    {
      image: insightImg1,
      title: 'How AI is Transforming Recruitment',
      description: 'Discover how AI is reshaping hiring with faster screening, smarter matching, and better candidate experiences.'
    },
    {
      image: insightImg2,
      title: 'Benefits of HRMS Software for Businesses',
      description: 'Learn how HRMS platforms simplify operations, improve efficiency, and enhance employee management.'
    },
    {
      image: insightImg3,
      title: 'Future of Online Learning Platforms',
      description: 'Explore how digital learning is evolving with personalized training, analytics, and scalable growth..'
    }
  ];

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2, py: 4 }}>
      {/* Header Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
        <Box sx={{ maxWidth: 600 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              width: 1199,
              height: 72,
              transform: 'rotate(0deg)',
              opacity: 1,
              fontWeight: 600,
              fontStyle: 'SemiBold',
              fontSize: 56,
              leadingTrim: 'NONE',
              lineHeight: '72px',
              letterSpacing: '-2%',
              color: '#000000',
              mb: 2,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            Insights & Resources
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              width: 818,
              height: 52,
              transform: 'rotate(0deg)',
              opacity: 1,
              fontWeight: 400,
              fontStyle: 'Regular',
              fontSize: 18,
              leadingTrim: 'NONE',
              lineHeight: '26px',
              letterSpacing: '0%',
              color: '#4E4E4E'
            }}
          >
            RONO HUB simplifies complex HR operations by integrating requirement,employee management,training,and compliance into onne powerful ecosystem. 
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          sx={{ 
            background: 'linear-gradient(98.76deg, #3C60B6 -45.06%, #3C60B6 34.8%, #4EB2CE 114.24%)',
            color: '#fff',
            textTransform: 'none',
            px: 3,
            py: 1,
            fontSize: 14,
            fontWeight: 500,
            borderRadius: '50px',
            mt: 4,
            '&:hover': {
              background: 'linear-gradient(98.76deg, #3C60B6 -45.06%, #3C60B6 34.8%, #4EB2CE 114.24%)',
              opacity: 0.9
            }
          }}
        >
          View All
        </Button>
      </Box>

      {/* Insights Grid */}
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
        gap: 3 
      }}>
        {insightsData.map((insight, index) => (
          <Box 
            key={index}
            sx={{ 
              borderRadius: '32px',
              overflow: 'hidden'
            }}
          >
            <Box
              component="img"
              src={insight.image}
              alt={insight.title}
              sx={{ 
                width: '100%',
                height: 250,
                transform: 'rotate(0deg)',
                opacity: 1,
                borderRadius: '32px',
                objectFit: 'cover'
              }}
            />
            <Box sx={{ p: 3 }}>
              <Typography 
                variant="h6" 
                component="h3"
                sx={{ 
                  width: 424,
                  height: index === 1 ? 64 : 32,
                  transform: 'rotate(0deg)',
                  opacity: 1,
                  fontWeight: 600,
                  fontStyle: 'SemiBold',
                  fontSize: 24,
                  leadingTrim: 'NONE',
                  lineHeight: '32px',
                  letterSpacing: '-1%',
                  color: '#000',
                  mb: 1
                }}
              >
                {insight.title}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontSize: 14,
                  lineHeight: 1.5,
                  color: '#666'
                }}
              >
                {insight.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Insights;