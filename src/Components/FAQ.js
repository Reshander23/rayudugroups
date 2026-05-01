import React, { useState } from 'react';

import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {

  // NO ACCORDION OPEN INITIALLY
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      id: 'panel1',
      question: 'What is RONO HUB?',
      answer:
        'Discover how AI is reshaping hiring with faster screening, smarter matching, and better candidate experiences.'
    },

    {
      id: 'panel2',
      question: 'How does RONO Recruiter work?',
      answer:
        'RONO Recruiter helps companies manage hiring workflows, candidate tracking, interview scheduling, and recruitment automation efficiently.'
    },

    {
      id: 'panel3',
      question: 'Is RONO HRMS cloud-based?',
      answer:
        'Yes, RONO HRMS is fully cloud-based and accessible securely from anywhere at any time.'
    },

    {
      id: 'panel4',
      question: 'Can companies manage training using RONO LMS?',
      answer:
        'Yes, RONO LMS enables companies to manage employee learning, training modules, certifications, and assessments in one platform.'
    },

    {
      id: 'panel5',
      question: 'Is RONO HUB suitable for startups?',
      answer:
        'Absolutely. RONO HUB is scalable and designed for startups, SMEs, and enterprise-level organizations.'
    }
  ];

  return (

    <Box
      sx={{
        maxWidth: { xs: '100%', md: 1200 },

        mx: 'auto',

        px: { xs: 2, md: 3 },

        py: { xs: 3, md: 4 },

        width: '100%',

        pt: { xs: '40px', md: '86px' },

        pr: { xs: '20px', md: '60px' },

        pb: { xs: '40px', md: '86px' },

        pl: { xs: '20px', md: '60px' },
      }}
    >

      <Box
        sx={{
          display: 'flex',

          flexDirection: {
            xs: 'column',
            md: 'row',
          },

          gap: {
            xs: 5,
            md: '50px',
          },

          alignItems: 'center',
        }}
      >

        {/* LEFT SIDE */}
        <Box
          sx={{
            flex: 1,

            maxWidth: {
              xs: '100%',
              md: 450,
            },

            mt: {
              xs: 2,
              md: 4,
            },

            textAlign: {
              xs: 'center',
              md: 'left',
            },
          }}
        >

          {/* HEADING */}
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 500,

              fontSize: {
                xs: 32,
                md: 48,
              },

              lineHeight: 1.2,

              color: '#000',

              mb: 2,
            }}
          >
            Frequently Asked Questions
          </Typography>

          {/* DESCRIPTION */}
          <Typography
            variant="body1"
            sx={{
              fontSize: 14,

              lineHeight: 1.6,

              color: '#666',
            }}
          >
            Find quick answers to common questions about RONO HUB,
            its features, and how it helps streamline workforce management.
          </Typography>

        </Box>

        {/* RIGHT SIDE - FAQ */}
        <Box
          sx={{
            flex: {
              xs: 1,
              md: 2,
            },

            width: '100%',

            maxWidth: {
              xs: '100%',
              md: 650,
            },
          }}
        >

          {faqData.map((item) => (

            <Accordion
              key={item.id}

              expanded={expanded === item.id}

              onChange={handleChange(item.id)}

              sx={{
                mb: {
                  xs: 1.5,
                  md: 2,
                },

                border:
                  expanded === item.id
                    ? '2px solid #FF6B35'
                    : '1px solid #E0E0E0',

                borderRadius: '12px !important',

                boxShadow:
                  expanded === item.id
                    ? '0 4px 12px rgba(255, 107, 53, 0.15)'
                    : 'none',

                overflow: 'hidden',

                '&:before': {
                  display: 'none',
                },
              }}
            >

              {/* QUESTION */}
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color:
                        expanded === item.id
                          ? '#FF6B35'
                          : '#666',
                    }}
                  />
                }

                sx={{
                  fontSize: 14,

                  fontWeight: 500,

                  color:
                    expanded === item.id
                      ? '#FF6B35'
                      : '#000',

                  minHeight: 60,

                  '& .MuiAccordionSummary-content': {
                    margin: '12px 0',
                  },
                }}
              >
                {item.question}
              </AccordionSummary>

              {/* ANSWER */}
              <AccordionDetails
                sx={{
                  fontSize: 14,

                  lineHeight: 1.8,

                  color: '#666',

                  paddingTop: 0,

                  paddingBottom: 3,
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