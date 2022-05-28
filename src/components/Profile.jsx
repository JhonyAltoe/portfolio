import React from 'react';
import { Typography, Box } from '@mui/material';


export default function Profile() {
  return(
    <Box component="section" sx={ { bgcolor: 'primary.main' } }>
      <Typography
        variant="h2"
        component="h2"
        color="primary.contrast"
      >
        Front web developer
      </Typography>
    </Box>
  );
}