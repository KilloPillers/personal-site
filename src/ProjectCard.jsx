import React from "react";
import { Box, Chip, Paper, Typography } from "@mui/material";
import "./ProjectCard.css"

const SlideShowContainer = ({ images }) => {
  const duppedImages = [...images, ...images]

  return (
    <Box className="projectcard-slideshow-container">
      <Box className="projectcard-slideshow-track">
        {duppedImages.map((image, index) => (
          <img key={index} src={image} style={{ height: '132px',  display: 'block'}}/>
        ))}
      </Box>
    </Box>
  )
}


const ProjectCard = ({ title, description, tags, images }) => {
  // TODO: Add auto-scrolling images to the image pane. 
  // TODO: Use Skeleton component for wrapping images.
  // TODO: Use accent color for the tech stack so that it stands out more use MUI <Chip icon={<img src="link">}>FOO</Chip>
  return (
    <Paper className="projectcard-container">
      <SlideShowContainer images={images}/>
      <Box className="projectcard-content">
        <Box className="projectcard-description">
          <Typography variant="h6" component="span">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </Box>
        <Box className="projectcard-tags-container">
          {tags.map((tag, index) => (
            <Chip key={index} label={tag} color="primary"/>
          ))}
        </Box>
      </Box>
    </Paper>
  ) 

}

export default ProjectCard
