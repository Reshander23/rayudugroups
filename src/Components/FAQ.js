import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      id: 'panel1',
      question: 'What is RONO HUB?',
      answer: 'Discover how AI is reshaping hiring with faster screening, smarter matching, and better candidate experiences.'
    },
    {
      id: 'panel2',
      question: 'How does RONO Recruiter work?'
    },
    {
      id: 'panel3',
      question: 'Is RONO HRMS cloud-based?'
    },
    {
      id: 'panel4',
      question: 'Can companies manage training using RONO LMS?'
    },
    {
      id: 'panel5',
      question: 'Is RONO HUB suitable for startups?'
    }
  ];

  return (
    <Box sx={{ 
        maxWidth: { xs: '100%', md: 1200 }, 
        mx: 'auto', 
        px: { xs: 2, md: 3 }, 
        py: { xs: 3, md: 4 },
        width: { xs: '100%', md: 1440 },
        height: { xs: 'auto', md: 656 },
        gap: { xs: '40px', md: '70px' },
        transform: 'rotate(0deg)',
        opacity: 1,
        pt: { xs: '40px', md: '86px' },
        pr: { xs: '20px', md: '60px' },
        pb: { xs: '40px', md: '86px' },
        pl: { xs: '20px', md: '60px' }
      }}>
      <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        {/* Left Side - Heading and Description */}
        <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: 450 }, mt: { xs: 2, md: 4 }, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography 
            variant="h2" 
            component="h1"
            sx={{ 
              fontWeight: 600,
              fontSize: { xs: 32, md: 48 },
              lineHeight: 1.2,
              color: '#000',
              mb: 1
            }}
          >
            Frequently Asked<br/> Questions
          </Typography>
          <Typography 
            variant="body1"
            sx={{ 
              fontSize: 16,
              lineHeight: 1.6,
              color: '#666'
            }}
          >
          Find quick answers to common questions about RONO HUB, its features, and how it helps streamline workforce management.
          </Typography>
        </Box>

        {/* Right Side - FAQ Accordion */}
        <Box sx={{ flex: { xs: 1, md: 2 }, maxWidth: { xs: '100%', md: 700 } }}>
          {faqData.map((item) => (
            <Accordion
              key={item.id}
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
              sx={{
                mb: { xs: 1.5, md: 2 },
                border: expanded === item.id ? '2px solid #FF6B35' : '1px solid #E0E0E0',
                borderRadius: expanded === item.id ? '12px' : '12px',
                boxShadow: expanded === item.id ? '0 4px 12px rgba(255, 107, 53, 0.15)' : 'none',
                '&:before': {
                  display: 'none'
                }
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: expanded === item.id ? '#FF6B35' : '#666' }} />}
                sx={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: expanded === item.id ? '#FF6B35' : '#000',
                  minHeight: 64,
                  '& .MuiAccordionSummary-content': {
                    margin: '16px 0'
                  }
                }}
              >
                {item.question}
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: '#666',
                  paddingTop: 0,
                  paddingBottom: 2
                }}
              >
                {item.answer}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FAQ;