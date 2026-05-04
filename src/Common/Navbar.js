import React, { useState } from 'react';
import { Box, Typography, Container, Button, IconButton, Popover, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import FindInPageOutlinedIcon from '@mui/icons-material/FindInPageOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();

  const [productsAnchorEl, setProductsAnchorEl] = useState(null);
  const [resourcesAnchorEl, setResourcesAnchorEl] = useState(null);

  const handleProductsClick = (event) => {
    setProductsAnchorEl(event.currentTarget);
  };

  const handleProductsClose = () => {
    setProductsAnchorEl(null);
  };

  const handleResourcesClick = (event) => {
    setResourcesAnchorEl(event.currentTarget);
  };

  const handleResourcesClose = () => {
    setResourcesAnchorEl(null);
  };

  const openProducts = Boolean(productsAnchorEl);
  const openResources = Boolean(resourcesAnchorEl);

  const ProductItem = ({ icon, title }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', p: 1.5, cursor: 'pointer', borderRadius: '8px', '&:hover': { bgcolor: '#f5f5f5' } }}>
      <Box sx={{ 
        width: 40, height: 40, borderRadius: '8px', border: '1px solid #FF8A65', 
        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', mr: 2 
      }}>
        {icon}
      </Box>
      <Typography sx={{ fontWeight: 500, fontSize: '14px', flex: 1, fontFamily: 'RM Neue' }}>{title}</Typography>
      <ChevronRightIcon sx={{ fontSize: 18, color: '#000' }} />
    </Box>
  );
  // Style for main navbar container
  const navbarStyle = {
    // backgroundColor: '#fff',
    // position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  // Style for the content container
  const contentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    py: 2,
    px: { xs: 2, md: 3 },
  };

  // Style for navigation links
  const linkStyle = {
    fontSize: 16,
    fontWeight: 500,
    color: '#000',
    cursor: 'pointer',
    padding: '8px 16px',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  };

  // Style for dropdown items
  const dropdownStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    cursor: 'pointer',
    color: '#000',
    fontWeight: 500,
    fontSize: 16,
    padding: '8px 16px',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  };

  // Style for the contact button
  const buttonStyle = {
    background: 'linear-gradient(98.76deg, #3C60B6 -45.06%, #3C60B6 34.8%, #4EB2CE 114.24%)',
    color: '#fff',
    textTransform: 'none',
    fontWeight: 500,
    px: 3,
    py: 1,
    borderRadius: '50px',
    '&:hover': {
      opacity: 0.9,
    },
  };

  return (
    <Box sx={navbarStyle}>
      <Container maxWidth="xl">
        <Box sx={contentStyle}>

          {/* Left side - Logo and brand name */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              component="img"
              src={require('../Assets/Logo.png')}
              alt="RONO Logo"
              onClick={() => navigate('/')}
              sx={{
                width: '127px',
                height: '33.14px',
                display: 'block',
                opacity: 1,
                cursor: 'pointer'
              }}
            />
          </Box>

          {/* Middle - Navigation links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            <Typography sx={linkStyle} onClick={() => navigate('/about')}>About us</Typography>

            <Box sx={dropdownStyle} onClick={handleProductsClick}>
              Products
              <KeyboardArrowDownIcon sx={{ fontSize: 20, transform: openProducts ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </Box>

            <Popover
              open={openProducts}
              anchorEl={productsAnchorEl}
              onClose={handleProductsClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              PaperProps={{
                sx: {
                  mt: 2,
                  borderRadius: '16px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                  width: '900px', // Wider to accommodate 3 columns of products
                  p: 3,
                  overflow: 'hidden'
                }
              }}
            >
              <Grid container spacing={4}>
                {/* Left Side: Product Links */}
                <Grid item xs={8}>
                  <Grid container spacing={2}>
                    
                    {/* Column 1: First 3 items */}
                    <Grid item xs={4}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <ProductItem icon={<FindInPageOutlinedIcon />} title="RONO Recruiter" />
                        <ProductItem icon={<ManageAccountsOutlinedIcon />} title="RONO HRMS" />
                        <ProductItem icon={<WorkOutlineOutlinedIcon />} title="RONO Jobs" />
                      </Box>
                    </Grid>

                    {/* Column 2: Next 2 items */}
                    <Grid item xs={4}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <ProductItem icon={<MenuBookOutlinedIcon />} title="RONO LMS" />
                        <ProductItem icon={<LocalShippingOutlinedIcon />} title="RONO LR" />
                      </Box>
                    </Grid>

                    {/* Column 3: Next 2 items (Placeholders for future products) */}
                    <Grid item xs={4}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {/* Add next 2 products here when ready */}
                      </Box>
                    </Grid>

                  </Grid>
                </Grid>

                {/* Right Side: CTA Buttons */}
                <Grid item xs={4}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%', justifyContent: 'center' }}>
                    
                    {/* Try Live Demo Button */}
                    <Box sx={{
                      background: 'linear-gradient(98.76deg, #3C60B6 -45.06%, #4EB2CE 114.24%)',
                      borderRadius: '12px',
                      p: 2.5,
                      color: '#fff',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': { opacity: 0.95 }
                    }}>
                      <Typography sx={{ fontFamily: 'RM Neue', fontWeight: 600, fontSize: '18px', mb: 1 }}>
                        Try Live Demo
                      </Typography>
                      <Typography sx={{ fontFamily: 'RM Neue', fontSize: '12px', opacity: 0.9 }}>
                        Call to get our demo at your place
                      </Typography>
                      <ArrowOutwardIcon sx={{ position: 'absolute', top: 16, right: 16, fontSize: 20 }} />
                    </Box>

                    {/* Feature List Button */}
                    <Box sx={{
                      background: 'linear-gradient(98.76deg, #FF5E3A -45.06%, #FFA800 114.24%)',
                      borderRadius: '12px',
                      p: 2.5,
                      color: '#fff',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': { opacity: 0.95 }
                    }}>
                      <Typography sx={{ fontFamily: 'RM Neue', fontWeight: 600, fontSize: '18px', mb: 1 }}>
                        Feature List
                      </Typography>
                      <Typography sx={{ fontFamily: 'RM Neue', fontSize: '12px', opacity: 0.9 }}>
                        Click to know feature List
                      </Typography>
                      <ArrowOutwardIcon sx={{ position: 'absolute', top: 16, right: 16, fontSize: 20 }} />
                    </Box>

                  </Box>
                </Grid>
              </Grid>
            </Popover>

            <Box sx={dropdownStyle} onClick={handleResourcesClick}>
              Resources
              <KeyboardArrowDownIcon sx={{ fontSize: 20, transform: openResources ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </Box>

            <Popover
              open={openResources}
              anchorEl={resourcesAnchorEl}
              onClose={handleResourcesClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              PaperProps={{
                sx: {
                  mt: 2,
                  borderRadius: '12px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                  width: '200px',
                  p: 1,
                  overflow: 'hidden'
                }
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    p: 1.5, 
                    cursor: 'pointer', 
                    borderRadius: '8px', 
                    '&:hover': { bgcolor: '#f5f5f5' },
                    fontFamily: 'RM Neue',
                    fontSize: '14px'
                  }}
                  onClick={() => { navigate('/blogs'); handleResourcesClose(); }}
                >
                  Blogs
                </Box>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    p: 1.5, 
                    cursor: 'pointer', 
                    borderRadius: '8px', 
                    '&:hover': { bgcolor: '#f5f5f5' },
                    fontFamily: 'RM Neue',
                    fontSize: '14px'
                  }}
                  onClick={() => { navigate('/news'); handleResourcesClose(); }}
                >
                  News
                </Box>
              </Box>
            </Popover>
          </Box>

          {/* Right side - Search and contact */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton sx={{ color: '#000', '&:hover': { backgroundColor: '#f5f5f5' } }}>
              <SearchIcon />
            </IconButton>

            <Button variant="contained" sx={buttonStyle} onClick={() => navigate('/contact')}>
              Contact Us
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;