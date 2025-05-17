import React, { useEffect } from 'react';
import { Box, Chip, Paper, Typography } from '@mui/material';
import MarkdownRenderer from './MarkdownRenderer';
import './ProjectCard.css';

const SlideShowContainer = ({ images }) => {
  const duppedImages = [...images, ...images];

  return (
    <Box className="projectcard-slideshow-container">
      <Box className="projectcard-slideshow-track">
        {duppedImages.map((image, index) => (
          <Box
            key={index}
            className="projectcard-slideshow-track-image-container"
          >
            <img src={image} />
            <div className="projectcard-slideshow-gradient" />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const ProjectCard = ({ title, descriptionUrl, tags, images }) => {
  // TODO: Add auto-scrolling images to the image pane.
  // TODO: Use Skeleton component for wrapping images.
  // TODO: Use accent color for the tech stack so that it stands out more use MUI <Chip icon={<img src="link">}>FOO</Chip>

  return (
    <Paper className="projectcard-container" variant="outlined">
      <SlideShowContainer images={images} />
      <Box className="projectcard-content">
        <Box className="projectcard-description">
          <Typography variant="h6" component="span">
            {title}
          </Typography>
          <MarkdownRenderer url={descriptionUrl} />
        </Box>
        <Box className="projectcard-tags-container">
          {tags.map((tag, index) => (
            <Chip key={index} label={tag} color="primary" />
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default ProjectCard;
