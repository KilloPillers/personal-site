import { Box, CssBaseline, Divider, ThemeProvider } from '@mui/material';
import './App.css';
import HeaderProfile from './HeaderProfile.jsx'
import Banner from './Banner.jsx';
import ProjectCardContainer from './ProjectCardContainer.jsx';
import darkTheme from './theme.jsx';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Box>
        <Banner/>
        <HeaderProfile/>
        <Divider/>
        <ProjectCardContainer/>
      </Box>
    </ThemeProvider>
  );
};

export default App;
