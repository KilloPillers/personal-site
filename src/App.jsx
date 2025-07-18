import {
  Box,
  CssBaseline,
  Divider,
  GlobalStyles,
  ThemeProvider,
  Typography,
} from '@mui/material';
import './App.css';
import HeaderProfile from './HeaderProfile.jsx';
import Banner from './Banner.jsx';
import ProjectCardTimeline from './ProjectCardTimeline.jsx';
import darkTheme from './theme.jsx';
import Footer from './Footer.jsx';

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
        <Divider
          textAlign="left"
          sx={{
            '&::before': {
              flex: '25%',
            },
            '&::after': {
              flex: '75%',
            },
            justifyItems: 'baseline',
            fontWeight: 'bold',
            marginLeft: '10%',
            marginRight: '10%',
          }}
        >
          <Typography variant="h2" component="h2" className="custom-heading">
            EXPERIENCE
          </Typography>
        </Divider>{' '}
        <ProjectCardTimeline />
        <Divider
          textAlign="left"
          sx={{
            '&::before': {
              flex: '25%',
            },
            '&::after': {
              flex: '75%',
            },
            justifyItems: 'baseline',
            fontWeight: 'bold',
            marginLeft: '10%',
            marginRight: '10%',
          }}
        >
          <Typography variant="h2" component="h2" className="custom-heading">
            CONTACT
          </Typography>
        </Divider>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
