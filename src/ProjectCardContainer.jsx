import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab"
import { Avatar, Typography, Box } from "@mui/material";
import ProjectCard from "./ProjectCard"; 
import projects from './projects.json';

const ProjectCardContainer = () => {
  // TODO: Use Timeline component to show the date of when you did project.
  // CONSIDER: Should the timeline sort projects based on year?
  // better projects should be highlighted at the top though? 
  

  return (
    /* something */
   <Timeline position="alternate">
      {projects.map((project, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{
              textAlign: 'right',
              pr: 2,
              m: 'auto 0' 
            }}
            align="center"
            justifyContent="flex-end"
            variant="body2"
            color="text.secondary"
          >
            {project.year}
          </TimelineOppositeContent>
          
          {/*Here we conditionally render a <TimelineConnector/> component 
            because want to maintain equal spacing between timeline items
            but importantly head and tail should not be visible*/
          }
          <TimelineSeparator> 
            {index !== 0 
            ? <TimelineConnector /> 
            : <TimelineConnector sx={{visibility: "hidden"}}/>
            }
            <TimelineDot color="primary" sx={{ bgcolor: 'secondary.main' }}>
              <Avatar sx={{bgcolor: 'secondary.main'}} alt={project.title.charAt(0)} src={project.icon}/>
            </TimelineDot>
            {index !== projects.length - 1 
            ? <TimelineConnector />
            : <TimelineConnector sx={{visibility: "hidden"}}/>
            }
          </TimelineSeparator>

          <TimelineContent>
            <Box sx={{  maxWidth: '600px', ml: index % 2 === 1 ? 'auto' : 0, mr: index % 2 !== 1 ? 'auto' : 0,  textAlign: 'left !important'}}>
              <ProjectCard title={project.title} description={project.description} tags={project.tags} images={project.images}/>
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>  )
}

export default ProjectCardContainer
