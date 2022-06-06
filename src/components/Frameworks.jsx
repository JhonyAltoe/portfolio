import React from 'react';
import { Typography, Box, Container, useTheme } from '@mui/material';
import Card from './BasicCard';


import { SiJavascript, SiHtml5, SiReact, SiDocker, SiCss3, SiMysql, SiMaterialui,
  SiJest, SiSass, SiNodedotjs, SiRedux, SiGit, SiGithub, SiStyledcomponents } from 'react-icons/si';


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
  { icon: <SiStyledcomponents />, text: 'Styled Component' },
];

export default function Frameworks() {
  const theme = useTheme();

  return(
    <Box sx={ { bgcolor: 'primary.light', pb: 8, pt: 4 } }>
      <Typography
          variant="h3"
          component="h3"
          sx={ { color: 'primary.contrastText', fontWeight: 700, fontFamily: 'monospace', letterSpacing: '.3rem', textAlign: 'center' } }
        >
          FrameWorks
      </Typography>
      <Typography
        variant="p"
        component="p"
        my={ theme.spacing(2) }
        sx={ { color: 'primary.contrastText', fontFamily: 'monospace', textAlign: 'center' } }
      >
        These are my favorites frameworks:
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