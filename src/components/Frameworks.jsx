import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import Card from './BasicCard';


import { SiJavascript, SiHtml5, SiReact, SiDocker, SiCss3, SiMysql, SiMaterialui,
  SiJest, SiSass, SiNodedotjs, SiRedux, SiGit, SiGithub } from 'react-icons/si';


const techArr = [
  { icon: <SiJavascript />, text: 'JavaStript' },
  { icon: <SiHtml5 />, text: 'HTML' },
  { icon: <SiReact />, text: 'React' },
  { icon: <SiDocker />, text: 'Docker' },
  { icon: <SiCss3 />, text: 'CSS' },
  { icon: <SiMysql />, text: 'MySQL' },
  { icon: <SiMaterialui />, text: 'Material UI' },
  { icon: <SiJest />, text: 'Jest' },
  { icon: <SiSass />, text: 'Sass' },
  { icon: <SiNodedotjs />, text: 'Node.js' },
  { icon: <SiRedux />, text: 'Redux' },
  { icon: <SiGit />, text: 'Git' },
  { icon: <SiGithub />, text: 'GitHub' },
];

export default function Frameworks() {
  return(
    <Box sx={ { bgcolor: 'primary.light' } }>
      <Typography
        variant="h2"
        component="h2"
        color="primary.contrast"
      >
        Frameworks
      </Typography>
      <Container
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {techArr.map(({ icon, text }, index) => {
          return (<Card key={ index } text={ text }>{icon}</Card>);
        })}
      </Container>
    </Box>
  );
}