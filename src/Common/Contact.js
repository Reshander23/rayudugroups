import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';

const Contact = () => {
    // Style for main container
    const containerStyle = {
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
        backgroundColor: '#f8f9fa',
    };

    // Style for content wrapper
    const contentWrapperStyle = {
        maxWidth: '800px',
        margin: '0',
        textAlign: 'left',
    };

    // Style for h1 heading
    const headingStyle = {
        fontFamily: 'RM Neue',
        fontWeight: 600,
        fontSize: { xs: 32, md: 40 },
        color: '#333',
        mb: 4,
        textAlign: 'left',
    };

    // Style for body text
    const bodyStyle = {
        fontFamily: 'RM Neue',
        fontWeight: 400,
        fontSize: { xs: 16, md: 18 },
        color: '#666',
        lineHeight: 1.8,
        mb: 6,
        textAlign: 'left',
    };

    // Style for button
    const buttonStyle = {
        fontFamily: 'RM Neue',
        fontWeight: 600,
        fontSize: 16,
        backgroundColor: '#1976d2',
        color: '#fff',
        padding: '12px 32px',
        borderRadius: '8px',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#1565c0',
        },
    };

    return (
        <Box sx={containerStyle}>
            <Container maxWidth="lg">
                <Box sx={contentWrapperStyle}>
                    <Typography variant="h1" sx={headingStyle}>
                        Ready to Transform Your Workforce Management?
                    </Typography>

                    <Typography variant="body1" sx={bodyStyle}>
                        Join hundreds of businesses using RONO HUB to streamline operations and scale faster.
                    </Typography>

                    <Button variant="contained" sx={buttonStyle}>
                        Contact Us
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;