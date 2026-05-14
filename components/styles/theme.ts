import { Roboto } from '@next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#6366f1', // Indigo 500
        light: '#818cf8',
        dark: '#4f46e5',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#14b8a6', // Teal 500
        light: '#2dd4bf',
        dark: '#0d9488',
        contrastText: '#ffffff',
      },
      background: {
        default: '#0f172a', // Slate 900
        paper: '#1e293b',   // Slate 800
      },
      error: {
        main: '#ff6358',
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          html {
            scroll-behavior: smooth;
          }
        `,
      },
    },
  })
);

export default theme;
