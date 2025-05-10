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
import { Avatar, Typography } from "@mui/material";
import projects from './projects.json';

const ProjectCardContainer = () => {
  // TODO: Use Timeline component to show the date of when you did project.
  // CONSIDER: Should the timeline sort projects based on year?
  // better projects should be highlighted at the top 
  // 

  return (
    /* something */
   <Timeline position="alternate">
      {projects.map((project, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
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

          <TimelineContent sx={{ py: '12px', px: 2, alignContent: "center", justifyContent: "flex-end" }}>
            <Typography variant="h6" component="span">
              {project.title}
            </Typography>
            <Typography>{project.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>  )
}

export default ProjectCardContainer
