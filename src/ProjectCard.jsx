import React from 'react';
import { Box, Chip, Paper, Typography } from '@mui/material';
import MarkdownRenderer from './MarkdownRenderer';
import './ProjectCard.css';

const SlideShowContainer = ({ images }) => {
  const duppedImages = [...images, ...images];

  return (
    <Box className="projectcard-slideshow-container">
      <Box className="projectcard-slideshow-track">
        {duppedImages.map((image, index) => {
          const extension = image.split('.').pop().toLowerCase();
          const isVideo = ['webm', 'mp4'].includes(extension);
          return (
            <Box
              key={index}
              className="projectcard-slideshow-track-image-container"
            >
              {isVideo ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="projectcard-slideshow-video"
                >
                  <source src={image} type={`video/${extension}`} />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <>
                  <img src={image} alt={`Slide ${index}`} />
                </>
              )}
              <div className="projectcard-slideshow-gradient" />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

const ProjectCard = ({
  title,
  descriptionUrl,
  tags,
  images,
  perspectiveEnabled,
  flipped,
}) => {
  return (
    <div
      style={{
        perspective: '800px',
        perspectiveOrigin: 'center center',
      }}
    >
      <Paper
        className="projectcard-container"
        variant="outlined"
        sx={
          false
            ? {
                transform: flipped ? 'rotateY(5deg)' : 'rotateY(-5deg)',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.3s ease',
              }
            : {}
        }
      >
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
    </div>
  );
};

export default ProjectCard;
