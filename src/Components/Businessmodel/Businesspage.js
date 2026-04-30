import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Businesspage = () => {
    // Style for main container
    const containerStyle = {
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
        backgroundColor: '#f8f9fa',
    };

    // Style for content wrapper
    const contentWrapperStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
    };

    // Style for h1 heading
    const headingStyle = {
        fontFamily: 'RM Neue',
        fontWeight: 700,
        fontSize: { xs: 36, md: 48 },
        color: '#333',
        mb: 4,
        lineHeight: 1.2,
    };

    // Style for body text
    const bodyStyle = {
        fontFamily: 'RM Neue',
        fontWeight: 400,
        fontSize: { xs: 16, md: 18 },
        color: '#666',
        lineHeight: 1.8,
        mb: 4,
    };

    
    return (
        <Box sx={containerStyle}>
            <Container maxWidth="lg">
                <Box sx={contentWrapperStyle}>
                    <Typography variant="h1" sx={headingStyle}>
                        simplified solution for
                        complex business needs 
                  </Typography>

                    <Typography variant="body1" sx={bodyStyle}>
                      every rono product is made with simplicity in mind so you can do more things with distraction
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Businesspage;