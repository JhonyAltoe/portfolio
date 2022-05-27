import shadows from "@mui/material/styles/shadows";

const lightTheme = () => ({ mode: 'dark' });
const darkTheme = () => ({
  primary: {
    main: '#18181b',
    light: '#3e3e42',
    dark: '#000000',
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
    mode,
    ... (mode === 'dark' ? darkTheme() : lightTheme()),
  },
  shadows: {
    ...shadows,
    xablau: '0px -1px 5px 2px rgba(199,133,255,0.32)',
    
  },
  typography: {
    logo: {
      mr: 2,
      display: { xs: 'none', md: 'flex' },
      fontFamily: 'monospace',
      fontWeight: 700,
      fontSize: '20px',
      letterSpacing: '.3rem',
      textDecoration: 'none',
    },
  },
}};

export default getDesignTokens;
