import React from 'react';
import { useState, useEffect } from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import {
  Avatar,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ProjectCard from './ProjectCard';
import projects from './projects.json';

const PROJECTS_URL =
  'https://jfalvarez-portfolio-assets.s3.us-east-2.amazonaws.com/projects.json';

const ProjectCardTimeline = () => {
  // TODO: Use Timeline component to show the date of when you did project.
  // CONSIDER: Should the timeline sort projects based on year?
  // better projects should be highlighted at the top though?
  const isNarrowScreen = useMediaQuery('(max-width: 1550px)');
  const isReallySmall = useMediaQuery('(max-width: 430px)');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (!PROJECTS_URL) return;
    fetch(PROJECTS_URL)
      .then((res) => res.json())
      .then((data) => {
        // sort in order of year
        const sorted = data.sort((a, b) => b.year - a.year);
        setProjects(sorted);
      })
      .catch(console.error);
  }, []);

  return (
    /* something */
    <Timeline
      position={isNarrowScreen ? 'right' : 'alternate'}
      sx={
        isNarrowScreen
          ? {
              alignItems: 'end',
              marginRight: 'clamp(10px, 10px, 20vw)',
            }
          : {}
      }
    >
      {projects.map((project, index) => (
        <TimelineItem key={index}>
          {!isReallySmall ? (
            <TimelineOppositeContent
              sx={{
                textAlign: 'right',
                pr: 2,
                m: 'auto 0',
              }}
              align="center"
              justifyContent="flex-end"
              variant="body2"
              color="text.secondary"
            >
              {project.year}
            </TimelineOppositeContent>
          ) : (
            <></>
          )}
          {/*Here we conditionally render a <TimelineConnector/> component 
            because want to maintain equal spacing between timeline items
            but importantly head and tail should not be visible*/}
          <TimelineSeparator>
            {index !== 0 ? (
              <TimelineConnector />
            ) : (
              <TimelineConnector sx={{ visibility: 'hidden' }} />
            )}
            <TimelineDot color="info" sx={{ bgcolor: 'secondary.main' }}>
              <Avatar
                variant="circular"
                sx={{ bgcolor: 'secondary.main', padding: '4px' }}
                alt={project.title.charAt(0)}
                src={project.icon}
              />
            </TimelineDot>
            {isReallySmall ? (
              <Typography sx={{ paddingBottom: '8px' }}>
                {project.year}
              </Typography>
            ) : (
              <></>
            )}
            {index !== projects.length - 1 ? (
              <TimelineConnector />
            ) : (
              <TimelineConnector sx={{ visibility: 'hidden' }} />
            )}
          </TimelineSeparator>

          <TimelineContent
            sx={
              isNarrowScreen
                ? {
                    marginBottom: '40px',
                    paddingRight: '0px',
                  }
                : {
                    marginBottom: '40px',
                  }
            }
          >
            <Box
              sx={{
                maxWidth: '700px',
                minWidth: '280px',
                width: '50vw',
                ml: index % 2 === 1 ? 'auto' : 0,
                mr: index % 2 !== 1 ? 'auto' : 0,
                textAlign: 'left !important',
              }}
            >
              <ProjectCard
                title={project.title}
                descriptionUrl={project.descriptionUrl}
                tags={project.tags}
                images={project.images}
                perspectiveEnabled={!isReallySmall}
                flipped={index % 2 === 1 && !isNarrowScreen}
              />
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ProjectCardTimeline;
