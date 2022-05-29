import React from 'react';
import Header from './Header';
import Profile from './Profile';
import Projetos from './Projects';
import Footer from './Footer';
import Frameworks from './Frameworks';
import { Box, Container } from '@mui/material';


export default function Content() {
  return (
    <Box sx={ { height: '100vh', bgcolor: 'secondary.dark', overflow: 'auto' } }>
      <Header />
      <Container maxWidth="xl">
        <Profile />
        <Frameworks />
        <Projetos />
        <Footer />
      </Container>
    </Box>
  );
}