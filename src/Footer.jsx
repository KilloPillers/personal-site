import React from 'react';
import ContactForm from './ContactForm';
import { Box } from '@mui/material';
import './Footer.css';
import './Headings.css';

const Footer = () => {
  return (
    <Box className="footer-container">
      <Box sx={{ width: '30%' }}></Box>
      <ContactForm />
    </Box>
  );
};

export default Footer;
