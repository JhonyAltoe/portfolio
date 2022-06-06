import React from 'react';
import { Typography, Box, Link, useTheme } from '@mui/material';
import { RiGithubLine, RiWhatsappLine, RiLinkedinFill } from 'react-icons/ri';
import { SiMicrosoftoutlook } from 'react-icons/si';
import { whatsappURL, githubURL, emailURL, linkedinURL } from '../Helpers/urlContacts';

export default function Footer() {
  const theme = useTheme();
  return(
    <Box
      bgcolor="primary.dark"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      py={theme.spacing(1)}
    >
      <Box color="white">
        <Typography>
          Developed by: Jhony Mike Altoé
        </Typography>
      </Box>
      <Box fontSize={31} display="flex">
        <Link
          mx={theme.spacing(1)} href={githubURL}
          underline="none"
          color="white"
          display="flex"
          alignItems="center"
          target="_blank"
        >
          <RiGithubLine />
        </Link>
        <Link
          mx={theme.spacing(1)}
          href={whatsappURL}
          underline="none"
          color="white"
          display="flex"
          alignItems="center"
          target="_blank"
        >
          <RiWhatsappLine />
        </Link>
        <Link
          mx={theme.spacing(1)}
          href={emailURL}
          rel="noopener noreferrer"
          underline="none"
          color="white"
          display="flex"
          alignItems="center"
          target="_blank"
        >
          <SiMicrosoftoutlook />
        </Link>
        <Link
          mx={theme.spacing(1)}
          href={linkedinURL}
          underline="none"
          color="white"
          display="flex"
          alignItems="center"
          target="_blank"
        >
          <RiLinkedinFill />
        </Link>
      </Box>

    </Box>
  );
}