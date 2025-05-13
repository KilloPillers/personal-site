import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import KeyLoggerGraph from "./KeyLoggerGraph";
import './HeaderProfile.css';

const HeaderProfile = () => {
  // TODO: close gap between hero-graph and about


  return (
    <Box className="content">
      <Box className="hero-graph">
        <Box>
          <Paper className="hero">
            <Typography variant="h5">Juan Alvarez</Typography>
            <Typography variant="subtitle2">Full-Stack Software Developer</Typography>
            <Typography variant="body2" align="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum justo augue, eu hendrerit lacus interdum ac. Proin id diam aliquam, lacinia mauris at, blandit enim. Nullam velit ipsum, varius eu urna ac, tincidunt pulvinar diam. In eleifend efficitur cursus. Mauris luctus viverra aliquam. Cras luctus venenatis vulputate. Nam molestie.
            </Typography>
          </Paper>
        </Box>
        <Box className="graph">
          <KeyLoggerGraph />
        </Box>
      </Box>
      <Box className="about-container">
        <Paper className="about">
          <Typography variant="h5">About Me</Typography>
          <Typography variant="body2" align="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae elit et nunc elementum mollis at a mi. Pellentesque ut mollis sapien. Nunc ut urna eleifend mauris semper semper. Pellentesque a felis luctus, luctus purus id, venenatis mauris. Mauris eget consectetur eros, vel vehicula ante. Pellentesque laoreet nunc eu ipsum sollicitudin sodales. Curabitur quis imperdiet eros, id ornare ipsum. Integer ac arcu a est rhoncus aliquet. Duis vestibulum augue vulputate, varius ipsum nec, sagittis nibh.

            auris pulvinar hendrerit ante. Maecenas nisi nisi, consectetur vel congue ac, luctus quis neque. Praesent vitae elit ac dolor pretium laoreet. Pellentesque placerat dolor non suscipit gravida. In sed condimentum elit, accumsan finibus augue. Mauris sit amet porttitor enim, sed lobortis diam. Phasellus varius, urna ac fringilla porttitor, elit nibh rutrum justo, sed blandit leo risus elementum dui. Vestibulum gravida sollicitudin volutpat. Nullam nisl ex, sodales ac lacinia sed, rutrum in ante. Donec quis elit ac sem volutpat fermentum. Ut pulvinar ornare velit id cursus.
          </Typography>
        </Paper>
      </Box>
    </Box>
  )
}

export default HeaderProfile
