import {
  Box,
  CssBaseline,
  Divider,
  GlobalStyles,
  ThemeProvider,
} from '@mui/material';
import './App.css';
import HeaderProfile from './HeaderProfile.jsx';
import Banner from './Banner.jsx';
import ProjectCardTimeline from './ProjectCardTimeline.jsx';
import darkTheme from './theme.jsx';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--mui-bg-paper': theme.palette.background.paper,
          },
        })}
      />
      <Box>
        <Banner />
        <HeaderProfile />
        <Divider />
        <ProjectCardTimeline />
      </Box>
    </ThemeProvider>
  );
};

export default App;
