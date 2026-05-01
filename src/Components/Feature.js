import { Box, Typography, Container } from "@mui/material";
import Featureimg1 from "../Assets/Featureimg1.png";
import Featureimg2 from "../Assets/Featureimg2.png";
import Featureimg3 from "../Assets/Featureimg3.png";
import Featureimg4 from "../Assets/Featureimg4.png";
import Featureimg5 from "../Assets/Featureimg5.png";
import Featureimg6 from "../Assets/Featureimg6.png";

const Feature = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: 2,
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="md">
        
        {/* CENTER CONTENT */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          
          {/* HEADING */}
          <Typography
            sx={{
              fontFamily: 'RM Neue',
              fontWeight: 550,
              fontSize: {
                xs: "28px",
                md: "46px",
              },
              lineHeight: "100%",
              letterSpacing: "-1%",
              textTransform: "capitalize",
              color: "Black",
              mb: 3,
              whiteSpace: "nowrap",
            }}
          >
            Powerful Features to Manage Your Workforce
          </Typography>

          {/* BODY */}
          <Typography
            sx={{
              fontSize: {
                xs: "16px",
                md: "18px",
              },
              color: "#666",
              lineHeight: 1.8,
              maxWidth: "950px",
            }}
          >
           RONO HUB simplifies complex HR operations by integrating recruitment, employee management, training, and compliance into one powerful ecosystem.
          </Typography>

          {/* IMAGES SECTION */}
          <Box sx={{ mt: 6, display: 'flex', flexDirection: 'column', gap: 4 }}>
            
            {/* ROW 1 - First 3 Images */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 2, md: 4 }, alignItems: 'center', justifyContent: 'center' }}>
              <Box
                component="img"
                src={Featureimg1}
                sx={{
                  width: '400px',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '38.48px',
                  opacity: 1,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              />
              <Box
                component="img"
                src={Featureimg2}
                sx={{
                  width: '400px',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '38.48px',
                  opacity: 1,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              />
              <Box
                component="img"
                src={Featureimg3}
                sx={{
                  width: '400px',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '38.48px',
                  opacity: 1,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              />
            </Box>

            {/* ROW 2 - Next 3 Images */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 2, md: 4 }, alignItems: 'center', justifyContent: 'center' }}>
              <Box
                component="img"
                src={Featureimg4}
                sx={{
                  width: '400px',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '38.48px',
                  opacity: 1,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              />
              <Box
                component="img"
                src={Featureimg5}
                sx={{
                  width: '400px',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '38.48px',
                  opacity: 1,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              />
              <Box
                component="img"
                src={Featureimg6}
                sx={{
                  width: '400px',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '38.48px',
                  opacity: 1,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              />
            </Box>

          </Box>

        </Box>

      </Container>
    </Box>
  );
};

export default Feature;