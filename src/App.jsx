import React from 'react';
import Content from './components/Content'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import getDesignTokens from './Helpers/theme-conf';

function App() {
  const theme = createTheme(getDesignTokens('dark'));
  return (
    <ThemeProvider theme={theme}>
      <Content />
    </ThemeProvider>
  );
}

export default App
