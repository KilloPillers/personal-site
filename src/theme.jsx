// theme.js
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',  // Page background
      paper: '#1E1E1E',    // Cards, modals, etc.
    },
    text: {
      primary: '#E0E0E0',
      secondary: '#A0A0A0',
    },
    primary: {
      main: '#FD837B', // Accent (salmon color)
    },
    secondary: {
      main: '#02A07D', // Accent (some sort of green)
    },
    accent: {
      main: '#0B62FB', // Accent (some sor of light blue)
    },
    divider: '#2C2C2C',
    success: {
      main: '#66BB6A',
    },
    error: {
      main: '#EF5350',
    },
    warning: {
      main: '#FFA726',
    },
    info: {
      main: '#29B6F6',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default darkTheme;

