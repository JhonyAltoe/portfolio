import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';

export default function Component() {
  return (
    <Box sx={ { height: '100vh', bgcolor: 'background.main' } }>
      <Header />
    </Box>
  );
}