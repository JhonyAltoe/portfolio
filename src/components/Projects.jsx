import React from 'react';
import { Typography, Box } from '@mui/material';


export default function Projects() {
  return(
    <Box sx={ { bgcolor: 'primary.main' } }>
      <Typography
        variant="h2"
        component="h2"
        color="primary.contrast"
      >
        Projects
      </Typography>
    </Box>
  );
}