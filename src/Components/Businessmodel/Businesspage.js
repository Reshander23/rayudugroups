import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Businesspage = () => {
    // Style for main container
    const containerStyle = {
        py: { xs: 3, md: 5 },
        px: { xs: 2, md: 4 },
        backgroundColor: '#ffffff',
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
        whiteSpace: 'nowrap',
    };

    
    return (
        <Box sx={containerStyle}>
            <Container maxWidth="lg">
                <Box sx={contentWrapperStyle}>
                    <Typography variant="h1" sx={headingStyle}>
                        Simplified solution for<br/>
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