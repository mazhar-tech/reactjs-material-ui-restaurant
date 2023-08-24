import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: 'center', bgcolor: "#1A1A19", color: "white", p: 3 }}>

        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            '& svg:hover': {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: 'all 400ms'
            }
          }}>
          < TelegramIcon />
          <GitHubIcon />
          <TwitterIcon />
          <LinkedInIcon />
          <InstagramIcon />
          <FacebookIcon />
        </Box>

        <Typography
          variant='h5'
          sx={{
            '@media (max-width:600px)': {
              fontSize: '1rem'
            }
          }}
        >
          All Rights Reserved &copy; My Resturent
        </Typography>
      </Box >
    </>
  )
}

export default Footer