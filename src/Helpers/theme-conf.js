import shadows from "@mui/material/styles/shadows";
import { typography } from "@mui/system";

const lightTheme = () => ({ mode: 'dark' });
const darkTheme = () => ({
  primary: {
    main: '#18181b',
    light: '#3e3e42',
    dark: '#000',
    contrast: '#ffffff',
  },
  secondary: {
    main: '#9256ed',
    light: '#c785ff',
    dark: '#1a0030',
    contrast: '#000000',
  },
  background: {
    main: '#1a0030',
  },
});

const getDesignTokens = (mode) => {
  return {
  palette:  {
    ... (mode === 'dark' ? darkTheme() : lightTheme()),
  },
  shadows: {
    ...shadows,
  },
  typography: {
    ...typography,
    logo: {
      mr: 2,
      display: { xs: 'none', md: 'flex' },
      fontFamily: 'monospace',
      fontWeight: 700,
      fontSize: '20px',
      letterSpacing: '.3rem',
      textDecoration: 'none',
    },
    h1: {
      fontWeight: 700,
      fontFamily: 'monospace',
      letterSpacing: '.3rem',
      fontSize: '42px'
    },
    h2: {
      textAlign: 'center',
      fontWeight: 700,
      fontFamily: 'monospace',
      letterSpacing: '.3rem',
      fontSize: '24px'
    },
  },
}};

export default getDesignTokens;
