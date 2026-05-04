import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

import BlogdetailsImg from "../../Assets/Blogdetailsimg.png";
import InsightImg1 from "../../Assets/Insight img1.png";
import Contact from "../../Common/Contactdetails";

const relatedBlogs = [
  {
    id: 1,
    image: InsightImg1,
    title: "How AI is Transforming Recruitment",
    description:
      "Discover how AI is reshaping hiring with faster screening, smarter matching, and better candidate experiences.",
  },
  {
    id: 2,
    image: InsightImg1,
    title: "How AI is Transforming Recruitment",
    description:
      "Discover how AI is reshaping hiring with faster screening, smarter matching, and better candidate experiences.",
  },
];

const contentSections = [
  {
    title: "How AI is Transforming Recruitment",
    content:
      "In a fast-moving digital landscape, businesses and individuals don’t just need more tools—they need the right ones. At Ronohub, the focus is simple: create solutions that solve real problems with clarity, usability, and purpose. Every product is built with intention, ensuring it delivers value where it truly matters.",
  },
  {
    title: "Understanding the Problem First",
    content:
      "Before building anything, the priority is understanding the challenge. Whether it’s streamlining learning processes, improving transportation workflows, or connecting people to better opportunities, each solution begins with a clear problem statement. This approach ensures that every product is not just functional, but meaningful.",
  },
  {
    title: "Designing for Simplicity",
    content:
      "Complex systems often lead to confusion and inefficiency. That’s why simplicity sits at the core of every Ronohub product. Clean interfaces, intuitive interactions, and focused features allow users to achieve more with less effort. The goal is not to add more — but to refine what truly matters.",
  },
  {
    title: "Built for Reliability",
    content:
      "In real-world applications, reliability is everything. Users depend on tools that perform consistently without friction. Ronohub products are designed to be stable, dependable, and ready for everyday use — whether for businesses managing operations or individuals organizing their daily tasks.",
  },
  {
    title: "Connecting Technology with Purpose",
    content:
      "Technology is powerful, but only when it serves a purpose. Each Ronohub solution bridges the gap between innovation and practical use. By aligning technology with real needs, the products become more than just tools — they become enablers of growth and efficiency.",
  },
  {
    title: "A Unified Philosophy",
    content:
      "While every product under Ronohub addresses a unique problem, they all share a common philosophy: clarity, usability, and trust. This consistency ensures that users always know what to expect — simple, reliable solutions that work.",
  },
];

const Blogdetails = () => {
  return (
    <Box
      sx={{
        bgcolor: "#F7F7F7",
        minHeight: "100vh",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          py: { xs: 5, md: 10 },
        }}
      >
        {/* TOP SECTION */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 6, md: 10 },
          }}
        >
          {/* CATEGORY */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              px: 3,
              py: 1,
              border: "1px solid #E7D58D",
              borderRadius: "30px",
              bgcolor: "#FFF8E1",
              mb: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#D6AE00",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Category Will Go Here
            </Typography>
          </Box>

          {/* HEADING */}
          <Typography
            sx={{
              fontSize: { xs: "34px", md: "58px" },
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#111",
              maxWidth: "950px",
              mx: "auto",
              mb: 3,
            }}
          >
            Designing Simplicity in a <br /> Complex World
          </Typography>

          {/* DATE */}
          <Typography
            sx={{
              color: "#777",
              fontSize: "16px",
              mb: 4,
            }}
          >
            13 June 2006
          </Typography>

          {/* DESCRIPTION */}
          <Typography
            sx={{
              maxWidth: "850px",
              mx: "auto",
              color: "#555",
              lineHeight: 1.9,
              fontSize: { xs: "15px", md: "18px" },
            }}
          >
            Explore how thoughtful design and purposeful tools can simplify
            everyday challenges, improve workflows, and create meaningful
            experiences for modern businesses and individuals.
          </Typography>
        </Box>

        {/* MAIN IMAGE */}
        <Box
          sx={{
            width: "100%",
            borderRadius: "28px",
            overflow: "hidden",
            mb: { xs: 6, md: 10 },
          }}
        >
          <img
            src={BlogdetailsImg}
            alt="Blog Banner"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>

        {/* CONTENT SECTION */}
        <Grid
          container
          spacing={5}
          alignItems="flex-start"
        >
          {/* LEFT SIDE */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Box>
              {contentSections.map((section, index) => (
                <Box
                  key={index}
                  sx={{
                    mb: 5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "24px", md: "28px" },
                      fontWeight: 700,
                      color: "#111",
                      mb: 2,
                      lineHeight: 1.3,
                    }}
                  >
                    {section.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#555",
                      lineHeight: 1.9,
                      fontSize: { xs: "15px", md: "16px" },
                    }}
                  >
                    {section.content}
                  </Typography>
                </Box>
              ))}

              {/* CONCLUSION */}
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "24px", md: "28px" },
                    fontWeight: 700,
                    color: "#111",
                    mb: 2,
                  }}
                >
                  Conclusion
                </Typography>

                <Typography
                  sx={{
                    color: "#555",
                    lineHeight: 1.9,
                    fontSize: { xs: "15px", md: "16px" },
                  }}
                >
                  Ronohub continues to grow as a digital brand focused on
                  impact. By staying grounded in real-world challenges and
                  designing with purpose, it aims to create tools that not only
                  solve problems but also improve the way people work and live.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Box
              sx={{
                position: { lg: "sticky" },
                top: "120px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "28px", md: "34px" },
                  fontWeight: 700,
                  color: "#111",
                  mb: 4,
                }}
              >
                Related Blogs
              </Typography>

              {relatedBlogs.map((blog) => (
                <Card
                  key={blog.id}
                  elevation={0}
                  sx={{
                    mb: 4,
                    borderRadius: "24px",
                    overflow: "hidden",
                    bgcolor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {/* IMAGE */}
                  <Box
                    sx={{
                      width: "100%",
                      height: { xs: "220px", md: "240px" },
                      borderRadius: "20px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </Box>

                  {/* CONTENT */}
                  <CardContent sx={{ px: 0 }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "20px", md: "24px" },
                        fontWeight: 700,
                        color: "#111",
                        lineHeight: 1.4,
                        mb: 1,
                      }}
                    >
                      {blog.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#666",
                        lineHeight: 1.8,
                        fontSize: "15px",
                      }}
                    >
                      {blog.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>

          </Grid>
        </Grid>
        {/* Contact Details Section */}
          <Box sx={{ mt: { xs: 12, md: 16 } }}>
            <Contact />
          </Box>
      </Container>
    </Box>
  );
};

export default Blogdetails;