import React from 'react';
import { Box, Paper, Typography, useTheme } from '@mui/material';

export default function SpeechBubble({
  children,
  side = 'left', // "left" or "right"
}) {
  const isRight = side === 'right';
  const theme = useTheme();

  const bubbleBg = theme.palette.background.paper;
  const bubbleColor = theme.palette.text.primary;
  const bubbleAccent = theme.palette.primary.main;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems={isRight ? 'flex-end' : 'flex-start'}
      gap={1}
      maxWidth="100%"
    >
      <Paper
        elevation={4}
        sx={{
          position: 'absolute',
          zIndex: 10,
          top: '-100px',
          left: '30px',
          bgcolor: bubbleBg,
          color: bubbleColor,
          border: `2px solid ${bubbleAccent}`,
          borderRadius: 2,
          px: 2,
          py: 1.5,
          lineHeight: 1.5,
          maxWidth: '60%',
          alignSelf: isRight ? 'flex-end' : 'flex-start',
          marginLeft: isRight ? 'auto' : 0,
          marginRight: !isRight ? 'auto' : 0,

          // Tail
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            [isRight ? 'right' : 'left']: -25,
            borderWidth: isRight ? '5px 25px 15px 0' : '10px 20px 10px 0',
            borderStyle: 'solid',
            borderColor: isRight
              ? `transparent transparent ${bubbleAccent} transparent`
              : `transparent ${bubbleAccent} transparent transparent`,
          },
        }}
      >
        <Typography variant="body1">{children}</Typography>
      </Paper>
    </Box>
  );
}
