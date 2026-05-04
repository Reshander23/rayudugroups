import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Contact from '../../Common/Contactdetails';

import InsightImg1 from '../../Assets/Insight img1.png';
import InsightImg2 from '../../Assets/Insight img2.png';
import InsightImg3 from '../../Assets/Insight img3.png';

const newsData = [
  {
    id: 1,
    image: InsightImg1,
    title: 'How AI is Transforming Recruitment',
    description: 'Discover how AI is reshaping hiring with faster screening, smarter matching, and better candidate experiences.'
  },
  {
    id: 2,
    image: InsightImg2,
    title: 'Benefits of HRMS Software for Businesses',
    description: 'Learn how HRMS platforms simplify operations, improve efficiency, and enhance employee management.'
  },
  {
    id: 3,
    image: InsightImg3,
    title: 'Future of Online Learning Platforms',
    description: 'Explore how digital learning is evolving with personalized training, analytics, and scalable growth.'
  },
  {
    id: 4,
    image: InsightImg1,
    title: 'How AI is Transforming Recruitment',
    description: 'Discover how AI is reshaping hiring with faster screening, smarter matching, and better candidate experiences.'
  },
  {
    id: 5,
    image: InsightImg2,
    title: 'Benefits of HRMS Software for Businesses',
    description: 'Learn how HRMS platforms simplify operations, improve efficiency, and enhance employee management.'
  },
  {
    id: 6,
    image: InsightImg3,
    title: 'Future of Online Learning Platforms',
    description: 'Explore how digital learning is evolving with personalized training, analytics, and scalable growth.'
  },
  {
    id: 7,
    image: InsightImg1,
    title: 'How AI is Transforming Recruitment',
    description: 'Discover how AI is reshaping hiring with faster screening, smarter matching, and better candidate experiences.'
  },
  {
    id: 8,
    image: InsightImg2,
    title: 'Benefits of HRMS Software for Businesses',
    description: 'Learn how HRMS platforms simplify operations, improve efficiency, and enhance employee management.'
  },
  {
    id: 9,
    image: InsightImg3,
    title: 'Future of Online Learning Platforms',
    description: 'Explore how digital learning is evolving with personalized training, analytics, and scalable growth.'
  }
];

const Newspage = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', pb: 12 }}>
      {/* Background Gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: '0%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(247, 206, 37, 0.15) 0%, rgba(255,255,255,0) 70%)',
          zIndex: -1,
        }}
      />

      <Container maxWidth="lg" sx={{ pt: { xs: 12, md: 16 } }}>
        <Box sx={{ px: { xs: 2, md: 3 } }}>

          {/* Header Section */}
          <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 }, maxWidth: '800px', mx: 'auto' }}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'RM Neue',
                fontWeight: 600,
                fontSize: { xs: '40px', md: '56px' },
                color: '#000',
                mb: 3,
                letterSpacing: '-1.5px'
              }}
            >
              News
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'RM Neue',
                color: '#555',
                fontSize: { xs: '15px', md: '16px' },
                lineHeight: 1.6
              }}
            >
              Practical insights and thoughtful content focused on solving real-world<br/>  challenges with clarity and simplicity.
            </Typography>
          </Box>

          {/* News Cards Grid */}
          <Grid container columnSpacing={4} rowSpacing={8}>
            {newsData.map((news) => (
              <Grid key={news.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box
                  onClick={() => navigate(`/news/${news.id}`)}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    cursor: 'pointer',
                    '&:hover img': { transform: 'scale(1.05)' },
                    '&:hover h4': { color: '#F7CE25' }
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      aspectRatio: '1.4 / 1', // Ensures uniform image sizes
                      borderRadius: '16px',
                      overflow: 'hidden',
                      mb: 2.5,
                      position: 'relative'
                    }}
                  >
                    <img
                      src={news.image}
                      alt={news.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.4s ease-in-out'
                      }}
                    />
                  </Box>
                  <Box sx={{ px: 0, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: 'RM Neue',
                        fontWeight: 600,
                        fontSize: { xs: '18px', md: '20px' },
                        color: '#000',
                        mb: 1.5,
                        lineHeight: 1.4,
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {news.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: 'RM Neue',
                        color: '#666',
                        fontSize: { xs: '14px', md: '15px' },
                        lineHeight: 1.6,
                        mb: 2,
                        flexGrow: 1
                      }}
                    >
                      {news.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Contact Details Section */}
          <Box sx={{ mt: { xs: 12, md: 16 } }}>
            <Contact />
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default Newspage;
