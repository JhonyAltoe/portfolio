import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import arma1911 from '../images/1911.jpg'


export default function Profile() {
  return(
    <Box component="section" sx={ { bgcolor: 'primary.main', pt: 4, pb: 12  } }>
      <Typography
        variant="h2"
        component="h2"
        color="primary.contrast"
      >
        Front-end developer
      </Typography>
      <Container sx={ { display: 'flex', mt: 8, justifyContent: 'space-between' } }>
        <Box sx={ { heigth: '100%', width: '50%', display: 'flex', flexDirection: 'column' } }>
          <Typography
            variant='h1'
            component='h1'
            color='primary.contrast'
            sx={ { mb: '60px' } }
          >
            Hey,
            <br />
            I'm Jhony Mike!
          </Typography>
          <Typography
            variant='p'
            component='div'
            color='primary.contrast'
          >
            Minha frase curta, ta aqui mano!
          </Typography>
        </Box>
        <img src={arma1911} alt="Arma 1911" style={ { maxWidth: '300px' } } />
      </Container>
    </Box>
  );
}