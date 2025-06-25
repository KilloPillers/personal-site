import React from 'react';
import BannerImage from './BannerImage';
import './Banner.css';
import pfp from './pfp.jpg';
import { Avatar } from '@mui/material';

const Banner = () => {
  // TODO: Move pfp to be in the center of the div instead of the bottom.

  return (
    <div className="banner-container">
      <BannerImage />
      <div className="vignette-left" />
      <div className="vignette-right" />
      <div className="vignette-bottom" />
    </div>
  );
};

export default Banner;
