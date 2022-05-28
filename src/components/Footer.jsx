import React from 'react';
import { Typography, Box } from '@mui/material';


export default function Footer() {
  return(
    <Box sx={ { bgcolor: 'primary.light' } }>
      <Typography
        variant="h2"
        component="h2"
        color="primary.contrast"
      >
        Footer
      </Typography>
    </Box>
  );
}