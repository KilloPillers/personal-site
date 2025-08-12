import React from 'react';
import ContactForm from './ContactForm';
import { Box, Link, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import './Footer.css';
import './Headings.css';

const Footer = () => {
  return (
    <Box className="footer-container">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Box className="footer-content">
          {/* My name */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'left',
              gap: '10px',
            }}
          >
            <Typography variant="h3">Juan Alvarez</Typography>
            <Typography>
              @ {new Date().getFullYear()} All rights reserved.
            </Typography>
            <Typography>Based in California, USA</Typography>
          </Box>
          {/* Social Media Links */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'left',
              gap: '10px',
            }}
          >
            <Typography variant="h4">Follow Me</Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '5px',
              }}
            >
              <IconButton
                onClick={() => {
                  window.open('https://github.com/KilloPillers');
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                onClick={() => {
                  window.open(
                    'https://www.linkedin.com/in/juan-alvarez-83250b1b9/',
                  );
                }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
          {/* Contact */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'left',
              gap: '10px',
            }}
          >
            <Typography variant="h4">Contact</Typography>
            <Typography>juan@juan-alvarez.dev</Typography>
            <Link
              href="resume.pdf"
              underline="hover"
              component="a"
              download="resume.pdf"
            >
              Download Resume
            </Link>
          </Box>

          <ContactForm />
        </Box>
        <Box sx={{ alignSelf: 'left' }}>
          <Typography>
            Designed in Figma, built with React, hosted on GitHub Pages and
            Railway with ❤️.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
