
import { Box, Typography, Container, Grid } from '@mui/material';
import Transformingimg from "../Assets/Transformingimg.png";

const Transforming = () => {
  // Style for main container
  const containerStyle = {
    py: { xs: 4, md: 8 },
    px: { xs: 2, md: 4 },
    backgroundColor: '#fff',
    borderTop: '4px solid #1976d2',
    borderBottom: '4px solid #1976d2',
  };

  // Style for section heading
  const headingStyle = {
    fontFamily: 'RM Neue',
    fontWeight: 600,
    fontSize: { xs: 32, md: 40 },
    color: '#000',
    mb: 4,
    textAlign: 'center',
  };

  // Style for image container
  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    mb: 6,
  };

  // Style for main image
  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '12px',
  };

  // Style for statistics cards
  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '24px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  // Style for statistic number
  const numberStyle = {
    fontFamily: 'RM Neue',
    fontWeight: 700,
    fontSize: { xs: 28, md: 36 },
    color: '#1976d2',
    mb: 1,
  };

  // Style for statistic text
  const textStyle = {
    fontFamily: 'RM Neue',
    fontWeight: 400,
    fontSize: { xs: 16, md: 18 },
    color: '#666',
  };

  // Statistics data
  const statistics = [
    {
      number: '10,000+',
      text: 'Employees Managed'
    },
    {
      number: '500+',
      text: 'Companies Onboarded'
    },
    {
      number: '1M+',
      text: 'Applications Processed'
    },
    {
      number: '98%',
      text: 'Client Satisfaction'
    }
  ];

  return (
    <Box sx={containerStyle}>
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Typography variant="h2" sx={headingStyle}>
          Transforming Workforce Management with Smart Technology
        </Typography>

        {/* Main Image */}
        <Box sx={imageContainerStyle}>
          <img 
            src={Transformingimg}
            alt="Transforming Workforce Management" 
            style={imageStyle}
          />
        </Box>

        {/* Statistics Grid */}
        <Grid container spacing={6} sx={{ position: 'relative', mt: -12 }}>
          {statistics.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={`stat-${index}`}>
              <Box sx={cardStyle}>
                <Typography variant="h3" sx={numberStyle}>
                  {stat.number}
                </Typography>
                <Typography variant="body1" sx={textStyle}>
                  {stat.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Transforming;