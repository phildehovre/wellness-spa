import { createTheme } from '@mui/material/styles';
import '@fontsource/cormorant-garamond';
import '@fontsource/roboto';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#6B8E7B', // Soft sage green
      light: '#8BA99A',
      dark: '#4D725E',
    },
    secondary: {
      main: '#B7C4CF', // Soft blue-grey
      light: '#D8E1E8',
      dark: '#96A3AD',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#5D6D7E',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
      fontSize: '3.5rem',
    },
    h2: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
      fontSize: '2.8rem',
    },
    h3: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
      fontSize: '2.2rem',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '10px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        },
      },
    },
  },
}); 