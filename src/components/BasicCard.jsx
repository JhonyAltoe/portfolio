import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';



export default function BasicCard({ children, text }) {
  return (
    <Card
      sx={ 
        {
          bgcolor: "primary.main",
          color: "primary.contrast",
          width: "150px",
          height: "150px",
          m: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          '&:hover': {
            color: 'secondary.main',
            boxShadow: '0px 0px 8px #9256ed'
          },
        }
      }
    >
      <CardContent sx={{ p: '10px' }}>
        <Typography sx={{ fontSize: '68px', lineHeight: 0 }}>
          {children}
        </Typography>
      </CardContent>
      <Box>
        <Typography sx={{ fontWeight: 700 }}>
          {text}
        </Typography>
      </Box>
    </Card>
  );
}
