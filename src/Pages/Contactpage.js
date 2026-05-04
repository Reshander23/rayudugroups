import React from 'react';
import { Box, Typography, Container, Grid, Paper, TextField, Button } from '@mui/material';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

const Contactpage = () => {

    const inputStyles = {
        bgcolor: '#fff',
        borderRadius: '8px',
        '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            '& fieldset': {
                borderColor: '#e0e0e0',
            },
            '&:hover fieldset': {
                borderColor: '#bdbdbd',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#FF8A65', // Using brand orange
            },
        },
        '& .MuiInputBase-input': {
            py: 1.5,
            px: 2,
            fontFamily: 'RM Neue',
            fontSize: '0.95rem'
        }
    };

    const labelStyle = {
        fontFamily: 'RM Neue',
        fontSize: '0.9rem',
        fontWeight: 500,
        mb: 1,
        color: '#333'
    };

    return (
        <Box sx={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', pb: 10 }}>
            {/* Background Gradient */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '-10%',
                    left: '-5%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(247, 206, 37, 0.2) 0%, rgba(255,255,255,0) 70%)',
                    zIndex: -1,
                }}
            />

            <Container maxWidth="xl" sx={{ pt: 12 }}>
                <Box sx={{ px: { xs: 2, md: 3 } }}>
                    <Grid container spacing={4} justifyContent="space-between" sx={{ flexDirection: { xs: 'column', md: 'row' }, flexWrap: { md: 'nowrap' } }}>

                        {/* Left Column - Contact Info */}
                        <Grid item xs={12} md={5}>
                            <Box sx={{ pr: { md: 4 } }}>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontFamily: 'RM Neue',
                                        fontWeight: 600,
                                        fontSize: { xs: '40px', md: '56px' },
                                        color: '#000',
                                        mb: 3,
                                        letterSpacing: '-1px'
                                    }}
                                >
                                    Contact Us
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontFamily: 'RM Neue',
                                        color: '#555',
                                        fontSize: '1.05rem',
                                        lineHeight: 1.6,
                                        mb: 6
                                    }}
                                >
                                    Connect with our team for product inquiries, service support, or partnership opportunities. We're committed to providing prompt and reliable assistance.
                                </Typography>

                                {/* Technical Support Box */}
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        borderRadius: '24px',
                                        border: '1px solid #eaeaea',
                                        bgcolor: '#ffffff',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontFamily: 'RM Neue',
                                            fontWeight: 600,
                                            fontSize: '24px',
                                            mb: 4
                                        }}
                                    >
                                        Technical Support
                                    </Typography>

                                    {/* Call Info */}
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
                                        <Box sx={{
                                            width: 48, height: 48, borderRadius: '12px', bgcolor: '#fff',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex',
                                            alignItems: 'center', justifyContent: 'center', mr: 3, flexShrink: 0
                                        }}>
                                            <SupportAgentOutlinedIcon sx={{ color: '#555' }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontFamily: 'RM Neue', fontWeight: 600, fontSize: '16px', mb: 0.5 }}>
                                                Call: 6 A.M. to 10 P.M. IST
                                            </Typography>
                                            <Typography sx={{ fontFamily: 'RM Neue', color: '#666', fontSize: '14px' }}>
                                                +91 12345 23454
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Email Info */}
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 5 }}>
                                        <Box sx={{
                                            width: 48, height: 48, borderRadius: '12px', bgcolor: '#fff',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex',
                                            alignItems: 'center', justifyContent: 'center', mr: 3, flexShrink: 0
                                        }}>
                                            <MailOutlinedIcon sx={{ color: '#555' }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontFamily: 'RM Neue', fontWeight: 600, fontSize: '16px', mb: 0.5 }}>
                                                Email: 24*7
                                            </Typography>
                                            <Typography sx={{ fontFamily: 'RM Neue', color: '#666', fontSize: '14px' }}>
                                                contact@ronohub.com
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Feature Request Button */}
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontFamily: 'RM Neue',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#4EB2CE',
                                            borderColor: '#4EB2CE',
                                            px: 3,
                                            '&:hover': {
                                                borderColor: '#3C60B6',
                                                bgcolor: 'transparent'
                                            }
                                        }}
                                    >
                                        Feature Request
                                    </Button>
                                </Paper>
                            </Box>
                        </Grid>

                        {/* Right Column - Contact Form */}
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    bgcolor: '#f8f8f8',
                                    borderRadius: '32px',
                                    p: { xs: 4, md: 6 },
                                    mt: { md: -6 }, // Shifts the card up to match the design
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontFamily: 'RM Neue',
                                        fontWeight: 600,
                                        fontSize: { xs: '28px', md: '36px' },
                                        mb: 5,
                                        lineHeight: 1.3
                                    }}
                                >
                                    We'd Love To Hear<br />From You! Let's Get in Touch
                                </Typography>

                                <Grid container spacing={3} sx={{ flexGrow: 1 }}>
                                    <Grid item xs={12} sm={6}>
                                        <Typography sx={labelStyle}>Full Name</Typography>
                                        <TextField fullWidth placeholder="Your Full Name" sx={inputStyles} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography sx={labelStyle}>Company</Typography>
                                        <TextField fullWidth placeholder="Your Company" sx={inputStyles} />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Typography sx={labelStyle}>Email</Typography>
                                        <TextField fullWidth placeholder="Your Email" sx={inputStyles} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography sx={labelStyle}>Mobile No</Typography>
                                        <TextField fullWidth placeholder="Your Mobile No" sx={inputStyles} />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography sx={labelStyle}>Subject</Typography>
                                        <TextField fullWidth placeholder="Enter Subject" sx={inputStyles} />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography sx={labelStyle}>Message</Typography>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={4}
                                            placeholder="Write Message Here"
                                            sx={{
                                                ...inputStyles,
                                                '& .MuiInputBase-root': { p: 0 },
                                                '& .MuiInputBase-input': { p: 2, fontFamily: 'RM Neue', fontSize: '0.95rem' }
                                            }}
                                        />
                                    </Grid>
                                </Grid>

                                {/* Button moved outside the grid to push it to the bottom */}
                                <Box sx={{ mt: { xs: 4, md: 'auto' }, pt: 4 }}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            fontFamily: 'RM Neue',
                                            background: 'linear-gradient(98.76deg, #3C60B6 -45.06%, #4EB2CE 114.24%)',
                                            color: '#fff',
                                            textTransform: 'none',
                                            px: 4,
                                            py: 1.5,
                                            borderRadius: '50px',
                                            fontSize: '16px',
                                            fontWeight: 500,
                                            boxShadow: 'none',
                                            '&:hover': {
                                                boxShadow: '0 4px 12px rgba(60, 96, 182, 0.3)'
                                            }
                                        }}
                                    >
                                        Send Enquiry
                                    </Button>
                                </Box>

                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Contactpage;
